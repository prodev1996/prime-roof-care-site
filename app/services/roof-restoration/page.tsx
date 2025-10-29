export const metadata = {
  title: 'Roof Restoration Adelaide | Prime Roof Care',
  description:
    'Full roof restorations done properly: repairs, repointing, sealing and premium coatings. Clear quotes, no subcontractors.',
};

export default function RoofRestorationPage() {
  const steps = [
    'Inspect & explain: photos and clear scope',
    'Repairs: cracked tiles, loose ridge caps, sealant failures',
    'Rebedding/repointing where needed',
    'High-pressure clean & surface prep',
    'Primer / sealer matched to roof type',
    'UV-stable topcoats for a durable finish',
  ];

  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="section-soft-surface border-b border-slate-200 py-14">
        <div className="container-default max-w-5xl">
          <p className="badge-soft">No scare tactics • Just the facts</p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Roof Restoration <span className="text-emerald-600">Adelaide</span>
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            A proper restoration starts with **repairs** — not paint. We fix the
            causes, prepare the surface, then seal and coat for a lasting result.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a href="/quote" className="btn-solid-lg">Request inspection</a>
            <a href="tel:0469097690" className="btn-secondary">Call 0469 097 690</a>
          </div>
        </div>
      </div>

      <div className="container-default max-w-5xl py-14 grid lg:grid-cols-2 gap-10">
        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Our restoration process</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 list-disc list-inside">
            {steps.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Why homeowners choose us</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 list-disc list-inside">
            <li>Local, insured, family-owned — no subcontractors</li>
            <li>Itemised scope so you know what you’re paying for</li>
            <li>Respectful on-site work & clean finishes</li>
            <li>Aldinga Beach based • Adelaide wide</li>
          </ul>
        </div>
      </div>

      <div className="py-16 bg-white border-t border-slate-200">
        <div className="container-default max-w-3xl text-center">
          <h4 className="text-2xl font-extrabold">Thinking about restoring?</h4>
          <p className="mt-2 text-slate-600">
            We’ll inspect, photograph and quote options — repair only, or full
            restore. Your choice.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote" className="btn-solid-lg">Book inspection</a>
            <a href="tel:0469097690" className="btn-secondary">Call 0469 097 690</a>
          </div>
        </div>
      </div>
    </section>
  );
}
