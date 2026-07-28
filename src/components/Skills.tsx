import { Cloud, Container, GitBranch, Code2, Terminal } from 'lucide-react';
import { skills, skillCategories } from '../data/portfolio';

const iconMap: Record<string, typeof Cloud> = {
  cloud: Cloud,
  container: Container,
  'git-branch': GitBranch,
  'code-2': Code2,
  terminal: Terminal,
};

function getSkillIcon(icon: string) {
  return iconMap[icon] || Terminal;
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-surface/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Technical Skills</h2>
          <p className="section-subheading mt-3">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {skillCategories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category.id);
            if (categorySkills.length === 0) return null;

            return (
              <div
                key={category.id}
                className="glass-card p-6 group hover:border-primary/20 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    {(() => {
                      const Icon = getSkillIcon(category.icon);
                      return <Icon size={16} className="text-primary" />;
                    })()}
                  </div>
                  <h3 className="font-semibold text-text text-sm">{category.label}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => {
                    const Icon = getSkillIcon(skill.icon);
                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-secondary/50 border border-border/50 rounded-lg text-sm text-text-secondary hover:text-text hover:border-border transition-colors"
                      >
                        <Icon size={14} />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
