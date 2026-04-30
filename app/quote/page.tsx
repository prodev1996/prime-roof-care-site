"use client";

import { motion } from "framer-motion";
import QuoteForm from "@/components/QuoteForm";

export default function QuotePage() {
  return (
    <section className="flex min-h-[85vh] items-center bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="badge-soft">Fast quote request</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Tell us what your roof needs.
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
            Share the location, service and job details. We will respond with
            the next step for Adelaide, Melbourne or Tasmania.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <QuoteForm />
        </motion.div>
      </div>
    </section>
  );
}
