import { render, screen } from "@testing-library/react";
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
});
