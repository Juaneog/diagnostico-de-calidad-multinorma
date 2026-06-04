import React, { useState, useMemo, useEffect } from 'react';
import { CommentsState, IResults, IDemographics, ChecklistAnswersState, EvidenceStatus, IChatContext, IChatMessage, IChatFile, IClause, ISavedDiagnostic, ICompanyListItem, IActionPlan, IComparisonData, ChatHistories, IsoStandard } from './types';
import { STANDARDS_CONFIG, ALL_STANDARDS, getQuestionnaireData, EVIDENCE_POINTS } from './constants';
import ClauseCard from './components/ClauseCard';
import ResultsDisplay from './components/ResultsDisplay';
import DemographicsForm from './components/DemographicsForm';
import ChatModal from './components/ChatModal';
import StandardDetailModal from './components/StandardDetailModal';
import { generateActionPlan, generateChatResponse, generateActionPlanChatResponse, generateStandardChatResponse } from './services/aiService';
import * as db from './services/dbService';
import tutorialManualContent from './MANUAL_APP.md?raw';
import sustainableManualContent from './MANUAL_NTC_6496_6503.md?raw';

const APP_MODE = import.meta.env.VITE_APP_MODE || 'default';
const API_KEY_STORAGE_KEYS: Record<string, string> = {
  sustainable: 'geminiApiKey_sustainable',
};

const getApiKeyStorageKey = (): string => API_KEY_STORAGE_KEYS[APP_MODE] || 'geminiApiKey_default';
const getModeLabel = (): string => {
  if (APP_MODE === 'sustainable') return 'Sustainable';
  return 'esta aplicación';
};

const AUTH_STORAGE_KEY = 'diagnosticoAuthenticated';
const AUTH_CREDENTIALS = { username: 'user', password: 'pass' };

const markdownToHtml = (markdown: string): string => {
  const escapeHtml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inlineTransform = (text: string) => {
    return escapeHtml(text)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  };

  const lines = markdown.split(/\r?\n/);
  const result: string[] = [];
  const listStack: Array<{ type: 'ul' | 'ol'; indent: number }> = [];
  let paragraphOpen = false;

  const closeParagraph = () => {
    if (paragraphOpen) {
      result.push('</p>');
      paragraphOpen = false;
    }
  };

  const closeLists = (currentIndent = 0) => {
    while (listStack.length && listStack[listStack.length - 1].indent >= currentIndent) {
      const item = listStack.pop();
      if (item) result.push(`</${item.type}>`);
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.replace(/\t/g, '    ');

    if (/^\s*$/.test(line)) {
      closeParagraph();
      closeLists(0);
      continue;
    }

    const headingMatch = /^(#{1,6})\s+(.*)$/.exec(line);
    if (headingMatch) {
      closeParagraph();
      closeLists(0);
      const level = headingMatch[1].length;
      result.push(`<h${level}>${inlineTransform(headingMatch[2].trim())}</h${level}>`);
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      closeParagraph();
      closeLists(0);
      result.push('<hr />');
      continue;
    }

    const listMatch = /^(\s*)([-*+])\s+(.*)$/.exec(line);
    const orderedMatch = /^(\s*)(\d+)\.\s+(.*)$/.exec(line);
    if (listMatch || orderedMatch) {
      closeParagraph();
      const indent = Math.floor((listMatch ? listMatch[1].length : orderedMatch![1].length) / 2);
      const type = listMatch ? 'ul' : 'ol';
      const content = inlineTransform((listMatch ? listMatch[3] : orderedMatch![3]).trim());

      if (!listStack.length || indent > listStack[listStack.length - 1].indent) {
        listStack.push({ type, indent });
        result.push(`<${type}>`);
      } else {
        while (listStack.length && indent < listStack[listStack.length - 1].indent) {
          const item = listStack.pop();
          if (item) result.push(`</${item.type}>`);
        }
        if (!listStack.length || listStack[listStack.length - 1].type !== type) {
          listStack.push({ type, indent });
          result.push(`<${type}>`);
        }
      }

      result.push(`<li>${content}</li>`);
      continue;
    }

    if (!paragraphOpen) {
      closeLists(0);
      result.push('<p>');
      paragraphOpen = true;
    }
    result.push(inlineTransform(line.trim()) + ' ');
  }

  closeParagraph();
  closeLists(0);
  return result.join('');
};

const LoginScreen: React.FC<{
  username: string;
  password: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: () => void;
  error: string;
}> = ({ username, password, onUsernameChange, onPasswordChange, onSubmit, error }) => (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
      <h1 className="text-3xl font-extrabold text-cyan-700 mb-4">Ingreso Seguro</h1>
      <p className="text-sm text-slate-500 mb-6">Ingrese su usuario y contraseña para acceder al sistema de diagnóstico.</p>
      <label className="block mb-4">
        <span className="text-sm font-medium text-slate-700">Usuario</span>
        <input
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="user"
        />
      </label>
      <label className="block mb-6">
        <span className="text-sm font-medium text-slate-700">Contraseña</span>
        <input
          type="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="pass"
        />
      </label>
      {error && <p className="text-sm text-rose-600 mb-4">{error}</p>}
      <button
        onClick={onSubmit}
        className="w-full rounded-xl bg-cyan-600 text-white font-semibold py-3 hover:bg-cyan-700 transition"
      >
        Iniciar sesión
      </button>
      <p className="text-xs text-slate-500 mt-4">Credenciales por defecto: usuario <strong>user</strong> y contraseña <strong>pass</strong>.</p>
    </div>
  </div>
);

const ApiKeySettings: React.FC<{ apiKey: string; onChange: (value: string) => void; onSave: () => void; saved: boolean }> = ({ apiKey, onChange, onSave, saved }) => {
  const [isEditing, setIsEditing] = useState(!saved);

  useEffect(() => {
    setIsEditing(!saved);
  }, [saved]);

  return (
    <div className="max-w-5xl mx-auto mb-8 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Clave Gemini para {getModeLabel()}</h2>
          <p className="text-sm text-gray-500 mt-1">
            Guarda aquí tu clave Gemini para usarse en este modo. Si no hay clave disponible, el diagnóstico continúa pero las funciones de IA mostrarán un error.
          </p>
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-[1fr_auto]">
              <input
                value={apiKey}
                onChange={(e) => onChange(e.target.value)}
                type="password"
                placeholder="Ingresa tu clave Gemini"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                onClick={onSave}
                className="rounded-lg bg-cyan-600 text-white font-semibold px-6 py-3 hover:bg-cyan-700 transition"
              >
                Guardar y continuar
              </button>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-900 mb-2">¿CÓMO OBTENER TU API KEY?</p>
              <ol className="list-decimal list-inside space-y-1 text-slate-600">
                <li>Ve a <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-cyan-600 hover:underline">aistudio.google.com/app/apikey</a></li>
                <li>Haz clic en <strong>Create API Key</strong></li>
                <li>Copia la clave y pégala en el campo de arriba</li>
              </ol>
              <p className="text-xs text-slate-500 mt-3">La clave se guarda solo en tu navegador (localStorage). Es gratuita con límites generosos.</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm text-emerald-600">Clave guardada correctamente en LocalStorage para {getModeLabel()}.</p>
            <button
              onClick={() => setIsEditing(true)}
              className="rounded-lg border border-cyan-600 text-cyan-600 font-semibold px-6 py-3 hover:bg-cyan-50 transition"
            >
              Editar clave
            </button>
          </div>
        )}

        {!saved && !isEditing && (
          <p className="text-sm text-amber-700">Sin clave Gemini guardada. La IA no estará disponible hasta que ingreses una clave.</p>
        )}
      </div>
    </div>
  );
};

