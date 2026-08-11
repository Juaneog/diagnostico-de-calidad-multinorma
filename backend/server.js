// backend/server.js
// Punto de entrada del servidor Express

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const diagnosticsRouter = require('./routes/diagnostics');
const authRouter = require('./routes/auth');

const app = express();
const PORT = parseInt(process.env.PORT || '3001', 10);

// ─── CORS Universal Middleware ───────────────────────────
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-user-id');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  next();
});

// ─── Body parsing ────────────────────────────────────────
// Límite aumentado a 20mb para acomodar chatHistories con metadata
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// ─── Health check ────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'diagnostico-calidad-backend',
  });
});

// ─── Routers ─────────────────────────────────────────────
app.use('/api/auth', authRouter);
app.use('/api', diagnosticsRouter);

// ─── Error handler global ────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error('Error no controlado:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// ─── Inicio ──────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Backend corriendo en http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health\n`);
});
