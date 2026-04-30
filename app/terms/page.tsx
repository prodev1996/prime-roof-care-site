export default function TermsPage() {
  return (
    <section className="bg-slate-50 py-16 text-slate-900">
      <div className="container-default mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-slate-700">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Terms
        </h1>

        <p>
          These terms outline the general conditions for enquiries, quotes and
          roof or gutter services provided by Prime Roof Care.
        </p>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Quotes</h2>
          <p className="mt-2 text-slate-600">
            Quotes are based on the information available at the time of
            inspection or enquiry. If hidden defects, access issues or extra
            work are discovered, we will discuss options before proceeding.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Access and safety</h2>
          <p className="mt-2 text-slate-600">
            Customers are responsible for providing reasonable access to the
            property. Work may be rescheduled if weather, access or safety
            conditions make the job unsuitable on the planned day.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Service areas</h2>
          <p className="mt-2 text-slate-600">
            Prime Roof Care operates in Adelaide, Melbourne and Tasmania.
            Availability may vary by suburb, job type and scheduling.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
          <p className="mt-2 text-slate-600">
            For questions about these terms, email{" "}
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
      </div>
    </section>
  );
}
