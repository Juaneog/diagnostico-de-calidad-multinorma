import { GoogleGenAI, Type } from "@google/genai";
import { IDemographics, IResults, CommentsState, IActionPlan, ChecklistAnswersState, EvidenceStatus, IChatContext, IChatMessage, IChatFile, IClause, IsoStandard } from '../types';
import { EVIDENCE_STATUS_OPTIONS, STANDARDS_CONFIG } from '../constants';

const APP_MODE = import.meta.env.VITE_APP_MODE || 'default';
const API_KEY_STORAGE_KEYS: Record<string, string> = {
    sustainable: 'geminiApiKey_sustainable',
};

const getApiKeyStorageKey = (): string => {
    return API_KEY_STORAGE_KEYS[APP_MODE] || 'geminiApiKey_default';
};

const getRuntimeApiKey = (): string => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedKey = localStorage.getItem(getApiKeyStorageKey());
        if (storedKey) return storedKey;
    }
    return process.env.GEMINI_API_KEY || process.env.API_KEY || '';
};

const getAiClient = (): GoogleGenAI => {
    const apiKey = getRuntimeApiKey();
    if (!apiKey) {
        throw new Error('No se encontró la clave Gemini. Ingresa tu clave en la configuración de la aplicación.');
    }
    return new GoogleGenAI({ apiKey });
};

const actionPlanSchema = {
  type: Type.OBJECT,
  properties: {
    executiveSummary: {
      type: Type.STRING,
      description: "Un resumen ejecutivo conciso (2-3 frases) del estado general de cumplimiento y el propósito del plan de acción."
    },
    priorityActions: {
      type: Type.ARRAY,
      description: "Una lista de acciones prioritarias para las cláusulas con mayores brechas.",
      items: {
        type: Type.OBJECT,
        properties: {
          clauseTitle: {
            type: Type.STRING,
            description: "El título de la cláusula que necesita atención."
          },
          problemStatement: {
            type: Type.STRING,
            description: "Un resumen de 1-2 frases del problema o brecha principal identificado en esta cláusula, basado en las respuestas y comentarios."
          },
          recommendedActions: {
            type: Type.ARRAY,
            description: "Una lista de 2-3 acciones concretas, específicas y realizables para cerrar la brecha.",
            items: { type: Type.STRING }
          },
          priority: {
            type: Type.STRING,
            description: "La prioridad de la acción (Alta, Media, Baja) basada en su impacto en el SGC.",
            enum: ['Alta', 'Media', 'Baja']
          }
        },
        required: ['clauseTitle', 'problemStatement', 'recommendedActions', 'priority']
      }
    },
    generalRecommendations: {
      type: Type.STRING,
      description: "Un párrafo con 1-2 recomendaciones generales para fomentar una cultura de mejora continua y mantener el sistema de gestión de calidad."
    }
  },
  required: ['executiveSummary', 'priorityActions', 'generalRecommendations']
};

const getEvidenceStatusLabel = (status: EvidenceStatus): string => {
    return EVIDENCE_STATUS_OPTIONS.find(opt => opt.id === status)?.label || 'Desconocido';
}

