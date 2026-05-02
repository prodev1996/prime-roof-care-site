"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

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
      "We had a stubborn roof leak. They traced it, fixed the actual cause and explained it in plain English.",
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
    <section>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="eyebrow">Customer feedback</p>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-[#14201d] sm:text-5xl">
            Work that feels easy from the first call.
          </h2>
        </div>
        <div className="image-lift relative hidden aspect-[5/2] lg:block">
          <Image
            src="/gallery/job3-after.jpg"
            alt="Finished roof project"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_18px_45px_rgba(20,32,29,0.08)] transition hover:border-[#0f8a62]/20 hover:shadow-[0_28px_70px_rgba(20,32,29,0.14)]"
          >
            <Quote className="h-8 w-8 text-[#d99a2b]" />
            <div className="mt-5 flex text-[#d99a2b]">
              {Array.from({ length: 5 }).map((_, star) => (
                <Star key={star} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 text-base font-semibold leading-7 text-slate-700">
              "{testimonial.quote}"
            </p>
            <div className="mt-6 border-t border-black/10 pt-5">
              <p className="font-black text-[#14201d]">{testimonial.name}</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                {testimonial.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
