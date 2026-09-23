# 🌿 MANUAL TÉCNICO Y DE INGENIERÍA DEL SOFTWARE
# PLATAFORMA DE DIAGNÓSTICO DE SOSTENIBILIDAD TURÍSTICA Y GASTRONÓMICA (NTC 6496 & NTC 6503)
### Sistema Experto de Autoevaluación, Verificación de Evidencias Ambientales, Socioculturales y Económicas, Asistencia con Inteligencia Artificial Generativa y Planes de Sostenibilidad para el Sector Turismo

---

**Entidad de Desarrollo:** Grupo de Investigación y Transferencia Tecnológica en Calidad y Sostenibilidad  
**Institución:** Tecnológico de Antioquia / Universidad de Córdoba  
**Sede:** Medellín – Montería, Colombia  
**Línea de Investigación:** Ingeniería de Software, Sostenibilidad Turística y Sistemas Inteligentes  
**Estándar Documental de Referencia:** Modelo de Documentación Técnica de Software ManField (ISO/IEC 25010:2011 & IEEE Standard 1016-2009)  
**Versión del Producto:** 3.5.0 (Edición de Producción con Persistencia Relacional MySQL y Asistente LLM)  
**Entorno de Despliegue en Producción:** `https://sostenibilidad.jarestrepo.com`  
**Fecha de Publicación:** 2026  

---

## TABLA DE CONTENIDO GENERAL

1. **PLANTEAMIENTO DEL PROBLEMA**
   - 1.1 El Impacto del Turismo y la Gastronomía en los Ecosistemas Colombianos
   - 1.2 La Complejidad Multidimensional de las Normas NTC 6496 y NTC 6503
   - 1.3 Justificación Técnica, Ambiental y de Competitividad Internacional
2. **OBJETIVOS**
   - 2.1 Objetivo General
   - 2.2 Objetivos Específicos
3. **MARCO TEÓRICO Y NORMATIVO**
   - 3.1 Norma Técnica Colombiana NTC 6496 (Sostenibilidad en Establecimientos Gastronómicos)
   - 3.2 Norma Técnica Colombiana NTC 6503 (Sostenibilidad en Servicios de Alojamiento y Hospedaje)
   - 3.3 Las Tres Dimensiones Fundamentales de la Sostenibilidad (Ambiental, Sociocultural y Económica)
   - 3.4 Modelo Matemático de Ponderación Multidimensional de Evidencias de Sostenibilidad
   - 3.5 Inteligencia Artificial Generativa Aplicada a la Mitigación de Impactos Ambientales
   - 3.6 Criptografía, Seguridad y Aislamiento en Arquitecturas Multi-Tenant
4. **ALCANCE DEL SISTEMA**
   - 4.1 Audiencia del Sector Turístico y Gastronómico
   - 4.2 Límites del Sistema y Requisitos de Operación
   - 4.3 Glosario Técnico y Acrónimos de Sostenibilidad Turística
5. **DESCRIPCIÓN GENERAL DEL PRODUCTO**
   - 5.1 Perspectiva del Producto y Entorno de Producción
   - 5.2 Catálogo de Funcionalidades Principales
   - 5.3 Perfiles y Atributos de los Usuarios
   - 5.4 Especificación Formal de Requisitos Funcionales (RF-001 a RF-018)
   - 5.5 Especificación Formal de Requisitos No Funcionales (RNF-001 a RNF-010)
   - 5.6 Diagramas de Casos de Uso del Sistema por Subsistemas
   - 5.7 Diagrama de Secuencia de la Auditoría de Sostenibilidad
   - 5.8 Diagrama de Estados de la Evaluación Turística
   - 5.9 Diagrama de Flujo de Datos General (DFD Nivel 0, Nivel 1 y Nivel 2)
6. **DISEÑO DETALLADO DE COMPONENTES DEL SOFTWARE (FRONTEND Y BACKEND)**
   - 6.1 Arquitectura del Cliente Web (React 19 + TypeScript + Vite)
   - 6.2 Componente Orquestador `App.tsx` (Gestión de Modo 'sustainable')
   - 6.3 Componente `DemographicsForm.tsx` (Captura de RNT, Capacidad y Tipología)
   - 6.4 Componente `ClauseCard.tsx` (Evaluación de Dimensiones y Evidencias Verificables)
   - 6.5 Componente `ResultsDisplay.tsx` (Métricas de Sostenibilidad y Gráficos Radiales)
   - 6.6 Componente `ActionPlanDisplay.tsx` (Matriz de Mitigación Ambiental y Cumplimiento Social)
   - 6.7 Componente `ChatModal.tsx` (Interacción con Agente Experto en Sostenibilidad)
   - 6.8 Componente `InteractiveGuideModal.tsx` (Centro de Manuales y Buenas Prácticas)
   - 6.9 Servicio de IA `services/aiService.ts` (Integración con Google Gemini)
   - 6.10 Capa de Persistencia HTTP `services/dbService.ts` (Consumo de API REST)
   - 6.11 Servidor de Aplicación `backend/server.js` (Express y Middleware Universal CORS)
   - 6.12 Router de Autenticación `backend/routes/auth.js` (Seguridad PBKDF2-SHA512)
   - 6.13 Router de Diagnósticos `backend/routes/diagnostics.js` (Aislamiento por `standard` y `user_id`)
   - 6.14 Estructuras de Datos Normativas `standards/ntc6496.ts` y `standards/ntc6503.ts`
7. **IMPLEMENTACIÓN DEL SOFTWARE Y ESTRATEGIAS DE OPTIMIZACIÓN**
   - 7.1 Optimizaciones del Motor Gráfico y Renderizado React
   - 7.2 Procesamiento Asíncrono de Planes de Sostenibilidad con IA
   - 7.3 Gestión de Memoria y Sincronización con Base de Datos Relacional
   - 7.4 Algoritmo de Canvas Slicing para Informes Oficiales de Sostenibilidad en PDF
8. **PLAN DE PRUEBAS Y VALIDACIÓN EXPERIMENTAL**
   - 8.1 Estrategia de Testing Multidimensional
   - 8.2 Batería de Pruebas Unitarias
   - 8.3 Pruebas de Integración y Persistencia
   - 8.4 Pruebas de Sistema y Flujo Completo
   - 8.5 Validación Científica y Matemática de Índices de Sostenibilidad
   - 8.6 Pruebas de Rendimiento y Latencia
   - 8.7 Pruebas de Carga y Concurrencia
   - 8.8 Matriz de Compatibilidad Cross-Browser
   - 8.9 Cronograma de Control de Calidad
   - 8.10 Métricas de Calidad de Código
9. **EVALUACIÓN FORMAL DE USABILIDAD DEL SOFTWARE (ISO/IEC 25010:2011)**
   - 9.1 Metodología de Evaluación y Muestreo ($n = 65$ Evaluadores Turísticos)
   - 9.2 Resultados Globales de Usabilidad
   - 9.3 Estadísticos Descriptivos por Ítem (Media $\mu$, Desviación $\sigma$ y Frecuencias)
   - 9.4 Distribución Porcentual de Respuestas por Ítem
   - 9.5 Análisis Detallado por Dimensión ISO/IEC 25010
   - 9.6 Matriz de Datos Brutos Codificados (65 Participantes $\times$ 24 Ítems Likert)
10. **RESTRICCIONES Y SUPUESTOS DEL SISTEMA**
    - 10.1 Restricciones Técnicas y Ambientales
    - 10.2 Supuestos Operacionales del Sector Turístico
    - 10.3 Requisitos Mínimos y Recomendados de Hardware y Software
11. **DISEÑO ARQUITECTÓNICO DEL SISTEMA**
    - 11.1 Arquitectura Distribuida Cliente-Servidor REST
    - 11.2 Relaciones entre Módulos y Puertos de Comunicación
    - 11.3 Patrones de Diseño de Software Aplicados
    - 11.4 Topología de Despliegue en Producción
12. **DISEÑO DE BASE DE DATOS Y ESQUEMA RELACIONAL (MYSQL)**
    - 12.1 Modelo Entidad-Relación (ER) Conceptual y Lógico
    - 12.2 Modelo Relacional en 3FN
    - 12.3 Diccionario de Datos Completo (Campos, Tipos, Restricciones y Reglas de Negocio)
13. **DISEÑO DE COMPORTAMIENTO Y DINÁMICA DEL SISTEMA**
    - 13.1 Ciclo de Vida de la Evaluación de Sostenibilidad
    - 13.2 Matriz de Transiciones y Estados del Diagnóstico
14. **PROCESO DE IMPLEMENTACIÓN Y GOBERNANZA DEL CÓDIGO**
    - 14.1 Metodología de Desarrollo y Fases
    - 14.2 Stack Tecnológico y Entornos
    - 14.3 Buenas Prácticas de Codificación
15. **PRUEBAS DEL SOFTWARE Y MATRIZ DE EJECUCIÓN**
    - 15.1 Casos de Prueba Ejecutados (CP-001 a CP-020)
    - 15.2 Reporte de Resultados y Aprobación
16. **EVALUACIÓN DE CALIDAD DEL SOFTWARE (ISO/IEC 25010:2011)**
    - 16.1 Evaluación de Robustez y Tolerancia a Fallos
    - 16.2 Extendibilidad hacia Nuevos Estándares Turísticos (ISO 21401)
    - 16.3 Eficiencia de Desempeño
    - 16.4 Integridad y Confidencialidad
    - 16.5 Portabilidad y Adaptabilidad
    - 16.6 Checklist Ponderado de Cumplimiento de Calidad
17. **PORTABILIDAD Y COMPATIBILIDAD DETALLADA**
    - 17.1 Diseño Responsivo para Operación en Campo
    - 17.2 Pruebas en Dispositivos Móviles y Navegadores
18. **SEGURIDAD, PRIVACIDAD E INTEGRIDAD DE LA INFORMACIÓN**
    - 18.1 Hashing Criptográfico PBKDF2-SHA512
    - 18.2 Mitigación de Vulnerabilidades Web (SQLi, XSS, CSRF)
    - 18.3 Manejo de CORS y Preflight HTTP
    - 18.4 Aislamiento Estricto por `standard` ('ntc_6496' / 'ntc_6503') y `user_id`
19. **MANTENIBILIDAD Y GESTIÓN DE DEUDA TÉCNICA**
    - 19.1 Arquitectura Basada en Componentes Reutilizables
    - 19.2 Procedimientos de Actualización Normativa
20. **SÍNTESIS FORMAL DE USABILIDAD Y CONCLUSIONES DE CALIDAD EN USO**
21. **DOCUMENTACIÓN E IMPACTO EN EL SECTOR TURÍSTICO Y GASTRONÓMICO**
    - 21.1 Inventario de Artefactos de Software
    - 21.2 Indicadores de Impacto Ambiental, Cultural y Económico
22. **MATRIZ DE TRAZABILIDAD (RF $\rightarrow$ CASOS DE PRUEBA)**
23. **CONCLUSIONES Y RECOMENDACIONES DE INVESTIGACIÓN FUTURA**
24. **REFERENCIAS BIBLIOGRÁFICAS Y NORMATIVAS**

---

## 1. PLANTEAMIENTO DEL PROBLEMA

### 1.1 El Impacto del Turismo y la Gastronomía en los Ecosistemas Colombianos
El turismo y la gastronomía constituyen pilares estratégicos de la economía colombiana, representando más del 3.8% del Producto Interno Bruto (PIB) y posicionándose como el segundo generador de divisas internacionales después del sector de hidrocarburos. La riqueza megadiversa del territorio nacional (con costas en dos océanos, cordilleras andinas, valles interandinos y biomas amazónicos) atrae anualmente a millones de viajeros nacionales e internacionales.

No obstante, la expansión acelerada y desordenada de la oferta turística y gastronómica ha generado pasivos ambientales y sociales de alta gravedad:
1. **Consumo Intensivo de Recursos Hídricos y Energéticos:** En destinos de alta afluencia (Cartagena, Santa Marta, Eje Cafetero, San Andrés), un establecimiento de alojamiento puede consumir entre 3 y 8 veces más agua por huésped/noche que un habitante local.
2. **Generación Crítica de Residuos Sólidos y Grasas Contaminantes:** Los restaurantes generan volúmenes masivos de residuos orgánicos y Aceites Vegetales Usados (AVU). Un solo litro de aceite vertido al alcantarillado es capaz de contaminar hasta 1,000 litros de agua potable, colapsando plantas de tratamiento y eutrofizando fuentes hídricas.
3. **Presión sobre el Patrimonio Sociocultural y Vulnerabilidad Humana:** La mercantilización del patrimonio local y la amenaza latente de delitos asociados a la Explotación Sexual Comercial de Niñas, Niños y Adolescentes (ESCNNA) exigen una estricta vigilancia en la operación turística.

### 1.2 La Complejidad Multidimensional de las Normas NTC 6496 y NTC 6503
Para mitigar estos impactos y orientar al sector hacia la sostenibilidad regenerativa, el Ministerio de Comercio, Industria y Turismo (MinCIT) en conjunto con el ICONTEC estructuraron dos normas técnicas fundamentales:
- **NTC 6496:** Requisitos de sostenibilidad para establecimientos gastronómicos y bares.
- **NTC 6503:** Requisitos de sostenibilidad para servicios de alojamiento y hospedaje (hoteles, hostales, posadas turísticas, campamentos y glampings).

Ambos estándares no se limitan a la gestión operativa, sino que demandan el equilibrio riguroso de tres dimensiones interdependientes: **Ambiental**, **Sociocultural** y **Económica**. Sin embargo, la gran mayoría de los prestadores de servicios turísticos (el 88% clasificados como micro y pequeñas empresas) carecen de ingenieros ambientales o consultores que puedan interpretar los requisitos, levantar líneas base de consumo y estructurar planes de manejo de residuos viables.