const buildPrompt = (
    demographics: IDemographics, 
    standardName: string,
    results: IResults, 
    comments: CommentsState,
    checklistAnswers: ChecklistAnswersState,
    questionnaire: IClause[]
): string => {
    let prompt = `Eres un consultor experto en sistemas de gestión de calidad, específicamente en la norma ${standardName}. Tu tarea es analizar el siguiente autodiagnóstico y generar un plan de acción estratégico y práctico. El puntaje se basa en el estado de implementación de la evidencia (Implementado=2, En Proceso=1, No Implementado=0).

DATOS DE LA ORGANIZACIÓN:
- Nombre: ${demographics.companyName}
- ID Fiscal: ${demographics.companyId}
- Sector: ${demographics.industry}
- Ubicación: ${demographics.city}, ${demographics.department}
- Tamaño: ${demographics.companySize}
- Norma Evaluada: ${standardName}
- Responsable del Informe: ${demographics.responsiblePerson}
- Fecha del Informe: ${new Date(results.reportDate).toLocaleDateString()}

RESUMEN DEL DIAGNÓSTICO:
- Nivel de Cumplimiento General: ${results.totalPercentage.toFixed(1)}%

DETALLE DE CLÁUSULAS CON BAJO RENDIMIENTO (menos del 80%):
`;

    const lowPerformingClauses = results.clauseScores.filter(c => c.percentage < 80 && c.maxScore > 0);

    if (lowPerformingClauses.length === 0) {
        prompt += "¡Excelente! Todas las cláusulas muestran un alto nivel de cumplimiento. El plan puede enfocarse en la mejora continua y el mantenimiento.\n";
    } else {
        lowPerformingClauses.forEach(clause => {
            prompt += `\n---
Cláusula: ${clause.clauseTitle} (${clause.percentage.toFixed(1)}% de cumplimiento)
`;
            const clauseData = questionnaire.find(c => c.id === clause.clauseId);
            clauseData?.questions.forEach(q => {
                let questionHasLowItems = false;
                let questionDetails = `\n- Pregunta: "${q.text}"\n`;
                q.evidence.forEach(ev => {
                    const status = checklistAnswers[ev.id];
                    if (status && (status === 'not_implemented' || status === 'in_progress')) {
                        questionDetails += `  - Evidencia: "${ev.text}" -> Estado: ${getEvidenceStatusLabel(status)}\n`;
                        questionHasLowItems = true;
                    }
                });
                if (questionHasLowItems) {
                    prompt += questionDetails;
                }
            });
            if (comments[clause.clauseId]) {
                prompt += `\nComentarios del usuario para esta cláusula: "${comments[clause.clauseId]}"\n`;
            }
        });
    }

    prompt += `
---
Basado en este análisis exhaustivo, donde se detalla el estado de cada evidencia y el contexto geográfico de la empresa en ${demographics.city}, proporciona un plan de acción en formato JSON estructurado. El plan debe ser realista, priorizado y enfocado en generar el mayor impacto para llevar a la organización (${demographics.companyName}) a un alto estándar de cumplimiento con la norma ${standardName}. Enfócate en las evidencias marcadas como 'No Implementado' o 'En Proceso'.`;

    return prompt;
};

export const generateActionPlan = async (
    demographics: IDemographics, 
    standardName: string,
    results: IResults,
    comments: CommentsState,
    checklistAnswers: ChecklistAnswersState,
    questionnaire: IClause[]
): Promise<IActionPlan> => {
    
    const prompt = buildPrompt(demographics, standardName, results, comments, checklistAnswers, questionnaire);

    try {
        const ai = getAiClient();
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: actionPlanSchema,
                temperature: 0.5,
            },
        });
        
        const jsonText = response.text.trim();
        return JSON.parse(jsonText) as IActionPlan;

    } catch (error) {
        console.error("Error generating content from Gemini API:", error);
        throw new Error("La API de IA no pudo procesar la solicitud.");
    }
};

export const generateChatResponse = async (
    context: IChatContext,
    history: IChatMessage[],
    questionnaire: IClause[]
): Promise<string> => {
    const clauseData = questionnaire.find(c => c.id === context.clauseId);
    if (!clauseData) {
        return "Lo siento, no puedo encontrar información sobre esa cláusula.";
    }
    
    const standardName = history[0]?.text.includes("NTC") ? "la norma correspondiente" : "la norma ISO 9001";

    const questionsText = clauseData.questions.map((q, i) => `${i + 1}. ${q.text}`).join('\n');

    const historyText = history.map(m => {
        const filePrefix = m.file ? `[Archivo adjunto: ${m.file.name}]\n` : '';
        return `${m.sender === 'user' ? 'Usuario' : 'Asistente IA'}: ${filePrefix}${m.text}`;
    }).join('\n');

    const files = history
        .map(m => m.file)
        .filter((f): f is IChatFile => !!f && !!f.data);

    let prompt = `Eres un asistente experto en normas de gestión de calidad. Estás ayudando a un usuario a entender una cláusula específica de una norma.

**Cláusula en Discusión:** ${context.clauseTitle}

**Contenido de la Cláusula (Preguntas de autoevaluación):**
${questionsText}

**Conversación hasta ahora:**
${historyText}

Basado en toda la conversación y en los documentos adjuntos (si los hay), proporciona una respuesta clara, concisa y útil en español a la última pregunta del usuario. Ve directamente a la respuesta sin saludos ni repeticiones.`;

    if (files.length > 0) {
        prompt += `\n\nPor favor, analiza el contenido de los archivos PDF adjuntos para responder a la consulta del usuario.`;
    }

    try {
        const ai = getAiClient();
        const parts: any[] = [{ text: prompt }];
        files.forEach(f => {
            parts.push({
                inlineData: {
                    mimeType: f.mimeType,
                    data: f.data
                }
            });
        });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                {
                    role: "user",
                    parts: parts
                }
            ],
            config: {
                temperature: 0.7,
            },
        });

        return response.text;
    } catch (error) {
        console.error("Error generating chat response from Gemini API:", error);
        throw new Error("La API de IA no pudo procesar tu pregunta.");
    }
};

