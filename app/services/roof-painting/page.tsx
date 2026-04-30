export const metadata = {
  title: "Roof Painting / Coating | Prime Roof Care",
  description:
    "Professional roof painting and coating across Adelaide, Melbourne and Tasmania. Correct cleaning, primers and UV-stable topcoats.",
};

const faq = [
  {
    q: "How long does coating last?",
    a: "Lifespan depends on the roof condition, prep and coating system. Correct cleaning and primer selection are critical.",
  },
  {
    q: "Do you paint iron and tiles?",
    a: "Yes. We match primers and sealers to concrete tile, terracotta and metal roof profiles.",
  },
  {
    q: "Can you help with colours?",
    a: "Yes. We can discuss colour options that suit the facade, gutters and overall property style.",
  },
];

export default function RoofPaintingPage() {
  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="section-soft-surface border-b border-slate-200 py-14">
        <div className="container-default max-w-5xl">
          <p className="badge-soft">Prep, prime, protect</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Roof painting and coating with the prep done first.
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            We only coat after repairs and proper cleaning. Then we apply a
            primer or sealer suited to the roof material, followed by neat,
            consistent topcoats.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a href="/quote" className="btn-solid-lg">
              Get coating quote
            </a>
            <a href="tel:0469097690" className="btn-secondary">
              Call 0469 097 690
            </a>
          </div>
        </div>
      </div>

      <div className="container-default grid max-w-5xl gap-10 py-14 lg:grid-cols-2">
        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Our coating system</h2>
          <ul className="mt-4 list-inside list-disc space-y-3 text-sm text-slate-700">
            <li>Repairs and high-pressure cleaning completed first</li>
            <li>Primer or sealer selected for your roof material</li>
            <li>Even topcoats with neat edges, vents and details</li>
            <li>Gutters, paths and surrounding areas protected</li>
          </ul>
        </div>

        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">FAQs</h2>
          <dl className="mt-4 space-y-4">
            {faq.map((item) => (
              <div key={item.q}>
                <dt className="font-medium">{item.q}</dt>
                <dd className="mt-1 text-sm text-slate-600">{item.a}</dd>
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

      <div className="border-t border-slate-200 bg-white py-16">
        <div className="container-default max-w-3xl text-center">
          <h4 className="text-2xl font-extrabold">Ready to refresh the look?</h4>
          <p className="mt-2 text-slate-600">
            Ask for colour suggestions and a clear, practical quote.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/quote" className="btn-solid-lg">
              Request a quote
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
