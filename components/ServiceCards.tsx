'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Droplets,
  Sparkles,
  Wrench,
  Paintbrush,
} from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Gutter Cleaning',
    desc: 'We clear out leaves, sludge and blockages so water actually drains — protecting fascia, walls and foundations.',
    href: '/services/gutter-cleaning',
    accent: 'from-sky-500 to-cyan-400',
  },
  {
    icon: Sparkles,
    title: 'Roof Cleaning',
    desc: 'High-pressure cleaning removes moss, lichen, salt and grime. Instantly lifts street appeal and prepares for coating.',
    href: '/services/roof-cleaning',
    accent: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Wrench,
    title: 'Roof Restoration',
    desc: 'We repair cracked tiles, ridge caps and leaks, then seal and protect the roof so it keeps doing its job.',
    href: '/services/roof-restoration',
    accent: 'from-amber-500 to-yellow-400',
  },
  {
    icon: Paintbrush,
    title: 'Roof Painting / Coating',
    desc: 'Professional roof recoating for a modern, even finish that lasts in South Australian weather.',
    href: '/services/roof-painting',
    accent: 'from-rose-500 to-pink-400',
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
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
    >
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
          <Link
            href={s.href}
            className="relative block bg-white rounded-2xl border border-slate-200 p-8 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] transition-all duration-300"
          >
            {/* Gradient accent overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-5 rounded-2xl`}
            ></div>

            {/* Icon */}
            <div
              className={`relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} shadow-lg mb-6`}
            >
              <s.icon className="text-white w-6 h-6" />
            </div>

            {/* Title */}
            <h3 className="text-slate-900 font-semibold text-lg tracking-tight mb-3">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed">
              {s.desc}
            </p>

            {/* CTA */}
            <div className="mt-6 text-emerald-600 font-medium text-sm group-hover:underline">
              Learn more →
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
