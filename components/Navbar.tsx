'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Glassy header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 to-white/5 dark:from-slate-900/40 dark:to-slate-900/10" />
        <div className="container-default flex items-center justify-between py-3">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Prime Roof Care"
              width={42}
              height={42}
              className="rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-card object-contain"
            />
            <div className="leading-tight">
              <span className="font-bold tracking-tight text-lg text-slate-900 dark:text-white">
                Prime Roof Care
              </span>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 -mt-0.5">
                Aldinga Beach • SA
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-underline text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/quote"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 dark:text-emerald-300 dark:bg-emerald-900/40 dark:hover:bg-emerald-900/60 transition shadow-card"
            >
              Get a Quote
            </Link>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href="tel:0469097690"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-4 py-2 text-sm shadow-card transition"
            >
              <Phone size={16} />
              0469&nbsp;097&nbsp;690
            </motion.a>
          </nav>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <motion.a
              whileTap={{ scale: 0.98 }}
              href="tel:0469097690"
              aria-label="Call"
              className="rounded-lg p-2 bg-emerald-500/90 text-white shadow-card"
            >
              <Phone size={18} />
            </motion.a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="rounded-lg p-2 bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-card"
            >
              <Menu size={20} className="text-slate-800 dark:text-slate-100" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-slate-900/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.aside
              className="fixed top-0 inset-x-0 z-50 rounded-b-3xl bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-2xl"
              initial={{ y: -36, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -36, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <div className="container-default py-3 flex items-center justify-between">
                <div className="font-semibold">Menu</div>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 border border-slate-200 dark:border-slate-700"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="container-default pb-5">
                <ul className="flex flex-col gap-2">
                  {NAV.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block w-full rounded-xl px-4 py-3 text-base font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-1 grid grid-cols-2 gap-2">
                    <Link
                      href="/quote"
                      onClick={() => setOpen(false)}
                      className="btn-primary text-center"
                    >
                      Get a Quote
                    </Link>
                    <a
                      href="tel:0469097690"
                      className="btn-secondary text-center"
                    >
                      Call
                    </a>
                  </li>
                </ul>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
