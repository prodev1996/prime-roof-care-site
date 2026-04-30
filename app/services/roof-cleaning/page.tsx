export const metadata = {
  title: "Roof Cleaning | Prime Roof Care",
  description:
    "Professional roof cleaning across Adelaide, Melbourne and Tasmania. Moss, lichen, salt and grime removal with careful surface preparation.",
};

const faq = [
  {
    q: "Will high pressure damage tiles?",
    a: "We match pressure, tip and approach to the roof material and avoid forcing water beneath overlaps.",
  },
  {
    q: "Do you protect solar and gutters?",
    a: "Yes. We work carefully around solar, gutters, windows, paths and gardens, then rinse affected areas.",
  },
  {
    q: "Why clean before coating?",
    a: "Proper cleaning removes lichen, chalking and grime so primers and topcoats bond more reliably.",
  },
];

export default function RoofCleaningPage() {
  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="section-soft-surface border-b border-slate-200 py-14">
        <div className="container-default max-w-5xl">
          <p className="badge-soft">Surface prep done properly</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Roof cleaning for tile and metal roofs.
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            High-pressure cleaning removes moss, lichen, salt and grime,
            improving street appeal and preparing the roof for repairs, sealing
            or coating.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a href="/quote" className="btn-solid-lg">
              Book roof cleaning
            </a>
            <a href="tel:0469097690" className="btn-secondary">
              Call 0469 097 690
            </a>
          </div>
        </div>
      </div>

      <div className="container-default grid max-w-5xl gap-10 py-14 lg:grid-cols-2">
        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">What we do</h2>
          <ul className="mt-4 list-inside list-disc space-y-3 text-sm text-slate-700">
            <li>Profile-appropriate pressure washing</li>
            <li>Targeted moss, lichen and edge/detail cleaning</li>
            <li>Gutter checks and site rinse-down</li>
            <li>Photos available on request</li>
          </ul>
        </div>

        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Good to know</h2>
          <ul className="mt-4 list-inside list-disc space-y-3 text-sm text-slate-700">
            <li>Careful approach for tile and metal profiles</li>
            <li>Useful before restoration, sealing or repainting</li>
            <li>Operating in Adelaide, Melbourne and Tasmania</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white py-14">
        <div className="container-default max-w-5xl">
          <h3 className="text-xl font-semibold">Roof cleaning FAQs</h3>
          <dl className="mt-6 space-y-6">
            {faq.map((item) => (
              <div key={item.q} className="surface-halo p-5">
                <dt className="font-medium">{item.q}</dt>
                <dd className="mt-2 text-sm text-slate-600">{item.a}</dd>
              </div>
            ))}
          </dl>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faq.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: { "@type": "Answer", text: item.a },
                })),
              }),
            }}
          />
        </div>
      </div>
    </section>
  );
}
