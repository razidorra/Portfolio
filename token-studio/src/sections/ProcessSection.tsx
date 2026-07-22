import type { TextItem } from "../data/portfolio";

export default function ProcessSection({ steps }: { steps: TextItem[] }) {
  return (
    <section className="process-section" aria-labelledby="process-heading">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Process</p>
          <h2 id="process-heading">How I move from idea to finished page.</h2>
        </div>
      </div>

      <div className="process-cards">
        {steps.map((step, index) => (
          <article className="process-card" key={step.title}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
