import React, { useState, useMemo, useEffect } from 'react';

interface InteractiveGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  guiaDeUsoContent: string;
  ntc6001Content: string;
  ntc6496Content: string;
  appManualContent: string;
  onStartGuidedTour?: () => void;
}

type ActiveTab = 'guia_uso' | 'ntc_6001' | 'ntc_sostenible' | 'manual_app';

const USER_GUIDE_STEPS = [
  { id: 1, title: '1. Introducción y Capacidades', icon: '📖' },
  { id: 2, title: '2. Acceso y Login', icon: '🔑' },
  { id: 3, title: '3. Dashboard Principal', icon: '🖥️' },
  { id: 4, title: '4. Caracterización de Empresa', icon: '🏢' },
  { id: 5, title: '5. Cuestionario y Evidencias', icon: '📋' },
  { id: 6, title: '6. Asistente IA Contextual', icon: '🤖' },
  { id: 7, title: '7. Resultados y Gráficas', icon: '📊' },
  { id: 8, title: '8. Plan de Acción IA', icon: '🎯' },
  { id: 9, title: '9. Exportación PDF', icon: '📄' },
  { id: 10, title: '10. Historial Comparativo', icon: '📈' },
  { id: 11, title: '11. Solución de Problemas', icon: '🛠️' },
  { id: 12, title: '12. Ejemplos Prácticos', icon: '💡' },
];

const TROUBLESHOOTING_ITEMS = [
  {
    id: 'ai-no-response',
    category: 'Inteligencia Artificial',
    question: 'El asistente de IA no responde o devuelve un error',
    cause: 'Falta de conexión a internet o clave API Gemini no configurada o expirada.',
    solution: '1. Verifique su conexión a internet.\n2. Ingrese la clave Gemini API válida en la configuración o variables de entorno.\n3. Si está en modo offline, recuerde que las funciones de evaluación y gráficos siguen funcionando localmente.'
  },
  {
    id: 'pdf-blocked',
    category: 'Exportación',
    question: 'No se descarga el informe en PDF al presionar el botón',
    cause: 'Bloqueador de ventanas emergentes en el navegador o renderizado de gráficos incompleto.',
    solution: '1. Asegúrese de permitir ventanas emergentes para este sitio.\n2. Espere 2 a 3 segundos a que los gráficos terminen de renderizar antes de hacer clic.\n3. Como alternativa directa, presione la combinación de teclas Ctrl + P o Cmd + P para imprimir.'
  },
  {
    id: 'company-history',
    category: 'Historial',
    question: 'No me aparece el historial previo de una empresa',
    cause: 'El NIT/ID de la empresa fue escrito de forma distinta o se borró el almacenamiento local del navegador (LocalStorage).',
    solution: '1. Verifique el NIT/ID de la empresa respetando guiones o espacios exactos.\n2. Asegúrese de estar navegando en el mismo navegador donde realizó la evaluación previa.'
  },
  {
    id: 'evidence-score',
    category: 'Evaluación',
    question: '¿Por qué mi porcentaje de cumplimiento baja si seleccioné "Cumple"?',
    cause: 'El motor de cálculo considera tanto el estado de cumplimiento cualitativo como la lista de verificación de evidencias documentales físicas o digitales.',
    solution: 'Marque las casillas de evidencia (manuales, formatos, facturas, registros) correspondientes a la cláusula para alcanzar el 100% del puntaje ponderado.'
  }
];

