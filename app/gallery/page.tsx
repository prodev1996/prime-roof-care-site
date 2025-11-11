// app/gallery/page.tsx
import Image from "next/image";

const recentImages = [
  { src: "/gallery/2.jpg", alt: "Gutter clean - Adelaide" },
  { src: "/gallery/3.jpg", alt: "Roof clean - Adelaide" },
  { src: "/gallery/IMG_3853.jpg", alt: "Roof inspection" },
  { src: "/gallery/5.jpg", alt: "Tiled roof - after clean" },
  { src: "/gallery/6.jpg", alt: "Roof ridge and capping" },
  { src: "/gallery/IMG_3023.jpg", alt: "Downpipe / gutter section" },
  { src: "/gallery/8.jpg", alt: "Full roof view" },
  { src: "/gallery/IMG_2992_(1).jpg", alt: "Ridge tiles" },
];

const beforeAfter = [
  {
    before: "/gallery/job2-before.jpg",
    after: "/gallery/job2-after.jpg",
    title: "Job 2 – Gutter & roof clean",
  },
  {
    before: "/gallery/job3-before.jpg",
    after: "/gallery/job3-after.jpg",
    title: "Job 3 – Roof wash",
  },
  {
    before: "/gallery/job4-before.jpg",
    after: "/gallery/job4-after.jpg",
    title: "Job 4 – Tiled roof restoration",
  },
  // if you have single photo named "1.jpg"
  {
    before: "/gallery/1.jpg",
    after: "",
    title: "Site clean / pressure wash",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        {/* Page title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Project Gallery
          </h1>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            Real Adelaide jobs — gutter cleans, roof washing, restorations and
            repaint work. Before &amp; afters coming from Aldinga Beach, Seaford,
            Christies Beach and surrounds.
          </p>
        </div>

        {/* Latest jobs */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Latest jobs
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recentImages.map((img) => (
              <div
                key={img.src}
                className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100"
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
                  <p className="text-sm font-medium text-slate-800 line-clamp-1">
                    {img.alt}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Prime Roof Care</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Before & after */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Before &amp; After
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {beforeAfter.map((job) => (
              <div
                key={job.title}
                className="rounded-xl bg-white shadow-sm ring-1 ring-slate-100 p-4"
              >
                <p className="mb-3 text-sm font-medium text-slate-800">
                    {job.title}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {/* before */}
                  <div className="flex flex-col gap-2">
                    <div className="relative h-40 w-full overflow-hidden rounded-lg bg-slate-100">
                      {job.before ? (
                        <Image
                          src={job.before}
                          alt={job.title + " before"}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-slate-400">
                          No before image
                        </div>
                      )}
                    </div>
                    <span className="inline-flex w-fit rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                      Before
                    </span>
                  </div>
                  {/* after */}
                  <div className="flex flex-col gap-2">
                    <div className="relative h-40 w-full overflow-hidden rounded-lg bg-slate-100">
                      {job.after ? (
                        <Image
                          src={job.after}
                          alt={job.title + " after"}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-slate-400">
                          No after image
                        </div>
                      )}
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
          More jobs will be added as we complete projects around Adelaide.
        </p>
      </div>
    </main>
  );
}
