// backend/routes/auth.js
// Router Express para autenticación y registro de usuarios en MySQL

const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const pool = require('../db');

// Helper: Encriptar contraseña con PBKDF2
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

// Helper: Verificar contraseña contra el hash almacenado
function verifyPassword(password, storedCombined) {
  if (!storedCombined) return false;
  
  // Soporte de compatibilidad retroactiva si la contraseña era texto plano
  if (!storedCombined.includes(':')) {
    return password === storedCombined;
  }

  const [salt, storedHash] = storedCombined.split(':');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hash === storedHash;
}

// ─────────────────────────────────────────────────────────
// POST /api/auth/register
// Registro de un nuevo usuario en MySQL
// ─────────────────────────────────────────────────────────
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'El usuario y la contraseña son requeridos.' });
  }

  const cleanUsername = username.trim().toLowerCase();

  if (cleanUsername === 'user') {
    return res.status(400).json({ error: 'El nombre de usuario "user" está reservado.' });
  }

  try {
    // Verificar si el usuario ya existe
    const [existing] = await pool.execute(
      'SELECT id FROM users WHERE LOWER(username) = ?',
      [cleanUsername]
    );

    if (existing.length > 0) {
      return res.status(400).json({ error: 'El nombre de usuario ya se encuentra registrado.' });
    }

    const passwordHash = hashPassword(password);

    await pool.execute(
      'INSERT INTO users (username, password_hash) VALUES (?, ?)',
      [cleanUsername, passwordHash]
    );

    res.status(201).json({
      ok: true,
      user: { username: cleanUsername },
      message: 'Usuario registrado exitosamente en MySQL.',
    });
  } catch (err) {
    console.error('POST /api/auth/register error:', err);
    res.status(500).json({ error: 'Error al registrar el usuario en el servidor.' });
  }
});

// ─────────────────────────────────────────────────────────
// POST /api/auth/login
// Inicio de sesión y verificación contra MySQL
// ─────────────────────────────────────────────────────────
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Debe ingresar usuario y contraseña.' });
  }

  const cleanUsername = username.trim().toLowerCase();

  try {
    // Buscar en la tabla users de MySQL
    const [rows] = await pool.execute(
      'SELECT id, username, password_hash FROM users WHERE LOWER(username) = ?',
      [cleanUsername]
    );

    let isValid = false;
    let foundUser = null;

    if (rows.length > 0) {
      foundUser = rows[0];
      isValid = verifyPassword(password, foundUser.password_hash);
    }

    if (!isValid) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos.' });
    }

    res.json({
      ok: true,
      user: { username: foundUser.username },
    });
  } catch (err) {
    console.error('POST /api/auth/login error:', err);
    res.status(500).json({ error: 'Error al verificar las credenciales en el servidor.' });
  }
});

module.exports = router;
