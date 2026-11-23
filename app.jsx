// app.jsx — SparrowLabs site, rendered through React so tweaks can swap
// language / accent / density without rewriting the markup.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "language": "ko",
  "accent": "oklch(0.55 0.075 55)",
  "density": "regular"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  'oklch(0.55 0.075 55)',  // sparrow brown
  'oklch(0.50 0.04 250)',  // slate
  'oklch(0.50 0.075 145)', // moss
  'oklch(0.55 0.12 25)',   // brick
];

const DENSITY_SCALE = {
  compact: 0.78,
  regular: 1.0,
  comfy:   1.22,
};

function SectionLabel({ num, label }) {
  return (
    <div className="sec-label">
      <span className="num">§ {num}</span>
      <span className="bar" />
      {label}
    </div>
  );
}

function Hero({ t }) {
  return (
    <section className="shell hero" data-screen-label="01 Hero">
      <div className="tagline">{t.hero.tagline}</div>
      <h1>
        {t.hero.titleA}<br />
        {t.hero.titleB} <span className="accent">{t.hero.titleAccent}</span> {t.hero.titleC}
      </h1>
      <p className="lede">{t.hero.lede}</p>
      <div className="meta">
        {t.hero.meta.map((m, i) => (
          <div key={i}>
            {m.k}
            <b>{m.v}</b>
          </div>
        ))}
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section id="about" data-screen-label="02 About">
      <div className="shell sec grid">
        <SectionLabel num="01" label={t.about.section} />
        <div>
          <div className="body-text">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className={i === 1 ? 'muted' : ''}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Products({ t }) {
  return (
    <section id="products" data-screen-label="03 Products">
      <div className="shell sec grid">
        <SectionLabel num="02" label={t.products.section} />
        <div>
          <div className="body-text" style={{ marginBottom: 28 }}>
            <p className="muted">{t.products.intro}</p>
          </div>
          {t.products.items.map((p, i) => (
            <article key={i} className="product">
              <div className="idx"><span className="dot" />{p.idx}</div>
              <div>
                <h3 className="title">{p.title}</h3>
                <div className="role">{p.role}</div>
                <div className="status">{p.status}</div>
                {p.href && (
                  <div style={{ marginTop: 14 }}>
                    <a className="cta" href={p.href}>{p.link}</a>
                  </div>
                )}
              </div>
              <p className="copy">{p.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust({ t }) {
  return (
    <section id="trust" data-screen-label="04 Notes">
      <div className="shell sec grid">
        <SectionLabel num="03" label={t.trust.section} />
        <div>
          <div className="body-text" style={{ marginBottom: 24 }}>
            <p className="muted">{t.trust.intro}</p>
          </div>
          <div className="trust-grid">
            {t.trust.cells.map((c, i) => (
              <div key={i} className="cell">
                <div className="k">{c.k}</div>
                <div className="v tbd">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ t }) {
  return (
    <section id="contact" data-screen-label="05 Contact">
      <div className="shell sec grid">
        <SectionLabel num="04" label={t.contact.section} />
        <div className="contact-block">
          <h2>{t.contact.titleA}<br />{t.contact.titleB}</h2>
          <p>{t.contact.paragraph}</p>
          <div className="contact-rows">
            {t.contact.rows.map((r, i) => (
              <div key={i} className="contact-row">
                <div className="k">{r.k}</div>
                <div className="v">
                  <span className={r.disabled ? 'placeholder' : ''}>{r.v}</span>
                </div>
                <a className="cta" aria-disabled={r.disabled ? 'true' : 'false'} href="#contact">
                  {r.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TopBar({ t, onJump }) {
  const navKeys = ['about', 'products', 'notes', 'contact'];
  const navHref = { about: '#about', products: '#products', notes: '#trust', contact: '#contact' };
  return (
    <header className="shell topbar">
      <a className="brand" href="#top" aria-label={t.brand.ko}>
        <span className="mark" aria-hidden="true" />
        <span className="brand-name">
          {t.brand.ko}<span className="en">{t.brand.en}</span>
        </span>
      </a>
      <nav className="topnav" aria-label="sections">
        {navKeys.map((k) => (
          <a key={k} href={navHref[k]}>{t.nav[k]}</a>
        ))}
      </nav>
    </header>
  );
}

function Footer({ t }) {
  return (
    <footer className="shell">
      <div className="left">
        <span className="dot" aria-hidden="true" />
        <span>{t.footer.left[0]}</span>
        <span>—</span>
        <span>{t.footer.left[1]}</span>
      </div>
      <div>{t.footer.right}</div>
    </footer>
  );
}

// Allow ?lang=ko|en and ?density=… to override defaults when this page is
// embedded in an iframe (mobile-preview.html does this to show KO + EN
// snapshots side-by-side without each iframe sharing tweak state).
function readQueryOverrides() {
  try {
    const qs = new URLSearchParams(window.location.search);
    const out = {};
    if (qs.has('lang')) out.language = qs.get('lang');
    if (qs.has('density')) out.density = qs.get('density');
    if (qs.has('accent')) out.accent = qs.get('accent');
    return out;
  } catch (e) {
    return {};
  }
}

function App() {
  const defaults = { ...TWEAK_DEFAULTS, ...readQueryOverrides() };
  const [tw, setTw] = useTweaks(defaults);
  const t = COPY[tw.language] || COPY.ko;

  // Reflect language on <html> so screen readers + font hinting respond,
  // and let CSS branch on it for any per-language tweaks.
  React.useEffect(() => {
    document.documentElement.lang = t.lang;
  }, [t.lang]);

  const densityScale = DENSITY_SCALE[tw.density] ?? 1;

  const rootStyle = {
    '--accent': tw.accent,
    '--accent-soft': tw.accent.replace(/oklch\(([^)]+)\)/, 'oklch($1 / 0.10)'),
    '--density-scale': densityScale,
  };

  return (
    <div style={rootStyle}>
      <TopBar t={t} />
      <main id="top">
        <Hero t={t} />
        <About t={t} />
        <Products t={t} />
        <Trust t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Language" />
        <TweakRadio
          label="Language"
          value={tw.language}
          options={[
            { value: 'ko', label: '한국어' },
            { value: 'en', label: 'English' },
          ]}
          onChange={(v) => setTw('language', v)}
        />

        <TweakSection label="Accent" />
        <TweakColor
          label="Color"
          value={tw.accent}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTw('accent', v)}
        />

        <TweakSection label="Density" />
        <TweakRadio
          label="Spacing"
          value={tw.density}
          options={['compact', 'regular', 'comfy']}
          onChange={(v) => setTw('density', v)}
        />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
