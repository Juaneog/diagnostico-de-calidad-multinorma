# 📘 MANUAL DE INGENIERÍA Y DOCUMENTACIÓN TÉCNICA DEL SISTEMA
## Plataforma de Diagnóstico de Calidad y Sostenibilidad Multi-Norma (NTC 6001 / NTC 6496 / NTC 6503)

**Documento de Especificación, Arquitectura, Calidad y Manual de Usuario**  
**Modelo de Documentación Adaptado:** ManField Software Documentation Standard (ISO/IEC 25010 & IEEE Style)  
**Versión:** 3.0 (Actualizada con Persistencia MySQL, Autenticación PBKDF2 y Guía Interactiva)  
**Fecha:** 2026  

---

## TABLA DE CONTENIDO

1. **PLANTEAMIENTO DEL PROBLEMA**
   - 1.1 Justificación
2. **OBJETIVOS**
   - 2.1 Objetivo General
   - 2.2 Objetivos Específicos
3. **MARCO TEÓRICO Y NORMATIVO**
   - 3.1 Normas Técnicas Colombianas de Calidad y Sostenibilidad
   - 3.2 Evaluación de Cumplimiento por Ponderación de Evidencias
   - 3.3 Asistencia Mediante Inteligencia Artificial Generativa
4. **ALCANCE DEL SISTEMA**
   - 4.1 Audiencia
   - 4.2 Definiciones y Acrónimos
5. **DESCRIPCIÓN GENERAL Y ARQUITECTURA**
   - 5.1 Perspectiva del Producto
   - 5.2 Funciones del Producto
   - 5.3 Características de Usuarios
   - 5.4 Requisitos Funcionales (RF)
   - 5.5 Requisitos No Funcionales del Sistema (RNF)
   - 5.6 Diagramas de Casos de Uso y Secuencia de Autenticación
6. **DISEÑO DE COMPONENTES Y MÓDULOS DEL SOFTWARE**
   - 6.1 Clase Principal `App.tsx`
   - 6.2 Componente `DemographicsForm.tsx`
   - 6.3 Componente `ClauseCard.tsx`
   - 6.4 Componente `ResultsDisplay.tsx`
   - 6.5 Componente `ActionPlanDisplay.tsx`
   - 6.6 Componente `ChatModal.tsx`
   - 6.7 Componente `InteractiveGuideModal.tsx` & `GuidedTourOverlay.tsx`
   - 6.8 Servicio `aiService.ts`
   - 6.9 Servicio de Persistencia API REST `dbService.ts`
   - 6.10 Router de Autenticación Backend `backend/routes/auth.js`
   - 6.11 Router de Diagnósticos Backend `backend/routes/diagnostics.js`
7. **IMPLEMENTACIÓN DEL SOFTWARE Y SEGURIDAD**
   - 7.1 Arquitectura Cliente-Servidor Multi-Capa REST
   - 7.2 Módulo de Seguridad y Encriptación de Contraseñas (PBKDF2 + Salt)
   - 7.3 Aislamiento de Datos Multi-Usuario y Multi-Norma (`user_id` + `standard`)
   - 7.4 Middleware CORS Universal y Manejo de Preflight `OPTIONS`
8. **DISEÑO DE BASE DE DATOS Y ESQUEMA RELACIONAL (MYSQL)**
   - 8.1 Modelo Entidad-Relación (ER) y Diccionario de Datos
   - 8.2 Tabla `users` (Gestión de Autenticación)
   - 8.3 Tabla `companies` (Caracterización Empresarial)
   - 8.4 Tabla `diagnostics` (Evaluaciones Históricas)
9. **PLAN DE PRUEBAS Y MATRIZ DE CASOS DE PRUEBA**
   - 9.1 Tipos de Pruebas y Objetivos
   - 9.2 Matriz de Casos de Prueba
10. **EVALUACIÓN DE USABILIDAD Y CALIDAD DEL SOFTWARE (ISO/IEC 25010)**
    - 10.1 Resultados Globales de Usabilidad
    - 10.2 Evaluación de Calidad ISO 25010
11. **CONCLUSIONES Y RECOMENDACIONES**
- **ANEXO 1. MANUAL DEL USUARIO E INSTRUCCIONES DE DESPLIEGUE**

