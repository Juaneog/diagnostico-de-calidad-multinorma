import { IClause } from '../types';

export const NTC_6503_DATA: IClause[] = [
  {
    id: 'ntc6503-c1',
    title: 'Requisitos Ambientales para la Sostenibilidad',
    questions: [
      {
        id: 'ntc6503-q1-1',
        text: '¿Se han implementado programas documentados para el uso eficiente de agua y energía?',
        evidence: [
          { id: 'ntc6503-e1-1-1', text: 'Registros mensuales de consumo de agua y energía con metas de reducción establecidas.' },
          { id: 'ntc6503-e1-1-2', text: 'Evidencia de uso de tecnologías ahorradoras (ej. luces LED, grifos de bajo consumo, sensores).' },
          { id: 'ntc6503-e1-1-3', text: 'Política de reutilización de lencería (toallas y sábanas) comunicada a los huéspedes.' }
        ]
      },
      {
        id: 'ntc6503-q1-2',
        text: '¿Existe un plan de manejo integral para los residuos sólidos, incluyendo los peligrosos?',
        evidence: [
          { id: 'ntc6503-e1-2-1', text: 'Programa de separación en la fuente (reciclables, orgánicos, no aprovechables) claramente señalizado.' },
          { id: 'ntc6503-e1-2-2', text: 'Contratos o certificados de recolección de residuos por gestores autorizados.' },
          { id: 'ntc6503-e1-2-3', text: 'Procedimiento documentado para el manejo y disposición de residuos peligrosos (ej. aceites, baterías).' }
        ]
      }
    ]
  },
  {
    id: 'ntc6503-c2',
    title: 'Requisitos Socioculturales para la Sostenibilidad',
    questions: [
      {
        id: 'ntc6503-q2-1',
        text: '¿La organización promueve la contratación de personal de la comunidad local y ofrece condiciones laborales justas?',
        evidence: [
          { id: 'ntc6503-e2-1-1', text: 'Estadísticas o registros que demuestran la proporción de personal local contratado.' },
          { id: 'ntc6503-e2-1-2', text: 'Evidencia del cumplimiento de la normativa laboral (contratos, pago de seguridad social).' },
          { id: 'ntc6503-e2-1-3', text: 'Programa de capacitación y desarrollo para el personal, incluyendo temas de sostenibilidad.' }
        ]
      },
      {
        id: 'ntc6503-q2-2',
        text: '¿Se promueve y respeta el patrimonio cultural local y se previene la explotación?',
        evidence: [
          { id: 'ntc6503-e2-2-1', text: 'Material informativo para los huéspedes sobre atractivos, gastronomía y costumbres locales.' },
          { id: 'ntc6503-e2-2-2', text: 'Política de compras que prioriza productos y artesanías locales y justas.' },
          { id: 'ntc6503-e2-2-3', text: 'Código de conducta para turistas sobre el respeto al patrimonio cultural y natural.' }
        ]
      }
    ]
  }
];
