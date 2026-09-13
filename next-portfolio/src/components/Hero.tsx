import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight, MessageCircle, Mail, ShieldCheck, Code2, Sparkles, CheckCircle2, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 flex items-center overflow-hidden scroll-mt-20">
      {/* Background Decorative Glows (Desktop Only) */}
      <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-full bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-10 right-10 max-w-full w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.hero.status}</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400 font-mono">{t.hero.location}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15] mb-6">
              {t.hero.headingPrefix}
              <span className="gradient-text-cyan">{t.hero.headingHighlight}</span>
              {t.hero.headingSuffix}
            </h1>

            {/* Subheading / Description */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              {t.hero.subheading}
            </p>

            {/* Highlighted Value Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {t.hero.pills.map((pill, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs font-medium text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
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
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold text-slate-900 bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-[1.02] transition-all duration-200 active:scale-95"
                  >
                    <Mail className="w-5 h-5 text-slate-900" />
                    <span>{t.hero.ctaPrimaryEmail}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 transition-all duration-200 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                    <span>{t.hero.ctaPrimaryWhatsapp}</span>
                  </a>
                </>
              ) : (
                <>
                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold text-slate-900 bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-[1.02] transition-all duration-200 active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-900" />
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
                    className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 transition-all duration-200 cursor-pointer"
                  >
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span>{t.hero.ctaSecondaryProjects}</span>
                  </a>
                </>
              )}
            </div>

          </div>

          {/* Right Column: Hero Metrics & Visual Highlight Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 shadow-2xl animate-float">
              
              {/* Card Header Badge */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-100 text-base">{t.hero.badgeTitle}</h3>
                    <p className="text-xs text-slate-400">{t.hero.badgeRole}</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono text-cyan-300 text-center flex items-center justify-center">
                  {t.hero.badgeTopCode}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                    <Target className="w-4 h-4" />
                    <span className="text-lg font-extrabold text-slate-100">{t.hero.metricTrackingTitle}</span>
                  </div>
                  <p className="text-xs text-slate-400">{t.hero.metricTrackingDesc}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xl font-extrabold text-slate-100">{t.hero.metricExpTitle}</span>
                  </div>
                  <p className="text-xs text-slate-400">{t.hero.metricExpDesc}</p>
                </div>
              </div>

              {/* Core Stack Highlights */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">{t.hero.stackTitle}</span>
                <div className="flex flex-wrap gap-2">
                  {t.hero.stackItems.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-xs font-medium text-slate-300">
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
