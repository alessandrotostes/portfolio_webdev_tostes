import React from 'react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { Layers, Rocket, Smartphone, Cpu, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const iconMap = {
  Layers: Layers,
  Rocket: Rocket,
  Smartphone: Smartphone,
  Cpu: Cpu
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 sm:py-20 lg:py-24 scroll-mt-20 relative bg-slate-950/80 border-t border-slate-800/50 overflow-hidden w-full max-w-full">
      
      {/* Background Decorative Blur (Desktop Only) */}
      <div className="hidden md:block absolute top-1/2 left-0 w-80 h-80 max-w-full bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 max-w-full bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Soluções Sob Medida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Serviços desenhados para <span className="gradient-text-cyan">gerar resultados reais</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Do planejamento de arquitetura até a entrega final com código limpo, suporte a PWA e velocidade máxima no celular.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName];
            return (
              <div
                key={service.id}
                className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between border border-slate-800/80 group"
              >
                <div>
                  {/* Card Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.gradient} flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/10 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-slate-300">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mb-4">
                    {service.subtitle}
                  </p>
                  
                  {/* Detailed Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-800/60">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Principais Benefícios:</span>
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverable Tags & CTA */}
                <div className="pt-6 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.deliverables.map((deliv, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-400">
                        {deliv}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`${PERSONAL_INFO.whatsapp}&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Solicitar Proposta para este Serviço</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