// --- New UI Components for Dashboard and History ---

const Dashboard: React.FC<{
  companies: ICompanyListItem[],
  onNew: () => void,
  onViewHistory: (companyId: string) => void,
  onOpenManualAll: () => void,
  onOpenManualSustainable: () => void,
  showSustainableManual: boolean,
}> = ({ companies, onNew, onViewHistory, onOpenManualAll, onOpenManualSustainable, showSustainableManual }) => (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg animate-fade-in border border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-6 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Panel de Diagnósticos</h2>
              <p className="text-sm text-gray-500 mt-2">Accede a tus diagnósticos guardados o crea uno nuevo.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button onClick={onOpenManualAll} className="bg-slate-100 text-slate-800 font-semibold py-2.5 px-5 rounded-lg hover:bg-slate-200 transition-colors shadow-sm">
                Tutorial de manejo de la aplicación
              </button>
              {showSustainableManual && (
                <button onClick={onOpenManualSustainable} className="bg-slate-100 text-slate-800 font-semibold py-2.5 px-5 rounded-lg hover:bg-slate-200 transition-colors shadow-sm text-center leading-tight">
                  Manual NTC<br />6496/6503
                </button>
              )}
              <button onClick={onNew} className="bg-cyan-600 text-white font-bold py-2.5 px-6 rounded-lg hover:bg-cyan-700 transition-colors shadow-sm hover:shadow-md">
                + Nuevo Diagnóstico
              </button>
            </div>
        </div>
        {companies.length > 0 ? (
            <ul className="space-y-4">
                {companies.map(c => (
                    <li key={c.companyId} className="p-4 border border-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-50 hover:shadow-sm transition-all">
                        <div>
                            <p className="font-bold text-gray-800">{c.companyName}</p>
                            <p className="text-sm text-gray-500">
                                ID: {c.companyId} | <span className="font-semibold text-teal-700">{c.standardName}</span> | {c.reportCount} informe(s) | Último: {new Date(c.lastReportDate).toLocaleDateString('es-ES')}
                            </p>
                        </div>
                        <button onClick={() => onViewHistory(c.companyId)} className="font-semibold text-cyan-600 hover:text-cyan-800">
                            Ver Historial &rarr;
                        </button>
                    </li>
                ))}
            </ul>
        ) : (
            <div className="text-center py-10">
                <p className="text-gray-500">No hay diagnósticos guardados.</p>
                <p className="mt-2 text-gray-500">Haz clic en "Nuevo Diagnóstico" para comenzar.</p>
            </div>
        )}
    </div>
);

