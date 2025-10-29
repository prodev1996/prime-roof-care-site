export default function RoofPaintingPage() {
  return (
    <section className="py-16 bg-slate-50 text-slate-900">
      <div className="container-default max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Roof Painting & Re-Coating Adelaide
        </h1>
        <p className="text-slate-600 mt-4 leading-relaxed">
          A tired roof drags the whole place down. A professional re-coat lifts
          the look instantly and protects it from harsh SA sun and salt air.
          We focus on prep and even finish — not streaky DIY spray jobs.
        </p>

        <div className="mt-8 space-y-4 text-slate-700 leading-relaxed text-sm">
          <p>What you’re really paying for:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Proper clean and prep before any paint touches the roof</li>
            <li>Crack & ridge repairs first (not painted over)</li>
            <li>Quality coatings suited to SA weather</li>
            <li>Even, consistent finish — no patchy shine</li>
            <li>Colour advice so it doesn’t date the house</li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="/quote" className="btn-primary">
            Ask about repaint options
          </a>
          <a href="tel:0469097690" className="btn-secondary">
            Call 0469 097 690
          </a>
        </div>
      </div>
    </section>
  );
}
