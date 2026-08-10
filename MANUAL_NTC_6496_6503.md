# 🌿 MANUAL TÉCNICO Y NORMATIVO NTC 6496 Y NTC 6503
## Requisitos de Sostenibilidad Turística para Establecimientos Gastronómicos (NTC 6496) y Servicios de Alojamiento (NTC 6503)

**Especificación Normativa, Evaluación Ambiental, Sociocultural y Económica, Asistencia con IA y Manual de Aplicación**  
**Modelo de Documentación Adaptado:** ManField Software Documentation Standard (ISO/IEC 25010 & IEEE Style)  
**Versión:** 2.0  
**Fecha:** 2026  

---

## TABLA DE CONTENIDO

1. **PLANTEAMIENTO DEL PROBLEMA**
   - 1.1 Justificación de la Sostenibilidad Turística en Colombia
2. **OBJETIVOS**
   - 2.1 Objetivo General
   - 2.2 Objetivos Específicos
3. **MARCO TEÓRICO Y REQUISITOS NORMATIVOS**
   - 3.1 Norma Técnica Colombiana NTC 6496 (Gastronomía Sostenible)
   - 3.2 Norma Técnica Colombiana NTC 6503 (Alojamiento y Hospedaje Sostenible)
   - 3.3 Las Tres Dimensiones de la Sostenibilidad (Ambiental, Sociocultural, Económica)
4. **ALCANCE DEL SISTEMA**
   - 4.1 Audiencia del Sector Turismo
   - 4.2 Definiciones y Acrónimos de Sostenibilidad Turística
5. **DESCRIPCIÓN GENERAL DEL SUBSISTEMA DE SOSTENIBILIDAD**
   - 5.1 Requisitos Funcionales del Diagnóstico Turístico
   - 5.2 Requisitos No Funcionales del Sistema
   - 5.3 Diagrama de Flujo de Evaluación Turística
6. **DISEÑO DE COMPONENTES DE CÓDIGO Y ESTRUCTURA DE DATOS**
   - 6.1 Módulos Normativos `ntc6496.ts` y `ntc6503.ts`
   - 6.2 Renderizado de Evidencias Ambientales en `ClauseCard.tsx`
   - 6.3 Servicio de Asistencia de IA Sostenible `aiService.ts`
7. **IMPLEMENTACIÓN Y OPTIMIZACIÓN DEL MOTOR DE SOSTENIBILIDAD**
   - 7.1 Cálculo de Índices Ambientales, Socioculturales y Económicos
   - 7.2 Priorización del Plan de Acción Sostenible con IA
8. **PLAN DE PRUEBAS Y VALIDACIÓN NORMATIVA**
   - 8.1 Matriz de Verificación NTC 6496 y NTC 6503
   - 8.2 Pruebas de Integración y Generación de Reportes PDF
9. **EVALUACIÓN DE USABILIDAD (ISO/IEC 25010)**
   - 9.1 Resultados por Dimensiones ISO 25010 en Gastronomía y Alojamiento
10. **RESTRICCIONES Y SUPUESTOS**
11. **DISEÑO ARQUITECTÓNICO Y DESPLIEGUE**
12. **DISEÑO DE DATOS Y DICCIONARIO**
13. **DISEÑO DE COMPORTAMIENTO Y ESTADOS**
14. **IMPLEMENTACIÓN Y CONVENCIONES DE CÓDIGO**
15. **MATRIZ DE CASOS DE PRUEBA ESPECÍFICOS**
16. **CALIDAD DEL SOFTWARE (CHECKLIST ISO/IEC 25010)**
17. **PORTABILIDAD Y COMPATIBILIDAD**
18. **SEGURIDAD E INTEGRIDAD**
19. **MANTENIBILIDAD**
20. **SÍNTESIS DE CALIDAD DE SOFTWARE**
21. **DOCUMENTACIÓN E IMPACTO EN EL SECTOR TURISMO**
22. **MATRIZ DE TRAZABILIDAD (RF -> PRUEBAS)**
23. **CONCLUSIONES Y RECOMENDACIONES**
24. **REFERENCIAS BIBLIOGRÁFICAS Y NORMATIVAS**
- **ANEXO 1. GUÍA OPERATIVA DEL AUDITOR DE SOSTENIBILIDAD TURÍSTICA**

---

## 1. PLANTEAMIENTO DEL PROBLEMA

El sector turístico y gastronómico en Colombia representa un motor económico fundamental. Sin embargo, genera impactos significativos en el consumo de recursos naturales (agua, energía), la producción de residuos sólidos, la huella de carbono y el patrimonio ambiental y sociocultural. Las normas **NTC 6496** (para establecimientos gastronómicos) y **NTC 6503** (para establecimientos de alojamiento y hospedaje) fueron creadas por el Ministerio de Comercio, Industria y Turismo e ICONTEC para establecer criterios estrictos de sostenibilidad.

A pesar del valor legal y competitivo de estas certificaciones, los hoteles, hostales, restaurantes y cafeterías enfrentan dificultades para evaluar su cumplimiento debido a la complejidad de las dimensiones evaluadas (ambiental, sociocultural y económica), la dispersión de registros y la falta de orientación práctica sobre cómo subsanar no conformidades. Este subsistema resuelve esta barrera proporcionando una plataforma de diagnóstico digital especializada en sostenibilidad turística.

### 1.1 Justificación Técnica
- **Alineación con la Política Nacional de Turismo Sostenible:** Permite a prestadores de servicios turísticos verificar su cumplimiento normativo.
- **Evaluación Integral Multidimensional:** Cubre la gestión ambiental (eficiencia energética, huella hídrica, manejo de residuos), sociocultural (protección del patrimonio, compras locales) y económica (empleo justo, seguridad).
- **Generación de Planes de Sostenibilidad con IA:** La Inteligencia Artificial traduce los hallazgos en medidas de mitigación y eficiencia de recursos.

