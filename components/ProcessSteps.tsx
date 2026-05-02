"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, ClipboardCheck, ShieldCheck, Sparkles } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Inspect",
    text: "Roof, gutters, ridge caps, flashings and problem areas are checked before recommendations are made.",
  },
  {
    icon: Camera,
    title: "Show",
    text: "The scope stays plain-English with photos where useful, so the condition is easy to understand.",
  },
  {
    icon: ShieldCheck,
    title: "Repair",
    text: "Cracked tiles, failed sealant, blocked drainage and loose capping are handled before finishing work.",
  },
  {
    icon: Sparkles,
    title: "Finish",
    text: "Cleaning, coating and cleanup are completed with a focus on street appeal and property protection.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-[#12342d] py-20 text-white">
      <div className="absolute inset-0 premium-grid opacity-35" />
      <div className="container-default relative">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#d99a2b]">
              Process
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              A sharper roof result, handled in the right order.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-emerald-50/80">
              A good finish starts before any washing or coating begins. The
              roof is checked, explained, repaired where needed and cleaned up
              properly before the job is called done.
            </p>
            <div className="mt-8 hidden overflow-hidden rounded-lg border border-white/15 bg-white/10 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.22)] lg:block">
              <div className="image-sheen relative aspect-[5/3] overflow-hidden rounded-lg">
                <Image
                  src="/gallery/WhatsApp Image 2026-05-02 at 6.47.41 PM.jpeg"
                  alt="Prime Roof Care detail work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-lg border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:bg-white/15"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#d99a2b] text-[#14201d]">
                    <step.icon size={22} />
                  </span>
                  <span className="font-mono text-sm font-black text-white/35">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-emerald-50/75">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
