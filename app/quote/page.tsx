"use client";

import { motion } from "framer-motion";
import QuoteForm from "@/components/QuoteForm";

export default function QuotePage() {
  return (
    <section className="bg-[#f6f4ef] py-16 text-[#14201d]">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <p className="eyebrow">Fast quote request</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            Start with the suburb and the roof issue.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Tell us the region, service and job details. We will respond with
            the next step for Adelaide, Victoria or Tasmania.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <QuoteForm />
        </motion.div>
      </div>
    </section>
  );
}
