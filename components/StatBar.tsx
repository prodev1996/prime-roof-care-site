'use client';

import { motion } from 'framer-motion';
import { Hammer, ShieldCheck, MapPin } from 'lucide-react';

export default function StatBar() {
  const stats = [
    {
      icon: Hammer,
      title: '5+ yrs experience',
      desc: 'Roof cleaning • repairs • coating',
      accent:
        'bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-[0_16px_32px_rgba(0,0,0,0.2)]',
    },
    {
      icon: ShieldCheck,
      title: 'Insured',
      desc: 'Respectful, tidy, professional',
      accent:
        'bg-gradient-to-br from-emerald-500 to-teal-400 text-white shadow-[0_16px_32px_rgba(16,185,129,0.4)]',
    },
    {
      icon: MapPin,
      title: 'Aldinga Beach based',
      desc: 'Servicing Adelaide & SA',
      accent:
        'bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-[0_16px_32px_rgba(56,189,248,0.4)]',
    },
  ];

  return (
    <section className="bg-white border-y border-slate-200/80">
      <div className="container-default py-12 grid gap-10 sm:grid-cols-3 text-center text-slate-700 text-sm">
        {stats.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.12, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{
              y: -4,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col items-center gap-3"
          >
            {/* icon bubble */}
            <div
              className={
                'h-12 w-12 rounded-xl flex items-center justify-center ring-1 ring-black/10 ' +
                item.accent
              }
            >
              <item.icon className="h-5 w-5" />
            </div>

            {/* title */}
            <div className="text-slate-900 text-lg font-semibold leading-tight tracking-tight">
              {item.title}
            </div>

            {/* desc */}
            <div className="text-slate-500 text-xs leading-relaxed max-w-[14rem]">
              {item.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
