import React, { useState } from 'react';

export interface TourStep {
  title: string;
  description: string;
  icon: string;
  targetId?: string;
  tip: string;
  actionHint?: string;
}

const TOUR_STEPS: TourStep[] = [
  {
    title: '1. Inicio y Dashboard Principal',
    icon: '📊',
    targetId: 'dashboard-header',
    description: 'Bienvenido al sistema. Desde el Dashboard puedes gestionar las empresas diagnosticadas, iniciar un nuevo proceso o consultar las guías y manuales técnicos.',
    tip: 'Consejo: Puedes volver al Dashboard en cualquier momento haciendo clic en el logo o título superior.',
    actionHint: 'Presiona "Siguiente" para conocer la caracterización de la empresa.'
  },
  {
    title: '2. Caracterización de la Organización',
    icon: '🏢',
    targetId: 'new-diagnostic-btn',
    description: 'Al iniciar un diagnóstico, registrarás la información general de la empresa (NIT, sector, tamaño, responsable) para personalizar la evaluación.',
    tip: 'Dato útil: Si el NIT ya existe, el sistema autocompletará los datos básicos guardados anteriormente.',
    actionHint: 'Presiona "Siguiente" para ver cómo seleccionar la norma técnica.'
  },
  {
    title: '3. Selección de Estándar Normativo',
    icon: '📜',
    targetId: 'standard-selector',
    description: 'Selecciona la norma aplicable a tu organización:\n• NTC 6001 (PyMEs generales)\n• NTC 6496 (Establecimientos gastronómicos)\n• NTC 6503 (Servicios de alojamiento y hospedería).',
    tip: 'Importante: La app adaptará las preguntas y las evidencias sugeridas según la norma elegida.',
    actionHint: 'Presiona "Siguiente" para conocer el cuestionario y las evidencias.'
  },
  {
    title: '4. Cuestionario de Evaluación y Evidencias',
    icon: '☑️',
    targetId: 'clause-card',
    description: 'Evalúa cada ítem seleccionando el estado de cumplimiento (Cumple, Parcialmente, No cumple, No aplica) y marca las casillas de verificación de evidencia documental existente.',
    tip: 'Las evidencias documentales (facturas, registros, permisos) suman puntos clave a la calificación cuantitativa.',
    actionHint: 'Presiona "Siguiente" para descubrir el Asistente IA.'
  },
  {
    title: '5. Asistente IA Contextual en Tiempo Real',
    icon: '🤖',
    targetId: 'ai-chat-btn',
    description: 'Cada cláusula cuenta con un ícono de chat azul. La IA con tecnología Google Gemini te brindará orientación técnica instantánea sobre cómo cumplir cada requisito.',
    tip: 'Puedes preguntar: "¿Qué formato puedo usar para esta evidencia?" o "Dame un ejemplo de política".',
    actionHint: 'Presiona "Siguiente" para ver la sección de resultados.'
  },
  {
    title: '6. Resultados, Plan de Acción IA e Informe PDF',
    icon: '📈',
    targetId: 'results-panel',
    description: 'Al finalizar, obtendrás el porcentaje global de cumplimiento, gráficos interactivos de radar, un plan de acción generado por IA priorizado y la exportación a informe PDF oficial.',
    tip: 'El informe en PDF incluye el logo institucional, gráficos, desglose de hallazgos y el plan de mejoras.',
    actionHint: '¡Felicidades! Has completado el tour interactivo de la aplicación.'
  }
];

interface GuidedTourOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToStep?: (stepIndex: number) => void;
}

export const GuidedTourOverlay: React.FC<GuidedTourOverlayProps> = ({ isOpen, onClose }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  if (!isOpen) return null;

  const currentStep = TOUR_STEPS[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === TOUR_STEPS.length - 1;

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full border border-slate-100 overflow-hidden relative transform transition-all scale-100">
        
        {/* Header decoration bar */}
        <div className="bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 h-3 w-full" />

        {/* Modal content */}
        <div className="p-6 md:p-8">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-800 border border-cyan-200">
              Tour Guiado Interactivo ({currentStepIndex + 1} de {TOUR_STEPS.length})
            </span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
              title="Cerrar Tour"
            >
              ✕
            </button>
          </div>

          {/* Icon & Title */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-3xl shrink-0 shadow-sm">
              {currentStep.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 leading-snug">
                {currentStep.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">Guía paso a paso del uso del sistema</p>
            </div>
          </div>

          {/* Description Box */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mb-4 text-slate-700 text-sm leading-relaxed whitespace-pre-line">
            {currentStep.description}
          </div>

          {/* Tip Box */}
          <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 mb-6 text-amber-900 text-xs flex items-start gap-2.5">
            <span className="text-base shrink-0">💡</span>
            <div>
              <strong className="font-semibold block mb-0.5">Sugerencia práctica:</strong>
              {currentStep.tip}
            </div>
          </div>

          {/* Action Hint */}
          {currentStep.actionHint && (
            <p className="text-xs text-center text-slate-500 italic mb-4">
              {currentStep.actionHint}
            </p>
          )}

          {/* Step Progress Dots */}
          <div className="flex justify-center items-center gap-1.5 mb-6">
            {TOUR_STEPS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStepIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentStepIndex
                    ? 'w-7 bg-cyan-600'
                    : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
                title={`Ir al paso ${idx + 1}`}
              />
            ))}
          </div>

          {/* Buttons Navigation */}
          <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={isFirstStep}
              className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-colors ${
                isFirstStep
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              ← Anterior
            </button>

            <button
              onClick={onClose}
              className="py-2.5 px-4 rounded-xl text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
            >
              Saltar tour
            </button>

            <button
              onClick={handleNext}
              className="py-2.5 px-6 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white shadow-md shadow-cyan-600/20 transition-all transform active:scale-95"
            >
              {isLastStep ? '¡Finalizar y Empezar! 🎉' : 'Siguiente →'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GuidedTourOverlay;
