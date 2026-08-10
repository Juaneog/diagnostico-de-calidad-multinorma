# 📖 GUÍA DE USO Y MANUAL DE USUARIO PASO A PASO
## Plataforma de Diagnóstico de Calidad y Sostenibilidad Multi-Norma (NTC 6001 / NTC 6496 / NTC 6503)

**Documento Operativo del Auditor y Evaluador Final**  
**Modelo de Documentación Adaptado:** ManField User Manual Standard (Anexo 1 - ManField Model)  
**Versión:** 2.0  
**Fecha:** 2026  

---

## TABLA DE CONTENIDO

1. **INTRODUCCIÓN**
   - 1.1 Capacidades del Sistema
   - 1.2 Requisitos del Sistema
2. **ACCESO AL SISTEMA — PANTALLA DE LOGIN**
   - 2.1 Pasos para Iniciar Sesión
3. **DESCRIPCIÓN DE LA INTERFAZ PRINCIPAL (DASHBOARD)**
4. **INICIO Y CONFIGURACIÓN DE UN NUEVO DIAGNÓSTICO**
   - 4.1 Caracterización de la Organización / Empresa
   - 4.2 Selección de Estándar Normativo
5. **DILIGENCIAMIENTO DEL CUESTIONARIO Y EVIDENCIAS**
   - 5.1 Selección de Estado de Cumplimiento
   - 5.2 Verificación de Lista de Evidencias Documentales
   - 5.3 Inclusión de Comentarios u Observaciones del Auditor
6. **USO DEL ASISTENTE DE INTELIGENCIA ARTIFICIAL CONTEXTUAL**
   - 6.1 Chat Flotante por Cláusula
   - 6.2 Ejemplos de Preguntas Frecuentes a la IA
7. **RESULTADOS Y GRÁFICAS INTERACTIVAS**
   - 7.1 Interpretación del Puntaje Global y Sectorizado
   - 7.2 Gráficos de Radar y Barras de Cumplimiento
8. **GENERACIÓN DEL PLAN DE ACCIÓN CON IA**
   - 8.1 Estructura de la Matriz de Mejora
   - 8.2 Priorización de Tareas y Tiempos Sugeridos
9. **EXPORTACIÓN DEL INFORME OFICIAL EN PDF**
   - 9.1 Proceso de Descarga e Impresión de Informe
10. **HISTORIAL Y SEGUIMIENTO COMPARATIVO**
    - 10.1 Comparación de Diagnósticos Anteriores
11. **SOLUCIÓN DE PROBLEMAS Y LISTA DE VERIFICACIÓN RÁPIDA**
12. **EJEMPLOS PRÁCTICOS DE DIAGNÓSTICO**

---

## 1. INTRODUCCIÓN

La **Plataforma de Diagnóstico de Calidad y Sostenibilidad Multi-Norma** es una herramienta web interactiva diseñada para guiar a micro, pequeñas y medianas empresas (PyMEs), establecimientos gastronómicos y servicios de alojamiento en la evaluación y certificación de las normas colombianas **NTC 6001**, **NTC 6496** y **NTC 6503**.

### 1.1 Capacidades del Sistema
- **Diagnóstico Multi-Norma Integrado:** Evaluación completa de NTC 6001, NTC 6496 y NTC 6503.
- **Cálculo de Cumplimiento Ponderado:** Algoritmo estadístico que pondera estados de implementación y evidencias documentales.
- **Asistencia Virtual con IA:** Consultas normativas contextuales mediante Inteligencia Artificial (Google Gemini API).
- **Generador de Planes de Acción:** Creación automatizada de matrices de tareas priorizadas (Alta, Media, Baja).
- **Exportación en PDF:** Emisión de informes oficiales formateados e imprimibles.
- **Historial Intertemporal:** Almacenamiento local para comparar el progreso en el tiempo.

### 1.2 Requisitos del Sistema
- **Navegador Web:** Google Chrome 90+, Mozilla Firefox 88+, Apple Safari 14+, Microsoft Edge 90+.
- **Conexión a Internet:** Requerida únicamente para las funciones de asistencia e Inteligencia Artificial.
- **Resolución Recomendada:** 1280 × 720 px o superior (soporte completo para pantallas móviles y de escritorio).

