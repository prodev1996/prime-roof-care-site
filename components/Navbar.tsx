"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* thin gradient strip */}
      <div className="h-[3px] w-full bg-gradient-to-r from-emerald-400 via-blue-300 to-emerald-500" />
      <div
        className={`backdrop-blur transition-all ${
          scrolled ? "bg-white/90 shadow-sm" : "bg-white/70"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-6">
          {/* Logo + brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-16 w-28 items-center justify-center rounded-xl bg-white px-2 shadow-sm ring-1 ring-slate-100 overflow-hidden">
              <Image
                src="/logo.png"
                alt="Prime Roof Care"
                width={110}
                height={60}
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="text-base font-semibold text-slate-900">
                Prime Roof Care
              </p>
              <p className="text-xs text-slate-500">South Australia</p>
              <p className="text-[10px] uppercase tracking-wide text-slate-400">
                YOUR ROOF, OUR RESPONSIBILITY
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-emerald-400" />
                )}
              </Link>
            );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/quote"
              className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-50 transition hover:bg-emerald-100"
            >
              Get a Quote
            </Link>
            <a
              href="tel:0469097690"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-600"
            >
              <Phone size={16} />
              0469 097 690
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full bg-white p-2 text-slate-700 shadow-sm ring-1 ring-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="border-t bg-white/95 pb-4 pt-2 shadow-sm md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4">
              {navLinks.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-lg px-2 py-2 text-sm font-medium hover:bg-slate-50 ${
                      isActive ? "text-slate-900" : "text-slate-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-100"
              >
                Get a Quote
              </Link>
              <a
                href="tel:0469097690"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
              >
                <Phone size={16} />
                0469 097 690
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
