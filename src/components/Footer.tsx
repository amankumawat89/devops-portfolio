import { Github, Linkedin, Mail } from 'lucide-react';
import { config } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface/30">
      <div className="section-container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold text-xs">A</span>
            </div>
            <span className="text-sm text-text-secondary">
              &copy; {new Date().getFullYear()} {config.name}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={config.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${config.email}`}
              className="text-text-secondary hover:text-text transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
