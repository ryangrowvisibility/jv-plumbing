export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <nav className="bg-slate-800 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white font-black text-base">
            JV
          </div>
          <div>
            <div className="font-bold text-sm leading-tight">JV Plumbing</div>
            <div className="text-amber-400 text-xs">Sacramento, CA — Since 2017</div>
          </div>
        </div>
        <a
          href="tel:9165918748"
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors"
        >
          (916) 591-8748
        </a>
      </nav>

      {/* Hero */}
      <section className="bg-slate-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-6">
            5-STAR RATED — LICENSED — SINCE 2017
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Sacramento Plumbing{" "}
            <span className="text-amber-400">Done Right.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            JV Plumbing — fair prices, on time, every time. Jesus Hernandez and his team have served
            Sacramento with professional, 5-star plumbing since 2017. Licensed and trusted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9165918748"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Call (916) 591-8748
            </a>
            <a
              href="#services"
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-amber-500 text-white py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-6 justify-center items-center text-sm font-bold">
          <div>5-Star Google Rating</div>
          <div className="hidden sm:block w-px h-4 bg-amber-300" />
          <div>CA Licensed Plumber</div>
          <div className="hidden sm:block w-px h-4 bg-amber-300" />
          <div>Serving Sacramento Since 2017</div>
          <div className="hidden sm:block w-px h-4 bg-amber-300" />
          <div>Mon to Sun: 7am to 7pm</div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-4xl font-black text-amber-500">5.0</div>
            <div className="text-slate-600 text-sm mt-1">Google Stars</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-4xl font-black text-amber-500">9+</div>
            <div className="text-slate-600 text-sm mt-1">Years in Business</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-4xl font-black text-amber-500">CA</div>
            <div className="text-slate-600 text-sm mt-1">Licensed Plumber</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-4xl font-black text-amber-500">Fair</div>
            <div className="text-slate-600 text-sm mt-1">Transparent Pricing</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Plumbing Services in <span className="text-amber-500">Sacramento</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Residential plumbing — done right, on time, at fair prices
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Clean Out Installation",
                desc: "Professional installation of plumbing clean outs for easy drain access and maintenance. Work completed quickly and efficiently — Jesus gets the job done right.",
              },
              {
                title: "Drain Clearing",
                desc: "Clearing of blocked and slow drains throughout your home. Fast, no-fuss service that gets your plumbing flowing again.",
              },
              {
                title: "Pipe Repair",
                desc: "Repair of leaking or damaged pipes. JV Plumbing identifies the source fast and fixes it properly — no shortcuts.",
              },
              {
                title: "General Plumbing",
                desc: "Full range of residential plumbing services including fixtures, water lines, and general maintenance. 7 days a week availability.",
              },
            ].map((s) => (
              <div key={s.title} className="p-6 bg-slate-50 rounded-xl border-l-4 border-amber-500">
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-6 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-2">Perfect 5-Star Reviews</h2>
            <div className="text-amber-400">Every Google review is 5 stars</div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-700 rounded-xl p-6">
              <div className="text-amber-400 text-xl font-bold mb-3">5 Stars</div>
              <p className="text-slate-300 leading-relaxed italic text-sm">
                &ldquo;I needed a new clean out installed and was impressed by how quickly JV Plumbing
                completed the job with full professionalism. Jesus got it done right and fast.&rdquo;
              </p>
              <div className="mt-4 text-slate-400 text-xs">— Sacramento customer</div>
            </div>
            <div className="bg-slate-700 rounded-xl p-6">
              <div className="text-amber-400 text-xl font-bold mb-3">5 Stars</div>
              <p className="text-slate-300 leading-relaxed italic text-sm">
                &ldquo;Fair pricing, responsible, and very professional and on time — exactly what you want
                from a plumber. JV Plumbing is the one to call in Sacramento.&rdquo;
              </p>
              <div className="mt-4 text-slate-400 text-xs">— Sacramento homeowner</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-4">
                Meet <span className="text-amber-500">Jesus Hernandez</span> — Your Sacramento Plumber
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Jesus Valentin Hernandez Mendoza founded JV Plumbing in 2017 with a simple promise:
                fair prices, professional work, and always showing up on time. Nine years later,
                the business holds a perfect 5-star rating and a strong reputation in Sacramento.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Jesus is a California-licensed plumber (BuildZoom score 92) — meaning your work is
                done by someone accountable to state standards, not just anyone with a wrench.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Available Monday through Sunday, 7am to 7pm. Two phone numbers for your convenience:
                (916) 591-8748 or (916) 287-6942.
              </p>
              <a
                href="tel:9165918748"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Call (916) 591-8748
              </a>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 text-white">
              <h3 className="font-bold text-lg mb-4 text-amber-400">Contact</h3>
              <div className="space-y-3 text-slate-300 text-sm">
                <div>Primary: (916) 591-8748</div>
                <div>Alternate: (916) 287-6942</div>
                <div>Sacramento, CA</div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <h3 className="font-bold text-lg mb-3 text-amber-400">Hours</h3>
                <div className="space-y-1 text-slate-300 text-sm">
                  <div>Monday to Sunday</div>
                  <div>7:00am to 7:00pm</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <h3 className="font-bold text-lg mb-3 text-amber-400">License</h3>
                <div className="text-slate-300 text-sm">California Licensed Plumber</div>
                <div className="text-slate-400 text-xs mt-1">BuildZoom Score: 92 — Active since 2017</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Fair Prices. On Time. 5 Stars.
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            JV Plumbing has served Sacramento since 2017. Call Jesus today for professional
            plumbing at a price that makes sense.
          </p>
          <a
            href="tel:9165918748"
            className="inline-block bg-white text-amber-600 font-black text-xl px-10 py-5 rounded-xl hover:bg-amber-50 transition-colors"
          >
            (916) 591-8748
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center text-sm">
        <div className="max-w-4xl mx-auto">
          <div className="font-bold text-white text-lg mb-1">JV Plumbing</div>
          <div>949 North Ave Unit 4, Sacramento, CA 95838</div>
          <div className="mt-2">
            <a href="tel:9165918748" className="text-amber-400 hover:text-amber-300">
              (916) 591-8748
            </a>
          </div>
          <div className="mt-4 text-xs text-slate-600">
            &copy; 2026 JV Plumbing. Sacramento, CA. Licensed since 2017.
          </div>
        </div>
      </footer>
    </main>
  );
}
