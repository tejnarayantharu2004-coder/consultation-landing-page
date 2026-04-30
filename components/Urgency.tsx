import { Clock3 } from "lucide-react";

export default function Urgency() {
  return (
    <section className="px-5 py-10">
      <div className="mx-auto max-w-6xl rounded-md bg-ink px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-200 text-ink">
            <Clock3 className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-200">
              Limited free consultation slots
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight">
              Book the call and get a customized strategy for your business.
            </h2>
          </div>
          <a
            href="#book-call"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-ink transition hover:bg-gold-100 focus:outline-none focus:ring-4 focus:ring-gold-300"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
