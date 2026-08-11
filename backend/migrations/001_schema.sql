-- ==========================================================
-- Plataforma de Diagnóstico de Calidad Multi-Norma
-- Migración 001: Esquema inicial MySQL
-- Ejecutar: mysql -u <user> -p <database> < 001_schema.sql
-- ==========================================================

CREATE DATABASE IF NOT EXISTS diagnostico_calidad
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE diagnostico_calidad;

-- ----------------------------------------------------------
-- Tabla: users
-- Usuarios registrados en la plataforma
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  username      VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Usuario predeterminado 'user' / 'pass'
INSERT INTO users (username, password_hash)
VALUES ('user', 'pass')
ON DUPLICATE KEY UPDATE username = VALUES(username);

-- ----------------------------------------------------------
-- Tabla: companies
-- Datos demográficos por empresa/norma (clave compuesta)
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS companies (
  company_id         VARCHAR(100)                            NOT NULL,
  standard           VARCHAR(50)                             NOT NULL,
  user_id            VARCHAR(100)                            NOT NULL DEFAULT 'user',
  company_name       VARCHAR(255)                            NOT NULL,
  industry           VARCHAR(255)                            DEFAULT NULL,
  department         VARCHAR(100)                            DEFAULT NULL,
  city               VARCHAR(100)                            DEFAULT NULL,
  company_size       ENUM('pequeña','mediana','grande')      DEFAULT NULL,
  foundation_date    VARCHAR(20)                             DEFAULT NULL,
  responsible_person VARCHAR(255)                            DEFAULT NULL,
  created_at         TIMESTAMP                               DEFAULT CURRENT_TIMESTAMP,
  updated_at         TIMESTAMP                               DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (company_id, standard)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- Tabla: diagnostics
-- Un diagnóstico guardado por empresa/norma/fecha
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS diagnostics (
  id               VARCHAR(50)    NOT NULL,
  company_id       VARCHAR(100)   NOT NULL,
  standard         VARCHAR(50)    NOT NULL,
  user_id          VARCHAR(100)   NOT NULL DEFAULT 'user',
  saved_at         TIMESTAMP      DEFAULT CURRENT_TIMESTAMP,
  report_date      VARCHAR(50)    DEFAULT NULL,
  total_percentage DECIMAL(6,3)   DEFAULT NULL,
  clause_scores    JSON           DEFAULT NULL,  -- IClauseScore[]
  comparison_data  JSON           DEFAULT NULL,  -- IComparisonData | null
  PRIMARY KEY (id),
  FOREIGN KEY (company_id, standard)
    REFERENCES companies(company_id, standard)
    ON UPDATE CASCADE
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- Tabla: action_plans
-- Plan de acción generado por IA (1:1 con diagnostics)
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS action_plans (
  diagnostic_id            VARCHAR(50) NOT NULL,
  executive_summary        TEXT        DEFAULT NULL,
  general_recommendations  TEXT        DEFAULT NULL,
  priority_actions         JSON        DEFAULT NULL,  -- IPriorityAction[]
  PRIMARY KEY (diagnostic_id),
  FOREIGN KEY (diagnostic_id)
    REFERENCES diagnostics(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- Tabla: checklist_answers
-- Una fila por evidencia respondida dentro de un diagnóstico
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS checklist_answers (
  id            INT AUTO_INCREMENT                                             NOT NULL,
  diagnostic_id VARCHAR(50)                                                    NOT NULL,
  evidence_id   VARCHAR(150)                                                   NOT NULL,
  status        ENUM('implemented','in_progress','not_implemented','not_applicable') NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_diag_evidence (diagnostic_id, evidence_id),
  FOREIGN KEY (diagnostic_id)
    REFERENCES diagnostics(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- Tabla: clause_comments
-- Comentario libre por cláusula dentro de un diagnóstico
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS clause_comments (
  id            INT AUTO_INCREMENT NOT NULL,
  diagnostic_id VARCHAR(50)        NOT NULL,
  clause_id     VARCHAR(100)       NOT NULL,
  comment_text  TEXT               DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_diag_clause (diagnostic_id, clause_id),
  FOREIGN KEY (diagnostic_id)
    REFERENCES diagnostics(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- Tabla: chat_messages
-- Historial de mensajes de chat asociados a un diagnóstico.
-- NOTA: el contenido base64 de archivos PDF NO se almacena aquí,
--       sólo la metadata (nombre y tipo MIME) por seguridad y espacio.
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS chat_messages (
  id             INT AUTO_INCREMENT                 NOT NULL,
  diagnostic_id  VARCHAR(50)                        NOT NULL,
  context_id     VARCHAR(150)                       NOT NULL, -- clause_id | 'action_plan'
  sender         ENUM('user','ai')                  NOT NULL,
  message_text   TEXT                               DEFAULT NULL,
  file_name      VARCHAR(255)                       DEFAULT NULL,
  file_mime_type VARCHAR(100)                       DEFAULT NULL,
  created_at     TIMESTAMP                          DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (diagnostic_id)
    REFERENCES diagnostics(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------
-- Índices adicionales para consultas frecuentes
-- ----------------------------------------------------------
CREATE INDEX idx_diagnostics_company  ON diagnostics(company_id, standard);
CREATE INDEX idx_diagnostics_saved_at ON diagnostics(saved_at DESC);
CREATE INDEX idx_chat_context         ON chat_messages(diagnostic_id, context_id);
