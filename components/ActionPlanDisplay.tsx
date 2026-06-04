

import React from 'react';
import { IActionPlan, IPriorityAction } from '../types';

interface ActionPlanDisplayProps {
  plan: IActionPlan;
}

const PriorityBadge: React.FC<{ priority: IPriorityAction['priority'] }> = ({ priority }) => {
    const colorMap = {
        'Alta': 'bg-red-100 text-red-800 border-red-300',
        'Media': 'bg-yellow-100 text-yellow-800 border-yellow-300',
        'Baja': 'bg-blue-100 text-blue-800 border-blue-300'
    };
    return (
        <span className={`px-3 py-1 text-sm font-medium rounded-full border ${colorMap[priority]}`}>
            Prioridad {priority}
        </span>
    );
}

const ActionPlanDisplay: React.FC<ActionPlanDisplayProps> = ({ plan }) => {
  return (
    <div className="space-y-8">
      <div>
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Resumen Ejecutivo</h3>
            <p className="text-slate-600 whitespace-pre-wrap">{plan.executiveSummary}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4">Acciones Prioritarias</h3>
        <div className="space-y-6">
          {plan.priorityActions.map((action, index) => (
            <div key={index} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm report-section">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-3">
                    <h4 className="text-lg font-bold text-slate-800">{action.clauseTitle}</h4>
                    <PriorityBadge priority={action.priority} />
                </div>
                <div className="mb-4">
                    <h5 className="font-semibold text-slate-600 mb-1">Brecha Identificada:</h5>
                    <p className="text-slate-600 text-sm italic">"{action.problemStatement}"</p>
                </div>
                 <div>
                    <h5 className="font-semibold text-slate-600 mb-2">Acciones Recomendadas:</h5>
                    <ul className="space-y-2">
                        {action.recommendedActions.map((rec, i) => (
                            <li key={i} className="flex items-start">
                                <svg className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-slate-700">{rec}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          ))}
        </div>
      </div>
       {plan.generalRecommendations && (
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Recomendaciones Generales</h3>
             <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
                <p className="text-slate-600 whitespace-pre-wrap">{plan.generalRecommendations}</p>
            </div>
          </div>
       )}
    </div>
  );
};

export default ActionPlanDisplay;
