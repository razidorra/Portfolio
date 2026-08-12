const learningNow = ["Deeper TypeScript patterns", "Node & Express architecture", "Accessible interaction design"];

export default function MomentumSection() {
  return (
    <section className="momentum-section" aria-labelledby="momentum-heading">
      <div>
        <p className="section-kicker">In Progress</p>
        <h2 id="momentum-heading">Always building forward.</h2>
        <p>
          I am strengthening the bridge between polished frontend work and dependable
          full-stack applications—one focused project and code review at a time.
        </p>
        <a className="text-link" href="https://github.com/razidorra" target="_blank" rel="noopener noreferrer">
          Follow my work on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="learning-card">
        <p>Currently learning</p>
        <ul>
          {learningNow.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
