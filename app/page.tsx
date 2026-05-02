import FinalCTA from "@/components/FinalCTA";
import HeaderCTA from "@/components/HeaderCTA";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
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

      <section className="section-pad bg-[#12342d] text-white">
        <div className="container-default grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#d99a2b]">
              Service coverage
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Adelaide, Victoria and Tasmania roof care from one direct team.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Adelaide", "Victoria", "Tasmania"].map((area) => (
              <Link
                key={area}
                href="/areas"
                className="rounded-lg border border-white/15 bg-white/10 p-6 transition hover:-translate-y-1 hover:bg-white/15"
              >
                <span className="block text-2xl font-black">{area}</span>
                <span className="mt-3 block text-sm leading-6 text-white/65">
                  Roof cleaning, gutters, restoration prep and coating quotes.
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
