import { IClause } from '../types';

export const NTC_6496_DATA: IClause[] = [
  {
    id: 'ntc6496-c1',
    title: 'Dimensión Ambiental Sostenible',
    questions: [
      {
        id: 'ntc6496-q1-1',
        text: '¿Se gestiona eficientemente el consumo de agua y energía, y se responde a emergencias ambientales?',
        evidence: [
          { id: 'ntc6496-e1-1-1', text: 'Registros de consumo de agua y energía con metas de reducción establecidas.' },
          { id: 'ntc6496-e1-1-2', text: 'Implementación de tecnologías ahorradoras (ej. LED, grifos de bajo consumo).' },
          { id: 'ntc6496-e1-1-3', text: 'Plan de preparación y respuesta a emergencias ambientales documentado y socializado.' }
        ]
      },
      {
        id: 'ntc6496-q1-2',
        text: '¿Se implementa un programa de economía circular para la gestión de residuos sólidos, efluentes y emisiones?',
        evidence: [
          { id: 'ntc6496-e1-2-1', text: 'Programa de reducción y separación en la fuente (reciclables, orgánicos, peligrosos).' },
          { id: 'ntc6496-e1-2-2', text: 'Evidencia de reducción de plásticos de un solo uso y uso de materiales biodegradables.' },
          { id: 'ntc6496-e1-2-3', text: 'Contratos con gestores autorizados para residuos y manejo adecuado de aguas residuales (trampa de grasas).' }
        ]
      },
      {
        id: 'ntc6496-q1-3',
        text: '¿Se aplican criterios de sostenibilidad en la adquisición de alimentos y se protege la biodiversidad local?',
        evidence: [
          { id: 'ntc6496-e1-3-1', text: 'Política de compras con criterios de sostenibilidad (productos locales, de temporada, orgánicos).' },
          { id: 'ntc6496-e1-3-2', text: 'Evidencia de compras a productores locales para apoyar la economía de la región.' },
          { id: 'ntc6496-e1-3-3', text: 'Acciones para preservar la flora y fauna del área (si aplica) y paisajismo de bajo impacto.' }
        ]
      }
    ]
  },
  {
    id: 'ntc6496-c2',
    title: 'Dimensión Sociocultural Sostenible',
    questions: [
      {
        id: 'ntc6496-q2-1',
        text: '¿Se promueve el empleo local, se aseguran condiciones laborales justas y se apoya a la comunidad?',
        evidence: [
          { id: 'ntc6496-e2-1-1', text: 'Registros que demuestran la proporción de personal de la comunidad local.' },
          { id: 'ntc6496-e2-1-2', text: 'Cumplimiento de normativa laboral (contratos, seguridad social, salarios justos).' },
          { id: 'ntc6496-e2-1-3', text: 'Evidencia de apoyo a iniciativas locales de salud, educación o cultura.' }
        ]
      },
      {
        id: 'ntc6496-q2-2',
        text: '¿Se implementan medidas para prevenir la explotación (ESCNNA) y proteger el patrimonio cultural?',
        evidence: [
          { id: 'ntc6496-e2-2-1', text: 'Código de conducta formalizado y socializado para la prevención de ESCNNA.' },
          { id: 'ntc6496-e2-2-2', text: 'Política de promoción del patrimonio cultural y denuncia del tráfico de bienes culturales.' },
          { id: 'ntc6496-e2-2-3', text: 'Respeto documentado por los derechos y tradiciones de comunidades nativas (si aplica).' }
        ]
      }
    ]
  },
  {
    id: 'ntc6496-c3',
    title: 'Dimensión Económica, de Calidad y Seguridad',
    questions: [
      {
        id: 'ntc6496-q3-1',
        text: '¿Se asegura la viabilidad económica del negocio y se planifica la calidad del servicio?',
        evidence: [
          { id: 'ntc6496-e3-1-1', text: 'Plan de negocio actualizado que demuestra viabilidad a corto, mediano y largo plazo.' },
          { id: 'ntc6496-e3-1-2', text: 'Procedimiento documentado para medir la satisfacción del cliente (encuestas, análisis de resultados).' },
          { id: 'ntc6496-e3-1-3', text: 'Sistema para la gestión de quejas y reclamos con acciones de mejora documentadas.' }
        ]
      },
      {
        id: 'ntc6496-q3-2',
        text: '¿Se garantiza la salud y seguridad de clientes y trabajadores, incluyendo la inocuidad alimentaria?',
        evidence: [
          { id: 'ntc6496-e3-2-1', text: 'Implementación de un sistema de Análisis de Peligros y Puntos Críticos de Control (HACCP) o BPM.' },
          { id: 'ntc6496-e3-2-2', text: 'Plan de saneamiento básico (limpieza, desinfección, control de plagas) con registros.' },
          { id: 'ntc6496-e3-2-3', text: 'Matriz de identificación de peligros y evaluación de riesgos de Seguridad y Salud en el Trabajo (SST).' }
        ]
      }
    ]
  }
];
