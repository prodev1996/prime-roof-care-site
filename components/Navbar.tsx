"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, ShieldCheck, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Before & After", href: "/before-after" },
  { name: "Gallery", href: "/gallery" },
  { name: "Areas", href: "/areas" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#12342d] text-white">
        <div className="container-default flex items-center justify-center gap-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-50 md:justify-between">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#d99a2b]" />
            Adelaide - Victoria - Tasmania
          </span>
          <span className="hidden text-white/70 md:inline">
            Roof cleaning / gutters / restorations / coatings
          </span>
        </div>
      </div>

      <div className={scrolled ? "bg-white/96 shadow-[0_18px_45px_rgba(20,32,29,0.12)] backdrop-blur" : "bg-white/92 backdrop-blur"}>
        <div className="container-default flex items-center justify-between gap-4 py-2">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-12 w-20 items-center justify-center overflow-hidden rounded-lg border border-black/10 bg-white px-1.5 shadow-sm">
              <Image
                src="/logo.png"
                alt="Prime Roof Care"
                width={96}
                height={54}
                className="object-contain"
                priority
              />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-[15px] font-black text-[#14201d] lg:text-base">
                Prime Roof Care
              </span>
              <span className="block text-[11px] font-semibold text-slate-500 lg:text-xs">
                Roof care with a clean finish
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 rounded-full border border-black/10 bg-[#f6f4ef] p-1 lg:flex">
            {navLinks.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-[13px] font-bold transition xl:px-4 xl:text-sm ${
                    active
                      ? "bg-white text-[#12342d] shadow-sm"
                      : "text-slate-600 hover:bg-white/70 hover:text-[#12342d]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a href="tel:0469097690" className="btn-secondary min-h-10 px-3.5 py-2 text-sm">
              <Phone size={16} className="mr-2" />
              0469 097 690
            </a>
            <Link href="/quote" className="btn-primary min-h-10 px-4 py-2 text-sm">
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-black/10 bg-white text-[#14201d] shadow-sm lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-black/10 bg-white pb-4 pt-2 lg:hidden">
            <div className="container-default flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-[#f6f4ef]"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-2"
              >
                Get a Quote
              </Link>
              <a href="tel:0469097690" className="btn-secondary">
                <Phone size={16} className="mr-2" />
                0469 097 690
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
