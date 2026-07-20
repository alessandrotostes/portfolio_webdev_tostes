"use client";

import { motion } from "framer-motion";
import { Layers, Rocket, Smartphone, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionBadge } from "@/components/ui/section-badge";

const services = [
  {
    icon: Layers,
    title: "Web Apps SaaS | SPA | CRMs",
    description: "Sistemas robustos com autenticação, pagamentos, dashboards. Tudo que sua empresa precisa para escalar seu negócio.",
    features: ["React & Next.js", "Firebase/Supabase", "PWA"],
    gradient: "from-indigo-600 to-indigo-700 dark:from-indigo-400/20 dark:to-indigo-400/5"
  },
  {
    icon: Rocket,
    title: "Landing Pages Premium",
    description: "Páginas de alta conversão focadas em design, velocidade e resultados imediatos.",
    features: ["Mobile First", "SEO Avançado", "Micro-animações"],
    gradient: "from-rose-600 to-rose-700 dark:from-rose-400/20 dark:to-rose-400/5"
  },
  {
    icon: Smartphone,
    title: "Soluções PWA",
    description: "Experiência de aplicativo nativo, sem a necessidade de lojas de apps.",
    features: ["Offline Access", "Push Notifications", "Instalação simples"],
    gradient: "from-violet-600 to-violet-700 dark:from-violet-400/20 dark:to-violet-400/5"
  },
  {
    icon: Cpu,
    title: "Engenharia de IA & Código",
    description: "Desenvolvimento assistido por IA e criação de contextos avançados. Aplicação de diretrizes e termos de uso de IA assistida.",
    features: ["Claude Code & AGY CLI", "Criação de Contextos", "AI-Driven Development"],
    gradient: "from-cyan-600 to-cyan-700 dark:from-cyan-400/20 dark:to-cyan-400/5"
  }
];

export function Services() {
  return (
    <section className="relative py-24 bg-background overflow-hidden" id="services">
      {/* Floating Geometric Shapes */}
      <FloatingShapes
        shapes={[
          {
            size: "md",
            color: "indigo",
            position: { top: "10%", left: "-5%" },
            delay: 0.2,
            rotate: 15,
          },
          {
            size: "lg",
            color: "rose",
            position: { bottom: "15%", right: "-5%" },
            delay: 0.4,
            rotate: -12,
          },
          {
            size: "sm",
            color: "violet",
            position: { top: "50%", left: "5%" },
            delay: 0.6,
            rotate: 8,
          },
        ]}
      />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />

      <div className="max-w-[1920px] mx-auto px-4 md:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <SectionBadge text="O que eu faço" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--hero-gradient-text-primary)" }}>
              Especialidades que{" "}
            </span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--hero-gradient-text-accent)" }}>
              impulsionam resultados
            </span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transformo complexidade técnica em experiências intuitivas e rentáveis para o seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <GlassCard key={service.title} delay={index * 0.1} hover={true}>
              <div className="relative">
                {/* Icon with gradient background */}
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 transition-transform duration-300 hover:scale-110 bg-gradient-to-br shadow-inner",
                  service.gradient
                )}>
                  <service.icon className="w-7 h-7 drop-shadow-sm" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
