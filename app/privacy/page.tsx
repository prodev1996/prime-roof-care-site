export default function PrivacyPage() {
  return (
    <section className="bg-slate-50 text-slate-900 py-16">
      <div className="container-default max-w-3xl mx-auto text-sm leading-relaxed text-slate-700 space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Privacy Policy
        </h1>

        <p>
          Prime Roof Care respects your privacy. This policy explains how we
          collect, use, and protect personal information when you contact us,
          request a quote, or engage our services.
        </p>

        <div>
          <h2 className="text-slate-900 font-semibold text-lg">What we collect</h2>
          <p className="mt-2 text-slate-600">
            We may collect your name, phone number, email, suburb/address, and
            details about your roof or gutter job so we can respond and provide
            service.
          </p>
        </div>

        <div>
          <h2 className="text-slate-900 font-semibold text-lg">How we use it</h2>
          <p className="mt-2 text-slate-600">
            We use this information to contact you, arrange site visits,
            prepare quotes, schedule work, and carry out roof/gutter services.
            We do not sell your information.
          </p>
        </div>

        <div>
          <h2 className="text-slate-900 font-semibold text-lg">Storage & security</h2>
          <p className="mt-2 text-slate-600">
            We take reasonable steps to keep your information secure and only
            accessible to team members who need it to do the job.
          </p>
        </div>

        <div>
          <h2 className="text-slate-900 font-semibold text-lg">Your rights</h2>
          <p className="mt-2 text-slate-600">
            You can ask us to update or delete your information at any time.
            Just contact us at{" "}
            <a
              className="underline text-slate-900"
              href="mailto:primeroofcare@gmail.com"
            >
              primeroofcare@gmail.com
            </a>{" "}
            or call{" "}
            <a className="underline text-slate-900" href="tel:0469097690">
              0469 097 690
            </a>
            .
          </p>
        </div>

        <p className="text-slate-400 text-xs pt-4">
          Updated ${new Date().getFullYear()} • Prime Roof Care • Aldinga Beach SA
        </p>
      </div>
    </section>
  );
}
