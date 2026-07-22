import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import App from "./App";

describe("App", () => {
  afterEach(() => {
    window.history.replaceState(null, "", "/");
  });

  it("has one main heading and valid internal anchor targets", () => {
    window.history.replaceState(null, "", "/");
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /enter razieh/i }));

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);

    const internalLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'),
    );

    internalLinks.forEach((link) => {
      const target = document.querySelector(link.hash);
      expect(target, `Missing target for ${link.hash}`).not.toBeNull();
    });
  });

  it("shows an accessible intro before the main portfolio", () => {
    window.history.replaceState(null, "", "/");
    render(<App />);

    expect(
      screen.getByRole("button", { name: /enter razieh/i }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("main")).not.toBeInTheDocument();
  });

  it("restores a direct section hash after React renders", () => {
    window.history.replaceState(null, "", "/#projects");
    const scrollIntoView = vi.fn();
    Object.defineProperty(Element.prototype, "scrollIntoView", {
      configurable: true,
      value: scrollIntoView,
    });

    render(<App />);

    expect(scrollIntoView).toHaveBeenCalledOnce();
  });
});
