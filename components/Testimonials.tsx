import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Hannah P.",
    quote:
      "They were honest, on time, and left no mess. Our gutters were overflowing before — now everything drains properly.",
    location: "Seaford SA",
  },
  {
    name: "Emily R.",
    quote:
      "We had a stubborn roof leak. They traced it, fixed the actual cause and explained it in plain English. Highly recommend.",
    location: "Christies Beach SA",
  },
];

export default function Testimonials() {
  return (
    <div>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-slate-900 text-3xl font-extrabold tracking-tight">
          What Adelaide homeowners say
        </h2>
        <p className="text-slate-600 mt-4 leading-relaxed">
          Real work, clear communication, no drama.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="card-surface p-6 flex flex-col gap-4 hover:shadow-xl hover:shadow-emerald-100 transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-100 border border-slate-200 shadow-card overflow-hidden flex items-center justify-center text-xs text-slate-500 font-semibold">
                {/* fallback initials */}
                <span>{t.name.slice(0, 1)}</span>
              </div>
              <div className="flex flex-col">
                <div className="text-slate-900 font-semibold leading-tight">
                  {t.name}
                </div>
                <div className="text-[12px] text-slate-500 leading-tight">
                  {t.location}
                </div>
                <div className="flex text-emerald-500 mt-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            <div className="text-slate-700 text-sm leading-relaxed">
              “{t.quote}”
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
