import HeroSection from "@/components/HeroSection";
import HeaderCTA from "@/components/HeaderCTA";
import StatBar from "@/components/StatBar";
import ServiceCards from "@/components/ServiceCards";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";

const regions = ["Adelaide", "Melbourne", "Tasmania"];

export default function HomePage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <HeroSection />
      <HeaderCTA />
      <StatBar />

      <section className="container-default py-16">
        <div className="mb-10 max-w-3xl">
          <p className="badge-soft">Roof care for homes and properties</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
            Practical roof services, finished professionally.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            We handle the work that protects a property: blocked gutters, roof
            grime, leaks, cracked tiles, tired coatings and full restorations.
            Clear scope, tidy site, no pressure.
          </p>
        </div>
        <ServiceCards />
      </section>

      <section className="border-y border-slate-200 bg-white">
        <ProcessSteps />
      </section>

      <section className="container-default py-16">
        <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="badge-soft">Service areas</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
              Operating across Adelaide, Melbourne and Tasmania.
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Prime Roof Care is now set up to support homeowners and property
              managers across three major regions, with the same direct
              communication and site standards on every job.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {regions.map((area) => (
              <div key={area} className="card-surface p-6">
                <div className="text-lg font-bold text-slate-900">{area}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Roof cleaning, gutter cleaning, repairs, restoration and
                  coating quotes available by request.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-default py-16">
        <Testimonials />
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="container-default max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Need a roof or gutter quote?
          </h2>
          <p className="mt-3 text-slate-300">
            Send a few details and we will respond with the next step for your
            Adelaide, Melbourne or Tasmania property.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/quote" className="btn-primary">
              Request a Quote
            </a>
            <a href="tel:0469097690" className="btn-secondary">
              Call 0469 097 690
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
