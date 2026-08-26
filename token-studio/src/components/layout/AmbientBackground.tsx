/**
 * A calm, slow-drifting ambient color layer behind the whole site — three
 * large, heavily blurred, low-opacity blobs in the site's own palette.
 * Static in the sense that it never reacts to the cursor; it just gives
 * the solid black backdrop a soft, elegant bit of color without ever
 * competing with content or feeling intense.
 */
export default function AmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <span className="ambient-blob ambient-blob--a" />
      <span className="ambient-blob ambient-blob--b" />
      <span className="ambient-blob ambient-blob--c" />
    </div>
  );
}
