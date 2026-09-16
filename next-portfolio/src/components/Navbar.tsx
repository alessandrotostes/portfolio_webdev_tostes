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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-2.5 group cursor-pointer shrink-0"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-emerald-500/50 transition-all">
            <img src="/img/logo.webp" alt="Alessandro Tostes" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-slate-900 tracking-tight leading-none group-hover:text-emerald-600 transition-colors">
              TOSTES<span className="text-emerald-600">.DEV</span>
            </span>
            <span className="text-[10px] text-slate-500 font-mono mt-0.5">FULL-STACK & SAAS</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/95 p-1.5 rounded-full border border-slate-200 shadow-xs backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={(e) => handleNavClick(e, link.targetId)}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-full transition-all cursor-pointer whitespace-nowrap"
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
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>{t.nav.ctaEmail}</span>
            </a>
          ) : (
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>{t.nav.ctaWhatsApp}</span>
            </a>
          )}
        </div>

        {/* Mobile Menu & Language Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageSwitcher showIcon={false} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg bg-white border border-slate-200 shadow-2xs cursor-pointer"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-lg">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.targetId}
                href={`#${link.targetId}`}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="mt-2 pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Language / Idioma:</span>
              <LanguageSwitcher />
            </div>

            {language === 'en' ? (
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry`}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>{t.nav.ctaEmail}</span>
              </a>
            ) : (
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.nav.ctaWhatsApp}</span>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
