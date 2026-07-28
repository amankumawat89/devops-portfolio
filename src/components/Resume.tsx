import { useState, useEffect } from 'react';
import { Download, Eye, Mail, FileText, Shield, Calendar, HardDrive, X, ZoomIn, ZoomOut } from 'lucide-react';
import { config, projects } from '../data/portfolio';

export default function Resume() {
  const [viewOpen, setViewOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!viewOpen) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setViewOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [viewOpen]);

  const featuredProjects = projects.filter((p) => !p.featured).slice(0, 3);

  return (
    <>
      <section id="resume" className="py-20 sm:py-28">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Resume</h2>
            <p className="section-subheading mt-3">
              A quick overview of my education, experience and technical background.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 max-w-5xl mx-auto items-start">

            {/* Resume Preview Card */}
            <div className="glass-card rounded-[20px] overflow-hidden">
              <div className="p-8 sm:p-10">

                {/* Header */}
                <div className="flex items-start gap-5 mb-8 pb-8 border-b border-border/50">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt={config.name}
                    className="w-20 h-20 rounded-2xl object-cover border border-border/50 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-text mb-1">{config.name}</h3>
                    <p className="text-primary font-medium mb-3">{config.title}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-text-secondary">
                      <span>{config.email}</span>
                      <span>{config.location}</span>
                      <a href={config.github} target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">github.com/amankumawat89</a>
                      <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">linkedin.com/in/aman-kumawat-301278353</a>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-text uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Experience
                  </h4>
                  <div className="ml-3.5 border-l border-border/50 pl-6">
                    <div className="mb-4">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h5 className="font-semibold text-text">DevOps & Cloud Intern</h5>
                        <span className="text-[11px] mono text-primary bg-primary/10 px-2 py-0.5 rounded-full">Present</span>
                      </div>
                      <p className="text-sm text-text-secondary mt-1">Working on cloud infrastructure, CI/CD pipelines, and container orchestration with Docker and Kubernetes.</p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-text uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Education
                  </h4>
                  <div className="ml-3.5 border-l border-border/50 pl-6">
                    <h5 className="font-semibold text-text">Computer Science Engineering</h5>
                    <p className="text-sm text-text-secondary mt-1">University &mdash; Graduated</p>
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-text uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Technical Skills
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-3.5">
                    <div>
                      <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Cloud &amp; Infrastructure</p>
                      <div className="flex flex-wrap gap-1.5">
                        {['Azure Cloud', 'AWS', 'Linux', 'Docker', 'Kubernetes'].map((s) => (
                          <span key={s} className="px-2 py-0.5 bg-surface-secondary border border-border/50 rounded text-xs text-text-secondary">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">DevOps &amp; Programming</p>
                      <div className="flex flex-wrap gap-1.5">
                        {['Jenkins', 'GitHub Actions', 'ArgoCD', 'Ansible', 'Python'].map((s) => (
                          <span key={s} className="px-2 py-0.5 bg-surface-secondary border border-border/50 rounded text-xs text-text-secondary">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Projects */}
                <div>
                  <h4 className="text-xs font-bold text-text uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Key Projects
                  </h4>
                  <div className="ml-3.5 space-y-3">
                    {featuredProjects.map((p) => (
                      <div key={p.id}>
                        <h5 className="font-medium text-sm text-text">{p.title}</h5>
                        <p className="text-xs text-text-secondary mt-0.5">{p.shortDescription}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Panel */}
            <div className="lg:sticky lg:top-24 space-y-4">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                className="flex items-center gap-3 w-full px-5 py-4 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-glow"
              >
                <Download size={18} />
                Download Resume
              </a>

              <button
                onClick={() => setViewOpen(true)}
                className="flex items-center gap-3 w-full px-5 py-4 bg-surface border border-border text-text font-semibold text-sm rounded-xl hover:bg-surface-secondary transition-colors duration-200"
              >
                <Eye size={18} />
                View Full Resume
              </button>

              <a
                href={`mailto:${config.email}`}
                className="flex items-center gap-3 w-full px-5 py-4 bg-surface border border-border text-text font-semibold text-sm rounded-xl hover:bg-surface-secondary transition-colors duration-200"
              >
                <Mail size={18} />
                Contact Me
              </a>

              <div className="glass-card rounded-xl p-4 space-y-3 mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary flex items-center gap-1.5">
                    <Calendar size={12} />
                    Resume Updated
                  </span>
                  <span className="text-xs font-medium text-text mono">Jul 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary flex items-center gap-1.5">
                    <HardDrive size={12} />
                    Resume Size
                  </span>
                  <span className="text-xs font-medium text-text mono">PDF</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary flex items-center gap-1.5">
                    <Shield size={12} />
                    Format
                  </span>
                  <span className="text-[10px] font-semibold text-success bg-success/10 border border-success/20 px-2 py-0.5 rounded-full">ATS Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Viewer Modal */}
      {viewOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={() => setViewOpen(false)} />

          <div className="fixed inset-3 sm:inset-6 lg:inset-8 z-50 bg-surface border border-border rounded-xl overflow-hidden flex flex-col animate-scale-in">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border/50 flex-shrink-0">
              <div className="flex items-center gap-3">
                <FileText size={16} className="text-primary" />
                <span className="font-semibold text-sm text-text">Resume &mdash; {config.name}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-secondary text-text-secondary hover:text-text transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut size={16} />
                </button>
                <span className="text-xs mono text-text-secondary min-w-[40px] text-center">{Math.round(zoom * 100)}%</span>
                <button
                  onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-secondary text-text-secondary hover:text-text transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn size={16} />
                </button>

                <div className="w-px h-5 bg-border mx-1" />

                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-secondary text-text-secondary hover:text-text transition-colors"
                  aria-label="Download"
                >
                  <Download size={16} />
                </a>

                <button
                  onClick={() => setViewOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-secondary text-text-secondary hover:text-text transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto bg-[#1a1a1a]">
              <div className="flex justify-center py-6 min-h-full">
                <iframe
                  src={`${import.meta.env.BASE_URL}resume.pdf#zoom=${zoom * 100}`}
                  className="w-full max-w-4xl h-full min-h-[80vh] border border-border/30 rounded-lg"
                  style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
                  title="Resume PDF"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
