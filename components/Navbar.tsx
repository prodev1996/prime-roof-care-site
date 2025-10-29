'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40">
      {/* subtle background / glass bar */}
      <div className="bg-white/70 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
        <div className="container-default flex items-center justify-between py-3 md:py-4">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Prime Roof Care"
                width={44}
                height={44}
                className="rounded-xl bg-white border border-slate-200 shadow-[0_12px_28px_rgba(0,0,0,0.08)] object-contain p-1"
              />
              {/* tiny green dot = 'active / local' style */}
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white shadow-[0_8px_16px_rgba(16,185,129,0.6)]" />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-slate-900 font-extrabold text-base sm:text-lg tracking-tight group-hover:text-slate-950 transition-colors">
                Prime Roof Care
              </span>
              <span className="text-[11px] text-slate-500 -mt-0.5">
                Aldinga Beach • SA
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/services">Services</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/gallery">Gallery</NavItem>
            <NavItem href="/contact">Contact</NavItem>

            <Link
              href="/quote"
              className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center"
            >
              <span className="relative">
                Get a Quote
                <span className="absolute -top-2 -right-3 text-[9px] font-bold text-emerald-600 bg-emerald-100 border border-emerald-300 rounded px-1 leading-[14px] shadow-[0_6px_16px_rgba(16,185,129,0.4)]">
                  NEW
                </span>
              </span>
            </Link>
          </nav>

          {/* Desktop phone pill */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="tel:0469097690"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-4 py-2 text-sm shadow-[0_18px_32px_rgba(16,185,129,0.4)] ring-1 ring-emerald-600/40 transition"
          >
            <span className="leading-none">0469&nbsp;097&nbsp;690</span>
          </motion.a>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            {/* phone icon button for mobile tap-to-call */}
            <motion.a
              whileTap={{ scale: 0.96 }}
              href="tel:0469097690"
              className="inline-flex items-center justify-center rounded-lg bg-white border border-slate-300 text-slate-700 text-[13px] font-semibold px-2.5 py-2 shadow-[0_10px_20px_rgba(0,0,0,0.07)]"
            >
              Call
            </motion.a>

            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 text-white text-[13px] font-semibold px-2.5 py-2 shadow-[0_18px_32px_rgba(16,185,129,0.4)] ring-1 ring-emerald-600/40"
            >
              Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// small helper component for nav links so they all share the same hover style
function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-slate-600 hover:text-slate-900 transition-colors"
    >
      <span className="relative z-10">{children}</span>
      {/* underline hover accent */}
      <span className="absolute left-0 right-0 -bottom-1 h-[2px] scale-x-0 bg-emerald-500 transition-transform duration-200 origin-left hover:scale-x-100 rounded-full" />
    </Link>
  );
}
