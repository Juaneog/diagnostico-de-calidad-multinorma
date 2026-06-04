// backend/db.js
// Pool de conexiones MySQL usando mysql2/promise
require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'diagnostico_calidad',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: '+00:00',
});

// Verificar la conexión al arrancar
pool.getConnection()
  .then(conn => {
    console.log(`✅ Conexión a MySQL establecida (${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME})`);
    conn.release();
  })
  .catch(err => {
    console.error('❌ Error al conectar con MySQL:', err.message);
    console.error('   Verifica las variables de entorno en backend/.env');
    process.exit(1);
  });

module.exports = pool;
