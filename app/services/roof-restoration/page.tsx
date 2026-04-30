export const metadata = {
  title: "Roof Restoration | Prime Roof Care",
  description:
    "Roof restorations across Adelaide, Melbourne and Tasmania. Repairs, repointing, cleaning, sealing and roof coatings.",
};

const steps = [
  "Inspect and explain the roof condition with clear scope",
  "Repair cracked tiles, loose ridge caps and sealant failures",
  "Rebed or repoint ridge caps where needed",
  "High-pressure clean and prepare the surface",
  "Apply primer or sealer matched to the roof material",
  "Finish with durable topcoats for a consistent result",
];

export default function RoofRestorationPage() {
  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="section-soft-surface border-b border-slate-200 py-14">
        <div className="container-default max-w-5xl">
          <p className="badge-soft">Repair first, finish second</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Roof restoration with the important prep included.
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            A proper restoration starts with defects, not paint. We identify the
            issues, prepare the roof and finish with sealing or coating where it
            makes sense.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a href="/quote" className="btn-solid-lg">
              Request inspection
            </a>
            <a href="tel:0469097690" className="btn-secondary">
              Call 0469 097 690
            </a>
          </div>
        </div>
      </div>

      <div className="container-default grid max-w-5xl gap-10 py-14 lg:grid-cols-2">
        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Our restoration process</h2>
          <ul className="mt-4 list-inside list-disc space-y-3 text-sm text-slate-700">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Why homeowners choose us</h2>
          <ul className="mt-4 list-inside list-disc space-y-3 text-sm text-slate-700">
            <li>Itemised scope so you know what is included</li>
            <li>Respectful on-site work and clean finishes</li>
            <li>Repair-only or full restoration options where suitable</li>
            <li>Operating in Adelaide, Melbourne and Tasmania</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white py-16">
        <div className="container-default max-w-3xl text-center">
          <h4 className="text-2xl font-extrabold">Thinking about restoring?</h4>
          <p className="mt-2 text-slate-600">
            We can inspect, photograph and quote practical options for your roof.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/quote" className="btn-solid-lg">
              Book inspection
            </a>
            <a href="tel:0469097690" className="btn-secondary">
              Call 0469 097 690
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
