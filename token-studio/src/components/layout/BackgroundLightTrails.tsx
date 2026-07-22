import { useEffect, useRef } from "react";

const upperPath =
  "M -140 38 C 180 -75 360 95 700 -18 S 1240 -55 1740 -110";
const lowerPath =
  "M -140 690 C 180 565 360 925 760 815 S 1260 515 1740 610";
const lowerPathTwo =
  "M -140 750 C 190 620 380 980 790 855 S 1300 585 1740 685";

export default function BackgroundLightTrails() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let scrollTimer: number | undefined;

    const handleScroll = () => {
      const svg = svgRef.current;
      if (!svg) return;

      svg.classList.add("light-trails--active");
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        svg.classList.remove("light-trails--active");
      }, 520);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="light-trails"
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="trail-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f0a163" />
          <stop offset="0.42" stopColor="#ef8fbd" />
          <stop offset="0.7" stopColor="#9b63ff" />
          <stop offset="1" stopColor="#4768ff" />
        </linearGradient>
        <filter id="trail-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="aurora-glow" x="-50%" y="-80%" width="200%" height="260%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {[upperPath, lowerPath, lowerPathTwo].map((path, index) => (
        <g key={path} className={`light-trail light-trail--${index + 1}`}>
          <path className="light-trail__aurora" d={path} pathLength="100" />
          <path className="light-trail__base" d={path} pathLength="100" />
          <path
            className="light-trail__pulse light-trail__pulse--soft"
            d={path}
            pathLength="100"
          />
          <path className="light-trail__pulse" d={path} pathLength="100" />
        </g>
      ))}
    </svg>
  );
}
