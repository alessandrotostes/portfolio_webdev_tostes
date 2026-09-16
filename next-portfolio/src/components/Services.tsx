import React from 'react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';
import { Layers, Rocket, Smartphone, Cpu, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const iconMap = {
  Layers: Layers,
  Rocket: Rocket,
  Smartphone: Smartphone,
  Cpu: Cpu
};

const pastelColorMap: Record<string, { bg: string; text: string; border: string }> = {
  saas: { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-200' },
  landing: { bg: 'bg-rose-100', text: 'text-rose-800', border: 'border-rose-200' },
  pwa: { bg: 'bg-sky-100', text: 'text-sky-800', border: 'border-sky-200' },
  ai: { bg: 'bg-indigo-100', text: 'text-indigo-800', border: 'border-indigo-200' },
};

export const Services: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="services" className="py-12 sm:py-20 lg:py-24 scroll-mt-20 relative bg-white border-t border-slate-200/80 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.services.titlePrefix}
            <span className="gradient-text-cyan">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName];
            const itemTranslation = t.services.items[service.id as keyof typeof t.services.items];
            const colors = pastelColorMap[service.id] || pastelColorMap.saas;

            const serviceTitle = itemTranslation?.title || service.title;
            const serviceSubtitle = itemTranslation?.subtitle || service.subtitle;
            const serviceBadge = itemTranslation?.badge || service.badge;
            const serviceDesc = itemTranslation?.description || service.description;
            const serviceBenefits = itemTranslation?.benefits || service.benefits;
            const serviceDeliverables = itemTranslation?.deliverables || service.deliverables;

            const ctaHref = language === 'en'
              ? `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Inquiry for ${serviceTitle}`)}`
              : `${PERSONAL_INFO.whatsapp}&text=${encodeURIComponent(`Olá, gostaria de saber mais sobre o serviço de ${serviceTitle}`)}`;

            return (
              <div
                key={service.id}
                className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between border border-slate-200/90 group bg-white shadow-xs"
              >
                <div>
                  {/* Card Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.text} border ${colors.border} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-700">
                      {serviceBadge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {serviceTitle}
                  </h3>
                  <p className="text-xs font-bold text-emerald-700 mb-4">
                    {serviceSubtitle}
                  </p>
                  
                  {/* Detailed Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {serviceDesc}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider block">{t.services.benefitsLabel}</span>
                    {serviceBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverable Tags & CTA */}
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {serviceDeliverables.map((deliv, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/80 text-[11px] font-medium text-slate-600">
                        {deliv}
                      </span>
                    ))}
                  </div>

                  <a
                    href={ctaHref}
                    target={language === 'en' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 group-hover:translate-x-0.5 transition-all cursor-pointer"
                  >
                    <span>{t.services.cta}</span>
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
