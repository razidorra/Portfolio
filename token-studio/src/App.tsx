import {
  useEffect,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import { Code2, Link, Mail } from "lucide-react";
import ColorPicker from "./components/editor/ColorPicker";
import { applyTokensToDOM } from "./lib/applyTokens";
import { useTokenStore } from "./store/tokenStore";
import "./App.css";

const skills = [
  "HTML",
  "Tailwind CSS",
  "JavaScript",
  "Git",
  "GitHub",
  "Node.js",
  "MongoDB",
  "SQL",
];

interface Project {
  title: string;
  stack: string;
  category: string;
  text: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Lifestyle Quiz",
    stack: "HTML, CSS, JavaScript",
    category: "frontend",
    text: "A fun frontend quiz that introduces users to a lifestyle theme, starts from a welcoming landing page, and uses simple HTML, CSS, and JavaScript interactions.",
    image: "/lifestyle-quiz-home.png",
    liveUrl: "https://razidorra.github.io/lifestyleQuiz/",
    githubUrl: "https://github.com/razidorra/lifestyleQuiz",
  },
  {
    title: "Responsive Portfolio",
    stack: "React, CSS, UI Design",
    category: "frontend",
    text: "A clean personal site with smooth sections, reusable components, and a sharp first impression.",
  },
  {
    title: "Design Token Studio",
    stack: "React, Zustand, TypeScript",
    category: "design system",
    text: "A live editor for color, spacing, and typography tokens with instant component previews.",
  },
  {
    title: "Full Stack Practice App",
    stack: "Node.js, MongoDB, SQL",
    category: "full stack",
    text: "A learning project focused on practical data flows, clear interfaces, and maintainable code.",
  },
  {
    title: "Dashboard Cards",
    stack: "React, Responsive CSS",
    category: "frontend",
    text: "Compact interface cards for scanning status, comparing metrics, and keeping actions close.",
  },
];

const projectFilters = ["all", "frontend", "design system", "full stack"];

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

const stats = [
  { value: "Frontend", label: "Responsive interfaces" },
  { value: "Full Stack", label: "Node.js and data basics" },
  { value: "Clean UI", label: "Readable, practical layouts" },
];

const strengths = [
  {
    title: "Responsive Development",
    text: "I build layouts that stay clear on desktop, tablet, and mobile without losing the feeling of the design.",
  },
  {
    title: "Readable Code",
    text: "I like small components, consistent naming, and structure that makes future changes easier.",
  },
  {
    title: "Practical Design Sense",
    text: "I focus on spacing, hierarchy, contrast, and simple interactions that help people use the page.",
  },
];

const processSteps = [
  {
    title: "Understand",
    text: "I start with the goal, content, and user path before choosing the layout.",
  },
  {
    title: "Structure",
    text: "I turn the page into reusable sections with clear typography and spacing.",
  },
  {
    title: "Refine",
    text: "I check responsiveness, details, links, and final polish before sharing.",
  },
];

const coreSkills = [
  "Frontend Development",
  "Node.js",
  "Responsive Design",
  "Team Collaboration",
];

const contactLinks = [
  {
    label: "dorra.razi@gmail.com",
    href: "mailto:dorra.razi@gmail.com",
    icon: Mail,
  },
  {
    label: "linkedin.com/in/Razidorra",
    href: "https://linkedin.com/in/Razidorra",
    icon: Link,
  },
  {
    label: "github.com/razidorra",
    href: "https://github.com/razidorra",
    icon: Code2,
  },
];

const routes = ["/", "/learners", "/projects"] as const;
type Route = (typeof routes)[number];

function getRoute(): Route {
  const path = window.location.pathname;
  return routes.includes(path as Route) ? (path as Route) : "/";
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRoute);

  useEffect(() => {
    const handlePopState = () => setRoute(getRoute());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: Route) => {
    window.history.pushState({}, "", path);
    setRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate =
    (path: Route) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      navigate(path);
    };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="/"
          onClick={handleNavigate("/")}
          aria-label="Razieh.dev home"
        >
          RAZIEH.DEV
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a
            className={route === "/" ? "active" : undefined}
            href="/"
            onClick={handleNavigate("/")}
          >
            Home
          </a>
          <a
            className={route === "/learners" ? "active" : undefined}
            href="/learners"
            onClick={handleNavigate("/learners")}
          >
            Learners
          </a>
          <a
            className={route === "/projects" ? "active" : undefined}
            href="/projects"
            onClick={handleNavigate("/projects")}
          >
            Projects
          </a>
        </nav>
      </header>

      <main>
        {route === "/" && <HomePage onNavigate={navigate} />}
        {route === "/learners" && <LearnersPage />}
        {route === "/projects" && <ProjectsPage />}
      </main>

      <Footer />
    </div>
  );
}

interface PageProps {
  onNavigate: (path: Route) => void;
}

