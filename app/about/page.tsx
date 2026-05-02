"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, MapPin, Phone, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Tidy finish",
    text: "Driveways, gardens, solar, gutters and paintwork are treated with care.",
  },
  {
    icon: Camera,
    title: "Clear proof",
    text: "Photo-backed recommendations make it easier to understand the scope.",
  },
  {
    icon: Wrench,
    title: "Repair-first mindset",
    text: "Leaks, drainage issues and cracked materials are handled before cosmetic work.",
  },
  {
    icon: MapPin,
    title: "Three-region coverage",
    text: "Operating in Adelaide, Victoria and Tasmania for residential and property work.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f6f4ef] text-[#14201d]">
      <section className="section-pad">
        <div className="container-default grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="eyebrow">About Prime Roof Care</p>
            <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Roof care should feel calm, clear and properly handled.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Prime Roof Care helps homeowners and property managers protect
              the roof system: gutters, tiles, ridge caps, leaks, moss, lichen
              and protective coatings.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              We focus on straight communication, practical scopes and a clean
              site finish across Adelaide, Victoria and Tasmania.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/quote" className="btn-primary">
                Get a fast quote
              </a>
              <a href="tel:0469097690" className="btn-secondary">
                <Phone className="mr-2 h-4 w-4" /> 0469 097 690
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="image-lift relative aspect-[4/5]">
              <Image src="/gallery/5.jpg" alt="Roof care project" fill className="object-cover" />
            </div>
            <div className="space-y-4 sm:pt-12">
              <div className="image-lift relative aspect-[5/4]">
                <Image src="/gallery/IMG_3023.jpg" alt="Gutter detail" fill className="object-cover" />
              </div>
              <div className="rounded-lg bg-[#12342d] p-6 text-white">
                <ShieldCheck className="h-8 w-8 text-[#d99a2b]" />
                <p className="mt-4 text-2xl font-black">Insured, tidy and direct.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-default">
          <div className="grid gap-5 md:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-black/10 bg-[#f6f4ef] p-6">
                <value.icon className="h-8 w-8 text-[#0f8a62]" />
                <h2 className="mt-5 text-xl font-black">{value.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
