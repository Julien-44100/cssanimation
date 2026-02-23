import "./styles.css";

const features = [
  { title: "Pure CSS Motion", desc: "No animation libraries. Just modern CSS and clean timing." },
  { title: "Glass & Glow UI", desc: "Shimmer borders, soft glow, and depth without heavy assets." },
  { title: "Responsive by Design", desc: "Looks sharp from mobile to ultra-wide." },
  { title: "Performance Friendly", desc: "GPU-accelerated transforms, minimal layout thrash." },
];

const steps = [
  { n: "01", t: "Install", d: "Drop it into your project in minutes." },
  { n: "02", t: "Customize", d: "Swap colors, copy, sections, and components." },
  { n: "03", t: "Ship", d: "Deploy as a marketing site or product landing." },
];

const pricing = [
  { name: "Starter", price: "€0", perks: ["1 page layout", "Core animations", "Basic sections"] },
  { name: "Pro", price: "€19", perks: ["All sections", "Extra components", "Best for SaaS"] , hot: true},
  { name: "Studio", price: "€49", perks: ["Design system", "Custom themes", "Advanced motion"] },
];

export default function App() {
  return (
    <div className="app">
      <div className="noise" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top">
          <span className="brandDot" />
          <span>Wirely Motion</span>
        </a>

        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#how">How</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="navCtas">
          <button className="btn ghost">Sign in</button>
          <button className="btn primary magnetic">
            <span className="btnInner">Start free</span>
          </button>
        </div>
      </header>

      <div className="scrollProgress" />

      <main id="top">
        <section className="hero">
          <div className="heroBg" aria-hidden="true">
            <div className="orb o1" />
            <div className="orb o2" />
            <div className="orb o3" />
            <div className="grid" />
          </div>

          <div className="heroInner">
            <div className="chip">
              <span className="chipPulse" />
              Front-end only • React • CSS animations
            </div>

            <h1 className="title">
              Build a <span className="gradText">premium animated</span> landing page
              <span className="titleUnderline" />
            </h1>

            <p className="subtitle">
              A clean, modern React UI crafted for motion. No dependencies. Just components + CSS
              that looks expensive.
            </p>

            <div className="heroActions">
              <button className="btn primary magnetic">
                <span className="btnInner">Launch demo</span>
              </button>
              <button className="btn ghost magnetic">
                <span className="btnInner">View components</span>
              </button>
            </div>

            <div className="heroStats">
              <div className="stat glass">
                <div className="statTop">
                  <span className="dot" />
                  Lighthouse-friendly
                </div>
                <div className="statBig">Fast</div>
                <div className="statSmall">GPU transforms, minimal JS</div>
              </div>

              <div className="stat glass">
                <div className="statTop">
                  <span className="dot" />
                  CSS-only motion
                </div>
                <div className="statBig">Smooth</div>
                <div className="statSmall">Keyframes + scroll reveal</div>
              </div>

              <div className="stat glass">
                <div className="statTop">
                  <span className="dot" />
                  Responsive system
                </div>
                <div className="statBig">Sharp</div>
                <div className="statSmall">Mobile → ultra-wide</div>
              </div>
            </div>
          </div>

          <div className="ticker" aria-hidden="true">
            <div className="marquee">
              <span>Glow borders</span><span>•</span>
              <span>Shimmer glass</span><span>•</span>
              <span>Magnetic buttons</span><span>•</span>
              <span>Scroll progress</span><span>•</span>
              <span>Pure CSS motion</span><span>•</span>
              <span>Gradient orbs</span><span>•</span>
              <span>Reveal animations</span><span>•</span>
              <span>Premium UI</span><span>•</span>
            </div>
            <div className="marquee clone">
              <span>Glow borders</span><span>•</span>
              <span>Shimmer glass</span><span>•</span>
              <span>Magnetic buttons</span><span>•</span>
              <span>Scroll progress</span><span>•</span>
              <span>Pure CSS motion</span><span>•</span>
              <span>Gradient orbs</span><span>•</span>
              <span>Reveal animations</span><span>•</span>
              <span>Premium UI</span><span>•</span>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="sectionHead reveal">
            <h2>Features that look like a paid template</h2>
            <p>Reusable components with subtle motion that makes the UI feel alive.</p>
          </div>

          <div className="cards">
            {features.map((f, i) => (
              <article key={f.title} className={`card glass reveal delay${i}`}>
                <div className="cardBorder" aria-hidden="true" />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <div className="cardMeta">
                  <span className="pill">CSS</span>
                  <span className="pill">React</span>
                  <span className="pill">UI</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="section alt">
          <div className="split">
            <div className="left reveal">
              <h2>How it works</h2>
              <p>
                You get a strong foundation: hero, feature grid, steps, pricing, and footer.
                Keep it, remix it, or extract the components into your design system.
              </p>

              <div className="steps">
                {steps.map((s, i) => (
                  <div key={s.n} className={`step glass reveal delay${i}`}>
                    <div className="stepN">{s.n}</div>
                    <div>
                      <div className="stepT">{s.t}</div>
                      <div className="stepD">{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="right reveal delay1">
              <div className="mock glass">
                <div className="mockTop">
                  <div className="winDots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mockTitle">components / motion.css</div>
                  <div className="mockTag">ready</div>
                </div>

                <div className="code">
                  <div className="line"><span className="k">.card</span> {"{"}</div>
                  <div className="line ind">backdrop-filter: blur(14px);</div>
                  <div className="line ind">transform: translateY(0);</div>
                  <div className="line ind">transition: transform 240ms ease;</div>
                  <div className="line">{"}"}</div>
                  <div className="line blank" />
                  <div className="line"><span className="k">.card:hover</span> {"{"}</div>
                  <div className="line ind">transform: translateY(-6px);</div>
                  <div className="line ind">box-shadow: 0 20px 60px rgba(0,0,0,.35);</div>
                  <div className="line">{"}"}</div>
                </div>

                <div className="spark" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="sectionHead reveal">
            <h2>Pricing</h2>
            <p>Use this layout for your SaaS, portfolio, or product showcase.</p>
          </div>

          <div className="pricing">
            {pricing.map((p, i) => (
              <div
                key={p.name}
                className={`priceCard glass reveal delay${i} ${p.hot ? "hot" : ""}`}
              >
                <div className="cardBorder" aria-hidden="true" />
                {p.hot && <div className="badge">Most popular</div>}
                <div className="priceTop">
                  <div className="priceName">{p.name}</div>
                  <div className="priceValue">{p.price}<span className="per">/mo</span></div>
                </div>
                <ul className="perks">
                  {p.perks.map((x) => (
                    <li key={x}>
                      <span className="check" aria-hidden="true">✓</span>
                      {x}
                    </li>
                  ))}
                </ul>
                <button className={`btn ${p.hot ? "primary" : "ghost"} magnetic`}>
                  <span className="btnInner">Choose {p.name}</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="footerInner">
            <div className="footerLeft">
              <div className="brand">
                <span className="brandDot" />
                <span>Wirely Motion</span>
              </div>
              <p className="muted">
                Front-end demo. Replace copy, connect to your backend later.
              </p>
            </div>

            <div className="footerCols">
              <div>
                <div className="footerH">Product</div>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#how">How it works</a>
              </div>
              <div>
                <div className="footerH">Company</div>
                <a href="#top">About</a>
                <a href="#top">Careers</a>
                <a href="#top">Contact</a>
              </div>
              <div>
                <div className="footerH">Legal</div>
                <a href="#top">Privacy</a>
                <a href="#top">Terms</a>
                <a href="#top">Cookies</a>
              </div>
            </div>
          </div>

          <div className="footerBottom">
            <span className="muted">© {new Date().getFullYear()} Wirely Motion. All rights reserved.</span>
            <span className="muted">Made with React + CSS</span>
          </div>
        </footer>
      </main>
    </div>
  );
}