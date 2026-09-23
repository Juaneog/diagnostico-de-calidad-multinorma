# -*- coding: utf-8 -*-
import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
TARGET_FILE = os.path.join(BASE_DIR, "GUIA_DE_USO_NTC_6001.md")

with open(TARGET_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Embed screenshots in Section 3, 4, 5, 6, 7
screenshots_content = """
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
"""

# Replace Sections 3 to 7 in content
if "## 3. ACCESO AL SISTEMA Y GESTIÓN DE CUENTA" in content:
    idx_start = content.index("## 3. ACCESO AL SISTEMA Y GESTIÓN DE CUENTA")
    # find where Section 8 begins
    idx_end = content.index("## 8. INTERPRETACIÓN DEL TABLERO DE RESULTADOS")
    content = content[:idx_start] + screenshots_content + "\n\n" + content[idx_end:]

# Now, add the Comprehensive Auditor Checklists for each of the 7 Clauses
checklists_content = """
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
"""

# Insert the checklists right after Section 6
if "## 7. USO DEL ASISTENTE VIRTUAL CON INTELIGENCIA ARTIFICIAL" in content:
    content = content.replace("## 7. USO DEL ASISTENTE VIRTUAL CON INTELIGENCIA ARTIFICIAL", checklists_content + "\n\n## 7. USO DEL ASISTENTE VIRTUAL CON INTELIGENCIA ARTIFICIAL")

with open(TARGET_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Updated {TARGET_FILE} with screenshots and comprehensive auditor checklists.")
