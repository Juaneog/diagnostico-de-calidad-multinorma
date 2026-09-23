# 📖 GUÍA DE USO Y MANUAL DE OPERACIÓN DEL USUARIO
# PLATAFORMA DE DIAGNÓSTICO DE CALIDAD NTC 6001 (ISO 6001 PARA MiPyMES)
### Manual Paso a Paso para la Autoevaluación, Verificación de Evidencias, Asistencia con Inteligencia Artificial y Planes de Mejora en Micro y Pequeñas Empresas

---

**Entidad de Desarrollo:** Grupo de Investigación y Transferencia Tecnológica en Calidad y Sostenibilidad  
**Institución:** Tecnológico de Antioquia / Universidad de Córdoba  
**Sede:** Medellín – Montería, Colombia  
**Línea:** Gestión de Calidad, Productividad y Transferencia Tecnológica MiPyME  
**Estándar de Documentación:** Modelo de Manual de Usuario ManField (Anexo 1 / ISO/IEC 25010)  
**Versión de la Guía:** 3.5.0  
**URL de Acceso en Producción:** `https://iso6001.jarestrepo.com`  
**Año:** 2026  

---

## TABLA DE CONTENIDO GENERAL

1. **INTRODUCCIÓN Y PROPÓSITO DEL MANUAL**
   - 1.1 Finalidad de la Plataforma NTC 6001
   - 1.2 A quién está dirigida esta guía
   - 1.3 Beneficios estratégicos para la Micro y Pequeña Empresa
2. **REQUISITOS TÉCNICOS Y PREPARACIÓN PREVIA**
   - 2.1 Requisitos de Hardware y Navegadores Compatibles
   - 2.2 Materiales e Información Previa Recomendada para la Evaluación
3. **ACCESO AL SISTEMA Y GESTIÓN DE CUENTA**
   - 3.1 Procedimiento de Registro de Nueva Cuenta
   - 3.2 Inicio de Sesión (Login) y Criterios de Seguridad
   - 3.3 Recuperación de Acceso y Buenas Prácticas de Credenciales
4. **DESCRIPCIÓN DE LA INTERFAZ PRINCIPAL (DASHBOARD)**
   - 4.1 Encabezado y Barra de Herramientas
   - 4.2 Panel de Control de Evaluaciones
   - 4.3 Línea de Tiempo e Historial de Empresas Registradas
5. **INICIO DE UNA AUTOEVALUACIÓN: CARACTERIZACIÓN DEMOGRÁFICA**
   - 5.1 Formulario de Datos de la Organización
   - 5.2 Función de Autocompletado por NIT o Identificación Tributaria
   - 5.3 Reglas de Validación de Campos
6. **GUÍA METODOLÓGICA PARA LA EVALUACIÓN DE LAS 7 CLÁUSULAS DE LA NTC 6001**
   - 6.1 Anatomía de una Tarjeta de Requisito (`ClauseCard`)
   - 6.2 Criterios para Selección del Estado de Conformidad (Cumple, Parcial, No Cumple, No Aplica)
   - 6.3 Verificación de Evidencias Documentales y Físicas
   - 6.4 Registro de Notas de Auditoría y Observaciones de Campo
   - 6.5 Cláusula 4: Contexto y Dirección Estratégica (Guía de Inspección y Evidencias)
   - 6.6 Cláusula 5: Liderazgo y Compromiso Gerencial (Guía de Inspección y Evidencias)
   - 6.7 Cláusula 6: Gestión Comercial y Servicio al Cliente (Guía de Inspección y Evidencias)
   - 6.8 Cláusula 7: Gestión Operativa, Producción y Servicio (Guía de Inspección y Evidencias)
   - 6.9 Cláusula 8: Gestión Financiera, Contabilidad y Compras (Guía de Inspección y Evidencias)
   - 6.10 Cláusula 9: Talento Humano, Competencias y SST (Guía de Inspección y Evidencias)
   - 6.11 Cláusula 10: Evaluación del Desempeño y Mejora Continua (Guía de Inspección y Evidencias)
7. **USO DEL ASISTENTE VIRTUAL CON INTELIGENCIA ARTIFICIAL GENERATIVA (GEMINI)**
   - 7.1 Activación del Chat Contextual por Requisito
   - 7.2 Tipos de Asistencia que puede Brindar la IA
   - 7.3 Banco de 15 Preguntas y Consultas Prácticas Recomendadas
8. **INTERPRETACIÓN DEL TABLERO DE RESULTADOS Y MÉTRICAS**
   - 8.1 Indicador Global de Cumplimiento y Rangos de Madurez
   - 8.2 Interpretación del Gráfico Poligonal (Radar de Calidad)
   - 8.3 Gráfico de Barras de Cumplimiento por Cláusulas y Análisis de Brechas
9. **GENERACIÓN Y APLICACIÓN DEL PLAN DE ACCIÓN ASISTIDO POR IA**
   - 8.1 Solicitud y Procesamiento Automatizado de la Matriz de Mejora
   - 8.2 Estructura de la Matriz: Hallazgo, Acción, Prioridad, Plazo y Responsable
   - 8.3 Recomendaciones para la Implementación en la Empresa
10. **EXPORTACIÓN Y DESCARGA DEL INFORME OFICIAL EN PDF**
    - 10.1 Proceso de Generación mediante Canvas Slicing
    - 10.2 Estructura y Secciones del Documento PDF Generado
    - 10.3 Opciones de Impresión y Resguardo Oficial
11. **HISTORIAL Y SEGUIMIENTO INTERTEMPORAL DEL PROGRESO**
    - 11.1 Consulta de Diagnósticos Anteriores
    - 11.2 Medición del Avance Trimestral / Semestral de la Calidad
12. **GUÍA EXHAUSTIVA DE SOLUCIÓN DE PROBLEMAS (TROUBLESHOOTING)**
    - 12.1 Matriz de Incidencias Comunes, Causas y Soluciones Inmediatas
    - 12.2 Lista de Verificación Rápida de Funcionamiento
13. **CASOS DE ESTUDIO Y EJEMPLOS PRÁCTICOS DE APLICACIÓN REAL**
    - 13.1 Caso 1: Taller de Calzado y Marroquinería "CalzaModa" (Microempresa Manufacturera)
    - 13.2 Caso 2: Empresa de Servicios de TI y Soporte "ByteSoluciones" (Pequeña Empresa de Servicios)
    - 13.3 Caso 3: Comercializadora de Insumos Agropecuarios "AgroCampo" (Pequeña Empresa Comercial)
    - 13.4 Caso 4: Panadería y Alimentos Artesanales "Dulce Espiga" (Microempresa Agroalimentaria)

---

## 1. INTRODUCCIÓN Y PROPÓSITO DEL MANUAL

### 1.1 Finalidad de la Plataforma NTC 6001
La **Plataforma de Diagnóstico de Calidad NTC 6001** es una herramienta tecnológica interactiva diseñada específicamente para acompañar, capacitar y guiar a las micro y pequeñas empresas (MiPyMEs) de Colombia en el proceso de adopción, autodiagnóstico y maduración de su sistema de gestión de calidad bajo la norma técnica **NTC 6001:2018 (emitida por ICONTEC)**.

A diferencia de los diagnósticos teóricos convencionales, esta plataforma combina un **modelo matemático riguroso de ponderación de evidencias documentales** con un **agente de Inteligencia Artificial Generativa** que traduce los requisitos normativos a un lenguaje claro y formula soluciones prácticas a la escala de la empresa.

### 1.2 A quién está dirigida esta guía
Este documento ha sido redactado como una guía operativa paso a paso dirigida a:
- **Gerentes, directores y fundadores de MiPyMEs:** Que buscan ordenar sus procesos productivos y administrativos para crecer comercialmente.
- **Líderes de calidad y jefes de producción:** Encargados de preparar a la empresa para auditorías formales de certificación.
- **Consultores externos y asesores de cámaras de comercio:** Que coordinan programas de fortalecimiento empresarial y extensionismo tecnológico.
- **Estudiantes y docentes universitarios:** Que utilizan la plataforma en prácticas de ingeniería industrial y administración.

### 1.3 Beneficios estratégicos para la Micro y Pequeña Empresa
- **Diagnóstico Objetivo Inmediato:** Conozca el porcentaje real de cumplimiento normativo de su empresa en menos de 45 minutos.
- **Demostración de Evidencias Reales:** Sepa exactamente qué documentos (manuales, actas, formatos, registros, facturas) exige un auditor para validar cada cláusula.
- **Acompañamiento Continuo con IA:** Obtenga asesoría técnica gratuita las 24 horas del día por cada punto de la norma.
- **Hoja de Ruta de Mejora Continua:** Reciba un Plan de Acción con tareas claras priorizadas en Alta, Media y Baja urgencia, con tiempos sugeridos.
- **Reporte Oficial en PDF:** Descargue un informe ejecutivo listo para presentar a juntas directivas, entidades bancarias o clientes corporativos.

