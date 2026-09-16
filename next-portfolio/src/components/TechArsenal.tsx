import React from 'react';
import { TECH_ARSENAL } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';
import { Code2, Server, ShieldCheck, Cpu, Layers } from 'lucide-react';

export const TechArsenal: React.FC = () => {
  const { t } = useLanguage();

  const categories = [
    { title: t.techArsenal.categories.frontend, icon: Code2, items: TECH_ARSENAL.frontend, bg: "bg-emerald-100", text: "text-emerald-800", border: "border-emerald-200" },
    { title: t.techArsenal.categories.backend, icon: Server, items: TECH_ARSENAL.backend, bg: "bg-sky-100", text: "text-sky-800", border: "border-sky-200" },
    { title: t.techArsenal.categories.quality, icon: ShieldCheck, items: TECH_ARSENAL.quality, bg: "bg-rose-100", text: "text-rose-800", border: "border-rose-200" },
    { title: t.techArsenal.categories.architecture, icon: Layers, items: TECH_ARSENAL.architecture, bg: "bg-amber-100", text: "text-amber-800", border: "border-amber-200" },
    { title: t.techArsenal.categories.ai, icon: Cpu, items: TECH_ARSENAL.ai, bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-200" },
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 scroll-mt-20 relative bg-white border-t border-slate-200/80 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800 mb-4 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-sky-600" />
            <span>{t.techArsenal.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.techArsenal.titlePrefix}
            <span className="gradient-text-cyan">{t.techArsenal.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.techArsenal.description}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between bg-white shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${cat.bg} ${cat.text} border ${cat.border} flex items-center justify-center font-bold shadow-xs`}>
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/90 text-xs font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50/40 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