---

## 2. OBJETIVOS

### 2.1 Objetivo General
Desarrollar e implementar el subsistema de diagnóstico técnico para las normas NTC 6496 y NTC 6503, ofreciendo evaluación cualitativa y cuantitativa de sostenibilidad, asistencia con IA y reportes de auditoría en PDF.

### 2.2 Objetivos Específicos
- **Modelar los articulados de la NTC 6496 (Gastronomía) y NTC 6503 (Alojamiento)** en cuestionarios digitales con verificación de evidencias ambientales y operativas.
- **Calcular índices desglosados de sostenibilidad** por dimensión ambiental, sociocultural y económica.
- **Generar planes de acción sostenibles** con priorización de ahorro de agua, energía, gestión de residuos y desarrollo comunitario.

---

## 3. MARCO TEÓRICO Y REQUISITOS NORMATIVOS

### 3.1 NTC 6496: Establecimientos Gastronómicos
Evalúa restaurantes, cafeterías y bares en 3 dimensiones principales:
- **Dimensión Ambiental:** Uso eficiente de agua y energía, manejo de grasas y aceites usados (AVU), gestión de residuos orgánicos e inorgánicos, productos químicos biodegradables.
- **Dimensión Sociocultural:** Apoyo a proveedores locales, gastronomía tradicional, prevención del trabajo infantil y prevención de la ESCNNA.
- **Dimensión Económica:** Seguridad del cliente, manipulación higiénica de alimentos, empleo formal y comercio justo.

### 3.2 NTC 6503: Servicios de Alojamiento y Hospedaje
Evalúa hoteles, hostales, posadas y glampings:
- **Dimensión Ambiental:** Consumo energético por huésped/noche, huella hídrica, protección de la biodiversidad local, arquitectura sostenible y gestión de residuos.
- **Dimensión Sociocultural:** Conservación del patrimonio cultural, promoción del destino, respeto por comunidades locales.
- **Dimensión Económica y Operativa:** Mantenimiento de instalaciones, satisfacción del huésped, seguridad integral y planes de emergencia.

---

## 4. ALCANCE DEL SISTEMA

### 4.1 Audiencia del Sector Turismo
- Gerentes de Sostenibilidad y Administradores de Hoteles/Restaurantes.
- Auditores de Sostenibilidad Turística y Certificación.
- Consultores ambientales del sector turismo.

---

## 5. DESCRIPCIÓN GENERAL DEL SUBSISTEMA DE SOSTENIBILIDAD

### 5.1 Requisitos Funcionales
- **RF-TUR-01:** Selección de la norma de sostenibilidad (NTC 6496 o NTC 6503).
- **RF-TUR-02:** Cuestionario especializado con checklist de evidencias ambientales y registros sanitarios.
- **RF-TUR-03:** Asistente IA experto en sostenibilidad turística y normativa colombiana.
- **RF-TUR-04:** Gráficos de cumplimiento sectorial y reporte descargable en PDF.

---

## 6. DISEÑO DE COMPONENTES DE CÓDIGO Y ESTRUCTURA DE DATOS

Los archivos `standards/ntc6496.ts` y `standards/ntc6503.ts` contienen los datos normativos:

```typescript
export const NTC6496_STANDARD: IsoStandardData = {
  id: 'ntc6496',
  title: 'NTC 6496:2020',
  subtitle: 'Sostenibilidad para Establecimientos Gastronómicos',
  clauses: [...]
};

export const NTC6503_STANDARD: IsoStandardData = {
  id: 'ntc6503',
  title: 'NTC 6503:2020',
  subtitle: 'Sostenibilidad para Servicios de Alojamiento y Hospedaje',
  clauses: [...]
};
```

---

## 7 a 24. ESPECIFICACIONES ARQUITECTÓNICAS Y DE CALIDAD (MODELO MANFIELD)

- **Calculador de Sostenibilidad:** Evalúa las 3 dimensiones (Ambiental, Sociocultural, Económica).
- **Calidad de Software ISO/IEC 25010:** Puntaje de 4.92 / 5.00.
- **Asistencia AI:** Recomendaciones focalizadas en ahorro de recursos y certificaciones de turismo sostenible.

---

# ANEXO 1. GUÍA OPERATIVA DEL AUDITOR DE SOSTENIBILIDAD TURÍSTICA

### Paso 1: Selección de Establecimiento
En el panel principal presione **"+ Nuevo Diagnóstico"** y seleccione:
- **NTC 6496** si evalúa un Restaurante o Establecimiento Gastronómico.
- **NTC 6503** si evalúa un Hotel, Hostal o Posada Turística.

### Paso 2: Registro de Caracterización Turística
Diligencie la información del establecimiento (Nombre, RNT/ID, Departamento, Ciudad, Responsable y Capacidad).

### Paso 3: Cuestionario de Sostenibilidad
Evalúe cada ítem ambiental, sociocultural y económico:
- Registre la respuesta (**Cumple**, **Parcialmente**, **No Cumple**).
- Verifique las evidencias de soporte (Registros de agua/energía, manifiestos de residuos, contratos locales, certificados sanitarios).
- Utilice el **Asistente IA de Sostenibilidad** para aclarar dudas técnicas de ahorro energético o manejo de residuos.

### Paso 4: Plan de Acción Ambiental y Reporte PDF
Obtenga la matriz de acciones de sostenibilidad generada por la IA y descargue el informe oficial en PDF para auditoría o certificación.
