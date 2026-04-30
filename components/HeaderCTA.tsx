import { Camera, CheckCircle, Clock, ShieldCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Insured roof care" },
  { icon: Camera, label: "Project photos available" },
  { icon: Clock, label: "Quick quote response" },
  { icon: CheckCircle, label: "Clean site finish" },
];

export default function HeaderCTA() {
  return (
    <section className="border-y border-black/10 bg-white">
      <div className="container-default grid gap-0 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-3 border-b border-black/10 px-4 py-5 text-sm font-black text-[#14201d] md:border-b-0 md:border-r last:md:border-r-0"
          >
            <item.icon className="h-5 w-5 text-[#0f8a62]" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