---

## 2. REQUISITOS TÉCNICOS Y PREPARACIÓN PREVIA

### 2.1 Requisitos de Hardware y Navegadores Compatibles

| Elemento | Requisito Mínimo | Requisito Recomendado |
| :--- | :--- | :--- |
| **Dispositivo** | Computador de escritorio, portátil o tablet con pantalla $\ge 10.1''$. | Computador con pantalla de 14'' o superior para trabajo visual óptimo. |
| **Navegador Web** | Google Chrome 90+, Mozilla Firefox 88+, Microsoft Edge 90+, Apple Safari 14+. | Versiones más recientes de Google Chrome o Microsoft Edge. |
| **Conexión a Internet** | Banda ancha cableada o Wi-Fi de 5 Mbps (o red celular 4G). | Conexión estable de 15 Mbps o superior para rapidez en IA y guardado. |
| **Resolución de Pantalla** | $1280 \times 720$ píxeles. | $1920 \times 1080$ píxeles (Full HD). |
| **Permisos de Navegador** | Habilitar ejecución de JavaScript y descargas automáticas de archivos PDF. | JavaScript activado por defecto. Permitir ventanas de descarga. |

### 2.2 Materiales e Información Previa Recomendada
Antes de iniciar la sesión de evaluación, se sugiere tener a mano:
1. **Información básica de la empresa:** Razón social, NIT, fecha de constitución legal, número actual de colaboradores (directos e indirectos) y organigrama básico.
2. **Documentación directiva y comercial:** Misión, visión o política (si existen), catálogo de productos/servicios, lista de precios y formatos de cotización.
3. **Documentación operativa:** Fichas técnicas de productos, instructivos de trabajo o recetas estándar, registros de compra a proveedores.
4. **Documentación contable básica:** Presupuesto del año vigente o estimación de costos mensuales y flujo de caja.
5. **Documentación de talento humano:** Contratos, reglamento interno (si aplica), afiliaciones a seguridad social y registros de capacitaciones previas.

---


## 3. ACCESO AL SISTEMA Y GESTIÓN DE CUENTA

### 3.1 Procedimiento de Acceso y Pantalla de Inicio
Al ingresar a la URL oficial de la plataforma (`https://iso6001.jarestrepo.com`), el usuario es recibido por el portal institucional donde se describen los objetivos del sistema y las opciones de navegación:

<figure>
  <img src="manual-uso-assets/01-inicio.png" alt="Pantalla de Bienvenida y Acceso Principal" />
  <figcaption>Figura 1. Portal de bienvenida y acceso a la plataforma de autodiagnóstico NTC 6001.</figcaption>
</figure>

En esta pantalla inicial, el usuario puede seleccionar el botón **Comenzar Autoevaluación** para iniciar de inmediato el proceso, o bien hacer clic en **Ingresar** si ya posee una cuenta registrada para acceder a su historial empresarial.

### 3.2 Catálogo de Normas Técnicas Disponibles
La plataforma presenta de forma transparente las normas técnicas abordadas, permitiendo al usuario contextualizarse en los requisitos de gestión de calidad orientados a micro y pequeñas empresas:

<figure>
  <img src="manual-uso-assets/01b-normas.png" alt="Catálogo de Normas Técnicas" />
  <figcaption>Figura 2. Fichas de información de la norma NTC 6001 y estándares sectoriales.</figcaption>
</figure>

### 3.3 Formulario de Inicio de Sesión (Login)
Para salvaguardar la confidencialidad de la información estratégica y los diagnósticos de cada empresa, el sistema solicita credenciales de acceso:

<figure>
  <img src="manual-uso-assets/02-ingreso.png" alt="Formulario de Inicio de Sesión" />
  <figcaption>Figura 3. Ventana modal para inicio de sesión seguro con usuario y contraseña.</figcaption>
</figure>

**Instrucciones para iniciar sesión:**
1. Ingrese su **Nombre de Usuario** en el primer campo.
2. Ingrese su **Contraseña** de acceso.
3. Haga clic en el botón **Ingresar al Sistema**.
4. En caso de no contar con una cuenta, presione el enlace **¿No tienes cuenta? Regístrate aquí**.

### 3.4 Registro de Nueva Cuenta de Usuario
Si es la primera vez que interactúa con la plataforma, el proceso de registro es inmediato y no requiere confirmación previa por correo electrónico:

<figure>
  <img src="manual-uso-assets/03-registro.png" alt="Formulario de Registro de Usuario" />
  <figcaption>Figura 4. Formulario de registro de nueva cuenta de auditor o empresario.</figcaption>
</figure>

**Buenas prácticas para la creación de credenciales:**
- Utilice un nombre de usuario identificable para su organización (ejemplo: `calzado_artesanal`, `servicios_medellin`).
- Defina una contraseña de al menos 8 caracteres que combine letras mayúsculas, minúsculas, números y al menos un símbolo especial (`#`, `$`, `@`).
- La plataforma encripta su contraseña utilizando **PBKDF2 con sal criptográfica aleatoria de 16 bytes y 100.000 iteraciones de hash SHA-512**, lo cual hace imposible que cualquier administrador o tercero pueda descifrar su clave.

---

## 4. DESCRIPCIÓN DE LA INTERFAZ PRINCIPAL (DASHBOARD)

### 4.1 Panel de Control y Selección de Empresa
Una vez autenticado, el usuario accede al panel principal de trabajo, donde se muestran las organizaciones previamente caracterizadas y los diagnósticos históricos:

<figure>
  <img src="manual-uso-assets/04-panel-principal.png" alt="Panel de Control Principal" />
  <figcaption>Figura 5. Panel de control principal con historial de empresas y botón de nuevo diagnóstico.</figcaption>
</figure>

Desde este panel usted puede:
1. **Crear Nuevo Diagnóstico:** Inicia una nueva auditoría desde cero.
2. **Seleccionar Empresa Existente:** Autocompleta los datos demográficos con base en el historial en base de datos.
3. **Consultar Historial:** Muestra la evolución en puntajes de diagnósticos previos para evaluar la mejora continua.

### 4.2 Selección de la Norma NTC 6001
Al iniciar una nueva autoevaluación, el sistema le permite confirmar la selección del estándar de gestión de calidad para micro y pequeñas empresas:

<figure>
  <img src="manual-uso-assets/05-seleccion-norma.png" alt="Selección de la Norma NTC 6001" />
  <figcaption>Figura 6. Selector de norma técnica para auditoría de calidad MiPyME.</figcaption>
</figure>

---

## 5. INICIO DE UNA AUTOEVALUACIÓN: CARACTERIZACIÓN DEMOGRÁFICA

### 5.1 Formulario de Datos de la Organización
Antes de evaluar los requisitos técnicos, es fundamental capturar la información demográfica de la empresa. Estos datos alimentarán el encabezado del informe ejecutivo oficial y el archivo PDF descargable:

<figure>
  <img src="manual-uso-assets/06-datos-organizacion.png" alt="Formulario de Datos de la Organización" />
  <figcaption>Figura 7. Formulario de caracterización empresarial y validación de campos obligatorios.</figcaption>
</figure>

**Campos obligatorios del formulario:**
- **Razón Social / Nombre Comercial:** Nombre legal o de marca de la empresa.
- **NIT / Documento de Identificación:** Número de Identificación Tributaria con dígito de verificación (ej. `900.123.456-7`).
- **Departamento y Ciudad:** Ubicación geográfica del establecimiento principal.
- **Sector Económico:** Clasificación de la actividad (Manufactura, Comercio, Servicios, Agroindustria).
- **Tamaño Empresarial:** Microempresa (hasta 10 empleados) o Pequeña Empresa (11 a 50 empleados) según el Decreto 957 de 2019.
- **Persona Responsable de la Evaluación:** Nombre y cargo de quien lidera la auditoría (ej. "María Camila Torres - Gerente General").

---

## 6. CUESTIONARIO DE REQUISITOS Y VERIFICACIÓN DE EVIDENCIAS

### 6.1 Estructura de la Tarjeta de Requisito (`ClauseCard`)
Cada uno de los requisitos normativos se presenta en una tarjeta visual interactiva que organiza la información para facilitar la labor del auditor:

