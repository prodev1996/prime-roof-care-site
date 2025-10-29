import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <section className="bg-slate-50 text-slate-900 py-16">
      <div className="container-default grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Contact Prime Roof Care
          </h1>
          <p className="text-slate-600 mt-4 text-base leading-relaxed">
            Based in Aldinga Beach, proudly serving Adelaide and surrounding
            suburbs. Call us or send a message — we’ll reply quickly and
            respectfully.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <div>
              <div className="text-slate-500">Phone</div>
              <a
                className="text-slate-900 font-medium text-lg"
                href="tel:0469097690"
              >
                0469 097 690
              </a>
            </div>

            <div>
              <div className="text-slate-500">Email</div>
              <a
                className="text-slate-900 font-medium text-lg break-all"
                href="mailto:primeroofcare@gmail.com"
              >
                primeroofcare@gmail.com
              </a>
            </div>

            <div>
              <div className="text-slate-500">Location</div>
              <div className="text-slate-900 font-medium text-lg">
                Aldinga Beach, SA
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-slate-500 leading-relaxed">
            <p>
              Licensed & insured. Respectful on-site quotes. We treat your
              property like it’s ours.
            </p>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
