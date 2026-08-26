import type { Project } from "../data/projects";
import WorkFeature from "../components/projects/WorkFeature";

interface WorksSectionProps {
  projects: Project[];
}

export default function WorksSection({ projects }: WorksSectionProps) {
  return (
    <section className="works-showcase" id="works" aria-labelledby="works-heading">
      <h2 className="section-kicker" id="works-heading">Selected Work</h2>
      <div className="work-stack">
        {projects.map((project) => (
          <WorkFeature project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
