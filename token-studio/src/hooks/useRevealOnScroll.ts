import { useEffect, useRef, useState } from "react";

function startsRevealed() {
  if (
    typeof window === "undefined" ||
    typeof IntersectionObserver === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    // No observer support (older browsers, jsdom/test environments): never
    // hide content behind a scroll trigger it can't fire.
    return true;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Reveals an element once it scrolls into the viewport. Returns a ref to
 * attach to the element and whether it has become visible. The reveal is
 * one-shot: once visible, it stays visible (no re-hiding on scroll back up).
 */
export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(startsRevealed);

  useEffect(() => {
    if (visible) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return { ref, visible };
}
