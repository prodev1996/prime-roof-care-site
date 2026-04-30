import Image from "next/image";

const recentImages = [
  { src: "/gallery/2.jpg", alt: "Gutter clean project" },
  { src: "/gallery/3.jpg", alt: "Roof cleaning project" },
  { src: "/gallery/IMG_3853.jpg", alt: "Roof inspection work" },
  { src: "/gallery/5.jpg", alt: "Tiled roof after clean" },
  { src: "/gallery/6.jpg", alt: "Roof ridge and capping" },
  { src: "/gallery/IMG_3023.jpg", alt: "Gutter and downpipe detail" },
  { src: "/gallery/8.jpg", alt: "Full roof view" },
  { src: "/gallery/IMG_2992_(1).jpg", alt: "Ridge tile work" },
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
      <section className="section-pad">
        <div className="container-default">
          <div className="max-w-3xl">
            <p className="eyebrow">Project gallery</p>
            <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Real roof work, shown up close.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A selection of roof cleaning, gutter cleaning, restoration and
              detail work from Prime Roof Care projects.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recentImages.map((img, index) => (
              <div
                key={img.src}
                className={index === 0 || index === 3 ? "group lg:col-span-2" : "group"}
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
                The result should be visible.
              </h2>
            </div>
            <a href="/quote" className="btn-primary">
              Ask for a quote
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {beforeAfter.map((job) => (
              <div key={job.title} className="rounded-lg border border-black/10 bg-[#f6f4ef] p-4">
                <p className="mb-4 text-lg font-black">{job.title}</p>
                <div className="grid gap-3">
                  <div className="relative aspect-[5/3] overflow-hidden rounded-lg">
                    <Image src={job.before} alt={job.title + " before"} fill className="object-cover" />
                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-wide">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[5/3] overflow-hidden rounded-lg">
                    <Image src={job.after} alt={job.title + " after"} fill className="object-cover" />
                    <span className="absolute left-3 top-3 rounded-full bg-[#d99a2b] px-3 py-1 text-xs font-black uppercase tracking-wide">
                      After
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