const markdownToHtmlSimple = (markdown: string): string => {
  if (!markdown) return '';
  
  const escapeHtml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  const lines = markdown.split(/\r?\n/);
  const result: string[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];

    if (rawLine.trim().startsWith('```')) {
      if (inCodeBlock) {
        result.push(`<pre className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs font-mono overflow-x-auto my-3"><code>${codeBuffer.join('\n')}</code></pre>`);
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(escapeHtml(rawLine));
      continue;
    }

    // Headers
    if (rawLine.startsWith('# ')) {
      const title = rawLine.replace('# ', '').trim();
      const id = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      result.push(`<h1 id="${id}" class="text-2xl font-extrabold text-slate-900 border-b-2 border-slate-200 pb-2 mt-8 mb-4">${escapeHtml(title)}</h1>`);
    } else if (rawLine.startsWith('## ')) {
      const title = rawLine.replace('## ', '').trim();
      const id = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      result.push(`<h2 id="${id}" class="text-xl font-bold text-cyan-800 border-b border-cyan-100 pb-1 mt-6 mb-3">${escapeHtml(title)}</h2>`);
    } else if (rawLine.startsWith('### ')) {
      const title = rawLine.replace('### ', '').trim();
      result.push(`<h3 class="text-lg font-semibold text-teal-700 mt-5 mb-2">${escapeHtml(title)}</h3>`);
    } else if (rawLine.startsWith('#### ')) {
      result.push(`<h4 class="text-base font-semibold text-slate-800 mt-4 mb-2">${escapeHtml(rawLine.replace('#### ', ''))}</h4>`);
    } else if (rawLine.startsWith('- ') || rawLine.startsWith('* ')) {
      const content = rawLine.substring(2);
      const formatted = content
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/`(.+?)`/g, '<code class="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-xs">$1</code>');
      result.push(`<li class="ml-5 list-disc text-slate-700 text-sm mb-1">${formatted}</li>`);
    } else if (rawLine.trim() === '---') {
      result.push('<hr class="my-6 border-slate-200" />');
    } else if (rawLine.trim().length > 0) {
      const formatted = rawLine
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/`(.+?)`/g, '<code class="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-xs">$1</code>');
      result.push(`<p class="text-slate-700 text-sm leading-relaxed mb-3">${formatted}</p>`);
    }
  }

  return result.join('\n');
};

