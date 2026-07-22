export default function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
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
        <p className="eyebrow">Razieh Dorrazaei · Frontend Developer</p>
        <div className="hero-divider" aria-hidden="true" />
        <h1 id="hero-title">
          Engineered
          <span>for the Web</span>
        </h1>
        <p className="hero-text">
          I build warm, accessible, and responsive web experiences with React,
          TypeScript, and a growing full-stack toolkit.
        </p>

        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button--primary" href="#projects">View Projects</a>
          <a className="button button--secondary" href="#connect">Contact Me</a>
        </div>
      </div>

      <a className="scroll-hint" href="#works" aria-label="Scroll to selected projects">
        <span aria-hidden="true" />
      </a>
    </section>
  );
}
