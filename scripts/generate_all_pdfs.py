import os
import re
import sys
import subprocess
import markdown
import fitz

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
ESCUDO_PATH = os.path.join(BASE_DIR, "Escudo-unicordoba.png").replace("\\", "/")

def get_base_css():
    return """
    @page {
        size: letter;
        margin: 22mm 18mm 22mm 18mm;
    }
    *, *:before, *:after {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        color: #1a202c;
        line-height: 1.65;
        font-size: 11.5pt;
        margin: 0;
        padding: 0;
        background: #ffffff;
    }
    
    /* PORTADA INSTITUCIONAL */
    .cover-page {
        height: 94vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        page-break-after: always;
        padding: 40px 20px 20px 20px;
    }
    .cover-top {
        margin-top: 10px;
    }
    .cover-logo {
        max-height: 120px;
        margin-bottom: 20px;
    }
    .cover-inst {
        font-size: 15pt;
        font-weight: 800;
        color: #063f5a;
        margin: 0 0 6px 0;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }
    .cover-fac {
        font-size: 12pt;
        font-weight: 700;
        color: #087f8c;
        margin: 0 0 4px 0;
        text-transform: uppercase;
    }
    .cover-dept {
        font-size: 10pt;
        font-weight: 600;
        color: #4a5568;
        margin: 0;
        text-transform: uppercase;
    }
    .cover-center {
        margin: 40px 0;
        padding: 25px;
        border-top: 3px solid #087f8c;
        border-bottom: 3px solid #087f8c;
        background: #f8fafc;
    }
    .cover-title {
        font-size: 21pt;
        font-weight: 800;
        color: #063f5a;
        line-height: 1.25;
        margin: 0 0 15px 0;
    }
    .cover-subtitle {
        font-size: 12.5pt;
        font-weight: 600;
        color: #2d3748;
        line-height: 1.45;
        margin: 0 0 15px 0;
    }
    .cover-code {
        display: inline-block;
        padding: 4px 14px;
        background: #087f8c;
        color: white;
        border-radius: 4px;
        font-size: 9.5pt;
        font-weight: 700;
        letter-spacing: 0.08em;
    }
    .cover-bottom {
        text-align: left;
        border-top: 1px solid #cbd5e1;
        padding-top: 15px;
        font-size: 9.5pt;
        line-height: 1.6;
        color: #2d3748;
    }
    .cover-bottom table {
        width: 100%;
        border-collapse: collapse;
        margin: 0;
    }
    .cover-bottom td {
        border: none;
        padding: 3px 0;
    }
    
    /* ENCABEZADOS Y JERARQUÍA */
    h1 {
        color: #063f5a;
        font-size: 17pt;
        font-weight: 800;
        border-bottom: 2px solid #087f8c;
        padding-bottom: 6px;
        margin-top: 30px;
        margin-bottom: 14px;
    }
    h2 {
        color: #0c4a6e;
        font-size: 13.5pt;
        font-weight: 700;
        margin-top: 24px;
        margin-bottom: 10px;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 4px;
    }
    h3 {
        color: #0369a1;
        font-size: 11.5pt;
        font-weight: 600;
        margin-top: 18px;
        margin-bottom: 8px;
    }
    h4 {
        color: #334155;
        font-size: 10.5pt;
        font-weight: 600;
        margin-top: 14px;
        margin-bottom: 6px;
    }
    p {
        margin: 0 0 10px 0;
        text-align: justify;
    }
    ul, ol {
        margin: 6px 0 12px 0;
        padding-left: 24px;
    }
    li {
        margin: 3px 0;
    }
    
    /* TABLAS */
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 14px 0;
        font-size: 8.5pt;
        page-break-inside: auto;
    }
    tr {
        page-break-inside: avoid;
        page-break-after: auto;
    }
    th {
        background-color: #063f5a;
        color: #ffffff;
        font-weight: 700;
        text-align: left;
        padding: 6px 8px;
        border: 1px solid #94a3b8;
    }
    td {
        padding: 5px 8px;
        border: 1px solid #cbd5e1;
        vertical-align: top;
    }
    tr:nth-child(even) td {
        background-color: #f8fafc;
    }
    
    /* CÓDIGO Y MATRICES */
    pre {
        background-color: #0f172a;
        color: #f1f5f9;
        padding: 10px 12px;
        border-radius: 4px;
        font-family: "Consolas", "Courier New", monospace;
        font-size: 7.5pt;
        line-height: 1.35;
        white-space: pre-wrap;
        word-break: break-all;
        page-break-inside: avoid;
        margin: 10px 0;
    }
    code {
        font-family: "Consolas", monospace;
        background-color: #f1f5f9;
        color: #0f172a;
        padding: 1px 4px;
        border-radius: 3px;
        font-size: 8.5pt;
    }
    pre code {
        background: transparent;
        color: inherit;
        padding: 0;
    }
    
    /* ALERTAS / CALLOUTS */
    blockquote {
        margin: 12px 0;
        padding: 10px 14px;
        border-left: 4px solid #087f8c;
        background-color: #f0fdfa;
        color: #0f766e;
        border-radius: 0 4px 4px 0;
    }
    .callout {
        margin: 14px 0;
        padding: 10px 14px;
        border-left: 4px solid #f59e0b;
        background-color: #fffbeb;
        color: #92400e;
        border-radius: 0 4px 4px 0;
    }
    
    /* IMÁGENES / FIGURAS */
    figure {
        margin: 16px 0;
        text-align: center;
        page-break-inside: avoid;
    }
    figure img {
        max-width: 92%;
        height: auto;
        border: 1px solid #cbd5e1;
        border-radius: 6px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    }
    figcaption {
        margin-top: 6px;
        font-size: 8.5pt;
        color: #64748b;
        font-style: italic;
    }
    
    /* SALTOS DE PÁGINA */
    .chapter-break {
        page-break-before: always;
        padding-top: 10px;
    }
    .page-break {
        page-break-before: always;
    }
    hr {
        border: none;
        border-top: 1px solid #e2e8f0;
        margin: 18px 0;
    }
    """

