import { useEffect, useRef } from "react";

/**
 * A colorful trail that follows the cursor and throws curling wisps of
 * color off in the direction of travel — a soft "dye" spine tracing the
 * path, with pairs of small particles peeling off it and spiraling into
 * symmetric vortex curls (rotating their own velocity each frame, like a
 * simplified fluid-dye simulation) before fading out. Rendered through a
 * low-res blurred buffer so everything stays smooth rather than jagged,
 * with normal (non-additive) blending so colors never blow out to a
 * harsh white-hot glare.
 */

type TrailPoint = {
  x: number;
  y: number;
  t: number;
  speed: number;
};

type Wisp = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  born: number;
  curl: number; // radians/sec; sign sets spiral direction (left vs right horn)
  hue: number;
};

const LIFETIME_MS = 900;
const WISP_LIFETIME_MS = 1900;
const MIN_POINT_DISTANCE = 6;
const IDLE_TIMEOUT_MS = 260;
const WISP_SPAWN_INTERVAL_MS = 45;
// How quickly the drawn position eases toward the real cursor position.
// Lower = calmer, more of a gentle drift than a snap-to-cursor line.
const SMOOTHING = 0.13;
// Low-res offscreen buffer for the aura: drawing soft dabs at a fraction of
// the real resolution and upscaling them keeps everything smoothly diffused
// rather than a ring of hard-edged circles, and is cheap to blur.
const AURA_SCALE = 0.35;
// The curling wisps need to keep their shape (that's what makes the
// spiral "horns" visible), so they get their own higher-res buffer with a
// much lighter blur than the soft aura spine.
const WISP_SCALE = 0.6;
// A full-spectrum rainbow, cycled through as the trail moves.
const STOPS: [number, number, number][] = [
  [46, 232, 143], // green
  [255, 194, 60], // gold
  [255, 61, 122], // pink
  [162, 75, 255], // violet
  [61, 139, 255], // blue
];

function sampleColor(phase: number): [number, number, number] {
  const p = ((phase % 1) + 1) % 1;
  const scaled = p * STOPS.length;
  const i = Math.floor(scaled) % STOPS.length;
  const j = (i + 1) % STOPS.length;
  const f = scaled - Math.floor(scaled);
  const [r1, g1, b1] = STOPS[i];
  const [r2, g2, b2] = STOPS[j];
  return [r1 + (r2 - r1) * f, g1 + (g2 - g1) * f, b1 + (b2 - b1) * f];
}

