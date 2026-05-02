import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Before and After Roof Projects | Prime Roof Care",
  description:
    "Interactive before and after roof cleaning, gutter cleaning and roof restoration proof from Prime Roof Care across Adelaide, Victoria and Tasmania.",
};

const featuredProjects = [
  {
    before: "/gallery/job4-before.jpg",
    after: "/gallery/job4-after.jpg",
    title: "Tiled roof restoration finish",
    location: "Adelaide / Victoria / Tasmania",
    detail:
      "Weathered tiles lifted with a sharper, cleaner finish ready for the next stage of roof protection.",
  },
  {
    before: "/gallery/job3-before.jpg",
    after: "/gallery/job3-after.jpg",
    title: "Roof wash and surface revival",
    location: "Residential roof care",
    detail:
      "Built-up grime removed so the roof reads cleaner from the street and drains more predictably.",
  },
  {
    before: "/gallery/job2-before.jpg",
    after: "/gallery/job2-after.jpg",
    title: "Gutter edge and roof clean",
    location: "Maintenance proof",
    detail:
      "A practical clean-up around roof edges and gutter lines with visible photo-backed results.",
  },
];

const highlights = [
  "Before and after photo records",
  "Roof, gutter and detail-area cleaning",
  "Restoration-ready surface preparation",
  "Service across Adelaide, Victoria and Tasmania",
];

const detailImages = [
  {
    src: "/gallery/WhatsApp Image 2026-05-02 at 6.47.31 PM.jpeg",
    title: "Detail clean",
  },
  {
    src: "/gallery/WhatsApp Image 2026-05-02 at 6.47.41 PM.jpeg",
    title: "Roof finish",
  },
  {
    src: "/gallery/WhatsApp Image 2026-05-02 at 6.47.42 PM.jpeg",
    title: "Tile surface",
  },
  {
    src: "/gallery/WhatsApp Image 2026-05-02 at 6.47.43 PM.jpeg",
    title: "Restoration detail",
  },
  {
    src: "/gallery/WhatsApp Image 2026-05-02 at 6.47.44 PM.jpeg",
    title: "Cleaned roof area",
  },
];

export default function BeforeAfterPage() {
  return (
    <main className="bg-[#f6f4ef] text-[#14201d]">
      <section className="relative overflow-hidden bg-[#12342d] text-white">
        <Image
          src="/gallery/job4-after.jpg"
          alt="Finished roof restoration result"
          fill
          className="object-cover opacity-45"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,52,45,0.96),rgba(18,52,45,0.78)_48%,rgba(18,52,45,0.34))]" />
        <div className="absolute inset-0 grain-overlay opacity-60" />

        <div className="container-default relative grid min-h-[620px] gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-50 backdrop-blur">
              <Camera size={15} className="text-[#d99a2b]" />
              Before and after
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-7xl">
              Real roof transformations, shown side by side.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/90">
              Compare project photos and see the difference from cleaning,
              gutter work, restoration prep and finish-focused roof care.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="btn-primary bg-[#d99a2b] text-[#14201d] hover:bg-white">
                Get a Quote
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/gallery" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 bg-white/12 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20">
                View Gallery
              </Link>
            </div>
          </div>

          <BeforeAfterSlider
            before={featuredProjects[0].before}
            after={featuredProjects[0].after}
            title={featuredProjects[0].title}
            location={featuredProjects[0].location}
            detail={featuredProjects[0].detail}
            aspect="aspect-[4/3]"
            priority
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-default">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="eyebrow">
                <Sparkles size={14} />
                Proof first
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                The roof should look better from the driveway and work better in the rain.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-black/10 bg-white p-4 text-sm font-black shadow-[0_14px_34px_rgba(20,32,29,0.07)]"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0f8a62]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {featuredProjects.slice(1).map((project) => (
              <BeforeAfterSlider
                key={project.title}
                before={project.before}
                after={project.after}
                title={project.title}
                location={project.location}
                detail={project.detail}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-default">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">
                <MapPin size={14} />
                Recent detail shots
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                More angles from real roof care work.
              </h2>
            </div>
            <Link href="/contact" className="btn-secondary">
              Talk to the team
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {detailImages.map((image, index) => (
              <div
                key={image.src}
                className={index === 0 || index === 4 ? "group lg:col-span-2" : "group"}
              >
                <div className="image-lift relative aspect-[3/4]">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm font-black text-[#14201d]">{image.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
