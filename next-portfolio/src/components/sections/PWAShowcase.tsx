"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Store, User, Briefcase, Rocket } from "lucide-react";
import { cn } from "@/utils/cn";

const slides = [
  {
    id: "cliente",
    title: "Cliente",
    icon: User,
    video: "/video/cliente.mp4",
    description: "Visão do cliente para agendamentos rápidos e práticos."
  },
  {
    id: "estabelecimento",
    title: "Estabelecimento",
    icon: Store,
    video: "/video/estabelecimento.mp4",
    description: "Gestão completa do negócio e controle de agenda."
  },
  {
    id: "profissional",
    title: "Profissional",
    icon: Briefcase,
    video: "/video/profissional.mp4",
    description: "Painel dedicado para o prestador de serviço."
  }
];

export function PWAShowcase() {
  const [activeSlide, setActiveSlide] = useState(slides[0]);

  return (
    <section className="py-24 bg-background overflow-hidden" id="pwa-showcase">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* iPhone 15 Pro Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[300px]"
          >
            {/* Outer Frame (Titanium look) */}
            <div className="relative aspect-[9/19.5] w-full bg-zinc-900 rounded-[3.5rem] p-1.5 border-[6px] border-zinc-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
              
              {/* Internal Screen Border */}
              <div className="relative w-full h-full bg-black rounded-[2.8rem] overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-33.5 h-7 bg-black rounded-full z-20 flex items-center justify-center border border-white/5">
                   <div className="w-3 h-3 rounded-full bg-zinc-900 ml-16" />
                </div>
                
                {/* Screen Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <video
                      src={activeSlide.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 animate-pulse" />
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">A&N Agendamentos</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Aplicação em <span className="text-primary">Destaque</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Confira a arquitetura SaaS da A&N Agendamentos: uma solução moderna com tecnologia PWA 
                que oferece experiência de app nativo, sem necessidade de lojas de apps.
              </p>
            </motion.div>

            {/* Tabs */}
            <div className="flex flex-col gap-4">
              {slides.map((slide) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(slide)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl border transition-all text-left group",
                    activeSlide.id === slide.id 
                      ? "bg-primary/10 border-primary shadow-lg shadow-primary/5" 
                      : "bg-secondary/20 border-white/5 hover:border-white/10"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                    activeSlide.id === slide.id ? "bg-primary text-white" : "bg-secondary text-muted-foreground group-hover:text-primary"
                  )}>
                    <slide.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={cn(
                      "font-bold transition-colors",
                      activeSlide.id === slide.id ? "text-primary" : "text-foreground"
                    )}>
                      {slide.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-1">{slide.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* PWA Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
               {[
                 { title: "Sem Lojas", desc: "Instalação direta via Safari ou Chrome." },
                 { title: "Navegue com fluidez", desc: "Elevando a experiência de usuário para o nível de um app nativo." }
               ].map((benefit) => (
                 <div key={benefit.title} className="p-4 rounded-2xl bg-secondary/10 border border-primary/10 dark:border-white/5">
                   <h5 className="font-bold text-sm mb-1 text-foreground dark:text-white">{benefit.title}</h5>
                   <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