const HistoryView: React.FC<{
    history: ISavedDiagnostic[],
    onViewReport: (report: ISavedDiagnostic) => void,
    onBack: () => void
}> = ({ history, onViewReport, onBack }) => (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg animate-fade-in border border-gray-200">
        <div className="flex items-center border-b pb-4 mb-6">
            <button onClick={onBack} className="mr-4 text-cyan-600 hover:text-cyan-800 font-semibold">&larr; Volver</button>
            <h2 className="text-3xl font-bold text-gray-800">Historial de: {history[0]?.demographics.companyName || 'Empresa'}</h2>
        </div>
        <ul className="space-y-4">
            {history.map(report => (
                <li key={report.id} className="p-4 border border-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-50 hover:shadow-sm transition-all">
                    <div>
                        <p className="font-bold text-gray-800">Informe del {new Date(report.savedAt).toLocaleString('es-ES')}</p>
                        <p className="text-sm text-gray-500">
                          Estándar: <span className="font-semibold text-teal-700">{STANDARDS_CONFIG[report.demographics.standard]?.name || 'Desconocido'}</span> | Cumplimiento: {report.results.totalPercentage.toFixed(0)}%
                        </p>
                    </div>
                    <button onClick={() => onViewReport(report)} className="font-semibold text-cyan-600 hover:text-cyan-800">
                        Ver Informe &rarr;
                    </button>
                </li>
            ))}
        </ul>
    </div>
);

const StandardSelection: React.FC<{
    onSelect: (standard: IsoStandard) => void;
    onBack: () => void;
    onViewDetails: (standardKey: IsoStandard) => void;
    onConsultAI: (standardKey: IsoStandard) => void;
}> = ({ onSelect, onBack, onViewDetails, onConsultAI }) => (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg animate-fade-in border border-gray-200">
        <div className="flex items-center border-b pb-4 mb-4">
            <button onClick={onBack} className="mr-4 text-cyan-600 hover:text-cyan-800 font-semibold">&larr; Volver al Panel</button>
            <h2 className="text-3xl font-bold text-gray-800">Seleccione una Norma</h2>
        </div>
         <p className="text-gray-600 mb-8">Elija el estándar de calidad que desea utilizar para este diagnóstico.</p>
        <div className="grid md:grid-cols-3 gap-6">
            {(Object.keys(STANDARDS_CONFIG) as IsoStandard[]).map(key => {
                const standard = STANDARDS_CONFIG[key];
                return (
                    <div key={key} className="group border border-gray-200 rounded-xl p-6 flex flex-col hover:shadow-xl hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-1">
                        <h3 className="text-xl font-bold text-cyan-700">{standard.name}</h3>
                        <p className="text-gray-600 text-sm mt-2 flex-grow">{standard.description}</p>
                        <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                             <button 
                                onClick={() => onViewDetails(key)} 
                                className="w-full text-sm text-cyan-700 font-semibold hover:text-cyan-900 transition-colors text-left p-1">
                                Ver detalle de la norma
                            </button>
                            <button 
                                onClick={() => onConsultAI(key)} 
                                className="w-full text-sm text-cyan-700 font-semibold hover:text-cyan-900 transition-colors flex items-center gap-2 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                Consultar dudas con la IA
                            </button>
                        </div>
                        <button 
                            onClick={() => onSelect(key)} 
                            className="mt-4 w-full bg-gray-800 text-white font-bold py-2.5 px-4 rounded-lg group-hover:bg-cyan-600 transition-colors duration-300">
                            Iniciar Diagnóstico con esta Norma
                        </button>
                    </div>
                );
            })}
        </div>
    </div>
);


