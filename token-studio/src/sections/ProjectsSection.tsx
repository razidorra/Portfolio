import ProjectCard from "../components/projects/ProjectCard";
import type { Project } from "../data/projects";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const appliedProjects = projects.filter((project) => project.group === "applied");
  const foundationProjects = projects.filter((project) => project.group === "foundations");

  return (
    <section className="home-projects" id="projects" aria-labelledby="projects-heading">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Archive</p>
          <h2 id="projects-heading">All projects in one place.</h2>
        </div>
      </div>

      <div className="project-group" aria-labelledby="applied-projects-heading">
        <div className="project-group__heading">
          <p>React, backend &amp; richer interactions</p>
          <h3 id="applied-projects-heading">Applied Projects</h3>
        </div>
        <div className="project-grid">
          {appliedProjects.map((project) => <ProjectCard project={project} key={project.id} />)}
        </div>
      </div>

      <div className="project-group" aria-labelledby="foundation-projects-heading">
        <div className="project-group__heading">
          <p>HTML, CSS &amp; vanilla JavaScript</p>
          <h3 id="foundation-projects-heading">Foundations</h3>
        </div>
        <div className="project-grid">
          {foundationProjects.map((project) => <ProjectCard project={project} key={project.id} />)}
        </div>
      </div>
    </section>
  );
}