def add_header_footer_pymupdf(pdf_path, doc_title, doc_code):
    doc = fitz.open(pdf_path)
    total_pages = len(doc)
    
    for i in range(total_pages):
        page = doc[i]
        rect = page.rect
        
        # Don't add header/footer to the cover page
        if i == 0:
            continue
            
        header_text = f"UNIVERSIDAD DE CÓRDOBA · {doc_title}"
        footer_left = f"{doc_code} — Versión 3.0"
        footer_right = f"Página {i+1} de {total_pages}"
        
        # Header (top line + text)
        page.insert_text(fitz.Point(rect.x0 + 45, rect.y0 + 35), header_text, fontsize=7.5, fontname="helv", color=(0.4, 0.45, 0.5))
        page.draw_line(fitz.Point(rect.x0 + 45, rect.y0 + 42), fitz.Point(rect.x1 - 45, rect.y0 + 42), color=(0.8, 0.85, 0.9), width=0.6)
        
        # Footer (bottom line + text)
        page.draw_line(fitz.Point(rect.x0 + 45, rect.y1 - 42), fitz.Point(rect.x1 - 45, rect.y1 - 42), color=(0.8, 0.85, 0.9), width=0.6)
        page.insert_text(fitz.Point(rect.x0 + 45, rect.y1 - 30), footer_left, fontsize=7.5, fontname="helv", color=(0.4, 0.45, 0.5))
        
        # Right aligned footer text
        text_len = fitz.get_text_length(footer_right, fontname="helv", fontsize=7.5)
        page.insert_text(fitz.Point(rect.x1 - 45 - text_len, rect.y1 - 30), footer_right, fontsize=7.5, fontname="helv", color=(0.4, 0.45, 0.5))
        
    temp_pdf_save = pdf_path + ".stamped.pdf"
    doc.save(temp_pdf_save)
    doc.close()
    if os.path.exists(pdf_path):
        os.remove(pdf_path)
    os.replace(temp_pdf_save, pdf_path)

