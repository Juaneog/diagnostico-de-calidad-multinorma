import React from 'react';

interface StandardDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  contentHTML: string;
}

const StandardDetailModal: React.FC<StandardDetailModalProps> = ({ isOpen, onClose, title, contentHTML }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 print:hidden" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-fade-in-up" 
        onClick={e => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-5 border-b border-slate-200">
          <h3 className="text-xl font-bold text-cyan-700">{title}</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
        </main>

        <footer className="p-4 border-t border-slate-200 text-right">
           <button 
                onClick={onClose} 
                className="bg-slate-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-slate-700 transition-colors"
            >
                Cerrar
            </button>
        </footer>
      </div>
       <style>{`
        .animate-fade-in-up { 
            animation: fadeIn-up 0.3s ease-out; 
        } 
        @keyframes fadeIn-up { 
            from { opacity: 0; transform: translateY(20px); } 
            to { opacity: 1; transform: translateY(0); } 
        }
      `}</style>
    </div>
  );
};

export default StandardDetailModal;
