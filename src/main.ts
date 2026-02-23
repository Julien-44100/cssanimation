import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) throw new Error("Missing #app container");

app.innerHTML = `
  <main class="stage" aria-label="Animated hero">
    <div class="bg">
      <div class="aurora" aria-hidden="true"></div>
      <div class="grid" aria-hidden="true"></div>
      <div class="noise" aria-hidden="true"></div>
      <div class="vignette" aria-hidden="true"></div>

      <div class="orbs" aria-hidden="true">
        <span class="orb o1"></span>
        <span class="orb o2"></span>
        <span class="orb o3"></span>
      </div>

      <div class="sparkles" aria-hidden="true">
        ${Array.from({ length: 48 })
          .map(
            (_, i) =>
              `<i class="s" style="--i:${i};--x:${Math.random()
                .toFixed(4)};--y:${Math.random().toFixed(4)};--d:${(
                0.6 + Math.random() * 2.2
              ).toFixed(3)}s;--sz:${(1 + Math.random() * 2.5).toFixed(
                2
              )}px"></i>`
          )
          .join("")}
      </div>
    </div>

    <section class="content">
      <p class="kicker">
        <span class="dot"></span>
        Vite + TypeScript • Pure CSS
      </p>

      <h1 class="title">
        <span class="shine">Hyperflow</span>
        <span class="sub">CSS Animation Showcase</span>
      </h1>

      <p class="lead">
        A layered aurora, animated grid, floating orbs, sparkle field, and a glass UI —
        all with pure CSS keyframes.
      </p>

      <div class="cta-row">
        <button class="btn primary" id="btnPulse">
          Trigger Pulse
          <span class="btn-glow" aria-hidden="true"></span>
        </button>

        <a class="btn ghost" href="https://github.com/Julien-44100/cssanimation" target="_blank" rel="noreferrer">
          View Repo
        </a>
      </div>

      <div class="cards">
        <article class="card">
          <div class="badge">01</div>
          <h3>Blend & Blur</h3>
          <p>Conic + radial gradients, blur, and blend-modes for depth.</p>
        </article>
        <article class="card">
          <div class="badge">02</div>
          <h3>Parallax Feel</h3>
          <p>Independent animation timings create a fake 3D sensation.</p>
        </article>
        <article class="card">
          <div class="badge">03</div>
          <h3>Responsive</h3>
          <p>Scales cleanly from mobile to ultra-wide.</p>
        </article>
      </div>
    </section>
  </main>
`;

const btn = document.querySelector<HTMLButtonElement>("#btnPulse");
btn?.addEventListener("click", () => {
  document.documentElement.classList.remove("pulse");
  // force reflow
  void document.documentElement.offsetWidth;
  document.documentElement.classList.add("pulse");