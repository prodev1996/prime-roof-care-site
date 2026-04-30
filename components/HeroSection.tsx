"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

const trust = [
  "Insured roof care team",
  "Clear written scopes",
  "Adelaide, Melbourne, Tasmania",
];

const regions = ["Adelaide", "Melbourne", "Tasmania"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero-roof.jpg"
          alt="Prime Roof Care roof restoration work"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-end gap-12 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-100 backdrop-blur">
            <ShieldCheck size={14} />
            Professional roof and gutter care
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl">
            Roof cleaning, restoration and gutter care done properly.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Prime Roof Care helps homeowners and property managers protect the
            whole roof system: gutters, tiles, ridge caps, leaks, coatings and
            finishes. Now operating in Adelaide, Melbourne and Tasmania.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-base font-semibold text-white shadow-[0_24px_48px_rgba(16,185,129,0.28)] ring-1 ring-emerald-300/40 transition hover:bg-emerald-400"
            >
              Get a roof quote
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:0469097690"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-base font-semibold text-white shadow-[0_16px_32px_rgba(0,0,0,0.16)] transition hover:bg-white/15"
            >
              <PhoneCall size={18} className="mr-2 text-emerald-300" />
              0469&nbsp;097&nbsp;690
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
            {trust.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={17} className="shrink-0 text-emerald-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur"
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-200">
            <MapPin size={17} />
            Current operating regions
          </div>

          <div className="mt-5 grid gap-3">
            {regions.map((area) => (
              <div
                key={area}
                className="flex items-center justify-between rounded-lg border border-white/15 bg-white/10 px-4 py-3"
              >
                <span className="font-semibold">{area}</span>
                <span className="text-xs text-slate-300">Quotes available</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-white p-4 text-slate-900">
            <div className="text-sm font-bold">Common requests</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Overflowing gutters, roof leaks, moss and lichen, cracked tiles,
              faded coatings, storm prep and full roof restorations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