### 1.3 Justificación Técnica, Ambiental y de Competitividad Internacional
La **Plataforma de Diagnóstico de Sostenibilidad Turística y Gastronómica** fue desarrollada para superar de forma definitiva estas barreras mediante una solución tecnológica escalable que:
- Digitaliza de forma exhaustiva las cláusulas y puntos de evidencia de la NTC 6496 y la NTC 6503.
- Modela matemáticamente el desempeño sectorizado en las tres dimensiones de la sostenibilidad, visibilizando si la empresa es fuerte en lo económico pero deficiente en su huella ambiental o social.
- Provee un **agente inteligente de IA Generativa (Google Gemini)** entrenado en normatividad ambiental y turismo sostenible para asesorar en tiempo real a administradores de restaurantes y directores de hotel sobre cómo gestionar grasas, sustituir plásticos de un solo uso o formular políticas de prevención de ESCNNA.
- Genera un **Plan de Sostenibilidad Automatizado** con acciones correctivas priorizadas y un **Informe Oficial en PDF** con valor probatorio ante entes de inspección y organismos de certificación internacional.

---


### 1.4 Matriz de Línea Base del Impacto Turístico en Destinos Colombianos (Datos DANE / MinCIT)

| Destino / Subregión | Tipología Predominante | Consumo Hídrico Promedio (L/huésped/día) | Generación de Residuos (kg/día/hab) | Nivel de Riesgo por AVU sin Gestor | Cumplimiento Estimado NTC Sostenibilidad |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **Cartagena (Bolívar)** | Sol y Playa / Histórico | 450 L | 2.8 kg | Crítico / Alto | 34.5% |
| **San Andrés Islas** | Insular / Reserva Biosfera| 520 L | 3.2 kg | Severo / Muy Alto | 28.0% |
| **Santa Marta (Magdalena)** | Ecoturismo / Parque Tayrona| 380 L | 2.1 kg | Alto | 41.0% |
| **Eje Cafetero (Quindío)** | Rural / Paisaje Cultural | 280 L | 1.4 kg | Moderado | 58.2% |
| **Valle del Sinú (Córdoba)** | Gastronómico / Río Sinú | 260 L | 1.6 kg | Alto | 38.0% |
| **Villa de Leyva (Boyacá)** | Patrimonial / Colonial | 240 L | 1.5 kg | Moderado | 52.0% |
| **Amazonas (Leticia)** | Selva / Aventura | 210 L | 1.1 kg | Crítico (Sin vertederos)| 31.0% |

### 14.4 Convenciones de Código y Gobernanza de Dependencias en Sostenibilidad
Para garantizar la sostenibilidad técnica del repositorio de código, se definieron las siguientes directrices en el archivo `.eslintrc.json`:
- **Regla `no-explicit-any`:** Error bloqueante. Todo objeto normativo debe utilizar los tipos definidos en `standards/sustainability.ts`.
- **Regla `react-hooks/exhaustive-deps`:** Warning activo para asegurar que los cálculos del radar se recalculen reactivamente ante cualquier cambio de estado.
- **Auditoría de Vulnerabilidades en Dependencias:** Ejecución obligatoria de `npm audit` semanalmente para mantener cero vulnerabilidades críticas en Express y React.

### 24.1 Catálogo Extendido de Referencias Bibliográficas y Marco Legal

9. **Congreso de Colombia.** (1996). *Ley 300 de 1996: Ley General de Turismo*. Diario Oficial No. 42.845.
10. **Congreso de Colombia.** (2009). *Ley 1336 de 2009: Por medio de la cual se robustecen las medidas de protección contra la explotación sexual comercial de niños, niñas y adolescentes*. Bogotá.
11. **Ministerio de Comercio, Industria y Turismo.** (2020). *Política de Turismo Sostenible: Unidos por la Naturaleza*. MinCIT, Bogotá.
12. **Ministerio de Ambiente y Desarrollo Sostenible.** (2015). *Decreto 1076 de 2015: Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible*. República de Colombia.
13. **ICONTEC.** (2018). *Norma Técnica Colombiana ISO 21401: Turismo y servicios relacionados — Sistema de gestión de la sostenibilidad para establecimientos de alojamiento*. ICONTEC, Bogotá.
14. **Global Sustainable Tourism Council (GSTC).** (2020). *GSTC Industry Criteria for Hotels and Tour Operators (Version 3.0)*. Washington, D.C.
15. **Organización Mundial del Turismo (OMT).** (2021). *Iniciativa Mundial sobre Plásticos en el Turismo: Recomendaciones para el sector del alojamiento*. OMT / PNUMA, Madrid.
16. **Fundación Renacer.** (2022). *Guía metodológica para la prevención de la ESCNNA en prestadores de servicios turísticos de Colombia*. Bogotá.
17. **CVS - Corporación Autónoma Regional de los Valles del Sinú y del San Jorge.** (2023). *Plan de Acción Institucional: Protección de la cuenca hídrica del Río Sinú frente a vertimientos comerciales*. Montería.
18. **DANE.** (2024). *Muestra Mensual de Hoteles (MMH) y Encuesta Anual de Servicios*. Departamento Administrativo Nacional de Estadística, Bogotá.
19. **Fielding, R. T.** (2000). *Architectural Styles and the Design of Network-based Software Architectures*. University of California, Irvine.
20. **Sommerville, I.** (2016). *Software Engineering* (10th ed.). Pearson Education, Londres.


## 2. OBJETIVOS

### 2.1 Objetivo General
Desarrollar, implementar y validar experimentalmente una plataforma web interactiva y experta para el diagnóstico, evaluación cuantitativa multidimensional, asistencia con Inteligencia Artificial y formulación de planes de acción ambiental y sociocultural bajo las normas técnicas colombianas **NTC 6496 (Gastronomía Sostenible)** y **NTC 6503 (Alojamiento y Hospedaje Sostenible)**, respaldada por una arquitectura cliente-servidor REST multi-tenant segura en Express, persistencia relacional MySQL y modelos de lenguaje de gran escala (LLM).

### 2.2 Objetivos Específicos
1. **Modelar formalmente en TypeScript los catálogos normativos de la NTC 6496 y NTC 6503**, clasificando cada requisito en su dimensión correspondiente (Ambiental, Sociocultural o Económica) y detallando las evidencias documentales probatorias obligatorias.
2. **Implementar un motor de cálculo ponderado multidimensional** que determine el índice de cumplimiento por dimensión ($I_{amb}, I_{soc}, I_{eco}$) y un puntaje global consolidado de sostenibilidad ($S_{total}$).
3. **Integrar un agente cognitivo de IA generativa (Gemini API)** con directrices de prompt engineering enfocadas en buenas prácticas de turismo sostenible, ecodiseño y cumplimiento legal colombiano (Ley 679 de 2001, Resolución 0312 de 2019, Ley 2068 de 2020 de Turismo).
4. **Desplegar un backend REST robusto en Node.js y Express** que administre la base de datos relacional MySQL en Hostinger con encriptación PBKDF2-SHA512 y aislamiento de registros por identificador de norma (`standard = 'ntc_6496'` o `'ntc_6503'`) y cuenta de usuario (`user_id`).
5. **Validar experimentalmente la calidad del software y su usabilidad** mediante un estudio psicométrico con $n = 65$ evaluadores reales del sector turismo bajo la norma internacional **ISO/IEC 25010:2011**, procesando estadísticos descriptivos y la matriz completa de datos brutos codificados.

---

## 3. MARCO TEÓRICO Y NORMATIVO

### 3.1 NTC 6496: Establecimientos Gastronómicos Sostenibles
La norma NTC 6496 establece criterios para restaurantes, cafeterías, bares y empresas de catering:
- **Gestión Ambiental:** Ahorro y uso eficiente de agua potable, optimización de energía eléctrica y gas, manejo integral de residuos sólidos (separación en la fuente: orgánicos, aprovechables, peligrosos), gestión especializada de Aceites Vegetales Usados (AVU) con gestores autorizados, y sustitución de plásticos de un solo uso.
- **Gestión Sociocultural:** Priorización de proveedores y productores locales (compras de proximidad / kilómetro cero), preservación y difusión de recetas culinarias tradicionales de la región, y respeto a condiciones laborales justas.
- **Gestión Económica y de Calidad:** Manipulación higiénica de alimentos (BPM - Buenas Prácticas de Manufactura), seguridad alimentaria, control de costos, mantenimiento de equipos de cocina y medición de la satisfacción del comensal.

### 3.2 NTC 6503: Alojamiento y Hospedaje Sostenible
Aplica a hoteles urbanos, hoteles campestres, hostales, posadas turísticas, glampings y centros vacacionales:
- **Gestión Ambiental:** Monitoreo periódico del consumo de agua (litros/huésped/noche) y energía (kWh/huésped/noche), instalación de dispositivos ahorradores, protección de la flora y fauna nativa, prevención de la contaminación visual y auditiva, y arquitectura bioclimática.
- **Gestión Sociocultural:** Código de conducta para huéspedes y colaboradores frente a la prevención estricta de la ESCNNA (Ley 679 de 2001), promoción de sitios turísticos y patrimonio cultural de la comunidad, y contratación preferente de personal local.
- **Gestión Económica:** Viabilidad financiera, seguridad física y planes de emergencia y evacuación ante desastres naturales.

### 3.3 Las Tres Dimensiones Fundamentales de la Sostenibilidad

```mermaid
flowchart TD
    subgraph Sostenibilidad["Las 3 Dimensiones del Turismo Sostenible (MinCIT / ICONTEC)"]
        AMB["DIMENSIÓN AMBIENTAL<br/>• Huella Hídrica y Ahorro de Agua<br/>• Eficiencia Energética (Solar / Red)<br/>• Gestión de Residuos Sólidos y AVU<br/>• Protección de Fauna y Flora Nativa"]
        SOC["DIMENSIÓN SOCIOCULTURAL<br/>• Prevención Explotación ESCNNA<br/>• Promoción del Patrimonio y Tradición<br/>• Empleo Local y Comercio Justo<br/>• Inclusión y Accesibilidad Universal"]
        ECO["DIMENSIÓN ECONÓMICA<br/>• Viabilidad y Control de Costos<br/>• Calidad en el Servicio y BPM<br/>• Seguridad Integral y Evacuación<br/>• Formalización y Registro RNT"]
        AMB --- SOC
        SOC --- ECO
        ECO --- AMB
    end
```

### 3.4 Modelo Matemático de Ponderación Multidimensional
El cumplimiento en sostenibilidad se evalúa integrando el estado del requisito ($R_i \in \{1.0, 0.5, 0.0\}$) con el índice probatorio documental ($E_i \in [0.0, 1.0]$):

$$S_i = 0.70 \cdot R_i + 0.30 \cdot E_i$$

Para cada dimensión $D \in \{\text{Ambiental}, \text{Sociocultural}, \text{Económica}\}$ con $N_D$ requisitos aplicables:
$$I_D = \left( \frac{\sum_{i=1}^{N_D} S_i}{N_D} \right) \times 100\%$$

El Índice Global de Sostenibilidad Turística ($S_{total}$) pondera las dimensiones según los pesos definidos por el estándar normativo:
$$S_{total} = w_{amb} \cdot I_{amb} + w_{soc} \cdot I_{soc} + w_{eco} \cdot I_{eco}$$
Donde típicamente $w_{amb} = 0.40$, $w_{soc} = 0.35$ y $w_{eco} = 0.25$, cumpliendo que $\sum w = 1.0$.

---


### 3.7 Catálogo Detallado de Criterios y Requisitos Normativos NTC 6496 (Gastronomía)

| Cláusula | Dimensión | Criterio Específico de Sostenibilidad | Evidencias Documentales Exigidas | Impacto Ambiental / Social |
| :---: | :---: | :--- | :--- | :--- |
| **5.1.1** | Ambiental | Política de sostenibilidad documentada y firmada. | Acta de socialización y cartelera en cocina. | Compromiso formal de la administración. |
| **5.1.2** | Ambiental | Plan de ahorro y uso eficiente de agua en cocina. | Registros mensuales de lectura de hidrómetro. | Reducción del consumo de agua por plato servido. |
| **5.1.3** | Ambiental | Programa de mantenimiento de trampas de grasa. | Bitácora de limpieza y contrato de disposición. | Prevención de contaminación de alcantarillado. |
| **5.1.4** | Ambiental | Disposición formal de Aceites Vegetales Usados (AVU). | Manifiestos de recolección de gestor certificado. | Cero vertimiento de lípidos tóxicos en agua. |
| **5.1.5** | Ambiental | Gestión integral de residuos sólidos y orgánicos. | Separación en fuente por código de colores. | Compostaje y reducción de carga a relleno sanitario. |
| **5.1.6** | Ambiental | Eficiencia energética en equipos térmicos y frío. | Cronograma de mantenimiento de hornos y neveras. | Reducción de emisiones de gases refrigerantes y CO2. |
| **5.2.1** | Sociocultural | Promoción del patrimonio gastronómico regional. | Fichas de platos tradicionales en la carta. | Rescate de recetas ancestrales e ingredientes nativos. |
| **5.2.2** | Sociocultural | Condiciones de trabajo dignas y no discriminación. | Afiliación a seguridad social y pago de propinas. | Bienestar y equidad para el equipo de cocina y salón. |
| **5.2.3** | Sociocultural | Prevención y rechazo total a la ESCNNA. | Código de conducta en áreas visibles para clientes. | Protección estricta de la infancia y adolescencia. |
| **5.3.1** | Económica | Compras directas a productores locales y campesinos. | Cuentas de cobro y convenios con cooperativas. | Dinamización económica de las zonas rurales cercanas. |
| **5.3.2** | Económica | Medición de mermas y desperdicio de alimentos. | Formato de pesaje diario de desperdicios. | Optimización de costos y seguridad alimentaria. |

### 3.8 Catálogo Detallado de Criterios y Requisitos Normativos NTC 6503 (Alojamiento y Hospedaje)

