"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Paintbrush,
  Sparkles,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Gutter Cleaning",
    desc: "Leaves, sludge and downpipe blockages cleared so rainwater drains away from fascia, walls and foundations.",
    href: "/services/gutter-cleaning",
    accent: "bg-sky-50 text-sky-700 border-sky-100",
  },
  {
    icon: Sparkles,
    title: "Roof Cleaning",
    desc: "High-pressure cleaning removes moss, lichen, salt and grime, lifting street appeal and preparing surfaces for coating.",
    href: "/services/roof-cleaning",
    accent: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    icon: Wrench,
    title: "Roof Restoration",
    desc: "Cracked tiles, ridge caps, leaks and surface issues repaired before sealing, coating or finishing work begins.",
    href: "/services/roof-restoration",
    accent: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    icon: Paintbrush,
    title: "Roof Painting / Coating",
    desc: "Professional recoating for a modern, even finish across concrete tile, terracotta and metal roofs.",
    href: "/services/roof-painting",
    accent: "bg-rose-50 text-rose-700 border-rose-100",
  },
];

export default function ServiceCards() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
    >
      {services.map((service) => (
        <motion.div
          key={service.title}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
          }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
        >
          <Link
            href={service.href}
            className="relative block h-full rounded-lg border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-emerald-200 hover:shadow-[0_18px_38px_rgba(15,23,42,0.10)]"
          >
            <div
              className={`relative mb-6 flex h-12 w-12 items-center justify-center rounded-lg border ${service.accent}`}
            >
              <service.icon className="h-6 w-6" />
            </div>

            <h3 className="mb-3 text-lg font-semibold tracking-tight text-slate-900">
              {service.title}
            </h3>

            <p className="text-sm leading-relaxed text-slate-600">
              {service.desc}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
              Learn more
              <ArrowRight size={15} />
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
