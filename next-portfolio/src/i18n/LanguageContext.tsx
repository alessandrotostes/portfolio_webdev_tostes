import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationSchema } from './translations';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. URL Query Parameter Priority
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang')?.toLowerCase();
      if (urlLang === 'en' || urlLang === 'pt') {
        return urlLang as Language;
      }

      // 2. LocalStorage Priority
      const savedLang = localStorage.getItem('selected_lang');
      if (savedLang === 'en' || savedLang === 'pt') {
        return savedLang as Language;
      }

      // 3. Browser Language Priority
      const browserLang = navigator.language || (navigator as any).userLanguage || '';
      if (browserLang.toLowerCase().startsWith('en')) {
        return 'en';
      }
    }

    // 4. Default Fallback
    return 'pt';
  });

  const updateMetaAndUrl = (lang: Language) => {
    if (typeof window === 'undefined') return;

    // Save preference
    localStorage.setItem('selected_lang', lang);

    // Sync History API
    const url = new URL(window.location.href);
    if (lang === 'en') {
      url.searchParams.set('lang', 'en');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState(null, '', url.toString());

    // Update <html lang="...">
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

    // Update SEO Meta Tags
    const t = translations[lang];
    document.title = t.meta.title;

    const setMeta = (nameOrProp: string, attr: 'name' | 'property', content: string) => {
      let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, nameOrProp);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', 'name', t.meta.description);
    setMeta('keywords', 'name', t.meta.keywords);

    // OpenGraph
    setMeta('og:title', 'property', t.meta.title);
    setMeta('og:description', 'property', t.meta.description);
    setMeta('og:locale', 'property', lang === 'en' ? 'en_US' : 'pt_BR');

    // Twitter
    setMeta('twitter:title', 'name', t.meta.title);
    setMeta('twitter:description', 'name', t.meta.description);
  };

  useEffect(() => {
    updateMetaAndUrl(language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    updateMetaAndUrl(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
