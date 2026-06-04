
import React from 'react';
import { IClause, ChecklistAnswersState, EvidenceStatus } from '../types';
import { COMMENT_PLACEHOLDER_EXAMPLE, EVIDENCE_STATUS_OPTIONS, EVIDENCE_POINTS } from '../constants';

interface ClauseCardProps {
  clause: IClause;
  comment: string;
  checklistAnswers: ChecklistAnswersState;
  onCommentChange: (clauseId: string, text: string) => void;
  onChecklistChange: (evidenceId: string, status: EvidenceStatus) => void;
}

const statusColors: Record<EvidenceStatus, string> = {
    implemented: 'bg-emerald-100 text-emerald-800',
    in_progress: 'bg-amber-100 text-amber-800',
    not_implemented: 'bg-red-100 text-red-800',
    not_applicable: 'bg-slate-100 text-slate-500'
};

const ClauseCard: React.FC<ClauseCardProps> = ({ clause, comment, checklistAnswers, onCommentChange, onChecklistChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 transition-shadow duration-300 hover:shadow-lg">
      <div className="border-b border-slate-200 pb-3 mb-4">
        <h3 className="text-xl font-semibold text-slate-800">{clause.title}</h3>
      </div>

      <div className="space-y-8">
        {clause.questions.map((question, qIndex) => {
          const { score, maxScore } = question.evidence.reduce(
            (acc, ev) => {
                const status = checklistAnswers[ev.id];
                if (status && status !== 'not_applicable') {
                    acc.score += EVIDENCE_POINTS[status] || 0;
                    acc.maxScore += EVIDENCE_POINTS['implemented']; // Max score is always 2 per item
                }
                return acc;
            },
            { score: 0, maxScore: 0 }
          );

          return (
            <div key={question.id} className="border-t border-slate-100 pt-5">
              <div className="bg-slate-100 p-4 rounded-lg mb-4">
                <p className="font-medium text-slate-800">{`${qIndex + 1}. ${question.text}`}</p>
              </div>
              {/* Slider Section */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="md:col-span-4">
                  <div className="flex items-center space-x-4">
                     <span className="text-sm font-bold text-slate-500">0</span>
                     <input
                        type="range"
                        min="0"
                        max={maxScore > 0 ? maxScore : 1}
                        value={score}
                        disabled={true}
                        className="w-full h-2 rounded-lg appearance-none cursor-default bg-sky-200"
                        style={{
                            background: maxScore > 0 ? `linear-gradient(to right, #0ea5e9 ${(score / maxScore) * 100}%, #e2e8f0 ${(score / maxScore) * 100}%)` : '#e2e8f0'
                        }}
                      />
                      <span className="text-sm font-bold text-slate-500">{maxScore}</span>
                      <span className={`font-bold text-lg w-16 text-center text-sky-600`}>
                        {score} / {maxScore}
                      </span>
                  </div>
                   <div className="text-xs text-slate-500 flex justify-between mt-1 px-1">
                      <span>Sin implementar</span>
                      <span>Fuertemente implementado</span>
                    </div>
                </div>
              </div>

              {/* Checklist Section */}
              <div className="mt-6 pl-4 border-l-2 border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-600 mb-3">Lista de Chequeo de Evidencias:</h4>
                  <div className="space-y-4">
                    {question.evidence.map(ev => (
                        <div key={ev.id}>
                            <p className="text-sm text-slate-700 mb-2">{ev.text}</p>
                            <div className="flex flex-wrap gap-2">
                                {EVIDENCE_STATUS_OPTIONS.map(opt => (
                                    <label key={opt.id} className={`flex items-center px-3 py-1 text-xs font-medium rounded-full cursor-pointer transition-all ${
                                        checklistAnswers[ev.id] === opt.id 
                                        ? `${statusColors[opt.id]} ring-2 ring-offset-1 ${statusColors[opt.id].replace('bg', 'ring').replace('100', '400')}`
                                        : 'bg-slate-50 text-slate-600 hover:bg-slate-200'
                                    }`}>
                                        <input
                                            type="radio"
                                            name={`evidence-${ev.id}`}
                                            value={opt.id}
                                            checked={checklistAnswers[ev.id] === opt.id}
                                            onChange={() => onChecklistChange(ev.id, opt.id)}
                                            className="sr-only"
                                        />
                                        {opt.label}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                  </div>
              </div>

            </div>
          );
        })}
      </div>
      <div className="mt-8">
        <label htmlFor={`comment-${clause.id}`} className="block text-sm font-medium text-slate-600 mb-2">Notas / Evidencias / Justificaciones:</label>
        <textarea
          id={`comment-${clause.id}`}
          rows={4}
          value={comment}
          onChange={(e) => onCommentChange(clause.id, e.target.value)}
          className="w-full p-3 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 transition bg-white text-slate-900 placeholder:text-slate-400"
          placeholder={COMMENT_PLACEHOLDER_EXAMPLE}
        ></textarea>
      </div>
    </div>
  );
};

export default ClauseCard;