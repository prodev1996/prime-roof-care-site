import FinalCTA from "@/components/FinalCTA";
import HeaderCTA from "@/components/HeaderCTA";
import HeroSection from "@/components/HeroSection";
import ProcessSteps from "@/components/ProcessSteps";
import ProofShowcase from "@/components/ProofShowcase";
import ServiceCards from "@/components/ServiceCards";
import StatBar from "@/components/StatBar";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div className="bg-[#f6f4ef] text-[#14201d]">
      <HeroSection />
      <HeaderCTA />
      <StatBar />

      <section className="section-pad">
        <div className="container-default">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Everything your roof needs before problems spread.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
              Prime Roof Care handles the practical work that keeps a property
              protected: blocked gutters, roof grime, leaks, cracked tiles,
              worn ridge caps, faded coatings and full restoration prep.
            </p>
          </div>

          <div className="mt-12">
            <ServiceCards />
          </div>
        </div>
      </section>

      <ProofShowcase />
      <ProcessSteps />

      <section className="section-pad bg-[#f6f4ef]">
        <div className="container-default">
          <Testimonials />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
