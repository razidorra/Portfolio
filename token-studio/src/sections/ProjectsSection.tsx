import ProjectCard from "../components/projects/ProjectCard";
import type { Project } from "../data/projects";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="home-projects" id="projects" aria-labelledby="projects-heading">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Archive</p>
          <h2 id="projects-heading">All projects in one place.</h2>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
      </div>
    </section>
  );
}