export const InteractiveGuideModal: React.FC<InteractiveGuideModalProps> = ({
  isOpen,
  onClose,
  guiaDeUsoContent,
  ntc6001Content,
  ntc6496Content,
  appManualContent,
  onStartGuidedTour
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('guia_uso');
  const [selectedGuideStep, setSelectedGuideStep] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTroubleId, setActiveTroubleId] = useState<string | null>(null);
  
  // Interactive Simulator States
  const [simAnswer, setSimAnswer] = useState<'cumple' | 'parcial' | 'nocumple'>('cumple');
  const [simEvidences, setSimEvidences] = useState<{ [key: string]: boolean }>({
    ev1: true,
    ev2: false,
    ev3: true
  });
  const [simChatInput, setSimChatInput] = useState('');
  const [simChatMessages, setSimChatMessages] = useState<Array<{ sender: 'user' | 'ia'; text: string }>>([
    { sender: 'ia', text: '¡Hola! Soy tu asistente de Inteligencia Artificial especializado en normas de calidad. ¿En qué puedo ayudarte sobre esta cláusula?' }
  ]);
  const [simScenario, setSimScenario] = useState<'calzado' | 'restaurante'>('calzado');

  const currentMarkdownContent = useMemo(() => {
    switch (activeTab) {
      case 'guia_uso':
        return guiaDeUsoContent;
      case 'ntc_6001':
        return ntc6001Content;
      case 'ntc_sostenible':
        return ntc6496Content;
      case 'manual_app':
        return appManualContent;
      default:
        return guiaDeUsoContent;
    }
  }, [activeTab, guiaDeUsoContent, ntc6001Content, ntc6496Content, appManualContent]);

  // Extract headings for Table of Contents
  const tocHeadings = useMemo(() => {
    if (!currentMarkdownContent) return [];
    const lines = currentMarkdownContent.split(/\r?\n/);
    const headings: Array<{ level: number; title: string; id: string }> = [];
    
    for (const line of lines) {
      if (line.startsWith('# ') || line.startsWith('## ') || line.startsWith('### ')) {
        const level = line.startsWith('# ') ? 1 : line.startsWith('## ') ? 2 : 3;
        const title = line.replace(/^#+\s+/, '').trim();
        const id = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        headings.push({ level, title, id });
      }
    }
    return headings;
  }, [currentMarkdownContent]);

  // Filter headings or troubleshooting by search query
  const filteredTroubleshooting = useMemo(() => {
    if (!searchQuery.trim()) return TROUBLESHOOTING_ITEMS;
    const q = searchQuery.toLowerCase();
    return TROUBLESHOOTING_ITEMS.filter(
      item =>
        item.question.toLowerCase().includes(q) ||
        item.cause.toLowerCase().includes(q) ||
        item.solution.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleSimChatSend = () => {
    if (!simChatInput.trim()) return;
    const userMsg = simChatInput;
    setSimChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setSimChatInput('');

    setTimeout(() => {
      let reply = 'Para cumplir esta norma, te recomiendo estructurar un procedimiento escrito y registrar las evidencias de verificación periódica.';
      if (userMsg.toLowerCase().includes('evidencia') || userMsg.toLowerCase().includes('formato')) {
        reply = 'Las evidencias válidas incluyen: manuales de procesos, actas firmadas por gerencia, registros fotográficos y listas de chequeo firmadas.';
      } else if (userMsg.toLowerCase().includes('ejemplo') || userMsg.toLowerCase().includes('política')) {
        reply = 'Ejemplo de Política de Calidad: "Nos comprometemos a garantizar la excelencia en nuestros procesos, optimizando los recursos y garantizando la satisfacción del cliente."';
      }
      setSimChatMessages(prev => [...prev, { sender: 'ia', text: reply }]);
    }, 600);
  };

  const currentScoreSimulated = useMemo(() => {
    let score = 0;
    if (simAnswer === 'cumple') score += 60;
    else if (simAnswer === 'parcial') score += 30;
    
    let evCheckedCount = Object.values(simEvidences).filter(Boolean).length;
    score += evCheckedCount * 13.33;
    return Math.min(100, Math.round(score));
  }, [simAnswer, simEvidences]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl h-[92vh] flex flex-col border border-slate-200 overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-white p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4 border-b border-cyan-900/40 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-2xl shadow-inner">
              📖
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                Centro de Guías e Interacción
                <span className="text-xs bg-cyan-500/20 text-cyan-300 font-semibold px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                  v2.0 ManField Standard
                </span>
              </h2>
              <p className="text-xs text-slate-300">
                Documentación técnica, manuales normativos y tutorial interactivo
              </p>
            </div>
          </div>

          {/* Action Header Tools */}
          <div className="flex items-center gap-2">
            {onStartGuidedTour && (
              <button
                onClick={() => {
                  onClose();
                  onStartGuidedTour();
                }}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold text-xs py-2 px-3.5 rounded-xl shadow-md shadow-cyan-950 flex items-center gap-1.5 transition-all transform active:scale-95"
              >
                <span>🚀</span> Iniciar Tour Guiado
              </button>
            )}

            <button
              onClick={onClose}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-2 rounded-xl text-lg font-bold transition-colors"
              title="Cerrar modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Tab Navigation Hub */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 pt-3 flex flex-wrap gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('guia_uso')}
            className={`py-2.5 px-4 rounded-t-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
              activeTab === 'guia_uso'
                ? 'bg-white text-cyan-800 border-t-2 border-cyan-600 shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <span>📖</span> Guía de Uso Interactiva
          </button>

          <button
            onClick={() => setActiveTab('ntc_6001')}
            className={`py-2.5 px-4 rounded-t-xl font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all ${
              activeTab === 'ntc_6001'
                ? 'bg-white text-cyan-800 border-t-2 border-cyan-600 shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <span>🏢</span> Manual NTC 6001 (PyMEs)
          </button>

          <button
            onClick={() => setActiveTab('ntc_sostenible')}
            className={`py-2.5 px-4 rounded-t-xl font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all ${
              activeTab === 'ntc_sostenible'
                ? 'bg-white text-teal-800 border-t-2 border-teal-600 shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <span>🌿</span> Manual NTC 6496 / 6503 (Sostenibilidad)
          </button>

          <button
            onClick={() => setActiveTab('manual_app')}
            className={`py-2.5 px-4 rounded-t-xl font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all ${
              activeTab === 'manual_app'
                ? 'bg-white text-indigo-800 border-t-2 border-indigo-600 shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <span>💻</span> Manual de Ingeniería
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* LEFT SIDEBAR: Interactive Navigator or TOC */}
          <div className="w-64 sm:w-72 bg-slate-50 border-r border-slate-200 p-4 overflow-y-auto shrink-0 hidden md:block">
            
            {/* Search Input */}
            <div className="mb-4">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                🔍 Buscar en Documentación
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Escribe para buscar..."
                className="w-full text-xs bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
              />
            </div>

            {activeTab === 'guia_uso' ? (
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Pasos de la Guía Interactiva
                </h3>
                <div className="space-y-1">
                  {USER_GUIDE_STEPS.map(step => (
                    <button
                      key={step.id}
                      onClick={() => setSelectedGuideStep(step.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-2 transition-all ${
                        selectedGuideStep === step.id
                          ? 'bg-cyan-600 text-white font-semibold shadow-md shadow-cyan-600/20'
                          : 'text-slate-700 hover:bg-slate-200/70'
                      }`}
                    >
                      <span className="text-sm shrink-0">{step.icon}</span>
                      <span className="truncate">{step.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Tabla de Contenido
                </h3>
                <div className="space-y-1">
                  {tocHeadings.length === 0 ? (
                    <p className="text-xs text-slate-400 italic">No se encontraron secciones</p>
                  ) : (
                    tocHeadings.map((h, i) => (
                      <a
                        key={i}
                        href={`#${h.id}`}
                        className={`block text-xs py-1.5 px-2 rounded-lg truncate transition-colors ${
                          h.level === 1
                            ? 'font-bold text-slate-800 hover:bg-slate-200'
                            : h.level === 2
                            ? 'font-medium text-slate-700 pl-4 hover:bg-slate-200'
                            : 'text-slate-500 pl-6 hover:bg-slate-200'
                        }`}
                      >
                        {h.title}
                      </a>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Quick Tour Launcher Card */}
            <div className="mt-6 p-3.5 bg-gradient-to-br from-cyan-900 to-teal-900 text-white rounded-2xl shadow-sm text-center">
              <span className="text-2xl block mb-1">🚀</span>
              <h4 className="text-xs font-bold mb-1">¿Prefieres aprender en vivo?</h4>
              <p className="text-[11px] text-cyan-200 mb-3">
                Inicia el tour paso a paso resaltando directamente los botones de la aplicación.
              </p>
              {onStartGuidedTour && (
                <button
                  onClick={() => {
                    onClose();
                    onStartGuidedTour();
                  }}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs py-2 px-3 rounded-xl transition-colors"
                >
                  Probar Tour Ahora
                </button>
              )}
            </div>
          </div>

          {/* RIGHT MAIN VIEW: Interactive Content or Document Viewer */}
          <div className="flex-1 p-4 sm:p-8 overflow-y-auto bg-white">
            
            {activeTab === 'guia_uso' ? (
              <div className="max-w-4xl mx-auto">
                
                {/* Step Header Banner */}
                <div className="mb-6 p-5 bg-gradient-to-r from-cyan-50 via-teal-50 to-blue-50 border border-cyan-100 rounded-2xl flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">
                      {USER_GUIDE_STEPS.find(s => s.id === selectedGuideStep)?.icon || '📖'}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Paso {selectedGuideStep}: {USER_GUIDE_STEPS.find(s => s.id === selectedGuideStep)?.title.replace(/^\d+\.\s*/, '')}
                      </h3>
                      <p className="text-xs text-slate-600">
                        Instrucciones operativas y simulador interactivo en tiempo real
                      </p>
                    </div>
                  </div>

                  {/* Step Selector for Mobile */}
                  <div className="md:hidden w-full">
                    <select
                      value={selectedGuideStep}
                      onChange={e => setSelectedGuideStep(Number(e.target.value))}
                      className="w-full bg-white border border-slate-300 rounded-xl p-2 text-xs font-semibold text-slate-800"
                    >
                      {USER_GUIDE_STEPS.map(s => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* STEP 5 SIMULATOR: Checklist & Evidences */}
                {selectedGuideStep === 5 && (
                  <div className="mb-8 p-6 bg-slate-900 text-white rounded-3xl shadow-lg border border-slate-800">
                    <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                      <div>
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                          🎮 SIMULADOR EN VIVO - PASO 5
                        </span>
                        <h4 className="text-lg font-bold text-white">
                          Evaluación de Requisito y Marcas de Evidencia
                        </h4>
                      </div>
                      <div className="bg-cyan-950 text-cyan-300 border border-cyan-800 px-3 py-1 rounded-full text-xs font-bold">
                        Puntaje Calculado: {currentScoreSimulated}%
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 mb-4">
                      Prueba hacer clic en las opciones para ver cómo se calcula el porcentaje en la aplicación real:
                    </p>

                    {/* Radio Options */}
                    <div className="mb-5">
                      <label className="block text-xs font-bold text-slate-400 mb-2">
                        Estado de Cumplimiento:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          onClick={() => setSimAnswer('cumple')}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                            simAnswer === 'cumple'
                              ? 'bg-emerald-600 text-white shadow-md'
                              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                          }`}
                        >
                          ✅ Cumple (60%)
                        </button>
                        <button
                          onClick={() => setSimAnswer('parcial')}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                            simAnswer === 'parcial'
                              ? 'bg-amber-600 text-white shadow-md'
                              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                          }`}
                        >
                          ⚠️ Parcial (30%)
                        </button>
                        <button
                          onClick={() => setSimAnswer('nocumple')}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                            simAnswer === 'nocumple'
                              ? 'bg-rose-600 text-white shadow-md'
                              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                          }`}
                        >
                          ❌ No Cumple (0%)
                        </button>
                      </div>
                    </div>

                    {/* Evidence Checkboxes */}
                    <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                      <label className="block text-xs font-bold text-cyan-300 mb-2">
                        Evidencias Documentales Verificadas:
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={simEvidences.ev1}
                            onChange={e => setSimEvidences({ ...simEvidences, ev1: e.target.checked })}
                            className="rounded text-cyan-600 focus:ring-cyan-500"
                          />
                          Manual de Procesos / Procedimiento Formal Escrito
                        </label>
                        <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={simEvidences.ev2}
                            onChange={e => setSimEvidences({ ...simEvidences, ev2: e.target.checked })}
                            className="rounded text-cyan-600 focus:ring-cyan-500"
                          />
                          Registros de Verificación o Lista de Chequeo Mensual
                        </label>
                        <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={simEvidences.ev3}
                            onChange={e => setSimEvidences({ ...simEvidences, ev3: e.target.checked })}
                            className="rounded text-cyan-600 focus:ring-cyan-500"
                          />
                          Facturas / Certificados de Gestor Ambiental o Auditoría
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 6 SIMULATOR: AI Assistant */}
                {selectedGuideStep === 6 && (
                  <div className="mb-8 p-6 bg-slate-900 text-white rounded-3xl shadow-lg border border-slate-800">
                    <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                      <div>
                        <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
                          🎮 SIMULADOR EN VIVO - PASO 6
                        </span>
                        <h4 className="text-lg font-bold text-white">
                          Asistente IA Contextual en Tiempo Real
                        </h4>
                      </div>
                      <span className="text-2xl">🤖</span>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-2xl h-48 overflow-y-auto space-y-3 mb-3 border border-slate-800">
                      {simChatMessages.map((msg, i) => (
                        <div
                          key={i}
                          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs p-3 rounded-2xl text-xs leading-relaxed ${
                              msg.sender === 'user'
                                ? 'bg-cyan-600 text-white rounded-br-none'
                                : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                            }`}
                          >
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={simChatInput}
                        onChange={e => setSimChatInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSimChatSend()}
                        placeholder="Escribe una pregunta de prueba (ej: ¿Qué evidencia usar?)..."
                        className="flex-1 text-xs bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                      <button
                        onClick={handleSimChatSend}
                        className="bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 11 SIMULATOR: Troubleshooting Finder */}
                {selectedGuideStep === 11 && (
                  <div className="mb-8">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-slate-900 mb-1">
                        🛠️ Centro de Solución de Problemas Frecuentes
                      </h4>
                      <p className="text-xs text-slate-600">
                        Haz clic en cualquiera de las consultas para ver la solución sugerida:
                      </p>
                    </div>

                    <div className="space-y-3">
                      {filteredTroubleshooting.map(item => (
                        <div
                          key={item.id}
                          className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all"
                        >
                          <button
                            onClick={() => setActiveTroubleId(activeTroubleId === item.id ? null : item.id)}
                            className="w-full p-4 text-left font-bold text-sm text-slate-800 flex items-center justify-between hover:bg-slate-100"
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                                {item.category}
                              </span>
                              {item.question}
                            </span>
                            <span className="text-slate-400">
                              {activeTroubleId === item.id ? '▲' : '▼'}
                            </span>
                          </button>

                          {activeTroubleId === item.id && (
                            <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-700 space-y-2 animate-fade-in">
                              <p>
                                <strong className="text-rose-700">Causa Probable:</strong> {item.cause}
                              </p>
                              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-emerald-950 whitespace-pre-line">
                                <strong className="font-bold text-emerald-800 block mb-1">Solución Recomendada:</strong>
                                {item.solution}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 12 SIMULATOR: Practical Examples */}
                {selectedGuideStep === 12 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      💡 Ejemplos Prácticos de Aplicación Real
                    </h4>
                    
                    <div className="flex gap-2 mb-4">
                      <button
                        onClick={() => setSimScenario('calzado')}
                        className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                          simScenario === 'calzado'
                            ? 'bg-cyan-700 text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        👟 Ejemplo 1: Microempresa Calzado (NTC 6001)
                      </button>
                      <button
                        onClick={() => setSimScenario('restaurante')}
                        className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                          simScenario === 'restaurante'
                            ? 'bg-teal-700 text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        🍽️ Ejemplo 2: Restaurante Turístico (NTC 6496)
                      </button>
                    </div>

                    {simScenario === 'calzado' ? (
                      <div className="bg-cyan-50 border border-cyan-200 p-5 rounded-2xl text-slate-800 text-xs leading-relaxed space-y-2">
                        <h5 className="font-bold text-sm text-cyan-900">Caso: Manufactura de Calzado (12 Empleados)</h5>
                        <p><strong>Configuración:</strong> Norma NTC 6001, Sector Industrial.</p>
                        <p><strong>Resultado Obtenido:</strong> 65% global (Dirección 80%, Operativo 70%, Financiero 45%).</p>
                        <p><strong>Acción IA Sugerida:</strong> Formalizar el flujo de caja mensual y capacitar en costeo directo de producción.</p>
                      </div>
                    ) : (
                      <div className="bg-teal-50 border border-teal-200 p-5 rounded-2xl text-slate-800 text-xs leading-relaxed space-y-2">
                        <h5 className="font-bold text-sm text-teal-900">Caso: Restaurante Gastronómico (Sector Turismo)</h5>
                        <p><strong>Configuración:</strong> Norma NTC 6496, Gastronomía Sostenible.</p>
                        <p><strong>Resultado Obtenido:</strong> 82% global (Ambiental 85%, Sociocultural 90%, Económico 70%).</p>
                        <p><strong>Acción IA Sugerida:</strong> Firmar convenio con gestor autorizado de Aceite Vegetal Usado (AVU) y medir consumo energético por comensal.</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Render Main Markdown HTML for User Guide */}
                <div
                  className="manual-rendered-body"
                  dangerouslySetInnerHTML={{ __html: markdownToHtmlSimple(guiaDeUsoContent) }}
                />
              </div>
            ) : (
              <div className="max-w-4xl mx-auto">
                <div
                  className="manual-rendered-body"
                  dangerouslySetInnerHTML={{ __html: markdownToHtmlSimple(currentMarkdownContent) }}
                />
              </div>
            )}

          </div>

        </div>

        {/* Footer Bar */}
        <div className="bg-slate-100 border-t border-slate-200 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
            <span>📚 Documento activo:</span>
            <span className="font-semibold text-slate-800">
              {activeTab === 'guia_uso'
                ? 'GUIA_DE_USO.md (ManField Model)'
                : activeTab === 'ntc_6001'
                ? 'MANUAL_NTC_6001.md'
                : activeTab === 'ntc_sostenible'
                ? 'MANUAL_NTC_6496_6503.md'
                : 'MANUAL_APP.md'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-5 rounded-xl transition-colors"
          >
            Entendido / Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};

export default InteractiveGuideModal;