<figure>
  <img src="manual-uso-assets/07-cuestionario-evidencias.png" alt="Cuestionario y Verificación de Evidencias" />
  <figcaption>Figura 8. Tarjeta interactiva de requisito normativo con lista de verificación de evidencias.</figcaption>
</figure>

**Componentes de la tarjeta:**
1. **Número y Título de la Cláusula:** Identificación formal según la NTC 6001:2018 (ej. *7.2 Planificación del Producto o Servicio*).
2. **Descripción del Requisito:** Texto explicativo en lenguaje claro que define lo que exige la norma.
3. **Botones de Estado de Conformidad:**
   - <span style="color:#15803d;font-weight:bold;">Cumple Totalmente (100%):</span> El requisito se encuentra implementado y estandarizado en la empresa.
   - <span style="color:#b45309;font-weight:bold;">Cumple Parcialmente (50%):</span> Se cuenta con avances o prácticas informales pero carecen de documentación o registro sistemático.
   - <span style="color:#b91c1c;font-weight:bold;">No Cumple (0%):</span> La empresa no ha abordado este requisito.
   - <span style="color:#475569;font-weight:bold;">No Aplica (Exclusión):</span> El requisito no es pertinente a la naturaleza de la empresa (ej. diseño y desarrollo en empresas que solo comercializan).
4. **Lista de Chequeo de Evidencias Documentales:** Casillas de verificación correspondientes a los soportes físicos o digitales que el auditor debe constatar.
5. **Campo de Observaciones y Notas de Campo:** Espacio para anotar hallazgos cualitativos, números de actas o justificaciones técnicas.

---


---

## 6.5 CHECKLIST DE INSPECCIÓN DE AUDITORÍA DETALLADO (CLÁUSULAS 4 A 10)

Para garantizar una auditoría homogénea y rigurosa en cualquier micro y pequeña empresa, a continuación se detallan las tablas de inspección técnica para cada una de las 7 cláusulas de la norma NTC 6001:2018:

### 1. Cláusula 4: Contexto de la Organización y Dirección Estratégica
Esta cláusula evalúa si la MiPyME conoce su entorno de mercado, sus partes interesadas y define un rumbo estratégico claro.

| Requisito NTC 6001 | Aspectos Clave a Inspeccionar | Evidencias Documentales Aceptables | Criterio de No Conformidad Mayor |
| :--- | :--- | :--- | :--- |
| **4.1 Comprensión de la Organización y su Contexto** | Análisis de factores externos (económicos, legales, tecnológicos) e internos (cultura, recursos). | Matriz DOFA / FODA actualizada, análisis PESTEL o acta de planeación estratégica anual. | No existe ningún análisis del entorno; la gerencia desconoce amenazas legales o de competencia directa. |
| **4.2 Comprensión de Necesidades de Partes Interesadas** | Identificación de clientes, proveedores, colaboradores, bancos y entidades de control (DIAN, MinTrabajo). | Matriz de partes interesadas con requisitos y expectativas identificadas. | Ausencia de identificación de requisitos legales o de clientes clave. |
| **4.3 Determinación del Alcance del SGC** | Delimitación clara de los productos, líneas o servicios cubiertos por el sistema de gestión. | Declaración formal del alcance del SGC en el manual o documento institucional. | Ambigüedad en qué líneas de producto aplican a la calidad y cuáles están excluidas. |
| **4.4 Enfoque a Procesos** | Mapeo de procesos estratégicos, misionales (operativos) y de apoyo de la empresa. | Mapa de procesos institucional y fichas de caracterización de procesos clave. | Operación caótica sin límites definidos entre ventas, producción y despacho. |

### 2. Cláusula 5: Liderazgo y Compromiso Gerencial
Evalúa el involucramiento real y visible de la alta dirección de la MiPyME en la calidad.

| Requisito NTC 6001 | Aspectos Clave a Inspeccionar | Evidencias Documentales Aceptables | Criterio de No Conformidad Mayor |
| :--- | :--- | :--- | :--- |
| **5.1 Liderazgo y Compromiso con el SGC** | Evidencia de que la gerencia asigna recursos y prioriza la calidad sobre la improvisación. | Asignación presupuestal para calidad, actas de seguimiento gerencial mensual. | La gerencia delega la calidad en terceros y no participa en las revisiones. |
| **5.2 Política de Calidad** | Política coherente con el propósito de la empresa, comunicada y comprendida por el personal. | Declaración de política de calidad firmada, visible en instalaciones y comprendida por el equipo. | Personal operativo desconoce por completo la política o esta no refleja la actividad real. |
| **5.3 Objetivos de Calidad** | Metas medibles alineadas con la política (ej. reducir devoluciones al 2%, entregar a tiempo el 95%). | Matriz de objetivos de calidad con metas, fórmulas de cálculo y periodicidad de medición. | Objetivos abstractos sin indicador numérico ni responsable asignado. |
| **5.4 Roles, Responsabilidades y Autoridad** | Claridad en quién hace qué en la estructura organizacional de la empresa. | Organigrama funcional y manual o fichas de funciones de los cargos clave. | Duplicidad de órdenes, vacíos de autoridad donde nadie responde por rechazos. |

### 3. Cláusula 6: Gestión Comercial y Servicio al Cliente
Evalúa la relación con el mercado, la toma de pedidos y el cumplimiento de compromisos comerciales.

| Requisito NTC 6001 | Aspectos Clave a Inspeccionar | Evidencias Documentales Aceptables | Criterio de No Conformidad Mayor |
| :--- | :--- | :--- | :--- |
| **6.1 Identificación de Requisitos de Productos y Servicios** | Especificaciones técnicas de lo que el cliente solicita (tallas, materiales, tiempos de entrega). | Fichas técnicas comerciales, catálogo de productos, cotizaciones detalladas. | Venta de productos sin especificaciones claras, generando constantes disputas. |
| **6.2 Revisión de Requisitos antes del Compromiso** | Verificación de capacidad técnica, inventario y plazo antes de aceptar una orden de compra. | Registro de revisión de cotizaciones, órdenes de compra firmadas, confirmación de pedidos. | Aceptación de pedidos que la fábrica o equipo no tiene capacidad de entregar. |
| **6.3 Comunicación con el Cliente y Retroalimentación** | Canales claros para cotizaciones, seguimiento a despachos y atención de reclamos. | Canales formales (WhatsApp corporativo, correo, CRM) y registro de encuestas de satisfacción. | Inexistencia de mecanismos para medir si los clientes están conformes con el servicio. |
| **6.4 Gestión de Peticiones, Quejas y Reclamos (PQR)** | Procedimiento para registrar, investigar y responder formalmente a quejas. | Libro o formato de registro de PQR con causa analizada y respuesta documentada. | Quejas frecuentes de clientes ignoradas o resueltas verbalmente sin corregir la causa raíz. |

### 4. Cláusula 7: Gestión Operativa, Producción y Prestación del Servicio
El núcleo misional de la micro y pequeña empresa: cómo planifica, ejecuta y controla sus operaciones.

| Requisito NTC 6001 | Aspectos Clave a Inspeccionar | Evidencias Documentales Aceptables | Criterio de No Conformidad Mayor |
| :--- | :--- | :--- | :--- |
| **7.1 Planificación y Control Operacional** | Programación de la producción o cronograma de prestación de servicios. | Órdenes de producción, cronogramas de trabajo semanales, hojas de ruta operativa. | Producción completamente a ciegas, sin programación de lotes ni control de tiempos. |
| **7.2 Identificación y Trazabilidad** | Capacidad de rastrear un producto terminado hasta la materia prima o lote utilizado. | Etiquetas de identificación de lote, remisiones, registros de trazabilidad en bodega. | Imposibilidad de determinar qué lote de insumo causó una falla o lote defectuoso. |
| **7.3 Control de la Producción y del Servicio** | Parámetros estándar de operación (temperaturas, recetas, tiempos de fraguado, estándares de código). | Fichas técnicas de proceso, instructivos de trabajo operativos (POEs) en puesto de trabajo. | Operarios realizando el mismo trabajo de maneras totalmente distintas por falta de instructivo. |
| **7.4 Mantenimiento de Infraestructura y Equipos** | Cuidado preventivo de maquinaria crítica para evitar paradas no programadas. | Cronograma de mantenimiento preventivo, hojas de vida de maquinaria, registros de lubricación. | Maquinaria crítica operando sin mantenimiento hasta que se rompe, deteniendo la entrega. |
| **7.5 Control de Dispositivos de Medición (Metrología)** | Calibración y verificación de balanzas, termómetros, calibradores o cintas métricas. | Certificados de calibración de laboratorios acreditados, registros de verificación interna. | Uso de básculas o instrumentos descalibrados que alteran la cantidad o calidad vendida. |
| **7.6 Control de Salidas No Conformes (Producto Defectuoso)** | Identificación y segregación física de piezas o servicios defectuosos para que no lleguen al cliente. | Área señalizada de "Producto No Conforme", registros de disposición (reproceso, desecho). | Productos con fallas mezclados con producto listo para despachar al cliente. |

