import React from 'react';
import { Project } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const projectTranslationKeyMap: Record<string, keyof ReturnType<typeof useLanguage>['t']['projects']['items']> = {
  'an-agendamentos': 'anAgendamentos',
  'erp-petroleo': 'erpPetroleo',
  'controle-financeiro': 'controleFinanceiro',
  'gestao-consultas': 'gestaoConsultas',
  'site-psicanalista': 'sitePsicanalista',
  'cervejaria-fratelli': 'cervejariaFratelli',
  'nova-solucoes': 'novaSolucoes',
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();
  if (!project) return null;

  const key = projectTranslationKeyMap[project.id];
  const pTrans = key ? t.projects.items[key] : null;

  const title = pTrans?.title || project.title;
  const categoryLabel = pTrans?.categoryLabel || project.categoryLabel;
  const fullDescription = pTrans?.fullDescription || project.fullDescription;
  const features = pTrans?.features || project.features;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-2xl border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
              {categoryLabel}
            </span>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Project Image Preview */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
            <img 
              src={project.image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">{t.projects.modal.about}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{fullDescription}</p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">{t.projects.modal.features}</h4>
            <div className="space-y-2">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">{t.projects.modal.techs}</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-100 flex items-center justify-end gap-3 bg-slate-50">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>{t.projects.modal.viewCode}</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-xs transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{t.projects.modal.demoUrl}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
