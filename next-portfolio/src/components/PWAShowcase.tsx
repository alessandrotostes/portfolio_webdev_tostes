import React, { useState } from 'react';
import { PWA_VIDEOS, PERSONAL_INFO } from '../data/portfolioData';
import { Smartphone, Check, Play, User, Store, Briefcase, ExternalLink, ShieldCheck } from 'lucide-react';

const iconMap = {
  cliente: User,
  estabelecimento: Store,
  profissional: Briefcase
};

export const PWAShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PWA_VIDEOS[0]);

  return (
    <section id="pwa" className="py-24 relative bg-slate-950 overflow-hidden w-full max-w-full">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 sm:right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] max-w-full bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Produto SaaS PWA em Destaque</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            A&N Agendamentos <span className="gradient-text-cyan">(SaaS Multi-tenant)</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Uma plataforma de alta tecnologia PWA que elimina a necessidade de publicar em lojas de aplicativos, oferecendo instalação instantânea e navegação em tela cheia.
          </p>
        </div>

        {/* Content Layout: Video Mockup + Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Mobile Mockup Display */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[310px]">
              
              {/* iPhone Titanium Frame */}
              <div className="relative aspect-[9/19] w-full bg-slate-900 rounded-[3rem] p-2 border-[5px] border-slate-800 shadow-2xl shadow-cyan-500/10 ring-1 ring-slate-700/50 overflow-hidden">
                
                {/* Dynamic Island Notch (iPhone 15 Pro Design) */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3 shadow-md shadow-black ring-1 ring-white/10">
                  {/* Camera Lens with reflection */}
                  <div className="w-3 h-3 rounded-full bg-zinc-900 ring-1 ring-zinc-800/80 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-indigo-950/80 ring-1 ring-cyan-500/20" />
                  </div>
                  {/* Proximity / Face ID Sensor Dot */}
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-800/60" />
                </div>

                {/* Video Container */}
                <div className="relative w-full h-full bg-black rounded-[2.4rem] overflow-hidden">
                  <video
                    key={activeTab.id}
                    src={activeTab.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle Video Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 text-left">
                    <p className="text-xs font-bold text-slate-100">{activeTab.title}</p>
                    <p className="text-[10px] text-cyan-400">{activeTab.subtitle}</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Tab Switcher & Benefits */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-100">
                Explore as 3 visões do sistema:
              </h3>
              <p className="text-sm text-slate-300">
                Alterne entre as abas abaixo para visualizar os vídeos de cada módulo em funcionamento real:
              </p>
            </div>

            {/* Interactive Tab Buttons */}
            <div className="flex flex-col gap-3">
              {PWA_VIDEOS.map((tab) => {
                const Icon = iconMap[tab.id as keyof typeof iconMap];
                const isActive = activeTab.id === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-start gap-4 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-slate-900/90 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-950 border-slate-800/80 hover:bg-slate-900/40 hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      isActive ? 'bg-gradient-to-tr from-cyan-500 to-indigo-600 text-slate-950' : 'bg-slate-900 text-slate-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-bold text-base ${isActive ? 'text-cyan-300' : 'text-slate-200'}`}>
                          {tab.title}
                        </span>
                        {isActive && (
                          <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-[10px] font-mono text-cyan-300">
                            REPRODUZINDO
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-semibold text-slate-400 mt-0.5">{tab.subtitle}</p>
                      <p className="text-xs text-slate-300 leading-relaxed mt-1.5">{tab.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* PWA Key Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-slate-100">Zero Comissões de Loja</h4>
                  <p className="text-xs text-slate-400">Instalação direta via Safari ou Chrome sem depender de Apple Store ou Google Play.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-slate-100">Velocidade Nativa</h4>
                  <p className="text-xs text-slate-400">Carregamento instantâneo, atalho na tela inicial e resposta fluida em qualquer aparelho.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
