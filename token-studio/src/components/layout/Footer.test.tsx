import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { contactLinks, coreSkills } from "../../data/portfolio";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders all contact links and the CV download", () => {
    render(<Footer contactLinks={contactLinks} coreSkills={coreSkills} />);

    contactLinks.forEach((contact) => {
      expect(screen.getByRole("link", { name: contact.label })).toHaveAttribute("href", contact.href);
    });
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute("download");
  });
});
