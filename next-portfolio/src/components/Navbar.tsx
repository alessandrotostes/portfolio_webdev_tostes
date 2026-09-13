import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, ArrowUpRight, MessageCircle, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, targetId: 'home' },
    { name: t.nav.services, targetId: 'services' },
    { name: t.nav.pwa, targetId: 'pwa' },
    { name: t.nav.projects, targetId: 'projects' },
    { name: t.nav.experience, targetId: 'experience' },
    { name: t.nav.methodology, targetId: 'methodology' },
    { name: t.nav.contact, targetId: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    history.replaceState(null, '', window.location.pathname + window.location.search);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-2.5 group cursor-pointer shrink-0"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center shadow-md shadow-cyan-500/10 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
            <img src="/img/logo.webp" alt="Alessandro Tostes" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-slate-100 tracking-tight leading-none group-hover:text-cyan-400 transition-colors">
              TOSTES<span className="text-cyan-400">.DEV</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono mt-0.5">FULL-STACK & SAAS</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={(e) => handleNavClick(e, link.targetId)}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/80 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTA & Language Switcher */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <LanguageSwitcher />

          {language === 'en' ? (
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry`}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 text-slate-900" />
              <span>{t.nav.ctaEmail}</span>
            </a>
          ) : (
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-900" />
              <span>{t.nav.ctaWhatsApp}</span>
            </a>
          )}
        </div>

        {/* Mobile Menu & Language Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageSwitcher showIcon={false} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800 cursor-pointer"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.targetId}
                href={`#${link.targetId}`}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800/60 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="mt-2 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Language / Idioma:</span>
              <LanguageSwitcher />
            </div>

            {language === 'en' ? (
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry`}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 py-3 text-sm font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl"
              >
                <Mail className="w-4 h-4 text-slate-900" />
                <span>{t.nav.ctaEmail}</span>
              </a>
            ) : (
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 py-3 text-sm font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl"
              >
                <MessageCircle className="w-4 h-4 fill-slate-900" />
                <span>{t.nav.ctaWhatsApp}</span>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
