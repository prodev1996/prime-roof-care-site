export const metadata = {
  title: 'Gutter Cleaning Adelaide | Prime Roof Care',
  description:
    'Professional gutter cleaning in Adelaide. Clear blockages, flush downpipes, no mess. Aldinga Beach based, fully insured.',
};

export default function GutterCleaningPage() {
  const faq = [
    {
      q: 'How often should gutters be cleaned?',
      a: 'For most homes, every 6–12 months. If you have trees over the roof, plan 2–3 times per year.',
    },
    {
      q: 'Do you flush the downpipes?',
      a: 'Yes — we clear and flush to confirm water is flowing to stormwater.',
    },
    {
      q: 'Will you remove the debris?',
      a: 'Absolutely. We bag and remove debris and leave paths/driveways tidy.',
    },
  ];

  return (
    <section className="bg-slate-50 text-slate-900">
      {/* Hero */}
      <div className="section-soft-surface border-b border-slate-200 py-14">
        <div className="container-default max-w-5xl">
          <p className="badge-soft">Local • Aldinga Beach SA</p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Gutter Cleaning <span className="text-emerald-600">Adelaide</span>
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Blocked gutters cause overflow, water damage and rotten fascia. We
            remove leaves, sludge and build-up, then **flush downpipes** so
            water drains where it should — no mess left behind.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a href="/quote" className="btn-solid-lg">Book a gutter clean</a>
            <a href="tel:0469097690" className="btn-secondary">Call 0469 097 690</a>
          </div>
        </div>
      </div>

      {/* Inclusions */}
      <div className="container-default max-w-5xl py-14 grid lg:grid-cols-2 gap-10">
        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">What’s included</h2>
          <ul className="mt-4 space-y-3 text-slate-700 text-sm leading-relaxed list-disc list-inside">
            <li>Hand clean & high-pressure clearing of gutters</li>
            <li>Downpipe inspection & flushing to stormwater</li>
            <li>Safe debris collection & removal from site</li>
            <li>Notes on cracked, sagging or rusted sections</li>
            <li>Respectful protection of gardens, solar & paintwork</li>
          </ul>
        </div>

        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Why choose us</h2>
          <ul className="mt-4 space-y-3 text-slate-700 text-sm leading-relaxed list-disc list-inside">
            <li>Local, insured, no subcontractors</li>
            <li>Clear, itemised quotes — no upsell pressure</li>
            <li>We turn up on time and clean up properly</li>
            <li>Aldinga Beach based • Adelaide wide</li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white border-t border-slate-200 py-14">
        <div className="container-default max-w-5xl">
          <h3 className="text-xl font-semibold">Gutter cleaning FAQs</h3>
          <dl className="mt-6 space-y-6">
            {faq.map((f) => (
              <div key={f.q} className="surface-halo p-5">
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-2 text-sm text-slate-600">{f.a}</dd>
              </div>
            ))}
          </dl>
          <script
            type="application/ld+json"
            // FAQ schema
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

      {/* CTA */}
      <div className="py-16">
        <div className="container-default max-w-3xl text-center">
          <h4 className="text-2xl font-extrabold">Ready for clear gutters?</h4>
          <p className="mt-2 text-slate-600">
            Same-week availability. Photos on request.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote" className="btn-solid-lg">Get my quote</a>
            <a href="tel:0469097690" className="btn-secondary">Call 0469 097 690</a>
          </div>
        </div>
      </div>
    </section>
  );
}
