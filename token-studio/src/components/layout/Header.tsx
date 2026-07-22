export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Razieh.dev home">
        RAZIEH.DEV
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#connect">Contact</a>
      </nav>
    </header>
  );
}