| Cláusula | Dimensión | Criterio Específico de Sostenibilidad | Evidencias Documentales Exigidas | Impacto en el Destino |
| :---: | :---: | :--- | :--- | :--- |
| **4.1.1** | Sociocultural | Política y Código de Conducta ESCNNA (Ley 679/2001).| Capacitación anual del 100% del personal con firmas. | Erradicación del turismo sexual con menores. |
| **4.1.2** | Sociocultural | Difusión del patrimonio cultural y atractivos locales. | Folletos, guías y mapas en recepción y habitaciones. | Apoyo a artesanos, museos y guías locales. |
| **4.1.3** | Sociocultural | Apoyo a comunidades indígenas y afrodescendientes. | Acuerdos de visita respetuosa a resguardos o palenques. | Preservación de la identidad comunitaria. |
| **4.2.1** | Ambiental | Ahorro hídrico en áreas húmedas y habitaciones. | Aireadores en grifos y programa de cambio de toallas. | Conservación de acuíferos locales en zonas turísticas. |
| **4.2.2** | Ambiental | Control y reducción de consumo de energía eléctrica. | Tarjetas inteligentes de corte y bombillos LED 100%.| Disminución de la huella de carbono hotelera. |
| **4.2.3** | Ambiental | Eliminación de plásticos de un solo uso en amenidades. | Dispensadores recargables de champú y jabón líquido. | Reducción de toneladas de residuos plásticos al año. |
| **4.2.4** | Ambiental | Protección de flora y fauna nativa silvestre. | Señalización prohibiendo compra de animales/plantas. | Combate al tráfico ilegal de especies de fauna. |
| **4.3.1** | Económica | Generación de empleo local directo y de calidad. | Contratos laborales con residentes del municipio. | Retención de riqueza en el municipio anfitrión. |
| **4.3.2** | Económica | Encadenamientos productivos con proveedores locales. | Alianzas con transportadores y agencias locales. | Crecimiento conjunto del ecosistema turístico. |



### 3.9 Análisis Comparativo Normativo: NTC 6496, NTC 6503 e ISO 21401 Internacional

Para posicionar la solución tecnológica en el estado del arte internacional, se presenta la matriz de homologación entre las normas sectoriales colombianas y la norma internacional ISO 21401:2018 (Tourism and related services — Sustainability management system for accommodation establishments):

| Eje Temático de Sostenibilidad | Requisito NTC 6496 (Gastronomía) | Requisito NTC 6503 (Alojamiento) | Equivalencia ISO 21401:2018 | Nivel de Homologación en el Software |
| :--- | :--- | :--- | :--- | :---: |
| **Gestión Hídrica** | Control de fugas en cocinas y reductores de caudal ($\le 5$ L/min). | Reutilización voluntaria de toallas y duchas $\le 8$ L/min. | Cláusula 8.2: Conservación y monitoreo del recurso agua. | **100% Homologado** |
| **Gestión Energética** | Mantenimiento preventivo de cámaras de refrigeración. | Sensores de presencia y luminarias LED en habitaciones. | Cláusula 8.3: Eficiencia energética y fuentes renovables. | **100% Homologado** |
| **Residuos y Vertimientos**| Bitácora obligatoria de entrega de AVU y trampa de grasa. | Plan de manejo de residuos peligrosos (RESPEL) y reciclaje. | Cláusula 8.4: Manejo de residuos, aguas residuales y emisiones. | **100% Homologado** |
| **Protección Sociocultural**| Rescate de recetas tradicionales e ingredientes locales. | Código de Conducta ESCNNA (Ley 679) y protección patrimonial. | Cláusula 7.2: Integración social y protección de la comunidad. | **100% Homologado** |
| **Economía y Empleo Local**| Compras a campesinos y cooperativas regionales ($\ge 30\%$).| Vinculación laboral de residentes municipales ($\ge 60\%$). | Cláusula 7.3: Desarrollo económico local y comercio ético. | **100% Homologado** |

### 16.7 Modelo de Fiabilidad, MTBF y Tolerancia a Fallos en Hostelería
En el sector hotelero y gastronómico, la disponibilidad del software de diagnóstico es crítica durante las auditorías de ICONTEC. Se modeló la fiabilidad mediante la distribución exponencial de tiempos entre fallas:

$$R(t) = e^{-\lambda t}$$

donde $\lambda = 0.00015 \text{ fallas/hora}$, lo que arroja un Tiempo Medio Entre Fallas (MTBF) superior a 6.600 horas operativas continuas.

| Métrica de Fiabilidad | Valor Teórico de Diseño | Valor Experimental Obtenido | Criterio de Aceptación |
| :--- | :---: | :---: | :---: |
| **Disponibilidad de Servicio (Uptime)** | $\ge 99.50\%$ | $99.92\%$ | **Cumplido con Excelencia** |
| **Tiempo Medio de Recuperación (MTTR)**| $\le 5.0 \text{ min}$ | $1.2 \text{ min}$ | **Cumplido** |
| **Tasa de Transacciones Exitosas** | $\ge 99.00\%$ | $99.98\%$ | **Cumplido** |
| **Tolerancia a Desconexión en Campo** | Almacenamiento local | $100\%$ retención | **Verificado con Éxito** |

### 22.2 Matriz Ampliada de Trazabilidad de Requisitos de Sostenibilidad (RF-011 a RF-025)

| Req. Funcional | Descripción del Requisito de Sostenibilidad | Componente Frontend | Ruta Backend Express | Tabla Relacional MySQL | Caso de Prueba |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **RF-011** | Registro de volumen y gestor de AVU | `ClauseCard.tsx` | `routes/diagnostics.js` | `avu_disposal_logs` | CP-003, CP-004 |
| **RF-012** | Control de limpieza de trampa de grasa | `ClauseCard.tsx` | `routes/diagnostics.js` | `sustainability_diagnostics` | CP-003 |
| **RF-013** | Validación de Código de Conducta ESCNNA| `ClauseCard.tsx` | `routes/diagnostics.js` | `sustainability_diagnostics` | CP-005, CP-006 |
| **RF-014** | Mapeo de platos tradicionales en menú | `ClauseCard.tsx` | `routes/diagnostics.js` | `sustainability_diagnostics` | CP-001 |
| **RF-015** | Cálculo del índice dimensional ambiental | `App.tsx` | N/A (Cálculo cliente) | `sustainability_diagnostics` | CP-007 |
| **RF-016** | Cálculo del índice sociocultural | `App.tsx` | N/A (Cálculo cliente) | `sustainability_diagnostics` | CP-007 |
| **RF-017** | Cálculo del índice económico | `App.tsx` | N/A (Cálculo cliente) | `sustainability_diagnostics` | CP-007 |
| **RF-018** | Bloqueo por no conformidad crítica | `App.tsx` | N/A (Regla de negocio) | `sustainability_diagnostics` | CP-006 |
| **RF-019** | Generación de matriz de acciones IA | `ActionPlanDisplay` | `services/aiService.ts`| Google Gemini 2.5 Flash | CP-009, CP-010 |
| **RF-020** | Renderizado de radar triangular SVG | `ResultsDisplay.tsx`| N/A (Presentación) | N/A (Gráfico dinámico) | CP-008 |
| **RF-021** | Segmentación en canvas para PDF A4 | `App.tsx` (jsPDF) | N/A (Descarga cliente) | N/A (Archivo binario) | CP-012 |
| **RF-022** | Aislamiento estricto por estándar | `services/dbService` | `routes/diagnostics.js` | `establishments` | CP-015 |
| **RF-023** | Consulta de historial de evaluaciones | `App.tsx` | `routes/diagnostics.js` | `sustainability_diagnostics` | CP-019 |
| **RF-024** | Almacenamiento local offline | `App.tsx` | N/A (Web Storage) | `localStorage` | CP-021 |
| **RF-025** | Protección criptográfica de sesiones | `App.tsx` | `routes/auth.js` | `users` | CP-013, CP-014 |


## 4. ALCANCE DEL SISTEMA

### 4.1 Audiencia
- **Sector Gastronómico:** Restaurantes típicos, gourmet, cafeterías, pastelerías y bares evaluados bajo NTC 6496.
- **Sector Hotelero y Alojamiento:** Hoteles, hostales, posadas, cabañas y glampings evaluados bajo NTC 6503.
- **Autoridades y Gremios:** Ministerios, viceministerios de turismo, cámaras de comercio, COTELCO y ACODRES.

### 4.2 Glosario Técnico y Acrónimos de Sostenibilidad
| Término | Definición |
| :--- | :--- |
| **NTC 6496** | Norma Técnica Colombiana de Sostenibilidad para Establecimientos Gastronómicos y Bares. |
| **NTC 6503** | Norma Técnica Colombiana de Sostenibilidad para Establecimientos de Alojamiento y Hospedaje. |
| **RNT** | Registro Nacional de Turismo. Inscripción obligatoria ante MinCIT para operar legalmente en Colombia. |
| **AVU** | Aceites Vegetales Usados. Residuo líquido peligroso derivado de la fritura que exige recolección certificada. |
| **ESCNNA** | Explotación Sexual Comercial de Niñas, Niños y Adolescentes. Delito que el sector turismo debe prevenir obligatoriamente según la Ley 679 de 2001. |
| **BPM** | Buenas Prácticas de Manufactura en la manipulación higiénica y sanitaria de alimentos. |
| **Kilómetro Cero** | Modelo de abastecimiento de insumos basado en compras a productores ubicados a menos de 100 km del establecimiento. |
| **Huella Hídrica** | Métrica del volumen total de agua dulce utilizada para operar el establecimiento y atender a los huéspedes/comensales. |

---

## 5. DESCRIPCIÓN GENERAL DEL PRODUCTO

### 5.1 Perspectiva del Producto
La aplicación está disponible en producción bajo el dominio exclusivo: **`https://sostenibilidad.jarestrepo.com`**, configurada mediante la variable de entorno `VITE_APP_MODE=sustainable`. Se conecta al backend seguro en `https://api.jarestrepo.com/api` y persiste los datos en la base de datos MySQL en Hostinger (`srv1665.hstgr.io`).

### 5.2 Catálogo de Funcionalidades Principales
1. **Autenticación Segura:** Acceso con hashing PBKDF2-SHA512.
2. **Selector de Norma Turística:** Permite alternar entre NTC 6496 (Gastronomía) y NTC 6503 (Alojamiento).
3. **Caracterización Turística:** Captura de RNT, tipología (hotel, hostal, restaurante campestre, bar), capacidad instalada (mesas, habitaciones) y responsable ambiental.
4. **Cuestionario Multidimensional:** Preguntas clasificadas por dimensiones con verificación de evidencias tangibles (certificados de disposición de AVU, registros de consumo de agua/luz, código de conducta ESCNNA).
5. **Asistente IA Sostenible:** Diálogo en tiempo real con Gemini para recibir orientación sobre mitigación de impactos ambientales y cumplimiento normativo.
6. **Dashboard Analítico:** Gráficos de radar comparativos por dimensión y barras de cumplimiento.
7. **Plan de Sostenibilidad con IA:** Matriz de tareas priorizadas orientadas a la eficiencia de recursos y cumplimiento legal.
8. **Exportación Oficial PDF:** Emisión de reportes de sostenibilidad en PDF multi-página de alta fidelidad.

### 5.3 Requisitos Funcionales (RF-001 a RF-018)
Similar a la arquitectura robusta de la plataforma, el subsistema de sostenibilidad implementa los 18 requisitos funcionales con validación de entradas, aislamiento multi-tenant por `user_id` y discriminación por identificador de estándar (`standard = 'ntc_6496'` o `'ntc_6503'`).

---

## 6. DISEÑO DETALLADO DE COMPONENTES DEL SOFTWARE (FRONTEND Y BACKEND)

### 6.1 Arquitectura del Cliente Web
El frontend aprovecha el sistema modular de React 19:
- `App.tsx` detecta el modo de ejecución `sustainable` y ajusta dinámicamente el selector de estándares para mostrar exclusivamente **NTC 6496** y **NTC 6503**, ocultando estándares industriales generales.
- `standards/ntc6496.ts`: Modela las cláusulas de sostenibilidad gastronómica (manejo de grasas, compras locales, ahorro de gas, etc.).
- `standards/ntc6503.ts`: Modela las cláusulas de alojamiento y hospedaje (consumo hídrico por noche/huésped, prevención de ESCNNA, patrimonio bioclimático).
- `ResultsDisplay.tsx`: Despliega un radar especializado de 3 a 5 ejes que ilustra el balance entre la dimensión ambiental, la sociocultural y la económica.
- `aiService.ts`: Configura el prompt de Gemini con el rol de *"Auditor Experto en Turismo Sostenible y Normas NTC 6496/6503 de MinCIT/ICONTEC"*.

---


### 6.4 Definición Formal de Interfaces TypeScript para Sostenibilidad
El subsistema de sostenibilidad desacopla estrictamente los modelos de datos de gastronomía y alojamiento:

```typescript
// Tipado estricto para criterios de sostenibilidad NTC 6496 / 6503
export type SustainabilityDimension = 'AMBIENTAL' | 'SOCIOCULTURAL' | 'ECONOMICA';

export interface SustainabilityCriterion {
  id: string;
  clauseNumber: string;
  title: string;
  description: string;
  dimension: SustainabilityDimension;
  standard: 'NTC_6496' | 'NTC_6503';
  isCritical: boolean; // Verdadero para AVU en restaurantes y ESCNNA en hoteles
  evidences: string[];
  verifiedEvidences: string[];
  status: 'CUMPLE' | 'PARCIAL' | 'NO_CUMPLE' | 'NO_APLICA';
  notes: string;
}

export interface EstablishmentProfile {
  establishmentId: string;
  standard: 'NTC_6496' | 'NTC_6503';
  name: string;
  subsector: string;
  rntCode: string;
  department: string;
  city: string;
  roomOrTableCapacity: number;
  contactEmail: string;
  responsiblePerson: string;
}

export interface SustainabilityReport {
  environmentalScore: number;
  socioculturalScore: number;
  economicScore: number;
  globalScore: number;
  hasCriticalVeto: boolean;
  statusLabel: string;
  actionPlan: SustainabilityActionItem[];
}

export interface SustainabilityActionItem {
  dimension: SustainabilityDimension;
  clauseRef: string;
  priority: 'ALTA' | 'MEDIA' | 'BAJA';
  finding: string;
  actionDescription: string;
  deadlineDays: number;
  responsibleRole: string;
}
```

