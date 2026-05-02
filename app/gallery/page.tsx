import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const recentImages = [
  { src: "/gallery/2.jpg", alt: "Gutter clean project" },
  { src: "/gallery/3.jpg", alt: "Roof cleaning project" },
  { src: "/gallery/IMG_3853.jpg", alt: "Roof inspection work" },
  { src: "/gallery/5.jpg", alt: "Tiled roof after clean" },
  { src: "/gallery/6.jpg", alt: "Roof ridge and capping" },
  { src: "/gallery/IMG_3023.jpg", alt: "Gutter and downpipe detail" },
  { src: "/gallery/8.jpg", alt: "Full roof view" },
  { src: "/gallery/IMG_2992_(1).jpg", alt: "Ridge tile work" },
  { src: "/gallery/WhatsApp Image 2026-05-02 at 6.47.31 PM.jpeg", alt: "Roof detail clean" },
  { src: "/gallery/WhatsApp Image 2026-05-02 at 6.47.41 PM.jpeg", alt: "Finished roof detail" },
  { src: "/gallery/WhatsApp Image 2026-05-02 at 6.47.42 PM.jpeg", alt: "Tile surface work" },
  { src: "/gallery/WhatsApp Image 2026-05-02 at 6.47.43 PM.jpeg", alt: "Restoration detail" },
  { src: "/gallery/WhatsApp Image 2026-05-02 at 6.47.44 PM.jpeg", alt: "Cleaned roof section" },
];

const beforeAfter = [
  {
    before: "/gallery/job2-before.jpg",
    after: "/gallery/job2-after.jpg",
    title: "Gutter and roof clean",
  },
  {
    before: "/gallery/job3-before.jpg",
    after: "/gallery/job3-after.jpg",
    title: "Roof wash",
  },
  {
    before: "/gallery/job4-before.jpg",
    after: "/gallery/job4-after.jpg",
    title: "Tiled roof restoration",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-[#f6f4ef] text-[#14201d]">
      <section className="relative overflow-hidden bg-[#12342d] py-20 text-white">
        <Image
          src="/gallery/8.jpg"
          alt="Prime Roof Care gallery"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-[#12342d]/82" />
        <div className="container-default relative">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-50">
                <Camera size={15} className="text-[#d99a2b]" />
                Project gallery
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-7xl">
                Real roof work, shown up close.
              </h1>
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-white/75">
                Roof cleaning, gutter cleaning, restoration and detail work from
                Prime Roof Care projects across Adelaide, Victoria and Tasmania.
              </p>
              <Link href="/before-after" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#d99a2b] px-6 py-3 font-bold text-[#14201d] shadow-[0_18px_36px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-white">
                Compare Before & After
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-default">
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recentImages.map((img, index) => (
              <div
                key={img.src}
                className={index === 0 || index === 3 || index === 8 ? "group lg:col-span-2" : "group"}
              >
                <div className="image-lift relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm font-black">{img.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-default">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Before / after</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight">
                The result should be visible and easy to compare.
              </h2>
            </div>
            <Link href="/quote" className="btn-primary">
              Ask for a Quote
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {beforeAfter.map((job) => (
              <BeforeAfterSlider
                key={job.title}
                before={job.before}
                after={job.after}
                title={job.title}
                location="Project proof"
                aspect="aspect-[5/4]"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
