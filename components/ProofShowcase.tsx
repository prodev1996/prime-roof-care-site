"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Camera, MapPin } from "lucide-react";
import Link from "next/link";

const regions = [
  {
    name: "Adelaide",
    text: "Coastal grime, blocked gutters, tiled roof care and restoration quotes.",
  },
  {
    name: "Melbourne",
    text: "Weather-exposed roofs, drainage issues, leak checks and coating prep.",
  },
  {
    name: "Tasmania",
    text: "Moss, lichen, wet-season gutter maintenance and roof protection.",
  },
];

export default function ProofShowcase() {
  return (
    <section className="section-pad bg-white">
      <div className="container-default">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow">
              <Camera size={14} />
              Project proof
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#14201d] sm:text-5xl">
              The difference should be obvious before we leave.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Roof care is visual work. Cleaning, coating and gutter maintenance
              should produce a roof that looks sharper and performs better when
              the next weather system rolls in.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="rounded-lg border border-black/10 bg-[#f6f4ef] p-5"
                >
                  <div className="flex items-center gap-2 font-black text-[#12342d]">
                    <MapPin size={16} className="text-[#d99a2b]" />
                    {region.name}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {region.text}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/gallery" className="btn-primary mt-8">
              View Project Gallery
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="space-y-4">
              <div className="image-lift relative aspect-[4/5]">
                <Image
                  src="/gallery/job2-before.jpg"
                  alt="Roof and gutter work before cleaning"
                  fill
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-wide text-[#14201d]">
                  Before
                </span>
              </div>
              <div className="image-lift relative aspect-[5/3]">
                <Image
                  src="/gallery/IMG_3853.jpg"
                  alt="Roof detail inspection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 sm:pt-12">
              <div className="image-lift relative aspect-[5/3]">
                <Image
                  src="/gallery/3.jpg"
                  alt="Roof cleaning in progress"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="image-lift relative aspect-[4/5]">
                <Image
                  src="/gallery/job2-after.jpg"
                  alt="Roof and gutter work after cleaning"
                  fill
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#d99a2b] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#14201d]">
                  After
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
