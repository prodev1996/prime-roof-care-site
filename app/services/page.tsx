import ServiceCards from '@/components/ServiceCards';

export default function ServicesPage() {
  return (
    <section className="py-16 bg-slate-50 text-slate-900">
      <div className="container-default text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Our Services
        </h1>
        <p className="text-slate-600 mt-4 leading-relaxed">
          Gutter cleaning, roof cleaning, full restorations and professional
          roof coating — built for Adelaide conditions.
        </p>
      </div>

      <div className="container-default mt-12">
        <ServiceCards />
      </div>
    </section>
  );
}
