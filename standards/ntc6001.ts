import { IClause } from '../types';

export const NTC_6001_DATA: IClause[] = [
  {
    id: 'c1',
    title: 'Cláusula 4: Contexto de la Organización',
    questions: [
      {
        id: 'q1-1',
        text: '¿Se han determinado las cuestiones externas e internas pertinentes para el propósito de la organización?',
        evidence: [
          { id: 'e1-1-1', text: 'Análisis FODA o PESTEL documentado.' },
          { id: 'e1-1-2', text: 'Registro de revisión periódica del contexto (ej. actas de reunión).' },
          { id: 'e1-1-3', text: 'Informe de tendencias del sector o análisis de competidores.' }
        ]
      },
      {
        id: 'q1-2',
        text: '¿Se han identificado las partes interesadas y sus requisitos pertinentes?',
        evidence: [
          { id: 'e1-2-1', text: 'Matriz de partes interesadas (stakeholders).' },
          { id: 'e1-2-2', text: 'Procedimiento para la actualización de requisitos de partes interesadas.' },
          { id: 'e1-2-3', text: 'Registros de comunicación con partes interesadas clave (encuestas, reuniones).' }
        ]
      }
    ]
  },
  {
    id: 'c2',
    title: 'Cláusula 5: Liderazgo',
    questions: [
      {
        id: 'q2-1',
        text: '¿La alta dirección demuestra liderazgo y compromiso con respecto al sistema de gestión de calidad?',
        evidence: [
          { id: 'e2-1-1', text: 'Evidencia de participación en revisiones por la dirección.' },
          { id: 'e2-1-2', text: 'Asignación de recursos documentada en presupuestos o planes.' }
        ]
      },
      {
        id: 'q2-2',
        text: '¿Se ha establecido una política de calidad que es comunicada y entendida?',
        evidence: [
          { id: 'e2-2-1', text: 'Política de calidad documentada, firmada y fechada.' },
          { id: 'e2-2-2', text: 'Registros de capacitación o comunicación de la política al personal.' }
        ]
      }
    ]
  },
  {
    id: 'c3',
    title: 'Cláusula 6: Planificación',
    questions: [
      {
        id: 'q3-1',
        text: '¿Se han planificado acciones para abordar los riesgos y oportunidades identificados?',
        evidence: [
          { id: 'e3-1-1', text: 'Metodología de evaluación de riesgos y oportunidades definida.' },
          { id: 'e3-1-2', text: 'Matriz de riesgos y oportunidades documentada.' }
        ]
      }
    ]
  }
];
