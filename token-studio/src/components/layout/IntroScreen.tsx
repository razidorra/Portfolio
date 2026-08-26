import AmbientBackground from "./AmbientBackground";

interface IntroScreenProps {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  return (
    <button
      className="intro-screen"
      type="button"
      onClick={onEnter}
      aria-label="Enter Razieh Dorrazaei's portfolio"
    >
      <AmbientBackground />

      <span className="intro-identity" aria-label="Razieh Dorrazaei, Frontend Developer">
        <span className="intro-name" aria-hidden="true">
          Razieh Dorrazaei
        </span>
        <span className="intro-role" aria-hidden="true">
          Frontend Developer
        </span>
      </span>

      <span className="intro-screen__action button button--primary">
        Enter Portfolio
        <small>Click anywhere or press Enter</small>
      </span>
    </button>
  );
}