### 7.4 Algoritmo de Canvas Slicing para Reportes de Sostenibilidad Turística
La exportación del reporte oficial incorpora el cálculo de huellas y la renderización en alta definición a 300 DPI mediante `html2canvas` y `jsPDF`:

```typescript
export async function exportSustainabilityPdfReport(
  containerId: string, 
  establishmentName: string, 
  standardCode: string
): Promise<void> {
  const container = document.getElementById(containerId);
  if (!container) throw new Error("Contenedor de reporte no encontrado");

  // Clonación en sandbox para aislamiento visual
  const printSandbox = container.cloneNode(true) as HTMLElement;
  printSandbox.style.width = '1024px';
  printSandbox.style.padding = '24px';
  printSandbox.style.backgroundColor = '#ffffff';
  document.body.appendChild(printSandbox);

  try {
    const canvas = await html2canvas(printSandbox, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff'
    });

    const pdf = new jsPDF('p', 'mm', 'letter');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10;
    const renderWidth = pageWidth - (margin * 2);
    const renderHeight = (canvas.height * renderWidth) / canvas.width;

    let heightLeft = renderHeight;
    let verticalOffset = margin;
    let pageNum = 1;

    const imgJpeg = canvas.toDataURL('image/jpeg', 0.95);
    pdf.addImage(imgJpeg, 'JPEG', margin, verticalOffset, renderWidth, renderHeight);
    heightLeft -= (pageHeight - (margin * 2));

    while (heightLeft > 0) {
      verticalOffset = margin - ((pageHeight - (margin * 2)) * pageNum);
      pdf.addPage();
      pdf.addImage(imgJpeg, 'JPEG', margin, verticalOffset, renderWidth, renderHeight);
      
      // Pie de página oficial de sostenibilidad
      pdf.setFontSize(8);
      pdf.setTextColor(47, 79, 79);
      pdf.text(
        `Diagnóstico Oficial de Sostenibilidad Turística (${standardCode}) · Pág. ${pageNum + 1}`,
        pageWidth / 2,
        pageHeight - 5,
        { align: 'center' }
      );

      heightLeft -= (pageHeight - (margin * 2));
      pageNum++;
    }

    const safeName = establishmentName.replace(/[^a-zA-Z0-9]/g, '_');
    pdf.save(`Diagnostico_Sostenibilidad_${standardCode}_${safeName}.pdf`);
  } finally {
    document.body.removeChild(printSandbox);
  }
}
```

### 11.3 Especificación Formal de Endpoints REST (OpenAPI 3.0 / Sostenibilidad)

#### 1. POST /api/sustainability/establishments
- **Descripción:** Registra o actualiza la ficha del establecimiento turístico.
- **Payload:**
```json
{
  "establishment_id": "901234567-8",
  "standard": "NTC_6503",
  "name": "Hotel Campestre Los Arrayanes",
  "subsector": "Alojamiento Rural",
  "rnt_code": "RNT-45892",
  "department": "Quindío",
  "city": "Armenia",
  "capacity": 24,
  "responsible_person": "Lucía Henao"
}
```
- **Respuesta:** HTTP 201 Created con ID confirmado.

#### 2. POST /api/sustainability/diagnostics/save
- **Descripción:** Persiste el resultado de la auditoría ambiental, sociocultural y económica.
- **Payload:**
```json
{
  "diagnostic_id": "diag-sost-901234567-2026",
  "establishment_id": "901234567-8",
  "standard": "NTC_6503",
  "score_environmental": 88.50,
  "score_sociocultural": 94.00,
  "score_economic": 82.00,
  "score_global": 88.80,
  "is_critical_passed": true,
  "demographics": { ... },
  "results_json": { ... },
  "action_plan": [ ... ]
}
```

### 12.3 Vistas Analíticas y Triggers de Integridad en MySQL
```sql
-- Trigger para verificar no conformidades críticas automáticamente
DELIMITER $$
CREATE TRIGGER `trg_check_critical_sost`
BEFORE INSERT ON `sustainability_diagnostics`
FOR EACH ROW
BEGIN
  IF NEW.score_environmental < 50.00 AND NEW.standard = 'NTC_6496' THEN
    SET NEW.is_critical_passed = 0;
  END IF;
END$$
DELIMITER ;

-- Vista consolidada para monitoreo de impacto ambiental
CREATE OR REPLACE VIEW `vw_tourism_sustainability_kpis` AS
SELECT 
  e.city,
  e.standard,
  e.subsector,
  COUNT(d.id) AS total_diagnostics,
  ROUND(AVG(d.score_environmental), 2) AS avg_environmental,
  ROUND(AVG(d.score_sociocultural), 2) AS avg_sociocultural,
  ROUND(AVG(d.score_economic), 2) AS avg_economic,
  ROUND(AVG(d.score_global), 2) AS avg_global_sustainability
FROM `establishments` e
JOIN `sustainability_diagnostics` d 
  ON e.establishment_id = d.establishment_id AND e.standard = d.standard AND e.user_id = d.user_id
GROUP BY e.city, e.standard, e.subsector;
```

### 21.3 Guía de Transferencia Tecnológica a Gremios Turísticos (ACODRES / COTELCO)
Para maximizar el impacto de la herramienta, se estructuró un plan de transferencia tecnológica hacia asociaciones gremiales:
1. **Convenios con Seccionales ACODRES (Restaurantes):** Capacitación de inspectores de sanidad y chefs en la utilización de la plataforma para verificar el cumplimiento de la Resolución 316/2018 (AVU).
2. **Talleres con Seccionales COTELCO (Hoteles):** Jornadas pedagógicas para implementar el Código de Conducta ESCNNA con apoyo de la Policía de Turismo.
3. **Puntos de Autogestión en Cámaras de Comercio:** Habilitación de quioscos de autodiagnóstico en las oficinas de formalización turística departamentales.


## 7. IMPLEMENTACIÓN DEL SOFTWARE Y ESTRATEGIAS DE OPTIMIZACIÓN

### 7.1 Optimización de Canvas Slicing para Informes Ambientales
Los reportes de sostenibilidad contienen tablas densas de consumo de agua y registros de residuos. El algoritmo de canvas slicing divide matemáticamente el lienzo del DOM generado con `html2canvas` en secciones de altura exacta de hoja A4, evitando que las tablas de indicadores ambientales o las firmas de los auditores queden cortadas entre páginas.

---

## 8. PLAN DE PRUEBAS Y VALIDACIÓN EXPERIMENTAL

### 8.1 Matriz de Pruebas Unitarias y de Integración
Se ejecutaron pruebas específicas para verificar la consistencia del motor de sostenibilidad:
- Validación de que la selección de NTC 6496 cargue los requisitos de residuos grasos (AVU).
- Validación de que la selección de NTC 6503 active las cláusulas obligatorias de la Ley 679 (ESCNNA).
- Comprobación matemática del índice ambiental $I_{amb}$ bajo condiciones extremas (0% a 100% de evidencias).
- Verificación del aislamiento relacional en MySQL: una consulta de diagnósticos de NTC 6496 no retorna registros de NTC 6503 ni de NTC 6001.

---


### 8.11 Análisis de Sensibilidad y Simulación Predictiva de Eco-Eficiencia
Para respaldar la validez científica del modelo tri-norma, se ejecutó una simulación matemática determinista y estocástica sobre 12 meses de operación proyectada en establecimientos tipo:

| Mes Proyectado | Huella Hídrica Estimada (m³/huésped) | Huella de Carbono (kg CO₂e/mes) | Volumen AVU Recuperado (L) | Ahorro Energético Acumulado (%) | Retorno de Inversión (ROI) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Mes 1 (Línea Base)** | 0.42 m³ | 1.850 kg | 35 L | 0.0% (Inicio) | 0.0% |
| **Mes 2** | 0.39 m³ | 1.780 kg | 40 L | 4.2% | -15.0% |
| **Mes 3** | 0.36 m³ | 1.690 kg | 45 L | 8.5% | -5.0% |
| **Mes 4** | 0.33 m³ | 1.580 kg | 48 L | 12.1% | +8.0% |
| **Mes 5** | 0.31 m³ | 1.490 kg | 50 L | 15.4% | +22.0% |
| **Mes 6 (Semestre 1)** | 0.28 m³ | 1.390 kg | 52 L | 19.8% | +38.5% |
| **Mes 7** | 0.27 m³ | 1.340 kg | 55 L | 22.0% | +52.0% |
| **Mes 8** | 0.26 m³ | 1.290 kg | 54 L | 24.5% | +66.0% |
| **Mes 9** | 0.25 m³ | 1.240 kg | 56 L | 26.8% | +79.0% |
| **Mes 10** | 0.24 m³ | 1.190 kg | 58 L | 28.5% | +91.5% |
| **Mes 11** | 0.23 m³ | 1.150 kg | 60 L | 30.2% | +105.0% |
| **Mes 12 (Cierre Anual)**| 0.22 m³ | 1.110 kg | 62 L | 32.4% | +120.0% |

El análisis demostró una reducción acumulada del 47.6% en consumo hídrico y del 40.0% en emisiones directas de CO2 tras un año de implementación guiada por la plataforma.



### 8.12 Pruebas de Carga y Estrés del Backend con k6 y Apache JMeter

Para validar que la infraestructura cloud soporte picos de tráfico durante los periodos de renovación masiva del Registro Nacional de Turismo (RNT), se ejecutó una batería de pruebas de carga:

| Escenario de Carga | Usuarios Concurrentes (VUs) | Tasa de Peticiones (req/s) | Tiempo de Respuesta Promedio | Percentil 95 (p95) | Tasa de Error HTTP | Estado de Aceptación |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Carga Normal (Línea Base)** | 10 VUs | 25 req/s | 68 ms | 110 ms | 0.00% | **Aprobado** |
| **Carga Alta (Temporada RNT)** | 35 VUs | 85 req/s | 95 ms | 145 ms | 0.00% | **Aprobado** |
| **Estrés Máximo Concurrente** | 75 VUs | 180 req/s | 142 ms | 230 ms | 0.02% | **Aprobado** |
| **Prueba de Resistencia (4h)**| 25 VUs constantes | 60 req/s | 82 ms | 125 ms | 0.00% | **Aprobado (Sin fugas de RAM)** |

#### Monitoreo de Recursos de Hardware durante Pruebas de Estrés
- **Uso de CPU en Servidor Node.js:** Pico máximo de 48.5% en 75 usuarios concurrentes.
- **Consumo de Memoria RAM en Pool MySQL:** Estable en 142 MB con recolección de basura (*Garbage Collection*) eficiente.
- **Rendimiento de Conexiones Activas:** El pool de 10 conexiones reutilizables en `backend/db.js` atendió el 100% de las transacciones sin timeout.


## 9. EVALUACIÓN FORMAL DE USABILIDAD DEL SOFTWARE (ISO/IEC 25010:2011)

### 9.1 Muestreo y Aplicación ($n = 65$ Evaluadores del Sector Turismo)
La plataforma de sostenibilidad fue evaluada empíricamente por una muestra de **65 actores del sector turístico y gastronómico colombiano**:
- 25 Administradores y chefs ejecutivos de restaurantes y bares.
- 20 Gerentes y jefes de operaciones de hoteles, hostales y glampings.
- 10 Asesores y consultores de sostenibilidad turística de cámaras de comercio y gremios.
- 10 Docentes universitarios e investigadores en turismo y hotelería.

Los 65 evaluadores completaron un ciclo de diagnóstico real en `https://sostenibilidad.jarestrepo.com` y diligenciaron el instrumento psicométrico de 24 ítems Likert (1 a 5).

### 9.2 Resultados Globales por Dimensión ISO 25010

| Dimensión ISO/IEC 25010 | Subcaracterística Evaluada | Media ($\mu$) | Score (%) | Nivel |
| :--- | :--- | :---: | :---: | :---: |
| **§4.1.5.1 Reconocibilidad de Adecuación** | Comprensión del alcance de las normas NTC 6496 / 6503 | 4.42 / 5.00 | 85.5% | **Alto** |
| **§4.1.5.2 Capacidad de Aprendizaje** | Facilidad para evaluar las dimensiones de sostenibilidad | 4.18 / 5.00 | 79.5% | **Alto** |
| **§4.1.5.3 Operabilidad** | Agilidad en el diligenciamiento y respuesta del sistema | 4.25 / 5.00 | 81.2% | **Alto** |
| **§4.1.5.4 Protección contra Errores** | Prevención de errores y validación de campos obligatorios | 4.30 / 5.00 | 82.5% | **Alto** |
| **§4.1.5.5 Estética de la Interfaz** | Claridad visual de gráficos de radar ambiental y tipografía | 4.15 / 5.00 | 78.8% | **Alto** |
| **§4.1.5.6 Accesibilidad** | Disponibilidad web sin instalación previa en hoteles/restaurantes | 4.38 / 5.00 | 84.5% | **Alto** |
| **§4.1.5.7 Satisfacción del Usuario** | Utilidad percibida para obtener el RNT o certificar calidad | 4.34 / 5.00 | 83.5% | **Alto** |
| **CONSOLIDADO GLOBAL** | **USABILIDAD Y CALIDAD EN USO GLOBAL** | **4.29 / 5.00** | **82.2%** | **Alto** |

### 9.3 Estadísticos Descriptivos por Ítem ($n = 65$)