### 5. Cláusula 8: Gestión Financiera, Costos y Compras
Asegura la viabilidad económica y la selección idónea de proveedores e insumos.

| Requisito NTC 6001 | Aspectos Clave a Inspeccionar | Evidencias Documentales Aceptables | Criterio de No Conformidad Mayor |
| :--- | :--- | :--- | :--- |
| **8.1 Presupuesto y Control de Costos** | Estructura de costos por producto y control de gastos fijos y variables. | Presupuesto anual de ingresos y gastos, hojas de costos unitarios actualizadas. | La empresa vende productos desconociendo su margen real de utilidad o produciendo a pérdida. |
| **8.2 Selección y Evaluación de Proveedores** | Criterios para escoger proveedores confiables en calidad, precio y tiempos de entrega. | Criterios de selección documentados y formato de evaluación anual de proveedores clave. | Compras realizadas al azar al proveedor más barato sin verificar calidad ni garantías. |
| **8.3 Inspección y Verificación de Insumos Recibidos** | Revisión de materias primas antes de ingresarlas a bodega o producción. | Formato de recepción técnica de materias primas con visto bueno de aceptación. | Insumos defectuosos incorporados a producción por falta de inspección en recepción. |

### 6. Cláusula 9: Talento Humano, Competencias y SST
Evalúa la gestión de las personas que hacen posible la calidad en la empresa.

| Requisito NTC 6001 | Aspectos Clave a Inspeccionar | Evidencias Documentales Aceptables | Criterio de No Conformidad Mayor |
| :--- | :--- | :--- | :--- |
| **9.1 Perfiles de Cargo y Competencias Requeridas** | Definición de educación, experiencia y habilidades para cada puesto. | Manual de perfiles de cargo documentado y actualizado. | Contratación empírica sin criterios de competencia mínimos para labores críticas. |
| **9.2 Plan Anual de Capacitación y Entrenamiento** | Programa para cerrar brechas de conocimiento en el personal operativo y administrativo. | Cronograma anual de capacitaciones, listas de asistencia y evaluaciones de eficacia. | Ninguna capacitación en el año; personal operando maquinaria sin entrenamiento. |
| **9.3 Seguridad y Salud en el Trabajo (SG-SST)** | Cumplimiento básico de estándares mínimos de SST (Resolución 0312 de 2019). | Matriz de identificación de peligros y valoración de riesgos, entrega documentada de EPP. | Ausencia total del SG-SST; trabajadores laborando en condiciones de peligro inminente. |
| **9.4 Clima Organizacional y Bienestar** | Mecanismos de comunicación interna y motivación del personal. | Registro de reuniones de equipo, buzón de sugerencias o actividades de bienestar. | Alta rotación de personal por ambiente laboral hostil, afectando la estabilidad del producto. |

### 7. Cláusula 10: Evaluación del Desempeño y Mejora Continua
Cierra el ciclo PHVA mediante la autocrítica constructiva y la acción preventiva.

| Requisito NTC 6001 | Aspectos Clave a Inspeccionar | Evidencias Documentales Aceptables | Criterio de No Conformidad Mayor |
| :--- | :--- | :--- | :--- |
| **10.1 Auditorías Internas de Calidad** | Evaluación periódica e imparcial de todos los procesos de la empresa. | Programa anual de auditoría interna, plan de auditoría y reporte formal de hallazgos. | La empresa nunca se ha auditado internamente ni ha revisado sus propios procesos. |
| **10.2 Revisión por la Dirección** | Reunión formal de la gerencia para analizar el estado global del sistema de gestión. | Acta formal de revisión gerencial con decisiones sobre recursos y mejoras. | La gerencia nunca analiza los indicadores de calidad ni define acciones estratégicas. |
| **10.3 Acciones Correctivas y Mejora Continua** | Tratamiento sistemático de causas de fallas para evitar que se repitan en el futuro. | Formatos de acción correctiva con análisis de causa raíz (diagrama de Ishikawa, 5 Porqués). | Solución superficial de problemas ("apagar incendios") sin corregir la causa profunda. |


## 7. USO DEL ASISTENTE VIRTUAL CON INTELIGENCIA ARTIFICIAL GENERATIVA (GEMINI)

### 7.1 Consulta Inteligente en Tiempo Real
Si el auditor o empresario desconoce cómo interpretar un requisito o qué tipo de documento debe crear, puede hacer clic en el botón **Preguntar a la IA**:

<figure>
  <img src="manual-uso-assets/08-asistente-ia.png" alt="Asistente Virtual con IA Gemini" />
  <figcaption>Figura 9. Asistente cognitivo contextual alimentado con Google Gemini 2.5 Flash.</figcaption>
</figure>

El asistente responde en pocos segundos ofreciendo explicaciones pedagógicas adaptadas al tamaño y sector de la empresa, e incluso genera borradores completos de políticas, procedimientos y formatos de registro.

### 7.2 Manual y Guía de Uso Integrada
En todo momento, el usuario puede presionar el botón **Ver Guía / Manual** en el encabezado para consultar la documentación completa sin abandonar su sesión:

<figure>
  <img src="manual-uso-assets/09-guia-integrada.png" alt="Guía Integrada en la Aplicación" />
  <figcaption>Figura 10. Visor interactivo de documentación técnica y guía operativa dentro de la aplicación.</figcaption>
</figure>


## 8. INTERPRETACIÓN DEL TABLERO DE RESULTADOS Y MÉTRICAS

Al finalizar de calificar todas las cláusulas, presione el botón verde **`Finalizar Diagnóstico`**. El sistema procesará el algoritmo de ponderación y presentará el Dashboard de Resultados:

### 8.1 Indicador Global de Cumplimiento
En la esquina superior izquierda se despliega el porcentaje final $C_{total}$:
- **90% a 100% (Verde Oscuro - Nivel Excelente):** La empresa está lista para solicitar la auditoría externa de certificación con ICONTEC.
- **70% a 89% (Verde Claro - Nivel Satisfactorio):** La organización tiene bases sólidas. Requiere subsanar hallazgos puntuales antes de certificarse.
- **40% a 69% (Ámbar - Nivel Básico):** Existen procesos en marcha pero falta formalización documental y evidencias verificables.
- **0% a 39% (Rojo - Nivel Crítico):** Alto riesgo de desorden operativo e incumplimiento legal. Se recomienda implementar urgentemente el Plan de Acción.

### 8.2 Interpretación del Gráfico Poligonal (Radar de Calidad)
El gráfico de radar traza una figura geométrica de 7 puntas correspondiente a las cláusulas evaluadas:
- **Figura Equilibrada y Amplia:** Si la figura cubre uniformemente los bordes exteriores, la empresa tiene un sistema armónico donde la parte comercial, operativa y humana avanzan al mismo ritmo.
- **Figura Asimétrica ("Punta de Flecha"):** Si una cláusula sobresale (ejemplo: Operaciones al 90%) pero otra se hunde hacia el centro (ejemplo: Financiera o Dirección al 30%), indica un **cuello de botella organizacional severo**. La empresa produce bien pero puede quebrar por descontrol de caja o falta de visión estratégica.

---

## 9. GENERACIÓN Y APLICACIÓN DEL PLAN DE ACCIÓN ASISTIDO POR IA

### 9.1 Solicitud de la Matriz de Mejora
En la pantalla de resultados, haga clic en el botón destacado **`🤖 Generar Plan de Acción con IA`**:
1. El motor de la plataforma compila todos los requisitos calificados en "Parcialmente" o "No Cumple".
2. Se envía una solicitud analítica a Gemini.
3. En menos de 4 segundos, se despliega una matriz de mejoramiento estructurada con los siguientes componentes:
   - **Resumen Ejecutivo:** Diagnóstico global del estado de la empresa emitido por el modelo.
   - **Recomendación Estratégica Principal:** El consejo directivo más urgente para el gerente.
   - **Tabla de Acciones Priorizadas:** Listado de tareas concretas clasificadas en:
     - **Alta Prioridad (Rojo):** No conformidades que implican riesgos legales, parálisis operativa o pérdida directa de dinero/clientes. Plazo sugerido: 1 a 4 semanas.
     - **Media Prioridad (Ámbar):** Falta de estandarización o medición que debilita el control interno. Plazo sugerido: 5 a 12 semanas.
     - **Baja Prioridad (Verde):** Mejoras de documentación, formatos auxiliares o señalización. Plazo sugerido: 13 a 24 semanas.

