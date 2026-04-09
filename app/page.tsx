"use client";

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.98 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={filled ? "0" : "2"} aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}

const services = [
  {
    title: "Clean Out Installation",
    desc: "Professional installation of plumbing clean outs for easy drain access and future maintenance. Quick, efficient, done right.",
  },
  {
    title: "Drain Clearing",
    desc: "Blocked or slow drains throughout the home. Jesus gets to the source — no temporary fixes, no repeat calls.",
  },
  {
    title: "Pipe Repair",
    desc: "Leaking or damaged pipes identified and repaired. Thorough work the first time so you don't need a second visit.",
  },
  {
    title: "General Plumbing",
    desc: "Full-range residential service: fixtures, water lines, general maintenance. Available 7 days a week, 7am to 7pm.",
  },
];

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text-primary)", minHeight: "100dvh" }}>

      {/* Nav */}
      <nav
        style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
        className="sticky top-0 z-50 px-6 py-3.5 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div>
            <div
              className="font-bold text-base leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              JV Plumbing
            </div>
            <div className="text-xs" style={{ color: "var(--text-muted)" }}>Licensed · Sacramento, CA · Since 2017</div>
          </div>
        </div>
        <a
          href="tel:9165918748"
          className="flex items-center gap-2 font-semibold px-4 py-2 rounded text-sm active:scale-97"
          style={{
            background: "var(--accent)",
            color: "white",
            transition: "background 160ms ease-out, transform 160ms ease-out",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
          aria-label="Call JV Plumbing at (916) 591-8748"
        >
          <PhoneIcon />
          (916) 591-8748
        </a>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Rating badge */}
          <div
            className="animate-fade-in inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-10"
            style={{ background: "var(--accent-light)", color: "var(--accent)" }}
          >
            <span className="flex" style={{ color: "var(--accent)" }}>
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </span>
            Perfect 5.0 on Google
          </div>

          <h1
            className="animate-fade-up delay-1 text-5xl md:text-7xl font-bold leading-none mb-6"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Sacramento plumbing<br />
            <span style={{ color: "var(--accent)" }}>done right.</span>
          </h1>

          <div className="grid md:grid-cols-[1fr_320px] gap-12 items-start mt-12">
            <div>
              <p
                className="animate-fade-up delay-2 text-lg leading-relaxed mb-8 max-w-lg"
                style={{ color: "var(--text-secondary)" }}
              >
                Jesus Hernandez has run JV Plumbing since 2017 with a simple standard: fair price,
                show up on time, do the job right. Nine years and a perfect rating later — it still works.
              </p>
              <div className="animate-fade-up delay-3 flex flex-wrap gap-3">
                <a
                  href="tel:9165918748"
                  className="flex items-center gap-2 font-semibold px-6 py-3.5 rounded text-base text-white active:scale-97"
                  style={{
                    background: "var(--accent)",
                    transition: "background 160ms ease-out, transform 160ms ease-out",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
                >
                  <PhoneIcon />
                  Call (916) 591-8748
                </a>
                <a
                  href="#services"
                  className="font-medium px-6 py-3.5 rounded text-base active:scale-97"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                    transition: "border-color 160ms ease-out, color 160ms ease-out, transform 160ms ease-out",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  Services
                </a>
              </div>
            </div>

            {/* Stats panel */}
            <div
              className="animate-fade-up delay-2 rounded-2xl p-6 space-y-5"
              style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              {[
                { value: "5.0", label: "Google rating" },
                { value: "2017", label: "Year founded" },
                { value: "CA", label: "Licensed plumber" },
                { value: "7×7", label: "Days × hours (7am–7pm)" },
              ].map(({ value, label }) => (
                <div key={label} className="flex items-baseline justify-between">
                  <span
                    className="text-3xl font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
                  >
                    {value}
                  </span>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* License callout */}
      <div style={{ background: "var(--accent-light)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
            <div className="flex items-center gap-2 font-semibold" style={{ color: "var(--accent)" }}>
              <ShieldIcon />
              California Licensed Plumber
            </div>
            <span style={{ color: "var(--text-muted)" }}>BuildZoom Score: 92</span>
            <span style={{ color: "var(--text-muted)" }}>Active license since 2017</span>
            <span style={{ color: "var(--text-muted)" }}>Alternate line: (916) 287-6942</span>
          </div>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Services.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`rounded-xl p-6 animate-fade-up delay-${i + 1}`}
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }}>
                    <CheckCircleIcon />
                  </div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                </div>
                <p className="text-sm leading-relaxed pl-7" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}
        className="px-6 py-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Every review. 5 stars.
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              Not a single review below 5 stars in JV Plumbing&apos;s history on Google.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "I needed a new clean out installed and was impressed by how quickly JV Plumbing completed the job with full professionalism. Jesus got it done right and fast.",
                credit: "Sacramento customer",
              },
              {
                quote: "Fair pricing, responsible, and very professional and on time — exactly what you want from a plumber. JV Plumbing is who to call in Sacramento.",
                credit: "Sacramento homeowner",
              },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-7" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
                <div className="flex mb-4" style={{ color: "var(--accent)" }}>
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-secondary)", fontStyle: "italic" }}
                >
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>— {r.credit} · Google</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Jesus */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Meet Jesus Hernandez.
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Jesus Valentin Hernandez Mendoza founded JV Plumbing in 2017 because he believed
              Sacramento homeowners deserved a plumber who showed up when they said they would —
              and charged a price that made sense.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Nine years later, that philosophy hasn&apos;t changed. California-licensed with a BuildZoom
              score of 92, Jesus is accountable to state standards and to every customer he serves.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              Two contact numbers so you always get through: (916) 591-8748 and (916) 287-6942.
              Available Monday through Sunday, 7am to 7pm.
            </p>
            <a
              href="tel:9165918748"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded text-base text-white active:scale-97"
              style={{
                background: "var(--accent)",
                transition: "background 160ms ease-out, transform 160ms ease-out",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
            >
              <PhoneIcon />
              Call (916) 591-8748
            </a>
          </div>
          <div
            className="rounded-2xl p-8 h-fit"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
          >
            <h3 className="font-bold text-lg mb-6" style={{ fontFamily: "var(--font-display)" }}>Contact</h3>
            <div className="space-y-4 text-sm">
              {[
                { label: "Primary phone", value: "(916) 591-8748" },
                { label: "Alternate phone", value: "(916) 287-6942" },
                { label: "Location", value: "Sacramento, CA 95838" },
                { label: "Hours", value: "Mon – Sun, 7:00am – 7:00pm" },
                { label: "Founded", value: "2017" },
                { label: "License", value: "California Licensed Plumber" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between gap-4">
                  <span style={{ color: "var(--text-muted)" }}>{label}</span>
                  <span className="font-medium text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--accent)" }} className="px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Fair prices. On time. 5 stars.
            </h2>
            <p className="text-white/80 text-lg">Call Jesus today — Sacramento&apos;s most trusted licensed plumber.</p>
          </div>
          <a
            href="tel:9165918748"
            className="shrink-0 inline-flex items-center gap-2 font-bold text-lg px-8 py-4 rounded-lg active:scale-97"
            style={{
              background: "white",
              color: "var(--accent)",
              transition: "opacity 160ms ease-out, transform 160ms ease-out",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <PhoneIcon />
            (916) 591-8748
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
        className="px-6 py-10"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm">
          <div>
            <div className="font-bold mb-1" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>JV Plumbing</div>
            <div>949 North Ave Unit 4, Sacramento, CA 95838</div>
            <a href="tel:9165918748" className="mt-1 block" style={{ color: "var(--accent)" }}>(916) 591-8748</a>
          </div>
          <div className="text-xs self-end">&copy; 2026 JV Plumbing. Licensed since 2017.</div>
        </div>
      </footer>
    </main>
  );
}
