import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-20 lg:py-24 scroll-mt-20 relative bg-slate-950 border-t border-slate-800/50 overflow-hidden w-full max-w-full">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-0 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trajetória Profissional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Experiência & <span className="gradient-text-cyan">Resultados</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Conheça as empresas e projetos onde atuei como líder técnico e desenvolvedor Full-Stack.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800/60">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                  <span className="text-sm font-semibold text-cyan-400">{exp.company}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Principais Entregas:</span>
                {exp.achievements.map((achieve, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{achieve}</span>
                  </div>
                ))}
              </div>

              {/* Techs */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                {exp.techs.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
