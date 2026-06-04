import { IClause, CompanySize, EvidenceStatus, IsoStandard } from './types';
import { NTC_6496_DATA } from './standards/ntc6496';
import { NTC_6503_DATA } from './standards/ntc6503';

export const ALL_STANDARDS: Record<IsoStandard, { name: string; description: string; data: IClause[]; detailsHTML: string; }> = {
  'ntc_6496': {
    name: 'NTC 6496 (Gastronomía Sostenible)',
    description: 'Requisitos de sostenibilidad en las dimensiones ambiental, sociocultural y económica para establecimientos del sector gastronómico.',
    data: NTC_6496_DATA,
    detailsHTML: `
      <div class="space-y-4 text-slate-700">
        <p><strong>La Norma Técnica Colombiana NTC 6496</strong> establece los requisitos de sostenibilidad para establecimientos gastronómicos. Su objetivo es promover prácticas que equilibren el desarrollo económico con la protección ambiental y el bienestar sociocultural.</p>
        <h4 class="font-semibold text-slate-800 mt-4">Dimensiones de la Sostenibilidad:</h4>
        <ul class="list-disc list-inside space-y-2 pl-4">
          <li><strong>Dimensión Ambiental:</strong> Gestión eficiente de recursos (agua, energía), manejo integral de residuos, compras sostenibles y protección de la biodiversidad.</li>
          <li><strong>Dimensión Sociocultural:</strong> Promoción del empleo local, condiciones laborales justas, protección del patrimonio cultural y prevención de la explotación (ESCNNA).</li>
          <li><strong>Dimensión Económica:</strong> Asegurar la viabilidad del negocio a largo plazo, garantizar la calidad del servicio, la satisfacción del cliente y la seguridad alimentaria.</li>
        </ul>
        <h4 class="font-semibold text-slate-800 mt-4">Beneficios de la Implementación:</h4>
        <p>Reducción de costos operativos, mejora de la imagen de marca, diferenciación en el mercado, contribución al desarrollo local y atracción de clientes conscientes.</p>
      </div>
    `
  },
  'ntc_6503': {
    name: 'NTC 6503 (Turismo Sostenible)',
    description: 'Requisitos de sostenibilidad (ambiental, sociocultural) para establecimientos de alojamiento y hospedaje.',
    data: NTC_6503_DATA,
    detailsHTML: `
      <div class="space-y-4 text-slate-700">
        <p><strong>La Norma Técnica Colombiana NTC 6503</strong> define los requisitos de sostenibilidad para establecimientos de alojamiento y hospedaje. Busca que el sector turístico opere de manera responsable, minimizando sus impactos negativos y maximizando los positivos.</p>
        <h4 class="font-semibold text-slate-800 mt-4">Ejes Principales:</h4>
        <ul class="list-disc list-inside space-y-2 pl-4">
          <li><strong>Requisitos Ambientales:</strong> Programas de ahorro de agua y energía, gestión integral de residuos (incluyendo peligrosos), y comunicación de prácticas sostenibles a los huéspedes.</li>
          <li><strong>Requisitos Socioculturales:</strong> Fomento del empleo local, capacitación del personal en sostenibilidad, promoción del patrimonio cultural y prevención de impactos negativos en la comunidad.</li>
        </ul>
        <h4 class="font-semibold text-slate-800 mt-4">Beneficios de la Implementación:</h4>
        <p>Acceso a mercados de turismo sostenible, optimización del uso de recursos, fortalecimiento de la relación con la comunidad local y cumplimiento con regulaciones crecientes en el sector.</p>
      </div>
    `
  }
};

const APP_MODE = import.meta.env.VITE_APP_MODE;

export const STANDARDS_CONFIG = Object.entries(ALL_STANDARDS).reduce((acc, [key, value]) => {
  if (APP_MODE === 'sustainable') {
    if (key === 'ntc_6496' || key === 'ntc_6503') acc[key as IsoStandard] = value;
  } else {
    // Default: show all available estándares
    acc[key as IsoStandard] = value;
  }
  return acc;
}, {} as Record<IsoStandard, typeof ALL_STANDARDS[IsoStandard]>);


export const getQuestionnaireData = (standard: IsoStandard): IClause[] => ALL_STANDARDS[standard]?.data || [];

export const EVIDENCE_POINTS: Record<EvidenceStatus, number> = {
    implemented: 2,
    in_progress: 1,
    not_implemented: 0,
    not_applicable: 0,
};

export const COMPANY_SIZE_OPTIONS: { id: CompanySize, label: string }[] = [
    { id: 'pequeña', label: 'Pequeña (1-50 empleados)' },
    { id: 'mediana', label: 'Mediana (51-250 empleados)' },
    { id: 'grande', label: 'Grande (251+ empleados)' },
];

export const EVIDENCE_STATUS_OPTIONS: { id: EvidenceStatus, label: string }[] = [
    { id: 'implemented', label: 'Implementado' },
    { id: 'in_progress', label: 'En Proceso' },
    { id: 'not_implemented', label: 'No Implementado' },
    { id: 'not_applicable', label: 'No Aplica' },
];

export const COMMENT_PLACEHOLDER_EXAMPLE = "Ej: Tenemos un procedimiento documentado para la identificación de partes interesadas (P-GC-02), pero no se revisa anualmente como está estipulado. La última revisión fue en 2022. Responsable de actualización: Gerente de Calidad.";
