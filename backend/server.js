// backend/server.js
// Punto de entrada del servidor Express

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const diagnosticsRouter = require('./routes/diagnostics');
const authRouter = require('./routes/auth');

const app = express();
const PORT = parseInt(process.env.PORT || '3001', 10);

// ─── CORS ────────────────────────────────────────────────
const defaultOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://sostenibilidad.jarestrepo.com',
  'https://iso6001.jarestrepo.com',
  'https://api.jarestrepo.com',
];

const envOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',').map(o => o.trim())
  : [];

const allowedOrigins = Array.from(new Set([...defaultOrigins, ...envOrigins]));

app.use(cors({
  origin: (origin, callback) => {
    // Permitir requests sin origin (ej: Postman, cURL)
    if (!origin) return callback(null, true);

    const isAllowed = allowedOrigins.includes(origin) || origin.endsWith('.jarestrepo.com');
    if (isAllowed) {
      callback(null, true);
    } else {
      console.warn(`[CORS] Origen no explícito: ${origin}, permitiendo por fallback.`);
      callback(null, true);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'x-user-id'],
  credentials: true,
}));

app.options('*', cors());

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
