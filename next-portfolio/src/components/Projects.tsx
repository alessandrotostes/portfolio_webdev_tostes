import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github, Eye, Sparkles, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'saas' | 'landing' | 'pwa' | 'institucional'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterButtons = [
    { label: 'Todos os Projetos', value: 'all' },
    { label: 'Web Apps & SaaS', value: 'saas' },
    { label: 'Landing Pages', value: 'landing' },
    { label: 'Soluções PWA', value: 'pwa' },
    { label: 'Institucional', value: 'institucional' },
  ];

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/90 border-t border-slate-800/50">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfólio Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            Projetos que <span className="gradient-text-cyan">geram impacto</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Navegue pelos sistemas desenvolvidos com foco em performance, experiência de usuário e alto retorno.
          </p>
        </div>

        {/* Filter Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === btn.value
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-cyan-300">
                      {project.categoryLabel}
                    </span>
                  </div>
                  {project.isFeatured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-bold text-emerald-300">
                        DESTAQUE
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-slate-800/40 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver Detalhes</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-slate-100 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                      title="Repositório GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-cyan-400 hover:text-cyan-300 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                      title="Acessar Projeto"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
