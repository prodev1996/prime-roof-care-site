"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Droplets,
  Paintbrush,
  Sparkles,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    number: "01",
    title: "Gutter Cleaning",
    desc: "Blocked gutters cleared, downpipes checked and debris removed so water moves away from the building.",
    href: "/services/gutter-cleaning",
    color: "bg-sky-100 text-sky-800",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Roof Cleaning",
    desc: "Moss, lichen, grime and salt washed away with a careful process suited to tile and metal roof profiles.",
    href: "/services/roof-cleaning",
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Roof Restoration",
    desc: "Defects repaired before finishing, including cracked tiles, ridge caps, sealant issues and surface prep.",
    href: "/services/roof-restoration",
    color: "bg-amber-100 text-amber-800",
  },
  {
    icon: Paintbrush,
    number: "04",
    title: "Roof Coating",
    desc: "Primer, sealer and topcoat systems selected for the roof material and applied for a crisp finish.",
    href: "/services/roof-painting",
    color: "bg-rose-100 text-rose-800",
  },
];

export default function ServiceCards() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
    >
      {services.map((service) => (
        <motion.div
          key={service.title}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
          }}
          whileHover={{ y: -8 }}
        >
          <Link
            href={service.href}
            className="group block h-full rounded-lg border border-black/10 bg-white p-6 shadow-[0_18px_45px_rgba(20,32,29,0.08)] transition duration-300 hover:border-emerald-800/20 hover:shadow-[0_28px_70px_rgba(20,32,29,0.15)]"
          >
            <div className="flex items-start justify-between gap-5">
              <span className={`flex h-12 w-12 items-center justify-center rounded-lg ${service.color}`}>
                <service.icon size={23} />
              </span>
              <span className="font-mono text-sm font-black text-black/20">
                {service.number}
              </span>
            </div>

            <h3 className="mt-8 text-xl font-black tracking-tight text-[#14201d]">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {service.desc}
            </p>

            <div className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#0f8a62]">
              View details
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
