"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Respectful and tidy",
    text: "We protect driveways, gardens, solar, gutters and paintwork, then leave the site clean.",
  },
  {
    icon: ShieldCheck,
    title: "Straight answers",
    text: "You see the issues, the options and the trade-offs before committing to the work.",
  },
  {
    icon: Wrench,
    title: "Root-cause fixes",
    text: "Leaks and blockages are handled properly before cosmetic cleaning or coating work begins.",
  },
  {
    icon: MapPin,
    title: "Wider coverage",
    text: "Now operating in Adelaide, Melbourne and Tasmania for residential and property work.",
  },
];

export default function AboutPage() {
  return (
    <section className="bg-slate-50 py-16 text-slate-900">
      <div className="container-default grid max-w-6xl gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="badge-soft">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Prime Roof Care
          </div>

          <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 md:text-4xl">
            Professional roof work with clear communication from start to finish.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Prime Roof Care exists for homeowners and property managers who want
            the job explained clearly and completed properly. We focus on the
            practical details that keep a roof working: drainage, cracked tiles,
            ridge caps, leaks, moss, lichen and protective coatings.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="card-surface p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-card">
                  <Wrench className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Roof system care</div>
                  <div className="text-sm text-slate-500">Cleaning, repairs, coating</div>
                </div>
              </div>
            </div>

            <div className="card-surface p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-card">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Insured</div>
                  <div className="text-sm text-slate-500">Respectful and tidy</div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-base leading-relaxed text-slate-600">
            The business now operates in Adelaide, Melbourne and Tasmania, with
            quotes available for gutter cleaning, roof cleaning, leak tracing,
            restoration and roof painting.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/quote" className="btn-primary">
              Get a fast quote
            </a>
            <a href="tel:0469097690" className="btn-secondary inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> 0469 097 690
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-surface h-fit p-6 sm:p-8"
        >
          <div className="text-lg font-semibold text-slate-900">
            Why customers choose Prime Roof Care
          </div>

          <ul className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600">
            {values.map((value) => (
              <li key={value.title} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50">
                  <value.icon className="h-4 w-4 text-emerald-600" />
                </span>
                <p>
                  <span className="font-medium text-slate-900">{value.title}:</span>{" "}
                  {value.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href="/services" className="btn-secondary">
              See our services
            </a>
            <a href="/quote" className="btn-primary">
              Request a quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
