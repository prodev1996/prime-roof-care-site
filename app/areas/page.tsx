import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Roof Care Areas | Adelaide, Victoria and Tasmania",
  description:
    "Prime Roof Care operates across Adelaide, Victoria and Tasmania for roof cleaning, gutter cleaning, roof restoration and coating quotes.",
};

const areas = [
  {
    name: "Adelaide",
    image: "/gallery/5.jpg",
    text: "Roof cleaning, gutter maintenance, leak checks and restoration preparation for Adelaide homes and properties.",
    points: ["Tile and ridge detail", "Blocked gutter clean-ups", "Street-facing roof refresh"],
  },
  {
    name: "Victoria",
    image: "/gallery/8.jpg",
    text: "Weather-exposed roof care across Victoria, with practical scopes for cleaning, coating prep and maintenance.",
    points: ["Moss and grime removal", "Drainage checks", "Restoration-ready surfaces"],
  },
  {
    name: "Tasmania",
    image: "/gallery/IMG_3853.jpg",
    text: "Roof and gutter care for wetter conditions, focusing on moss, lichen, gutters and protective finish work.",
    points: ["Wet-season gutter care", "Roof surface cleaning", "Photo-backed recommendations"],
  },
];

export default function AreasPage() {
  return (
    <main className="bg-[#f6f4ef] text-[#14201d]">
      <section className="relative overflow-hidden bg-[#12342d] py-20 text-white">
        <Image
          src="/gallery/3.jpg"
          alt="Prime Roof Care service areas"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-[#12342d]/82" />
        <div className="container-default relative">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-50">
            <MapPin size={15} className="text-[#d99a2b]" />
            Service areas
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-7xl">
            Roof care across Adelaide, Victoria and Tasmania.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Quotes, cleaning, gutters, repairs, restoration preparation and
            coating work for homes and property managers across three regions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/quote" className="btn-primary bg-[#d99a2b] text-[#14201d] hover:bg-white">
              Request a Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <a href="tel:0469097690" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 bg-white/12 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20">
              <Phone size={18} className="mr-2 text-[#d99a2b]" />
              0469 097 690
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-default">
          <div className="grid gap-6 lg:grid-cols-3">
            {areas.map((area) => (
              <article
                key={area.name}
                className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_20px_54px_rgba(20,32,29,0.10)]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={area.image}
                    alt={`${area.name} roof care`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-3xl font-black">{area.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{area.text}</p>
                  <div className="mt-5 space-y-3">
                    {area.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0f8a62]" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
