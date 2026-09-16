import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Target, Search, Accessibility, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

const pillarPastels = [
  { bg: "bg-emerald-100", text: "text-emerald-800", border: "border-emerald-200" },
  { bg: "bg-sky-100", text: "text-sky-800", border: "border-sky-200" },
  { bg: "bg-rose-100", text: "text-rose-800", border: "border-rose-200" },
  { bg: "bg-amber-100", text: "text-amber-800", border: "border-amber-200" },
];

export const Methodology: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Target, Search, Accessibility, TrendingUp];

  return (
    <section id="methodology" className="py-12 sm:py-20 lg:py-24 scroll-mt-20 relative bg-slate-50 border-t border-slate-200/80 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.methodology.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.methodology.titlePrefix}
            <span className="gradient-text-cyan">{t.methodology.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.methodology.description}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.methodology.pillars.map((pillar, idx) => {
            const Icon = icons[idx];
            const colors = pillarPastels[idx] || pillarPastels[0];
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between bg-white shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} border ${colors.border} flex items-center justify-center shadow-xs`}>
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-mono font-semibold text-slate-700">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{pillar.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-bold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.methodology.qualityGuarantee}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