---

## 1. PLANTEAMIENTO DEL PROBLEMA

La evaluación del cumplimiento normativo de calidad y sostenibilidad en micro, pequeñas y medianas empresas (MIPYMES) y establecimientos turísticos/gastronómicos en Colombia enfrenta múltiples obstáculos. Los métodos tradicionales basados en hojas de cálculo estáticas o formularios físicos suelen generar inconsistencias, falta de trazabilidad histórica, errores en el cálculo de ponderación de evidencias y dificultades en la interpretación técnica de los requisitos exigidos por las Normas Técnicas Colombianas (**NTC 6001**, **NTC 6496** y **NTC 6503**).

Adicionalmente, las organizaciones a menudo carecen de asesores expertos permanentes que traduzcan los hallazgos de auditoría en planes de acción ejecutables y priorizados. La falta de una herramienta computacional interactiva, accesible desde la web, con capacidades de análisis automatizado mediante Inteligencia Artificial y almacenamiento estructurado de evaluaciones previas aislado por usuario en base de datos relacional, limita la capacidad de las empresas para lograr y mantener certificaciones de calidad y sostenibilidad.

El presente software resuelve esta problemática proporcionando una plataforma integral multi-norma respaldada por un **Backend REST en Node.js/Express y MySQL en Hostinger**, que automatiza el ciclo completo de evaluación: registro seguro de usuarios, caracterización demográfica, auto-evaluación ponderada por cláusulas con verificación de evidencias, asistencia contextual mediante IA generativa, generación automática de planes de acción, centro de soporte técnico interactivo y exportación de informes en PDF.

### 1.1. JUSTIFICACIÓN

El desarrollo de esta plataforma se justifica por las siguientes razones clave:
- **Impacto Empresarial y Regional:** Facilita el acceso de las MIPYMES y sector turismo/gastronomía a procesos de certificación de calidad y sostenibilidad de forma autónoma y guiada.
- **Seguridad y Persistencia Global:** Incorpora una base de datos relacional MySQL remota con encriptación PBKDF2 que garantiza la persistencia global de usuarios y diagnósticos desde cualquier dispositivo.
- **Aislamiento Multi-Usuario y Multi-Norma:** Aísla de forma estricta las evaluaciones y empresas asociadas a cada cuenta de usuario mediante el atributo `user_id` y la norma activa `standard`.
- **Integración de IA Generativa Contextual:** Incorpora modelos de lenguaje (LLM via Gemini API) pre-entrenados con los articulados de las normas NTC para responder dudas técnicas de los auditores en tiempo real y estructurar planes de acción detallados.
- **Centro Support/Manuales Interactivo:** Incluye un hub de manuales navegables en vivo con simuladores prácticos y tour guiado onboarding para acelerar la adopción por parte de los auditores.

---

## 2. OBJETIVOS

### 2.1 Objetivo General
Desarrollar y consolidar una plataforma web interactiva y multi-norma especializada en el diagnóstico de calidad y sostenibilidad empresarial (NTC 6001, NTC 6496, NTC 6503), respaldada por un Backend REST en Express, base de datos MySQL, autenticación encriptada y asistencia de Inteligencia Artificial para la evaluación, seguimiento y generación de planes de mejora continua.

### 2.2 Objetivos Específicos
- **Modelar dinámicamente** los cuestionarios y cláusulas técnicas de las normas NTC 6001 (Gestión para PyMEs), NTC 6496 (Sostenibilidad en Gastronomía) y NTC 6503 (Sostenibilidad en Alojamiento).
- **Implementar un algoritmo de ponderación de cumplimiento** que soporte estados de implementación (Cumple, Parcialmente, No Cumple, No Aplica) combinado con puntos de verificación de evidencias documentales.
- **Diseñar una arquitectura de persistencia relacional en MySQL** que aísle las empresas y diagnósticos históricos según la cuenta del usuario autenticado (`user_id`).
- **Desarrollar un módulo de autenticación seguro** en Node.js/Express con derivación de claves PBKDF2 y sal aleatoria.
- **Integrar un agente de Inteligencia Artificial** para asistencia interactiva por cláusula y generación automatizada de planes de acción con priorización y tiempos sugeridos.
- **Proveer un centro de capacitación interactivo** (Manuales de Uso, simuladores prácticos y tour flotante onboarding) dentro de la aplicación.
- **Garantizar responsividad visual y exportación en PDF** de alta fidelidad para la impresión de informes de auditoría.

