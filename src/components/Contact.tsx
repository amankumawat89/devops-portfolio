import { Mail, Github, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import { config } from '../data/portfolio';

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: config.email,
    href: `mailto:${config.email}`,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'amankumawat89',
    href: config.github,
    color: 'text-text',
    bg: 'bg-surface-secondary',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Aman Kumawat',
    href: config.linkedin,
    color: 'text-[#0a66c2]',
    bg: 'bg-[#0a66c2]/10',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: config.location,
    href: undefined,
    color: 'text-success',
    bg: 'bg-success/10',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading mt-3">Let's connect and build something great</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {contactCards.map((card) => (
            <div
              key={card.label}
              className={`glass-card p-6 text-center group hover:border-primary/20 transition-all duration-200 ${
                card.href ? 'cursor-pointer' : ''
              }`}
              onClick={card.href ? () => window.open(card.href, '_blank') : undefined}
            >
              <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mx-auto mb-4`}>
                <card.icon size={20} className={card.color} />
              </div>
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-1 mono">{card.label}</p>
              <p className="text-sm font-medium text-text truncate">{card.value}</p>
              {card.href && (
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Connect</span>
                  <ExternalLink size={10} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
