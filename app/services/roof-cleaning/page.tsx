export default function RoofCleaningPage() {
  return (
    <section className="py-16 bg-slate-50 text-slate-900">
      <div className="container-default max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Roof Cleaning Adelaide
        </h1>
        <p className="text-slate-600 mt-4 leading-relaxed">
          High-pressure roof cleaning removes moss, lichen, salt, dirt and
          oxidised coating. That not only makes the roof look fresh — it
          prepares it properly for sealing or repainting.
        </p>

        <div className="mt-8 space-y-4 text-slate-700 leading-relaxed text-sm">
          <p>Why proper prep matters:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Paint sticks better to a clean, decontaminated surface</li>
            <li>We reveal cracked tiles and loose ridge caps before they leak</li>
            <li>Your place instantly looks looked-after (street appeal)</li>
          </ul>

          <p className="pt-4">
            We work respectfully around solar panels, skylights and rainwater
            tanks. We’re licensed, insured and based in Aldinga Beach SA.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="/quote" className="btn-primary">
            Get roof cleaning quote
          </a>
          <a href="tel:0469097690" className="btn-secondary">
            Call 0469 097 690
          </a>
        </div>
      </div>
    </section>
  );
}