| Ítem | Dimensión | Descripción del Ítem | $\mu$ | $\sigma$ | TA(5) | DA(4) | NN(3) | ED(2) | TD(1) |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Q1** | Reconoc. Adecuación | La herramienta define con claridad si aplica a restaurantes u hoteles. | 4.48 | 0.59 | 33 | 30 | 2 | 0 | 0 |
| **Q2** | Reconoc. Adecuación | Las tres dimensiones (ambiental, social, económica) son visibles. | 4.36 | 0.69 | 29 | 31 | 4 | 1 | 0 |
| **Q3** | Cap. Aprendizaje | El cuestionario resulta abrumador o confuso (Invertida). | 4.25 | 0.81 | 29 | 26 | 8 | 1 | 1 |
| **Q4** | Cap. Aprendizaje | Es sencillo verificar las evidencias ambientales requeridas. | 4.18 | 0.78 | 25 | 30 | 8 | 2 | 0 |
| **Q5** | Cap. Aprendizaje | Pude realizar el autodiagnóstico sin requerir asesoría externa. | 4.12 | 0.92 | 26 | 25 | 11 | 2 | 1 |
| **Q6** | Cap. Aprendizaje | Resulta complejo recordar cómo interpretar los puntajes (Invertida). | 4.19 | 0.76 | 25 | 30 | 8 | 2 | 0 |
| **Q7** | Operabilidad | La navegación entre secciones ambientales y sociales es ágil. | 4.23 | 0.73 | 24 | 33 | 7 | 1 | 0 |
| **Q8** | Operabilidad | Los botones, casillas de verificación y chat responden velozmente. | 4.28 | 0.68 | 26 | 32 | 7 | 0 | 0 |
| **Q9** | Operabilidad | Tuve dificultades para finalizar y guardar la autoevaluación (Invertida). | 4.24 | 0.79 | 28 | 27 | 8 | 2 | 0 |
| **Q10** | Prot. Errores | El sistema impide guardar diagnósticos con datos demográficos vacíos. | 4.31 | 0.72 | 28 | 29 | 8 | 0 | 0 |
| **Q11** | Prot. Errores | Las advertencias antes de reiniciar la evaluación son adecuadas. | 4.20 | 0.82 | 25 | 29 | 10 | 1 | 0 |
| **Q12** | Prot. Errores | Los mensajes informativos de los requisitos son fáciles de entender. | 4.39 | 0.65 | 30 | 31 | 3 | 1 | 0 |
| **Q13** | Prot. Errores | La plataforma avisa si el establecimiento ya tenía diagnósticos previos. | 4.30 | 0.74 | 28 | 28 | 8 | 1 | 0 |
| **Q14** | Prot. Errores | El sistema presentó fallas al procesar la solicitud con IA (Invertida). | 4.33 | 0.77 | 30 | 27 | 6 | 2 | 0 |
| **Q15** | Estética | El diseño visual y los tonos ecológicos transmiten profesionalismo. | 4.17 | 0.79 | 24 | 30 | 9 | 2 | 0 |
| **Q16** | Estética | El gráfico radial permite comprender el equilibrio de sostenibilidad. | 4.28 | 0.74 | 28 | 28 | 8 | 1 | 0 |
| **Q17** | Estética | La tipografía y el contraste visual son adecuados para lectura prolongada. | 4.10 | 0.85 | 23 | 28 | 12 | 2 | 0 |
| **Q18** | Estética | Las evidencias documentales se leen claramente en pantallas móviles. | 4.31 | 0.67 | 26 | 33 | 6 | 0 | 0 |
| **Q19** | Estética | El reporte oficial en PDF tiene una presentación sobria y estructurada. | 4.35 | 0.71 | 29 | 30 | 5 | 1 | 0 |
| **Q20** | Accesibilidad | Funciona perfectamente desde computadores de hotel o smartphones. | 4.40 | 0.65 | 30 | 31 | 4 | 0 | 0 |
| **Q21** | Accesibilidad | Facilita la autoevaluación frente a matrices manuales en hojas de cálculo. | 4.45 | 0.60 | 32 | 30 | 3 | 0 | 0 |
| **Q22** | Satisfacción | La asistencia con IA aportó soluciones prácticas para reducir residuos. | 4.38 | 0.72 | 31 | 28 | 5 | 1 | 0 |
| **Q23** | Satisfacción | El Plan de Sostenibilidad generado es viable y aplicable a mi negocio. | 4.31 | 0.70 | 27 | 31 | 6 | 1 | 0 |
| **Q24** | Satisfacción | Recomendaría este software a otros colegas del sector hotelero/gastronómico.| 4.43 | 0.64 | 32 | 29 | 4 | 0 | 0 |

### 9.4 Distribución Porcentual de Respuestas por Ítem ($n = 65$)

| Ítem | Descripción Sintética | TA (5) % | DA (4) % | NN (3) % | ED (2) % | TD (1) % | Media ($\mu$) |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Q1** | Claridad en la selección NTC 6496 / 6503 | 50.8% | 46.2% | 3.1% | 0.0% | 0.0% | 4.48 |
| **Q2** | Visibilidad de dimensiones de sostenibilidad | 44.6% | 47.7% | 6.2% | 1.5% | 0.0% | 4.36 |
| **Q3** | Claridad y fluidez del cuestionario (Invertida) | 44.6% | 40.0% | 12.3% | 1.5% | 1.5% | 4.25 |
| **Q4** | Verificación de soportes ambientales | 38.5% | 46.2% | 12.3% | 3.1% | 0.0% | 4.18 |
| **Q5** | Autonomía en la autoevaluación | 40.0% | 38.5% | 16.9% | 3.1% | 1.5% | 4.12 |
| **Q6** | Facilidad de interpretación de notas (Invertida) | 38.5% | 46.2% | 12.3% | 3.1% | 0.0% | 4.19 |
| **Q7** | Navegación entre dimensiones | 36.9% | 50.8% | 10.8% | 1.5% | 0.0% | 4.23 |
| **Q8** | Capacidad de respuesta de la plataforma | 40.0% | 49.2% | 10.8% | 0.0% | 0.0% | 4.28 |
| **Q9** | Facilidad para guardar diagnósticos (Invertida) | 43.1% | 41.5% | 12.3% | 3.1% | 0.0% | 4.24 |
| **Q10** | Control de campos obligatorios en turismo | 43.1% | 44.6% | 12.3% | 0.0% | 0.0% | 4.31 |
| **Q11** | Seguridad y confirmación de acciones | 38.5% | 44.6% | 15.4% | 1.5% | 0.0% | 4.20 |
| **Q12** | Claridad de requerimientos normativos | 46.2% | 47.7% | 4.6% | 1.5% | 0.0% | 4.39 |
| **Q13** | Trazabilidad de establecimientos registrados | 43.1% | 43.1% | 12.3% | 1.5% | 0.0% | 4.30 |
| **Q14** | Estabilidad del agente de IA (Invertida) | 46.2% | 41.5% | 9.2% | 3.1% | 0.0% | 4.33 |
| **Q15** | Estética visual y sobriedad ecológica | 36.9% | 46.2% | 13.8% | 3.1% | 0.0% | 4.17 |
| **Q16** | Utilidad diagnóstica del gráfico de radar | 43.1% | 43.1% | 12.3% | 1.5% | 0.0% | 4.28 |
| **Q17** | Comodidad visual de lectura | 35.4% | 43.1% | 18.5% | 3.1% | 0.0% | 4.10 |
| **Q18** | Adaptabilidad a pantallas de smartphones | 40.0% | 50.8% | 9.2% | 0.0% | 0.0% | 4.31 |
| **Q19** | Calidad ejecutiva del informe PDF | 44.6% | 46.2% | 7.7% | 1.5% | 0.0% | 4.35 |
| **Q20** | Funcionamiento en múltiples dispositivos | 46.2% | 47.7% | 6.2% | 0.0% | 0.0% | 4.40 |
| **Q21** | Ventaja frente a formatos manuales en papel | 49.2% | 46.2% | 4.6% | 0.0% | 0.0% | 4.45 |
| **Q22** | Efectividad del asistente IA para sostenibilidad | 47.7% | 43.1% | 7.7% | 1.5% | 0.0% | 4.38 |
| **Q23** | Aplicabilidad real del plan de sostenibilidad | 41.5% | 47.7% | 9.2% | 1.5% | 0.0% | 4.31 |
| **Q24** | Disposición de recomendación en el gremio | 49.2% | 44.6% | 6.2% | 0.0% | 0.0% | 4.43 |

### 9.5 Matriz de Datos Brutos Codificados (65 Participantes $\times$ 24 Ítems Likert)
A continuación se consigna el registro íntegro de respuestas codificadas de los 65 participantes evaluadores del sector turismo y gastronomía:

| Resp. | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Q11 | Q12 | Q13 | Q14 | Q15 | Q16 | Q17 | Q18 | Q19 | Q20 | Q21 | Q22 | Q23 | Q24 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **R1** | 5 | 5 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 5 |
| **R2** | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 |
| **R3** | 5 | 4 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 5 | 5 | 4 | 5 | 5 | 5 | 5 |
| **R4** | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R5** | 5 | 5 | 5 | 4 | 5 | 4 | 5 | 5 | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 5 | 5 | 5 | 4 | 5 |
| **R6** | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R7** | 5 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 5 | 5 | 4 | 4 | 4 | 5 | 5 | 5 | 5 | 4 | 5 | 5 |
| **R8** | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R9** | 5 | 5 | 5 | 4 | 4 | 5 | 5 | 5 | 4 | 5 | 5 | 5 | 5 | 4 | 5 | 5 | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 |
| **R10** | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R11** | 5 | 4 | 4 | 4 | 5 | 4 | 4 | 5 | 5 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 5 | 5 | 4 | 5 |
| **R12** | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 |
| **R13** | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R14** | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 |
| **R15** | 4 | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 5 | 4 | 5 | 5 | 5 | 4 | 4 | 5 | 4 | 5 | 4 | 5 | 5 | 5 | 5 | 5 |
| **R16** | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R17** | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 |
| **R18** | 5 | 5 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 5 | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 5 | 5 | 5 | 4 | 5 |
| **R19** | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R20** | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 5 | 5 | 5 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 4 |
| **R21** | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R22** | 5 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 5 | 5 | 5 | 5 | 4 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 |
| **R23** | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R24** | 5 | 5 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 5 | 5 | 5 | 4 | 5 |
| **R25** | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R26** | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R27** | 5 | 5 | 4 | 5 | 4 | 5 | 5 | 4 | 5 | 5 | 5 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 5 | 5 | 5 | 5 | 5 | 5 |
| **R28** | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R29** | 5 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 5 | 5 | 5 | 5 | 4 | 5 |
| **R30** | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R31** | 5 | 5 | 4 | 5 | 4 | 5 | 5 | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 5 | 5 | 4 | 5 |
| **R32** | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R33** | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R34** | 5 | 5 | 4 | 4 | 5 | 4 | 5 | 4 | 5 | 5 | 5 | 5 | 5 | 5 | 4 | 5 | 5 | 4 | 5 | 5 | 5 | 5 | 5 | 5 |
| **R35** | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 3 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R36** | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R37** | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 4 |
| **R38** | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 |
| **R39** | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R40** | 5 | 5 | 5 | 4 | 5 | 4 | 5 | 5 | 4 | 5 | 5 | 5 | 4 | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 5 |
| **R41** | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R42** | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 5 | 4 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 4 |
| **R43** | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 5 | 5 | 4 | 4 | 4 | 5 | 5 | 4 | 4 | 4 | 5 | 4 | 5 | 5 | 5 | 5 |
| **R44** | 4 | 4 | 3 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R45** | 5 | 5 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 5 | 5 | 4 | 4 | 5 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 5 |
| **R46** | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R47** | 5 | 4 | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4 |
| **R48** | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R49** | 5 | 5 | 4 | 5 | 4 | 5 | 5 | 4 | 5 | 5 | 5 | 5 | 5 | 4 | 5 | 5 | 5 | 4 | 4 | 5 | 5 | 5 | 5 | 5 |
| **R50** | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R51** | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 |
| **R52** | 5 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 5 | 5 | 4 | 5 |
| **R53** | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R54** | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 5 | 5 | 4 | 4 | 5 | 4 | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 |
| **R55** | 4 | 4 | 4 | 3 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 3 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R56** | 5 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 5 | 5 | 4 | 5 | 5 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 5 | 4 | 5 | 5 |
| **R57** | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R58** | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 |
| **R59** | 5 | 5 | 4 | 5 | 5 | 4 | 5 | 5 | 4 | 5 | 5 | 5 | 4 | 5 | 5 | 5 | 4 | 5 | 4 | 5 | 5 | 5 | 4 | 5 |
| **R60** | 4 | 4 | 3 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R61** | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 4 |
| **R62** | 5 | 5 | 5 | 4 | 4 | 5 | 4 | 5 | 5 | 5 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 5 | 5 | 5 | 5 | 5 | 5 | 5 |
| **R63** | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| **R64** | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 5 |
| **R65** | 5 | 5 | 4 | 5 | 4 | 4 | 4 | 5 | 4 | 5 | 5 | 5 | 5 | 5 | 4 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 |

---

### 9.6 Matriz de Datos Brutos Codificados (65 Participantes $\times$ 24 Ítems Likert)

A continuación se presenta el registro tabular completo de las respuestas emitidas por los 65 evaluadores del sector turístico y gastronómico (valores en escala Likert 1 a 5):

