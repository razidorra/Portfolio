import { Code2, Link, Mail } from "lucide-react";
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
    title: "AutoFlow Workshop",
    stack: "HTML, CSS, JavaScript",
    category: "frontend",
    text: "A responsive automotive workshop website with service information, contact navigation, and a clear appointment booking flow.",
    image: "/autoflow-workshop-home.png",
    liveUrl: "https://razidorra.github.io/project/",
    githubUrl: "https://github.com/razidorra/project",
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

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="Razieh.dev home"
        >
          RAZIEH.DEV
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">
            Home
          </a>
          <a href="#projects">
            Projects
          </a>
          <a href="#connect">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}

function HomePage() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-code" aria-hidden="true">
          <span className="hero-code--tag">{"<div>"}</span>
          <span className="hero-code--flex">{"{ flex: 1 }"}</span>
          <span className="hero-code--state">useState()</span>
          <span className="hero-code--close">{"</>"}</span>
          <span className="hero-code--render">{"=> render()"}</span>
          <span className="hero-code--component">{"<Component />"}</span>
          <span className="hero-code--props">interface Props</span>
          <span className="hero-code--map">.map()</span>
          <span className="hero-code--async">async / await</span>
          <span className="hero-code--const">{"const app = () =>"}</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Frontend Developer</p>
          <div className="hero-divider" aria-hidden="true" />
          <h1>
            Engineered
            <span>for the Web</span>
          </h1>
          <p className="hero-text">
            Frontend developer building warm, responsive web experiences with
            React, JavaScript, CSS, and a growing full-stack toolkit.
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <a
              className="button button--primary"
              href="#projects"
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

        <a className="scroll-hint" href="#works" aria-label="Scroll to selected projects">
          <span />
        </a>
      </section>

      <section className="works-showcase" id="works" aria-label="Selected projects">
        <p className="section-kicker">Selected Work</p>
        <div className="work-stack">
          {featuredProjects.map((project) => (
            <article className="work-feature" key={project.title}>
              <div className="work-media">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} homepage`} />
                ) : (
                  <span>{project.title.slice(0, 2)}</span>
                )}
              </div>
              <div className="work-copy">
                <p>{project.stack}</p>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
                <div className="work-links">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      View Project
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="roots" aria-label="About Razieh's work">
        <div className="about-section__copy">
          <p className="section-kicker">Inside the Hive</p>
          <h2>More than a portfolio.</h2>
          <p>
            I am developing my skills across modern frontend tools and backend
            fundamentals, with a strong interest in pages that are practical,
            accessible, and visually calm. I care about making the content easy
            to scan and the interface easy to trust.
          </p>
          <div className="skill-list" aria-label="Technical skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
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

      <section className="stats-strip" id="skills" aria-label="Portfolio highlights">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="process-section" aria-label="Development process">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Process</p>
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

      <section className="home-projects" id="projects" aria-label="All projects">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Archive</p>
            <h2>All projects in one place.</h2>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
    </>
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
