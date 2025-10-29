import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-sm text-slate-600">
      <div className="container-default grid md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <div className="text-slate-900 font-semibold text-lg">
            Prime Roof Care
          </div>
          <div>Aldinga Beach, South Australia</div>
          <div>
            <a className="hover:text-slate-900" href="tel:0469097690">
              0469 097 690
            </a>
          </div>
          <div>
            <a
              className="hover:text-slate-900 break-all"
              href="mailto:primeroofcare@gmail.com"
            >
              primeroofcare@gmail.com
            </a>
          </div>
          <div className="text-[12px] text-slate-500 leading-relaxed pt-2">
            Licensed & insured. Respectful roof care for Adelaide and
            surrounding suburbs.
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-slate-900 font-semibold text-lg">Services</div>
          <ul className="space-y-1">
            <li>
              <Link
                href="/services/gutter-cleaning"
                className="hover:text-slate-900"
              >
                Gutter Cleaning
              </Link>
            </li>
            <li>
              <Link
                href="/services/roof-cleaning"
                className="hover:text-slate-900"
              >
                Roof Cleaning
              </Link>
            </li>
            <li>
              <Link
                href="/services/roof-restoration"
                className="hover:text-slate-900"
              >
                Roof Restoration
              </Link>
            </li>
            <li>
              <Link
                href="/services/roof-painting"
                className="hover:text-slate-900"
              >
                Roof Painting
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <div className="text-slate-900 font-semibold text-lg">Company</div>
          <ul className="space-y-1">
            <li>
              <Link href="/about" className="hover:text-slate-900">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-slate-900">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/quote" className="hover:text-slate-900">
                Request a Quote
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-slate-900">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-default mt-10 text-[11px] text-slate-500 border-t border-slate-200 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>© ${new Date().getFullYear()} Prime Roof Care. All rights reserved.</div>
        <div>Gutter cleaning • Roof cleaning • Restoration • Painting • Adelaide SA</div>
      </div>
    </footer>
  );
}
