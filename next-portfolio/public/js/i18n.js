/**
 * Engine i18n Client-Side para sites estáticos
 * Especificação segundo INSTRUCOES_I18N.md
 */

const translations = {
  pt: {
    title: "Alessandro Tostes | Desenvolvedor Web & Programador Full-Stack | Ribeirão Preto & Remoto",
    description: "Desenvolvedor Web e Programador Full-Stack em Ribeirão Preto (SP) com atendimento remoto para todo o Brasil e exterior. Soluções de alta performance: Web Apps SaaS, Landing Pages de alta conversão, PWA e IA.",
    status: "Disponível para Projetos",
    location: "Ribeirão Preto - SP • Remoto Brasil & Global"
  },
  en: {
    title: "Alessandro Tostes | Full-Stack Web Developer & Software Engineer | Remote & Worldwide",
    description: "Full-Stack Web Developer and Software Engineer based in Ribeirão Preto (SP, Brazil), serving clients worldwide remotely. High-performance SaaS Web Apps, Landing Pages, PWA, and AI solutions.",
    status: "Available for Projects",
    location: "Ribeirão Preto, Brazil • Worldwide Remote"
  }
};

function getInitialLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang === 'en' || urlLang === 'pt') return urlLang;

  const savedLang = localStorage.getItem('selected_lang');
  if (savedLang === 'en' || savedLang === 'pt') return savedLang;

  if (navigator.language && navigator.language.startsWith('en')) return 'en';

  return 'pt';
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  localStorage.setItem('selected_lang', lang);

  const url = new URL(window.location.href);
  if (lang === 'en') {
    url.searchParams.set('lang', 'en');
  } else {
    url.searchParams.delete('lang');
  }
  window.history.replaceState(null, '', url.toString());

  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

  const t = translations[lang];
  if (t.title) document.title = t.title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t.description) metaDesc.setAttribute('content', t.description);
}

document.addEventListener('DOMContentLoaded', () => {
  const initialLang = getInitialLanguage();
  setLanguage(initialLang);
});
