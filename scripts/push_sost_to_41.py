# -*- coding: utf-8 -*-
import os

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
path = os.path.join(BASE_DIR, "MANUAL_TECNICO_SOSTENIBILIDAD.md")

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

roadmap_section = """
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
"""

if "### 23.3 Hoja de Ruta" not in content:
    content = content.replace("## 24. REFERENCIAS BIBLIOGRÁFICAS", roadmap_section + "\n\n## 24. REFERENCIAS BIBLIOGRÁFICAS")
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated MANUAL_TECNICO_SOSTENIBILIDAD.md with 24-week roadmap.")
