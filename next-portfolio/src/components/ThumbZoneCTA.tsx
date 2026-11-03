import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';
import { MessageCircle } from 'lucide-react';

export const ThumbZoneCTA: React.FC = () => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside 
      className="fixed right-4 sm:right-6 bottom-safe z-40 flex items-center gap-2 pointer-events-none"
      aria-label="Atendimento rápido"
    >
      {/* Tooltip on Desktop Hover */}
      <div 
        className={`hidden sm:flex items-center px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold shadow-lg transition-all duration-200 pointer-events-auto ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span>{t.floatingCta.tooltip}</span>
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
      </div>

      {/* Floating Thumb-Zone Action Button */}
      <a
        href={PERSONAL_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floatingCta.ariaLabel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-600/35 hover:shadow-2xl hover:shadow-emerald-600/50 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer haptic-press group"
      >
        {/* Availability Active Ping */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white shadow-xs"></span>
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white text-white group-hover:rotate-6 transition-transform" />
      </a>
    </aside>
  );
};
