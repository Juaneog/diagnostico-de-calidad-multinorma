# -*- coding: utf-8 -*-
import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

def boost_tech_manual():
    path = os.path.join(BASE_DIR, "MANUAL_TECNICO_SOSTENIBILIDAD.md")
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    data_dictionary = """
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
"""

    if "### 12.4 Diccionario de Datos Detallado" not in content:
        content = content.replace("## 13. DISEÑO DE COMPORTAMIENTO", data_dictionary + "\n\n## 13. DISEÑO DE COMPORTAMIENTO")
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print("Updated MANUAL_TECNICO_SOSTENIBILIDAD.md with Data Dictionary.")

def boost_guide():
    path = os.path.join(BASE_DIR, "GUIA_DE_USO_SOSTENIBILIDAD.md")
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    extra = """
---

## 17. PROGRAMA DE CAPACITACIÓN Y SENSIBILIZACIÓN DEL PERSONAL OPERATIVO

Para asegurar que los compromisos de sostenibilidad se mantengan en la rutina diaria de cocinas, áreas de servicio y pisos hoteleros, la plataforma recomienda ejecutar el siguiente plan de inducción de 4 módulos formativos:

### 17.1 Módulo 1: Manejo Seguro y Disposición Responsable de Grasas y AVU (Cocina)
- **Destinatarios:** Chefs, cocineros, auxiliares de cocina y personal de lavado de loza (stewards).
- **Duración:** 2 horas teórico-prácticas en la cocina del establecimiento.
- **Temas Clave:**
  1. ¿Por qué nunca verter aceite de fritura al sifón o fregadero? Efectos destructivos en alcantarillados y ríos.
  2. Protocolo de enfriamiento, filtración y trasvase de aceite a los bidones azules rotulados.
  3. Rutina de retiro quincenal de lodos y grasas en la trampa de grasa en acero inoxidable.
  4. Exigencia y archivo del manifiesto de recolección oficial firmado por el gestor ambiental autorizado.

### 17.2 Módulo 2: Prevención de la ESCNNA y Protección de la Infancia (Recepción y Seguridad)
- **Destinatarios:** Recepcionistas, botones, conserjes, personal de seguridad y camareras.
- **Duración:** 3 horas con apoyo de material de la Fundación Renacer y la Policía de Turismo.
- **Temas Clave:**
  1. Marco normativo: Ley 679 de 2001, Ley 1336 de 2009 y Resolución 3840 de 2009.
  2. Detección de señales de alerta en el mostrador de registro hotelero: adultos con menores sin parentesco comprobado.
  3. Protocolo de reporte inmediato y discreto a la línea 141 del ICBF y al cuadrante policial.
  4. Responsabilidad legal y penal del establecimiento y de los empleados que encubran estas conductas.

### 17.3 Módulo 3: Lavandería Verde, Ahorro Hídrico y Eficiencia Energética (Pisos)
- **Destinatarios:** Amas de llaves, camareras, auxiliares de lavandería y personal de mantenimiento.
- **Temas Clave:**
  1. Inspección y reporte diario de fugas en sanitarios, duchas y lavamanos de habitaciones.
  2. Verificación del estado de boquillas aireadoras y reductores de caudal (máximo 8 L/min en ducha).
  3. Respeto estricto a las decisiones de los huéspedes sobre el cambio de toallas y sábanas colgadas.
  4. Regulación de termostatos de aire acondicionado a 24°C y apagado de luces en cuartos vacíos.

### 17.4 Módulo 4: Promoción del Patrimonio Cultural y Comercio Justo (Salón y Alimentos)
- **Destinatarios:** Meseros, capitanes de servicio, sommeliers y personal de atención al cliente.
- **Temas Clave:**
  1. Reseña histórica de los platos tradicionales ofrecidos en la carta menú y su valor ancestral.
  2. Divulgación de atractivos patrimoniales, museos y artesanías locales a los comensales.
  3. Capacitación en separación de residuos en mesas: compostaje de restos y reciclaje de botellas.

---

## 18. CATÁLOGO DE BUENAS PRÁCTICAS DE SOSTENIBILIDAD RECOMENDADAS POR EL MINCIT

A continuación se resumen las 10 mejores prácticas operativas destacadas por el Ministerio de Comercio, Industria y Turismo para incrementar la competitividad del turismo colombiano:

1. **Iluminación Eficiente 100% LED:** Sustituir lámparas incandescentes y tubos fluorescentes por tecnología LED cálida, logrando ahorros energéticos de hasta el 65%.
2. **Uso de Energías Renovables no Convencionales:** Instalación de paneles solares fotovoltaicos para calentamiento de agua sanitaria en hoteles y hostales.
3. **Cartas Digitales y Menús QR:** Eliminación de cartas impresas plastificadas no biodegradables, facilitando la actualización de precios y reduciendo residuos.
4. **Compra a Corta Distancia (Km Cero):** Adquisición de hortalizas, frutas y carnes a productores ubicados a menos de 50 km del restaurante, reduciendo la huella de transporte.
5. **Compostaje de Residuos Orgánicos en Huerto Propio:** Transformación de cáscaras y mermas en abono para huertas de hierbas aromáticas utilizadas en la cocina.
6. **Dispensadores Cerámicos en Baños:** Supresión total de botellitas plásticas desechables de 30 ml en habitaciones mediante dispensadores recargables elegantes.
7. **Jardines con Flora Nativa y Coberturas Xéricas:** Siembra de especies vegetales propias de la región que no requieren riego intensivo ni pesticidas químicos.
8. **Dotación Laboral con Fibras Recicladas:** Adquisición de uniformes para personal confeccionados con algodón reciclado o fibras de botellas PET recuperadas.
9. **Eventos con Huella de Carbono Neutral:** Cálculo del impacto de bodas y convenciones corporativas, compensando las emisiones con siembra de árboles nativos.
10. **Alianzas con Guías y Artesanos Certificados:** Promoción exclusiva de guías turísticos con tarjeta profesional y Registro Nacional de Turismo vigente.
"""

    if "## 17. PROGRAMA DE CAPACITACIÓN" not in content:
        content = content + "\n\n" + extra
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print("Updated GUIA_DE_USO_SOSTENIBILIDAD.md with Training Program and Best Practices.")

boost_tech_manual()
boost_guide()
