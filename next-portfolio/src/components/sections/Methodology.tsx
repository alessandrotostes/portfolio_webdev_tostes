"use client";

import { motion } from "framer-motion";
import { 
  Zap,
  Search,
  Accessibility,
  Lightbulb,
  Scale
} from "lucide-react";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { GlassCard } from "@/components/ui/glass-card";

const strategies = [
  {
    icon: Zap,
    title: "Performance Obsessiva",
    description: "Foco total em Core Web Vitals. Carregamento instantâneo (LCP < 2.5s) e pontuação Lighthouse 100 para melhor ranking e conversão.",
    gradient: "from-amber-500/20 to-transparent"
  },
  {
    icon: Search,
    title: "SEO Técnico & Dinâmico",
    description: "Arquitetura amigável a robôs, Metadata dinâmica, Schema.org e sitemaps automatizados para domínio das buscas orgânicas.",
    gradient: "from-cyan-500/20 to-transparent"
  },
  {
    icon: Accessibility,
    title: "Acessibilidade (a11y)",
    description: "Internet para todos. Compliance WCAG 2.1 AA, navegação fluida por teclado e leitores de tela, garantindo alcance máximo.",
    gradient: "from-indigo-500/20 to-transparent"
  },
  {
    icon: Lightbulb,
    title: "Filosofia de Valor",
    description: "Software é investimento. Meu foco é em ROI, arquiteturas sustentáveis que não \"envelhecem\" e UX que retém usuários.",
    gradient: "from-violet-500/20 to-transparent",
    hasDecoration: true
  }
];

export function Methodology() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Floating Shapes */}
      <FloatingShapes
        shapes={[
          {
            size: "md",
            color: "amber",
            position: { top: "20%", right: "5%" },
            delay: 0.3,
            rotate: -20,
          },
          {
            size: "lg",
            color: "cyan",
            position: { bottom: "15%", left: "-5%" },
            delay: 0.5,
            rotate: 15,
          },
        ]}
      />

      <div className="max-w-[1920px] mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">
              Metodologia &{" "}
            </span>
            <span className="text-primary">Estratégia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Não é apenas sobre código. É sobre entregar resultados reais através de padrões técnicos rigorosos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((strategy, index) => (
            <GlassCard key={strategy.title} delay={index * 0.1} hover={true}>
              <div className="relative h-full flex flex-col">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${strategy.gradient} flex items-center justify-center text-white mb-4 transition-transform duration-300 hover:scale-110`}>
                  <strategy.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{strategy.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {strategy.description}
                </p>
                {strategy.hasDecoration && (
                  <Scale className="absolute -bottom-2 -right-2 w-16 h-16 opacity-5 transition-opacity group-hover:opacity-10" />
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
