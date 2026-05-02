"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Paintbrush,
  PhoneCall,
  Sparkles,
  Wrench,
} from "lucide-react";

const services = [
  { icon: Droplets, label: "Gutter cleaning" },
  { icon: Sparkles, label: "Roof washing" },
  { icon: Wrench, label: "Restoration" },
  { icon: Paintbrush, label: "Coating" },
];

const proof = [
  "Photo-backed inspections",
  "Tidy site finish",
  "Quotes across SA, Victoria and TAS",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[780px] overflow-hidden bg-[#12342d] text-white">
      <Image
        src="/hero-roof.jpg"
        alt="Prime Roof Care roof cleaning and restoration"
        fill
        className="object-cover opacity-55"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,52,45,0.94),rgba(18,52,45,0.70)_45%,rgba(18,52,45,0.16))]" />
      <div className="absolute inset-0 grain-overlay opacity-70" />

      <div className="container-default relative flex min-h-[780px] flex-col justify-between pb-8 pt-20 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-50 backdrop-blur">
              <ClipboardCheck size={15} className="text-[#d99a2b]" />
              Adelaide / Victoria / Tasmania
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.96] tracking-tight sm:text-7xl lg:text-8xl">
              Roof care that looks sharp and lasts.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/90 sm:text-xl">
              Cleaning, gutters, leak checks, restorations and coatings handled
              by a tidy roof care team with clear scopes and real project
              photos.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="btn-primary bg-[#d99a2b] text-[#14201d] hover:bg-white">
                Get a Fast Quote
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <a href="tel:0469097690" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 bg-white/12 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20">
                <PhoneCall size={18} className="mr-2 text-[#d99a2b]" />
                0469 097 690
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-white/90 sm:grid-cols-3">
              {proof.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="shrink-0 text-[#d99a2b]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            className="hidden lg:block"
          >
            <div className="ml-auto max-w-md rounded-lg border border-white/20 bg-white/12 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src="/gallery/job4-after.jpg"
                  alt="Finished roof restoration by Prime Roof Care"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#d99a2b]">
                    Recently completed
                  </p>
                  <p className="mt-1 text-lg font-black">
                    Clean roof, crisp finish, no mess left behind.
                  </p>
                </div>
                <div className="rounded-lg bg-white px-3 py-2 text-right text-[#12342d]">
                  <p className="text-2xl font-black">3</p>
                  <p className="text-[10px] font-bold uppercase tracking-wide">
                    regions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.25 }}
          className="mt-12 grid overflow-hidden rounded-lg border border-white/20 bg-white/12 backdrop-blur md:grid-cols-4"
        >
          {services.map((service) => (
            <Link
              key={service.label}
              href="/services"
              className="group flex items-center gap-3 border-b border-white/15 px-5 py-5 transition hover:bg-white/15 md:border-b-0 md:border-r last:md:border-r-0"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#12342d] transition group-hover:bg-[#d99a2b]">
                <service.icon size={21} />
              </span>
              <span>
                <span className="block text-sm font-black">{service.label}</span>
                <span className="mt-0.5 block text-xs text-white/65">Explore service</span>
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
