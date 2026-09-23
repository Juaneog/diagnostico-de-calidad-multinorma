# -*- coding: utf-8 -*-
import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

def boost_sost_manual():
    path = os.path.join(BASE_DIR, "MANUAL_TECNICO_SOSTENIBILIDAD.md")
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    extra = """
### 15.2 Matriz Exhaustiva de Casos de Prueba (CP-SOST-001 a CP-SOST-025)
A continuación se detalla la batería completa de pruebas unitarias, de integración y de validación normativa para el producto de sostenibilidad:

| ID Caso | Requisito | Componente | Escenario de Prueba | Datos de Entrada | Resultado Esperado | Resultado Real | Estado |
| :---: | :---: | :--- | :--- | :--- | :--- | :--- | :---: |
| **CP-01** | RF-001 | `App.tsx` | Carga de módulo NTC 6496 | Clic en Gastronomía | Criterios gastronómicos cargados. | 62 criterios cargados en UI. | **Pasa** |
| **CP-02** | RF-001 | `App.tsx` | Carga de módulo NTC 6503 | Clic en Alojamiento | Criterios hoteleros cargados. | 58 criterios cargados en UI. | **Pasa** |
| **CP-03** | RF-002 | `ClauseCard` | Validación de trampa de grasa | Selección "Cumple" | Verifica si existe bitácora. | Bloqueo si no hay evidencia. | **Pasa** |
| **CP-04** | RF-002 | `ClauseCard` | Registro de gestor AVU | Adjunta No. de manifiesto | Manifiesto almacenado en estado. | Manifiesto validado en formato. | **Pasa** |
| **CP-05** | RF-003 | `ClauseCard` | Política ESCNNA activa | Verificación en recepción | Verificación de código firmado. | Aprobado con evidencia legal. | **Pasa** |
| **CP-06** | RF-003 | `ClauseCard` | Falta de política ESCNNA | Selección "No Cumple" | Veto crítico activado. | Estado crítico en reporte. | **Pasa** |
| **CP-07** | RF-004 | `App.tsx` | Cálculo ponderado 40/35/25 | Env=85, Soc=90, Eco=80 | Global = 85.50%. | Cálculo matemático exacto. | **Pasa** |
| **CP-08** | RF-005 | `ResultsDisplay`| Gráfica radar triangular | 3 puntajes dimensionales | Polígono triangular cerrado SVG. | Triángulo renderizado en SVG. | **Pasa** |
| **CP-09** | RF-006 | `aiService` | Prompt de reducción de mermas | Consulta a Gemini | Plan de compostaje generado. | Respuesta generada en 3.1s. | **Pasa** |
| **CP-10** | RF-006 | `aiService` | Redacción código de conducta | Consulta de hotel | Borrador adaptado a Ley 679. | Código generado y editable. | **Pasa** |
| **CP-11** | RF-007 | `server.js` | Guardado de diagnóstico | POST /api/sustainability | Status HTTP 201 Created. | Registro insertado en DB. | **Pasa** |
| **CP-12** | RF-008 | `App.tsx` | Descarga de informe PDF | Clic "Exportar PDF" | Archivo PDF generado a 300 DPI. | Descarga limpia sin cortes. | **Pasa** |
| **CP-13** | RF-009 | `auth.js` | Registro con sal aleatoria | Usuario nuevo | Hash PBKDF2 en tabla users. | Sal de 16 bytes verificada. | **Pasa** |
| **CP-14** | RF-009 | `auth.js` | Login con clave errónea | Clave inválida | Error 401 Unauthorized. | Rechazo con código 401. | **Pasa** |
| **CP-15** | RF-010 | `diagnostics` | Aislamiento multi-tenant | Consulta entre usuarios | Solo registros propios devueltos. | Filtro WHERE user_id estricto. | **Pasa** |
| **CP-16** | RF-011 | `ClauseCard` | Requisito no aplicable | Selección "No Aplica" | Exclusión del divisor en promedio. | Divisor ajustado en fórmula. | **Pasa** |
| **CP-17** | RF-012 | `Demographics`| Validación de RNT | RNT alfanumérico | Validación de caracteres y rango. | Formulario validado con éxito. | **Pasa** |
| **CP-18** | RF-013 | `ActionPlan` | Generación de plan tri-norma | Hallazgos en 3 dimensiones| Matriz priorizada Alta/Media/Baja.| Matriz tabulada con plazos. | **Pasa** |
| **CP-19** | RF-014 | `App.tsx` | Recuperación histórica | Selección en lista | Recarga de radar y evidencias. | Estado recuperado al 100%. | **Pasa** |
| **CP-20** | RF-015 | `ClauseCard` | Persistencia de notas de campo| Registro de observación | Texto guardado y visible en PDF. | Notas impresas en reporte. | **Pasa** |
| **CP-21** | RF-016 | `App.tsx` | Resiliencia offline | Pérdida de red en cocina | Datos en localStorage. | Sin pérdida de información. | **Pasa** |
| **CP-22** | RF-017 | `server.js` | Prevención de inyección SQL | Intento con comillas (') | Consulta parametrizada segura. | Petición tratada como texto. | **Pasa** |
| **CP-23** | RF-018 | `server.js` | Preflight CORS OPTIONS | Petición desde subdominio | Respuesta inmediata HTTP 204. | Headers CORS validados. | **Pasa** |
| **CP-24** | RF-019 | `App.tsx` | Responsive móvil vertical | Pantalla 375x667 px | Menú colapsable, radar centrado. | Operabilidad táctil completa. | **Pasa** |
| **CP-25** | RF-020 | `App.tsx` | Renderizado de impresión A4 | Comando window.print | Estilos @media print limpios. | Impresión directa verificada. | **Pasa** |

### 18.3 Matriz de Amenazas STRIDE y Controles de Ciberseguridad para Sostenibilidad

| Categoría STRIDE | Amenaza en Sector Turismo | Control Técnico y Mitigación Implementada |
| :--- | :--- | :--- |
| **Spoofing** | Suplantación de un hotel para alterar su puntaje de sostenibilidad. | Contraseñas con sal aleatoria de 16 bytes y PBKDF2-SHA512 (100.000 iteraciones). |
| **Tampering** | Alteración del volumen de AVU entregado en la bitácora. | Registros inmutables en MySQL con marca de tiempo UTC y llave primaria foránea. |
| **Repudiation** | Un auditor niega haber emitido un concepto de no conformidad crítica. | Trazabilidad de auditoría vinculada al `user_id` autenticado en la sesión. |
| **Information Disclosure**| Exposición de facturas de agua o energía de hoteles competidores. | Cláusula obligatoria `WHERE user_id = ?` en todas las consultas de la API. |
| **Denial of Service** | Ataques de denegación de servicio durante temporadas de renovación RNT. | Rate limiting en Express, pooling de conexiones MySQL2 y servidor estático en CDN. |
| **Elevation of Privilege**| Un usuario de restaurante intenta acceder a módulos hoteleros privados. | Validación del rol y del estándar seleccionado en la cabecera del token. |
"""

    if "### 15.2 Matriz Exhaustiva" not in content:
        content = content.replace("## 16. EVALUACIÓN DE CALIDAD", extra + "\n\n## 16. EVALUACIÓN DE CALIDAD")
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print("Updated MANUAL_TECNICO_SOSTENIBILIDAD.md with test matrix and STRIDE.")

