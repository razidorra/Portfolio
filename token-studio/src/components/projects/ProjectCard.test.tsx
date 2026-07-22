import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Project } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const publishedProject: Project = {
  id: "published",
  title: "Published Project",
  stack: "React",
  category: "frontend",
  status: "published",
  text: "A published project.",
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/example/project",
};

const learningProject: Project = {
  id: "learning",
  title: "Learning Project",
  stack: "Node.js",
  category: "full stack",
  status: "learning",
  text: "An unpublished learning project.",
};

describe("ProjectCard", () => {
  it("renders available live and GitHub links", () => {
    render(<ProjectCard project={publishedProject} />);

    expect(screen.getByRole("link", { name: "Live Website" })).toHaveAttribute("href", publishedProject.liveUrl);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", publishedProject.githubUrl);
  });

  it("does not render empty actions for a project without links", () => {
    render(<ProjectCard project={learningProject} />);

    expect(screen.getByText("Learning project")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Live Website" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "GitHub" })).not.toBeInTheDocument();
  });
});