---

## 10. EXPORTACIÓN Y DESCARGA DEL INFORME OFICIAL EN PDF

### 10.1 Proceso de Generación
1. En la parte superior derecha de los resultados, presione **`📥 Descargar Informe PDF`**.
2. El sistema ejecutará el algoritmo de **Canvas Slicing**, digitalizando el reporte a resolución 2x para asegurar nitidez fotográfica en textos y gráficos.
3. Automáticamente se generará un archivo nombrado: `Diagnostico_NTC6001_[NombreEmpresa]_[Fecha].pdf` en su carpeta de descargas.

### 10.2 Estructura del Informe Oficial Descargable
El documento PDF compilado incluye:
1. **Encabezado Institucional:** Membrete formal con fecha, hora y datos del auditor responsable.
2. **Ficha Demográfica de la MiPyME:** Razón social, NIT, ubicación geográfica, sector y tamaño.
3. **Resumen Ejecutivo y Métricas:** Porcentaje global de cumplimiento y gráfica de radar a color.
4. **Desglose Cláusula por Cláusula:** Tabla detallada con los puntajes de las cláusulas 4 a 10.
5. **Inventario de Evidencias Verificadas:** Lista de cotejo de evidencias que la empresa demostró poseer.
6. **Plan de Acción de Mejoramiento Continuo:** Matriz íntegra generada por la IA con tareas, plazos y responsables.
7. **Espacio para Firmas:** Sección formal para la firma del Evaluador y de la Gerencia General.

---

## 11. HISTORIAL Y SEGUIMIENTO INTERTEMPORAL DEL PROGRESO

La plataforma permite a la empresa medir su evolución en el tiempo:
1. En el Dashboard principal, localice la tarjeta de su empresa y haga clic en **`Ver Historial`**.
2. Se desplegará una línea de tiempo cronológica con todas las evaluaciones realizadas en el año.
3. Podrá abrir diagnósticos anteriores para verificar cómo ha aumentado el porcentaje de cumplimiento tras implementar las recomendaciones del Plan de Acción.

---

## 12. GUÍA EXHAUSTIVA DE SOLUCIÓN DE PROBLEMAS (TROUBLESHOOTING)

| Incidencia / Síntoma | Causa Más Probable | Solución Paso a Paso |
| :--- | :--- | :--- |
| **No puedo registrarme, indica "Usuario ya existe".** | Ya existe otra cuenta con ese mismo nombre de usuario en la base de datos. | Elija un nombre alternativo agregando las siglas de su empresa o el año (ejemplo: `calzados_2026`). |
| **Olvido de contraseña de acceso.** | Pérdida de la clave secreta registrada. | Por seguridad criptográfica PBKDF2, las claves no son reversibles. Solicite al administrador del sistema restablecer su clave temporalmente. |
| **El chat de IA muestra "Error al conectar con el Asistente".** | Desconexión transitoria de internet o saturación en los servidores de Google Gemini. | Verifique que su equipo tenga conexión a internet. Espere 10 segundos y vuelva a presionar el botón de enviar consulta. |
| **Al presionar "Finalizar", la página no avanza.** | Quedó alguna cláusula o pregunta obligatoria sin calificar. | Revise las pestañas del cuestionario; el sistema resaltará con borde rojo las preguntas que aún no tienen respuesta seleccionada. |
| **El botón "Descargar PDF" no descarga ningún archivo.** | El navegador tiene bloqueadas las descargas automáticas o ventanas emergentes. | Revise la barra de direcciones de su navegador, haga clic en el icono de candado o pop-up bloqueado y seleccione **"Permitir siempre descargas en este sitio"**. |
| **Los textos del PDF descargado se ven cortados.** | Se modificó el zoom del navegador durante la generación. | Asegúrese de que el zoom de su navegador esté configurado en el 100% (`Ctrl + 0`) antes de presionar el botón de descarga de PDF. |
| **No aparecen las empresas que registré ayer.** | Inició sesión con un nombre de usuario diferente al utilizado el día anterior. | Verifique que el usuario activo coincida exactamente con el de la cuenta creadora, ya que la base de datos aísla estrictamente por `user_id`. |
| **El autocompletado no carga los datos del NIT.** | El NIT se ingresó con puntos o guiones diferentes al registro original. | Ingrese el NIT respetando el formato numérico original registrado en el primer diagnóstico. |

---


---

## 13. CASOS DE ESTUDIO Y EJEMPLOS PRÁCTICOS DE APLICACIÓN REAL (EXPANDIDOS)

Para ilustrar de forma tangible cómo la plataforma transforma la gestión de calidad en el tejido empresarial colombiano, se presentan cuatro casos de estudio documentados en distintos sectores económicos:

### 13.1 Caso 1: Taller de Calzado y Marroquinería "CalzaModa" (Microempresa Manufacturera)
- **Razón Social:** CalzaModa Artesanal S.A.S.
- **Ubicación:** Barrio Restrepo, Bogotá D.C.
- **Tamaño:** Microempresa (7 trabajadores: 5 operarios de corte y costura, 1 administrador/ventas, 1 gerente de taller).
- **Actividad:** Fabricación de calzado formal de cuero para dotación corporativa y venta mayorista.
- **Situación Inicial:** La empresa operaba de manera puramente empírica. Los pedidos se anotaban en una libreta de papel, no existían fichas técnicas de corte ni registros de control de calidad, lo que ocasionaba una tasa de devolución del 8.5% por fallas de costura y diferencias de tono en el cuero.

#### Diagnóstico Inicial en la Plataforma NTC 6001
Al realizar la primera autoevaluación, CalzaModa obtuvo un puntaje global del **38.4% (Nivel 1: Crítico)**:
- Cláusula 4 (Dirección Estratégica): 35.0%
- Cláusula 5 (Liderazgo): 40.0%
- Cláusula 6 (Comercial): 50.0%
- Cláusula 7 (Operativa / Producción): 32.0%
- Cláusula 8 (Financiera): 45.0%
- Cláusula 9 (Talento Humano): 35.0%
- Cláusula 10 (Mejora Continua): 20.0%

#### Plan de Acción Asistido por IA Gemini
A través de la plataforma, el gerente formuló las siguientes acciones inmediatas:
1. **Fichas Técnicas de Producto:** Se elaboraron 4 fichas estándar especificando tipo de suela, calibre de cuero, tono pantone y tipo de costura.
2. **Inspección de Entrada de Cuero:** Formato sencillo para verificar grosor y defectos antes de cortar la materia prima.
3. **Control de Calidad en Empaque:** Lista de chequeo final antes de embalar cada par (inspección visual de pegado, limpieza y simetría).

#### Resultados Post-Implementación (6 Meses Después)
En la segunda autoevaluación, el puntaje ascendió al **84.2% (Nivel 3: Satisfactorio)**. Las devoluciones cayeron al 0.9% y la empresa logró una licitación para dotación empresarial por valor de $120.000.000 COP gracias a su manual de calidad.

---

### 13.2 Caso 2: Empresa de Servicios TI "ByteSoluciones" (Pequeña Empresa de Servicios)
- **Razón Social:** ByteSoluciones de Software y Redes S.A.S.
- **Ubicación:** Ruta N, Medellín, Antioquia.
- **Tamaño:** Pequeña Empresa (16 ingenieros y desarrolladores).
- **Actividad:** Desarrollo de software a la medida y administración de infraestructura en la nube.
- **Situación Inicial:** A pesar de su alta sofisticación técnica, la empresa carecía de procesos comerciales formales. Los contratos se pactaban verbalmente o por correo informal, lo que derivaba en "corrimiento del alcance" (*scope creep*) y quejas de clientes por demoras en entregas.

#### Diagnóstico Inicial y Plan de Acción
Puntaje inicial: **52.1% (Nivel 2: Básico)**. La principal debilidad residía en la Cláusula 6 (Comercial) y la Cláusula 10 (Gestión de PQR).
- **Acción 1:** Implementación de actas formales de definición de requerimientos (*Statement of Work*) firmadas por el cliente antes de iniciar cada sprint.
- **Acción 2:** Procedimiento documentado de control de cambios con estimación presupuestal.
- **Acción 3:** Encuesta semestral de satisfacción del cliente con métrica NPS (*Net Promoter Score*).

#### Resultados Obtenidos
Puntaje alcanzado a los 4 meses: **89.6% (Nivel 4: Excelencia)**. La empresa obtuvo la certificación formal NTC 6001 por parte de ICONTEC, lo que le permitió habilitarse como proveedora del Estado a través del portal Colombia Compra Eficiente.

