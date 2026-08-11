// backend/routes/diagnostics.js
// Router Express con todos los endpoints de la API REST

const express = require('express');
const router = express.Router();
const pool = require('../db');

// ─────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────

/**
 * Construye un objeto ISavedDiagnostic completo a partir de las filas de DB.
 */
async function buildFullDiagnostic(conn, diagnosticRow) {
  const diagId = diagnosticRow.id;

  // Action plan
  const [apRows] = await conn.execute(
    'SELECT * FROM action_plans WHERE diagnostic_id = ?',
    [diagId]
  );
  const ap = apRows[0] || null;
  const actionPlan = ap
    ? {
        executiveSummary: ap.executive_summary,
        generalRecommendations: ap.general_recommendations,
        priorityActions: JSON.parse(ap.priority_actions || '[]'),
      }
    : null;

  // Checklist answers → objeto { [evidenceId]: status }
  const [caRows] = await conn.execute(
    'SELECT evidence_id, status FROM checklist_answers WHERE diagnostic_id = ?',
    [diagId]
  );
  const checklistAnswers = {};
  for (const row of caRows) checklistAnswers[row.evidence_id] = row.status;

  // Clause comments → objeto { [clauseId]: text }
  const [ccRows] = await conn.execute(
    'SELECT clause_id, comment_text FROM clause_comments WHERE diagnostic_id = ?',
    [diagId]
  );
  const comments = {};
  for (const row of ccRows) comments[row.clause_id] = row.comment_text || '';

  // Chat messages → objeto { [contextId]: IChatMessage[] }
  const [cmRows] = await conn.execute(
    'SELECT context_id, sender, message_text, file_name, file_mime_type FROM chat_messages WHERE diagnostic_id = ? ORDER BY id ASC',
    [diagId]
  );
  const chatHistories = {};
  for (const row of cmRows) {
    if (!chatHistories[row.context_id]) chatHistories[row.context_id] = [];
    const msg = { sender: row.sender, text: row.message_text || '' };
    if (row.file_name) {
      msg.file = { name: row.file_name, mimeType: row.file_mime_type || '', data: '' };
    }
    chatHistories[row.context_id].push(msg);
  }

  // Company (demographics)
  const [compRows] = await conn.execute(
    'SELECT * FROM companies WHERE company_id = ? AND standard = ?',
    [diagnosticRow.company_id, diagnosticRow.standard]
  );
  const comp = compRows[0] || {};

  const demographics = {
    companyName: comp.company_name,
    industry: comp.industry,
    companyId: comp.company_id,
    department: comp.department,
    city: comp.city,
    foundationDate: comp.foundation_date,
    responsiblePerson: comp.responsible_person,
    companySize: comp.company_size,
    standard: comp.standard,
  };

  return {
    id: diagnosticRow.id,
    savedAt: diagnosticRow.saved_at,
    demographics,
    results: {
      reportDate: diagnosticRow.report_date,
      totalPercentage: parseFloat(diagnosticRow.total_percentage) || 0,
      clauseScores: JSON.parse(diagnosticRow.clause_scores || '[]'),
      actionPlan,
      comparison: diagnosticRow.comparison_data
        ? JSON.parse(diagnosticRow.comparison_data)
        : undefined,
    },
    comments,
    checklistAnswers,
    chatHistories,
  };
}

// ─────────────────────────────────────────────────────────
// GET /api/companies
// Lista de empresas con último diagnóstico para el usuario activo (para el Dashboard)
// ─────────────────────────────────────────────────────────
router.get('/companies', async (req, res) => {
  const userId = req.query.userId || req.headers['x-user-id'] || 'user';
  try {
    const [rows] = await pool.execute(`
      SELECT
        c.company_id,
        c.company_name,
        c.standard,
        COUNT(d.id)            AS report_count,
        MAX(d.saved_at)        AS last_report_date
      FROM companies c
      LEFT JOIN diagnostics d
        ON d.company_id = c.company_id AND d.standard = c.standard AND (d.user_id = ? OR d.user_id IS NULL)
      WHERE (c.user_id = ? OR c.user_id IS NULL)
      GROUP BY c.company_id, c.standard
      ORDER BY last_report_date DESC
    `, [userId, userId]);

    const companies = rows.map(r => ({
      companyId: r.company_id,
      companyName: r.company_name,
      standardName: r.standard, // frontend lo resolverá con STANDARDS_CONFIG
      standard: r.standard,
      reportCount: parseInt(r.report_count, 10),
      lastReportDate: r.last_report_date,
    }));

    res.json(companies);
  } catch (err) {
    console.error('GET /companies:', err);
    res.status(500).json({ error: 'Error al obtener lista de empresas' });
  }
});

