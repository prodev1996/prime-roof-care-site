import { CheckCircle, Clock, ShieldCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Insured work" },
  { icon: Clock, label: "Fast quote response" },
  { icon: CheckCircle, label: "Clean, respectful sites" },
];

export default function HeaderCTA() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="container-default grid gap-4 py-5 text-center text-xs text-slate-700 sm:grid-cols-3 sm:text-sm">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-center gap-2">
            <item.icon className="h-4 w-4 text-emerald-600" />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
