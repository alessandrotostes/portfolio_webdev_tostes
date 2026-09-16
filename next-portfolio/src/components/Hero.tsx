import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight, MessageCircle, Mail, ShieldCheck, Code2, Sparkles, CheckCircle2, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 flex items-center overflow-hidden scroll-mt-20 bg-slate-50">
      {/* Background Decorative Subtle Pastel Glows (Desktop Only) */}
      <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] max-w-full bg-gradient-to-tr from-emerald-100/60 via-sky-100/50 to-indigo-100/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-10 right-10 max-w-full w-96 h-96 bg-sky-100/60 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200/90 text-xs font-semibold text-slate-800 mb-6 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{t.hero.status}</span>
              <span className="text-slate-300">|</span>
              <span className="text-emerald-700 font-mono font-bold">{t.hero.location}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              {t.hero.headingPrefix}
              <span className="gradient-text-cyan">{t.hero.headingHighlight}</span>
              {t.hero.headingSuffix}
            </h1>

            {/* Subheading / Description */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              {t.hero.subheading}
            </p>

            {/* Highlighted Value Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {t.hero.pills.map((pill, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-xs hover:border-emerald-300 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{pill}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons (Cultural Adaptation: Dual Contact) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {language === 'en' ? (
                <>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <Mail className="w-5 h-5 text-white" />
                    <span>{t.hero.ctaPrimaryEmail}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-xs transition-all duration-200 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                    <span>{t.hero.ctaPrimaryWhatsapp}</span>
                  </a>
                </>
              ) : (
                <>
                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>{t.hero.ctaPrimaryWhatsapp}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      history.replaceState(null, '', window.location.pathname + window.location.search);
                    }}
                    className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-xs transition-all duration-200 cursor-pointer"
                  >
                    <Code2 className="w-4 h-4 text-emerald-600" />
                    <span>{t.hero.ctaSecondaryProjects}</span>
                  </a>
                </>
              )}
            </div>

          </div>

          {/* Right Column: Hero Metrics & Visual Highlight Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-md animate-float">
              
              {/* Card Header Badge */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/80 border border-emerald-200/80 flex items-center justify-center text-emerald-700 shadow-xs">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{t.hero.badgeTitle}</h3>
                    <p className="text-xs text-slate-500">{t.hero.badgeRole}</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-bold text-emerald-800 text-center flex items-center justify-center">
                  {t.hero.badgeTopCode}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100">
                  <div className="flex items-center gap-1.5 text-sky-600 mb-1">
                    <Target className="w-4 h-4" />
                    <span className="text-xl font-extrabold text-slate-900">{t.hero.metricTrackingTitle}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">{t.hero.metricTrackingDesc}</p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100">
                  <div className="flex items-center gap-1.5 text-amber-600 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xl font-extrabold text-slate-900">{t.hero.metricExpTitle}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">{t.hero.metricExpDesc}</p>
                </div>
              </div>

              {/* Core Stack Highlights */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block">{t.hero.stackTitle}</span>
                <div className="flex flex-wrap gap-2">
                  {t.hero.stackItems.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/80 text-xs font-semibold text-slate-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
