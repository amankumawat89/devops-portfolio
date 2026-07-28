import { Github, ExternalLink, Camera, ChevronRight } from 'lucide-react';
import type { Project } from '../../data/portfolio';

interface Props {
  project: Project;
  onViewDetails: (project: Project) => void;
  onOpenGallery: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails, onOpenGallery }: Props) {
  const statusColors: Record<string, string> = {
    'In Development': 'bg-primary/10 text-primary border-primary/20',
    'Production Prototype': 'bg-success/10 text-success border-success/20',
    'Completed': 'bg-text-secondary/10 text-text-secondary border-text-secondary/20',
  };

  if (project.featured) {
    return (
      <div className="col-span-full glass-card overflow-hidden group hover:border-primary/20 transition-all duration-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
          <div className="bg-surface-secondary/50 p-8 sm:p-12 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.06)_0%,_transparent_70%)]" />
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              </div>
              <p className="text-text-secondary text-sm mono">Featured Project</p>
            </div>
          </div>

          <div className="p-8 sm:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold text-text">{project.title}</h3>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusColors[project.status]}`}>
                {project.status}
              </span>
            </div>

            <p className="text-text-secondary leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-surface-secondary/80 border border-border/50 rounded-md text-xs font-medium text-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-secondary border border-border text-text text-sm font-medium rounded-lg hover:bg-surface-secondary/80 transition-colors"
              >
                <Github size={14} />
                GitHub
              </a>
              <button
                onClick={() => onViewDetails(project)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-sm font-medium rounded-lg hover:bg-primary/20 transition-colors"
              >
                <ExternalLink size={14} />
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card overflow-hidden flex flex-col group hover:border-primary/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
      {project.screenshot && (
        <div
          className="relative aspect-video bg-surface-secondary overflow-hidden cursor-pointer"
          onClick={() => onOpenGallery(project)}
        >
          <img
            src={project.screenshot}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

          {project.screenshots.length > 1 && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={12} className="text-white/80" />
              <span className="text-xs font-medium text-white/90">{project.screenshots.length} Screenshots</span>
            </div>
          )}
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="font-semibold text-text text-base">{project.title}</h3>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border whitespace-nowrap ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 bg-surface-secondary/80 border border-border/50 rounded text-[11px] font-medium text-text-secondary"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-secondary border border-border text-text text-xs font-medium rounded-lg hover:bg-surface-secondary/80 transition-colors"
          >
            <Github size={12} />
            GitHub
          </a>
          <button
            onClick={() => onViewDetails(project)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-medium rounded-lg hover:bg-primary/20 transition-colors"
          >
            View Details
            <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