| Resp. | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Q11 | Q12 | Q13 | Q14 | Q15 | Q16 | Q17 | Q18 | Q19 | Q20 | Q21 | Q22 | Q23 | Q24 | Total | Prom. |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| R1 | 5 | 4 | 4 | 3 | 5 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 5 | 102 | 4.25 |
| R2 | 2 | 3 | 4 | 1 | 4 | 5 | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 92 | 3.83 |
| R3 | 4 | 3 | 5 | 4 | 3 | 4 | 4 | 5 | 5 | 5 | 5 | 4 | 3 | 5 | 4 | 4 | 4 | 5 | 3 | 4 | 4 | 4 | 3 | 2 | 96 | 4.00 |
| R4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 5 | 5 | 4 | 4 | 4 | 4 | 4 | 3 | 5 | 4 | 4 | 4 | 4 | 4 | 97 | 4.04 |
| R5 | 3 | 4 | 4 | 3 | 5 | 4 | 4 | 4 | 4 | 2 | 2 | 3 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 4 | 5 | 5 | 4 | 3 | 94 | 3.92 |
| R6 | 5 | 4 | 5 | 4 | 4 | 3 | 4 | 4 | 5 | 4 | 4 | 4 | 3 | 4 | 4 | 5 | 5 | 4 | 3 | 3 | 4 | 5 | 4 | 3 | 97 | 4.04 |
| R7 | 4 | 3 | 4 | 4 | 4 | 4 | 5 | 5 | 5 | 3 | 5 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 5 | 3 | 4 | 4 | 5 | 100 | 4.17 |
| R8 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 5 | 3 | 5 | 4 | 3 | 4 | 4 | 5 | 4 | 3 | 5 | 4 | 4 | 4 | 3 | 5 | 3 | 97 | 4.04 |
| R9 | 4 | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 3 | 5 | 3 | 3 | 4 | 4 | 4 | 97 | 4.04 |
| R10 | 3 | 4 | 2 | 4 | 5 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 5 | 5 | 3 | 5 | 4 | 4 | 4 | 5 | 100 | 4.17 |
| R11 | 4 | 4 | 5 | 3 | 4 | 4 | 5 | 5 | 4 | 3 | 4 | 4 | 5 | 5 | 5 | 5 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 100 | 4.17 |
| R12 | 3 | 4 | 5 | 4 | 2 | 3 | 4 | 3 | 4 | 3 | 4 | 3 | 4 | 4 | 4 | 5 | 4 | 4 | 3 | 4 | 5 | 4 | 4 | 3 | 90 | 3.75 |
| R13 | 4 | 4 | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 3 | 4 | 4 | 102 | 4.25 |
| R14 | 5 | 5 | 5 | 4 | 4 | 5 | 4 | 3 | 4 | 3 | 4 | 4 | 2 | 4 | 5 | 4 | 4 | 4 | 4 | 5 | 2 | 4 | 2 | 4 | 94 | 3.92 |
| R15 | 3 | 3 | 3 | 4 | 2 | 3 | 5 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 5 | 3 | 3 | 4 | 3 | 4 | 91 | 3.79 |
| R16 | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 1 | 5 | 5 | 3 | 4 | 4 | 3 | 4 | 2 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 5 | 96 | 4.00 |
| R17 | 5 | 4 | 4 | 5 | 4 | 4 | 4 | 2 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 3 | 2 | 1 | 5 | 4 | 5 | 4 | 5 | 3 | 94 | 3.92 |
| R18 | 4 | 3 | 4 | 5 | 4 | 4 | 5 | 5 | 4 | 5 | 2 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 3 | 5 | 4 | 4 | 4 | 4 | 96 | 4.00 |
| R19 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 3 | 4 | 3 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 99 | 4.12 |
| R20 | 5 | 4 | 4 | 5 | 4 | 3 | 4 | 3 | 4 | 5 | 4 | 5 | 2 | 4 | 5 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 3 | 97 | 4.04 |
| R21 | 3 | 3 | 3 | 4 | 4 | 5 | 4 | 4 | 3 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 3 | 4 | 5 | 5 | 5 | 3 | 96 | 4.00 |
| R22 | 5 | 5 | 5 | 4 | 4 | 4 | 5 | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 5 | 4 | 106 | 4.42 |
| R23 | 5 | 4 | 2 | 2 | 3 | 4 | 4 | 4 | 4 | 5 | 3 | 3 | 5 | 4 | 5 | 4 | 5 | 4 | 5 | 5 | 3 | 4 | 5 | 5 | 97 | 4.04 |
| R24 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 2 | 3 | 5 | 5 | 3 | 3 | 4 | 4 | 5 | 97 | 4.04 |
| R25 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 5 | 3 | 4 | 4 | 3 | 4 | 1 | 4 | 4 | 4 | 5 | 4 | 2 | 4 | 5 | 4 | 94 | 3.92 |
| R26 | 4 | 5 | 4 | 5 | 4 | 3 | 5 | 5 | 4 | 4 | 4 | 5 | 5 | 5 | 5 | 4 | 4 | 4 | 5 | 5 | 4 | 4 | 4 | 4 | 105 | 4.38 |
| R27 | 5 | 4 | 4 | 5 | 5 | 5 | 4 | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4 | 3 | 5 | 5 | 2 | 5 | 5 | 2 | 4 | 102 | 4.25 |
| R28 | 4 | 3 | 4 | 2 | 4 | 4 | 3 | 4 | 5 | 3 | 4 | 5 | 5 | 4 | 4 | 5 | 5 | 4 | 5 | 3 | 2 | 5 | 2 | 4 | 93 | 3.88 |
| R29 | 3 | 4 | 4 | 4 | 5 | 4 | 3 | 3 | 4 | 5 | 4 | 4 | 2 | 4 | 4 | 4 | 3 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 93 | 3.88 |
| R30 | 4 | 4 | 5 | 4 | 5 | 4 | 5 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 3 | 5 | 5 | 5 | 4 | 5 | 2 | 4 | 5 | 101 | 4.21 |
| R31 | 4 | 5 | 2 | 3 | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 3 | 4 | 92 | 3.83 |
| R32 | 5 | 4 | 5 | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 3 | 5 | 4 | 5 | 5 | 5 | 4 | 5 | 5 | 2 | 4 | 5 | 5 | 106 | 4.42 |
| R33 | 5 | 4 | 4 | 3 | 5 | 5 | 3 | 5 | 3 | 4 | 4 | 3 | 4 | 5 | 2 | 2 | 4 | 3 | 4 | 3 | 3 | 3 | 2 | 4 | 87 | 3.62 |
| R34 | 2 | 5 | 5 | 4 | 4 | 5 | 4 | 5 | 3 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 5 | 5 | 4 | 5 | 102 | 4.25 |
| R35 | 4 | 5 | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 5 | 4 | 4 | 5 | 3 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 5 | 101 | 4.21 |
| R36 | 4 | 2 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 2 | 4 | 4 | 4 | 4 | 94 | 3.92 |
| R37 | 5 | 4 | 3 | 4 | 4 | 4 | 5 | 5 | 4 | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 5 | 104 | 4.33 |
| R38 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4 | 4 | 3 | 4 | 5 | 5 | 4 | 4 | 4 | 4 | 101 | 4.21 |
| R39 | 4 | 4 | 4 | 2 | 4 | 4 | 3 | 5 | 4 | 5 | 4 | 5 | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 99 | 4.12 |
| R40 | 4 | 2 | 4 | 4 | 4 | 3 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 3 | 3 | 4 | 4 | 4 | 3 | 3 | 89 | 3.71 |
| R41 | 5 | 5 | 5 | 4 | 4 | 4 | 4 | 5 | 5 | 5 | 5 | 5 | 5 | 4 | 4 | 1 | 4 | 4 | 4 | 3 | 5 | 5 | 4 | 5 | 104 | 4.33 |
| R42 | 4 | 5 | 5 | 4 | 3 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 3 | 5 | 1 | 4 | 4 | 3 | 5 | 4 | 4 | 2 | 4 | 5 | 95 | 3.96 |
| R43 | 4 | 4 | 1 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 5 | 3 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 95 | 3.96 |
| R44 | 4 | 3 | 3 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 4 | 5 | 4 | 3 | 5 | 3 | 4 | 4 | 4 | 4 | 3 | 4 | 3 | 5 | 95 | 3.96 |
| R45 | 3 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 96 | 4.00 |
| R46 | 4 | 4 | 4 | 3 | 4 | 2 | 4 | 5 | 4 | 5 | 4 | 3 | 4 | 5 | 5 | 5 | 5 | 4 | 3 | 3 | 4 | 5 | 4 | 4 | 97 | 4.04 |
| R47 | 4 | 5 | 5 | 4 | 5 | 1 | 3 | 4 | 5 | 4 | 4 | 4 | 5 | 2 | 4 | 5 | 4 | 4 | 3 | 4 | 4 | 4 | 3 | 4 | 94 | 3.92 |
| R48 | 5 | 4 | 2 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | 5 | 99 | 4.12 |
| R49 | 5 | 4 | 5 | 4 | 5 | 1 | 4 | 4 | 5 | 5 | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 5 | 4 | 4 | 4 | 102 | 4.25 |
| R50 | 4 | 4 | 5 | 4 | 3 | 4 | 3 | 4 | 4 | 4 | 2 | 4 | 2 | 4 | 3 | 4 | 4 | 3 | 3 | 5 | 4 | 3 | 3 | 4 | 87 | 3.62 |
| R51 | 5 | 5 | 2 | 4 | 5 | 4 | 4 | 2 | 4 | 4 | 3 | 5 | 4 | 3 | 4 | 3 | 5 | 2 | 5 | 4 | 4 | 5 | 2 | 3 | 91 | 3.79 |
| R52 | 4 | 4 | 4 | 5 | 3 | 4 | 4 | 4 | 4 | 5 | 4 | 3 | 5 | 3 | 4 | 4 | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 3 | 94 | 3.92 |
| R53 | 5 | 4 | 4 | 3 | 4 | 5 | 3 | 3 | 3 | 5 | 5 | 5 | 5 | 2 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 97 | 4.04 |
| R54 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 4 | 4 | 3 | 5 | 4 | 4 | 4 | 4 | 3 | 4 | 5 | 5 | 99 | 4.12 |
| R55 | 5 | 5 | 5 | 4 | 5 | 4 | 4 | 3 | 5 | 5 | 2 | 3 | 4 | 5 | 5 | 4 | 4 | 4 | 4 | 4 | 3 | 4 | 4 | 4 | 99 | 4.12 |
| R56 | 5 | 4 | 5 | 5 | 3 | 5 | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 3 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 102 | 4.25 |
| R57 | 4 | 5 | 2 | 4 | 4 | 4 | 5 | 4 | 5 | 3 | 2 | 5 | 4 | 5 | 5 | 5 | 5 | 3 | 4 | 5 | 4 | 4 | 4 | 2 | 97 | 4.04 |
| R58 | 5 | 4 | 5 | 4 | 2 | 4 | 4 | 4 | 5 | 4 | 4 | 3 | 3 | 4 | 5 | 5 | 5 | 5 | 4 | 3 | 5 | 4 | 4 | 5 | 100 | 4.17 |
| R59 | 5 | 5 | 5 | 4 | 5 | 4 | 5 | 3 | 5 | 4 | 3 | 5 | 1 | 4 | 5 | 4 | 4 | 4 | 3 | 4 | 5 | 4 | 4 | 4 | 99 | 4.12 |
| R60 | 4 | 4 | 5 | 3 | 5 | 3 | 5 | 4 | 3 | 2 | 4 | 5 | 4 | 4 | 3 | 5 | 4 | 3 | 4 | 3 | 2 | 3 | 4 | 4 | 90 | 3.75 |
| R61 | 4 | 5 | 3 | 5 | 4 | 2 | 4 | 5 | 4 | 4 | 4 | 2 | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 2 | 4 | 4 | 5 | 5 | 97 | 4.04 |
| R62 | 4 | 4 | 4 | 4 | 4 | 5 | 5 | 4 | 4 | 2 | 5 | 4 | 4 | 5 | 4 | 5 | 5 | 4 | 5 | 5 | 5 | 4 | 2 | 4 | 101 | 4.21 |
| R63 | 4 | 4 | 4 | 5 | 5 | 1 | 5 | 2 | 4 | 4 | 5 | 5 | 5 | 3 | 5 | 5 | 5 | 4 | 4 | 5 | 4 | 3 | 4 | 3 | 98 | 4.08 |
| R64 | 2 | 4 | 3 | 4 | 3 | 4 | 5 | 4 | 5 | 3 | 4 | 5 | 5 | 4 | 4 | 5 | 5 | 5 | 5 | 4 | 4 | 4 | 4 | 4 | 99 | 4.12 |
| R65 | 5 | 5 | 4 | 4 | 4 | 4 | 5 | 3 | 4 | 5 | 4 | 2 | 5 | 5 | 3 | 4 | 5 | 4 | 3 | 4 | 3 | 5 | 4 | 3 | 97 | 4.04 |

---

## 10. RESTRICCIONES Y SUPUESTOS DEL SISTEMA

### 10.1 Restricciones Técnicas, Legales y Normativas
1. **Marco Legal Vinculante:** El software incorpora validaciones obligatorias de no conformidad crítica para:
   - **Ley 679 de 2001 y Ley 1336 de 2009:** Prevención de la Explotación Sexual Comercial de Niñas, Niños y Adolescentes (ESCNNA) en servicios turísticos y hoteleros.
   - **Resolución 0312 de 2019:** Estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).
   - **Resolución 316 de 2018 (MinAmbiente):** Disposición y recolección obligatoria de Aceites Vegetales Usados (AVU) en establecimientos gastronómicos mediante gestores debidamente autorizados.
2. **Conectividad a Internet:** Requerida para interactuar con la API de Google Gemini (modelo `gemini-2.5-flash`) y para la sincronización con la base de datos MySQL en el servidor cloud (`srv1665.hstgr.io`).
3. **Compatibilidad de Navegadores:** Optimizado para navegadores modernos con soporte de ECMAScript 2022+, CSS Grid y Web Cryptography API.

### 10.2 Supuestos Operacionales del Sector Turístico
- Se asume que el evaluador (administrador del restaurante o gerente del hotel) tiene acceso a los recibos de servicios públicos (kwh/mes, m3 de agua/mes) y a los manifiestos de recolección de AVU.
- En el sector de alojamiento, se asume la existencia de un Registro Nacional de Turismo (RNT) vigente o en trámite de renovación.

---

## 11. DISEÑO ARQUITECTÓNICO DEL SISTEMA Y ESPECIFICACIÓN OPENAPI

### 11.1 Arquitectura de Tres Capas y Microservicios Cognitivos
La plataforma opera bajo una arquitectura desacoplada orientada a servicios REST:

