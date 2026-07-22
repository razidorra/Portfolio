import type { PortfolioStat } from "../data/portfolio";

export default function PortfolioHighlightsSection({ stats }: { stats: PortfolioStat[] }) {
  return (
    <section className="stats-strip" aria-label="Portfolio highlights">
      {stats.map((item) => (
        <div key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}
