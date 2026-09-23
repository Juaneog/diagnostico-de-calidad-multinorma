import React from 'react';

interface LandingPageProps {
  onEnterPlatform: () => void;
  onOpenGuideModal?: () => void;
  escudoSrc: string;
  isAuthenticated: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterPlatform, onOpenGuideModal, escudoSrc, isAuthenticated }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-950 to-slate-950 text-white relative overflow-hidden flex flex-col justify-between">
      {/* Decorative background glow circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"></div>

      {/* Top Header */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-xl border border-white/20 shadow-lg">
            <img 
              src={escudoSrc} 
              alt="Escudo Universidad de Córdoba" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Universidad de Córdoba</p>
            <p className="text-[10px] text-slate-400 font-medium">Departamento de Córdoba, Colombia</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {onOpenGuideModal && (
            <button
              onClick={onOpenGuideModal}
              className="px-4 py-2.5 rounded-xl bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-400/40 text-cyan-200 transition-all font-semibold text-sm backdrop-blur-sm shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5"
              title="Abrir Guía de Uso y Manuales"
            >
              <span>📖</span>
              <span className="hidden sm:inline">Guía & Manuales</span>
            </button>
          )}
          <button
            onClick={onEnterPlatform}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/40 transition-all font-semibold text-sm backdrop-blur-sm shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {isAuthenticated ? 'Ir al Panel' : 'Ingresar'}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Hero & Content */}
      <main className="container mx-auto px-6 py-12 flex-grow flex flex-col justify-center items-center text-center max-w-5xl z-10">
        
        {/* Project Tag / Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Código de Proyecto: FI-02-24
        </div>

        {/* University Structure */}
        <h2 className="text-lg md:text-xl font-semibold text-slate-300 tracking-wide mb-3 uppercase">
          Facultad de Ingenierías
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 tracking-wide mb-6">
          Programa de Ingeniería Industrial
        </h3>

        {/* Project Shield Display */}
        <div className="my-6 relative group">
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-[40px] opacity-75 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative bg-white/5 backdrop-blur-xl p-6 rounded-full border border-white/10 shadow-2xl hover:border-emerald-500/30 transition-all duration-500 transform hover:scale-105">
            <img 
              src={escudoSrc} 
              alt="Escudo de la Universidad de Córdoba" 
              className="h-32 md:h-36 w-auto object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>

        {/* Project Name (Title) */}
        <div className="max-w-4xl mt-6">
          <p className="text-xs uppercase font-bold tracking-widest text-emerald-500 mb-2">Nombre del Proyecto</p>
          <h1 className="text-2xl md:text-4xl lg:text-[40px] font-extrabold leading-tight tracking-tight text-white mb-8 drop-shadow-sm font-sans px-4">
            CÓRDOBA, DESTINO DE CLASE MUNDIAL:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              IMPLEMENTACIÓN DE ESTRATEGIAS DIGITALES
            </span>{' '}
            PARA LA ADOPCIÓN DE NORMAS DE CALIDAD EN LOS ACTORES DE CLÚSTER TURÍSTICO DEL DEPARTAMENTO DE CÓRDOBA
          </h1>
        </div>

        {/* Main CTA Button */}
        <div className="mt-4">
          <button
            onClick={onEnterPlatform}
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 font-bold text-lg shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-98 transition-all duration-300 transform flex items-center gap-3 border border-emerald-400/20"
          >
            {isAuthenticated ? 'Acceder al Panel de Diagnósticos' : 'Comenzar Autoevaluación'}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce-horizontal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Platform Core Standards Section */}
        <div className="w-full mt-24 pt-12 border-t border-white/10">
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 mb-8">Normativas de Calidad Soportadas</h4>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            
            {/* Card NTC 6001 */}
            <div className="bg-white/5 border border-white/10 hover:border-emerald-500/30 p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5 group">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold mb-4 group-hover:bg-emerald-500/20 transition-colors">
                6001
              </div>
              <h5 className="font-bold text-lg mb-2 text-white group-hover:text-emerald-300 transition-colors">NTC 6001</h5>
              <p className="text-slate-400 text-xs leading-relaxed">
                Establece los requisitos para estructurar un sistema de gestión en micro, pequeñas y medianas empresas (MiPymes), optimizando su competitividad en el mercado.
              </p>
            </div>

            {/* Card NTC 6496 */}
            <div className="bg-white/5 border border-white/10 hover:border-emerald-500/30 p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5 group">
              <div className="h-10 w-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-bold mb-4 group-hover:bg-teal-500/20 transition-colors">
                6496
              </div>
              <h5 className="font-bold text-lg mb-2 text-white group-hover:text-teal-300 transition-colors">NTC 6496</h5>
              <p className="text-slate-400 text-xs leading-relaxed">
                Norma técnica de sostenibilidad para establecimientos gastronómicos. Define lineamientos de compras verdes, ahorro de recursos y fomento sociocultural.
              </p>
            </div>

            {/* Card NTC 6503 */}
            <div className="bg-white/5 border border-white/10 hover:border-emerald-500/30 p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5 group">
              <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mb-4 group-hover:bg-cyan-500/20 transition-colors">
                6503
              </div>
              <h5 className="font-bold text-lg mb-2 text-white group-hover:text-cyan-300 transition-colors">NTC 6503</h5>
              <p className="text-slate-400 text-xs leading-relaxed">
                Requisitos de sostenibilidad turística aplicables a establecimientos de alojamiento y hospedaje, integrando gestión ambiental, social y económica.
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-white/5 text-center text-xs text-slate-500 z-10">
        <p className="mb-2">
          © {new Date().getFullYear()} Universidad de Córdoba. Todos los derechos reservados.
        </p>
        <p>
          Proyecto ejecutado por la Facultad de Ingenierías en el Programa de Ingeniería Industrial.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
