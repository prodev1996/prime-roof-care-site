export default function GutterCleaningPage() {
  return (
    <section className="py-16 bg-slate-50 text-slate-900">
      <div className="container-default max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Gutter Cleaning Adelaide
        </h1>
        <p className="text-slate-600 mt-4 leading-relaxed">
          Blocked gutters cause overflow, water damage, rotten fascia, and
          mould inside ceilings. We clear out leaves, sludge and built-up junk
          so rainwater actually drains where it should.
        </p>

        <div className="mt-8 space-y-4 text-slate-700 leading-relaxed text-sm">
          <p>Our gutter cleaning service includes:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Clearing gutters and downpipes by hand and high-pressure</li>
            <li>Flushing blockages so water flows again</li>
            <li>Safe removal and disposal of debris</li>
            <li>Checking for cracked, sagging or rusted gutter sections</li>
          </ul>

          <p className="pt-4">
            We work carefully around solar, landscaping and driveways — no mess
            left behind. Based in Aldinga Beach, serving all Adelaide suburbs.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="/quote" className="btn-primary">
            Book a gutter clean
          </a>
          <a href="tel:0469097690" className="btn-secondary">
            Call 0469 097 690
          </a>
        </div>
      </div>
    </section>
  );
}
