"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Check, Play, Github } from "lucide-react";

export interface ProjectModalData {
  id: string | number;
  title: string;
  category: string;
  description: string;
  detailedDesc?: string;
  features?: string[];
  tech: string[];
  imageUrl?: string;
  videoUrl?: string;
  videos?: { name: string; url: string }[];
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  project: ProjectModalData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (project) {
      if (project.videos && project.videos.length > 0) {
        setActiveVideoUrl(project.videos[0].url);
      } else if (project.videoUrl) {
        setActiveVideoUrl(project.videoUrl);
      } else {
        setActiveVideoUrl(null);
      }
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const hasMultipleVideos = project.videos && project.videos.length > 0;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#07090e]/95 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-primary/10 text-foreground custom-scrollbar"
          initial={{ y: 50, scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 50, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 250 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
            <div>
              <span className="inline-block text-xs font-mono text-primary uppercase tracking-widest px-2.5 py-1 bg-primary/10 rounded-full border border-primary/20 mb-2">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
              aria-label="Fechar modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Media Player */}
          <div className="mb-6 rounded-xl overflow-hidden bg-black/40 border border-white/5 p-2">
            {hasMultipleVideos && (
              <div className="flex flex-wrap gap-2 mb-3 px-1 pt-1">
                {project.videos!.map((vid, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveVideoUrl(vid.url)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      activeVideoUrl === vid.url
                        ? "bg-primary text-black font-semibold shadow-lg shadow-primary/20"
                        : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Play size={12} fill={activeVideoUrl === vid.url ? "black" : "currentColor"} />
                    {vid.name}
                  </button>
                ))}
              </div>
            )}

            <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black/60 flex items-center justify-center">
              {activeVideoUrl ? (
                <video
                  key={activeVideoUrl}
                  src={activeVideoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-contain"
                />
              ) : project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-muted-foreground text-sm flex items-center gap-2">
                  Visualização de mídia indisponível
                </div>
              )}
            </div>
          </div>

          {/* Content Details */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Sobre o Projeto
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.detailedDesc || project.description}
              </p>
            </div>

            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Principais Funcionalidades & Diferenciais
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-slate-300"
                    >
                      <Check size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
                Tecnologias Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono rounded-md bg-white/5 border border-white/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-black font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  <ExternalLink size={16} />
                  Acessar Projeto
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white font-medium text-sm hover:bg-white/15 transition-all"
                >
                  <Github size={16} />
                  Ver Código no GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
