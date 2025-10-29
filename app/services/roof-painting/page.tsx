export const metadata = {
  title: 'Roof Painting / Coating Adelaide | Prime Roof Care',
  description:
    'Professional roof painting in Adelaide. Correct primers and UV-stable topcoats for a modern, durable finish.',
};

export default function RoofPaintingPage() {
  const faq = [
    { q: 'How long does coating last?', a: 'With correct prep and quality coatings, 8–12+ years is typical in SA conditions.' },
    { q: 'Do you paint iron and tiles?', a: 'Yes. We match primers/sealers to concrete/terracotta tiles and metal profiles.' },
    { q: 'Colour options?', a: 'Modern colour range to match facades and gutters — we can suggest popular choices for SA homes.' },
  ];

  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="section-soft-surface border-b border-slate-200 py-14">
        <div className="container-default max-w-5xl">
          <p className="badge-soft">Prep • Prime • Protect</p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Roof Painting / Coating <span className="text-emerald-600">Adelaide</span>
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            We only coat after repairs and proper cleaning. Then we apply the
            right primer and UV-stable topcoats for an even finish that lasts.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a href="/quote" className="btn-solid-lg">Get coating quote</a>
            <a href="tel:0469097690" className="btn-secondary">Call 0469 097 690</a>
          </div>
        </div>
      </div>

      <div className="container-default max-w-5xl py-14 grid lg:grid-cols-2 gap-10">
        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Our coating system</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 list-disc list-inside">
            <li>Repairs & high-pressure clean completed first</li>
            <li>Primer/sealer selected for your roof material</li>
            <li>Even, consistent topcoats with neat edges & vents</li>
            <li>Gutters & paths protected; site left clean</li>
          </ul>
        </div>

        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">FAQs</h2>
          <dl className="mt-4 space-y-4">
            {faq.map((f) => (
              <div key={f.q}>
                <dt className="font-medium">{f.q}</dt>
                <dd className="text-sm text-slate-600 mt-1">{f.a}</dd>
              </div>
            ))}
          </dl>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faq.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }),
            }}
          />
        </div>
      </div>

      <div className="py-16 bg-white border-t border-slate-200">
        <div className="container-default max-w-3xl text-center">
          <h4 className="text-2xl font-extrabold">Ready to refresh the look?</h4>
          <p className="mt-2 text-slate-600">
            Ask for colour suggestions and a clear, itemised quote.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote" className="btn-solid-lg">Request a quote</a>
            <a href="tel:0469097690" className="btn-secondary">Call 0469 097 690</a>
          </div>
        </div>
      </div>
    </section>
  );
}
