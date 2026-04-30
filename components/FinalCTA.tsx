import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-[#14201d] py-16 text-white">
      <div className="container-default">
        <div className="grid gap-8 rounded-lg border border-white/15 bg-white/8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d99a2b]">
              Ready when the roof is not
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Send the job details. We will take it from there.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">
              Quotes available across Adelaide, Melbourne and Tasmania for roof
              cleaning, gutters, repairs, restoration and coating.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/quote" className="btn-primary bg-[#d99a2b] text-[#14201d] hover:bg-white">
              Request a Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <a href="tel:0469097690" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/15">
              <PhoneCall size={18} className="mr-2 text-[#d99a2b]" />
              0469 097 690
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
