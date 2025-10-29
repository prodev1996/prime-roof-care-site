import HeroSection from "@/components/HeroSection";
import HeaderCTA from "@/components/HeaderCTA";
import StatBar from "@/components/StatBar";
import ServiceCards from "@/components/ServiceCards";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <HeroSection />
      <HeaderCTA />
      <StatBar />

      <section className="py-16 container-default">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            What we do
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Local Adelaide roof care from people who actually turn up, explain
            what’s going on, and do the job properly.
          </p>
        </div>
        <ServiceCards />
      </section>

      <section className="py-16 bg-white border-y border-slate-200">
        <ProcessSteps />
      </section>

      <section className="py-16 container-default">
        <Testimonials />
      </section>

      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container-default max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Need your roof sorted?
          </h2>
          <p className="text-slate-600 mt-3">
            We’re based in Aldinga Beach and service all of Adelaide. Licensed &
            insured. Fast quotes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
