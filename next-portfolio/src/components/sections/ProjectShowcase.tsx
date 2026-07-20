"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  category: "webapp" | "website";
  description: string;
  image: string;
  video?: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: "erp-petroleo",
    title: "ERP Web App Moderno",
    category: "webapp",
    description: "Sistema de gestão (ERP) focado na indústria de petróleo, com dashboard interativo e relatórios.",
    image: "/img/petroleowebapp.webp",
    video: "/video/ERP_PETROLEO_DEMONSTRACAO.mp4",
    tech: ["React", "Firebase", "Tailwind", "Recharts"],
    repoUrl: "https://github.com/alessandrotostes",
  },
  {
    id: "controle-financeiro",
    title: "Controle Financeiro",
    category: "webapp",
    description: "Webapp para gestão financeira pessoal com dashboard, autenticação e gráficos em tempo real.",
    image: "/img/gestaomensal.webp",
    video: "/video/gestaomensal.mp4",
    tech: ["React", "Chakra UI", "Firebase", "Chart.js"],
    repoUrl: "https://github.com/alessandrotostes/controle-de-gastos",
    liveUrl: "https://app-gastos-react-ff2fc.web.app/login",
  },
  {
    id: "gestao-consultas",
    title: "Gestão Consultas/Aulas",
    category: "webapp",
    description: "Aplicação full-stack para gestão de pacientes e sessões com backend robusto no Supabase.",
    image: "/img/gestaowebapp.webp",
    video: "/video/gestaoapp.mp4",
    tech: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
    repoUrl: "https://github.com/alessandrotostes/controle-consultas",
  },
  {
    id: "site-psicanalista",
    title: "Psicanalista",
    category: "website",
    description: "Presença online elegante e confiável para profissional de saúde mental.",
    image: "/img/sitepsicanalista.webp",
    tech: ["HTML5", "CSS3", "JavaScript", "SEO"],
    liveUrl: "https://tauanapavanelli.com/",
    repoUrl: "https://github.com/alessandrotostes/portfolio-psicanalitico",
  },
  {
    id: "nova-solucoes",
    title: "Nova Soluções",
    category: "website",
    description: "Design sofisticado e tecnologia de ponta para projetos exclusivos em Alumínio Composto (ACM).",
    image: "/img/sitenovasolucoes.webp",
    tech: ["HTML5", "CSS3", "JavaScript", "AOS"],
    repoUrl: "https://github.com/alessandrotostes/nova_solucoes",
  },
  {
    id: "cervejaria-fratelli",
    title: "Cervejaria Fratelli",
    category: "website",
    description: "Website moderno e responsivo para a Cervejaria Fratelli, unindo tradição artesanal e tecnologia.",
    image: "/img/sitecervejariafratelli.webp",
    tech: ["HTML5", "CSS3", "JavaScript", "SEO"],
    repoUrl: "https://github.com/alessandrotostes/cervejaria_fratelli",
    liveUrl: "https://alessandrotostes.github.io/cervejaria_fratelli/",
  },
];

