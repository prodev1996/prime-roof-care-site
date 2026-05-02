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
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

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
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(9,32,27,0.98)_0%,rgba(18,52,45,0.90)_46%,rgba(18,52,45,0.30)_78%,rgba(9,32,27,0.78)_100%)]" />
      <div className="absolute inset-0 premium-grid opacity-55" />

      <div className="container-default relative flex min-h-[690px] flex-col justify-between pb-6 pt-12 sm:pt-16 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.78fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-50 shadow-[0_16px_38px_rgba(0,0,0,0.18)] backdrop-blur">
              <ClipboardCheck size={15} className="text-[#d99a2b]" />
              Adelaide - Victoria - Tasmania
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Cleaner roofs. Sharper homes.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-emerald-50/90 sm:text-lg">
              Roof cleaning, gutter care, restorations and coatings delivered
              with clear quote scopes, tidy work and real project photos.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="btn-primary bg-[#d99a2b] text-[#14201d] hover:bg-white">
                Get a Fast Quote
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <a href="tel:0469097690" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 bg-white/12 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20">
                <PhoneCall size={18} className="mr-2 text-[#d99a2b]" />
                0469 097 690
              </a>
            </div>

            <div className="mt-7 grid gap-3 text-sm font-semibold text-white/90 sm:grid-cols-3">
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
            className="hidden lg:block"
          >
            <motion.div
              className="ml-auto max-w-[520px]"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <BeforeAfterSlider
                before="/gallery/job2-before.jpg"
                after="/gallery/job2-after.jpg"
                title="Roof edge clean-up"
                location="Before / after proof"
                detail="A cleaner roof line and gutter edge, shown with real project photos."
                aspect="aspect-[5/3]"
                compact
                priority
              />
            </motion.div>

            <motion.div
              className="ml-auto mt-4 grid max-w-[520px] grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
            >
              {["Adelaide", "Victoria", "Tasmania"].map((area) => (
                <Link
                  key={area}
                  href="/areas"
                  className="rounded-lg border border-white/15 bg-white/[0.08] px-4 py-3 text-sm font-black text-white shadow-[0_18px_42px_rgba(0,0,0,0.16)] backdrop-blur transition hover:bg-white/15"
                >
                  {area}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.25 }}
          className="mt-10 grid overflow-hidden rounded-lg border border-white/20 bg-white/12 shadow-[0_22px_60px_rgba(0,0,0,0.16)] backdrop-blur md:grid-cols-4"
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
