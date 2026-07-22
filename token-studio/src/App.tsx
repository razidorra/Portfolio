import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import IntroScreen from "./components/layout/IntroScreen";
import BackgroundLightTrails from "./components/layout/BackgroundLightTrails";
import { projects } from "./data/projects";
import {
  contactLinks,
  coreSkills,
  portfolioStats,
  processSteps,
  skills,
  strengths,
} from "./data/portfolio";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import PortfolioHighlightsSection from "./sections/PortfolioHighlightsSection";
import ProcessSection from "./sections/ProcessSection";
import ProjectsSection from "./sections/ProjectsSection";
import WorksSection from "./sections/WorksSection";

export default function App() {
  const [showIntro, setShowIntro] = useState(() => !window.location.hash);
  const featuredProjects = projects.filter((project) => project.featured);

  useLayoutEffect(() => {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const target = targetId ? document.getElementById(targetId) : null;

    if (!target) {
      return;
    }

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    target.scrollIntoView();
    root.style.scrollBehavior = previousScrollBehavior;
  }, []);

  useEffect(() => {
    if (!showIntro && !window.location.hash) {
      document.getElementById("main-content")?.focus();
    }
  }, [showIntro]);

  if (showIntro) {
    return <IntroScreen onEnter={() => setShowIntro(false)} />;
  }

  return (
    <div className="site-shell">
      <BackgroundLightTrails />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <WorksSection projects={featuredProjects} />
        <AboutSection skills={skills} strengths={strengths} />
        <PortfolioHighlightsSection stats={portfolioStats} />
        <ProcessSection steps={processSteps} />
        <ProjectsSection projects={projects} />
      </main>

      <Footer contactLinks={contactLinks} coreSkills={coreSkills} />
    </div>
  );
}
