"use client";

import { motion } from "framer-motion";
import { Camera, CheckCircle, Clock, ShieldCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Insured roof care" },
  { icon: Camera, label: "Project photos available" },
  { icon: Clock, label: "Quick quote response" },
  { icon: CheckCircle, label: "Clean site finish" },
];

export default function HeaderCTA() {
  return (
    <section className="border-y border-black/10 bg-white">
      <div className="container-default grid gap-0 md:grid-cols-4">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group flex items-center justify-center gap-3 border-b border-black/10 px-4 py-5 text-sm font-black text-[#14201d] transition hover:bg-[#f6f4ef] md:border-b-0 md:border-r last:md:border-r-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-[#0f8a62] transition group-hover:bg-[#12342d] group-hover:text-[#d99a2b]">
              <item.icon className="h-5 w-5" />
            </span>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
