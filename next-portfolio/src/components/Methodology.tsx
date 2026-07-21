import React from 'react';
import { Target, Search, Accessibility, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export const Methodology: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: "Tracking & Pixels",
      badge: "GTM & Meta Pixel",
      description: "Configuração completa de tags no Google Tag Manager, Meta Pixel (Facebook/Instagram), GA4 e rastreamento de eventos de conversão.",
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      icon: Search,
      title: "SEO Técnico & Dinâmico",
      badge: "Top Google",
      description: "Metadados ricos, estrutura semântica HTML5, sitemaps automatizados e marcação Schema.org para atrair tráfego orgânico qualificado.",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Accessibility,
      title: "Acessibilidade Universal",
      badge: "WCAG 2.1 AA",
      description: "Interface projetada para todos os públicos: navegação fluida por teclado, leitores de tela e alto contraste visual.",
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Foco em ROI & Valor",
      badge: "Retorno Real",
      description: "Software é investimento. Arquitetura limpa que não envelhece mal e experiência de usuário projetada para gerar receita.",
      gradient: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <section id="methodology" className="py-12 sm:py-20 lg:py-24 scroll-mt-20 relative bg-slate-950 border-t border-slate-800/50 overflow-hidden w-full max-w-full">
      
      {/* Glow (Desktop Only) */}
      <div className="hidden md:block absolute top-1/2 right-1/4 w-96 h-96 max-w-full bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Padrões Técnicos Rígidos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Metodologia de <span className="gradient-text-cyan">Engenharia Web</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Não é só escrever código: é entregar um produto digital rápido, seguro e estrategicamente desenhado para conversão.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.gradient} flex items-center justify-center text-slate-950 shadow-md`}>
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-300">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{pillar.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center gap-2 text-[11px] font-semibold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Garantia de Qualidade</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
