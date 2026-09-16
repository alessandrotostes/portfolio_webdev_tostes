import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-12 sm:py-20 lg:py-24 scroll-mt-20 relative bg-slate-50 border-t border-slate-200/80 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 mb-4 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.experience.titlePrefix}
            <span className="gradient-text-cyan">{t.experience.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.experience.description}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, idx) => {
            const translatedItem = t.experience.items[idx];

            const role = translatedItem?.role || exp.role;
            const company = translatedItem?.company || exp.company;
            const period = translatedItem?.period || exp.period;
            const description = translatedItem?.description || exp.description;
            const achievements = translatedItem?.achievements || exp.achievements;

            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/90 hover:border-slate-300 transition-colors bg-white shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{role}</h3>
                    <span className="text-sm font-bold text-emerald-700">{company}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{period}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {description}
                </p>

                {/* Achievements */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider block">{t.experience.deliveriesLabel}</span>
                  {achievements.map((achieve, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{achieve}</span>
                    </div>
                  ))}
                </div>

                {/* Techs */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {exp.techs.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/80 text-xs font-mono font-medium text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
