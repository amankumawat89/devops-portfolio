import { useState } from 'react';
import { projects } from '../../data/portfolio';
import type { Project } from '../../data/portfolio';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Gallery from './Gallery';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);

  const featured = projects.find((p) => p.featured);
  const regular = projects.filter((p) => !p.featured);

  return (
    <>
      <section id="projects" className="py-20 sm:py-28 bg-surface/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Projects</h2>
            <p className="section-subheading mt-3">Things I've built and shipped</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured && (
              <ProjectCard
                key={featured.id}
                project={featured}
                onViewDetails={setSelectedProject}
                onOpenGallery={setGalleryProject}
              />
            )}
            {regular.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={setSelectedProject}
                onOpenGallery={setGalleryProject}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {galleryProject && galleryProject.screenshots.length > 0 && (
        <Gallery
          images={galleryProject.screenshots}
          title={galleryProject.title}
          onClose={() => setGalleryProject(null)}
        />
      )}
    </>
  );
}
