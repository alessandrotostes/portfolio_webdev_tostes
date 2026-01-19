"use client";

import { motion } from "framer-motion";
import { 
  Zap,
  Search,
  ShieldCheck,
  Accessibility,
  CheckCircle2,
  Lightbulb,
  Scale
} from "lucide-react";
import { cn } from "@/utils/cn";

const StrategyCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className 
}: { 
  title: string; 
  description: string; 
  icon: any; 
  className?: string;
}) => (
  <div className={cn("flex flex-col gap-3 p-6 rounded-3xl bg-secondary/20 border border-primary/10 dark:border-white/5 hover:border-primary/30 transition-all group h-full", className)}>
    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6" />
    </div>
    <h4 className="text-lg font-bold text-foreground dark:text-white">{title}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export function Methodology() {
  return (
    <section className="py-24 relative overflow-hidden bg-background/50">
       <div className="max-w-[1920px] mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center md:text-left"
          >
             <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
               Metodologia & <span className="text-primary">Estratégia</span>
             </h2>
             <p className="text-muted-foreground text-lg max-w-2xl">
               Não é apenas sobre código. É sobre entregar resultados reais através de padrões técnicos rigorosos.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <StrategyCard 
                  icon={Zap}
                  title="Performance Obsessiva"
                  description="Foco total em Core Web Vitals. Carregamento instantâneo (LCP < 2.5s) e pontuação Lighthouse 100 para melhor ranking e conversão."
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <StrategyCard 
                  icon={Search}
                  title="SEO Técnico & Dinâmico"
                  description="Arquitetura amigável a robôs, Metadata dinâmica, Schema.org e sitemaps automatizados para domínio das buscas orgânicas."
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                 <StrategyCard 
                  icon={Accessibility}
                  title="Acessibilidade (a11y)"
                  description="Internet para todos. Compliance WCAG 2.1 AA, navegação fluida por teclado e leitores de tela, garantindo alcance máximo."
                />
              </motion.div>

               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className="p-6 rounded-3xl bg-secondary/20 border border-primary/10 dark:border-white/5 relative overflow-hidden flex-1 group h-full flex flex-col justify-between">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                       <Lightbulb className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground dark:text-white mb-2">Filosofia de Valor</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Software é investimento. Meu foco é em ROI, arquiteturas sustentáveis que não "envelhecem" e UX que retém usuários.
                    </p>
                  </div>
                  <Scale className="absolute -bottom-4 -right-4 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity" />
                </div>
              </motion.div>
          </div>
       </div>
    </section>
  );
}
