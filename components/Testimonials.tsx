import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Hannah P.",
    quote:
      "They were honest, on time, and left no mess. Our gutters were overflowing before. Now everything drains properly.",
    location: "Seaford SA",
  },
  {
    name: "Emily R.",
    quote:
      "We had a stubborn roof leak. They traced it, fixed the actual cause and explained it in plain English. Highly recommend.",
    location: "Christies Beach SA",
  },
  {
    name: "Property Manager",
    quote:
      "Clear photos, practical recommendations and easy communication. Exactly what we need for maintenance work.",
    location: "Multi-property portfolio",
  },
];

export default function Testimonials() {
  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          What customers value most
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Real work, clear communication and a tidy finish.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="card-surface flex flex-col gap-4 p-6 transition-shadow hover:shadow-xl hover:shadow-emerald-100"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-100 text-xs font-semibold text-slate-500 shadow-card">
                <span>{testimonial.name.slice(0, 1)}</span>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold leading-tight text-slate-900">
                  {testimonial.name}
                </div>
                <div className="text-[12px] leading-tight text-slate-500">
                  {testimonial.location}
                </div>
                <div className="mt-1 flex text-emerald-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            <div className="text-sm leading-relaxed text-slate-700">
              "{testimonial.quote}"
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
