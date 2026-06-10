import { useEffect, type CSSProperties } from "react";
import { useTokenStore } from "./store/tokenStore";
import { applyTokensToDOM } from "./lib/applyTokens";
import Button from "./components/ui/Button";
import Badge from "./components/ui/Badge";
import ColorPicker from "./components/editor/ColorPicker";
import "./App.css";

const heroBoxes = [
  {
    id: "flow",
    label: "Flow",
    detail: "smooth",
    tone: "var(--color-primary)",
  },
  {
    id: "spark",
    label: "Spark",
    detail: "bounce",
    tone: "var(--color-secondary)",
  },
  {
    id: "pulse",
    label: "Pulse",
    detail: "flip",
    tone: "var(--color-danger)",
  },
  {
    id: "orbit",
    label: "Orbit",
    detail: "twist",
    tone: "var(--color-warning)",
  },
];

const projectCards = [
  {
    title: "Token Studio",
    type: "React + Zustand",
    text: "Live design tokens, reusable UI components and instant preview updates.",
    accent: "var(--color-primary)",
  },
  {
    title: "Portfolio System",
    type: "Frontend UI",
    text: "A responsive portfolio layout with animated cards and clean sections.",
    accent: "var(--color-secondary)",
  },
  {
    title: "Motion Experiments",
    type: "CSS Animation",
    text: "Hover interactions, 3D transforms and playful micro-interactions.",
    accent: "var(--color-danger)",
  },
];

const skills = [
  { name: "React", value: 88, color: "var(--color-primary)" },
  { name: "CSS Motion", value: 82, color: "var(--color-secondary)" },
  { name: "UI Design", value: 76, color: "var(--color-warning)" },
  { name: "TypeScript", value: 70, color: "var(--color-danger)" },
];

const processSteps = ["Research", "Design", "Build", "Polish"];

export default function App() {
  const colors = useTokenStore((s) => s.colors);
  const spacing = useTokenStore((s) => s.spacing);
  const typography = useTokenStore((s) => s.typography);
  const updateColor = useTokenStore((s) => s.updateColor);
  const updateSpacing = useTokenStore((s) => s.updateSpacing);
  const updateTypography = useTokenStore((s) => s.updateTypography);
  const primaryColor =
    colors.find((color) => color.name === "primary")?.value ?? "#1D9E75";

  useEffect(() => {
    applyTokensToDOM(colors, spacing, typography);
  }, [colors, spacing, typography]);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h2 className="sidebar-title">Token Studio</h2>
        <p className="section-label">Farb-Tokens</p>
        {colors.map((c) => (
          <ColorPicker
            key={c.name}
            name={c.name}
            value={c.value}
            onChange={updateColor}
          />
        ))}

        <p className="section-label section-label--spaced">Spacing</p>
        {spacing.map((token) => (
          <label className="token-field" key={token.name}>
            <span>{token.name}</span>
            <input
              type="text"
              value={token.value}
              onChange={(event) =>
                updateSpacing(token.name, event.currentTarget.value)
              }
            />
          </label>
        ))}

        <p className="section-label section-label--spaced">Typography</p>
        {typography.map((token) => (
          <div className="typography-group" key={token.name}>
            <span className="typography-group__title">{token.name}</span>
            <label className="token-field">
              <span>Size</span>
              <input
                type="text"
                value={token.fontSize}
                onChange={(event) =>
                  updateTypography(
                    token.name,
                    "fontSize",
                    event.currentTarget.value,
                  )
                }
              />
            </label>
            <label className="token-field">
              <span>Weight</span>
              <input
                type="text"
                value={token.fontWeight}
                onChange={(event) =>
                  updateTypography(
                    token.name,
                    "fontWeight",
                    event.currentTarget.value,
                  )
                }
              />
            </label>
            <label className="token-field">
              <span>Line</span>
              <input
                type="text"
                value={token.lineHeight}
                onChange={(event) =>
                  updateTypography(
                    token.name,
                    "lineHeight",
                    event.currentTarget.value,
                  )
                }
              />
            </label>
          </div>
        ))}
      </aside>

      <main className="preview">
        <header className="preview-header">
          <h1>Komponenten Preview</h1>
          <p>Ändere die Farben links - alles updated live.</p>
        </header>

        <section className="hero-stage" aria-label="Animated hero preview">
          <div className="hero-copy">
            <p className="section-label">Interactive Hero</p>
            <h2>Frontend Portfolio Lab</h2>
            <p>
              Ein interaktives Portfolio mit Live-Tokens, Motion-Details und
              UI-Komponenten, die direkt auf deine Einstellungen reagieren.
            </p>
          </div>

          <div className="hero-box-grid">
            {heroBoxes.map((box, index) => (
              <button
                className={`hero-box hero-box--${box.id}`}
                key={box.id}
                style={
                  {
                    "--box-tone": box.tone,
                    "--float-delay": `${index * -0.7}s`,
                  } as CSSProperties
                }
              >
                <span>{box.label}</span>
                <small>{box.detail}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="portfolio-strip" aria-label="Portfolio highlights">
          <div>
            <strong>12+</strong>
            <span>UI modules</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Motion styles</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Live tokens</span>
          </div>
        </section>

        <section className="preview-panel">
          <div className="panel-heading">
            <div>
              <p className="section-label">Featured Work</p>
              <h2>Portfolio Projects</h2>
            </div>
            <Badge label="available" color={primaryColor} />
          </div>
          <div className="project-grid">
            {projectCards.map((project) => (
              <article
                className="project-card"
                key={project.title}
                style={{ "--project-accent": project.accent } as CSSProperties}
              >
                <span className="project-card__type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="preview-panel portfolio-dashboard">
          <div className="skills-panel">
            <p className="section-label">Skills</p>
            <h2>What I work with</h2>
            <div className="skill-list">
              {skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-item__top">
                    <span>{skill.name}</span>
                    <strong>{skill.value}%</strong>
                  </div>
                  <div className="skill-bar">
                    <span
                      style={
                        {
                          "--skill-color": skill.color,
                          "--skill-value": `${skill.value}%`,
                        } as CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="process-panel">
            <p className="section-label">Process</p>
            <h2>How I build</h2>
            <ol className="process-list">
              {processSteps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="preview-panel">
          <p className="section-label">Buttons</p>
          <div className="component-row component-row--buttons">
            <Button label="Primary" variant="primary" />
            <Button label="Secondary" variant="secondary" />
            <Button label="Outline" variant="outline" />
            <Button label="Danger" variant="danger" />
            <Button label="Ghost" variant="ghost" />
          </div>
        </section>

        <section className="preview-panel">
          <p className="section-label">Typography</p>
          <div className="type-preview">
            <h2>Design tokens make changes predictable.</h2>
            <p>
              Body text, headings and supporting text now react to the token
              controls in the sidebar.
            </p>
            <small>Small text uses its own token set.</small>
          </div>
        </section>

        <section className="preview-panel">
          <p className="section-label">Badges</p>
          <div className="component-row component-row--badges">
            {colors.map((c) => (
              <Badge key={c.name} label={c.name} color={c.value} />
            ))}
          </div>
        </section>

        <section className="contact-band">
          <div>
            <p className="section-label">Contact</p>
            <h2>Let us build something sharp.</h2>
          </div>
          <Button label="Say hello" variant="primary" />
        </section>
      </main>
    </div>
  );
}
