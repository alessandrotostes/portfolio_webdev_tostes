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
    <div className={`inline-flex items-center gap-1.5 bg-white/90 p-1 rounded-full border border-slate-200/90 shadow-2xs backdrop-blur-md ${className}`}>
      {showIcon && <Globe className="w-3.5 h-3.5 text-emerald-600 ml-1.5" />}
      <div className="flex items-center gap-1">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all cursor-pointer ${
            language === 'pt'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Mudar para Português"
        >
          PT
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all cursor-pointer ${
            language === 'en'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>
    </div>
  );
};