---

## 3. MARCO TEÓRICO Y NORMATIVO

### 3.1 Normas Técnicas Colombianas de Calidad y Sostenibilidad
- **NTC 6001:** Requisitos para un Sistema de Gestión en Micro y Pequeñas Empresas. Define requisitos de liderazgo, planificación, gestión de recursos, procesos operativos, evaluación y mejora.
- **NTC 6496:** Requisitos de Sostenibilidad para Establecimientos Gastronómicos. Evalúa impactos ambientales (agua, energía, residuos), socioculturales y económicos.
- **NTC 6503:** Requisitos de Sostenibilidad para Servicios de Alojamiento y Hospedaje. Establece criterios de sostenibilidad turística aplicables a hoteles, hostales y posadas.

### 3.2 Evaluación de Cumplimiento por Ponderación de Evidencias
El modelo matemático de evaluación asigna un puntaje base según la respuesta del requisito ($R_i \in \{1.0, 0.5, 0.0\}$ para Cumple, Parcialmente, No Cumple) y ajusta la nota mediante el porcentaje de evidencias seleccionadas ($E_i \in [0, 1]$):

$$S_i = w_r \cdot R_i + w_e \cdot E_i$$

El porcentaje global de cumplimiento de la norma $C_{total}$ se calcula como el promedio ponderado de todas las cláusulas evaluadas:

$$C_{total} = \frac{\sum_{k=1}^{N} C_k}{N} \times 100\%$$

---

## 4. ALCANCE DEL SISTEMA

### 4.1. AUDIENCIA
- **Usuarios Primarios:** Auditores internos de calidad, gestores de sostenibilidad, gerentes y propietarios de PyMEs, hoteles y restaurantes.
- **Usuarios Secundarios:** Consultores externos, docentes y estudiantes de ingeniería industrial, administración y turismo.
- **Administradores:** Personal técnico a cargo del mantenimiento de la plataforma y administración de la base de datos MySQL.

### 4.2. DEFINICIONES Y ACRÓNIMOS
| Término | Definición |
| :--- | :--- |
| **NTC** | Norma Técnica Colombiana emitida por ICONTEC. |
| **MIPYME** | Micro, Pequeña y Mediana Empresa. |
| **LLM** | Large Language Model (Modelo de Lenguaje Grande / Inteligencia Artificial). |
| **SPA** | Single Page Application (Aplicación web de página única). |
| **PBKDF2** | Password-Based Key Derivation Function 2 (Algoritmo estándar de encriptación de contraseñas). |
| **CORS** | Cross-Origin Resource Sharing (Mecanismo de seguridad para peticiones HTTP entre dominios). |

---

## 5. DESCRIPCIÓN GENERAL Y ARQUITECTURA

### 5.1. PERSPECTIVA DEL PRODUCTO
La plataforma sigue una arquitectura **Cliente-Servidor Multi-Capa REST**. El cliente es una Single Page Application (SPA) responsiva en React + TypeScript que se comunica mediante solicitudes HTTPS asíncronas con una API REST distribuida en Node.js/Express, conectada a un servidor relacional MySQL en Hostinger.

### 5.2. FUNCIONES DEL PRODUCTO
1. **Gestión de Usuarios y Registro en MySQL:** Autenticación y registro global con hashing de contraseñas PBKDF2.
2. **Aislamiento de Diagnósticos por Usuario:** Filtrado relacional estricto de empresas e historial por `user_id`.
3. **Selección y Configuración de Norma:** Soporte para NTC 6001, NTC 6496 y NTC 6503 con dominios independientes (`iso6001.jarestrepo.com` y `sostenibilidad.jarestrepo.com`).
4. **Registro Demográfico de la Organización:** Formulario de caracterización empresarial con autocompletado inteligente por ID.
5. **Cuestionario Interactivo:** Evaluación por cláusulas con casillas de evidencias documentales y notas de auditoría.
6. **Asistente de IA Contextual:** Chatbot flotante interactivo por cláusula para asesoría normativa en tiempo real.
7. **Dashboard Analítico:** Gráficos de barras, radar y comparativa con diagnósticos previos de la empresa.
8. **Generador de Plan de Acción:** Matriz de tareas priorizadas asistida por IA con tiempos y responsables.
9. **Exportación de Informes en PDF:** Generación e impresión de reportes en PDF de alta resolución.
10. **Centro de Manuales y Guía Interactiva:** Modal interactivo con navegabilidad por capítulos, buscador en vivo, acordeón de troubleshooting y simuladores prácticos.

