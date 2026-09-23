# -*- coding: utf-8 -*-
import os
import sys

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

def enrich_ntc6001_tech():
    path = os.path.join(BASE_DIR, "MANUAL_TECNICO_NTC_6001.md")
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    extra_content = """
### 6.4 Catálogo y Jerarquía de Interfaces de Componentes (TypeScript Props)
Para asegurar tipado estricto y prevenir errores en tiempo de ejecución, se especifican las interfaces formales de los componentes principales:

```typescript
// Definición formal de propiedades para ClauseCard
export interface ClauseCardProps {
  clause: Clause;
  status: 'CUMPLE' | 'PARCIAL' | 'NO_CUMPLE' | 'NO_APLICA';
  selectedEvidences: string[];
  notes: string;
  onStatusChange: (clauseId: string, newStatus: 'CUMPLE' | 'PARCIAL' | 'NO_CUMPLE' | 'NO_APLICA') => void;
  onEvidenceToggle: (clauseId: string, evidenceText: string) => void;
  onNotesChange: (clauseId: string, newNotes: string) => void;
  onAiConsult: (clause: Clause) => void;
  isReadOnly?: boolean;
}

// Definición formal para el formulario de caracterización
export interface DemographicsFormProps {
  initialData?: Partial<DemographicData>;
  onSubmit: (data: DemographicData) => void;
  onCancel?: () => void;
  isSubmitting: boolean;
}

// Definición formal para el tablero de resultados y radar
export interface ResultsDisplayProps {
  globalScore: number;
  evidencesScore: number;
  finalScore: number;
  maturityLevel: string;
  clauseScores: ClauseScoreSummary[];
  companyData: DemographicData;
  onGenerateActionPlan: () => Promise<void>;
  onExportPdf: () => Promise<void>;
  isGeneratingPlan: boolean;
  isExportingPdf: boolean;
}
```

### 7.3 Algoritmo de Segmentación y Renderizado de Documentos PDF (Canvas Slicing)
La exportación del informe oficial en PDF enfrentaba desafíos técnicos debido a las limitaciones de los conversores convencionales del navegador, que cortaban párrafos y tablas por la mitad al cambiar de página. Se diseñó un algoritmo propietario de **Canvas Slicing** utilizando `html2canvas` y `jsPDF`:

```typescript
/**
 * Generador de PDF de alta fidelidad mediante segmentación por canvas
 * Resuelve problemas de compresión de viewport móvil y corte de líneas de texto
 */
export async function generateHighFidelityPdf(elementId: string, fileName: string): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) throw new Error(`Elemento con ID ${elementId} no encontrado`);

  // 1. Clona el contenedor para renderizado aislado sin afectar la UI visible
  const clone = element.cloneNode(true) as HTMLElement;
  clone.style.width = '1024px';
  clone.style.maxWidth = '1024px';
  clone.style.padding = '32px';
  clone.style.background = '#ffffff';
  document.body.appendChild(clone);

  try {
    // 2. Renderizado a Canvas a escala 2x para resolución de impresión (300 DPI)
    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF('p', 'mm', 'letter');
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const margin = 12; // mm
    const usableWidth = pdfWidth - (margin * 2);
    const usableHeight = pdfHeight - (margin * 2);

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = usableWidth / imgWidth;
    const totalPdfHeight = imgHeight * ratio;

    let heightLeft = totalPdfHeight;
    let position = margin;
    let page = 1;

    // 3. Segmentación vertical sucesiva página por página
    pdf.addImage(imgData, 'JPEG', margin, position, usableWidth, totalPdfHeight);
    heightLeft -= usableHeight;

    while (heightLeft > 0) {
      position = margin - (usableHeight * page);
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', margin, position, usableWidth, totalPdfHeight);
      
      // Encabezado y pie de página en cada hoja adicional
      pdf.setFontSize(8);
      pdf.setTextColor(100, 116, 139);
      pdf.text(`Informe Oficial NTC 6001 · Página ${page + 1}`, pdfWidth / 2, pdfHeight - 6, { align: 'center' });
      
      heightLeft -= usableHeight;
      page++;
    }

    pdf.save(fileName);
  } finally {
    document.body.removeChild(clone);
  }
}
```

### 21.3 Protocolo de Despliegue en Entornos de Producción (Hostinger / Ubuntu)
A continuación se detalla el procedimiento de despliegue en servidores web Apache/Passenger y Ubuntu Nginx:
1. **Compilación de Artefactos de Frontend:**
   ```bash
   npm run build:ntc6001
   ```
   Genera la distribución optimizada en el directorio `dist-ntc6001/`.
2. **Configuración de Apache (.htaccess) para Single Page Application (SPA):**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```
3. **Puesta en Marcha del Servicio Backend Express en Node.js:**
   ```bash
   # Inicio persistente mediante PM2
   pm2 start backend/server.js --name "api-ntc6001" -i max
   pm2 save
   pm2 startup
   ```
"""

    if "### 6.4 Catálogo y Jerarquía" not in content:
        content = content.replace("## 7. IMPLEMENTACIÓN DEL SOFTWARE", extra_content + "\n\n## 7. IMPLEMENTACIÓN DEL SOFTWARE")
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print("Enriched MANUAL_TECNICO_NTC_6001.md successfully.")

enrich_ntc6001_tech()
