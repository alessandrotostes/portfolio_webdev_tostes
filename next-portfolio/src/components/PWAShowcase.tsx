import React, { useState } from 'react';
import { PWA_VIDEOS } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';
import { Smartphone, User, Store, Briefcase, ShieldCheck } from 'lucide-react';

const iconMap = {
  cliente: User,
  estabelecimento: Store,
  profissional: Briefcase
};

export const PWAShowcase: React.FC = () => {
  const { t } = useLanguage();
  const [activeTabId, setActiveTabId] = useState(PWA_VIDEOS[0].id);

  const activeVideo = PWA_VIDEOS.find(v => v.id === activeTabId) || PWA_VIDEOS[0];
  const activeTranslation = t.pwaShowcase.videos[activeTabId as keyof typeof t.pwaShowcase.videos];

  return (
    <section id="pwa" className="py-12 sm:py-20 lg:py-24 scroll-mt-20 relative bg-slate-50 border-t border-slate-200/80 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800 mb-4 shadow-xs">
            <Smartphone className="w-3.5 h-3.5 text-sky-600" />
            <span>{t.pwaShowcase.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            <span className="block">{t.pwaShowcase.titlePrefix}</span>
            <span className="gradient-text-cyan block mt-1">{t.pwaShowcase.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.pwaShowcase.description}
          </p>
        </div>

        {/* Content Layout: Video Mockup + Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Mobile Mockup Display */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[310px]">
              
              {/* iPhone Frame */}
              <div className="relative aspect-[9/19] w-full bg-slate-950 rounded-[3rem] p-2 border-[5px] border-slate-800 shadow-2xl ring-1 ring-slate-700/50 overflow-hidden">
                
                {/* Dynamic Island Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3 shadow-md shadow-black ring-1 ring-white/10">
                  <div className="w-3 h-3 rounded-full bg-zinc-900 ring-1 ring-zinc-800/80 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ring-1 ring-emerald-300/60" />
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-800/60" />
                </div>

                {/* Video Container */}
                <div className="relative w-full h-full bg-black rounded-[2.4rem] overflow-hidden">
                  <video
                    key={activeVideo.id}
                    src={activeVideo.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Video Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-left shadow-sm">
                    <p className="text-xs font-bold text-slate-900">{activeTranslation.title}</p>
                    <p className="text-[10px] text-emerald-700 font-bold">{activeTranslation.subtitle}</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Tab Switcher & Benefits */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-slate-900">
                {t.pwaShowcase.tabsHeader}
              </h3>
              <p className="text-sm text-slate-600">
                {t.pwaShowcase.tabsSubheader}
              </p>
            </div>

            {/* Interactive Tab Buttons */}
            <div className="flex flex-col gap-3">
              {PWA_VIDEOS.map((tab) => {
                const Icon = iconMap[tab.id as keyof typeof iconMap];
                const isActive = activeTabId === tab.id;
                const tabTrans = t.pwaShowcase.videos[tab.id as keyof typeof t.pwaShowcase.videos];

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`flex items-start gap-4 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-white border-emerald-500 shadow-sm ring-1 ring-emerald-500/20'
                        : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-bold text-base ${isActive ? 'text-emerald-800' : 'text-slate-800'}`}>
                          {tabTrans.title}
                        </span>
                        {isActive && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-[10px] font-mono font-bold text-emerald-800">
                            {t.pwaShowcase.playing}
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">{tabTrans.subtitle}</p>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1.5">{tabTrans.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* PWA Key Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-slate-900">{t.pwaShowcase.adv1Title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{t.pwaShowcase.adv1Desc}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                <Smartphone className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-slate-900">{t.pwaShowcase.adv2Title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{t.pwaShowcase.adv2Desc}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