// ─────────────────────────────────────────────────────────
// GET /api/companies/:companyId/history
// Historial de diagnósticos de una empresa filtrado por usuario
// ─────────────────────────────────────────────────────────
router.get('/companies/:companyId/history', async (req, res) => {
  const { companyId } = req.params;
  const userId = req.query.userId || req.headers['x-user-id'] || 'user';
  const conn = await pool.getConnection();
  try {
    const [diagRows] = await conn.execute(
      'SELECT * FROM diagnostics WHERE company_id = ? AND (user_id = ? OR user_id IS NULL) ORDER BY saved_at DESC',
      [companyId, userId]
    );

    const results = [];
    for (const row of diagRows) {
      results.push(await buildFullDiagnostic(conn, row));
    }

    res.json(results);
  } catch (err) {
    console.error('GET /companies/:id/history:', err);
    res.status(500).json({ error: 'Error al obtener historial' });
  } finally {
    conn.release();
  }
});

// ─────────────────────────────────────────────────────────
// GET /api/diagnostics/latest?companyId=X&standard=Y&userId=Z
// Último diagnóstico de una empresa para una norma dada y usuario
// ─────────────────────────────────────────────────────────
router.get('/diagnostics/latest', async (req, res) => {
  const { companyId, standard, userId: queryUserId } = req.query;
  const userId = queryUserId || req.headers['x-user-id'] || 'user';

  if (!companyId || !standard) {
    return res.status(400).json({ error: 'companyId y standard son requeridos' });
  }

  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.execute(
      `SELECT * FROM diagnostics
       WHERE company_id = ? AND standard = ? AND (user_id = ? OR user_id IS NULL)
       ORDER BY saved_at DESC LIMIT 1`,
      [companyId, standard, userId]
    );

    if (rows.length === 0) return res.json(null);
    res.json(await buildFullDiagnostic(conn, rows[0]));
  } catch (err) {
    console.error('GET /diagnostics/latest:', err);
    res.status(500).json({ error: 'Error al obtener último diagnóstico' });
  } finally {
    conn.release();
  }
});

// ─────────────────────────────────────────────────────────
// GET /api/diagnostics/:id
// Diagnóstico completo por ID
// ─────────────────────────────────────────────────────────
router.get('/diagnostics/:id', async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.execute(
      'SELECT * FROM diagnostics WHERE id = ?',
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'No encontrado' });
    res.json(await buildFullDiagnostic(conn, rows[0]));
  } catch (err) {
    console.error('GET /diagnostics/:id:', err);
    res.status(500).json({ error: 'Error al obtener diagnóstico' });
  } finally {
    conn.release();
  }
});