---

### 13.3 Caso 3: Comercializadora de Insumos "AgroCampo" (Pequeña Empresa Comercial)
- **Razón Social:** Distribuidora AgroCampo del Sinú S.A.S.
- **Ubicación:** Montería, Córdoba.
- **Tamaño:** Pequeña Empresa (12 empleados).
- **Actividad:** Venta, almacenamiento y distribución de fertilizantes, semillas y medicamentos veterinarios.
- **Puntaje Inicial:** 44.7% (Deficiencias graves en almacenamiento, control de inventario y fichas de seguridad de productos químicos).
- **Acciones Implementadas:** Estandarización de bodegaje bajo metodología PEPS (Primeras en Entrar, Primeras en Salir), señalización de sustancias peligrosas y capacitación del personal en rotulación SGA (Sistema Globalmente Armonizado).
- **Puntaje Final:** **86.8% (Listo para Certificación)**. Reducción a cero de mermas por vencimiento de productos.

---

### 13.4 Caso 4: Panadería y Alimentos Artesanales "Dulce Espiga" (Microempresa Alimentaria)
- **Razón Social:** Panificadora Dulce Espiga E.U.
- **Ubicación:** Manizales, Caldas.
- **Tamaño:** Microempresa (5 trabajadores).
- **Actividad:** Producción de panadería artesanal y repostería para cafeterías locales.
- **Puntaje Inicial:** 41.0% (Carencia de registros de limpieza, temperaturas de horneado y trazabilidad de harina y lácteos).
- **Acciones Implementadas:** Diseño de instructivos visuales de Buenas Prácticas de Manufactura (BPM), calibración de termómetros de horno y registro diario de lotes de harina.
- **Puntaje Final:** **82.5%**. Obtención de concepto sanitario favorable 100% por parte del INVIMA y apertura de 3 nuevos clientes institucionales.

---

## 14. DICCIONARIO DE TÉRMINOS Y GLOSARIO DE CALIDAD PARA MiPyMES

Para facilitar la comprensión del marco normativo, a continuación se definen los 30 términos fundamentales utilizados en la plataforma y en las auditorías de la NTC 6001:

1. **Acción Correctiva:** Acción tomada para eliminar la causa raíz de una no conformidad identificada y prevenir que vuelva a ocurrir.
2. **Alcance del Sistema:** Delimitación formal de las líneas de producto, procesos y sedes físicas cubiertas por la gestión de calidad.
3. **Alta Dirección:** Persona o grupo de personas que dirige y controla una empresa al más alto nivel (gerente, propietario, junta).
4. **Auditoría Interna:** Proceso sistemático, independiente y documentado para obtener evidencias y evaluarlas objetivamente.
5. **Calibración:** Operación que compara las lecturas de un instrumento de medición contra un patrón trazable a estándares internacionales.
6. **Caracterización de Procesos:** Ficha que describe las entradas, actividades, salidas, responsables e indicadores de un proceso.
7. **Ciclo PHVA:** Espiral de mejora continua: Planificar (P), Hacer (H), Verificar (V) y Actuar (A).
8. **Cliente:** Organización o persona que recibe un producto o servicio (puede ser consumidor final o empresa intermediaria).
9. **Competencia:** Capacidad demostrada para aplicar conocimientos y habilidades en el puesto de trabajo.
10. **Conformidad:** Cumplimiento total de un requisito normativo, legal o contractual especificado.
11. **DOFA / FODA:** Herramienta de análisis estratégico que identifica Debilidades, Oportunidades, Fortalezas y Amenazas.
12. **Eficacia:** Grado en que se realizan las actividades planificadas y se alcanzan los resultados previstos.
13. **Eficiencia:** Relación entre el resultado alcanzado y los recursos (tiempo, dinero, materiales) utilizados.
14. **Evidencia Objetiva:** Datos que respaldan la existencia o veracidad de algo (documentos, registros, fotos, testimonios).
15. **Gestión del Riesgo:** Actividades coordinadas para dirigir y controlar una organización con respecto a los riesgos e incertidumbres.
16. **Hallazgo de Auditoría:** Resultados de la evaluación de la evidencia de auditoría recopilada frente a los criterios de la norma.
17. **Indicador de Gestión:** Expresión cuantitativa que permite medir el comportamiento o desempeño de un proceso.
18. **Liderazgo:** Compromiso activo de la gerencia para inspirar y facilitar los recursos necesarios para el éxito del SGC.
19. **Mapa de Procesos:** Diagrama visual que muestra la interacción sistémica entre todos los procesos de la empresa.
20. **Mejora Continua:** Actividad recurrente para mejorar el desempeño de los productos, servicios y procesos organizacionales.
21. **No Conformidad:** Incumplimiento de un requisito normativo o interno de la empresa.
22. **Objetivo de Calidad:** Meta cuantificable que la organización se propone alcanzar en un periodo determinado.
23. **Parte Interesada:** Persona u organización que puede afectar, verse afectada o percibirse como afectada por una decisión.
24. **Política de Calidad:** Intenciones globales y orientación de una organización relativas a la calidad, expresadas por la alta dirección.
25. **Procedimiento:** Forma especificada de llevar a cabo una actividad o un proceso de manera repetible.
26. **Producto No Conforme:** Producto o servicio que no satisface los requisitos mínimos de calidad pactados.
27. **Queja o Reclamo:** Manifestación formal de insatisfacción dirigida a una organización en relación con sus productos o servicios.
28. **Registro:** Documento que presenta resultados obtenidos o proporciona evidencia de actividades desempeñadas.
29. **Trazabilidad:** Capacidad para reconstruir el historial, aplicación o localización de un producto o lote mediante registros.
30. **Validación:** Confirmación mediante examen y evidencia objetiva de que se cumplen los requisitos para una utilización específica.

---

## 15. GUÍA DE PREPARACIÓN PARA LA AUDITORÍA DE CERTIFICACIÓN ICONTEC

Si su empresa ha alcanzado un puntaje superior al 85% en la plataforma, se encuentra en condiciones óptimas para someterse a la auditoría formal de certificación ante el ICONTEC. A continuación se presentan las recomendaciones operativas para el día de la auditoría:

### 15.1 Etapas del Proceso de Certificación
1. **Solicitud de Cotización y Postulación:** Envío del formulario formal al ICONTEC adjuntando el RUT, Cámara de Comercio y el Alcance del SGC.
2. **Auditoría de Fase 1 (Revisión Documental):** El auditor líder de ICONTEC revisa la documentación del sistema (política, objetivos, caracterizaciones, manual) sin visitar necesariamente la planta.
3. **Auditoría de Fase 2 (Evaluación en Sitio):** Inspección presencial en instalaciones para constatar que lo documentado se cumple fielmente en la práctica operativa.
4. **Tratamiento de No Conformidades:** Si se detectan hallazgos menores, la empresa dispone de 30 a 60 días para remitir planes de acción correctiva.
5. **Emisión del Certificado:** Una vez aprobado el informe por el comité técnico, se entrega el certificado con vigencia de 3 años, sujeto a auditorías de seguimiento anual.

### 15.2 Recomendaciones Clave para el Día de la Auditoría Presencial
- **Puntualidad y Orden en el Espacio:** Tenga habilitada una mesa o sala limpia para el equipo auditor, con acceso a internet e impresora.
- **Carpetas de Evidencias Identificadas:** Organice las evidencias documentales en carpetas físicas o digitales numeradas según las 7 cláusulas de la NTC 6001.
- **Responda Estrictamente lo que se Pregunte:** En una auditoría de calidad no es necesario extenderse en explicaciones innecesarias; muestre el registro o documento solicitado de forma serena.
- **Involucre a los Operarios:** Los auditores entrevistarán al personal de base para comprobar si conocen la política y sus instructivos de trabajo. Capacítelos previamente en conceptos clave.
- **El Auditor es un Aliado de la Mejora:** Si se identifica un hallazgo, tómelo como una oportunidad técnica para blindar su negocio contra pérdidas operativas.

---

## 16. PREGUNTAS FRECUENTES (FAQ) DE OPERACIÓN DEL SISTEMA

1. **¿Qué diferencia hay entre la NTC 6001 y la ISO 9001?**  
   La ISO 9001 está diseñada para empresas de cualquier tamaño, incluyendo multinacionales con complejas estructuras burocráticas. La NTC 6001 es un estándar colombiano diseñado específicamente para micro y pequeñas empresas (MiPyMEs), con requisitos simplificados, costos de auditoría reducidos y un enfoque muy práctico hacia la productividad y formalización.

