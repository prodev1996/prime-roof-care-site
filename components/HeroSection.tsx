'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Clock, Sparkles, PhoneCall } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white py-16 sm:py-20">
      {/* soft radial glows behind content */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(16,185,129,.07) 0%, rgba(255,255,255,0) 60%),
            radial-gradient(circle at 80% 0%, rgba(37,99,235,.06) 0%, rgba(255,255,255,0) 60%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT / TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Small top line */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-[11px] font-medium text-slate-700 px-3 py-1 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <span className="inline-flex items-center text-emerald-600">
              <Sparkles size={14} className="mr-1" />
            </span>
            <span className="text-slate-400">|</span>
            <span>20+ years experience on the tools</span>
          </div>

          {/* 🟢 Corrected Main headline (NO SPECIALISTIN BUG) */}
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
            Roof & gutter Specialist
            {/* show break on medium and above */}
            <br className="hidden sm:block" />
            {/* ALWAYS add space, even if break disappears */}
            {' '}in <span className="text-emerald-600">Adelaide.</span>
          </h1>

          {/* Animated service line */}
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-700 leading-snug">
            <span className="text-slate-500 font-normal">We do</span>{' '}
            <span className="text-slate-900">
              <Typewriter
                words={[
                  'Roof Cleaning',
                  'Gutter Cleaning',
                  'Roof Restoration',
                  'Roof Painting',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={35}
                delaySpeed={1600}
              />
            </span>
          </p>

          {/* Body copy */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            Insured. Respectful on-site quotes. No scare tactics,
            no mess. We treat your home like it’s ours.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-base px-5 py-3 shadow-[0_24px_48px_rgba(16,185,129,0.4)] ring-1 ring-emerald-600/40 transition"
            >
              Get My Quote
            </Link>

            <a
              href="tel:0469097690"
              className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold text-base px-5 py-3 border border-slate-300 shadow-[0_16px_32px_rgba(0,0,0,0.07)] hover:bg-slate-50 transition"
            >
              <PhoneCall size={18} className="text-emerald-600 mr-2" />
              0469&nbsp;097&nbsp;690
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[13px] text-slate-600">
            <div className="flex items-start gap-2">
              <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm text-emerald-600">
                <ShieldCheck size={16} />
              </span>
              <div>
                <div className="font-semibold text-slate-900 text-sm">
                  Insured
                </div>
                <div className="text-slate-500 leading-snug">
                  Fully covered, no worries.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm text-emerald-600">
                <Clock size={16} />
              </span>
              <div>
                <div className="font-semibold text-slate-900 text-sm">
                  Fast response
                </div>
                <div className="text-slate-500 leading-snug">
                  Same-day contact.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm text-emerald-600">
                <Sparkles size={16} />
              </span>
              <div>
                <div className="font-semibold text-slate-900 text-sm">
                  Respectful & tidy
                </div>
                <div className="text-slate-500 leading-snug">
                  We leave it clean.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT / IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow / highlight behind photo card */}
          <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-200/30 via-transparent to-transparent blur-3xl rounded-[2rem] pointer-events-none" />

          {/* Main image card */}
          <div className="relative rounded-2xl border border-slate-200 bg-white shadow-[0_32px_80px_-10px_rgba(0,0,0,0.3)] overflow-hidden ring-1 ring-white/60">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/hero-roof.jpg"
                alt="On-roof restoration work in Adelaide"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Bottom strip */}
            <div className="px-5 py-4 bg-white/70 backdrop-blur border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="text-[13px] leading-tight text-slate-700">
                <div className="font-semibold text-slate-900">
                  Roof restoration • SA
                </div>
                <div className="text-slate-500">
                  Local team • No subcontractors
                </div>
              </div>

              <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 border border-emerald-300 rounded-full px-3 py-1 shadow-[0_10px_20px_rgba(16,185,129,0.4)]">
                Family owned
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