---

## 2. ACCESO AL SISTEMA — PANTALLA DE LOGIN

Al ingresar a la aplicación, el sistema verifica si existe una sesión activa. Si no la hay, muestra la pantalla de autenticación.

### 2.1 Pasos para Iniciar Sesión
1. Abra el navegador web y navega a la dirección del sistema.
2. Introduzca las credenciales de acceso:
   - **Usuario:** `user`
   - **Contraseña:** `pass`
3. Haga clic en el botón **"Iniciar Sesión"**.
4. Tras la validación, será redirigido automáticamente al Panel Principal (Dashboard).

---

## 3. DESCRIPCIÓN DE LA INTERFAZ PRINCIPAL (DASHBOARD)

El Dashboard principal está organizado en las siguientes secciones clave:
- **Encabezado:** Muestra el título del sistema, la norma activa seleccionada y el botón de cierre de sesión.
- **Tarjeta de Inicio de Diagnóstico:** Botón destacado **"+ Nuevo Diagnóstico"** para empezar una evaluación.
- **Accesos a Manuales Normativos:** Botones **"Manual NTC 6001"** y **"Manual NTC 6496/6503"** para consultar las guías técnicas.
- **Panel de Empresas Diagnosticadas:** Tarjetas con el historial de empresas evaluadas, mostrando Nombre, ID, Norma y Fecha del último informe.

---

## 4. INICIO Y CONFIGURACIÓN DE UN NUEVO DIAGNÓSTICO

### 4.1 Caracterización de la Organización
1. Haga clic en **"+ Nuevo Diagnóstico"**.
2. Complete el formulario demográfico con los datos oficiales:
   - **Nombre de la Empresa:** Razón social.
   - **ID de Empresa / NIT:** Código único de identificación.
   - **Departamento y Ciudad:** Ubicación geográfica de la sede.
   - **Sector / Industria:** Actividad económica principal.
   - **Responsable:** Nombre del auditor o evaluador.
   - **Tamaño de la Empresa:** Micro, Pequeña, Mediana o Grande.
3. *Autocompletado:* Si ingresa un ID de empresa que ya existe en el sistema, la plataforma le preguntará si desea cargar automáticamente los datos previamente guardados.

### 4.2 Selección de Estándar Normativo
Seleccione la norma técnica a evaluar según el sector:
- 🏢 **NTC 6001:** Sistemas de gestión para micro y pequeñas empresas.
- 🍽️ **NTC 6496:** Sostenibilidad para restaurantes y establecimientos gastronómicos.
- 🏨 **NTC 6503:** Sostenibilidad para hoteles, hostales y alojamientos.

---

## 5. DILIGENCIAMIENTO DEL CUESTIONARIO Y EVIDENCIAS

El cuestionario se presenta dividido por cláusulas normativas.

### 5.1 Selección de Estado de Cumplimiento
Para cada ítem o requisito de la norma, seleccione una opción:
- ✅ **Cumple:** El requisito se encuentra completamente implementado y documentado.
- ⚠️ **Parcialmente:** Existen avances en la implementación pero falta formalizar o completar registros.
- ❌ **No Cumple:** No se ha iniciado la implementación ni se cuenta con evidencia.
- ⚪ **No Aplica:** El requisito no es aplicable a la estructura de la empresa.

### 5.2 Verificación de Evidencias Documentales
Debajo de cada pregunta encontrará una lista de casillas con las evidencias sugeridas por la norma (manuales, formatos, facturas, registros de agua/energía, permisos sanitarios, etc.). Marque aquellas casillas cuya evidencia exista y esté verificada.

### 5.3 Registro de Comentarios
Utilice el campo de texto de comentarios para agregar detalles sobre la situación actual de la empresa o notas relevantes para el informe final.

---

## 6. USO DEL ASISTENTE DE INTELIGENCIA ARTIFICIAL CONTEXTUAL

En cada cláusula del cuestionario encontrará un **ícono de chat azul**.

### 6.1 Asistencia en Tiempo Real
1. Haga clic en el ícono de chat de la cláusula que desea consultar.
2. Se abrirá el modal interactivo con el contexto automático de la pregunta.
3. Puede escribir preguntas como:
   - *"¿Qué tipo de evidencia documental puedo usar para cumplir este punto?"*
   - *"¿Cómo implemento este requisito si mi empresa es de 3 empleados?"*
   - *"Dame un ejemplo de política de sostenibilidad para este ítem."*
