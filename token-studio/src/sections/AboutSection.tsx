import type { TextItem } from "../data/portfolio";

interface AboutSectionProps {
  skills: string[];
  strengths: TextItem[];
}

export default function AboutSection({ skills, strengths }: AboutSectionProps) {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="about-section__copy">
        <p className="section-kicker">About Me</p>
        <h2 id="about-heading">Thoughtful interfaces, built to be used.</h2>
        <p>
          I am a frontend developer growing into full-stack development. I enjoy
          turning ideas into clear, responsive interfaces and writing code that
          other developers can understand and maintain.
        </p>
        <div className="skill-list" aria-label="Technical skills">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
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
  );
}
