import { ShieldCheck, Clock, CheckCircle } from 'lucide-react';

export default function HeaderCTA() {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="container-default py-6 grid gap-4 sm:grid-cols-3 text-center text-xs sm:text-sm text-slate-600">
        <div className="flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span>Insured</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Clock className="h-4 w-4 text-sky-600" />
          <span>Fast on-site quotes</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <CheckCircle className="h-4 w-4 text-emerald-600" />
          <span>Respectful & tidy</span>
        </div>
      </div>
    </section>
  );
}
