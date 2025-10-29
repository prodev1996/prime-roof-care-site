export default function RoofRestorationPage() {
  return (
    <section className="py-16 bg-slate-50 text-slate-900">
      <div className="container-default max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Roof Restoration Adelaide
        </h1>
        <p className="text-slate-600 mt-4 leading-relaxed">
          If your roof is starting to fail — cracked tiles, loose ridge caps,
          leaks during rain — a proper restoration can bring it back and
          protect the home underneath.
        </p>

        <div className="mt-8 space-y-4 text-slate-700 leading-relaxed text-sm">
          <p>A full restoration can include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Replacing cracked or porous tiles</li>
            <li>Rebedding & repointing ridge caps so they’re sealed tight</li>
            <li>Fixing active leaks at their source (not just silicone over it)</li>
            <li>High-pressure clean & prep</li>
            <li>Sealer / protective coating for durability</li>
          </ul>

          <p className="pt-4">
            We don’t just “spray over” problems. We fix the structure first,
            then seal and finish it properly so it lasts.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="/quote" className="btn-primary">
            Book a roof inspection
          </a>
          <a href="tel:0469097690" className="btn-secondary">
            Call 0469 097 690
          </a>
        </div>
      </div>
    </section>
  );
}
