import Image from "next/image";
import ServiceCards from "@/components/ServiceCards";
import FinalCTA from "@/components/FinalCTA";

const points = [
  "Roof and gutter cleaning",
  "Leak investigation and minor repairs",
  "Ridge cap repairs and repointing",
  "Full restoration and roof coating",
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f6f4ef] text-[#14201d]">
      <section className="relative overflow-hidden bg-[#12342d] py-20 text-white">
        <Image
          src="/gallery/8.jpg"
          alt="Prime Roof Care roof services"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[#12342d]/80" />
        <div className="container-default relative">
          <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#d99a2b]">
            Services
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-7xl">
            Roof work that fixes the issue before the finish.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Cleaning, maintenance and restoration services across Adelaide,
            Melbourne and Tasmania.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-default">
          <ServiceCards />
          <div className="mt-10 grid gap-3 rounded-lg border border-black/10 bg-white p-5 shadow-[0_18px_45px_rgba(20,32,29,0.08)] sm:grid-cols-2 lg:grid-cols-4">
            {points.map((point) => (
              <div key={point} className="text-sm font-black text-[#14201d]">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
