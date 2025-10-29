'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, Home, Sparkles } from 'lucide-react';

export default function ProcessSteps() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: '1. Inspect & explain',
      text: 'We check gutters, tiles, ridge caps, coatings, and leaks. You’ll see the real issues — no scare tactics or jargon.',
      accent: 'from-emerald-500 to-emerald-400',
    },
    {
      icon: Home,
      title: '2. Repair & protect',
      text: 'We fix cracked tiles, blocked gutters, loose caps, failed sealant — properly — before any coatings or finishing.',
      accent: 'from-blue-500 to-sky-400',
    },
    {
      icon: Sparkles,
      title: '3. Clean & finish',
      text: 'High-pressure cleaning, sealing, and professional roof coatings to boost street appeal and extend life.',
      accent: 'from-amber-500 to-yellow-400',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
      <div className="container-default">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold tracking-tight">
            How we look after your roof
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed text-base sm:text-lg">
            Your roof protects your whole home. We treat it with the care and respect it deserves.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative p-8 rounded-2xl bg-white shadow-[0_16px_40px_rgba(0,0,0,0.05)] border border-slate-200 hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] transition-all duration-300"
            >
              {/* Gradient accent ring */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.accent} opacity-10`}
              ></div>

              {/* Icon bubble */}
              <div
                className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.accent} shadow-lg mb-5`}
              >
                <step.icon className="text-white w-6 h-6" />
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