export const generateStandardChatResponse = async (
    standard: IsoStandard,
    history: IChatMessage[]
): Promise<string> => {
    const standardConfig = STANDARDS_CONFIG[standard];
    if (!standardConfig) {
        return "Lo siento, no tengo información sobre la norma seleccionada.";
    }

    const clauseTitles = standardConfig.data.map(c => `- ${c.title}`).join('\n');
    
    const historyText = history.map(m => {
        const filePrefix = m.file ? `[Archivo adjunto: ${m.file.name}]\n` : '';
        return `${m.sender === 'user' ? 'Usuario' : 'Asistente IA'}: ${filePrefix}${m.text}`;
    }).join('\n');

    const files = history
        .map(m => m.file)
        .filter((f): f is IChatFile => !!f && !!f.data);

    let prompt = `Eres un asistente experto en la norma de calidad "${standardConfig.name}". Tu propósito es resolver dudas sobre esta norma específica.

**CONTEXTO DE LA NORMA:**
- **Nombre:** ${standardConfig.name}
- **Descripción:** ${standardConfig.description}
- **Estructura (Cláusulas Principales):**
${clauseTitles}

**Conversación hasta ahora:**
${historyText}

Basado en tu conocimiento experto sobre la norma "${standardConfig.name}", el contexto de la conversación y los documentos adjuntos (si los hay), proporciona una respuesta clara, concisa y útil en español a la última pregunta del usuario. Ve directamente a la respuesta sin saludos ni repeticiones.`;

    if (files.length > 0) {
        prompt += `\n\nPor favor, analiza el contenido de los archivos PDF adjuntos para responder a la consulta del usuario.`;
    }

    try {
        const ai = getAiClient();
        const parts: any[] = [{ text: prompt }];
        files.forEach(f => {
            parts.push({
                inlineData: {
                    mimeType: f.mimeType,
                    data: f.data
                }
            });
        });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                {
                    role: "user",
                    parts: parts
                }
            ],
            config: {
                temperature: 0.7,
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error generating standard chat response from Gemini API:", error);
        throw new Error("La API de IA no pudo procesar tu pregunta en este momento.");
    }
};

export const generateActionPlanChatResponse = async (
    plan: IActionPlan,
    history: IChatMessage[]
): Promise<string> => {

    const historyText = history.map(m => {
        const filePrefix = m.file ? `[Archivo adjunto: ${m.file.name}]\n` : '';
        return `${m.sender === 'user' ? 'Usuario' : 'Asistente IA'}: ${filePrefix}${m.text}`;
    }).join('\n');

    const files = history
        .map(m => m.file)
        .filter((f): f is IChatFile => !!f && !!f.data);

    let prompt = `Eres un consultor experto en sistemas de gestión de calidad. Has proporcionado el siguiente plan de acción a un usuario.

**PLAN DE ACCIÓN COMPLETO:**
\`\`\`json
${JSON.stringify(plan, null, 2)}
\`\`\`

**Conversación hasta ahora:**
${historyText}

Basado en el plan, la conversación y los documentos adjuntos (si los hay), proporciona una respuesta clara, concisa y útil en español a la última pregunta del usuario. Ayúdale a entender o implementar el plan. Basa tu respuesta únicamente en la información del plan proporcionado. Ve directamente a la respuesta sin saludos.`;

    if (files.length > 0) {
        prompt += `\n\nPor favor, analiza el contenido de los archivos PDF adjuntos para responder a la consulta del usuario.`;
    }

    try {
        const ai = getAiClient();
        const parts: any[] = [{ text: prompt }];
        files.forEach(f => {
            parts.push({
                inlineData: {
                    mimeType: f.mimeType,
                    data: f.data
                }
            });
        });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                {
                    role: "user",
                    parts: parts
                }
            ],
            config: {
                temperature: 0.7,
            },
        });

        return response.text;
    } catch (error) {
        console.error("Error generating action plan chat response from Gemini API:", error);
        throw new Error("La API de IA no pudo procesar tu pregunta.");
    }
};