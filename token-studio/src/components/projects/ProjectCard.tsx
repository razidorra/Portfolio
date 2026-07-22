import { projectStatusLabels, type Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export default function ProjectCard({ project }: ProjectCardProps) {
  const className = project.image ? "project-card project-card--media" : "project-card";

  return (
    <article className={className}>
      {project.image && project.imageAlt ? (
        project.liveUrl ? (
          <a
            className="project-card__image project-card__image--link"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live website`}
          >
            <img
              src={publicAsset(project.image)}
              alt={project.imageAlt}
              loading="lazy"
              decoding="async"
            />
          </a>
        ) : (
          <div className="project-card__image">
            <img
              src={publicAsset(project.image)}
              alt={project.imageAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
        )
      ) : null}

      <div className="project-card__body">
        <span>{project.stack}</span>
        <p className="project-status">{projectStatusLabels[project.status]}</p>
        <h3>{project.title}</h3>
        <p>{project.text}</p>

        {project.liveUrl || project.githubUrl ? (
          <div className="project-card__actions">
            {project.liveUrl ? (
              <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Website
              </a>
            ) : null}
            {project.githubUrl ? (
              <a className="button button--secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
