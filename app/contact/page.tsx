import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const contact = [
  { icon: Phone, label: "Phone", value: "0469 097 690", href: "tel:0469097690" },
  { icon: Mail, label: "Email", value: "primeroofcare@gmail.com", href: "mailto:primeroofcare@gmail.com" },
  { icon: MapPin, label: "Operating areas", value: "Adelaide, Melbourne and Tasmania" },
];

export default function ContactPage() {
  return (
    <section className="bg-[#f6f4ef] py-16 text-[#14201d]">
      <div className="container-default grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight">
            Tell us what is happening on the roof.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Send a message about cleaning, gutters, leaks, restoration or
            coating work across Adelaide, Melbourne or Tasmania.
          </p>

          <div className="mt-8 space-y-3">
            {contact.map((item) => (
              <div key={item.label} className="rounded-lg border border-black/10 bg-white p-5">
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.12em] text-[#0f8a62]">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} className="mt-2 block text-lg font-black text-[#14201d]">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-black text-[#14201d]">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