// --- Main App Component ---
type Step = 'dashboard' | 'standard_selection' | 'demographics' | 'questionnaire' | 'generating' | 'results' | 'history' | 'viewing_report';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('dashboard');
  const [apiKey, setApiKey] = useState('');
  const [apiKeySaved, setApiKeySaved] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  // DB state
  const [companies, setCompanies] = useState<ICompanyListItem[]>([]);
  const [currentHistory, setCurrentHistory] = useState<ISavedDiagnostic[]>([]);
  const [viewingReport, setViewingReport] = useState<ISavedDiagnostic | null>(null);

  // Form state
  const [selectedStandard, setSelectedStandard] = useState<IsoStandard | null>(null);
  const [demographics, setDemographics] = useState<IDemographics | null>(null);
  const [activeClauseIndex, setActiveClauseIndex] = useState(0);
  const [comments, setComments] = useState<CommentsState>({});
  const [checklistAnswers, setChecklistAnswers] = useState<ChecklistAnswersState>({});
  
  // Comparison state
  const [previousDiagnosticForComparison, setPreviousDiagnosticForComparison] = useState<ISavedDiagnostic | null>(null);
  const [isContinuingLastDiagnostic, setIsContinuingLastDiagnostic] = useState(false);

  // Results state
  const [results, setResults] = useState<IResults | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Chat state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeChat, setActiveChat] = useState<'clause' | 'action_plan' | 'standard' | null>(null);
  const [chatTitle, setChatTitle] = useState('');
  const [currentChatContext, setCurrentChatContext] = useState<IChatContext | null>(null);
  const [currentStandardChatContext, setCurrentStandardChatContext] = useState<IsoStandard | null>(null);
  const [chatHistory, setChatHistory] = useState<IChatMessage[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [chatHistories, setChatHistories] = useState<ChatHistories>({});
  type ManualView = 'all' | 'sustainable' | null;
  const [manualView, setManualView] = useState<ManualView>(null);

  // Standard Detail Modal state
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [activeStandardDetails, setActiveStandardDetails] = useState<{ title: string; content: string } | null>(null);
  
  const questionnaireData = useMemo((): IClause[] => {
      const standard = step === 'viewing_report' ? viewingReport?.demographics.standard : selectedStandard;
      if (!standard) return [];
      return getQuestionnaireData(standard);
  }, [step, selectedStandard, viewingReport]);


  useEffect(() => {
    if (import.meta.env.VITE_APP_TITLE) {
      document.title = import.meta.env.VITE_APP_TITLE;
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedKey = localStorage.getItem(getApiKeyStorageKey());
      if (storedKey) {
        setApiKey(storedKey);
        setApiKeySaved(true);
      } else {
        setApiKey('');
        setApiKeySaved(false);
      }

      const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
      setIsAuthenticated(storedAuth === 'true');
    }
  }, []);

  const handleApiKeyChange = (value: string) => {
    setApiKey(value);
    setApiKeySaved(false);
  };

  const handleSaveApiKey = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (apiKey.trim()) {
        localStorage.setItem(getApiKeyStorageKey(), apiKey.trim());
        setApiKeySaved(true);
      } else {
        localStorage.removeItem(getApiKeyStorageKey());
        setApiKeySaved(false);
      }
    }
  };

  const handleLoginSubmit = () => {
    if (loginUsername === AUTH_CREDENTIALS.username && loginPassword === AUTH_CREDENTIALS.password) {
      setIsAuthenticated(true);
      setLoginError('');
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      }
    } else {
      setLoginError('Usuario o contraseña incorrectos.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  };

  useEffect(() => {
    // Load initial data from db (async)
    if (step === 'dashboard') {
        db.getCompanyList().then(list => setCompanies(list));
    }
  }, [step]);
  
  const resetQuestionnaireState = () => {
    setDemographics(null);
    setComments({});
    setChecklistAnswers({});
    setResults(null);
    setError(null);
    setActiveClauseIndex(0);
    setViewingReport(null);
    setCurrentHistory([]);
    setPreviousDiagnosticForComparison(null);
    setIsContinuingLastDiagnostic(false);
    setChatHistories({});
    setSelectedStandard(null);
  }

  const handleStartNew = () => {
    resetQuestionnaireState();
    const availableStandards = Object.keys(STANDARDS_CONFIG) as IsoStandard[];
    if (availableStandards.length === 1) {
        handleStandardSelect(availableStandards[0]);
    } else {
        setStep('standard_selection');
    }
    window.scrollTo(0, 0);
  };
  
  const handleBackToDashboard = () => {
      resetQuestionnaireState();
      setStep('dashboard');
  }

  const handleOpenManual = () => {
      setManualView('all');
  };

  const handleOpenManualSustainable = () => {
      setManualView('sustainable');
  };

  const handleCloseManual = () => {
      setManualView(null);
  };

  const handleStandardSelect = (standard: IsoStandard) => {
    setSelectedStandard(standard);
    setStep('demographics');
    window.scrollTo(0, 0);
  };

  const handleViewHistory = async (companyId: string) => {
    const history = await db.getCompanyHistory(companyId);
    setCurrentHistory(history);
    setStep('history');
  }

  const handleViewReport = (report: ISavedDiagnostic) => {
    setViewingReport(report);
    setStep('viewing_report');
    window.scrollTo(0, 0);
  };

  const handleDemographicsSubmit = async (data: IDemographics) => {
    setDemographics(data);
    const previousReport = await db.getLatestDiagnostic(data.companyId, data.standard);
    setPreviousDiagnosticForComparison(previousReport);
    setIsContinuingLastDiagnostic(false);
    // Explicitly reset for a completely new report
    setComments({});
    setChecklistAnswers({});
    setChatHistories({});
    setStep('questionnaire');
    window.scrollTo(0, 0);
  };
  
  const handleLoadAndSubmit = (diagnostic: ISavedDiagnostic) => {
    setPreviousDiagnosticForComparison(diagnostic);
    setSelectedStandard(diagnostic.demographics.standard);
    setDemographics(diagnostic.demographics);
    setComments(diagnostic.comments);
    setChecklistAnswers(diagnostic.checklistAnswers);
    setChatHistories(diagnostic.chatHistories || {});
    setIsContinuingLastDiagnostic(true);
    setStep('questionnaire');
    window.scrollTo(0, 0);
  };
  
  const handleBackToDemographics = () => {
      setStep('demographics');
      window.scrollTo(0, 0);
  }

  const handleCommentChange = (clauseId: string, text: string) => {
    setComments(prev => ({ ...prev, [clauseId]: text }));
  };

  const handleChecklistChange = (evidenceId: string, status: EvidenceStatus) => {
    setChecklistAnswers(prev => ({ ...prev, [evidenceId]: status }));
  };
  
  const isClauseComplete = useMemo(() => {
    if (!questionnaireData || questionnaireData.length === 0) return false;
    const currentClause = questionnaireData[activeClauseIndex];
    if (!currentClause) return false;

    return currentClause.questions.every(q => {
        return q.evidence.every(e => checklistAnswers[e.id] !== undefined);
    });
  }, [activeClauseIndex, checklistAnswers, questionnaireData]);
  
  const handleNextClause = () => {
    if (activeClauseIndex < questionnaireData.length - 1) {
        setActiveClauseIndex(prev => prev + 1);
        window.scrollTo(0, 0);
    }
  };

  const handlePreviousClause = () => {
      if (activeClauseIndex > 0) {
          setActiveClauseIndex(prev => prev - 1);
          window.scrollTo(0, 0);
      }
  }

  const calculateScores = (): Omit<IResults, 'actionPlan' | 'reportDate' | 'comparison'> => {
    let totalScore = 0;
    let totalMaxScore = 0;

    const clauseScores = questionnaireData.map(clause => {
      let clauseScore = 0;
      let clauseMaxScore = 0;

      clause.questions.forEach(question => {
        question.evidence.forEach(evidence => {
            const status = checklistAnswers[evidence.id];
            if (status && status !== 'not_applicable') {
                clauseScore += EVIDENCE_POINTS[status] || 0;
                clauseMaxScore += EVIDENCE_POINTS['implemented'];
            }
        });
      });
      
      totalScore += clauseScore;
      totalMaxScore += clauseMaxScore;

      return {
        clauseId: clause.id,
        clauseTitle: clause.title,
        score: clauseScore,
        maxScore: clauseMaxScore,
        percentage: clauseMaxScore > 0 ? (clauseScore / clauseMaxScore) * 100 : 100,
      };
    });

    const totalPercentage = totalMaxScore > 0 ? (totalScore / totalMaxScore) * 100 : 100;

    return { totalPercentage, clauseScores };
  }

  const handleGenerateDiagnosis = async () => {
    if (!demographics || !selectedStandard) return;
    
    setStep('generating');
    setError(null);
    window.scrollTo(0, 0);

    const calculatedScores = calculateScores();
    let comparisonData: IComparisonData | undefined = undefined;

    if (previousDiagnosticForComparison) {
        const prevResults = previousDiagnosticForComparison.results;
        const clauseComparisons = calculatedScores.clauseScores.map(currentScore => {
            const prevScore = prevResults.clauseScores.find(ps => ps.clauseId === currentScore.clauseId);
            const previousPercentage = prevScore?.percentage ?? 0;
            return {
                clauseId: currentScore.clauseId,
                previousPercentage: previousPercentage,
                currentPercentage: currentScore.percentage,
                change: currentScore.percentage - previousPercentage,
            };
        });
        comparisonData = {
            previousReportDate: previousDiagnosticForComparison.savedAt,
            previousTotalPercentage: prevResults.totalPercentage,
            currentTotalPercentage: calculatedScores.totalPercentage,
            totalChange: calculatedScores.totalPercentage - prevResults.totalPercentage,
            clauseComparisons: clauseComparisons,
        };
    }

    const finalResults: IResults = { 
        ...calculatedScores, 
        actionPlan: null, 
        reportDate: new Date().toISOString(),
        comparison: comparisonData
    };

    try {
      const standardName = STANDARDS_CONFIG[selectedStandard].name;
      const plan = await generateActionPlan(demographics, standardName, finalResults, comments, checklistAnswers, questionnaireData);
      finalResults.actionPlan = plan;
    } catch (err) {
      console.error("AI Service Error:", err);
      setError("No se pudo generar el plan de acción con IA. Se mostrará solo el diagnóstico numérico.");
    } finally {
        setResults(finalResults);
        setStep('results');
    }
  };
  
  const handleSaveAndFinish = async () => {
      if (!demographics || !results) return;
      await db.saveDiagnostic(demographics, results, comments, checklistAnswers, chatHistories);
      handleBackToDashboard();
  }

  // --- Handlers for Standard Details ---
  const handleOpenStandardDetails = (standardKey: IsoStandard) => {
    const standard = STANDARDS_CONFIG[standardKey];
    if (standard) {
        setActiveStandardDetails({ title: standard.name, content: standard.detailsHTML });
        setIsDetailModalOpen(true);
    }
  };

  const handleCloseStandardDetails = () => {
    setIsDetailModalOpen(false);
    setActiveStandardDetails(null);
  };

  // --- Chat Handlers ---
  const handleOpenClauseChat = (context: IChatContext) => {
    const contextId = context.clauseId;
    let history: IChatMessage[] = [];
    if (step === 'viewing_report' && viewingReport) {
        history = viewingReport.chatHistories?.[contextId] || [];
    } else {
        history = chatHistories[contextId] || [];
    }
    
    setCurrentChatContext(context);
    setActiveChat('clause');
    setChatTitle(context.clauseTitle);
    setChatHistory(history);
    setIsChatOpen(true);
  };

  const handleOpenActionPlanChat = (plan: IActionPlan | null) => {
    if (!plan) return;
    const contextId = 'action_plan';
    let history: IChatMessage[] = [];

    if (step === 'viewing_report' && viewingReport) {
        history = viewingReport.chatHistories?.[contextId] || [];
    } else { // 'results' step
        history = chatHistories[contextId] || [];
    }

    setCurrentChatContext(null);
    setActiveChat('action_plan');
    setChatTitle('Sobre el Plan de Acción');
    setChatHistory(history);
    setIsChatOpen(true);
  };

  const handleOpenStandardChat = (standardKey: IsoStandard) => {
    const standard = STANDARDS_CONFIG[standardKey];
    if (!standard) return;
    
    setCurrentStandardChatContext(standardKey);
    setActiveChat('standard');
    setChatTitle(`Dudas sobre ${standard.name}`);
    setChatHistory([]); // Start with a fresh, ephemeral history
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setCurrentChatContext(null);
    setCurrentStandardChatContext(null);
    setChatHistory([]);
    setActiveChat(null);
    setChatTitle('');
  };

  const handleSendChatMessage = async (message: string, file?: IChatFile) => {
    if (!activeChat) return;

    const userMessage: IChatMessage = { sender: 'user', text: message, file };
    const fullHistorySoFar: IChatMessage[] = [...chatHistory, userMessage];
    setChatHistory(fullHistorySoFar);
    setIsChatLoading(true);

    try {
        let aiResponse = '';

        if (activeChat === 'standard' && currentStandardChatContext) {
            aiResponse = await generateStandardChatResponse(currentStandardChatContext, fullHistorySoFar);
            const aiMessage: IChatMessage = { sender: 'ai', text: aiResponse };
            setChatHistory(prev => [...prev, aiMessage]);
            setIsChatLoading(false);
            return; // NOTE: Standard chat is ephemeral and not saved to DB.
        }
        
        const contextId = (activeChat === 'clause' && currentChatContext) ? currentChatContext.clauseId : 'action_plan';

        if (activeChat === 'clause' && currentChatContext) {
            aiResponse = await generateChatResponse(currentChatContext, fullHistorySoFar, questionnaireData);
        } else if (activeChat === 'action_plan') {
            const planToDiscuss = (step === 'viewing_report' ? viewingReport?.results.actionPlan : results?.actionPlan);
            if(planToDiscuss){
                 aiResponse = await generateActionPlanChatResponse(planToDiscuss, fullHistorySoFar);
            } else {
                 throw new Error("Plan de acción no disponible para el chat.");
            }
        } else {
            throw new Error("Contexto de chat inválido.");
        }
        
        const aiMessage: IChatMessage = { sender: 'ai', text: aiResponse };
        const finalHistory: IChatMessage[] = [...fullHistorySoFar, aiMessage];
        setChatHistory(finalHistory);

        // Persist the updated history
        if (step === 'viewing_report' && viewingReport) {
            const updatedHistories: ChatHistories = { ...(viewingReport.chatHistories || {}), [contextId]: finalHistory };
            const updatedReport: ISavedDiagnostic = { ...viewingReport, chatHistories: updatedHistories };
            setViewingReport(updatedReport);
            await db.updateDiagnostic(updatedReport);
        } else if (step === 'questionnaire' || step === 'results') {
            setChatHistories(prev => ({ ...prev, [contextId]: finalHistory }));
        }

    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : "Lo siento, no pude procesar tu pregunta en este momento.";
        const aiErrorMessage: IChatMessage = { sender: 'ai', text: errorMessage };
        setChatHistory(prev => [...prev, aiErrorMessage]);
    } finally {
        setIsChatLoading(false);
    }
  };


  const handleFabClick = () => {
    if (step === 'questionnaire') {
        const currentClause = questionnaireData[activeClauseIndex];
        handleOpenClauseChat({ clauseId: currentClause.id, clauseTitle: currentClause.title });
    } else if ((step === 'results' && results?.actionPlan) || (step === 'viewing_report' && viewingReport?.results.actionPlan)) {
        const plan = results?.actionPlan || viewingReport?.results.actionPlan;
        handleOpenActionPlanChat(plan);
    }
  };
  
  const renderQuestionnaire = () => {
    if (questionnaireData.length === 0) return null;
    
    const currentClause = questionnaireData[activeClauseIndex];
    const progressPercentage = ((activeClauseIndex + 1) / questionnaireData.length) * 100;

    return (
      <div>
        <button 
          onClick={handleBackToDashboard} 
          className="text-cyan-600 hover:text-cyan-800 font-semibold mb-6 flex items-center gap-2 print:hidden"
        >
          &larr; Volver al Panel
        </button>
        {/* Progress Bar */}
        <div className="mb-6">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-cyan-700">Progreso del Diagnóstico</span>
                <span className="text-sm font-medium text-cyan-700">{activeClauseIndex + 1} de {questionnaireData.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-cyan-600 h-2.5 rounded-full" style={{width: `${progressPercentage}%`}}></div>
            </div>
        </div>

        <div className="max-w-4xl mx-auto">
            <ClauseCard
              key={currentClause.id}
              clause={currentClause}
              comment={comments[currentClause.id] || ''}
              checklistAnswers={checklistAnswers}
              onCommentChange={handleCommentChange}
              onChecklistChange={handleChecklistChange}
            />
        </div>
        
        {/* Navigation */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
                {activeClauseIndex > 0 ? (
                     <button onClick={handlePreviousClause} className="px-6 py-3 font-bold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Cláusula Anterior</button>
                ) : (
                     !isContinuingLastDiagnostic && (
                         <button onClick={handleBackToDemographics} className="px-6 py-3 font-bold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Volver a Datos</button>
                     )
                )}
            </div>
            <div>
                {activeClauseIndex < questionnaireData.length - 1 ? (
                    <button onClick={handleNextClause} disabled={!isClauseComplete} className={`w-full md:w-auto px-8 py-3 text-lg font-bold text-white rounded-lg transition-all duration-300 ${isClauseComplete ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-gray-400 cursor-not-allowed'}`}>Siguiente Cláusula</button>
                ) : (
                    <button onClick={handleGenerateDiagnosis} disabled={!isClauseComplete} className={`w-full md:w-auto px-8 py-3 text-lg font-bold text-white rounded-lg transition-all duration-300 ${isClauseComplete ? 'bg-emerald-600 hover:bg-emerald-700 shadow-lg' : 'bg-gray-400 cursor-not-allowed'}`}>Generar Diagnóstico y Plan</button>
                )}
            </div>
        </div>
        {!isClauseComplete && (
            <p className="text-center text-sm text-amber-700 mt-4">
                Por favor, completa toda la lista de chequeo de la cláusula actual para continuar.
            </p>
        )}
      </div>
    );
  }
  
  const renderStep = () => {
    switch(step) {
      case 'dashboard':
          return <Dashboard companies={companies} onNew={handleStartNew} onViewHistory={handleViewHistory} onOpenManualAll={handleOpenManual} onOpenManualSustainable={handleOpenManualSustainable} showSustainableManual={true} />;
      case 'standard_selection':
          return <StandardSelection 
                    onSelect={handleStandardSelect} 
                    onBack={handleBackToDashboard}
                    onViewDetails={handleOpenStandardDetails}
                    onConsultAI={handleOpenStandardChat}
                 />;
      case 'history':
          return <HistoryView history={currentHistory} onViewReport={handleViewReport} onBack={handleBackToDashboard} />;
      case 'viewing_report':
          return viewingReport && (
                <div className="max-w-5xl mx-auto">
                    <ResultsDisplay 
                        mode="view"
                        results={viewingReport.results} 
                        demographics={viewingReport.demographics} 
                        onBackToHistory={() => handleViewHistory(viewingReport.demographics.companyId)}
                        error={null} 
                        onOpenClauseChat={handleOpenClauseChat}
                    />
                </div>
          );
      case 'demographics':
        return <DemographicsForm
                  onSubmit={handleDemographicsSubmit}
                  onLoadAndSubmit={handleLoadAndSubmit}
                  initialData={demographics}
                  standard={selectedStandard}
                  onBackToDashboard={handleBackToDashboard}
               />;
      case 'questionnaire':
        return renderQuestionnaire();
      case 'generating':
            return (
                <div className="text-center p-12 bg-white rounded-lg shadow-md max-w-md mx-auto">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto"></div>
                    <h2 className="mt-6 text-2xl font-semibold text-gray-700">Analizando Respuestas...</h2>
                    <p className="mt-2 text-gray-500">Nuestra IA está generando un plan de acción personalizado para su organización. Esto puede tardar unos segundos.</p>
                </div>
            );
        case 'results':
            return results && demographics ? (
                <div className="max-w-5xl mx-auto">
                    <ResultsDisplay 
                        mode="new"
                        results={results} 
                        demographics={demographics} 
                        onSaveAndFinish={handleSaveAndFinish}
                        error={error} 
                        onOpenClauseChat={handleOpenClauseChat}
                    />
                </div>
            ) : null;
        default:
            return null;
    }
  }

  if (!isAuthenticated) {
    return (
      <LoginScreen
        username={loginUsername}
        password={loginPassword}
        onUsernameChange={setLoginUsername}
        onPasswordChange={setLoginPassword}
        onSubmit={handleLoginSubmit}
        error={loginError}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 print:hidden">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">
              {import.meta.env.VITE_APP_TITLE || 'Plataforma de Diagnóstico de Calidad'}
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              {import.meta.env.VITE_APP_MODE === 'sustainable'
                ? 'Autoevaluación de Sostenibilidad con Historial y Plan de Acción por IA'
                : 'Autoevaluación con Historial y Plan de Acción por IA'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {step !== 'dashboard' && (
              <button 
                onClick={handleBackToDashboard} 
                className="rounded-lg bg-cyan-600 text-white px-5 py-3 text-sm font-semibold hover:bg-cyan-700 transition shadow-sm"
              >
                Volver al Panel
              </button>
            )}
            <button onClick={handleLogout} className="rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 transition">
              Cerrar sesión
            </button>
          </div>
        </div>

        <ApiKeySettings apiKey={apiKey} onChange={handleApiKeyChange} onSave={handleSaveApiKey} saved={apiKeySaved} />

        {renderStep()}

      </main>
       <footer className="text-center py-6 mt-8 border-t border-gray-200 print:hidden">
         <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Plataforma de Diagnóstico. Potenciado por Gemini.</p>
       </footer>
       
       {(step === 'questionnaire' || (step === 'results' && results?.actionPlan) || step === 'viewing_report') && (
            <button
              onClick={handleFabClick}
              className="fixed bottom-6 left-6 bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-4 rounded-full shadow-lg hover:from-teal-600 hover:to-cyan-700 transition-all transform hover:scale-110 z-40 print:hidden"
              aria-label="Consultar al Asistente IA"
              title="Consultar al Asistente IA"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </button>
        )}

       {isChatOpen && (
         <ChatModal
            isOpen={isChatOpen}
            onClose={handleCloseChat}
            title={chatTitle}
            history={chatHistory}
            isLoading={isChatLoading}
            onSendMessage={handleSendChatMessage}
         />
       )}

       {isDetailModalOpen && activeStandardDetails && (
            <StandardDetailModal
                isOpen={isDetailModalOpen}
                onClose={handleCloseStandardDetails}
                title={activeStandardDetails.title}
                contentHTML={activeStandardDetails.content}
            />
        )}

       {manualView && (
            <StandardDetailModal
                isOpen={Boolean(manualView)}
                onClose={handleCloseManual}
                title={manualView === 'all' ? 'Tutorial de manejo de la aplicación' : 'Manual NTC 6496/6503'}
                contentHTML={
                  manualView === 'all'
                    ? markdownToHtml(tutorialManualContent)
                    : `
                      <style>
                        .manual-container h1, .manual-container h2, .manual-container h3, .manual-container h4 {
                          font-family: 'Poppins', sans-serif;
                          font-weight: 700;
                          color: #0e7490;
                          margin-top: 1.5rem;
                          margin-bottom: 0.75rem;
                        }
                        .manual-container h1 { font-size: 1.75rem; border-b: 2px solid #e2e8f0; padding-bottom: 0.5rem; margin-top: 0; }
                        .manual-container h2 { font-size: 1.5rem; border-b: 1px solid #f1f5f9; padding-bottom: 0.25rem; }
                        .manual-container h3 { font-size: 1.25rem; }
                        .manual-container p { margin-bottom: 1rem; color: #475569; line-height: 1.6; }
                        .manual-container ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem; }
                        .manual-container ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1rem; }
                        .manual-container li { margin-bottom: 0.35rem; color: #475569; }
                        .manual-container hr { margin: 2rem 0; border: 0; border-top: 1px solid #e2e8f0; }
                        .manual-container strong { font-weight: 600; color: #0f172a; }
                        .manual-container blockquote {
                          border-left: 4px solid #0e7490;
                          background-color: #f8fafc;
                          padding: 0.75rem 1rem;
                          margin-bottom: 1rem;
                          font-style: italic;
                        }
                      </style>
                      <div class="manual-container animate-fade-in">
                        <div class="mb-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-cyan-100 shadow-sm">
                          <h2 class="text-2xl font-bold text-cyan-800 mb-4 mt-0">Componentes de las Normas de Sostenibilidad</h2>
                          <div class="grid md:grid-cols-2 gap-6">
                            <div class="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                              <h3 class="text-xl font-bold text-teal-700 mt-0 mb-2">NTC 6496: Gastronomía Sostenible</h3>
                              <p class="text-sm text-slate-600 mb-4">Requisitos en dimensiones ambiental, sociocultural y económica para el sector gastronómico.</p>
                              <div class="space-y-3">
                                <div class="flex gap-2">
                                  <span class="text-teal-600 font-bold">🌿</span>
                                  <p class="text-xs text-slate-700 m-0"><strong>Dimensión Ambiental:</strong> Ahorro de agua y energía, gestión de residuos orgánicos, compras sostenibles.</p>
                                </div>
                                <div class="flex gap-2">
                                  <span class="text-teal-600 font-bold">🤝</span>
                                  <p class="text-xs text-slate-700 m-0"><strong>Dimensión Sociocultural:</strong> Empleo local, condiciones laborales justas, preservación del patrimonio gastronómico.</p>
                                </div>
                                <div class="flex gap-2">
                                  <span class="text-teal-600 font-bold">📈</span>
                                  <p class="text-xs text-slate-700 m-0"><strong>Dimensión Económica:</strong> Rentabilidad del negocio, calidad de servicio y seguridad alimentaria.</p>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                              <h3 class="text-xl font-bold text-teal-700 mt-0 mb-2">NTC 6503: Turismo Sostenible</h3>
                              <p class="text-sm text-slate-600 mb-4">Requisitos de sostenibilidad para establecimientos de alojamiento y hospedaje.</p>
                              <div class="space-y-3">
                                <div class="flex gap-2">
                                  <span class="text-teal-600 font-bold">🌊</span>
                                  <p class="text-xs text-slate-700 m-0"><strong>Requisitos Ambientales:</strong> Eficiencia energética y de agua, gestión integral de residuos (peligrosos).</p>
                                </div>
                                <div class="flex gap-2">
                                  <span class="text-teal-600 font-bold">🎭</span>
                                  <p class="text-xs text-slate-700 m-0"><strong>Requisitos Socioculturales:</strong> Fomento de cultura local, capacitación en sostenibilidad, empleo a comunidades locales.</p>
                                </div>
                                <div class="flex gap-2">
                                  <span class="text-teal-600 font-bold">💼</span>
                                  <p class="text-xs text-slate-700 m-0"><strong>Gestión Sostenible:</strong> Políticas de compras verdes, monitoreo de huella de carbono, satisfacción del huésped.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        ${markdownToHtml(sustainableManualContent)}
                      </div>
                    `
                }
            />
        )}
    </div>
  );
};

export default App;