def build_pdf(md_filename, pdf_filename, title, subtitle, doc_code, doc_type="MANUAL TÉCNICO", is_guide=False):
    md_path = os.path.join(BASE_DIR, md_filename)
    if not os.path.exists(md_path):
        print(f"Error: {md_path} does not exist")
        return None
        
    with open(md_path, "r", encoding="utf-8") as f:
        md_text = f.read()

    # Pre-processing markdown
    # Replace relative image paths for manual-uso-assets with file:/// URIs
    assets_dir = os.path.join(BASE_DIR, "manual-uso-assets").replace("\\", "/")
    md_text = md_text.replace("manual-uso-assets/", f"file:///{assets_dir}/")
    
    # Convert markdown to html
    html_content = markdown.markdown(md_text, extensions=['tables', 'fenced_code', 'toc', 'sane_lists'])
    
    # Mark chapter breaks on all h2 tags (each chapter starts on a new page)
    html_content = re.sub(r'<h2([^>]*)>', r'<h2\1 class="chapter-break">', html_content)
    
    # Cover Page HTML
    cover_html = f"""
    <div class="cover-page">
      <div class="cover-top">
        <img src="file:///{ESCUDO_PATH}" class="cover-logo" alt="Escudo Universidad de Córdoba" />
        <div class="cover-inst">Universidad de Córdoba</div>
        <div class="cover-fac">Facultad de Ingenierías</div>
        <div class="cover-dept">Departamento de Ingeniería de Sistemas y Telecomunicaciones</div>
      </div>
      
      <div class="cover-center">
        <div class="cover-title">{title}</div>
        <div class="cover-subtitle">{subtitle}</div>
        <span class="cover-code">{doc_code}</span>
      </div>
      
      <div class="cover-bottom">
        <table>
          <tr>
            <td style="width: 25%;"><strong>Documento:</strong></td>
            <td style="width: 75%;">{doc_type}</td>
          </tr>
          <tr>
            <td><strong>Autor / Responsable:</strong></td>
            <td>Ing. Juan Restrepo — Docente e Investigador Principal</td>
          </tr>
          <tr>
            <td><strong>Entidad Colaboradora:</strong></td>
            <td>Tecnológico de Antioquia / Universidad de Córdoba</td>
          </tr>
          <tr>
            <td><strong>Estándar de Calidad:</strong></td>
            <td>Modelo Metodológico Institucional ManField · ISO/IEC 25010</td>
          </tr>
          <tr>
            <td><strong>Versión y Estado:</strong></td>
            <td>Versión 3.5.0 — Aprobado para Transferencia y Registro de Software</td>
          </tr>
          <tr>
            <td><strong>Año de Emisión:</strong></td>
            <td>2026</td>
          </tr>
        </table>
      </div>
    </div>
    """
    
    full_html = f"""<!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="utf-8">
      <title>{title}</title>
      <style>
        {get_base_css()}
      </style>
    </head>
    <body>
      {cover_html}
      <div class="content-body">
        {html_content}
      </div>
    </body>
    </html>
    """
    
    temp_html = os.path.join(BASE_DIR, f"temp_{doc_code}.html")
    pdf_out = os.path.join(BASE_DIR, pdf_filename)
    
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(full_html)
        
    cmd = [
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={pdf_out}",
        f"file:///{temp_html.replace(chr(92), '/')}"
    ]
    
    print(f"Generating PDF for {doc_code}: {pdf_filename} ...")
    res = subprocess.run(cmd, capture_output=True, text=True)
    
    if os.path.exists(temp_html):
        try:
            os.remove(temp_html)
        except:
            pass
            
    if os.path.exists(pdf_out):
        add_header_footer_pymupdf(pdf_out, title, doc_code)
        doc = fitz.open(pdf_out)
        page_count = len(doc)
        doc.close()
        print(f"SUCCESS: {pdf_filename} generated with {page_count} pages.")
        return page_count
    else:
        print(f"FAILED: {pdf_filename} was not created.")
        return 0

if __name__ == "__main__":
    tasks = [
        {
            "md": "MANUAL_TECNICO_NTC_6001.md",
            "pdf": "MANUAL_TECNICO_NTC_6001.pdf",
            "title": "MANUAL TÉCNICO Y DE ARQUITECTURA DE SOFTWARE",
            "subtitle": "Sistema de Autodiagnóstico y Evaluación de Calidad para MiPyMEs bajo la Norma Técnica NTC 6001",
            "code": "MT-NTC6001-2026",
            "type": "Manual Técnico de Ingeniería (24 Capítulos ManField)"
        },
        {
            "md": "GUIA_DE_USO_NTC_6001.md",
            "pdf": "GUIA_DE_USO_NTC_6001.pdf",
            "title": "GUÍA DE OPERACIÓN Y MANUAL DE USUARIO",
            "subtitle": "Plataforma de Diagnóstico de Calidad NTC 6001: Guía Paso a Paso, Evidencias, Asistencia IA y Casos Reales",
            "code": "GU-NTC6001-2026",
            "type": "Manual de Usuario y Operación de Software",
            "is_guide": True
        },
        {
            "md": "MANUAL_TECNICO_SOSTENIBILIDAD.md",
            "pdf": "MANUAL_TECNICO_SOSTENIBILIDAD.pdf",
            "title": "MANUAL TÉCNICO Y DE ARQUITECTURA DE SOFTWARE",
            "subtitle": "Sistema de Diagnóstico de Sostenibilidad Turística: Normas NTC 6496 (Gastronomía) y NTC 6503 (Alojamiento)",
            "code": "MT-SOST-2026",
            "type": "Manual Técnico de Ingeniería (24 Capítulos ManField)"
        },
        {
            "md": "GUIA_DE_USO_SOSTENIBILIDAD.md",
            "pdf": "GUIA_DE_USO_SOSTENIBILIDAD.pdf",
            "title": "GUÍA DE OPERACIÓN Y MANUAL DE USUARIO",
            "subtitle": "Plataforma de Sostenibilidad Turística NTC 6496 / NTC 6503: Guía de Usuario, Indicadores 3D y Casos del Sector",
            "code": "GU-SOST-2026",
            "type": "Manual de Usuario y Operación de Software",
            "is_guide": True
        }
    ]
    
    results = {}
    for t in tasks:
        p = build_pdf(t["md"], t["pdf"], t["title"], t["subtitle"], t["code"], t["type"], t.get("is_guide", False))
        results[t["pdf"]] = p
        
    print("\n================== RESUMEN DE GENERACIÓN ==================")
    for k, v in results.items():
        print(f" -> {k}: {v} páginas")
