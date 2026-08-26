import type { ReactNode } from "react";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

/**
 * Fades and lifts a whole section into place as it scrolls into view.
 * A plain wrapper div is safe here: sections use their own spacing/ids,
 * none of the page layout relies on them being direct children of <main>.
 */
export default function Reveal({ children }: { children: ReactNode }) {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal${visible ? " reveal--visible" : ""}`}>
      {children}
    </div>
  );
}
