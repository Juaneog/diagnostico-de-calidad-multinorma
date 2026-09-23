# -*- coding: utf-8 -*-
import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
TARGET_FILE = os.path.join(BASE_DIR, "GUIA_DE_USO_NTC_6001.md")

with open(TARGET_FILE, "r", encoding="utf-8") as f:
    content = f.read()

templates_section = """
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
| **1. Satisfacción del Cliente** | $\ge 90\%$ | $\\frac{\\text{Clientes Satisfechos}}{\\text{Total Clientes Encuestados}} \\times 100$ | Encuesta de satisfacción semestral | Gerente Comercial |
| **2. Eficacia en Entregas** | $\ge 95\%$ | $\\frac{\\text{Pedidos Entregados a Tiempo}}{\\text{Total Pedidos Despachados}} \\times 100$ | Registro de remisiones firmadas | Coordinador de Despachos |
| **3. Reducción de Reprocesos**| $\le 2.5\%$ | $\\frac{\\text{Metros de Tela Reprocesada}}{\\text{Total Metros Cortados}} \\times 100$ | Formato de salidas no conformes | Jefe de Producción |
| **4. Capacitación del Personal**| $\ge 85\%$ | $\\frac{\\text{Horas Capacitación Ejecutadas}}{\\text{Horas Programadas en el Plan}} \\times 100$ | Plan anual de capacitación | Gestión Humana |

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
"""

if "## 17. GUÍA PRÁCTICA DE FORMATOS" not in content:
    content = content + "\n\n" + templates_section

with open(TARGET_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Updated {TARGET_FILE} with complete document templates and models.")
