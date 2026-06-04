import React, { useState } from 'react';
import { IDemographics, ISavedDiagnostic, IsoStandard } from '../types';
import { COMPANY_SIZE_OPTIONS, STANDARDS_CONFIG } from '../constants';
import * as db from '../services/dbService';

interface DemographicsFormProps {
  onSubmit: (data: IDemographics) => void;
  onLoadAndSubmit: (diagnostic: ISavedDiagnostic) => void;
  initialData?: IDemographics | null;
  standard: IsoStandard | null;
  onBackToDashboard: () => void;
}

const DemographicsForm: React.FC<DemographicsFormProps> = ({ onSubmit, onLoadAndSubmit, initialData, standard, onBackToDashboard }) => {
  const [data, setData] = useState<Omit<IDemographics, 'standard'>>(initialData || {
    companyName: '',
    industry: '',
    companyId: '',
    department: '',
    city: '',
    foundationDate: '',
    responsiblePerson: '',
    companySize: 'pequeña',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof IDemographics, string>>>({});
  const [foundDiagnostic, setFoundDiagnostic] = useState<ISavedDiagnostic | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
    if (value) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (name === 'companyId') {
      setFoundDiagnostic(null);
    }
  };
  
  const handleCompanyIdBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
      const companyId = e.target.value.trim();
      if (companyId && standard) {
          const latest = await db.getLatestDiagnostic(companyId, standard);
          setFoundDiagnostic(latest);
          if (latest) {
              // Pre-fill form with data from the latest diagnostic
              setData({
                  ...latest.demographics,
                  companyId: companyId, // Keep the ID the user typed
              });
          }
      }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof IDemographics, string>> = {};
    if (!data.companyName.trim()) newErrors.companyName = 'El nombre de la empresa es obligatorio.';
    if (!data.industry.trim()) newErrors.industry = 'El sector es obligatorio.';
    if (!data.companyId.trim()) newErrors.companyId = 'El ID de la empresa es obligatorio.';
    if (!data.department.trim()) newErrors.department = 'El departamento es obligatorio.';
    if (!data.city.trim()) newErrors.city = 'La ciudad es obligatoria.';
    if (!data.foundationDate) newErrors.foundationDate = 'La fecha de fundación es obligatoria.';
    if (!data.responsiblePerson.trim()) newErrors.responsiblePerson = 'El nombre del responsable es obligatorio.';
    if (!data.companySize) newErrors.companySize = 'Seleccione un tamaño de empresa.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate() && standard) {
      onSubmit({ ...data, standard });
    }
  };
  
  const handleLoadClick = () => {
      if(foundDiagnostic) {
          onLoadAndSubmit(foundDiagnostic);
      }
  }

  const baseInputClass = "mt-1 block w-full px-4 py-2.5 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white text-gray-800 placeholder:text-gray-400";
  const errorInputClass = "border-red-500";
  const normalInputClass = "border-gray-300";

  return (
    <>
      <div className="max-w-4xl mx-auto mb-6 print:hidden">
        <button 
          onClick={onBackToDashboard} 
          className="text-cyan-600 hover:text-cyan-800 font-semibold flex items-center gap-2"
        >
          &larr; Volver al Panel
        </button>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg animate-fade-in border border-gray-200">
        <div className="text-center border-b pb-6 mb-8">
          <h2 className="text-3xl font-bold text-gray-800">1. Información de la Organización</h2>
        {standard && <p className="text-lg text-gray-500 mt-2">Evaluando bajo la norma: <span className="font-semibold text-cyan-600">{STANDARDS_CONFIG[standard].name}</span></p>}
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label htmlFor="companyId" className="block text-sm font-medium text-gray-700">ID de la Empresa (NIF, RUC, etc.)</label>
              <input
                type="text"
                id="companyId"
                name="companyId"
                value={data.companyId}
                onChange={handleChange}
                onBlur={handleCompanyIdBlur}
                className={`${baseInputClass} ${errors.companyId ? errorInputClass : normalInputClass}`}
                placeholder="Introduzca el ID y presione Tab"
              />
              {errors.companyId && <p className="mt-1 text-sm text-red-600">{errors.companyId}</p>}
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Nombre de la Empresa</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={data.companyName}
                onChange={handleChange}
                className={`${baseInputClass} ${errors.companyName ? errorInputClass : normalInputClass}`}
                placeholder="Ej: Acme Corporation S.A."
              />
              {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
            </div>
             <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Sector / Industria</label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={data.industry}
                onChange={handleChange}
                className={`${baseInputClass} ${errors.industry ? errorInputClass : normalInputClass}`}
                placeholder="Ej: Gastronomía"
              />
              {errors.industry && <p className="mt-1 text-sm text-red-600">{errors.industry}</p>}
            </div>
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">Departamento</label>
              <input
                type="text"
                id="department"
                name="department"
                value={data.department}
                onChange={handleChange}
                className={`${baseInputClass} ${errors.department ? errorInputClass : normalInputClass}`}
                placeholder="Ej: Cundinamarca"
              />
              {errors.department && <p className="mt-1 text-sm text-red-600">{errors.department}</p>}
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad</label>
              <input
                type="text"
                id="city"
                name="city"
                value={data.city}
                onChange={handleChange}
                className={`${baseInputClass} ${errors.city ? errorInputClass : normalInputClass}`}
                placeholder="Ej: Bogotá D.C."
              />
              {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
            </div>
            <div>
              <label htmlFor="foundationDate" className="block text-sm font-medium text-gray-700">Fecha de Fundación</label>
              <input
                type="date"
                id="foundationDate"
                name="foundationDate"
                value={data.foundationDate}
                onChange={handleChange}
                className={`${baseInputClass} ${errors.foundationDate ? errorInputClass : normalInputClass} ${!data.foundationDate ? 'text-gray-400' : 'text-gray-900'}`}
              />
              {errors.foundationDate && <p className="mt-1 text-sm text-red-600">{errors.foundationDate}</p>}
            </div>
            <div>
              <label htmlFor="responsiblePerson" className="block text-sm font-medium text-gray-700">Responsable del Informe</label>
              <input
                type="text"
                id="responsiblePerson"
                name="responsiblePerson"
                value={data.responsiblePerson}
                onChange={handleChange}
                className={`${baseInputClass} ${errors.responsiblePerson ? errorInputClass : normalInputClass}`}
                placeholder="Ej: Ana García"
              />
              {errors.responsiblePerson && <p className="mt-1 text-sm text-red-600">{errors.responsiblePerson}</p>}
            </div>
            <div>
              <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">Tamaño de la Empresa</label>
              <select
                id="companySize"
                name="companySize"
                value={data.companySize}
                onChange={handleChange}
                className={`${baseInputClass} ${errors.companySize ? errorInputClass : normalInputClass}`}
              >
                {COMPANY_SIZE_OPTIONS.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
              </select>
              {errors.companySize && <p className="mt-1 text-sm text-red-600">{errors.companySize}</p>}
            </div>
        </div>
        
        {foundDiagnostic && (
            <div className="p-4 mt-6 bg-cyan-50 border border-cyan-200 rounded-lg text-center space-y-3 animate-fade-in">
                <p className="text-sm text-cyan-800">
                    Se encontró un diagnóstico para <span className='font-semibold'>{foundDiagnostic.demographics.companyName}</span> del {new Date(foundDiagnostic.savedAt).toLocaleDateString('es-ES')}. Los datos han sido precargados.
                </p>
                <button
                    type="button"
                    onClick={handleLoadClick}
                    className="bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-300"
                >
                    Continuar editando el último diagnóstico
                </button>
            </div>
        )}

        <div className="pt-6 border-t mt-8">
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300 disabled:bg-gray-400"
          >
            {foundDiagnostic ? 'Iniciar un Diagnóstico Nuevo (con datos precargados)' : 'Continuar al Cuestionario'}
          </button>
        </div>
      </form>
       <style>{`.animate-fade-in { animation: fadeIn 0.5s ease-in-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      </div>
    </>
  );
};

export default DemographicsForm;