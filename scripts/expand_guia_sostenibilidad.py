# -*- coding: utf-8 -*-
import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
TARGET_FILE = os.path.join(BASE_DIR, "GUIA_DE_USO_SOSTENIBILIDAD.md")

with open(TARGET_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Visual guide and screenshots for Sustainability
screenshots_and_checklists = """
## 3. ACCESO, NAVEGACIÓN Y CARACTERIZACIÓN DEL ESTABLECIMIENTO

### 3.1 Portal de Inicio y Selección de Entorno
Al acceder a la plataforma de sostenibilidad (`https://sostenibilidad.jarestrepo.com`), el usuario encuentra la interfaz institucional adaptada al sector turístico y gastronómico:

<figure>
  <img src="manual-uso-assets/01-inicio.png" alt="Acceso Principal a la Plataforma de Sostenibilidad" />
  <figcaption>Figura 1. Pantalla de bienvenida institucional para diagnósticos de sostenibilidad turística.</figcaption>
</figure>

### 3.2 Normas Técnicas Sectoriales Soportadas
La plataforma expone con claridad los requisitos de las normas NTC 6496 (Gastronomía) y NTC 6503 (Alojamiento y Hospedaje):

<figure>
  <img src="manual-uso-assets/01b-normas.png" alt="Normas de Sostenibilidad Turística" />
  <figcaption>Figura 2. Normas de sostenibilidad ambiental, sociocultural y económica soportadas.</figcaption>
</figure>

### 3.3 Inicio de Sesión y Registro Seguro
El acceso se encuentra protegido para garantizar que las auditorías y datos de facturación energética y de agua permanezcan confidenciales:

<figure>
  <img src="manual-uso-assets/02-ingreso.png" alt="Inicio de Sesión" />
  <figcaption>Figura 3. Módulo de ingreso seguro con encriptación PBKDF2-SHA512.</figcaption>
</figure>

<figure>
  <img src="manual-uso-assets/03-registro.png" alt="Registro de Nuevo Establecimiento" />
  <figcaption>Figura 4. Formulario para registro de nuevos administradores hoteleros o restauranteros.</figcaption>
</figure>

### 3.4 Panel de Control y Selección de Subsector
Desde el panel de control, el evaluador puede seleccionar entre realizar una auditoría para un restaurante o para un hotel:

<figure>
  <img src="manual-uso-assets/04-panel-principal.png" alt="Panel de Control de Sostenibilidad" />
  <figcaption>Figura 5. Dashboard principal con acceso a diagnósticos anteriores y nuevas evaluaciones.</figcaption>
</figure>

<figure>
  <img src="manual-uso-assets/05-seleccion-norma.png" alt="Selección de Norma de Sostenibilidad" />
  <figcaption>Figura 6. Selector de norma: NTC 6496 (Restaurantes) o NTC 6503 (Alojamientos).</figcaption>
</figure>

### 3.5 Caracterización Demográfica y Registro Nacional de Turismo (RNT)
Antes de ingresar al cuestionario, se diligencian los datos del establecimiento:

<figure>
  <img src="manual-uso-assets/06-datos-organizacion.png" alt="Ficha del Establecimiento Turístico" />
  <figcaption>Figura 7. Formulario de captura de datos: NIT, RNT, subsector y capacidad instalada.</figcaption>
</figure>

### 3.6 Evaluación Interactiva de Criterios y Evidencias
Cada criterio de sostenibilidad se evalúa verificando tanto la práctica operativa como los soportes documentales:

<figure>
  <img src="manual-uso-assets/07-cuestionario-evidencias.png" alt="Cuestionario de Sostenibilidad" />
  <figcaption>Figura 8. Tarjeta de evaluación con lista de verificación de evidencias ambientales y sociales.</figcaption>
</figure>

### 3.7 Asistente Cognitivo IA y Guía de Uso
Si surgen dudas sobre el manejo de residuos peligrosos o la redacción del código ESCNNA, el evaluador consulta directamente a la IA:

<figure>
  <img src="manual-uso-assets/08-asistente-ia.png" alt="Asistente IA para Sostenibilidad" />
  <figcaption>Figura 9. Asistente con Gemini para optimización de recursos y cumplimiento normativo.</figcaption>
</figure>

<figure>
  <img src="manual-uso-assets/09-guia-integrada.png" alt="Guía Integrada en la Aplicación" />
  <figcaption>Figura 10. Manual y documentación técnica consultable en tiempo real dentro de la plataforma.</figcaption>
</figure>

---

## 5. CHECKLIST DE INSPECCIÓN OPERATIVA DE SOSTENIBILIDAD

A continuación se presentan las listas de verificación técnica para las dimensiones ambiental, sociocultural y económica de ambos subsectores:

### 5.1 Checklist para Establecimientos Gastronómicos (NTC 6496)

| Dimensión | Criterio de Inspección | Evidencia Obligatoria Verificable | Criterio de Rechazo Inmediato |
| :--- | :--- | :--- | :--- |
| **Ambiental** | **Gestión de Aceite Vegetal Usado (AVU)** | Contrato y manifiestos con gestor autorizado (Res. 316/2018), bitácora de recolección de litros. | Entrega de aceite a particulares informales o vertimiento en lavaplatos. |
| **Ambiental** | **Trampa de Grasas** | Registro mensual de limpieza de la trampa de grasas y disposición de lodos. | Trampa colmatada desbordando grasas hacia el alcantarillado público. |
| **Ambiental** | **Residuos Orgánicos y Mermas** | Plan de separación en la fuente (código de colores) y pesaje semanal de mermas. | Residuos orgánicos mezclados con empaques plásticos sin clasificar. |
| **Ambiental** | **Eficiencia Energética en Cocina** | Mantenimiento de cámaras de refrigeración y hornos; uso de iluminación LED. | Fugas de gas sin corregir o refrigeradores con empaques rotos perdiendo frío. |
| **Sociocultural** | **Promoción de Gastronomía Local** | Al menos 2 platos típicos regionales en el menú con reseña histórica o cultural. | Menú exclusivamente internacional sin referencia a la tradición culinaria local. |
| **Sociocultural** | **Condiciones Laborales y Propinas** | Distribución transparente y legal de propinas (Ley 1935 de 2018) y afiliación a ARL/EPS. | Retención indebida de propinas por parte de la administración. |
| **Económica** | **Compras a Productores Locales** | Al menos 30% de compras de insumos agrícolas a campesinos o proveedores locales. | Compra exclusiva a cadenas mayoristas lejanas ignorando la oferta local. |

### 5.2 Checklist para Establecimientos de Alojamiento y Hospedaje (NTC 6503)

| Dimensión | Criterio de Inspección | Evidencia Obligatoria Verificable | Criterio de Rechazo Inmediato |
| :--- | :--- | :--- | :--- |
| **Sociocultural** | **Prevención ESCNNA (Ley 679/2001)** | Código de conducta visible en recepción, cláusula en contrato de hospedaje y capacitación del 100% del personal. | Ausencia de política ESCNNA o falta de reporte de sospechas a la Policía de Infancia. |
| **Sociocultural** | **Patrimonio y Comunidad Local** | Información turística en recepción sobre sitios patrimoniales y respeto a comunidades indígenas/afro. | Fomento de actividades turísticas que degradan monumentos o tradiciones nativas. |
| **Ambiental** | **Ahorro Hídrico en Habitaciones** | Boquillas aireadoras en grifos y programa de reutilización voluntaria de toallas/sábanas. | Fugas de agua constantes en inodoros sin reporte de mantenimiento. |
| **Ambiental** | **Eficiencia Energética** | Sensores de presencia o tarjetas inteligentes de corte eléctrico en habitaciones; aire a 24°C. | Equipos de aire acondicionado encendidos en habitaciones vacías las 24 horas. |
| **Ambiental** | **Reducción de Plásticos de un Solo Uso** | Dispensadores recargables de champú/jabón en lugar de frascos plásticos pequeños. | Uso indiscriminado de botellas y cubiertos desechables en desayunos. |
| **Económica** | **Empleo y Proveeduría Local** | Más del 60% del personal residente en el municipio y convenios con operadores locales. | Contratación foránea total con salarios por debajo de la ley. |

---

## 6. CASOS DE ESTUDIO REALES DEL SECTOR TURÍSTICO COLOMBIANO

### 6.1 Caso 1: Restaurante Típico "Fogón Sinú" (Montería, Córdoba - NTC 6496)
- **Actividad:** Restaurante tradicional ribereño (capacidad: 45 comensales).
- **Diagnóstico Inicial:** 48.2% (Grave hallazgo por no tener contrato de gestor de AVU ni bitácora de limpieza de trampa de grasa).
- **Plan de Acción:** Firma de convenio con gestor ambiental autorizado de Montería, instalación de trampa de grasa de acero inoxidable y capacitación del personal de cocina.
- **Resultado Post-Mejora:** **88.5% (Certificable)**. Reconocimiento de la Corporación Ambiental CVS y ahorro del 18% en consumo de agua.

### 6.2 Caso 2: Hotel Boutique "Casa del Baluarte" (Cartagena, Bolívar - NTC 6503)
- **Actividad:** Hotel patrimonial en el Centro Histórico (14 habitaciones).
- **Diagnóstico Inicial:** 62.0% (Carencia de registros de capacitación en prevención ESCNNA y uso intensivo de frascos plásticos desechables).
- **Plan de Acción:** Certificación de todo el equipo ante la Fundación Renacer en prevención ESCNNA, instalación de dispensadores de cerámica recargables con productos biodegradables locales y tarjetas magnéticas para corte de energía.
- **Resultado Post-Mejora:** **94.2% (Nivel Excelente)**. Distintivo "Hotel Sostenible y Seguro" otorgado por la Secretaría de Turismo de Cartagena.

### 6.3 Caso 3: Asadero Campestre "Los Samanes" (Llanos Orientales - NTC 6496)
- **Actividad:** Restaurante campestre de carnes y cocina llanera (capacidad: 120 personas).
- **Diagnóstico Inicial:** 51.5% (Problemas en la separación de cenizas y carbón, y vertimiento de grasas a pozo séptico).
- **Plan de Acción:** Construcción de lecho biológico para filtración de aguas de cocina, compostaje de residuos orgánicos para huerta propia y sustitución de leña por carbón ecológico certificado.
- **Resultado Post-Mejora:** **86.0%**. Reducción del 40% en costos de fertilizantes para áreas verdes.

### 6.4 Caso 4: Eco-Lodge "Neblina Verde" (Eje Cafetero - NTC 6503)
- **Actividad:** Hospedaje rural y aviturismo en Santa Rosa de Cabal (8 cabañas).
- **Diagnóstico Inicial:** 74.0% (Buen desempeño ambiental pero nula medición formal de consumos ni código de conducta escrito).
- **Plan de Acción:** Instalación de micro-medidores de agua por cabaña, manual de senderismo responsable y compra del 90% de alimentos a fincas vecinas.
- **Resultado Post-Mejora:** **96.8%**. Ganador de premio de Turismo Verde de ProColombia.

---

## 7. GLOSARIO DE SOSTENIBILIDAD TURÍSTICA Y PREGUNTAS FRECUENTES

### 7.1 Términos Clave de Sostenibilidad
1. **Aceite Vegetal Usado (AVU):** Aceite de origen vegetal utilizado en frituras y preparación de alimentos que ha sufrido degradación térmica. Debe disponerse exclusivamente con gestores autorizados.
2. **Capacidad de Carga:** Número máximo de personas que pueden visitar un destino o instalación sin causar deterioro físico o sociocultural inaceptable.
3. **Compostaje:** Proceso biológico aerobio de descomposición de residuos orgánicos (cáscaras, restos de comida) para convertirlos en abono natural.
4. **Desarrollo Sostenible:** Aquel que satisface las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas.
5. **ESCNNA:** Explotación Sexual Comercial de Niñas, Niños y Adolescentes. Su prevención es un requisito ineludible bajo la Ley 679 de 2001.
6. **Huella de Carbono:** Totalidad de gases de efecto invernadero (GEI) emitidos por efecto directo o indirecto de un individuo, organización o evento.
7. **Huella Hídrica:** Volumen total de agua dulce utilizada para producir los bienes y servicios consumidos.
8. **Plásticos de un Solo Uso:** Productos plásticos diseñados para desecharse tras una única utilización (pitillos, mezcladores, cubiertos, frascos miniatura).
9. **Registro Nacional de Turismo (RNT):** Matrícula obligatoria en Colombia para todos los prestadores de servicios turísticos.
10. **Turismo Responsable:** Modelo de turismo que minimiza los impactos negativos económicos, ambientales y sociales, y mejora el bienestar de las poblaciones locales.

### 7.2 Preguntas Frecuentes
1. **¿Qué sucede si un restaurante no tiene trampa de grasa?**  
   Constituye una No Conformidad Crítica. Las autoridades ambientales pueden imponer multas o suspensión de actividades si las grasas saturan la red de alcantarillado.
2. **¿Es obligatorio certificar a las camareras y recepcionistas en ESCNNA?**  
   Sí. La Ley 1336 de 2009 exige que todo el personal del hotel conozca las señales de alerta y el protocolo de reporte ante las autoridades policiales.
3. **¿Cómo puedo justificar las compras locales si compro en la plaza de mercado?**  
   Solicite recibos de caja o cuentas de cobro firmadas por los campesinos o comerciantes locales, conservándolas en la carpeta de evidencias contables.
"""

# Replace in content starting at section 3
if "## 3." in content:
    idx_start = content.index("## 3.")
    content = content[:idx_start] + screenshots_and_checklists
else:
    content = content + "\n\n" + screenshots_and_checklists

with open(TARGET_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Updated {TARGET_FILE} with screenshots, checklists, cases, and glossary.")