// Card component for Mobile Grid
const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group relative rounded-3xl overflow-hidden bg-secondary/30 border border-primary/10 dark:border-white/5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition-opacity duration-500",
            isHovered && project.video ? "opacity-0" : "opacity-100"
          )}
        />
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-xs font-medium text-primary mb-1 block uppercase tracking-wider">{project.category}</span>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            </div>
            <button 
              onClick={() => onOpen(project)}
              className="p-3 bg-primary rounded-full hover:bg-primary/80 text-white transition-all transform hover:scale-110 shadow-lg shadow-primary/20"
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 border border-white/5 text-gray-300">
                {t}
              </span>
            ))}
            {project.tech.length > 3 && <span className="text-[10px] text-muted-foreground">+{project.tech.length - 3}</span>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Card component for Desktop Parallax Horizontal Scroll
const ParallaxProjectCard = ({ 
  project, 
  onOpen, 
  scrollYProgress 
}: { 
  project: Project; 
  onOpen: (p: Project) => void;
  scrollYProgress: MotionValue<number>;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Parallax offset for the image inside this card
  // As the card moves across the screen, the image moves slightly in the opposite direction
  const xImage = useTransform(scrollYProgress, [0.1, 0.9], ["-8%", "8%"]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative w-[480px] lg:w-[580px] aspect-[16/10] shrink-0 rounded-[2.5rem] overflow-hidden bg-secondary/30 border border-primary/10 dark:border-white/5 group shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Parallax Image Wrapper */}
        <motion.div 
          style={{ x: xImage }} 
          className="absolute inset-y-0 -left-[15%] w-[130%] h-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={cn(
              "object-cover transition-opacity duration-500",
              isHovered && project.video ? "opacity-0" : "opacity-100"
            )}
            sizes="(max-width: 1024px) 80vw, 50vw"
          />
        </motion.div>
        
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
      </div>

      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="text-xs font-bold text-primary mb-2 block uppercase tracking-widest">{project.category}</span>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-2 leading-tight">{project.title}</h3>
              <p className="text-sm text-gray-300 line-clamp-2 max-w-sm font-light leading-relaxed mb-1">{project.description}</p>
            </div>
            
            <button 
              onClick={() => onOpen(project)}
              className="p-4 bg-primary rounded-full hover:bg-primary/80 text-white transition-all transform hover:scale-110 shadow-lg shadow-primary/20 shrink-0 ml-4"
            >
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.tech.map((t) => (
              <span key={t} className="text-[10px] px-2.5 py-1 rounded-md bg-white/10 border border-white/5 text-gray-200">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export function ProjectShowcase() {
  const [filter, setFilter] = useState<"all" | "webapp" | "website">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Calculate the horizontal translate: e.g. 6 cards, each 580px, plus gaps
  // We map the vertical scroll progress [0, 1] to translate from left to right
  const xTranslate = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-66%"]);
  
  // Parallax for the giant watermark background text
  const xWatermark = useTransform(scrollYProgress, [0, 1], ["5%", "-30%"]);

  const filteredProjects = projects.filter(p => filter === "all" || p.category === filter);

  return (
    <section id="projects">
      
      {/* Desktop Parallax Horizontal Scroll */}
      <div ref={containerRef} className="hidden md:block relative h-[300vh] bg-background">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          
          {/* Parallax Watermark Label */}
          <motion.div 
            style={{ x: xWatermark }}
            className="absolute left-0 text-[18vw] font-display font-black leading-none text-primary/[0.02] dark:text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
          >
            SELECTED WORK • PROJETOS
          </motion.div>

          <div className="max-w-[1920px] mx-auto w-full px-8 md:px-16 mb-12 relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Projetos <span className="text-primary">Selecionados</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mt-4">
              Role para baixo para navegar pela galeria horizontal de projetos desenvolvidos.
            </p>
          </div>

          <motion.div 
            style={{ x: xTranslate }}
            className="flex gap-8 px-8 md:px-16 w-max relative z-10"
          >
            {projects.map((project) => (
              <ParallaxProjectCard 
                key={project.id} 
                project={project} 
                onOpen={setSelectedProject} 
                scrollYProgress={scrollYProgress}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Filterable Grid Showcase */}
      <div className="md:hidden py-24 px-4 bg-background">
        <div className="flex flex-col gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-3">
              Projetos <span className="text-primary">Selecionados</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Uma coleção de trabalhos que demonstram minha paixão por criar experiências digitais excepcionais.
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-2 bg-secondary/20 p-1 rounded-2xl border border-primary/10 dark:border-white/5 backdrop-blur-sm self-start">
            {(["all", "webapp", "website"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-semibold transition-all capitalize",
                  filter === f ? "bg-primary text-white shadow-md shadow-primary/20" : "text-muted-foreground hover:bg-primary/10 transition-colors"
                )}
              >
                {f === "all" ? "Todos" : f}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal (Common) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-secondary/95 dark:bg-secondary/80 border border-primary/10 dark:border-primary/20 dark:border-white/10 shadow-2xl p-6 md:p-10 no-scrollbar backdrop-blur-md"
            >
              <div className="flex flex-col gap-8">
                 <div className="relative aspect-video rounded-3xl overflow-hidden border border-primary/10 dark:border-primary/10 dark:border-white/5 bg-black">
                    {selectedProject.video ? (
                      <video src={selectedProject.video} controls autoPlay className="w-full h-full object-cover" />
                    ) : (
                      <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                    )}
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h3 className="text-3xl font-bold mb-4 text-foreground dark:text-white">{selectedProject.title}</h3>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {selectedProject.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map(t => (
                          <span key={t} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                       <div className="p-6 rounded-3xl bg-background/50 dark:bg-white/5 border border-primary/10 dark:border-primary/10 dark:border-white/5">
                          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Ações</h4>
                          <div className="flex flex-col gap-3">
                            {selectedProject.liveUrl && (
                              <Link 
                                href={selectedProject.liveUrl} 
                                target="_blank"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all"
                              >
                                Ver Online <ExternalLink className="w-4 h-4" />
                              </Link>
                            )}
                            {selectedProject.repoUrl && (
                              <Link 
                                href={selectedProject.repoUrl} 
                                target="_blank"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-white/50 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 text-foreground dark:text-white rounded-2xl font-bold transition-all border border-primary/10 dark:border-primary/10 dark:border-white/5"
                              >
                                Ver GitHub <Github className="w-4 h-4" />
                              </Link>
                            )}
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-foreground dark:text-white transition-all"
              >
                <X />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="py-12 text-center bg-background">
         <Link href="https://github.com/alessandrotostes" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-secondary/50 rounded-full border border-primary/10 dark:border-primary/10 dark:border-white/5 hover:border-primary/50 text-foreground transition-all group">
          Ver Ecossistema Completo no GitHub 
          <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
        </Link>
      </div>
    </section>
  );
}
