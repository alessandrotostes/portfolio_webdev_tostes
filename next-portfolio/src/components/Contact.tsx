import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';
import { MessageCircle, Mail, Github, Linkedin, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-12 sm:py-20 lg:py-24 scroll-mt-20 relative bg-slate-950/90 border-t border-slate-800/50 overflow-hidden w-full max-w-full">
      
      {/* Background Decorative Glow (Desktop Only) */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-full bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.contact.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
                {t.contact.titlePrefix}
                <span className="gradient-text-cyan">{t.contact.titleHighlight}</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                {t.contact.description}
              </p>

              {/* Direct Channels - Cultural Dual Contact Adaptation */}
              <div className="space-y-4 w-full mb-8">
                
                {language === 'en' ? (
                  <>
                    {/* Primary Highlighted Email Card for International Users */}
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-transparent border border-cyan-500/40 hover:border-cyan-400 group transition-all"
                    >
                      <div className="flex items-center gap-3 min-w-0 w-full sm:w-auto">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-bold text-sm text-slate-100">{t.contact.emailTitle}</h4>
                          <p className="text-xs text-cyan-300 font-mono break-all sm:break-normal">{PERSONAL_INFO.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 self-end sm:self-center">
                        <span>{t.contact.emailAction}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </a>

                    {/* Secondary WhatsApp Card for EN */}
                    <a
                      href={PERSONAL_INFO.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 group transition-all"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-emerald-400/20" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-sm text-slate-100">{t.contact.whatsappTitle}</h4>
                          <p className="text-xs text-slate-400 font-mono truncate">{PERSONAL_INFO.whatsappNumber}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform shrink-0 self-end sm:self-center">
                        <span>{t.contact.whatsappAction}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </a>
                  </>
                ) : (
                  <>
                    {/* Primary WhatsApp Action Card for PT */}
                    <a
                      href={PERSONAL_INFO.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/30 hover:border-emerald-400 group transition-all"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-emerald-400/20" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-sm text-slate-100">{t.contact.whatsappTitle}</h4>
                          <p className="text-xs text-emerald-300 font-mono truncate">{PERSONAL_INFO.whatsappNumber}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform shrink-0 self-end sm:self-center">
                        <span>{t.contact.whatsappAction}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </a>

                    {/* Email Action Card for PT */}
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Proposta%20de%20Projeto`}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 group transition-all"
                    >
                      <div className="flex items-center gap-3 min-w-0 w-full sm:w-auto">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-bold text-sm text-slate-100">{t.contact.emailTitle}</h4>
                          <p className="text-xs text-slate-400 font-mono break-all sm:break-normal">{PERSONAL_INFO.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 self-end sm:self-center">
                        <span>{t.contact.emailAction}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </a>
                  </>
                )}

              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{t.contact.locationText}</span>
              </div>

            </div>

            {/* Right Social Links Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
                
                <h3 className="text-xl font-bold text-slate-100">{t.contact.socialHeading}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t.contact.socialSubheading}
                </p>

                <div className="space-y-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5" />
                      <span className="text-xs font-medium">{t.contact.githubLabel}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500" />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-blue-400" />
                      <span className="text-xs font-medium">{t.contact.linkedinLabel}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500" />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
