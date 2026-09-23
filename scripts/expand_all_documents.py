# -*- coding: utf-8 -*-
import os
import sys

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

# -------------------------------------------------------------------------
# 1. EXPAND MANUAL_TECNICO_NTC_6001.md
# -------------------------------------------------------------------------
def expand_manual_tecnico_ntc6001():
    filepath = os.path.join(BASE_DIR, "MANUAL_TECNICO_NTC_6001.md")
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Expand Chapter 11 with OpenAPI Spec
    openapi_section = """
### 11.3 Especificación Formal de la Interfaz de Programación (API REST / OpenAPI 3.0)
El backend expone una interfaz REST estructurada bajo la especificación OpenAPI 3.0. A continuación se detallan los contratos de comunicación, esquemas de solicitud (*request payload*) y respuestas (*response payload*):

#### 1. Endpoint: Registro de Nuevos Usuarios
- **Ruta:** `POST /api/auth/register`
- **Cabeceras:** `Content-Type: application/json`
- **Cuerpo de la Petición:**
```json
{
  "username": "empresa_textil_2026",
  "password": "PasswordSeguro#2026"
}
```
- **Respuesta Exitosa (HTTP 201 Created):**
```json
{
  "success": true,
  "message": "Usuario registrado exitosamente",
  "user": {
    "id": 42,
    "username": "empresa_textil_2026",
    "created_at": "2026-09-22T14:30:00.000Z"
  }
}
```
- **Respuestas de Error:**
  - `HTTP 400 Bad Request`: Parámetros incompletos o usuario ya existente.
  - `HTTP 500 Internal Server Error`: Fallo de conexión con MySQL.

#### 2. Endpoint: Autenticación e Inicio de Sesión
- **Ruta:** `POST /api/auth/login`
- **Cabeceras:** `Content-Type: application/json`
- **Cuerpo de la Petición:**
```json
{
  "username": "empresa_textil_2026",
  "password": "PasswordSeguro#2026"
}
```
- **Respuesta Exitosa (HTTP 200 OK):**
```json
{
  "success": true,
  "message": "Inicio de sesión concedido",
  "user": {
    "id": 42,
    "username": "empresa_textil_2026"
  }
}
```
- **Respuestas de Error:**
  - `HTTP 401 Unauthorized`: Credenciales inválidas o contraseña errónea.

#### 3. Endpoint: Obtención de Fichas Empresariales por Usuario
- **Ruta:** `GET /api/diagnostics/companies`
- **Cabeceras Obligatorias:** `x-user-id: 42`
- **Respuesta Exitosa (HTTP 200 OK):**
```json
[
  {
    "company_id": "900123456-1",
    "standard": "NTC_6001",
    "company_name": "Confecciones Andinas S.A.S.",
    "industry": "Manufactura Textil",
    "department": "Antioquia",
    "city": "Medellín",
    "company_size": "Pequeña",
    "foundation_date": "2018-03-15",
    "responsible_person": "Carlos Mario Restrepo",
    "created_at": "2026-09-22T15:00:00.000Z"
  }
]
```

#### 4. Endpoint: Persistencia de Diagnóstico Completo y Resultados
- **Ruta:** `POST /api/diagnostics/save`
- **Cabeceras Obligatorias:** `Content-Type: application/json`, `x-user-id: 42`
- **Cuerpo de la Petición:**
```json
{
  "diagnostic_id": "diag-ntc6001-900123456-20260922",
  "company_id": "900123456-1",
  "standard": "NTC_6001",
  "score_global": 78.45,
  "score_evidences": 82.00,
  "score_final": 79.51,
  "compliance_level": "NIVEL 3: SATISFACTORIO / BRECHAS MENORES",
  "demographics": {
    "company_name": "Confecciones Andinas S.A.S.",
    "nit": "900123456-1",
    "city": "Medellín"
  },
  "results_json": {
    "clausula_4": { "status": "CUMPLE", "score": 92.5, "evidences_verified": 3 },
    "clausula_5": { "status": "CUMPLE", "score": 85.0, "evidences_verified": 2 },
    "clausula_6": { "status": "PARCIAL", "score": 65.0, "evidences_verified": 2 },
    "clausula_7": { "status": "PARCIAL", "score": 68.0, "evidences_verified": 4 },
    "clausula_8": { "status": "CUMPLE", "score": 80.0, "evidences_verified": 3 },
    "clausula_9": { "status": "CUMPLE", "score": 90.0, "evidences_verified": 4 },
    "clausula_10": { "status": "PARCIAL", "score": 60.0, "evidences_verified": 1 }
  },
  "action_plan": [
    {
      "clause": "Cláusula 10: Mejora Continua",
      "priority": "Alta",
      "finding": "No se llevan registros formalizados de acciones correctivas tras quejas de clientes.",
      "action": "Implementar formato de registro de PQR y análisis de causa raíz bajo metodología 5 Porqués.",
      "deadline": "30 días",
      "responsible": "Líder de Calidad / Gerencia"
    }
  ]
}
```
- **Respuesta Exitosa (HTTP 201 Created):**
```json
{
  "success": true,
  "message": "Diagnóstico guardado exitosamente",
  "diagnostic_id": "diag-ntc6001-900123456-20260922"
}
```
"""

    # Expand Chapter 12 with full SQL DDL
    sql_ddl_section = """
### 12.3 Script Oficial DDL de Creación de la Base de Datos Relacional (MySQL)
A continuación se transcribe el script SQL formal compatible con motores MySQL 8.0 y MariaDB 10.5+, que implementa la Tercera Forma Normal (3FN), llaves primarias compuestas, índices de aceleración y restricciones de integridad referencial:

```sql
-- ============================================================================
-- SCRIPT DE BASE DE DATOS: PLATAFORMA DE CALIDAD NTC 6001
-- Universidad de Córdoba - Facultad de Ingenierías
-- Versión: 3.5.0
-- ============================================================================

CREATE DATABASE IF NOT EXISTS `calidad_ntc6001_db`
  DEFAULT CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

USE `calidad_ntc6001_db`;

-- ----------------------------------------------------------------------------
-- 1. Tabla de Usuarios y Credenciales Criptográficas
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(80) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL COMMENT 'Formato: iteraciones$sal$hash (PBKDF2-SHA512)',
  `full_name` VARCHAR(150) NULL,
  `email` VARCHAR(150) NULL,
  `role` ENUM('ADMIN', 'AUDITOR', 'EMPRESARIO', 'DOCENTE') NOT NULL DEFAULT 'EMPRESARIO',
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_users_username` (`username`),
  KEY `idx_users_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 2. Tabla de Fichas de Caracterización Empresarial (Multi-Tenant por Usuario)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `companies` (
  `company_id` VARCHAR(50) NOT NULL COMMENT 'NIT o Identificación Tributaria',
  `standard` VARCHAR(30) NOT NULL DEFAULT 'NTC_6001',
  `user_id` INT UNSIGNED NOT NULL,
  `company_name` VARCHAR(200) NOT NULL,
  `industry` VARCHAR(100) NOT NULL,
  `department` VARCHAR(80) NOT NULL,
  `city` VARCHAR(80) NOT NULL,
  `company_size` ENUM('Micro', 'Pequeña', 'Mediana') NOT NULL DEFAULT 'Micro',
  `foundation_date` DATE NULL,
  `responsible_person` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(50) NULL,
  `email` VARCHAR(150) NULL,
  `address` VARCHAR(255) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`company_id`, `standard`, `user_id`),
  CONSTRAINT `fk_companies_users` 
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) 
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 3. Tabla Principal de Diagnósticos y Evaluaciones
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `diagnostics` (
  `id` VARCHAR(100) NOT NULL COMMENT 'Identificador único UUID o generado',
  `company_id` VARCHAR(50) NOT NULL,
  `standard` VARCHAR(30) NOT NULL DEFAULT 'NTC_6001',
  `user_id` INT UNSIGNED NOT NULL,
  `diagnostic_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `score_global` DECIMAL(5,2) NOT NULL DEFAULT 0.00 COMMENT 'Porcentaje ponderado global (0.00 - 100.00)',
  `score_evidences` DECIMAL(5,2) NOT NULL DEFAULT 0.00 COMMENT 'Porcentaje de evidencias comprobadas',
  `score_final` DECIMAL(5,2) NOT NULL DEFAULT 0.00 COMMENT 'Puntuación consolidada oficial',
  `compliance_level` VARCHAR(120) NOT NULL,
  `demographics_json` LONGTEXT NOT NULL COMMENT 'Snapshot inmutable de la empresa evaluada',
  `results_json` LONGTEXT NOT NULL COMMENT 'Resultados detallados por cláusula en JSON',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_diagnostics_company` (`company_id`),
  KEY `idx_diagnostics_user` (`user_id`),
  KEY `idx_diagnostics_date` (`diagnostic_date`),
  CONSTRAINT `fk_diagnostics_companies` 
    FOREIGN KEY (`company_id`, `standard`, `user_id`) 
    REFERENCES `companies` (`company_id`, `standard`, `user_id`) 
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 4. Tabla de Planes de Acción Generados con Asistencia de IA
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `action_plans` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `diagnostic_id` VARCHAR(100) NOT NULL,
  `clause_name` VARCHAR(150) NOT NULL,
  `priority` ENUM('Alta', 'Media', 'Baja') NOT NULL DEFAULT 'Media',
  `finding` TEXT NOT NULL,
  `action` TEXT NOT NULL,
  `deadline` VARCHAR(50) NOT NULL,
  `responsible` VARCHAR(100) NOT NULL,
  `status` ENUM('Pendiente', 'En Progreso', 'Implementado', 'Cerrado') NOT NULL DEFAULT 'Pendiente',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_actionplans_diagnostic` (`diagnostic_id`),
  CONSTRAINT `fk_actionplans_diagnostics` 
    FOREIGN KEY (`diagnostic_id`) REFERENCES `diagnostics` (`id`) 
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 5. Vistas Analíticas para Reportes Gerenciales
-- ----------------------------------------------------------------------------
CREATE OR REPLACE VIEW `vw_diagnostics_summary` AS
SELECT 
  d.id AS diagnostic_id,
  d.diagnostic_date,
  c.company_name,
  c.company_id AS nit,
  c.industry,
  c.city,
  c.company_size,
  d.score_global,
  d.score_evidences,
  d.score_final,
  d.compliance_level,
  u.username AS auditor_username
FROM `diagnostics` d
JOIN `companies` c ON d.company_id = c.company_id AND d.standard = c.standard AND d.user_id = c.user_id
JOIN `users` u ON d.user_id = u.id;
```
"""

    if "### 11.3 Especificación Formal" not in content:
        content = content.replace("## 12. DISEÑO DE BASE DE DATOS", openapi_section + "\n\n## 12. DISEÑO DE BASE DE DATOS")
    if "### 12.3 Script Oficial DDL" not in content:
        content = content.replace("## 13. DISEÑO DE COMPORTAMIENTO", sql_ddl_section + "\n\n## 13. DISEÑO DE COMPORTAMIENTO")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated {filepath} with OpenAPI and SQL DDL.")

# Execute expansion
expand_manual_tecnico_ntc6001()
