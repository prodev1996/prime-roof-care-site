import ServiceCards from "@/components/ServiceCards";

const points = [
  "Roof and gutter cleaning",
  "Leak investigation and minor repairs",
  "Ridge cap repairs and repointing",
  "Full restoration and roof coating",
];

export default function ServicesPage() {
  return (
    <section className="bg-slate-50 py-16 text-slate-900">
      <div className="container-default">
        <div className="mx-auto max-w-3xl text-center">
          <p className="badge-soft">Services</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Roof care that covers the whole system.
          </h1>
          <p className="mt-4 leading-relaxed text-slate-600">
            From maintenance cleans to full restorations, Prime Roof Care works
            across Adelaide, Melbourne and Tasmania with practical scopes and
            tidy site standards.
          </p>
        </div>

        <div className="mt-12">
          <ServiceCards />
        </div>

        <div className="mt-12 grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-card sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div key={point} className="text-sm font-semibold text-slate-700">
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
