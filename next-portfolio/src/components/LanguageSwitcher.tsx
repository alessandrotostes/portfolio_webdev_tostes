import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  showIcon?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '', showIcon = true }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`inline-flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-full border border-slate-800 backdrop-blur-md ${className}`}>
      {showIcon && <Globe className="w-3.5 h-3.5 text-cyan-400 ml-1.5" />}
      <div className="flex items-center gap-1">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all cursor-pointer ${
            language === 'pt'
              ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          aria-label="Mudar para Português"
        >
          PT
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all cursor-pointer ${
            language === 'en'
              ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>
    </div>
  );
};
