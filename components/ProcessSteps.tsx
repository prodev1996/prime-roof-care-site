"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Home, Sparkles } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Inspect and document",
    text: "We check gutters, tiles, ridge caps, coatings, flashing and leaks, then explain what needs attention.",
    accent: "bg-emerald-600",
  },
  {
    icon: Home,
    title: "Repair before finishing",
    text: "Cracked tiles, blocked gutters, loose caps and failed sealant are handled before cleaning or coating.",
    accent: "bg-sky-600",
  },
  {
    icon: Sparkles,
    title: "Clean and finish",
    text: "High-pressure cleaning, sealing and professional roof coatings improve presentation and help protect the roof.",
    accent: "bg-amber-500",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-white py-20">
      <div className="container-default">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            A roof care process built around prevention.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Your roof is a system. We work from drainage and defects through to
            cleaning and coating, so the finished result has a practical reason.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.16 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative rounded-lg border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:bg-white hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div
                className={`relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg ${step.accent} shadow-lg`}
              >
                <step.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
