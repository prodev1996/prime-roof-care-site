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
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="mb-10 text-center">
          <p className="badge-soft">Project gallery</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            Real roof and gutter work
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Recent roof cleaning, gutter cleaning, restoration and repaint work
            from Prime Roof Care projects.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">
            Recent jobs
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recentImages.map((img) => (
              <div
                key={img.src}
                className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-100"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="px-3 py-3">
                  <p className="line-clamp-1 text-sm font-medium text-slate-800">
                    {img.alt}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">Prime Roof Care</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold text-slate-900">
            Before and after
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {beforeAfter.map((job) => (
              <div
                key={job.title}
                className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-100"
              >
                <p className="mb-3 text-sm font-medium text-slate-800">
                  {job.title}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <div className="relative h-40 w-full overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src={job.before}
                        alt={job.title + " before"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="inline-flex w-fit rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                      Before
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="relative h-40 w-full overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src={job.after}
                        alt={job.title + " after"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="inline-flex w-fit rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-600">
                      After
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-10 text-center text-xs text-slate-400">
          More projects will be added as work is completed.
        </p>
      </div>
    </main>
  );
}