function HomePage({ onNavigate }: PageProps) {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">About Me</p>
          <h1>
            Frontend developer building clean, useful web experiences.
          </h1>
          <p className="hero-text">
            Hi, I am Razieh Dorrazaei. I create responsive websites and web
            applications with React, JavaScript, CSS, and a growing full-stack
            toolkit. My focus is simple: clear structure, smooth usability, and
            code that is easy to continue working with.
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <a
              className="button button--primary"
              href="/projects"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("/projects");
              }}
            >
              View Projects
            </a>
            <a
              className="button button--secondary"
              href="#connect"
            >
              Contact Me
            </a>
          </div>
        </div>

        <aside className="about-card" aria-label="About Razieh">
          <p className="card-title">Profile</p>
          <h2>Razieh Dorrazaei</h2>
          <p>
            I enjoy turning ideas into polished interfaces, learning by
            building, and improving the small details that make a page feel
            professional.
          </p>

          <div className="skill-list" aria-label="Technical skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <a
            className="button button--primary button--wide"
            href="/updated-CV.pdf"
            download="Razieh-Dorrazaei-CV.pdf"
          >
            Download Resume
          </a>
        </aside>
      </section>

      <section className="stats-strip" aria-label="Portfolio highlights">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="about-section" aria-label="About Razieh's work">
        <div className="about-section__copy">
          <p className="eyebrow">What I Bring</p>
          <h2>Balanced frontend work with an eye for structure.</h2>
          <p>
            I am developing my skills across modern frontend tools and backend
            fundamentals, with a strong interest in pages that are practical,
            accessible, and visually calm. I care about making the content easy
            to scan and the interface easy to trust.
          </p>
        </div>

        <div className="strength-grid">
          {strengths.map((strength) => (
            <article className="strength-card" key={strength.title}>
              <h3>{strength.title}</h3>
              <p>{strength.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" aria-label="Development process">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Process</p>
            <h2>How I move from idea to finished page.</h2>
          </div>
        </div>

        <div className="process-cards">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-projects" aria-label="Selected projects preview">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2>Projects that show the material I work with.</h2>
          </div>
          <a
            className="button button--secondary"
            href="/projects"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/projects");
            }}
          >
            All Projects
          </a>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
    </>
  );
}

function LearnersPage() {
  return (
    <section className="page-section learners-page">
      <div className="page-heading">
        <p className="eyebrow">Learning Work</p>
        <h1>Practice projects and experiments.</h1>
        <p>
          This page keeps the previous learning material together: project
          cards, token controls, motion boxes, and the same color palette and
          box structure from the earlier design.
        </p>
      </div>

      <div className="project-grid learners-projects">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>

      <TokenStudioPanel />
    </section>
  );
}

function TokenStudioPanel() {
  const colors = useTokenStore((s) => s.colors);
  const spacing = useTokenStore((s) => s.spacing);
  const typography = useTokenStore((s) => s.typography);
  const updateColor = useTokenStore((s) => s.updateColor);
  const updateSpacing = useTokenStore((s) => s.updateSpacing);
  const updateTypography = useTokenStore((s) => s.updateTypography);

  useEffect(() => {
    applyTokensToDOM(colors, spacing, typography);
  }, [colors, spacing, typography]);

  return (
    <section className="token-studio" aria-label="Interactive token studio">
      <aside className="token-sidebar">
        <h2>Token Studio</h2>

        <p className="token-label">Farb-Tokens</p>
        {colors.map((color) => (
          <ColorPicker
            key={color.name}
            name={color.name}
            value={color.value}
            onChange={updateColor}
          />
        ))}

        <p className="token-label token-label--spaced">Spacing</p>
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

        <p className="token-label token-label--spaced">Typography</p>
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

      <div className="token-preview">
        <div className="token-preview__copy">
          <p className="eyebrow">Interactive Tokens</p>
          <h2>Live design system preview</h2>
          <p>
            Change the color, spacing, and typography values. The preview boxes
            react live, just like in the first version of the app.
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
      </div>
    </section>
  );
}

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState(projectFilters[0]);
  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Selected Work</p>
        <h1>Projects</h1>
        <p>
          A focused collection of frontend and full-stack practice projects
          shaped around responsive layouts, clean code, and usable interfaces.
        </p>
      </div>

      <div className="filter-row" aria-label="Project filters">
        {projectFilters.map((filter) => (
          <button
            className={activeFilter === filter ? "active" : undefined}
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="project-grid project-grid--page">
        {visibleProjects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={project.image ? "project-card project-card--media" : "project-card"}>
      {project.image && project.liveUrl ? (
        <a
          className="project-card__image-link"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} live website`}
        >
          <img src={project.image} alt={`${project.title} homepage`} />
        </a>
      ) : null}

      <div className="project-card__body">
        <span>{project.stack}</span>
        <h3>{project.title}</h3>
        <p>{project.text}</p>

        {project.liveUrl || project.githubUrl ? (
          <div className="project-card__actions">
            {project.liveUrl ? (
              <a
                className="button button--primary"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Website
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                className="button button--secondary"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <section
        className="footer-connect"
        id="connect"
        aria-label="Footer contact details"
      >
        <div className="footer-connect__inner">
          <div className="footer-skills">
            <h2>Core Skills</h2>
            <p>
              The tools and technologies used to bring ideas to life with
              maintainable, production-ready code.
            </p>

            <ul aria-label="Core skills">
              {coreSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="footer-card">
            <h2>Let's Connect</h2>
            <ul aria-label="Contact links">
              {contactLinks.map(({ href, icon: Icon, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    target={href.startsWith("http") ? "_blank" : undefined}
                  >
                    <Icon aria-hidden="true" size={22} strokeWidth={2.2} />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="footer-bottom" aria-label="Copyright">
        <strong>Razieh Dorrazaei</strong>
        <p>Building the web, one pixel at a time.</p>
        <small>Copyright © 2026 - All rights reserved</small>
      </section>
    </footer>
  );
}
