export default function AboutPage() {
  return (
    <section className="bg-slate-50 text-slate-900 py-16">
      <div className="container-default max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <div className="badge-soft">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Local • Aldinga Beach SA
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mt-5 leading-[1.15]">
            A new company backed by years of real roofing work.
          </h1>

          <p className="text-slate-600 text-base leading-relaxed mt-5">
            Prime Roof Care exists because people are sick of no-shows, messy
            cleanups and “mate it’s all stuffed, needs a full restoration for
            six grand” sales talk. That’s not us.
          </p>

          <p className="text-slate-600 text-base leading-relaxed mt-4">
            Between us, we’ve got 20+ years combined experience on SA roofs —
            gutter clears, high-pressure roof cleaning, ridge cap repointing,
            leak tracing, full restorations, repainting. We’ve seen every
            shortcut and we know why it fails in Adelaide weather.
          </p>

          <p className="text-slate-600 text-base leading-relaxed mt-4">
            We’re based in Aldinga Beach and we work across Adelaide and
            surrounding suburbs. Licensed. Insured. We turn up, explain what’s
            actually wrong, fix it properly and leave things tidy.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/quote" className="btn-primary">
              Get a fast quote
            </a>
            <a href="tel:0469097690" className="btn-secondary">
              Call 0469 097 690
            </a>
          </div>

          <p className="text-slate-500 text-xs mt-4">
            No pressure, no drama — just honest work.
          </p>
        </div>

        <div className="card-surface p-6 sm:p-8 flex flex-col justify-center">
          <div className="text-slate-900 font-semibold text-lg">
            Why homeowners choose Prime Roof Care
          </div>
          <ul className="mt-4 text-slate-600 text-sm leading-relaxed space-y-4">
            <li>
              <span className="text-slate-900 font-medium">
                Respectful & tidy:
              </span>{" "}
              we protect driveways, solar, gutters, paintwork.
            </li>
            <li>
              <span className="text-slate-900 font-medium">
                Straight answers:
              </span>{" "}
              you see the problem, not just “trust us it’s bad”.
            </li>
            <li>
              <span className="text-slate-900 font-medium">
                Root-cause fixes:
              </span>{" "}
              we actually solve the leak/blockage, not hide it.
            </li>
            <li>
              <span className="text-slate-900 font-medium">
                Local accountability:
              </span>{" "}
              we’re South Australian. You can call us, not a call centre.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