2. **¿Puedo perder mi diagnóstico si se corta la energía o el internet?**  
   No. La plataforma guarda automáticamente las respuestas en la memoria local del navegador (`localStorage`) a medida que avanza. Al restablecerse la conexión, puede sincronizar con MySQL pulsando el botón de guardado.

3. **¿Cuántas veces puedo realizar la autoevaluación de mi empresa?**  
   Tantas veces como desee. No hay límites en el número de diagnósticos. Se recomienda realizar una autoevaluación trimestral para graficar el avance de la empresa en el tiempo.

4. **¿Cómo demuestro una evidencia si mi empresa no maneja papel físico?**  
   Las evidencias digitales son 100% válidas. Puede presentar archivos PDF, hojas de cálculo en Google Drive/Excel, registros en su software contable, fotografías fechadas o correos electrónicos de confirmación.

5. **¿Qué hago si la IA no me responde?**  
   El servicio de IA depende de la conectividad con los servidores de Google Gemini. Si se presenta una demora, espere unos segundos o verifique su conexión a internet. La plataforma continúa funcionando en todas sus reglas de cálculo independientemente de la IA.



---

## 17. GUÍA PRÁCTICA DE FORMATOS Y MODELOS DOCUMENTALES PARA MiPyMES

Uno de los principales motivos de no conformidad en las auditorías de calidad bajo la NTC 6001 es la ausencia o deficiencia de formatos de registro estructurados. A continuación se presentan 7 plantillas modelo listas para ser adaptadas por las micro y pequeñas empresas:

### 17.1 Modelo 1: Matriz de Contexto y Análisis DOFA (Cláusula 4.1)

| Factor Analizado | Descripción del Hallazgo en la MiPyME | Impacto en la Calidad | Acción Estratégica Definida | Responsable |
| :--- | :--- | :--- | :--- | :--- |
| **Fortaleza (F)** | Maquinaria de confección computarizada de última generación. | Alta precisión en costuras y velocidad de ensamble. | Capacitar al 100% de los operarios en programación digital. | Jefe de Taller |
| **Debilidad (D)** | Ausencia de fichas técnicas formales de producto. | Errores en tonos y medidas en pedidos especiales. | Estandarizar fichas técnicas con fotos y tolerancias en mm. | Líder de Calidad |
| **Oportunidad (O)** | Creciente demanda de dotaciones empresariales sostenibles. | Acceso a licitaciones de medianas y grandes empresas. | Obtener la certificación formal NTC 6001 con ICONTEC. | Gerencia General |
| **Amenaza (A)** | Incremento del 25% en el costo de insumos importados. | Reducción del margen operativo de utilidad. | Desarrollar proveedores locales de hilazas y cremalleras. | Compras |

---

### 17.2 Modelo 2: Matriz de Necesidades de Partes Interesadas (Cláusula 4.2)

| Parte Interesada | Necesidades y Expectativas Clave | Requisito Legal o Contractual Vinculante | Mecanismo de Seguimiento | Periodicidad |
| :--- | :--- | :--- | :--- | :--- |
| **Clientes Directos** | Entregas a tiempo, producto sin defectos, precios estables. | Contrato de suministro, Código de Comercio (garantías). | Indicador OTIF (On-Time In-Full), encuestas. | Mensual |
| **Colaboradores** | Pago puntual de salarios, seguridad en el trabajo, buen clima. | Código Sustantivo del Trabajo, Res. 0312/2019 (SG-SST). | Comité de Convivencia, inspección de EPP. | Trimestral |
| **Proveedores** | Claridad en especificaciones técnicas, pago según plazos. | Órdenes de compra formales, acuerdos comerciales. | Evaluación anual de desempeño de proveedores. | Semestral |
| **Entidades Estatales**| Facturación electrónica, tributación al día, registro mercantil. | Estatuto Tributario, Ley 590 de 2000 (Formalización). | Auditoría contable externa, renovación RUES. | Anual |

---

### 17.3 Modelo 3: Declaración Formal de la Política y Objetivos de Calidad (Cláusula 5.2 y 5.3)

> **POLÍTICA DE GESTIÓN DE CALIDAD (MODELO INSTITUCIONAL NTC 6001)**  
> En **[Nombre de la Organización S.A.S.]**, nos dedicamos a la fabricación y comercialización de **[tipo de producto o servicio]**, orientando todas nuestras operaciones hacia la satisfacción total de nuestros clientes y el cumplimiento de los estándares de la norma técnica colombiana **NTC 6001:2018**.  
>  
> Nos comprometemos a:
> 1. Garantizar la conformidad técnica de nuestros productos mediante el control riguroso de materias primas y procesos de ensamble.
> 2. Cumplir estrictamente con los plazos de entrega pactados con nuestros clientes corporativos y particulares.
> 3. Fomentar el desarrollo integral y las competencias laborales de nuestros colaboradores en un ambiente de trabajo seguro.
> 4. Mejorar continuamente la eficacia de nuestros procesos mediante la innovación tecnológica y el análisis de datos.  
>  
> **Firma de la Alta Dirección:** ___________________________  
> **Fecha de Entrada en Vigencia:** Enero de 2026 | **Versión:** 03

#### Matriz de Despliegue de Objetivos de Calidad Asociados

| Objetivo de Calidad | Meta Cuantitativa | Fórmula de Cálculo | Fuente de Datos | Responsable |
| :--- | :---: | :--- | :--- | :--- |
| **1. Satisfacción del Cliente** | $\ge 90\%$ | $\frac{\text{Clientes Satisfechos}}{\text{Total Clientes Encuestados}} \times 100$ | Encuesta de satisfacción semestral | Gerente Comercial |
| **2. Eficacia en Entregas** | $\ge 95\%$ | $\frac{\text{Pedidos Entregados a Tiempo}}{\text{Total Pedidos Despachados}} \times 100$ | Registro de remisiones firmadas | Coordinador de Despachos |
| **3. Reducción de Reprocesos**| $\le 2.5\%$ | $\frac{\text{Metros de Tela Reprocesada}}{\text{Total Metros Cortados}} \times 100$ | Formato de salidas no conformes | Jefe de Producción |
| **4. Capacitación del Personal**| $\ge 85\%$ | $\frac{\text{Horas Capacitación Ejecutadas}}{\text{Horas Programadas en el Plan}} \times 100$ | Plan anual de capacitación | Gestión Humana |

---

### 17.4 Modelo 4: Ficha Técnica de Proceso y Control Operativo (Cláusula 7.1 y 7.3)

| Identificación del Proceso: | **GESTIÓN DE PRODUCCIÓN Y ENSAMBLE** | Código: | **PR-OP-01** |
| :--- | :--- | :--- | :--- |
| **Objetivo del Proceso:** | Transformar las materias primas aprobadas en productos terminados conformes a las especificaciones técnicas del cliente. | Versión: | **02** |
| **Líder del Proceso:** | Jefe de Planta / Producción | Fecha: | **2026-02-15** |

- **Entradas:** Orden de producción aprobada, materia prima inspeccionada en bodega, fichas técnicas de diseño.
- **Actividades Clave:**
  1. *Programación:* Programar secuencia de lotes en función de la capacidad instalada y fecha límite de entrega.
  2. *Corte y Preparación:* Trazado y corte de piezas mecánicas o textiles respetando las tolerancias en milímetros.
  3. *Ensamble / Costura:* Unión de componentes siguiendo la hoja de ruta técnica y el instructivo de ensamble.
  4. *Inspección en Proceso:* Verificación de costuras, soldaduras o dimensiones cada 10 unidades terminadas.
  5. *Acabado y Limpieza:* Pulido, empaque primario y rotulado de lote para trazabilidad.
- **Salidas:** Lote de producto terminado conforme, registro de producción diligenciado y reporte de producto no conforme (si aplica).
- **Controles Operacionales y Registros Obligatorios:**
  - Formato `RG-OP-02`: Registro Diario de Producción y Lote.
  - Formato `RG-OP-05`: Hoja de Vida y Mantenimiento de Maquinaria.
  - Formato `RG-OP-08`: Registro de Salidas No Conformes y Disposición Final.

---

### 17.5 Modelo 5: Formato de Evaluación y Selección de Proveedores (Cláusula 8.2)

