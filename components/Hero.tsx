import Image from "next/image";
import { ArrowDown, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative px-5 pb-16 pt-6 sm:pb-20 lg:pb-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,#f4e8c9_0%,#fffdf8_52%,#fffdf8_100%)]" />
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-4">
          <Image
            src="/tpt-logo-latest.png"
            alt="TPT logo"
            width={320}
            height={95}
            priority
            className="h-auto w-40 object-contain sm:w-60"
          />
          <a
            href="#book-call"
            className="inline-flex h-11 items-center justify-center rounded-md border border-gold-200 bg-white px-4 text-sm font-semibold text-ink shadow-sm transition hover:border-gold-400 focus:outline-none focus:ring-4 focus:ring-gold-100"
          >
            Book Free Consultation
          </a>
        </header>

        <div className="grid items-center gap-10 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-200 bg-white px-4 py-2 text-sm font-semibold text-gold-800 shadow-sm">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Free 1:1 Digital Marketing Consultation
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] text-ink sm:text-6xl lg:text-7xl">
              Get More Customers Consistently Without Wasting Money on Ads
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-700">
              Simple, clear marketing plan made specifically for your business.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">
              This is for business owners struggling to get consistent leads.
              You&apos;ll get a customized strategy based on your current situation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#book-call"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-ink px-7 text-base font-semibold text-white shadow-soft transition hover:bg-gold-800 focus:outline-none focus:ring-4 focus:ring-gold-200"
              >
                Book Free Consultation
                <ArrowDown className="h-5 w-5" aria-hidden="true" />
              </a>
              <p className="flex items-center justify-center text-sm font-medium text-zinc-600 sm:justify-start">
                We respect your privacy. No spam.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-md border border-gold-100 bg-white p-6 shadow-soft">
              <div className="rounded-md bg-ink px-6 py-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-200">
                  1:1 Consultation
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight">
                  Customized Strategy for Your Business
                </h2>
                <div className="mt-7 space-y-4 text-sm leading-6 text-zinc-200">
                  <p>You book the call and share your business details.</p>
                  <p>We review your current marketing and problems.</p>
                  <p>You get a clear, customized plan for your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
