export const metadata = {
  title: 'Roof Cleaning Adelaide | Prime Roof Care',
  description:
    'Professional roof cleaning in Adelaide. High-pressure wash, moss & lichen removal, surface prep for coating. Licensed & insured.',
};

export default function RoofCleaningPage() {
  const faq = [
    { q: 'Will high-pressure damage tiles?', a: 'We use the right pressure and tip for your tile/iron profile, keeping the nozzle angle down-roof to avoid lift. We also avoid forcing water beneath overlaps.' },
    { q: 'Do you protect solar and gutters?', a: 'Yes — panels are covered/rinsed, gutters are flushed, and we keep driveways/windows clean.' },
    { q: 'Why clean before coating?', a: 'Proper cleaning removes lichen and chalking so primers and topcoats bond and last.' },
  ];

  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="section-soft-surface border-b border-slate-200 py-14">
        <div className="container-default max-w-5xl">
          <p className="badge-soft">Prep done properly</p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Roof Cleaning <span className="text-emerald-600">Adelaide</span>
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            High-pressure cleaning to remove moss, lichen, salt and grime —
            the right prep for a longer-lasting roof.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a href="/quote" className="btn-solid-lg">Book roof clean</a>
            <a href="tel:0469097690" className="btn-secondary">Call 0469 097 690</a>
          </div>
        </div>
      </div>

      <div className="container-default max-w-5xl py-14 grid lg:grid-cols-2 gap-10">
        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">What we do</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 list-disc list-inside">
            <li>Profile-appropriate pressure wash of tiles or iron</li>
            <li>Targeted lichen removal and edge/detail cleaning</li>
            <li>Gutter & downpipe flush • driveways rinsed</li>
            <li>Photos available on request</li>
          </ul>
        </div>

        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Good to know</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 list-disc list-inside">
            <li>Safer working practices and roof protection</li>
            <li>Ideal prep step prior to primers & topcoats</li>
            <li>Aldinga Beach based • Adelaide wide</li>
          </ul>
        </div>
      </div>

      <div className="bg-white border-t border-slate-200 py-14">
        <div className="container-default max-w-5xl">
          <h3 className="text-xl font-semibold">Roof cleaning FAQs</h3>
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

      <div className="py-16">
        <div className="container-default max-w-3xl text-center">
          <h4 className="text-2xl font-extrabold">Make your roof look new again</h4>
          <p className="mt-2 text-slate-600">Fast quotes. Licensed & insured.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote" className="btn-solid-lg">Get my quote</a>
            <a href="tel:0469097690" className="btn-secondary">Call 0469 097 690</a>
          </div>
        </div>
      </div>
    </section>
  );
}
