"use client";

import { motion } from "framer-motion";
import { Hammer, MapPin, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Hammer,
    title: "Roof system focus",
    desc: "Gutters, tiles, leaks, cleaning and coatings",
    accent: "bg-slate-900 text-white shadow-[0_16px_32px_rgba(15,23,42,0.2)]",
  },
  {
    icon: ShieldCheck,
    title: "Insured and tidy",
    desc: "Practical protection for your property",
    accent: "bg-emerald-600 text-white shadow-[0_16px_32px_rgba(5,150,105,0.22)]",
  },
  {
    icon: MapPin,
    title: "Three regions",
    desc: "Adelaide, Melbourne and Tasmania",
    accent: "bg-sky-600 text-white shadow-[0_16px_32px_rgba(2,132,199,0.22)]",
  },
];

export default function StatBar() {
  return (
    <section className="border-y border-slate-200/80 bg-white">
      <div className="container-default grid gap-8 py-12 text-center text-sm text-slate-700 sm:grid-cols-3">
        {stats.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.12, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6"
          >
            <div
              className={
                "flex h-12 w-12 items-center justify-center rounded-lg ring-1 ring-black/10 " +
                item.accent
              }
            >
              <item.icon className="h-5 w-5" />
            </div>
            <div className="text-lg font-semibold leading-tight tracking-tight text-slate-900">
              {item.title}
            </div>
            <div className="max-w-[14rem] text-xs leading-relaxed text-slate-500">
              {item.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