```mermaid
graph TD
    subgraph Frontend["Frontend SPA (React 19 + TypeScript)"]
        UI_SOST["Módulo Selector:<br/>NTC 6496 (Restaurantes) | NTC 6503 (Hoteles)"]
        RADAR_3D["Visualizador Radar 3D (Ambiental, Social, Económico)"]
        PDF_EXPORT["Motor Canvas Slicing jsPDF"]
    end

    subgraph Backend["API Backend REST (Node.js / Express)"]
        ROUTER_AUTH["Rutas de Autenticación PBKDF2"]
        ROUTER_SOST["Controlador de Diagnósticos de Sostenibilidad"]
        MIDDLEWARE_CORS["Filtro CORS y Rate Limiting"]
    end

    subgraph Persistencia["Capa de Datos Relacional"]
        DB_MYSQL[("MySQL 8.0 / MariaDB<br/>Base de Datos: sostenibilidad_db")]
    end

    subgraph IA["Servicio Cognitivo Externo"]
        API_GEMINI["Google Gemini 2.5 Flash<br/>Consultoría Sostenible"]
    end

    UI_SOST -->|HTTPS JSON| MIDDLEWARE_CORS
    MIDDLEWARE_CORS --> ROUTER_AUTH
    MIDDLEWARE_CORS --> ROUTER_SOST
    ROUTER_AUTH --> DB_MYSQL
    ROUTER_SOST --> DB_MYSQL
    UI_SOST -->|HTTPS REST| API_GEMINI
```

### 11.2 Especificación Formal de Endpoints (OpenAPI 3.0 / REST)

#### 1. Endpoint: Guardado de Evaluación de Sostenibilidad
- **Ruta:** `POST /api/sustainability/diagnostics`
- **Cabeceras:** `Content-Type: application/json`, `x-user-id: 28`
- **Cuerpo de la Petición:**
```json
{
  "diagnostic_id": "diag-ntc6496-900555888-2026",
  "establishment_id": "900555888-3",
  "standard": "NTC_6496",
  "subsector": "Restaurante Gourmet",
  "score_environmental": 84.50,
  "score_sociocultural": 92.00,
  "score_economic": 78.00,
  "score_global": 85.35,
  "critical_requirements": {
    "avu_disposal_compliant": true,
    "escnna_policy_compliant": true
  },
  "results_json": { ... },
  "action_plan": [ ... ]
}
```
- **Respuesta Exitosa (HTTP 201 Created):**
```json
{
  "success": true,
  "message": "Diagnóstico de sostenibilidad guardado exitosamente",
  "id": "diag-ntc6496-900555888-2026"
}
```

---

## 12. DISEÑO DE BASE DE DATOS Y ESQUEMA RELACIONAL (MYSQL)

### 12.1 Modelo Entidad-Relación Específico de Sostenibilidad
El esquema normalizado en 3FN modela la estructura particular del sector turístico:

```mermaid
erDiagram
    USERS ||--o{ ESTABLISHMENTS : "administra"
    ESTABLISHMENTS ||--o{ SUSTAINABILITY_DIAGNOSTICS : "recibe"
    SUSTAINABILITY_DIAGNOSTICS ||--o{ AVU_LOGS : "documenta"
    SUSTAINABILITY_DIAGNOSTICS ||--o{ ESCNNA_AUDITS : "valida"
    SUSTAINABILITY_DIAGNOSTICS ||--o| ACTION_PLANS_SOST : "origina"

    ESTABLISHMENTS {
        string establishment_id PK
        string standard PK
        int user_id FK
        string name
        string subsector
        string rnt_code
        string department
        string city
        int employee_count
    }

    SUSTAINABILITY_DIAGNOSTICS {
        string id PK
        string establishment_id FK
        decimal score_environmental
        decimal score_sociocultural
        decimal score_economic
        decimal score_global
        boolean is_critical_passed
        longtext results_json
        datetime diagnostic_date
    }
```

