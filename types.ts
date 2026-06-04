export type CompanySize = 'pequeña' | 'mediana' | 'grande';
export type EvidenceStatus = 'implemented' | 'in_progress' | 'not_implemented' | 'not_applicable';
export type IsoStandard = 'ntc_6496' | 'ntc_6503';

export interface IDemographics {
    companyName: string;
    industry: string;
    companyId: string;
    department: string;
    city: string;
    foundationDate: string;
    responsiblePerson: string;
    companySize: CompanySize;
    standard: IsoStandard;
}

export interface IEvidenceItem {
    id: string;
    text: string;
}

export interface IQuestion {
  id: string;
  text: string;
  evidence: IEvidenceItem[];
}

export interface IClause {
  id:string;
  title: string;
  questions: IQuestion[];
}

export type ChecklistAnswersState = {
    [evidenceId: string]: EvidenceStatus;
}

export type CommentsState = {
  [clauseId: string]: string;
};

export interface IClauseScore {
  clauseId: string;
  clauseTitle: string;
  score: number;
  maxScore: number;
  percentage: number;
}

// Estructura para el plan de acción generado por IA
export interface IPriorityAction {
    clauseTitle: string;
    problemStatement: string;
    recommendedActions: string[];
    priority: 'Alta' | 'Media' | 'Baja';
}

export interface IActionPlan {
    executiveSummary: string;
    priorityActions: IPriorityAction[];
    generalRecommendations: string;
}

export interface IClauseComparison {
    clauseId: string;
    previousPercentage: number;
    currentPercentage: number;
    change: number;
}

export interface IComparisonData {
    previousReportDate: string;
    previousTotalPercentage: number;
    currentTotalPercentage: number;
    totalChange: number;
    clauseComparisons: IClauseComparison[];
}


export interface IResults {
    reportDate: string;
    totalPercentage: number;
    clauseScores: IClauseScore[];
    actionPlan: IActionPlan | null;
    comparison?: IComparisonData;
}

// --- Nuevos tipos para el Chat ---
export interface IChatContext {
    clauseId: string;
    clauseTitle: string;
}

export interface IChatFile {
    name: string;
    mimeType: string;
    data: string; // base64
}

export interface IChatMessage {
    sender: 'user' | 'ai';
    text: string;
    file?: IChatFile;
}

export type ChatHistories = {
  [contextId: string]: IChatMessage[]; // contextId puede ser clause.id o 'action_plan'
};

// --- Nuevos tipos para la Base de Datos ---
export interface ISavedDiagnostic {
    id: string;
    savedAt: string;
    demographics: IDemographics;
    results: IResults;
    comments: CommentsState;
    checklistAnswers: ChecklistAnswersState;
    chatHistories?: ChatHistories;
}

export interface ICompanyListItem {
    companyId: string;
    companyName: string;
    standardName: string;
    reportCount: number;
    lastReportDate: string;
}