"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Gauge,
  Paintbrush,
  PhoneCall,
  Sparkles,
  Wrench,
} from "lucide-react";

const services = [
  { icon: Droplets, label: "Gutters", href: "/services/gutter-cleaning" },
  { icon: Sparkles, label: "Cleaning", href: "/services/roof-cleaning" },
  { icon: Wrench, label: "Restoration", href: "/services/roof-restoration" },
  { icon: Paintbrush, label: "Coating", href: "/services/roof-painting" },
];

const proof = [
  "Before/after proof",
  "Clean site finish",
  "Adelaide, Victoria and Tasmania",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#09201b] text-white">
      <Image
        src="/hero-roof.jpg"
        alt="Prime Roof Care roof cleaning and restoration"
        fill
        className="object-cover opacity-50"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(9,32,27,0.98)_0%,rgba(18,52,45,0.92)_42%,rgba(18,52,45,0.35)_76%,rgba(9,32,27,0.82)_100%)]" />
      <div className="absolute inset-0 premium-grid opacity-80" />

      <div className="container-default relative flex min-h-[850px] flex-col justify-between pb-8 pt-16 sm:pt-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-50 shadow-[0_16px_38px_rgba(0,0,0,0.18)] backdrop-blur">
              <ClipboardCheck size={15} className="text-[#d99a2b]" />
              Professional roof care across three regions
            </div>

            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] tracking-tight sm:text-7xl lg:text-[6.6rem]">
              Roofs that look restored, not just cleaned.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/90 sm:text-xl">
              Premium roof cleaning, gutter care, repairs, restorations and
              coatings with real project photos, tidy crews and clear quote
              scopes.
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
              {proof.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.25 + index * 0.08 }}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.08] px-3 py-3 backdrop-blur"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-[#d99a2b]" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            className="relative hidden min-h-[610px] lg:block"
          >
            <motion.div
              className="absolute right-0 top-0 w-[72%] overflow-hidden rounded-lg border border-white/20 bg-white/12 p-3 shadow-[0_34px_90px_rgba(0,0,0,0.35)] backdrop-blur-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="image-sheen relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src="/gallery/job4-after.jpg"
                  alt="Finished roof restoration by Prime Roof Care"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-16 left-0 w-[47%] overflow-hidden rounded-lg border border-white/20 bg-white p-3 text-[#14201d] shadow-[0_28px_70px_rgba(0,0,0,0.28)]"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/gallery/job4-before.jpg"
                  alt="Roof before restoration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Before
                </p>
                <p className="rounded-full bg-[#f6f4ef] px-3 py-1 text-xs font-black">
                  Photo proof
                </p>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-0 right-8 flex w-[54%] items-center gap-4 rounded-lg border border-white/20 bg-[#d99a2b] p-5 text-[#14201d] shadow-[0_28px_70px_rgba(0,0,0,0.28)]"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#14201d] text-white">
                <Gauge size={22} />
              </span>
              <span>
                <span className="block text-3xl font-black leading-none">3</span>
                <span className="mt-1 block text-xs font-black uppercase tracking-[0.14em]">
                  active regions
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.25 }}
          className="mt-12 grid overflow-hidden rounded-lg border border-white/20 bg-white/12 shadow-[0_26px_80px_rgba(0,0,0,0.18)] backdrop-blur md:grid-cols-4"
        >
          {services.map((service) => (
            <Link
              key={service.label}
              href={service.href}
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
