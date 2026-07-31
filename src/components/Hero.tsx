import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { config } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="min-h-[calc(100svh_-_var(--navbar-height))] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="section-container relative z-10 text-center">
        <div className="mb-8">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt={config.name}
            className="w-28 h-28 rounded-full object-cover border-2 border-primary/30 shadow-glow mx-auto"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-medium text-text-secondary mono">Open to opportunities</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          <span className="text-text">{config.name.split(' ')[0]} </span>
          <span className="text-gradient">{config.name.split(' ')[1]}</span>
        </h1>

        <p className="text-xl sm:text-2xl text-text-secondary font-medium mb-6">
          {config.title}
        </p>

        <p className="text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          {config.about}
        </p>

        <div className="flex items-center justify-center gap-3 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-glow"
          >
            View Projects
          </a>
          <a
            href={config.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border text-text font-semibold text-sm rounded-lg hover:bg-surface-secondary transition-colors duration-200"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={config.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border text-text font-semibold text-sm rounded-lg hover:bg-surface-secondary transition-colors duration-200"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-text-secondary hover:text-text transition-colors"
          aria-label="Scroll to about"
        >
          <span className="text-xs mono">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
