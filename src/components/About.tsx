import { Briefcase, GraduationCap, MapPin, GraduationCap as Cap, Cloud, Container, Settings, Calendar } from 'lucide-react';
import { config } from '../data/portfolio';

const snapshot = [
  { icon: Cap, label: 'B.Tech Computer Science' },
  { icon: Cloud, label: 'Cloud & DevOps Intern' },
  { icon: Container, label: 'Docker · Kubernetes · Azure' },
  { icon: Settings, label: 'Jenkins · Linux · Python' },
  { icon: MapPin, label: config.location },
  { icon: Calendar, label: 'Resume updated: Jul 2026' },
];

const timeline = [
  {
    icon: Briefcase,
    title: 'DevOps & Cloud Intern',
    organization: 'Current Position',
    period: 'Present',
    description: 'Working on cloud infrastructure, CI/CD pipelines, and container orchestration with Docker and Kubernetes.',
  },
  {
    icon: GraduationCap,
    title: 'Computer Science Engineering',
    organization: 'University',
    period: 'Graduated',
    description: 'Studying computer science with focus on cloud computing, distributed systems, and software engineering.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading mt-3">My journey in DevOps and Cloud</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-text leading-relaxed text-lg">
                  {config.about}
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 mb-12">
            <h3 className="text-xs font-bold text-text uppercase tracking-widest mb-4">Career Snapshot</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {snapshot.map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-2 bg-surface-secondary/50 rounded-lg">
                  <item.icon size={15} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-6 group">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-surface border-2 border-border flex items-center justify-center group-hover:border-primary/50 transition-colors flex-shrink-0">
                    <item.icon size={16} className="text-text-secondary group-hover:text-primary transition-colors" />
                  </div>

                  <div className="glass-card p-6 flex-1 group-hover:border-primary/20 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-text">{item.title}</h3>
                      <span className="text-xs mono text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary mb-2">{item.organization}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