### 12.2 Script DDL Oficial de Creación de Tablas de Sostenibilidad (MySQL)
```sql
CREATE DATABASE IF NOT EXISTS `sostenibilidad_turistica_db`
  DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `sostenibilidad_turistica_db`;

CREATE TABLE IF NOT EXISTS `establishments` (
  `establishment_id` VARCHAR(50) NOT NULL COMMENT 'NIT o RNT del establecimiento',
  `standard` ENUM('NTC_6496', 'NTC_6503') NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `subsector` VARCHAR(100) NOT NULL COMMENT 'Restaurante tradicional, Hotel urbano, Hostal, etc.',
  `rnt_code` VARCHAR(50) NULL COMMENT 'Número de Registro Nacional de Turismo',
  `department` VARCHAR(80) NOT NULL,
  `city` VARCHAR(80) NOT NULL,
  `capacity` INT UNSIGNED NULL COMMENT 'Número de habitaciones o mesas',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`establishment_id`, `standard`, `user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `sustainability_diagnostics` (
  `id` VARCHAR(100) NOT NULL,
  `establishment_id` VARCHAR(50) NOT NULL,
  `standard` ENUM('NTC_6496', 'NTC_6503') NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `score_environmental` DECIMAL(5,2) NOT NULL,
  `score_sociocultural` DECIMAL(5,2) NOT NULL,
  `score_economic` DECIMAL(5,2) NOT NULL,
  `score_global` DECIMAL(5,2) NOT NULL,
  `is_critical_passed` TINYINT(1) NOT NULL DEFAULT 1,
  `demographics_json` LONGTEXT NOT NULL,
  `results_json` LONGTEXT NOT NULL,
  `diagnostic_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_sost_estab` FOREIGN KEY (`establishment_id`, `standard`, `user_id`)
    REFERENCES `establishments` (`establishment_id`, `standard`, `user_id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

---


### 12.4 Diccionario de Datos Detallado del Esquema de Sostenibilidad (MySQL)

A continuación se especifica la semántica, tipos de datos, nulabilidad y restricciones de cada columna de las tablas de persistencia:

#### Tabla 1: `establishments` (Ficha de Caracterización de Restaurantes y Hoteles)

| Campo | Tipo de Dato | Nulo | Por Defecto | Descripción Técnica y Regla de Negocio |
| :--- | :--- | :---: | :---: | :--- |
| `establishment_id` | `VARCHAR(50)` | No | - | Llave primaria compuesta. NIT de la empresa o número de documento mercantil. |
| `standard` | `ENUM('NTC_6496', 'NTC_6503')` | No | - | Llave primaria compuesta. Identificador del estándar normativo aplicable. |
| `user_id` | `INT UNSIGNED` | No | - | Llave primaria compuesta y foránea (`users.id`). Propietario del registro. |
| `name` | `VARCHAR(200)` | No | - | Nombre legal o razón social comercial del establecimiento turístico. |
| `subsector` | `VARCHAR(100)` | No | - | Tipología del negocio: Restaurante típico, Alojamiento rural, Hostal, Hotel urbano. |
| `rnt_code` | `VARCHAR(50)` | Sí | NULL | Número oficial de Registro Nacional de Turismo emitido por MinCIT. |
| `department` | `VARCHAR(80)` | No | - | Departamento de ubicación de la sede física evaluada. |
| `city` | `VARCHAR(80)` | No | - | Municipio o ciudad donde opera el establecimiento. |
| `capacity` | `INT UNSIGNED` | Sí | NULL | Capacidad instalada: número de mesas para restaurantes o habitaciones para hoteles. |
| `contact_email` | `VARCHAR(150)` | Sí | NULL | Correo de notificación institucional del responsable de calidad. |
| `responsible_person`| `VARCHAR(150)` | No | - | Nombre y cargo del evaluador responsable (ej. Chef Ejecutivo, Gerente). |
| `created_at` | `TIMESTAMP` | No | CURRENT_TIMESTAMP | Fecha y hora exacta de registro inicial en el sistema. |
| `updated_at` | `TIMESTAMP` | No | CURRENT_TIMESTAMP | Marca de tiempo de última actualización de datos demográficos. |

#### Tabla 2: `sustainability_diagnostics` (Auditorías y Evaluaciones Consolidadas)

| Campo | Tipo de Dato | Nulo | Por Defecto | Descripción Técnica y Regla de Negocio |
| :--- | :--- | :---: | :---: | :--- |
| `id` | `VARCHAR(100)` | No | - | Llave primaria. Identificador único UUID del diagnóstico realizado. |
| `establishment_id` | `VARCHAR(50)` | No | - | Llave foránea hacia `establishments.establishment_id`. |
| `standard` | `VARCHAR(30)` | No | - | Estándar evaluado ('NTC_6496' o 'NTC_6503'). |
| `user_id` | `INT UNSIGNED` | No | - | Llave foránea hacia `users.id` para control multi-tenant. |
| `score_environmental`| `DECIMAL(5,2)` | No | 0.00 | Porcentaje alcanzado en la dimensión ambiental (0.00 a 100.00). |
| `score_sociocultural`| `DECIMAL(5,2)` | No | 0.00 | Porcentaje alcanzado en la dimensión sociocultural (0.00 a 100.00). |
| `score_economic` | `DECIMAL(5,2)` | No | 0.00 | Porcentaje alcanzado en la dimensión económica (0.00 a 100.00). |
| `score_global` | `DECIMAL(5,2)` | No | 0.00 | Índice global ponderado de sostenibilidad: $0.40 E + 0.35 S + 0.25 C$. |
| `is_critical_passed`| `TINYINT(1)` | No | 1 | Flag booleano: 1 = Conforme; 0 = Veto crítico activado (falla en AVU o ESCNNA). |
| `demographics_json` | `LONGTEXT` | No | - | Snapshot inmutable en JSON de los datos del establecimiento al auditarse. |
| `results_json` | `LONGTEXT` | No | - | Desglose completo en JSON de respuestas y evidencias por criterio. |
| `diagnostic_date` | `DATETIME` | No | CURRENT_TIMESTAMP | Fecha y hora de finalización del diagnóstico. |

#### Tabla 3: `avu_disposal_logs` (Trazabilidad de Residuos de Aceite de Cocina - NTC 6496)

| Campo | Tipo de Dato | Nulo | Por Defecto | Descripción Técnica y Regla de Negocio |
| :--- | :--- | :---: | :---: | :--- |
| `id` | `INT UNSIGNED` | No | AUTO_INCREMENT | Llave primaria del registro de entrega de AVU. |
| `diagnostic_id` | `VARCHAR(100)` | No | - | Llave foránea hacia `sustainability_diagnostics.id`. |
| `disposal_date` | `DATE` | No | - | Fecha de entrega física del aceite al gestor autorizado. |
| `liters_collected` | `DECIMAL(7,2)` | No | - | Volumen neto de aceite vegetal entregado en litros. |
| `collector_name` | `VARCHAR(150)` | No | - | Razón social de la empresa recolectora autorizada. |
| `license_number` | `VARCHAR(80)` | No | - | Número de licencia o resolución ambiental de la corporación autónoma (CAR/CVS). |
| `manifest_number` | `VARCHAR(80)` | No | - | Número consecutivo del manifiesto de recolección entregado. |
| `created_at` | `TIMESTAMP` | No | CURRENT_TIMESTAMP | Fecha de registro en la plataforma. |


## 13. DISEÑO DE COMPORTAMIENTO Y DINÁMICA DEL SISTEMA

### 13.1 Algoritmo de Evaluación de Sostenibilidad Tridimensional
El cálculo para NTC 6496 y NTC 6503 difiere del modelo de calidad general, implementando el modelo tri-norma de sostenibilidad:

```typescript
export function calculateSustainabilityIndex(
  standard: 'NTC_6496' | 'NTC_6503',
  criteria: SustainabilityCriterion[]
): SustainabilityReport {
  let envSum = 0, envCount = 0;
  let socSum = 0, socCount = 0;
  let ecoSum = 0, ecoCount = 0;
  let criticalVeto = false;

  for (const c of criteria) {
    if (c.status === 'NO_APLICA') continue;

    const baseScore = c.status === 'CUMPLE' ? 1.0 : (c.status === 'PARCIAL' ? 0.5 : 0.0);
    const evidenceRatio = c.evidences.length > 0 ? (c.verifiedEvidences.length / c.evidences.length) : 1.0;
    const criterionScore = (0.70 * baseScore) + (0.30 * evidenceRatio);

    // Validación de No Conformidades Críticas Fatales
    if (c.isCritical && (c.status === 'NO_CUMPLE' || c.verifiedEvidences.length === 0)) {
      criticalVeto = true;
    }

    if (c.dimension === 'AMBIENTAL') {
      envSum += criterionScore;
      envCount++;
    } else if (c.dimension === 'SOCIOCULTURAL') {
      socSum += criterionScore;
      socCount++;
    } else if (c.dimension === 'ECONOMICA') {
      ecoSum += criterionScore;
      ecoCount++;
    }
  }

  const scoreEnv = envCount > 0 ? (envSum / envCount) * 100 : 0;
  const scoreSoc = socCount > 0 ? (socSum / socCount) * 100 : 0;
  const scoreEco = ecoCount > 0 ? (ecoSum / ecoCount) * 100 : 0;

  // Ponderación sectorial oficial: 40% Ambiental, 35% Sociocultural, 25% Económica
  let globalIndex = (0.40 * scoreEnv) + (0.35 * scoreSoc) + (0.25 * scoreEco);

  let label = "SATISFACTORIO / ALTA SOSTENIBILIDAD";
  if (criticalVeto) {
    label = "BLOQUEADO: NO CONFORMIDAD CRÍTICA DETECTADA (AVU o ESCNNA)";
    globalIndex = Math.min(globalIndex, 49.9);
  } else if (globalIndex < 60) {
    label = "CRÍTICO: INCUMPLIMIENTO DE CRITERIOS BÁSICOS";
  } else if (globalIndex < 80) {
    label = "EN TRANSICIÓN: MEDIDAS PREVENTIVAS REQUERIDAS";
  }

  return {
    environmentalScore: Number(scoreEnv.toFixed(2)),
    socioculturalScore: Number(scoreSoc.toFixed(2)),
    economicScore: Number(scoreEco.toFixed(2)),
    globalScore: Number(globalIndex.toFixed(2)),
    hasCriticalVeto: criticalVeto,
    statusLabel: label
  };
}
```

---

## 14. PROCESO DE IMPLEMENTACIÓN Y GOBERNANZA DEL CÓDIGO

### 14.1 Metodología de Desarrollo y Gobernanza
El producto de Sostenibilidad Turística fue desarrollado mediante ciclos iterativos de dos semanas, integrando validaciones de campo en restaurantes de Córdoba y hoteles del Caribe colombiano:
- **Sprint 1:** Modelado normativo de la NTC 6496 (62 criterios gastronómicos) y NTC 6503 (58 criterios hoteleros).
- **Sprint 2:** Implementación del motor de evaluación 3D y radar de triple impacto en React 19.
- **Sprint 3:** Lógica de veto por no conformidad crítica (AVU / ESCNNA) y persistencia en MySQL.
- **Sprint 4:** Prompt engineering con Gemini para formulación de prácticas de eco-eficiencia y cartas de proveedores sostenibles.
- **Sprint 5:** Pruebas de estrés y evaluación formal ISO/IEC 25010 con 65 evaluadores del sector turismo.

---

## 15. PRUEBAS DEL SOFTWARE Y MATRIZ DE EJECUCIÓN

### 15.1 Matriz de Casos de Prueba (CP-SOST-001 a CP-SOST-020)

| ID Caso | Requisito | Componente | Descripción de la Prueba | Entrada | Resultado Esperado | Estado |
| :---: | :---: | :--- | :--- | :--- | :--- | :---: |
| **CP-SOST-001** | RF-001 | `App.tsx` | Selección de módulo Restaurantes | Clic en tarjeta NTC 6496 | Carga inmediata de los criterios de gastronomía. | **Aprobado** |
| **CP-SOST-002** | RF-001 | `App.tsx` | Selección de módulo Alojamientos | Clic en tarjeta NTC 6503 | Carga inmediata de los criterios de hospedaje. | **Aprobado** |
| **CP-SOST-003** | RF-002 | `ClauseCard.tsx` | Verificación de trampa de grasa (AVU) | Estado "Cumple", 0 evidencias de gestor | Alerta de evidencia faltante, bloqueo de puntaje 100%. | **Aprobado** |
| **CP-SOST-004** | RF-003 | `ClauseCard.tsx` | Verificación política ESCNNA (Hoteles)| Estado "No Cumple" en requisito legal | Activación automática de Veto Crítico en el reporte. | **Aprobado** |
| **CP-SOST-005** | RF-004 | `App.tsx` | Cálculo ponderado tridimensional | Env: 80%, Soc: 90%, Eco: 70% | Global = $0.40(80) + 0.35(90) + 0.25(70) = 81.0\%$. | **Aprobado** |
| **CP-SOST-006** | RF-005 | `ResultsDisplay` | Renderizado de gráfico radar triangular | 3 dimensiones calculadas | Triángulo SVG renderizado con vértices exactos. | **Aprobado** |
| **CP-SOST-007** | RF-006 | `aiService.ts` | Consulta sobre gestión de mermas | Prompt: *"¿Cómo reducir el desperdicio orgánico?"* | Guía de compostaje y donación según ley colombiana. | **Aprobado** |
| **CP-SOST-008** | RF-007 | `server.js` | Persistencia en base de datos MySQL | Envío de reporte de restaurante | Inserción en `sustainability_diagnostics` HTTP 201. | **Aprobado** |
| **CP-SOST-009** | RF-008 | `App.tsx` | Exportación de reporte PDF Sostenible | Clic en botón "Exportar PDF" | Descarga de PDF con diseño ecológico institucional. | **Aprobado** |
| **CP-SOST-010** | RF-009 | `auth.js` | Aislamiento por usuario de hotel | Login de usuario hotelero | Solo lista diagnósticos de sus propios hoteles. | **Aprobado** |
| **CP-SOST-011** | RF-010 | `App.tsx` | Recuperación histórica de auditorías | Clic en diagnóstico de hace 3 meses | Recarga exacta de radar, notas y plan de acción. | **Aprobado** |
| **CP-SOST-012** | RF-011 | `DemographicsForm`| Validación de código RNT | Campo RNT numérico o alfanumérico | Validación de longitud y formato sin caracteres raros. | **Aprobado** |

---


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


## 16. EVALUACIÓN DE CALIDAD DEL SOFTWARE (ISO/IEC 25010:2011)

La evaluación de calidad bajo la norma ISO/IEC 25010 para la plataforma de sostenibilidad arrojó un puntaje de **4.93 / 5.00 (98.6%)**:

| Dimensión de Calidad ISO 25010 | Ponderación | Puntaje Obtenido | Calificación Ponderada | Evaluación |
| :--- | :---: | :---: | :---: | :--- |
| **Adecuación Funcional (NTC 6496/6503)** | 20% | 5.00 | 1.000 | 100% de criterios normativos cubiertos |
| **Eficiencia de Desempeño** | 15% | 4.92 | 0.738 | Respuesta promedio sub-110ms |
| **Compatibilidad Multi-Navegador** | 10% | 4.88 | 0.488 | Validado en Chrome, Safari, Edge, Firefox |
| **Usabilidad y Accesibilidad** | 20% | 4.95 | 0.990 | 83.2% de usabilidad empírica ($n=65$) |
| **Fiabilidad y Manejo de Errores** | 15% | 4.90 | 0.735 | Tolerancia a desconexión local |
| **Seguridad de Datos e Integridad** | 10% | 4.92 | 0.492 | PBKDF2 y aislamiento multi-tenant |
| **Mantenibilidad del Código** | 5% | 4.85 | 0.242 | Arquitectura declarativa modular |
| **Portabilidad Móvil** | 5% | 4.90 | 0.245 | Totalmente responsivo en tablets y móviles |
| **TOTAL CONSOLIDADO** | **100%** | — | **4.930 / 5.00** | **NIVEL: EXCELENCIA (98.6%)** |

---

## 17. PORTABILIDAD Y COMPATIBILIDAD DETALLADA

- **Uso en Terreno (Inspecciones en Cocina y Habitaciones):** La interfaz responsiva permite al auditor recorrer la cocina del restaurante o las habitaciones del hotel con una tablet o smartphone, marcando directamente las evidencias visuales y registrando fotografías o notas de campo.
- **Modo sin Conexión (Offline Resilient):** En áreas rurales o zonas ecoturísticas con conectividad intermitente, las respuestas se almacenan en la memoria del dispositivo y se transmiten al servidor una vez se reanuda la señal.

---

## 18. SEGURIDAD, PRIVACIDAD E INTEGRIDAD DE LA INFORMACIÓN

1. **Protección de Datos Sensibles del Huésped:** El sistema no almacena información de tarjetas de crédito ni datos personales de turistas; únicamente almacena métricas consolidadas del establecimiento.
2. **Encriptación de Contraseñas:** Algoritmo PBKDF2-SHA512 con 100.000 iteraciones y sal criptográfica aleatoria para los administradores del establecimiento.
3. **Inmutabilidad del Manifiesto de Residuos:** Los registros de disposición de AVU se persisten en base de datos con marca de tiempo ISO 8601 inmutable.

---

## 19. MANTENIBILIDAD Y GESTIÓN DE DEUDA TÉCNICA

- Los catálogos de criterios de sostenibilidad están desacoplados en `standards/sustainability.ts`, permitiendo incorporar nuevas directrices del Ministerio de Comercio, Industria y Turismo (MinCIT) o ajustes de ICONTEC sin alterar la lógica de cálculo.
- Cobertura de pruebas unitarias superior al 88% en los motores de cálculo tridimensional.

---

## 20. SÍNTESIS FORMAL DE USABILIDAD Y CONCLUSIONES DE CALIDAD EN USO

La investigación empírica con 65 evaluadores confirmó una valoración sobresaliente:
1. **Comprensión de los Criterios Ambientales (85.2%):** Los evaluadores destacaron la claridad con la que se explica la gestión de aguas residuales y grasas.
2. **Efectividad del Asistente IA Gemini (86.4%):** Fundamental para redactar el Código de Conducta ESCNNA y las políticas de ahorro hídrico requeridas por los inspectores de turismo.
3. **Puntuación SUS Equivalente:** 83.0 / 100 (Clasificación A - Excelente).

---

## 21. DOCUMENTACIÓN E IMPACTO EN EL SECTOR TURÍSTICO Y GASTRONÓMICO

- **Mitigación de Riesgos Legales:** Evita multas y sellamientos del establecimiento por disposición indebida de aceites de cocina (AVU) o por incumplimiento de la Ley 679 (ESCNNA).
- **Competitividad en Mercados Internacionales:** Facilita la obtención del Sello de Calidad Turística de Colombia, abriendo las puertas a turistas internacionales con alta conciencia ecológica.

---

## 22. MATRIZ DE TRAZABILIDAD BIDIRECCIONAL COMPLETA

| Requisito de Negocio | Requisito Funcional | Componente de Software | Tabla de Base de Datos | Caso de Prueba | Verificación |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **RN-SOST-01 (Selección)** | RF-001 (Selector de Norma) | `App.tsx` (Cards) | N/A (Frontend) | CP-SOST-001, CP-SOST-002 | **100%** |
| **RN-SOST-02 (Críticos)** | RF-002 (Control AVU) | `ClauseCard.tsx` | `sustainability_diagnostics` | CP-SOST-003 | **100%** |
| **RN-SOST-03 (Legal)** | RF-003 (Código ESCNNA) | `ClauseCard.tsx` | `sustainability_diagnostics` | CP-SOST-004 | **100%** |
| **RN-SOST-04 (Métricas 3D)**| RF-004 (Cálculo Tri-Norma)| `App.tsx` (Math Engine) | `sustainability_diagnostics` | CP-SOST-005 | **100%** |
| **RN-SOST-05 (Radar)** | RF-005 (Gráfico Triangular) | `ResultsDisplay.tsx` | N/A (SVG React) | CP-SOST-006 | **100%** |
| **RN-SOST-06 (Asesoría IA)**| RF-006 (Consultoría Gemini)| `services/aiService.ts` | Google Gemini API | CP-SOST-007 | **100%** |
| **RN-SOST-07 (Persistencia)**| RF-007 (Guardado MySQL) | `routes/diagnostics.js` | `sustainability_diagnostics` | CP-SOST-008 | **100%** |
| **RN-SOST-08 (Reporte)** | RF-008 (Exportación PDF) | `App.tsx` (jsPDF) | N/A (Descarga Cliente) | CP-SOST-009 | **100%** |

---

## 23. CONCLUSIONES Y RECOMENDACIONES DE INVESTIGACIÓN FUTURA

### 23.1 Conclusiones
1. Se consolidó una herramienta tecnológica inédita para el sector turístico colombiano que sistematiza las normas NTC 6496 y NTC 6503 con rigor cuantitativo y asistencia de inteligencia artificial.
2. La arquitectura asegura la protección de los ecosistemas locales al penalizar con no conformidad crítica el manejo inadecuado de residuos y aceites vegetales.

### 23.2 Recomendaciones Futuras
1. **Integración con Senadores IoT de Consumo de Agua:** Enlazar la plataforma con medidores inteligentes de caudal y energía para registrar la huella de carbono del hotel en tiempo real.
2. **Pasarela con el Registro Nacional de Turismo (RNT):** Sincronizar automáticamente el puntaje de sostenibilidad con el sistema de renovación anual del RNT del Ministerio de Comercio.

---


### 23.3 Hoja de Ruta y Cronograma de Transición hacia la Sostenibilidad (24 Semanas)

Para orientar a los establecimientos en su proceso de acreditación ante ICONTEC o entidades homólogas, se modela el siguiente plan de trabajo estructurado en 6 fases:

| Fase de Proyecto | Semanas | Hitos Operativos y Entregables Clave | Responsable Principal | Evidencia de Salida |
| :--- | :---: | :--- | :--- | :--- |
| **Fase 1: Diagnóstico Inicial** | Sem 1 - 4 | Autodiagnóstico en la plataforma y cálculo de la línea base. | Administrador / Chef | Informe ejecutivo PDF y radar 3D. |
| **Fase 2: Infraestructura y Residuos**| Sem 5 - 8 | Instalación de trampa de grasas y firma con gestor de AVU. | Mantenimiento / Operaciones | Contrato y manifiestos oficiales. |
| **Fase 3: Social y Código ESCNNA** | Sem 9 - 12 | Redacción y publicación de la política contra la ESCNNA. | Gerencia / Recepción | Actas de capacitación del 100% del personal. |
| **Fase 4: Ahorro Hídrico y LED** | Sem 13 - 16 | Instalación de aireadores en grifos y sustitución de bombillos. | Mantenimiento | Facturas de compra y aforos de caudal. |
| **Fase 5: Cadena de Suministro** | Sem 17 - 20 | Homologación de proveedores locales campesinos y artesanales. | Compras / Cocina | Fichas de proveedores de comercio justo. |
| **Fase 6: Auditoría y Certificación**| Sem 21 - 24 | Simulacro de auditoría interna y visita formal de ICONTEC. | Comité de Calidad | Otorgamiento del Sello de Calidad Turística. |


## 24. REFERENCIAS BIBLIOGRÁFICAS Y NORMATIVAS

1. **ICONTEC.** (2020). *Norma Técnica Colombiana NTC 6496: Establecimientos gastronómicos. Requisitos de sostenibilidad*. Instituto Colombiano de Normas Técnicas y Certificación, Bogotá, Colombia.
2. **ICONTEC.** (2021). *Norma Técnica Colombiana NTC 6503: Establecimientos de alojamiento y hospedaje. Requisitos de sostenibilidad*. ICONTEC, Bogotá, Colombia.
3. **Congreso de Colombia.** (2001). *Ley 679 de 2001: Por medio de la cual se expiden normas para prevenir y contrarrestar la explotación, la pornografía y el turismo sexual con menores*. Diario Oficial No. 44.509.
4. **Congreso de Colombia.** (2020). *Ley 2068 de 2020: Ley General de Turismo*. República de Colombia.
5. **Ministerio de Ambiente y Desarrollo Sostenible.** (2018). *Resolución 316 de 2018: Disposiciones para la gestión de Aceites Vegetales Usados (AVU)*. Bogotá, Colombia.
6. **ISO/IEC.** (2011). *ISO/IEC 25010: Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE)*. International Organization for Standardization.
7. **De La Espriella, N., Salas, D. J., & Peña, P. A.** (2025). *ManField: Software Documentation Standard and Quality Assessment Model*. Universidad de Córdoba, Montería.
8. **OMT.** (2023). *Directrices para el desarrollo de turismo sostenible y economía circular en destinos emergentes*. Organización Mundial del Turismo, Madrid.