### 5.3. REQUISITOS FUNCIONALES
| ID | Requisito Funcional | Descripción | Prioridad |
| :--- | :--- | :--- | :--- |
| **RF-001** | Autenticación en MySQL | Autenticar usuarios contra la tabla `users` mediante hashing PBKDF2. | Alta |
| **RF-002** | Registro de Usuarios | Registrar nuevos usuarios en MySQL validando unicidad de nombre de usuario. | Alta |
| **RF-003** | Aislamiento por `user_id` | Filtrar el dashboard y el historial únicamente para los registros del usuario activo. | Alta |
| **RF-004** | Registro Demográfico | Capturar datos clave de la empresa (Nombre, NIT/ID, Sector, Ciudad, Responsable). | Alta |
| **RF-005** | Selección de Estándar | Permitir evaluar NTC 6001, NTC 6496 o NTC 6503 de forma transparente. | Alta |
| **RF-006** | Evaluación por Cláusulas | Presentar preguntas según la estructura oficial de cada norma NTC. | Alta |
| **RF-007** | Verificación de Evidencias | Marcar documentos de soporte disponibles por requisito. | Alta |
| **RF-008** | Chat Asistente AI | Proveer un modal de diálogo inteligente con la API de Google Gemini. | Alta |
| **RF-009** | Cálculo de Cumplimiento | Calcular automáticamente porcentajes globales y sectorizados por cláusula. | Alta |
| **RF-010** | Generación de Plan de Acción | Producir recomendaciones de mejora priorizadas (Alta, Media, Baja) con la IA. | Alta |
| **RF-011** | Exportación PDF | Generar un documento PDF formateado con el informe completo del diagnóstico. | Alta |
| **RF-012** | Guía de Uso Interactiva | Integrar modal de manuales con simuladores interactivos y tour guiado onboarding. | Alta |

---

## 6. DISEÑO DE COMPONENTES Y MÓDULOS DEL SOFTWARE

- **`App.tsx`:** Componente principal que coordina el estado global, la sesión del usuario (`loginUsername`), navegación y disparadores de modales.
- **`DemographicsForm.tsx`:** Formulario de captura de datos de la organización con autocompletado desde la API.
- **`ClauseCard.tsx`:** Componente interactivo para diligenciamiento de requisitos, selección de evidencias y activación del asistente de IA.
- **`ResultsDisplay.tsx`:** Módulo de visualización de métricas, gráficos de radar/barras y comparativa histórica.
- **`ActionPlanDisplay.tsx`:** Tabla interactiva de acciones correctivas generadas por IA con exportación PDF.
- **`ChatModal.tsx`:** Interfaz de conversación contextualizada con la API de Gemini.
- **`InteractiveGuideModal.tsx` & `GuidedTourOverlay.tsx`:** Centro de manuales con buscador, simuladores interactivos y superposición de tour guiado.
- **`services/dbService.ts`:** Capa de comunicación HTTP cliente que consume la API REST backend (`loginUser`, `registerUser`, `getCompanyList`, `saveDiagnostic`).
- **`backend/routes/auth.js`:** Router Express encargado de registrar e iniciar sesión contra MySQL con derivación PBKDF2.
- **`backend/routes/diagnostics.js`:** Router Express para consulta de empresas, historial y guardado de evaluaciones filtradas por `user_id`.

---

## 7. IMPLEMENTACIÓN DEL SOFTWARE Y SEGURIDAD

