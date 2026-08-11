/**
 * dbService.ts
 *
 * Capa de acceso a datos del frontend.
 * Todas las operaciones se realizan contra el backend REST (MySQL).
 * La clave API de Gemini NUNCA se envía al servidor.
 *
 * Las funciones mantienen exactamente la misma firma que la versión
 * anterior basada en localStorage para que App.tsx no requiera cambios.
 */

import {
  IDemographics,
  IResults,
  CommentsState,
  ChecklistAnswersState,
  ISavedDiagnostic,
  ICompanyListItem,
  ChatHistories,
  IsoStandard,
} from '../types';
import { STANDARDS_CONFIG } from '../constants';

// ─── Configuración ────────────────────────────────────────────────────────────
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

/** Helper: lanza error con el mensaje del servidor si el status no es 2xx */
async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    let message = `HTTP ${res.status}`;
    try {
      const body = await res.json();
      message = body?.error || message;
    } catch {
      // ignore parse error
    }
    throw new Error(message);
  }
  // 204 No Content o respuestas vacías
  if (res.status === 204) return undefined as unknown as T;
  return res.json() as Promise<T>;
}

// ─── Interfaz de respuesta del backend (companyList) ─────────────────────────
interface IBackendCompany {
  companyId: string;
  companyName: string;
  standard: IsoStandard;
  standardName: string;  // el backend devuelve el key, el front resuelve el nombre
  reportCount: number;
  lastReportDate: string;
}

// ─── Funciones de Autenticación ──────────────────────────────────────────────

/**
 * Inicia sesión contra la API REST (MySQL).
 */
export const loginUser = async (username: string, password: string): Promise<{ ok: boolean; user?: { username: string }; error?: string }> => {
  try {
    const res = await apiFetch<{ ok: boolean; user: { username: string } }>(`${API_BASE}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    return { ok: true, user: res.user };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error al iniciar sesión';
    return { ok: false, error: message };
  }
};

/**
 * Registra un nuevo usuario en MySQL.
 */
export const registerUser = async (username: string, password: string): Promise<{ ok: boolean; user?: { username: string }; error?: string }> => {
  try {
    const res = await apiFetch<{ ok: boolean; user: { username: string } }>(`${API_BASE}/auth/register`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    return { ok: true, user: res.user };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error al registrar usuario';
    return { ok: false, error: message };
  }
};

// ─── Funciones públicas de Diagnóstico ─────────────────────────────────────────

/**
 * Obtiene la lista de empresas con su último diagnóstico filtrada por usuario.
 * Usado por el Dashboard.
 */
export const getCompanyList = async (userId: string = 'user'): Promise<ICompanyListItem[]> => {
  try {
    const params = new URLSearchParams({ userId });
    const companies = await apiFetch<IBackendCompany[]>(`${API_BASE}/companies?${params}`);
    return companies.map(c => ({
      companyId: c.companyId,
      companyName: c.companyName,
      // Resolver nombre legible desde STANDARDS_CONFIG
      standardName: STANDARDS_CONFIG[c.standard]?.name || c.standard,
      reportCount: c.reportCount,
      lastReportDate: c.lastReportDate,
    }));
  } catch (err) {
    console.error('[dbService] getCompanyList:', err);
    return [];
  }
};

/**
 * Obtiene todos los diagnósticos de una empresa pertenecientes al usuario.
 * Usado por HistoryView.
 */
export const getCompanyHistory = async (companyId: string, userId: string = 'user'): Promise<ISavedDiagnostic[]> => {
  try {
    const params = new URLSearchParams({ userId });
    return await apiFetch<ISavedDiagnostic[]>(`${API_BASE}/companies/${encodeURIComponent(companyId)}/history?${params}`);
  } catch (err) {
    console.error('[dbService] getCompanyHistory:', err);
    return [];
  }
};

/**
 * Obtiene el diagnóstico más reciente de una empresa para una norma específica y usuario.
 * Usado para mostrar comparaciones en DemographicsForm.
 */
export const getLatestDiagnostic = async (
  companyId: string,
  standard: IsoStandard,
  userId: string = 'user'
): Promise<ISavedDiagnostic | null> => {
  try {
    const params = new URLSearchParams({ companyId, standard, userId });
    return await apiFetch<ISavedDiagnostic | null>(`${API_BASE}/diagnostics/latest?${params}`);
  } catch (err) {
    console.error('[dbService] getLatestDiagnostic:', err);
    return null;
  }
};

/**
 * Guarda un diagnóstico completo en MySQL asociándolo al userId.
 * Devuelve el ID generado por el servidor.
 */
export const saveDiagnostic = async (
  demographics: IDemographics,
  results: IResults,
  comments: CommentsState,
  checklistAnswers: ChecklistAnswersState,
  chatHistories: ChatHistories,
  userId: string = 'user'
): Promise<{ id: string; savedAt: string } | null> => {
  try {
    return await apiFetch<{ id: string; savedAt: string }>(`${API_BASE}/diagnostics`, {
      method: 'POST',
      body: JSON.stringify({ demographics, results, comments, checklistAnswers, chatHistories, userId }),
    });
  } catch (err) {
    console.error('[dbService] saveDiagnostic:', err);
    return null;
  }
};

/**
 * Actualiza un diagnóstico existente (principalmente para sincronizar chatHistories).
 */
export const updateDiagnostic = async (updatedDiagnostic: ISavedDiagnostic): Promise<void> => {
  try {
    await apiFetch<{ ok: boolean }>(`${API_BASE}/diagnostics/${updatedDiagnostic.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedDiagnostic),
    });
  } catch (err) {
    console.error('[dbService] updateDiagnostic:', err);
  }
};
