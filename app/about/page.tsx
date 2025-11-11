'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Wrench, Phone, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <section className="bg-slate-50 text-slate-900 py-16">
      <div className="container-default max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left — Story */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="badge-soft">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Aldinga Beach • SA
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-5 leading-[1.15]">
            Honest roof work from a local team.
          </h1>

          <p className="text-slate-600 text-base leading-relaxed mt-5">
            Prime Roof Care was started to fix the stuff homeowners hate:
            no-shows, scare tactics, and sloppy clean-ups. We turn up, explain
            what’s actually happening on your roof, and fix it properly — no drama.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="card-surface p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 shadow-card flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-slate-900 font-semibold">5+ yrs experience</div>
                  <div className="text-slate-500 text-sm">Cleaning • repairs • coating</div>
                </div>
              </div>
            </div>

            <div className="card-surface p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 shadow-card flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-slate-900 font-semibold">Licensed & insured</div>
                  <div className="text-slate-500 text-sm">Respectful, tidy, professional</div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-slate-600 text-base leading-relaxed mt-6">
            Based in Aldinga Beach and servicing Adelaide & surrounds. We handle
            gutter cleaning, high-pressure roof cleaning, ridge-cap repointing, leak
            tracing, restorations and recoating — the right work, done once.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/quote" className="btn-primary">Get a fast quote</a>
            <a href="tel:0469097690" className="btn-secondary inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> 0469 097 690
            </a>
          </div>

          <p className="text-slate-500 text-xs mt-4">
            No pressure, no upsell — just straight answers and tidy work.
          </p>
        </motion.div>

        {/* Right — Why Us / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-surface p-6 sm:p-8 h-fit"
        >
          <div className="text-slate-900 font-semibold text-lg">
            Why homeowners choose Prime Roof Care
          </div>

          <ul className="mt-5 space-y-4 text-slate-600 text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-200">
                <Sparkles className="h-4 w-4 text-emerald-600" />
              </span>
              <p>
                <span className="text-slate-900 font-medium">Respectful & tidy:</span>{' '}
                we protect driveways, solar, gutters and paintwork, then leave it clean.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-200">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
              </span>
              <p>
                <span className="text-slate-900 font-medium">Straight answers:</span>{' '}
                you’ll see the issues and options — no scare tactics.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-200">
                <Wrench className="h-4 w-4 text-emerald-600" />
              </span>
              <p>
                <span className="text-slate-900 font-medium">Root-cause fixes:</span>{' '}
                we solve leaks and blockages properly before finishing or coating.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-200">
                <MapPin className="h-4 w-4 text-emerald-600" />
              </span>
              <p>
                <span className="text-slate-900 font-medium">Local & accountable:</span>{' '}
                South Australian owned. Talk to us directly — not a call centre.
              </p>
            </li>
          </ul>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <a href="/services" className="btn-secondary">See our services</a>
            <a href="/quote" className="btn-primary">Request a quote</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
