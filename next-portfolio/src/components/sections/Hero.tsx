"use client";

import { motion } from "framer-motion";
import { Rocket, ChevronRight } from "lucide-react";
import Link from "next/link";
import { HeroScene } from "@/components/3d/HeroScene";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Background */}
      <HeroScene />

      {/* Content */}
      <div className="max-w-[1920px] mx-auto relative z-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Disponível para Projetos</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Desenvolvendo <br />
              <span className="text-primary">Soluções Digitais</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              De Sites e Landing Pages a Aplicações Web completas.
              Transformando ideias complexas em experiências digitais premium.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-medium text-primary-foreground transition-all duration-300 hover:w-56 hover:bg-primary/90 hover:scale-105"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <span className="flex items-center gap-2">
                  Falar Conosco <Rocket className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="#projects"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary/30 bg-background/50 px-8 font-medium text-foreground backdrop-blur-sm transition-all hover:bg-primary/10 hover:border-primary "
              >
                Ver Projetos
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest">Role</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </div>
  );
}
