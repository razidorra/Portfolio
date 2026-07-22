import portfolioBackground from "../../assets/portfolio-background.png";
import BackgroundLightTrails from "./BackgroundLightTrails";

interface IntroScreenProps {
  onEnter: () => void;
}

interface AnimatedWordProps {
  children: string;
  from: "left" | "right";
  paletteOffset: number;
  startDelay: number;
}

const backgroundLightColors = [
  "#f0a163",
  "#ed9d70",
  "#e99680",
  "#df8b95",
  "#d27eaa",
  "#c374bf",
  "#b66dce",
  "#aa68dc",
  "#9d65e8",
  "#9065f1",
  "#8268f7",
  "#746dfb",
  "#6674ff",
  "#7284ff",
  "#91a2ff",
];

function AnimatedWord({
  children,
  from,
  paletteOffset,
  startDelay,
}: AnimatedWordProps) {
  return (
    <span className={`intro-name__word intro-name__word--${from}`}>
      {Array.from(children).map((letter, index) => (
        <span
          className="intro-name__letter"
          style={{
            animationDelay: `${startDelay + index * 0.22}s`,
            color: backgroundLightColors[paletteOffset + index],
          }}
          aria-hidden="true"
          key={`${letter}-${index}`}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  return (
    <button
      className="intro-screen"
      type="button"
      onClick={onEnter}
      aria-label="Enter Razieh Dorrazaei's portfolio"
    >
      <img
        src={portfolioBackground}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
      />
      <BackgroundLightTrails />
      <span className="intro-identity" aria-label="Razieh Dorrazaei, Frontend Developer">
        <span className="intro-name">
          <AnimatedWord from="left" paletteOffset={0} startDelay={0.15}>
            RAZIEH
          </AnimatedWord>
          <AnimatedWord from="right" paletteOffset={6} startDelay={2.1}>
            DORRAZAEI
          </AnimatedWord>
        </span>
        <span className="intro-role">Frontend Developer</span>
      </span>
      <span className="intro-screen__action">
        Enter Portfolio
        <small>Click anywhere or press Enter</small>
      </span>
    </button>
  );
}
