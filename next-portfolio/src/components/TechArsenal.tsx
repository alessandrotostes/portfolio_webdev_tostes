import React from 'react';
import { TECH_ARSENAL } from '../data/portfolioData';
import { Code2, Server, ShieldCheck, Cpu, Layers } from 'lucide-react';

export const TechArsenal: React.FC = () => {
  const categories = [
    { title: "Front-End & UI", icon: Code2, items: TECH_ARSENAL.frontend, gradient: "from-cyan-500 to-blue-600" },
    { title: "Back-End & Cloud", icon: Server, items: TECH_ARSENAL.backend, gradient: "from-emerald-400 to-teal-600" },
    { title: "Qualidade & DevOps", icon: ShieldCheck, items: TECH_ARSENAL.quality, gradient: "from-indigo-500 to-purple-600" },
    { title: "Arquitetura & Padrões", icon: Layers, items: TECH_ARSENAL.architecture, gradient: "from-amber-400 to-orange-600" },
    { title: "Engenharia de IA", icon: Cpu, items: TECH_ARSENAL.ai, gradient: "from-violet-500 to-fuchsia-600" },
  ];

  return (
    <section className="py-24 relative bg-slate-950/80 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Ecossistema Técnico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Arsenal <span className="gradient-text-cyan">Tecnológico</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Ferramentas e frameworks selecionados para máxima velocidade de desenvolvimento, escalabilidade e manutenibilidade.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.gradient} flex items-center justify-center text-slate-950 font-bold shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
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