export default function MouseColorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (typeof window.matchMedia !== "function") return;
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!supportsFinePointer || prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const auraCanvas = document.createElement("canvas");
    const auraCtx = auraCanvas.getContext("2d");
    if (!auraCtx) return;

    const wispCanvas = document.createElement("canvas");
    const wispCtx = wispCanvas.getContext("2d");
    if (!wispCtx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      auraCanvas.width = Math.max(1, Math.round(width * AURA_SCALE));
      auraCanvas.height = Math.max(1, Math.round(height * AURA_SCALE));
      wispCanvas.width = Math.max(1, Math.round(width * WISP_SCALE));
      wispCanvas.height = Math.max(1, Math.round(height * WISP_SCALE));
    };
    resize();
    window.addEventListener("resize", resize);

    const points: TrailPoint[] = [];
    const wisps: Wisp[] = [];

    let rawX = 0;
    let rawY = 0;
    let smoothX = 0;
    let smoothY = 0;
    let hasMoved = false;
    let lastMoveTime = 0;
    let lastWispSpawn = 0;
    let lastFrameTime = performance.now();

    let lastPointX = 0;
    let lastPointY = 0;
    let lastPointT = 0;
    let hasLastPoint = false;

    let raf = 0;
    let running = false;

    const spawnWisps = (x: number, y: number, angle: number, speed: number, t: number) => {
      // One pair per spawn: a left-curling and a right-curling particle,
      // thrown outward from the direction of travel — this is what forms
      // the symmetric spiral "horns" once they slow and roll up.
      for (const sign of [-1, 1]) {
        const spread = (Math.random() - 0.5) * 0.5;
        const throwAngle = angle + sign * (0.9 + Math.random() * 0.4) + spread;
        const mag = 0.1 + Math.min(speed, 2.5) * 0.17;
        wisps.push({
          x,
          y,
          vx: Math.cos(throwAngle) * mag,
          vy: Math.sin(throwAngle) * mag,
          born: t,
          curl: sign * (2.3 + Math.random() * 1.1),
          hue: t / 2600 + sign * 0.045,
        });
      }
    };

    const recordPoint = (x: number, y: number, t: number) => {
      if (hasLastPoint) {
        const dx = x - lastPointX;
        const dy = y - lastPointY;
        const dist = Math.hypot(dx, dy);
        if (dist < MIN_POINT_DISTANCE) return;
        const dt = Math.max(t - lastPointT, 1);
        const speed = Math.min(dist / dt, 3.5); // px per ms, clamped
        points.push({ x, y, t, speed });

        if (t - lastWispSpawn > WISP_SPAWN_INTERVAL_MS && speed > 0.03) {
          spawnWisps(x, y, Math.atan2(dy, dx), speed, t);
          lastWispSpawn = t;
        }
      } else {
        points.push({ x, y, t, speed: 0 });
      }
      lastPointX = x;
      lastPointY = y;
      lastPointT = t;
      hasLastPoint = true;
    };

    const handlePointerMove = (event: PointerEvent) => {
      rawX = event.clientX;
      rawY = event.clientY;
      lastMoveTime = performance.now();

      if (!hasMoved) {
        hasMoved = true;
        smoothX = rawX;
        smoothY = rawY;
      }

      if (!running) {
        running = true;
        lastFrameTime = performance.now();
        raf = window.requestAnimationFrame(draw);
      }
    };

    const draw = () => {
      const now = performance.now();
      const frameDt = Math.min(now - lastFrameTime, 48);
      lastFrameTime = now;

      if (hasMoved) {
        smoothX += (rawX - smoothX) * SMOOTHING;
        smoothY += (rawY - smoothY) * SMOOTHING;
        recordPoint(smoothX, smoothY, now);
      }

      while (points.length && now - points[0].t > LIFETIME_MS) {
        points.shift();
      }
      for (let i = wisps.length - 1; i >= 0; i--) {
        if (now - wisps[i].born > WISP_LIFETIME_MS) wisps.splice(i, 1);
      }

      // Integrate curl motion: rotating each wisp's own velocity vector
      // every frame (rather than pulling it toward a target) is what
      // makes it spiral into a tightening curl instead of just arcing.
      const dtSec = frameDt / 1000;
      for (const w of wisps) {
        const c = Math.cos(w.curl * dtSec);
        const s = Math.sin(w.curl * dtSec);
        const nvx = w.vx * c - w.vy * s;
        const nvy = w.vx * s + w.vy * c;
        w.vx = nvx * 0.978;
        w.vy = nvy * 0.978;
        w.x += w.vx * frameDt;
        w.y += w.vy * frameDt;
      }

      ctx.clearRect(0, 0, width, height);

      if (points.length) {
        // A soft, low-contrast aura spine along the path. Normal (not
        // additive) blending keeps overlapping dabs from adding up into a
        // harsh, blown-out white-hot core.
        auraCtx.clearRect(0, 0, auraCanvas.width, auraCanvas.height);

        for (const point of points) {
          const age = now - point.t;
          const life = 1 - age / LIFETIME_MS;
          if (life <= 0) continue;

          const grow = age / LIFETIME_MS;
          const radius = (16 + grow * 70 + point.speed * 5) * AURA_SCALE;
          const intensity = Math.min(0.45 + point.speed * 0.2, 0.7) * Math.pow(life, 1.4);
          const [r, g, b] = sampleColor(point.t / 2600);

          auraCtx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.22 * intensity})`;
          auraCtx.beginPath();
          auraCtx.arc(point.x * AURA_SCALE, point.y * AURA_SCALE, radius, 0, Math.PI * 2);
          auraCtx.fill();
        }

        ctx.save();
        ctx.filter = "blur(18px)";
        ctx.drawImage(auraCanvas, 0, 0, auraCanvas.width, auraCanvas.height, 0, 0, width, height);
        ctx.restore();
      }

      if (wisps.length) {
        // The curling wisps get a much lighter touch than the aura spine —
        // too much blur here would melt the spiral shape into a formless
        // blob, which is exactly what we don't want.
        wispCtx.clearRect(0, 0, wispCanvas.width, wispCanvas.height);

        for (const w of wisps) {
          const age = now - w.born;
          const life = 1 - age / WISP_LIFETIME_MS;
          if (life <= 0) continue;

          const radius = (7 + (1 - life) * 22) * WISP_SCALE;
          const alpha = Math.pow(life, 1.1) * 0.55;
          const [r, g, b] = sampleColor(w.hue);

          wispCtx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          wispCtx.beginPath();
          wispCtx.arc(w.x * WISP_SCALE, w.y * WISP_SCALE, radius, 0, Math.PI * 2);
          wispCtx.fill();
        }

        ctx.save();
        ctx.filter = "blur(4px)";
        ctx.drawImage(wispCanvas, 0, 0, wispCanvas.width, wispCanvas.height, 0, 0, width, height);
        ctx.restore();
      }

      const settled = !hasMoved || Math.hypot(rawX - smoothX, rawY - smoothY) < 0.4;
      const idle = now - lastMoveTime > IDLE_TIMEOUT_MS;

      if (points.length || wisps.length || (!idle && !settled)) {
        raf = window.requestAnimationFrame(draw);
      } else {
        running = false;
      }
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="mouse-color-trail" aria-hidden="true" />;
}
