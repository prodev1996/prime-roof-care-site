export default function PrivacyPage() {
  const year = new Date().getFullYear();

  return (
    <section className="bg-slate-50 py-16 text-slate-900">
      <div className="container-default mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-slate-700">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Privacy Policy
        </h1>

        <p>
          Prime Roof Care respects your privacy. This policy explains how we
          collect, use and protect personal information when you contact us,
          request a quote or engage our services.
        </p>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">What we collect</h2>
          <p className="mt-2 text-slate-600">
            We may collect your name, phone number, email, suburb/address,
            region and details about your roof or gutter job so we can respond
            and provide service.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">How we use it</h2>
          <p className="mt-2 text-slate-600">
            We use this information to contact you, arrange site visits, prepare
            quotes, schedule work and carry out roof and gutter services. We do
            not sell your information.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Storage and security
          </h2>
          <p className="mt-2 text-slate-600">
            We take reasonable steps to keep your information secure and only
            accessible to team members who need it to do the job.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Your rights</h2>
          <p className="mt-2 text-slate-600">
            You can ask us to update or delete your information at any time.
            Contact us at{" "}
            <a className="text-slate-900 underline" href="mailto:primeroofcare@gmail.com">
              primeroofcare@gmail.com
            </a>{" "}
            or call{" "}
            <a className="text-slate-900 underline" href="tel:0469097690">
              0469 097 690
            </a>
            .
          </p>
        </div>

        <p className="pt-4 text-xs text-slate-400">
          Updated {year} - Prime Roof Care - Adelaide, Melbourne and Tasmania
        </p>
      </div>
    </section>
  );
}
