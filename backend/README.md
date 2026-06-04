# Backend de la Plataforma de Diagnóstico de Calidad Multi-Norma

Este es el servidor backend desarrollado en **Node.js/Express** para almacenar de forma persistente los diagnósticos y las empresas en una base de datos **MySQL**, reemplazando el uso de `localStorage` del navegador.

## Características

- Conexión a base de datos MySQL mediante un pool de conexiones optimizado (`mysql2/promise`).
- Rutas RESTful para la gestión de:
  - Empresas (`GET /api/companies` para el dashboard, `GET /api/companies/:id/history` para el historial).
  - Diagnósticos (`POST /api/diagnostics` para crear, `PUT /api/diagnostics/:id` para actualizar, `GET /api/diagnostics/latest` para comparación).
- Manejo seguro de la API Key de Gemini: la clave de inteligencia artificial **NUNCA** se envía ni se almacena en el servidor, se mantiene estrictamente en el lado del cliente (frontend) para máxima seguridad y privacidad.

## Requisitos Previos

- **Node.js** (versión 16 o superior recomendado).
- **MySQL Server** (corriendo localmente o en un servidor accesible).

## Configuración Paso a Paso

### 1. Inicializar la Base de Datos

1. Abra su cliente de base de datos MySQL (MySQL Workbench, phpMyAdmin o terminal).
2. Cree una nueva base de datos llamada `diagnostico_calidad`:
   ```sql
   CREATE DATABASE diagnostico_calidad CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```
3. Ejecute el script de migración inicial ubicado en `migrations/001_schema.sql` para crear las tablas necesarias:
   ```bash
   mysql -u tu_usuario -p diagnostico_calidad < migrations/001_schema.sql
   ```

### 2. Configurar Variables de Entorno

En la carpeta `backend/` encontrará un archivo llamado `.env` (creado a partir de `.env.example`). Ajuste los valores para que correspondan con su configuración de MySQL:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_contraseña_mysql
DB_NAME=diagnostico_calidad
PORT=3001
CORS_ORIGINS=http://localhost:5173
```

### 3. Instalar Dependencias

Desde la carpeta raíz del proyecto, o ingresando a la carpeta `backend/`, instale los paquetes requeridos:

```bash
cd backend
npm install
```

Las dependencias principales son:
- `express`: Servidor web.
- `mysql2`: Driver para conectar con MySQL con soporte de promesas.
- `dotenv`: Carga de variables de entorno desde `.env`.
- `cors`: Habilita peticiones cruzadas desde el frontend en desarrollo.

### 4. Iniciar el Servidor

Para iniciar el servidor de desarrollo del backend:

```bash
npm start
```

El servidor estará escuchando por defecto en el puerto `3001` (`http://localhost:3001`).

---

## Estructura de Endpoints de la API

### 1. Empresas
- `GET /api/companies`: Retorna la lista de empresas registradas, indicando la norma evaluada, número de reportes y fecha del último diagnóstico.
- `GET /api/companies/:companyId/history`: Obtiene el historial completo de diagnósticos de una empresa ordenados por fecha descendente.

### 2. Diagnósticos
- `POST /api/diagnostics`: Guarda un nuevo diagnóstico completo (datos demográficos, respuestas de la checklist, resultados agregados, comentarios del consultor e historial de chats).
- `PUT /api/diagnostics/:id`: Actualiza un diagnóstico existente. Utilizado principalmente para actualizar el historial de chats interactivos con la IA de forma progresiva.
- `GET /api/diagnostics/latest?companyId=...&standard=...`: Obtiene el diagnóstico más reciente para una empresa y norma particular (usado para la comparación en el formulario demográfico).