// ─────────────────────────────────────────────────────────
// POST /api/diagnostics
// Guardar un nuevo diagnóstico completo con user_id
// Body: { demographics, results, comments, checklistAnswers, chatHistories, userId }
// ─────────────────────────────────────────────────────────
router.post('/diagnostics', async (req, res) => {
  const { demographics, results, comments, checklistAnswers, chatHistories, userId: bodyUserId } = req.body;
  const userId = bodyUserId || demographics?.userId || req.headers['x-user-id'] || 'user';

  if (!demographics || !results) {
    return res.status(400).json({ error: 'demographics y results son requeridos' });
  }

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    const {
      companyId, companyName, industry, department, city,
      companySize, foundationDate, responsiblePerson, standard
    } = demographics;

    // 1. Upsert empresa con user_id
    await conn.execute(
      `INSERT INTO companies
         (company_id, standard, company_name, industry, department, city, company_size, foundation_date, responsible_person, user_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         company_name       = VALUES(company_name),
         industry           = VALUES(industry),
         department         = VALUES(department),
         city               = VALUES(city),
         company_size       = VALUES(company_size),
         foundation_date    = VALUES(foundation_date),
         responsible_person = VALUES(responsible_person),
         user_id            = VALUES(user_id)`,
      [companyId, standard, companyName, industry, department, city, companySize, foundationDate, responsiblePerson, userId]
    );

    // 2. Insertar diagnóstico con user_id
    const diagId = `diag_${Date.now()}`;
    const { reportDate, totalPercentage, clauseScores, actionPlan, comparison } = results;

    await conn.execute(
      `INSERT INTO diagnostics
         (id, company_id, standard, report_date, total_percentage, clause_scores, comparison_data, user_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        diagId,
        companyId,
        standard,
        reportDate || new Date().toISOString(),
        totalPercentage || 0,
        JSON.stringify(clauseScores || []),
        comparison ? JSON.stringify(comparison) : null,
        userId
      ]
    );

    // 3. Plan de acción
    if (actionPlan) {
      await conn.execute(
        `INSERT INTO action_plans (diagnostic_id, executive_summary, general_recommendations, priority_actions)
         VALUES (?, ?, ?, ?)`,
        [
          diagId,
          actionPlan.executiveSummary || '',
          actionPlan.generalRecommendations || '',
          JSON.stringify(actionPlan.priorityActions || []),
        ]
      );
    }

    // 4. Checklist answers
    if (checklistAnswers && Object.keys(checklistAnswers).length > 0) {
      const caValues = Object.entries(checklistAnswers).map(([evidenceId, status]) => [diagId, evidenceId, status]);
      await conn.query(
        'INSERT INTO checklist_answers (diagnostic_id, evidence_id, status) VALUES ?',
        [caValues]
      );
    }

    // 5. Comentarios de cláusula
    if (comments && Object.keys(comments).length > 0) {
      const ccValues = Object.entries(comments)
        .filter(([, text]) => text && text.trim())
        .map(([clauseId, text]) => [diagId, clauseId, text]);
      if (ccValues.length > 0) {
        await conn.query(
          'INSERT INTO clause_comments (diagnostic_id, clause_id, comment_text) VALUES ?',
          [ccValues]
        );
      }
    }

    // 6. Chat histories (sólo metadata de archivo, nunca base64)
    if (chatHistories && typeof chatHistories === 'object') {
      const msgValues = [];
      for (const [contextId, messages] of Object.entries(chatHistories)) {
        for (const msg of messages) {
          msgValues.push([
            diagId,
            contextId,
            msg.sender,
            msg.text || '',
            msg.file?.name || null,
            msg.file?.mimeType || null,
          ]);
        }
      }
      if (msgValues.length > 0) {
        await conn.query(
          'INSERT INTO chat_messages (diagnostic_id, context_id, sender, message_text, file_name, file_mime_type) VALUES ?',
          [msgValues]
        );
      }
    }

    await conn.commit();
    res.status(201).json({ id: diagId, savedAt: new Date().toISOString() });
  } catch (err) {
    await conn.rollback();
    console.error('POST /diagnostics:', err);
    res.status(500).json({ error: 'Error al guardar diagnóstico' });
  } finally {
    conn.release();
  }
});

// ─────────────────────────────────────────────────────────
// PUT /api/diagnostics/:id
// Actualizar diagnóstico existente (principalmente el chatHistories)
// Body: ISavedDiagnostic completo
// ─────────────────────────────────────────────────────────
router.put('/diagnostics/:id', async (req, res) => {
  const { id } = req.params;
  const { chatHistories, results } = req.body;

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    // Verificar que exista
    const [existing] = await conn.execute('SELECT id FROM diagnostics WHERE id = ?', [id]);
    if (existing.length === 0) {
      await conn.rollback();
      return res.status(404).json({ error: 'Diagnóstico no encontrado' });
    }

    // Actualizar datos del resultado si vienen (ej: actionPlan después de regeneración)
    if (results) {
      await conn.execute(
        `UPDATE diagnostics SET
           total_percentage = ?,
           clause_scores    = ?,
           comparison_data  = ?
         WHERE id = ?`,
        [
          results.totalPercentage || 0,
          JSON.stringify(results.clauseScores || []),
          results.comparison ? JSON.stringify(results.comparison) : null,
          id,
        ]
      );

      // Upsert plan de acción si viene
      if (results.actionPlan) {
        await conn.execute(
          `INSERT INTO action_plans (diagnostic_id, executive_summary, general_recommendations, priority_actions)
           VALUES (?, ?, ?, ?)
           ON DUPLICATE KEY UPDATE
             executive_summary       = VALUES(executive_summary),
             general_recommendations = VALUES(general_recommendations),
             priority_actions        = VALUES(priority_actions)`,
          [
            id,
            results.actionPlan.executiveSummary || '',
            results.actionPlan.generalRecommendations || '',
            JSON.stringify(results.actionPlan.priorityActions || []),
          ]
        );
      }
    }

    // Sincronizar chat_messages: borrar los del diagnóstico y re-insertar
    if (chatHistories && typeof chatHistories === 'object') {
      await conn.execute('DELETE FROM chat_messages WHERE diagnostic_id = ?', [id]);

      const msgValues = [];
      for (const [contextId, messages] of Object.entries(chatHistories)) {
        for (const msg of messages) {
          msgValues.push([
            id,
            contextId,
            msg.sender,
            msg.text || '',
            msg.file?.name || null,
            msg.file?.mimeType || null,
          ]);
        }
      }
      if (msgValues.length > 0) {
        await conn.query(
          'INSERT INTO chat_messages (diagnostic_id, context_id, sender, message_text, file_name, file_mime_type) VALUES ?',
          [msgValues]
        );
      }
    }

    await conn.commit();
    res.json({ ok: true });
  } catch (err) {
    await conn.rollback();
    console.error('PUT /diagnostics/:id:', err);
    res.status(500).json({ error: 'Error al actualizar diagnóstico' });
  } finally {
    conn.release();
  }
});

// ─────────────────────────────────────────────────────────
// DELETE /api/diagnostics/:id  (opcional, para limpieza)
// ─────────────────────────────────────────────────────────
router.delete('/diagnostics/:id', async (req, res) => {
  try {
    await pool.execute('DELETE FROM diagnostics WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    console.error('DELETE /diagnostics/:id:', err);
    res.status(500).json({ error: 'Error al eliminar diagnóstico' });
  }
});

module.exports = router;
