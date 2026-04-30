export const metadata = {
  title: "Gutter Cleaning | Prime Roof Care",
  description:
    "Professional gutter cleaning across Adelaide, Melbourne and Tasmania. Clear blockages, flush downpipes and keep water moving.",
};

const faq = [
  {
    q: "How often should gutters be cleaned?",
    a: "For most homes, every 6-12 months. Homes with trees close to the roof may need more frequent cleaning.",
  },
  {
    q: "Do you flush the downpipes?",
    a: "Yes. We clear and flush where practical so water can move toward stormwater instead of backing up.",
  },
  {
    q: "Will you remove the debris?",
    a: "Yes. We bag and remove debris and leave paths, driveways and garden areas tidy.",
  },
];

export default function GutterCleaningPage() {
  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="section-soft-surface border-b border-slate-200 py-14">
        <div className="container-default max-w-5xl">
          <p className="badge-soft">Adelaide, Melbourne and Tasmania</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Gutter cleaning that protects the property below.
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Blocked gutters cause overflow, water damage and rotten fascia. We
            remove leaves, sludge and build-up, then check water flow so the
            system drains where it should.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a href="/quote" className="btn-solid-lg">
              Book a gutter clean
            </a>
            <a href="tel:0469097690" className="btn-secondary">
              Call 0469 097 690
            </a>
          </div>
        </div>
      </div>

      <div className="container-default grid max-w-5xl gap-10 py-14 lg:grid-cols-2">
        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">What is included</h2>
          <ul className="mt-4 list-inside list-disc space-y-3 text-sm leading-relaxed text-slate-700">
            <li>Hand clearing of gutters and problem areas</li>
            <li>Downpipe checks and flushing where practical</li>
            <li>Safe debris collection and removal from site</li>
            <li>Notes on cracked, sagging or rusted sections</li>
            <li>Care around gardens, solar and paintwork</li>
          </ul>
        </div>

        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Why choose us</h2>
          <ul className="mt-4 list-inside list-disc space-y-3 text-sm leading-relaxed text-slate-700">
            <li>Insured work with tidy cleanup</li>
            <li>Clear quotes without pressure</li>
            <li>Useful notes if we spot roof or gutter issues</li>
            <li>Operating in Adelaide, Melbourne and Tasmania</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white py-14">
        <div className="container-default max-w-5xl">
          <h3 className="text-xl font-semibold">Gutter cleaning FAQs</h3>
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
