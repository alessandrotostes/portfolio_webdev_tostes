"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Linkedin,
  Github,
  Code2,
  Database,
  BadgeCheck,
  Trophy,
  History,
  Settings,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  BrainCircuit,
  Instagram
} from "lucide-react";
import Link from "next/link";
import { EXPERIENCE } from "@/data/resume";
import { FloatingShapes } from "@/components/ui/floating-shapes";

const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 rounded-full bg-secondary/50 border border-primary/10 dark:border-primary/10 dark:border-white/5 text-xs font-medium text-foreground dark:text-foreground/80 hover:border-primary/50 transition-all">
    {children}
  </span>
);

export function AboutStrategies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const yLeft = useTransform(scrollYProgress, [0, 1], isDesktop ? [90, -90] : [0, 0]);
  const yRight = useTransform(scrollYProgress, [0, 1], isDesktop ? [-90, 90] : [0, 0]);

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-background" id="about">
      {/* Floating Geometric Shapes */}
      <FloatingShapes
        shapes={[
          {
            size: "lg",
            color: "indigo",
            position: { top: "10%", left: "-10%" },
            delay: 0.2,
            rotate: 25,
          },
          {
            size: "md",
            color: "rose",
            position: { top: "50%", right: "-5%" },
            delay: 0.4,
            rotate: -18,
          },
          {
            size: "sm",
            color: "violet",
            position: { bottom: "20%", left: "10%" },
            delay: 0.6,
            rotate: 12,
          },
          {
            size: "md",
            color: "amber",
            position: { bottom: "10%", right: "15%" },
            delay: 0.8,
            rotate: -22,
          },
        ]}
      />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />

      <div className="max-w-[1920px] mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <BadgeCheck className="w-4 h-4" />
              Especialista Full Stack
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">
                Experiência &{" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-primary to-rose-500">
                Tecnologias
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              Desenvolvedor Full Stack com 3+ anos de experiência em arquitetura escalável, 
              focado na construção de produtos  e design orientado à conversão.
            </p>
          </motion.div>
          
          {/* Redes Sociais */}
          <div className="flex items-center gap-3 md:gap-4">
            <Link 
              href="https://linkedin.com/in/alessandro-tostes/" 
              target="_blank" 
              className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/30 border border-primary/10 dark:border-primary/10 dark:border-white/5 hover:border-primary/50 transition-all font-bold"
            >
              <Linkedin className="w-6 h-6 transition-transform group-hover:scale-110" />
            </Link>
            <Link 
              href="https://github.com/alessandrotostes" 
              target="_blank" 
              className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/30 border border-primary/10 dark:border-primary/10 dark:border-white/5 hover:border-primary/50 transition-all font-bold"
            >
              <Github className="w-6 h-6 transition-transform group-hover:scale-110" />
            </Link>
            <Link 
              href="https://www.instagram.com/alessandrotostes/" 
              target="_blank" 
              className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/30 border border-primary/10 dark:border-primary/10 dark:border-white/5 hover:border-primary/50 transition-all font-bold"
            >
              <Instagram className="w-6 h-6 transition-transform group-hover:scale-110" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1 (5/12) - Experience Timeline */}
          <motion.div 
            style={{ y: yLeft }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-secondary/30 border border-[var(--shape-border)] backdrop-blur-sm relative overflow-hidden group h-full"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <History className="w-32 h-32" />
              </div>
              
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Trophy className="text-primary w-6 h-6" />
                Experiência
              </h3>
              
              <div className="space-y-12">
                {EXPERIENCE.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary/20">
                    <div className={`absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full ${index === 0 ? "bg-primary" : "bg-secondary border border-primary/20 dark:border-white/20"}`} />
                    <div className="flex flex-col gap-1 mb-4">
                      <h4 className="text-lg font-bold text-foreground leading-tight">{exp.role}</h4>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{exp.company}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techs.map(tech => (
                        <TechBadge key={tech}>{tech}</TechBadge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: yRight }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {/* Frontend Arsenal */}
               <motion.div 
                 variants={{
                   hidden: { opacity: 0, y: 20 },
                   visible: { 
                     opacity: 1, 
                     y: 0,
                     transition: { duration: 0.8, ease: "easeOut" }
                   }
                 }}
                 className="p-6 rounded-3xl bg-secondary/20 dark:bg-secondary/10 border border-primary/10 dark:border-primary/10 dark:border-white/5 hover:border-primary/20 transition-colors"
               >
                 <div className="flex items-center gap-2 mb-4">
                   <Code2 className="text-primary w-5 h-5" />
                   <h4 className="font-bold text-sm uppercase tracking-wider">Frontend Core</h4>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {["React 18", "Next.js 16", "TypeScript 5", "Vite", "TanStack Query", "Redux Toolkit", "Server Actions", "RSC", "Tailwind v4", "Framer Motion", "HTML5", "CSS3", "JS", "Git", "GitHub", "GitLab", "Figma"].map(tech => (
                     <TechBadge key={tech}>{tech}</TechBadge>
                   ))}
                 </div>
               </motion.div>

               {/* Backend & Cloud */}
               <motion.div 
                 variants={{
                   hidden: { opacity: 0, y: 20 },
                   visible: { 
                     opacity: 1, 
                     y: 0,
                     transition: { duration: 0.8, ease: "easeOut" }
                   }
                 }}
                 className="p-6 rounded-3xl bg-secondary/20 dark:bg-secondary/10 border border-primary/10 dark:border-primary/10 dark:border-white/5 hover:border-primary/20 transition-colors"
               >
                 <div className="flex items-center gap-2 mb-4">
                   <Database className="text-primary w-5 h-5" />
                   <h4 className="font-bold text-sm uppercase tracking-wider">Backend & Cloud</h4>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {["Node.js", "NestJS", "Express", "Firebase", "Cloud Messaging", "Cloud Functions", "Edge Runtime", "PostgreSQL", "Supabase", "Redis", "AWS", "GCP"].map(tech => (
                     <TechBadge key={tech}>{tech}</TechBadge>
                   ))}
                 </div>
               </motion.div>

               {/* Quality & DevOps */}
               <motion.div 
                 variants={{
                   hidden: { opacity: 0, y: 20 },
                   visible: { 
                     opacity: 1, 
                     y: 0,
                     transition: { duration: 0.8, ease: "easeOut" }
                   }
                 }}
                 className="p-6 rounded-3xl bg-secondary/20 dark:bg-secondary/10 border border-primary/10 dark:border-primary/10 dark:border-white/5 hover:border-primary/20 transition-colors"
               >
                 <div className="flex items-center gap-2 mb-4">
                   <Settings className="text-primary w-5 h-5" />
                   <h4 className="font-bold text-sm uppercase tracking-wider">Quality & DevOps</h4>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {["Jest", "Vitest", "Playwright", "GitHub Actions", "Docker", "Sentry", "ESLint", "Husky", "Commitlint"].map(tech => (
                     <TechBadge key={tech}>{tech}</TechBadge>
                   ))}
                 </div>
               </motion.div>

               {/* Architecture & Security */}
               <motion.div 
                 variants={{
                   hidden: { opacity: 0, y: 20 },
                   visible: { 
                     opacity: 1, 
                     y: 0,
                     transition: { duration: 0.8, ease: "easeOut" }
                   }
                 }}
                 className="p-6 rounded-3xl bg-secondary/20 dark:bg-secondary/10 border border-primary/10 dark:border-primary/10 dark:border-white/5 hover:border-primary/20 transition-colors"
               >
                 <div className="flex items-center gap-2 mb-4">
                   <ShieldCheck className="text-primary w-5 h-5" />
                   <h4 className="font-bold text-sm uppercase tracking-wider">Arquitetura</h4>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {["Clean Arch", "SOLID", "RBAC", "OAuth 2.0", "JWT", "Zod", "Webhooks", "Microservices"].map(tech => (
                     <TechBadge key={tech}>{tech}</TechBadge>
                   ))}
                 </div>
               </motion.div>

               {/* AI & Productivity */}
               <motion.div 
                 variants={{
                   hidden: { opacity: 0, y: 20 },
                   visible: { 
                     opacity: 1, 
                     y: 0,
                     transition: { duration: 0.8, ease: "easeOut" }
                   }
                 }}
                 className="p-6 rounded-3xl bg-secondary/20 dark:bg-secondary/10 border border-primary/10 dark:border-primary/10 dark:border-white/5 hover:border-primary/20 transition-colors sm:col-span-2 relative overflow-hidden group"
               >
                 <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <BrainCircuit className="w-24 h-24" />
                 </div>
                 <div className="flex items-center gap-2 mb-4">
                   <Sparkles className="text-primary w-5 h-5" />
                   <h4 className="font-bold text-sm uppercase tracking-wider">Inteligência Artificial, Automação & Produtividade</h4>
                 </div>
                 <p className="text-xs text-muted-foreground mb-4 leading-relaxed max-w-lg">
                    Aceleração de desenvolvimento, workflows automatizados e qualidade de código. 
                    Integração com LLMs e sistemas de mensageria para otimizar processos.
                 </p>
                 <div className="flex flex-wrap gap-2 relative z-10">
                   {["Claude Code", "AGY CLI", "AI-Driven Dev", "IA Assistida", "Context Engineering", "GitHub Copilot", "Antigravity", "Gemini", "n8n", "WhatsApp API", "Prompt Engineering", "LLM Integration", "RAG"].map(tech => (
                     <TechBadge key={tech}>{tech}</TechBadge>
                   ))}
                 </div>
               </motion.div>
             </div>

             {/* Education Card - Wide */}
             <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
                }}
                className="p-8 rounded-3xl bg-primary/10 dark:bg-primary/5 border border-primary/20 dark:border-primary/10 relative group"
             >
                <div className="flex items-start justify-between">
                   <div>
                      <h4 className="text-lg font-bold mb-2 flex items-center gap-2 text-foreground">
                        <GraduationCap className="text-primary w-6 h-6" />
                        Formação Acadêmica
                      </h4>
                      <h5 className="text-xl font-display font-bold text-primary">Ciência da Computação</h5>
                      <span className="text-sm text-muted-foreground uppercase tracking-wider block mt-1">Universidade Estácio de Sá - UNESA</span>
                   </div>
                   <div className="hidden md:block text-right">
                      <div className="text-sm font-bold text-foreground dark:text-white bg-primary/5 dark:bg-white/5 px-3 py-1 rounded-full border border-primary/10 dark:border-primary/20 dark:border-white/10">Graduando</div>
                   </div>
                </div>
             </motion.div>
          </motion.div>

      </div>
      </div>
    </section>
  );
}