| Criterio de Evaluación | Ponderación (%) | Escala de Calificación (1 - 5) | Puntaje Obtenido | Observaciones Técnicas |
| :--- | :---: | :---: | :---: | :--- |
| **1. Calidad del Insumo** | 40% | 5 = Cero defectos en recepción; 1 = Fallas reiteradas | 4.8 | Insumos con certificado de calidad |
| **2. Cumplimiento en Entrega** | 30% | 5 = 100% puntual; 1 = Retrasos mayores a 5 días | 4.5 | Despachos en 48 horas promedio |
| **3. Condiciones Comerciales** | 15% | 5 = Crédito a 45 días; 1 = Pago anticipado estricto | 4.0 | Crédito rotativo concedido a 30 días |
| **4. Servicio Posventa / Soporte**| 15% | 5 = Respuesta en 24h; 1 = Sin atención de quejas | 5.0 | Cambio inmediato de insumo defectuoso |
| **PUNTAJE FINAL PONDERADO** | **100%** | — | **4.64 / 5.00** | **PROVEEDOR APROBADO CLASE A** |

*Criterios de Decisión:*
- **$\ge 4.0$:** Proveedor Aprobado (Prioritario para compras regulares).
- **$3.0 - 3.9$:** Proveedor Condicional (Requiere plan de mejora y seguimiento bimestral).
- **$< 3.0$:** Proveedor No Aprobado (Suspendido formalmente para compras).

---

### 17.6 Modelo 6: Formato de Perfil de Cargo y Funciones (Cláusula 9.1)

| Nombre del Cargo: | **OPERARIO LÍDER DE PRODUCCIÓN** | Proceso: | Operaciones / Ensamble |
| :--- | :--- | :--- | :--- |
| **Dependencia:** | Planta de Fabricación | Jefe Inmediato: | Jefe de Producción |
| **Personal a Cargo:** | 3 Auxiliares de Planta | Nivel Educativo: | Bachiller Técnico o Técnico Laboral |

- **Experiencia Mínima:** 1 año en manejo de maquinaria industrial similar o procesos de manufactura afines.
- **Funciones Principales:**
  1. Operar la maquinaria asignada cumpliendo con los instructivos de seguridad y estándares de calidad.
  2. Diligenciar diariamente el registro de producción y anotar cualquier anomalía en los insumos.
  3. Ejecutar el mantenimiento autónomo básico de su puesto (limpieza, lubricación y reporte de ruidos extraños).
  4. Participar activamente en las capacitaciones del Sistema de Calidad y en las brigadas de SST.
- **Competencias Técnicas y Blandas:**
  - Atención al detalle y motricidad fina.
  - Capacidad de trabajo en equipo y comunicación asertiva.
  - Conocimiento básico de metrología (uso de calibrador o cinta métrica milimétrica).

---

### 17.7 Modelo 7: Formato de Tratamiento de Acciones Correctivas (Cláusula 10.3)

| Código de Acción: | **AC-2026-004** | Fecha de Apertura: | 2026-02-10 | Proceso Afectado: | Comercial y Envíos |
| :--- | :--- | :--- | :--- | :--- | :--- |

1. **Descripción de la No Conformidad:**  
   El cliente "Almacenes Unidos" devolvió el pedido #450 compuesto por 20 unidades debido a que 5 prendas presentaban una etiqueta con talla incorrecta (decía talla M pero el corte correspondía a talla XL).

2. **Acción Inmediata (Corrección / Contención):**  
   Recepción de las 20 prendas en fábrica, revisión del 100% de las unidades, cambio de marquillas erróneas y reenvío del pedido completo al cliente en un plazo menor a 24 horas sin costo de flete.

3. **Análisis de Causa Raíz (Metodología de los 5 Porqués):**  
   - *¿Por qué se enviaron prendas con talla errada?* Porque el operario de empaque cosió la etiqueta M en una prenda XL.
   - *¿Por qué cosió la etiqueta errada?* Porque en la mesa de ensamble había etiquetas de tallas M y XL mezcladas en el mismo recipiente.
   - *¿Por qué estaban mezcladas?* Porque no existen gavetas individuales identificadas por color y talla para los accesorios.
   - *¿Por qué no existen gavetas identificadas?* Porque el proceso de empaque no cuenta con un estándar de orden y limpieza (5S).
   - *Causa Raíz:* Carencia de almacenamiento segregado y etiquetado para marquillas en el puesto de empaque final.

4. **Plan de Acción Correctiva:**  
   - Instalar organizador acrílico con 5 compartimentos rotulados por talla (S, M, L, XL, XXL) con código de color. (Responsable: Jefe de Planta | Plazo: 5 días).
   - Actualizar el instructivo de empaque prohibiendo tener más de un rollo de marquillas abierto simultáneamente. (Responsable: Calidad | Plazo: 8 días).
   - Capacitar a los 3 auxiliares de empaque en la nueva rutina de verificación previa. (Responsable: Talento Humano | Plazo: 12 días).

5. **Verificación de Eficacia (30 días después):**  
   En la auditoría de seguimiento realizada el 2026-03-12, se inspeccionaron 150 pedidos despachados sin registrarse ninguna devolución por error de marquillado. **Acción Correctiva Declarada Eficaz y Cerrada.**



---

## 18. INSTRUMENTO DE EVALUACIÓN DE SATISFACCIÓN Y CALIDAD EN USO (ISO/IEC 25010)

Al culminar la autoevaluación institucional, se recomienda aplicar el instrumento psicométrico estandarizado de usabilidad a los miembros del equipo auditor para medir la percepción de la herramienta. La encuesta evalúa 24 afirmaciones organizadas en 8 dimensiones:

| Código | Dimensión Evaluada | Afirmación a Calificar por el Auditor | Escala (1: Totalmente en Desacuerdo a 5: Totalmente de Acuerdo) |
| :---: | :--- | :--- | :---: |
| **Q01** | Reconocibilidad | La herramienta define con total claridad su propósito para micro y pequeñas empresas. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q02** | Reconocibilidad | Los objetivos de formalización y maduración de calidad son evidentes desde el inicio. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q03** | Reconocibilidad | Se identifica fácilmente la diferencia entre requisitos obligatorios y evidencias. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q04** | Aprendibilidad | El cuestionario resulta intuitivo y no requiere capacitación técnica prolongada. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q05** | Aprendibilidad | La terminología normativa de la NTC 6001 se explica en un lenguaje empresarial accesible. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q06** | Aprendibilidad | Es sencillo recordar la dinámica de evaluación tras una primera sesión de uso. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q07** | Operabilidad | La transición entre las 7 cláusulas del ciclo PHVA es fluida y sin bloqueos. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q08** | Operabilidad | La selección de estados (Cumple, Parcial, No Cumple, No Aplica) es ágil y precisa. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q09** | Operabilidad | Las notas y observaciones de campo se guardan de forma instantánea y confiable. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q10** | Protección de Errores | El sistema impide la pérdida involuntaria de datos si se cierra la pestaña por error. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q11** | Protección de Errores | Los mensajes de advertencia orientan con claridad sobre qué campos faltan por llenar. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q12** | Protección de Errores | La validación del NIT y datos empresariales previene duplicidad de registros. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q13** | Estética Visual | La paleta de colores institucional transmite sobriedad y profesionalismo. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q14** | Estética Visual | El gráfico poligonal de radar permite visualizar el equilibrio del sistema de un vistazo. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q15** | Estética Visual | El contraste tipográfico y los tamaños de letra facilitan la lectura en auditorías de campo. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q16** | Accesibilidad Web | El software es completamente operable desde teléfonos inteligentes y tabletas. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q17** | Accesibilidad Web | No requiere instalar complementos pesados ni programas adicionales en la computadora. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q18** | Accesibilidad Web | La interfaz responde adecuadamente a gestos táctiles y clics de mouse. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q19** | Modelo de Evidencias | La ponderación del 30% en evidencias documentales garantiza objetividad real. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q20** | Modelo de Evidencias | La lista de verificación sugiere documentos realistas y alcanzables para una MiPyME. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q21** | Modelo de Evidencias | Facilita recopilar el portafolio probatorio previo a la visita de ICONTEC. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q22** | Asistente IA (Gemini) | Las explicaciones generadas por la IA resolvieron dudas complejas sobre requisitos. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q23** | Asistente IA (Gemini) | El Plan de Acción automatizado priorizó con acierto las tareas de mayor urgencia. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q24** | Satisfacción Global | Recomendaría con entusiasmo esta plataforma a otras empresas de mi gremio o sector. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |

### 18.1 Interpretación del Puntaje Consolidado de Usabilidad
- **Puntaje $\ge 96$ puntos ($\ge 80\%$):** Excelente calidad en uso. La organización asimila el sistema de gestión con mínima resistencia al cambio.
- **Puntaje entre 72 y 95 puntos ($60\% - 79\%$):** Usabilidad aceptable con oportunidades de capacitación en el manejo de evidencias documentales.
- **Puntaje $< 72$ puntos ($< 60\%$):** Requiere sesiones de inducción y refuerzo en conceptos fundamentales del ciclo PHVA.
