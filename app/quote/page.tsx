'use client';

import { motion } from 'framer-motion';
import QuoteForm from '@/components/QuoteForm';

export default function QuotePage() {
  return (
    <section className="bg-slate-50 min-h-[85vh] flex items-center py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 w-full">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Request a <span className="text-emerald-600">Fast Quote</span>
          </h1>
          <p className="mt-3 text-slate-600 text-lg max-w-2xl mx-auto">
            Tell us about your roof, gutters, or leak. We’ll get back to you
            quickly — no obligation, no pressure.
          </p>
        </motion.div>

        {/* Animated Quote Form */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        >
          <QuoteForm />
        </motion.div>
      </div>
    </section>
  );
}
