import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "../data/projects";
import ProjectsSection from "./ProjectsSection";

describe("ProjectsSection", () => {
  it("renders every project from the central project list", () => {
    render(<ProjectsSection projects={projects} />);

    projects.forEach((project) => {
      expect(screen.getByRole("heading", { name: project.title })).toBeInTheDocument();
    });
  });

  it("links the Holo Mini project to its live website and GitHub repository", () => {
    render(<ProjectsSection projects={projects} />);

    const projectCard = screen.getByRole("heading", { name: "Holo Mini" }).closest("article");

    expect(projectCard).not.toBeNull();
    expect(within(projectCard!).getByRole("link", { name: "Live Website" })).toHaveAttribute(
      "href",
      "https://razidorra.github.io/holomini/",
    );
    expect(within(projectCard!).getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/razidorra/holomini",
    );
  });
});
