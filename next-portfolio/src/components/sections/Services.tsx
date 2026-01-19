"use client";

import { motion } from "framer-motion";
import { Layers, Rocket, Smartphone } from "lucide-react";
import { cn } from "@/utils/cn";

const services = [
  {
    icon: Layers,
    title: "Web Apps SaaS | SPA | CRMs",
    description: "Sistemas robustos com autenticação, pagamentos, dashboards. Tudo que sua empresa precisa para escalar seu negócio.",
    features: ["React & Next.js", "Firebase/Supabase", "PWA"]
  },
  {
    icon: Rocket,
    title: "Landing Pages Premium",
    description: "Páginas de alta conversão focadas em design, velocidade e resultados imediatos.",
    features: ["Mobile First", "SEO Avançado", "Micro-animações"]
  },
  {
    icon: Smartphone,
    title: "Soluções PWA",
    description: "Experiência de aplicativo nativo, sem a necessidade de lojas de apps.",
    features: ["Offline Access", "Push Notifications", "Instalação simples"]
  }
];

export function Services() {
  return (
    <section className="py-24 bg-secondary/20" id="services">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            O que eu faço
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Especialidades que <span className="text-primary">impulsionam resultados</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transformo complexidade técnica em experiências intuitivas e rentáveis para o seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl bg-background border border-primary/10 dark:border-white/5 shadow-lg hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
