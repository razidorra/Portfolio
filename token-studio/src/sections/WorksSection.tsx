import type { Project } from "../data/projects";

interface WorksSectionProps {
  projects: Project[];
}

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export default function WorksSection({ projects }: WorksSectionProps) {
  return (
    <section className="works-showcase" id="works" aria-labelledby="works-heading">
      <h2 className="section-kicker" id="works-heading">Selected Work</h2>
      <div className="work-stack">
        {projects.map((project) => (
          <article className="work-feature" key={project.id}>
            <div className="work-media">
              {project.image && project.imageAlt ? (
                <img src={publicAsset(project.image)} alt={project.imageAlt} loading="lazy" decoding="async" />
              ) : (
                <span aria-hidden="true">{project.title.slice(0, 2)}</span>
              )}
            </div>
            <div className="work-copy">
              <p>{project.stack}</p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="work-links">
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Project</a>
                ) : null}
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
