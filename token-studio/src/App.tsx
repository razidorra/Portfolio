import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import AmbientBackground from "./components/layout/AmbientBackground";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import IntroScreen from "./components/layout/IntroScreen";
import MouseColorTrail from "./components/layout/MouseColorTrail";
import Reveal from "./components/layout/Reveal";
import { projects } from "./data/projects";
import {
  contactLinks,
  portfolioStats,
  processSteps,
  skills,
  strengths,
} from "./data/portfolio";
import AboutSection from "./sections/AboutSection";
import CoreTechnologiesSection from "./sections/CoreTechnologiesSection";
import HeroSection from "./sections/HeroSection";
import PortfolioHighlightsSection from "./sections/PortfolioHighlightsSection";
import ProcessSection from "./sections/ProcessSection";
import ProjectsSection from "./sections/ProjectsSection";
import WorksSection from "./sections/WorksSection";
import MomentumSection from "./sections/MomentumSection";

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
      <AmbientBackground />
      <MouseColorTrail />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <Reveal>
          <CoreTechnologiesSection />
        </Reveal>
        <Reveal>
          <WorksSection projects={featuredProjects} />
        </Reveal>
        <Reveal>
          <AboutSection skills={skills} strengths={strengths} />
        </Reveal>
        <Reveal>
          <MomentumSection />
        </Reveal>
        <Reveal>
          <PortfolioHighlightsSection stats={portfolioStats} />
        </Reveal>
        <Reveal>
          <ProcessSection steps={processSteps} />
        </Reveal>
        <Reveal>
          <ProjectsSection projects={projects} />
        </Reveal>
      </main>

      <Footer contactLinks={contactLinks} />
    </div>
  );
}
