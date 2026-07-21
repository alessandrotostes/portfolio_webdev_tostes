import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MessageCircle, Mail, Github, Linkedin, MapPin, Send, ArrowUpRight, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-slate-950/90 border-t border-slate-800/50">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Vamos Construir Algo Incrível</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
                Pronto para alavancar seu <span className="gradient-text-cyan">projeto digital?</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                Estou disponível para novos projetos de Web Apps SaaS, Landing Pages de alta conversão ou consultoria em performance. Entre em contato direto pelo WhatsApp para um orçamento sem compromisso.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4 w-full mb-8">
                
                {/* WhatsApp Action Card */}
                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/30 hover:border-emerald-400 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <MessageCircle className="w-6 h-6 fill-emerald-400/20" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-100">Conversar no WhatsApp</h4>
                      <p className="text-xs text-emerald-300 font-mono">{PERSONAL_INFO.whatsappNumber}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                    <span>Falar Agora</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Email Action Card */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Proposta%20de%20Projeto`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-100">Enviar E-mail</h4>
                      <p className="text-xs text-slate-400 font-mono">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all">
                    <span>Enviar mensagem</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.location} | Atendimento para todo o Brasil e exterior</span>
              </div>

            </div>

            {/* Right Social Links Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
                
                <h3 className="text-xl font-bold text-slate-100">Canais & Redes Sociais</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Acompanhe meus repositórios no GitHub ou conecte-se comigo no LinkedIn para parcerias.
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
                      <span className="text-xs font-medium">GitHub Profile</span>
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
                      <span className="text-xs font-medium">LinkedIn Network</span>
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