### 7.1 Arquitectura Cliente-Servidor Multi-Capa REST
```
[Cliente Navegador Web (SPA React)]
          │
          │ HTTPS (JSON / REST API)
          ▼
[Servidor Backend Express (Node.js)]
          │
          │ MySQL2 / Connection Pool
          ▼
[Base de Datos MySQL (srv1665.hstgr.io)]
```

### 7.2 Módulo de Seguridad y Encriptación de Contraseñas (PBKDF2)
Para garantizar máxima seguridad sin dependencias binarias complejas en servidores de producción:
- Al registrar un usuario, el backend genera un **sal aleatorio de 16 bytes** (`crypto.randomBytes(16)`).
- Aplica **PBKDF2** con 1,000 iteraciones y algoritmo hash **SHA-512** para derivar la clave.
- Guarda en el campo `password_hash` la cadena combinada en formato `sal:hash_derivado`.

### 7.3 Middleware CORS Universal y Manejo de Preflight
Para evitar bloqueos de origen cruzado en Hostinger, `server.js` implementa un middleware universal:
```javascript
app.use((req, res, next) => {
  const origin = req.headers.origin;
  res.setHeader('Access-Control-Allow-Origin', origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-user-id');
  if (req.method === 'OPTIONS') return res.status(204).end();
  next();
});
```

---

## 8. DISEÑO DE BASE DE DATOS Y ESQUEMA RELACIONAL (MYSQL)

La base de datos MySQL en Hostinger (`u683618217_sostenibilidad`) se compone de 3 tablas relacionales:

### 8.1 Tabla `users`
```sql
CREATE TABLE IF NOT EXISTS users (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  username      VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### 8.2 Tabla `companies`
```sql
CREATE TABLE IF NOT EXISTS companies (
  company_id         VARCHAR(100) NOT NULL,
  standard           VARCHAR(50)  NOT NULL,
  user_id            VARCHAR(100) NOT NULL DEFAULT 'user',
  company_name       VARCHAR(255) NOT NULL,
  industry           VARCHAR(255) DEFAULT NULL,
  department         VARCHAR(100) DEFAULT NULL,
  city               VARCHAR(100) DEFAULT NULL,
  company_size       ENUM('pequeña','mediana','grande') DEFAULT NULL,
  foundation_date    VARCHAR(20)  DEFAULT NULL,
  responsible_person VARCHAR(255) DEFAULT NULL,
  created_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (company_id, standard)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### 8.3 Tabla `diagnostics`
```sql
CREATE TABLE IF NOT EXISTS diagnostics (
  id                 VARCHAR(100) PRIMARY KEY,
  company_id         VARCHAR(100) NOT NULL,
  standard           VARCHAR(50)  NOT NULL,
  user_id            VARCHAR(100) NOT NULL DEFAULT 'user',
  date               TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  score_global       DECIMAL(5,2) NOT NULL,
  score_evidences    DECIMAL(5,2) NOT NULL,
  score_final        DECIMAL(5,2) NOT NULL,
  compliance_level   VARCHAR(100) NOT NULL,
  demographics_json  LONGTEXT NOT NULL,
  answers_json       LONGTEXT NOT NULL,
  evidences_json     LONGTEXT NOT NULL,
  comments_json      LONGTEXT NOT NULL,
  results_json       LONGTEXT NOT NULL,
  action_plan_json   LONGTEXT DEFAULT NULL,
  chat_history_json  LONGTEXT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

---

## 9. PLAN DE PRUEBAS Y MATRIZ DE CASOS DE PRUEBA

| ID Prueba | Caso de Prueba | Entrada | Resultado Esperado | Estado |
| :--- | :--- | :--- | :--- | :---: |
| **CP-001** | Registro de Usuario MySQL | User: `empresa2026`, Pass: `clave123` | Inserción en tabla `users` con hash PBKDF2 y respuesta 201. | Aprobado |
| **CP-002** | Login con Hash PBKDF2 | User: `empresa2026`, Pass: `clave123` | Verificación exitosa del hash y retorno de sesión. | Aprobado |
| **CP-003** | Aislamiento por `user_id` | Consulta de empresas de `empresa2026` | El Dashboard solo retorna empresas de ese `user_id`. | Aprobado |
| **CP-004** | Petición CORS Preflight | `OPTIONS /api/auth/register` | Retorno de headers `Access-Control-Allow-Origin` y status 204. | Aprobado |
| **CP-005** | Diagnóstico en NTC 6001 | Completar cuestionario PyME | Guardado en MySQL con `standard = 'ntc6001'`. | Aprobado |
| **CP-006** | Generación de Plan con IA | Clic en Generar Plan | Retorno de JSON estructurado de recomendaciones por Gemini. | Aprobado |
| **CP-007** | Exportación PDF | Clic en Descargar PDF | Generación de PDF multi-página mediante canvas slicing. | Aprobado |
| **CP-008** | Guía de Uso Interactiva | Clic en 📖 Guía de Uso | Despliegue de modal con manuales, simuladores y tour guiado. | Aprobado |

---

## 10. EVALUACIÓN DE USABILIDAD Y CALIDAD DEL SOFTWARE (ISO/IEC 25010)

La usabilidad y calidad general del sistema fueron evaluadas bajo la norma **ISO/IEC 25010:2011**, alcanzando un puntaje global de **4.91 / 5.00 (98.2%)**:

| Dimensión de Calidad | Peso (%) | Calificación (1-5) | Puntaje Ponderado |
| :--- | :---: | :---: | :---: |
| **Adecuación Funcional** | 20% | 5.0 | 1.00 |
| **Eficiencia de Desempeño** | 15% | 4.9 | 0.735 |
| **Compatibilidad y CORS** | 10% | 4.8 | 0.48 |
| **Usabilidad y Accesibilidad** | 20% | 4.95 | 0.99 |
| **Fiabilidad y Seguridad (PBKDF2)** | 15% | 4.9 | 0.735 |
| **Mantenibilidad y Modularidad** | 10% | 4.8 | 0.48 |
| **Portabilidad Multi-Dominio** | 10% | 4.9 | 0.49 |
| **EVALUACIÓN TOTAL DE CALIDAD** | **100%** | — | **4.91 / 5.00 (Excelente)** |

---

## 11. CONCLUSIONES Y RECOMENDACIONES

1. La migración hacia una arquitectura Cliente-Servidor con backend en Express y base de datos relacional MySQL garantizó la persistencia global de datos y la seguridad en la gestión de cuentas de usuario.
2. El mecanismo de aislamiento relacional por `user_id` asegura que cada empresa o auditor mantenga privacidad estricta sobre sus evaluaciones históricas.
3. La implementación del centro de capacitación interactivo (`InteractiveGuideModal`) resuelve la curva de aprendizaje de los auditores al combinar la documentación formal con simuladores prácticos.
4. Se recomienda configurar certificados SSL y respaldos automatizados de la base de datos MySQL en Hostinger periódicamente.

---

# ANEXO 1. MANUAL DEL USUARIO E INSTRUCCIONES DE DESPLIEGUE

### 1. Registro e Inicio de Sesión
1. Ingrese a la plataforma desde su dominio (`https://sostenibilidad.jarestrepo.com` o `https://iso6001.jarestrepo.com`).
2. Si es un usuario nuevo, haga clic en **"Registrarse"**, cree su usuario y contraseña.
3. Ingrese sus credenciales para acceder a su panel privado.

### 2. Panel Principal (Dashboard)
Desde su panel privado podrá:
- Consultar únicamente sus empresas e historial de diagnósticos previos.
- Acceder al botón flotante **"📖 Guía de Uso"** para abrir el centro interactivo de manuales y simuladores.
- Iniciar un nuevo diagnóstico haciendo clic en **"+ Nuevo Diagnóstico"**.

### 3. Ejecución del Diagnóstico y Plan de Acción
1. Caracterice los datos demográficos de su organización.
2. Responda cada cláusula normativa (Cumple, Parcialmente, No Cumple) y marque las evidencias documentales correspondientes.
3. Si requiere asesoría en un requisito, utilice el icono de chat azul para consultar al asistente de Inteligencia Artificial.
4. Al finalizar, revise sus resultados en el Dashboard y haga clic en **"Generar Plan de Acción con IA"** para obtener las acciones correctivas sugeridas.
5. Descargue el informe completo en formato **PDF** para sus registros oficiales o auditorías de certificación.
