import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Code2, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', window.location.pathname + window.location.search);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', window.location.pathname + window.location.search);
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Rights */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 font-bold">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-slate-200">{PERSONAL_INFO.name}</p>
            <p className="text-[10px] text-slate-400">© {new Date().getFullYear()} TostesDev. {t.footer.rights}</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-slate-400">
          <a 
            href="#services" 
            onClick={(e) => handleLinkClick(e, 'services')} 
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            {t.nav.services}
          </a>
          <a 
            href="#pwa" 
            onClick={(e) => handleLinkClick(e, 'pwa')} 
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            {t.nav.pwa}
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleLinkClick(e, 'projects')} 
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            {t.nav.projects}
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, 'contact')} 
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            {t.nav.contact}
          </a>
        </div>

        {/* Language Switcher & Scroll Top Button */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
            title={t.footer.scrollTop}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