4. La Inteligencia Artificial responderá en menos de 3 segundos con sugerencias prácticas alineadas a la NTC correspondiente.

---

## 7. RESULTADOS Y GRÁFICAS INTERACTIVAS

Al hacer clic en **"Finalizar Diagnóstico"**, se desplegará el informe visual de resultados:
- **Porcentaje Global de Cumplimiento:** Medidor numérico global de la organización.
- **Gráfico Radial (Radar):** Muestra el desempeño relativo en cada una de las cláusulas evaluadas.
- **Gráfico de Barras por Cláusula:** Desglose detallado de puntos obtenidos vs. puntos posibles.
- **Análisis Resumido de IA:** Puntos fuertes y áreas prioritarias de intervención identificadas automáticamente.

---

## 8. GENERACIÓN DEL PLAN DE ACCIÓN CON IA

En la parte inferior de la pantalla de resultados:
1. Haga clic en **"Generar Plan de Acción con IA"**.
2. El motor de Inteligencia Artificial procesará los hallazgos ("Parcialmente" y "No Cumple").
3. Se generará una tabla detallada que incluye:
   - **Acción Recomendada:** Tareas específicas a ejecutar.
   - **Prioridad:** Alta (rojo), Media (naranja) o Baja (verde).
   - **Recursos Necesarios:** Documentos, capacitación o presupuesto requerido.
   - **Plazo Sugerido:** Tiempo estimado en semanas o meses.

---

## 9. EXPORTACIÓN DEL INFORME OFICIAL EN PDF

1. En la pantalla de resultados o plan de acción, presione el botón **"Descargar Informe PDF"**.
2. El sistema construirá dinámicamente un documento PDF con:
   - Encabezado con datos de la empresa y logo institucional.
   - Resumen ejecutivo y gráficos de cumplimiento.
   - Desglose de respuestas por cláusula y comentarios.
   - Plan de acción completo priorizado.
3. El archivo se descargará automáticamente a su equipo listo para guardar o imprimir.

---

## 10. HISTORIAL Y SEGUIMIENTO COMPARATIVO

1. Desde el Dashboard principal, seleccione la empresa deseada en la lista.
2. Haga clic en **"Ver Historial"**.
3. Se desplegará una línea de tiempo con todos los diagnósticos realizados a esa organización.
4. Abra dos o más evaluaciones para visualizar el gráfico comparativo de avance en el tiempo.

---

## 11. SOLUCIÓN DE PROBLEMAS Y LISTA DE VERIFICACIÓN RÁPIDA

| Problema | Causa Probable | Solución |
| :--- | :--- | :--- |
| **El chat de IA no responde** | Falta de conexión a internet o clave API no configurada. | Verifique la conexión a internet e ingrese la clave Gemini en la configuración. |
| **No se genera el PDF** | Bloqueador de ventanas emergentes en el navegador. | Permitir descargas en el navegador o presione la combinación `Ctrl + P`. |
| **No se cargan los datos de una empresa previa** | ID de empresa diferente o almacenamiento de navegador borrado. | Verifique el número de ID exactamente como fue guardado en el historial. |

---

## 12. EJEMPLOS PRÁCTICOS DE DIAGNÓSTICO

### Ejemplo 1: Diagnóstico de una Microempresa de Calzado (NTC 6001)
- **Configuración:** Tamaño Micro, NTC 6001.
- **Resultado Típico:** Cumplimiento del 65% en gestión operativa y brechas en la cláusula 8 (Gestión Financiera).
- **Acción Sugerida por IA:** Implementación de flujo de caja mensual y formalización de perfil de cargos.

### Ejemplo 2: Diagnóstico de un Restaurante Turístico (NTC 6496)
- **Configuración:** Sector Gastronómico, NTC 6496.
- **Resultado Típico:** Cumplimiento del 80% ambiental con recomendación en el manejo de Aceites Vegetales Usados (AVU).
- **Acción Sugerida por IA:** Firma de convenio con gestor autorizado de AVU y capacitación al personal de cocina.
