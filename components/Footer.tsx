"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const services = [
  { href: "/services/gutter-cleaning", label: "Gutter Cleaning" },
  { href: "/services/roof-cleaning", label: "Roof Cleaning" },
  { href: "/services/roof-restoration", label: "Roof Restoration" },
  { href: "/services/roof-painting", label: "Roof Painting / Coating" },
];

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Get a Quote" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container-default py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Prime Roof Care Logo"
                width={56}
                height={56}
                className="rounded-lg border border-slate-200 bg-white object-contain shadow-card dark:border-slate-700 dark:bg-slate-900"
              />
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Prime Roof Care
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Adelaide, Melbourne and Tasmania
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm text-slate-600 dark:text-slate-400">
              Professional roof and gutter care with honest quotes, practical
              repairs and clean finishes across Adelaide, Melbourne and
              Tasmania.
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <a
                href="mailto:primeroofcare@gmail.com"
                className="flex items-center gap-3 text-slate-600 transition hover:text-emerald-600 dark:text-slate-400"
              >
                <Mail className="h-4 w-4" />
                primeroofcare@gmail.com
              </a>

              <a
                href="tel:0469097690"
                className="flex items-center gap-3 text-slate-600 transition hover:text-emerald-600 dark:text-slate-400"
              >
                <Phone className="h-4 w-4" /> 0469 097 690
              </a>

              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <MapPin className="h-4 w-4" /> Adelaide, Melbourne, Tasmania
              </div>

              <a
                href="https://wa.me/61469097690?text=Hi!%20I%27d%20like%20a%20roof%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-600 transition hover:text-emerald-600 dark:text-slate-400"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              Services
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-slate-600 transition hover:text-emerald-600 dark:text-slate-400"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              Company
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 transition hover:text-emerald-600 dark:text-slate-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1 text-xs text-slate-500 dark:text-slate-500">
                <Link href="/privacy" className="hover:text-emerald-600">
                  Privacy Policy
                </Link>{" "}
                -{" "}
                <Link href="/terms" className="hover:text-emerald-600">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="container-default flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            (c) {year} Prime Roof Care. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Roof care for Adelaide, Melbourne and Tasmania
          </p>
        </div>
      </div>
    </footer>
  );
}
