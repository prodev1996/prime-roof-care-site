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
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Get a Quote" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0e211d] text-white">
      <div className="container-default grid gap-10 py-14 md:grid-cols-[1.25fr_0.75fr_0.75fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-16 w-24 items-center justify-center overflow-hidden rounded-lg bg-white px-2">
              <Image
                src="/logo.png"
                alt="Prime Roof Care Logo"
                width={104}
                height={58}
                className="object-contain"
              />
            </span>
            <div>
              <h3 className="text-xl font-black">Prime Roof Care</h3>
              <p className="mt-1 text-sm font-semibold text-white/60">
                Adelaide / Melbourne / Tasmania
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
            Roof cleaning, gutter cleaning, restorations, repairs and roof
            coating with clear scopes, tidy work and project-focused
            communication.
          </p>

          <div className="mt-6 grid gap-3 text-sm font-semibold text-white/75 sm:grid-cols-2">
            <a href="mailto:primeroofcare@gmail.com" className="flex items-center gap-3 hover:text-[#d99a2b]">
              <Mail className="h-4 w-4" />
              primeroofcare@gmail.com
            </a>
            <a href="tel:0469097690" className="flex items-center gap-3 hover:text-[#d99a2b]">
              <Phone className="h-4 w-4" />
              0469 097 690
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4" />
              Adelaide, Melbourne, Tasmania
            </div>
            <a
              href="https://wa.me/61469097690?text=Hi!%20I%27d%20like%20a%20roof%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#d99a2b]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-black text-[#d99a2b]">Services</h4>
          <ul className="mt-4 space-y-3 text-sm font-semibold text-white/65">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="hover:text-white">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black text-[#d99a2b]">Company</h4>
          <ul className="mt-4 space-y-3 text-sm font-semibold text-white/65">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 text-xs">
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>{" "}
              /{" "}
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-default flex flex-col gap-2 py-5 text-xs font-semibold text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {year} Prime Roof Care. All rights reserved.</p>
          <p>Built for roof care across Adelaide, Melbourne and Tasmania.</p>
        </div>
      </div>
    </footer>
  );
}
