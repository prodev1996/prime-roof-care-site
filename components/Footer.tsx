'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const SERVICES = [
  { href: '/services/gutter-cleaning', label: 'Gutter Cleaning' },
  { href: '/services/roof-cleaning', label: 'Roof Cleaning' },
  { href: '/services/roof-restoration', label: 'Roof Restoration' },
  { href: '/services/roof-painting', label: 'Roof Painting / Coating' },
];

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
  { href: '/quote', label: 'Get a Quote' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/60 backdrop-blur">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-200/25 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" />
      </div>

      {/* Main footer content */}
      <div className="container-default py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo + About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Prime Roof Care Logo"
                width={56}
                height={56}
                className="rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-card object-contain"
              />
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Prime Roof Care
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Aldinga Beach • South Australia
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 max-w-md">
              Local, insured and respectful. We provide honest quotes, proper
              repairs, and clean finishes across Adelaide.
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <a
                href="mailto:primeroofcare@gmail.com"
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition"
              >
                <Mail className="h-4 w-4" />
                primeroofcare@gmail.com
              </a>

              <a
                href="tel:0469097690"
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition"
              >
                <Phone className="h-4 w-4" /> 0469 097 690
              </a>

              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <MapPin className="h-4 w-4" /> Aldinga Beach, SA
              </div>

              <a
                href="https://wa.me/61469097690?text=Hi!%20I%27d%20like%20a%20roof%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              Services
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              Company
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1 text-xs text-slate-500 dark:text-slate-500">
                <Link href="/privacy" className="hover:text-emerald-600">
                  Privacy Policy
                </Link>{' '}
                ·{' '}
                <Link href="/terms" className="hover:text-emerald-600">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="container-default py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {year} Prime Roof Care. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Website built in Adelaide • Crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
}
