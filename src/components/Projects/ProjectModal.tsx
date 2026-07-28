import { useState, useEffect, useCallback } from 'react';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import type { Project } from '../../data/portfolio';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [galleryIndex, setGalleryIndex] = useState(-1);

  const openGallery = useCallback((index: number) => {
    setGalleryIndex(index);
  }, []);

  const closeGallery = useCallback(() => {
    setGalleryIndex(-1);
  }, []);

  const goNext = useCallback(() => {
    setGalleryIndex((i) => (i + 1) % project.screenshots.length);
  }, [project.screenshots.length]);

  const goPrev = useCallback(() => {
    setGalleryIndex((i) => (i - 1 + project.screenshots.length) % project.screenshots.length);
  }, [project.screenshots.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (galleryIndex >= 0) {
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowRight') goNext();
        if (e.key === 'ArrowLeft') goPrev();
      } else {
        if (e.key === 'Escape') onClose();
      }
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [galleryIndex, onClose, closeGallery, goNext, goPrev]);

  const statusColors: Record<string, string> = {
    'In Development': 'bg-primary/10 text-primary border-primary/20',
    'Production Prototype': 'bg-success/10 text-success border-success/20',
    'Completed': 'bg-text-secondary/10 text-text-secondary border-text-secondary/20',
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-4 sm:inset-8 lg:inset-y-8 lg:inset-x-[10%] z-50 bg-surface border border-border rounded-xl overflow-hidden flex flex-col animate-scale-in">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 flex-shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-text">{project.title}</h2>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusColors[project.status]}`}>
              {project.status}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-secondary text-text-secondary hover:text-text transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {project.screenshots.length > 0 && (
            <div className="relative bg-surface-secondary">
              <div className="aspect-video max-h-[400px] overflow-hidden cursor-pointer" onClick={() => openGallery(0)}>
                <img
                  src={project.screenshots[0]}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
              {project.screenshots.length > 1 && (
                <button
                  onClick={() => openGallery(0)}
                  className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg text-white text-xs font-medium hover:bg-black/80 transition-colors"
                >
                  <Camera size={12} />
                  {project.screenshots.length} Screenshots
                </button>
              )}
            </div>
          )}

          {project.screenshots.length > 1 && (
            <div className="flex gap-2 px-6 py-3 overflow-x-auto border-b border-border/30">
              {project.screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  className="w-20 h-14 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-primary/50 transition-colors flex-shrink-0 opacity-60 hover:opacity-100"
                  onClick={() => openGallery(i)}
                  loading="lazy"
                />
              ))}
            </div>
          )}

          <div className="p-6 sm:p-8 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-3">Overview</h3>
              <p className="text-text-secondary leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-surface-secondary border border-border/50 rounded-lg text-sm font-medium text-text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-3">Challenges & Solutions</h3>
              <p className="text-text-secondary leading-relaxed text-sm">{project.challenges}</p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-secondary border border-border text-text text-sm font-medium rounded-lg hover:bg-surface-secondary/80 transition-colors"
              >
                <Github size={15} />
                View on GitHub
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {galleryIndex >= 0 && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeGallery();
          }}
        >
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="relative flex-1 flex items-center justify-center w-full px-4 sm:px-16">
            {project.screenshots.length > 1 && (
              <button onClick={goPrev} className="absolute left-2 sm:left-4 z-10 w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Previous">
                <ChevronLeft size={20} />
              </button>
            )}
            <img
              src={project.screenshots[galleryIndex]}
              alt={`${project.title} - Screenshot ${galleryIndex + 1}`}
              className="max-w-[90vw] max-h-[75vh] object-contain rounded-lg"
            />
            {project.screenshots.length > 1 && (
              <button onClick={goNext} className="absolute right-2 sm:right-4 z-10 w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Next">
                <ChevronRight size={20} />
              </button>
            )}
          </div>

          <div className="flex flex-col items-center gap-3 py-4">
            <p className="text-white/90 text-sm font-medium">{project.title}</p>
            <p className="text-white/50 text-xs mono">{galleryIndex + 1} / {project.screenshots.length}</p>
            <div className="flex gap-1.5 max-w-[80vw] overflow-x-auto pb-1">
              {project.screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Thumbnail ${i + 1}`}
                  className={`w-14 h-10 object-cover rounded cursor-pointer border-2 transition-all flex-shrink-0 ${
                    i === galleryIndex ? 'border-primary opacity-100' : 'border-transparent opacity-40 hover:opacity-70'
                  }`}
                  onClick={() => setGalleryIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
