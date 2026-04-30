import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="bg-slate-50 py-16 text-slate-900">
      <div className="container-default grid gap-10 lg:grid-cols-2">
        <div>
          <p className="badge-soft">Contact</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight">
            Contact Prime Roof Care
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Call us or send a message about roof cleaning, gutter cleaning,
            leak investigation, restoration or roof coating in Adelaide,
            Melbourne or Tasmania.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <div>
              <div className="text-slate-500">Phone</div>
              <a className="text-lg font-medium text-slate-900" href="tel:0469097690">
                0469 097 690
              </a>
            </div>

            <div>
              <div className="text-slate-500">Email</div>
              <a
                className="break-all text-lg font-medium text-slate-900"
                href="mailto:primeroofcare@gmail.com"
              >
                primeroofcare@gmail.com
              </a>
            </div>

            <div>
              <div className="text-slate-500">Operating areas</div>
              <div className="text-lg font-medium text-slate-900">
                Adelaide, Melbourne and Tasmania
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs leading-relaxed text-slate-500">
            <p>Insured work. Respectful on-site quotes. Tidy finishes.</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
