"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Layout, 
  Smartphone, 
  Github, 
  Linkedin, 
  Mail,
  Cpu
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";

const BentoCard = ({ 
  children, 
  className, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={cn(
      "group relative overflow-hidden rounded-3xl bg-secondary/30 border border-primary/10 p-6 backdrop-blur-sm transition-colors hover:bg-secondary/50",
      className
    )}
  >
    {children}
  </motion.div>
);

export function BentoGrid() {
  return (
    <section className="py-24 relative" id="about">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Sobre & <span className="text-primary">Estratégia</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Combinando design premium com engenharia de software robusta para criar valor real.
            </p>
          </motion.div>
          <div className="flex gap-4">
             <Link href="https://linkedin.com/in/alessandro-tostes" target="_blank" className="p-4 rounded-2xl bg-secondary/30 border border-primary/10 hover:border-primary/50 transition-all">
                <Linkedin className="w-6 h-6" />
             </Link>
             <Link href="https://github.com/alessandrotostes" target="_blank" className="p-4 rounded-2xl bg-secondary/30 border border-primary/10 hover:border-primary/50 transition-all">
                <Github className="w-6 h-6" />
             </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[200px]">
          
          {/* Main About Card */}
          <BentoCard className="md:col-span-6 lg:col-span-8 row-span-2 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 -m-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 p-2">
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Alessandro Tostes</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Desenvolvedor Full-Stack baseado em Ribeirão Preto - SP. Especialista em ecossistemas 
                modernos como **Next.js**, **React** e **Node.js**. Minha missão é transformar 
                ideias em produtos digitais de alta performance que de fato prendem a atenção do usuário final.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {["Full Stack", "SaaS Architect", "UI/UX Driven", "Consultor Tech"].map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Tech Stack - List */}
          <BentoCard className="md:col-span-3 lg:col-span-4 row-span-2 relative overflow-hidden" delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-6 h-6 text-primary" />
              <h4 className="text-xl font-bold">Tech Stack</h4>
            </div>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              {[
                { label: "Frontend", items: "Next.js, React, Tailwind, TS" },
                { label: "Backend", items: "Node, Supabase, Firebase" },
                { label: "Design", items: "Figma, Framer Motion" },
                { label: "Tools", items: "Git, Docker, Vercel" }
              ].map(stack => (
                <div key={stack.label}>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{stack.label}</p>
                  <p className="text-sm text-foreground/80 font-medium">{stack.items}</p>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Experience Counter */}
          <BentoCard className="md:col-span-3 lg:col-span-4 row-span-1 flex flex-col justify-center items-center text-center bg-primary text-white border-transparent" delay={0.2}>
             <div className="text-5xl font-display font-bold">+10</div>
             <div className="text-sm font-medium uppercase tracking-widest opacity-80">Projetos de impacto</div>
          </BentoCard>

          {/* Core Values */}
          <BentoCard className="md:col-span-6 lg:col-span-8 row-span-1 flex items-center gap-8" delay={0.3}>
             <div className="flex-1 flex flex-col gap-1">
                <span className="text-primary font-bold">01. Performance</span>
                <p className="text-sm text-muted-foreground">Sites rápidos que convertem.</p>
             </div>
             <div className="w-px h-12 bg-primary/10 md:block hidden" />
             <div className="flex-1 flex flex-col gap-1">
                <span className="text-primary font-bold">02. Experiência</span>
                <p className="text-sm text-muted-foreground">UI intuitiva e moderna.</p>
             </div>
             <div className="w-px h-12 bg-primary/10 md:block hidden" />
             <div className="flex-1 flex flex-col gap-1">
                <span className="text-primary font-bold">03. Resultados</span>
                <p className="text-sm text-muted-foreground">FOCO em ROI e satisfação.</p>
             </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
