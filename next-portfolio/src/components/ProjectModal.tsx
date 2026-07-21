import React from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Github, CheckCircle2, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl glass-card rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-300">
              {project.categoryLabel}
            </span>
            <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Project Image Preview */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-2">Sobre o Projeto</h4>
            <p className="text-slate-300 text-sm leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">Recursos Destacados</h4>
            <div className="space-y-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">Tecnologias Utilizadas</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-800 flex items-center justify-end gap-3 bg-slate-950/60">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Ver Código</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Acessar Projeto Online</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
