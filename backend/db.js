// backend/db.js
// Pool de conexiones MySQL usando mysql2/promise
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const mysql = require('mysql2/promise');

const host = process.env.DB_HOST || 'srv1665.hstgr.io';
const port = parseInt(process.env.DB_PORT || '3306', 10);
const user = process.env.DB_USER || 'u683618217_admin';
const password = process.env.DB_PASSWORD !== undefined ? process.env.DB_PASSWORD : '!1szA*Lz';
const database = process.env.DB_NAME || 'u683618217_sostenibilidad';

const pool = mysql.createPool({
  host,
  port,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: '+00:00',
});

// Verificar la conexión al arrancar
pool.getConnection()
  .then(conn => {
    console.log(`✅ Conexión a MySQL establecida (${host}:${port}/${database}) con usuario ${user}`);
    conn.release();
  })
  .catch(err => {
    console.error('❌ Error al conectar con MySQL:', err.message);
    console.error('   Verifica las variables de entorno o archivo .env');
    process.exit(1);
  });

module.exports = pool;
