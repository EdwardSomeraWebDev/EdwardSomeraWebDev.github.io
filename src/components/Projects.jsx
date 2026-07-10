import { ExternalLink } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p>Projects</p>
        <h2>Selected websites and web applications.</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <span>{project.type}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noreferrer">
              Visit Website <ExternalLink size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
