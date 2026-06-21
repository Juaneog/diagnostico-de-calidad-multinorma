import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { IResults, IClauseScore, IDemographics, IChatContext, IComparisonData, IClauseComparison } from '../types';
import ActionPlanDisplay from './ActionPlanDisplay';

interface ResultsDisplayProps {
  mode: 'new' | 'view';
  results: IResults;
  demographics: IDemographics;
  onSaveAndFinish?: () => void;
  onBackToHistory?: () => void;
  onOpenClauseChat: (context: IChatContext) => void;
  error?: string | null;
  isSaving?: boolean;
}

const getBarColor = (percentage: number): string => {
  if (percentage >= 80) return 'bg-emerald-500';
  if (percentage >= 50) return 'bg-yellow-500';
  return 'bg-red-500';
};

const ClauseResultBar: React.FC<{
  clauseScore: IClauseScore;
  comparison?: IClauseComparison;
  onOpenClauseChat: (context: IChatContext) => void;
}> = ({ clauseScore, comparison, onOpenClauseChat }) => {
  const barColor = getBarColor(clauseScore.percentage);
  
  const change = comparison ? comparison.change : 0;
  const changeText = change >= 0 ? `+${change.toFixed(0)}%` : `${change.toFixed(0)}%`;
  const changeColor = change > 0 ? 'text-emerald-600' : change < 0 ? 'text-red-600' : 'text-gray-500';

  return (
    <div className="mb-4 report-section">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">{clauseScore.clauseTitle}</span>
            <button 
                onClick={() => onOpenClauseChat({ clauseId: clauseScore.clauseId, clauseTitle: clauseScore.clauseTitle })}
                className="p-1 rounded-full text-cyan-600 hover:bg-cyan-100 transition-colors print:hidden no-pdf"
                title={`Consultar a la IA sobre ${clauseScore.clauseTitle}`}
                aria-label={`Consultar a la IA sobre ${clauseScore.clauseTitle}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            </button>
        </div>
        <span className="font-bold text-sm">
            {clauseScore.percentage.toFixed(0)}%
            {comparison && <span className={`ml-2 text-xs font-semibold ${changeColor}`}>({changeText})</span>}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 relative">
        <div
          className={`${barColor} h-4 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${clauseScore.percentage}%` }}
        ></div>
         {comparison && (
            <div 
                className="absolute top-0 h-full w-1 bg-gray-600 opacity-60 rounded-full"
                style={{ left: `calc(${comparison.previousPercentage}% - 2px)` }}
                title={`Resultado Anterior: ${comparison.previousPercentage.toFixed(0)}%`}
            ></div>
        )}
      </div>
      {clauseScore.maxScore === 0 && (
         <p className="text-xs text-gray-500 mt-1 italic">
            Todas las evidencias en esta cláusula fueron marcadas como "No aplica".
         </p>
      )}
    </div>
  );
};

const ReportHeader: React.FC<{demographics: IDemographics, reportDate: string}> = ({demographics, reportDate}) => (
    <div className="mb-8 p-6 rounded-xl bg-gray-50 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Informe de Diagnóstico de Calidad</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 text-sm">
            <div>
                <span className="font-semibold text-gray-600 block">Empresa:</span>
                <span className="text-gray-800">{demographics.companyName}</span>
            </div>
             <div>
                <span className="font-semibold text-gray-600 block">ID Empresa:</span>
                <span className="text-gray-800">{demographics.companyId}</span>
            </div>
            <div>
                <span className="font-semibold text-gray-600 block">Departamento:</span>
                <span className="text-gray-800">{demographics.department}</span>
            </div>
            <div>
                <span className="font-semibold text-gray-600 block">Ciudad:</span>
                <span className="text-gray-800">{demographics.city}</span>
            </div>
             <div>
                <span className="font-semibold text-gray-600 block">Fecha Informe:</span>
                <span className="text-gray-800">{new Date(reportDate).toLocaleDateString('es-ES')}</span>
            </div>
             <div>
                <span className="font-semibold text-gray-600 block">Sector:</span>
                <span className="text-gray-800">{demographics.industry}</span>
            </div>
             <div>
                <span className="font-semibold text-gray-600 block">Responsable:</span>
                <span className="text-gray-800">{demographics.responsiblePerson}</span>
            </div>
             <div>
                <span className="font-semibold text-gray-600 block">Tamaño:</span>
                <span className="text-gray-800 capitalize">{demographics.companySize}</span>
            </div>
        </div>
    </div>
);

const EvolutionSummary: React.FC<{ comparison: IComparisonData, currentPercentage: number }> = ({ comparison, currentPercentage }) => {
    const { totalChange, previousTotalPercentage, previousReportDate } = comparison;
    const isImprovement = totalChange > 0.05;
    const isDecline = totalChange < -0.05;
    
    const changeColor = isImprovement ? 'text-emerald-700' : isDecline ? 'text-red-700' : 'text-gray-600';
    const bgColor = isImprovement ? 'bg-emerald-50' : isDecline ? 'bg-red-50' : 'bg-gray-50';
    const iconColor = isImprovement ? 'text-emerald-500' : isDecline ? 'text-red-500' : 'text-gray-400';

    const Icon = () => {
        if (isImprovement) return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />;
        if (isDecline) return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />;
        return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />;
    };

    return (
        <div className={`p-4 rounded-lg ${bgColor} border border-dashed ${bgColor.replace('50', '200')} text-center h-full flex flex-col justify-center`}>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Evolución General</h4>
            <div className="flex items-baseline justify-center gap-2">
                <span className="text-3xl font-bold text-gray-800">{currentPercentage.toFixed(0)}%</span>
                <span className="text-gray-500 text-sm">vs</span>
                <span className="text-2xl text-gray-500">{previousTotalPercentage.toFixed(0)}%</span>
            </div>
            <p className="text-xs text-gray-500 mb-2">
                Actual vs. Anterior ({new Date(previousReportDate).toLocaleDateString('es-ES')})
            </p>
            <div className={`flex items-center justify-center gap-1 font-bold text-lg ${changeColor}`}>
                <svg className={`w-6 h-6 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><Icon /></svg>
                <span>{totalChange.toFixed(1)} pts</span>
            </div>
        </div>
    );
};


const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ mode, results, demographics, onSaveAndFinish, onBackToHistory, onOpenClauseChat, error, isSaving }) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const overallBarColor = getBarColor(results.totalPercentage);

  const handleGeneratePdf = async () => {
    setIsGeneratingPdf(true);
    const reportElement = document.getElementById('report-content');
    if (!reportElement) {
        console.error("No se pudo encontrar el elemento del informe.");
        setIsGeneratingPdf(false);
        return;
    }
    
    // Add PDF export class to lock layout width to a stable export size
    const originalWidth = reportElement.style.width;
    reportElement.classList.add('pdf-export-mode');
    reportElement.style.width = '820px';

    // Hide non-pdf elements (like buttons) completely to prevent empty spaces
    const elementsToHide = reportElement.querySelectorAll<HTMLElement>('.no-pdf');
    elementsToHide.forEach(el => el.style.display = 'none');

    try {
        const canvas = await html2canvas(reportElement, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            width: reportElement.offsetWidth,
            windowWidth: reportElement.offsetWidth,
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });

        const imgWidth = 180; // smaller content width for a more compact PDF
        const pageHeight = 257;
        const marginX = 10;
        const marginY = 20;

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imgHeight = (canvasHeight * imgWidth) / canvasWidth;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'JPEG', marginX, marginY, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
            position -= pageHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', marginX, marginY + position, imgWidth, imgHeight, undefined, 'FAST');
            heightLeft -= pageHeight;
        }

        pdf.save(`diagnostico-calidad-${demographics.companyName.replace(/\s/g, '_')}.pdf`);
    } catch (err) {
        console.error("Error al generar el PDF:", err);
    } finally {
        // Restore all hidden elements
        elementsToHide.forEach(el => el.style.display = '');
        reportElement.classList.remove('pdf-export-mode');
        reportElement.style.width = originalWidth;
        setIsGeneratingPdf(false);
    }
  };

  return (
    <div id="report-content" className="bg-white p-6 md:p-8 rounded-2xl shadow-xl mt-8 animate-fade-in border border-gray-200">
      <ReportHeader demographics={demographics} reportDate={results.reportDate} />
      
      {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded print:hidden no-pdf" role="alert"><p>{error}</p></div>}

      <div className="report-section mb-10">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Resumen de Cumplimiento</h3>
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="text-center p-4 border rounded-lg flex flex-col justify-center bg-white">
              <h4 className="text-lg font-semibold text-gray-600 mb-2">Nivel General Actual</h4>
              <div className="relative w-48 h-48 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                          className="text-gray-200"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                      />
                      <path
                          className={`${overallBarColor.replace('bg-', 'text-')}`}
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeDasharray={`${results.totalPercentage}, 100`}
                          strokeLinecap="round"
                          transform="rotate(90 18 18)"
                      />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-bold text-gray-700">{results.totalPercentage.toFixed(0)}<span className="text-3xl">%</span></span>
                  </div>
              </div>
          </div>
          {results.comparison && <EvolutionSummary comparison={results.comparison} currentPercentage={results.totalPercentage} />}
        </div>
      </div>
      <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Desglose por Cláusula</h4>
            {results.clauseScores.map(cs => (
                <ClauseResultBar 
                    key={cs.clauseId} 
                    clauseScore={cs} 
                    comparison={results.comparison?.clauseComparisons.find(cc => cc.clauseId === cs.clauseId)}
                    onOpenClauseChat={onOpenClauseChat} />
            ))}
      </div>

      {results.actionPlan && (
        <div className="mt-10 pt-6 border-t border-gray-200 action-plan-print report-section">
           <div className="flex justify-center items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-700 text-center">Plan de Acción Recomendado por IA</h2>
          </div>
          <ActionPlanDisplay plan={results.actionPlan} />
        </div>
      )}

      <div className="text-center mt-12 pt-6 border-t border-gray-200 flex justify-center items-center gap-4 print:hidden no-pdf">
        <button
          onClick={handleGeneratePdf}
          disabled={isGeneratingPdf}
          className="bg-gray-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-wait"
        >
          {isGeneratingPdf ? 'Generando PDF...' : 'Descargar como PDF'}
        </button>
        {mode === 'new' && onSaveAndFinish && (
            <button
              onClick={onSaveAndFinish}
              disabled={isSaving}
              className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-wait"
            >
              {isSaving ? 'Guardando...' : 'Guardar y Finalizar'}
            </button>
        )}
        {mode === 'view' && onBackToHistory && (
             <button
              onClick={onBackToHistory}
              className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-300"
            >
              Volver al Historial
            </button>
        )}
      </div>
      <style>{`
        .pdf-export-mode {
            width: 820px !important;
            max-width: 820px !important;
            padding: 40px !important;
            box-sizing: border-box !important;
            background-color: #ffffff !important;
            box-shadow: none !important;
            border: none !important;
        }

        .pdf-export-mode .text-gray-500,
        .pdf-export-mode .text-gray-600,
        .pdf-export-mode .text-gray-700,
        .pdf-export-mode .text-gray-800,
        .pdf-export-mode .text-teal-700,
        .pdf-export-mode .text-gray-900 {
            color: #1e293b !important; /* Un gris muy oscuro */
        }
        
        .action-plan-print {
            page-break-before: always;
            break-before: page;
        }

        .report-section {
            page-break-inside: avoid;
            break-inside: avoid;
        }

        .animate-fade-in { animation: fadeIn 0.5s ease-in-out; } 
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default ResultsDisplay;