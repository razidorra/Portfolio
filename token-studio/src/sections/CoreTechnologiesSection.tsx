import type { CSSProperties } from "react";
import { technologies } from "../data/technologies";

// Rendered twice back-to-back so the track can loop seamlessly; the second
// copy is decorative and hidden from assistive tech.
const track = [...technologies, ...technologies];

export default function CoreTechnologiesSection() {
  return (
    <section className="tech-section" aria-labelledby="core-tech-heading">
      <h2 className="section-kicker" id="core-tech-heading">
        Core Technologies
      </h2>

      <div className="tech-marquee">
        <div className="tech-marquee__track">
          {track.map((tech, index) => {
            const Icon = tech.icon;
            const isDuplicate = index >= technologies.length;

            return (
              <div
                className="tech-chip"
                key={`${tech.name}-${index}`}
                style={{ "--tech-color": tech.color } as CSSProperties}
                aria-hidden={isDuplicate}
              >
                <span className="tech-chip__icon">
                  <Icon aria-hidden="true" size={30} />
                </span>
                <span className="tech-chip__label">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
