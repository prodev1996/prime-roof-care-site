"use client";

import { motion } from "framer-motion";
import { Camera, MapPin, ShieldCheck, Sparkles } from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    value: "Insured",
    label: "Roof cleaning, gutters, restoration and coating",
  },
  {
    icon: MapPin,
    value: "3 regions",
    label: "Adelaide, Victoria and Tasmania",
  },
  {
    icon: Camera,
    value: "Project photos",
    label: "Before/after project imagery available",
  },
  {
    icon: Sparkles,
    value: "Clean finish",
    label: "Street appeal, drainage and cleanup handled",
  },
];

export default function StatBar() {
  return (
    <section className="roof-lines bg-[#f6f4ef] py-8">
      <div className="container-default grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.value}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group flex items-center gap-4 rounded-lg border border-black/10 bg-white p-5 shadow-[0_18px_45px_rgba(20,32,29,0.08)] transition hover:border-[#0f8a62]/25 hover:shadow-[0_26px_70px_rgba(20,32,29,0.13)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#12342d] text-[#d99a2b] transition group-hover:bg-[#d99a2b] group-hover:text-[#14201d]">
              <item.icon size={22} />
            </div>
            <div>
              <div className="text-2xl font-black leading-none text-[#14201d]">
                {item.value}
              </div>
              <div className="mt-1 text-sm font-semibold leading-snug text-slate-500">
                {item.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