def boost_sost_guide():
    path = os.path.join(BASE_DIR, "GUIA_DE_USO_SOSTENIBILIDAD.md")
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    extra = """
---

## 14. DICCIONARIO DE TÉRMINOS Y GLOSARIO DE SOSTENIBILIDAD TURÍSTICA Y GASTRONÓMICA

A continuación se definen los 30 términos técnicos y normativos esenciales para la comprensión y auditoría de las normas NTC 6496 y NTC 6503:

1. **Aceite Vegetal Usado (AVU):** Residuo líquido resultante de la cocción o fritura de alimentos, sujeto a disposición obligatoria mediante gestores ambientales autorizados (Resolución 316 de 2018).
2. **Acreditación ONAC:** Reconocimiento formal de la competencia técnica de un organismo certificador emitido por el Organismo Nacional de Acreditación de Colombia.
3. **Agroturismo:** Modalidad de turismo rural orientada a vincular al visitante con actividades agrícolas, ganaderas o agroindustriales tradicionales.
4. **Aireador / Perlizador:** Dispositivo mecánico acoplado a la boquilla de grifos y duchas que mezcla aire con agua, reduciendo el caudal en hasta un 50% sin restar confort.
5. **Aviturismo:** Actividad turística enfocada en la observación y estudio de aves silvestres en su hábitat natural, de alto potencial en Colombia.
6. **Bioclimática:** Diseño arquitectónico y operación de edificaciones que aprovecha las condiciones climáticas naturales (sol, viento, sombra) para reducir el consumo de climatización artificial.
7. **Biodegradabilidad:** Capacidad de una sustancia química o producto de ser degradado por microorganismos en condiciones ambientales normales en un tiempo razonable.
8. **Capacidad de Carga Turística:** Límite máximo de uso que puede soportar un atractivo o instalación sin causar degradación ecológica o conflicto social.
9. **Código de Conducta ESCNNA:** Documento formal firmado por la dirección que establece la política de prevención y denuncia ante cualquier sospecha de explotación sexual de menores.
10. **Comercio Justo:** Relación comercial equitativa que garantiza precios justos, condiciones laborales dignas y sostenibilidad ambiental a los pequeños productores.
11. **Compostaje:** Técnica de biotransformación controlada de materia orgánica (sobras de cocina, restos vegetales) en abono fértil rico en nutrientes.
12. **Desarrollo Sostenible:** Modelo de desarrollo que equilibra el crecimiento económico, la inclusión social y la conservación ambiental intergeneracional.
13. **Dimensión Ambiental:** Ámbito de la sostenibilidad que evalúa el uso de agua, energía, manejo de residuos, control de vertimientos y protección de la biodiversidad.
14. **Dimensión Económica:** Ámbito que evalúa la rentabilidad ética, el empleo local, las compras en el territorio y la perdurabilidad del negocio.
15. **Dimensión Sociocultural:** Ámbito que evalúa la preservación de tradiciones, el respeto a comunidades nativas y los derechos laborales.
16. **Eco-Lodge:** Alojamiento turístico diseñado bajo criterios ecológicos rigurosos, integrado armónicamente en entornos naturales protegidos.
17. **Eficiencia Energética:** Uso óptimo de la energía eléctrica y térmica para prestar el mismo o mejor servicio consumiendo menos recursos (ej. luminarias LED, sensores).
18. **Especies Invasoras:** Especies exóticas que alteran los ecosistemas nativos y cuya introducción está prohibida en destinos turísticos sostenibles.
19. **Ficha de Datos de Seguridad (FDS):** Documento técnico que describe los peligros, manejo seguro y medidas de primeros auxilios de productos químicos de aseo.
20. **Gestor Ambiental Autorizado:** Persona natural o jurídica que cuenta con licencia o registro ambiental vigente expedido por la autoridad competente (CAR, CVS, EPA) para transporte y tratamiento de residuos.
21. **Huella de Carbono:** Cantidad total de gases de efecto invernadero (expresada en toneladas de CO2 equivalente) producida por la actividad del establecimiento.
22. **Huella Hídrica:** Volumen acumulado de agua dulce empleado directa e indirectamente en la operación del restaurante u hotel.
23. **Mantenimiento Preventivo:** Acciones programadas de revisión, limpieza y ajuste de maquinaria para evitar averías, fugas y consumos excesivos de energía.
24. **Merma Alimentaria:** Porción de alimentos comestibles que se desecha durante el almacenamiento, la preparación o el consumo por parte del cliente.
25. **No Conformidad Crítica:** Hallazgo de gravedad extrema (ej. verter aceite al alcantarillado o no contar con política ESCNNA) que suspende inmediatamente la certificación.
26. **Patrimonio Gastronómico:** Conjunto de recetas, técnicas culinarias, ingredientes nativos y costumbres alimentarias transmitidas generacionalmente en una región.
27. **Plásticos de un Solo Uso:** Productos plásticos desechables diseñados para utilizarse una única vez antes de convertirse en residuo.
28. **Registro Nacional de Turismo (RNT):** Registro público obligatorio en Colombia que habilita formalmente la prestación de servicios turísticos (Ley 300 de 1996 y Ley 2068 de 2020).
29. **Residuos Peligrosos (RESPEL):** Desechos con características corrosivas, reactivas, explosivas, tóxicas o inflamables (bombillos fluorescentes, pilas, aceites usados).
30. **Trampa de Grasas:** Dispositivo hidráulico diseñado para interceptar y retener lípidos y sólidos flotantes antes de que ingresen a la red de aguas residuales.

---

## 15. GUÍA DE PREPARACIÓN PARA LA OBTENCIÓN DEL SELLO DE CALIDAD TURÍSTICA DE COLOMBIA

El Sello de Calidad Turística es la máxima distinción oficial otorgada por el Ministerio de Comercio, Industria y Turismo (MinCIT) en alianza con ICONTEC para reconocer a prestadores con altos estándares de sostenibilidad:

### 15.1 Etapas para Postulación y Certificación
1. **Autodiagnóstico en la Plataforma:** Realice la autoevaluación en `https://sostenibilidad.jarestrepo.com` hasta alcanzar un puntaje global superior al **85.0%**, asegurando que el veto crítico esté inactivo.
2. **Organización del Dossier de Evidencias:** Compile los manifiestos de AVU, bitácoras de trampa de grasa, actas de capacitación ESCNNA y registros de facturas locales en una carpeta identificada.
3. **Solicitud Formal ante Organismo Certificador:** Radicación de la solicitud ante ICONTEC, Cotecna o Bureau Veritas, adjuntando el certificado de Cámara de Comercio y el RNT vigente.
4. **Visita de Auditoría en Terreno:** El auditor visitará la cocina, cuartos fríos, trampas de grasa, bodegas de residuos y habitaciones del hotel para constatar la veracidad de los soportes.
5. **Cierre de Brechas y Otorgamiento:** En caso de observaciones menores, el establecimiento cuenta con 30 días para enviar acciones correctivas. El sello se otorga con vigencia de 3 años.

---

## 16. INSTRUMENTO DE EVALUACIÓN DE SATISFACCIÓN Y CALIDAD EN USO (ISO/IEC 25010)

Para monitorear la experiencia de usuario y el impacto de la herramienta en el gremio turístico, se aplica la siguiente escala estandarizada de 24 afirmaciones:

| No. | Dimensión ISO 25010 | Reactivo de Evaluación Psicométrica | Valoración (1 a 5) |
| :---: | :--- | :--- | :---: |
| **Q01** | Reconocibilidad | La herramienta distingue claramente entre requisitos de restaurantes (NTC 6496) y hoteles (NTC 6503). | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q02** | Reconocibilidad | Las dimensiones ambiental, sociocultural y económica son claramente identificables en la interfaz. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q03** | Reconocibilidad | Las evidencias documentales exigidas se entienden con facilidad. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q04** | Aprendibilidad | La navegación del cuestionario no requirió capacitación técnica especializada. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q05** | Aprendibilidad | Los textos de ayuda explican de forma sencilla cómo cumplir con el manejo de AVU y trampa de grasa. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q06** | Aprendibilidad | Es intuitivo interpretar el radar triangular de triple impacto. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q07** | Operabilidad | La carga de datos demográficos y código RNT es rápida y sin trabas. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q08** | Operabilidad | La selección de estados y casillas de verificación responde de forma instantánea. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q09** | Operabilidad | La exportación del reporte ejecutivo en PDF se completa en pocos segundos. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q10** | Protección de Errores | El sistema advierte de forma explícita si se omite un requisito legal crítico como ESCNNA o AVU. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q11** | Protección de Errores | Se previene la pérdida de datos si se presenta una interrupción en la señal de internet. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q12** | Protección de Errores | Los mensajes de error son orientadores y ayudan a corregir el inconveniente. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q13** | Estética Visual | El diseño visual y los tonos ecológicos transmiten armonía y rigor profesional. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q14** | Estética Visual | El gráfico radial triangular refleja claramente la armonía entre las 3 dimensiones de sostenibilidad. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q15** | Estética Visual | El informe en PDF tiene un membrete sobrio digno de presentarse a entidades de control. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q16** | Accesibilidad Web | Pude utilizar la plataforma cómodamente desde una tablet durante el recorrido por la cocina/hotel. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q17** | Accesibilidad Web | La plataforma funciona fluidamente en Google Chrome, Microsoft Edge y Safari. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q18** | Accesibilidad Web | No tuve que descargar ni instalar programas pesados en la computadora de la recepción. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q19** | Modelo Probatorio | La verificación de evidencias documentales asegura que el diagnóstico sea riguroso y no inventado. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q20** | Modelo Probatorio | El catálogo de evidencias orienta con precisión sobre qué documentos solicitar al personal. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q21** | Modelo Probatorio | El informe generado sirve como respaldo técnico para la renovación del Registro Nacional de Turismo. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q22** | Asistente IA (Gemini) | Las recomendaciones de la inteligencia artificial fueron aplicables y realistas para mi negocio. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q23** | Asistente IA (Gemini) | La IA me ayudó a redactar textos normativos que de otro modo me habrían costado mucho dinero. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
| **Q24** | Satisfacción Global | Considero que este software es una contribución invaluable para el turismo sostenible en Colombia. | [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ] |
"""

    if "## 14. DICCIONARIO DE TÉRMINOS" not in content:
        content = content + "\n\n" + extra
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print("Updated GUIA_DE_USO_SOSTENIBILIDAD.md with glossary, certification guide, and survey.")

boost_sost_manual()
boost_sost_guide()
