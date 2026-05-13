import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative px-5 pb-16 pt-7 sm:pb-20 lg:pb-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[linear-gradient(180deg,#fff1ba_0%,#fffaf0_64%,#fffaf0_100%)]" />
      <div className="mx-auto max-w-6xl">
        <header className="flex justify-center">
          <Image
            src="/tpt-logo-latest.png"
            alt="TPT logo"
            width={420}
            height={124}
            priority
            className="h-auto w-60 object-contain sm:w-80"
          />
        </header>

        <div className="mx-auto max-w-4xl pt-14 text-center lg:pt-16">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-200 bg-white/90 px-4 py-2 text-sm font-semibold text-gold-800 shadow-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            For Nepal-based business owners
          </p>
          <h1 className="text-4xl font-semibold leading-[1.08] text-ink sm:text-6xl lg:text-7xl">
            Tired of Spending Money on Ads Without Getting Real Leads?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-2xl font-semibold leading-8 text-gold-800 sm:text-3xl">
            Get a FREE 1:1 Lead Generation Strategy Call
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-700 sm:text-lg">
            If your boosted posts, Facebook ads, or digital marketing efforts
            are not giving results, this free call will help you understand what
            is going wrong and how to build a simple system to attract daily
            inquiries through Meta Ads. Beside this, I&apos;ll diagnose your
            business and provide a customized Digital Marketing plan that you
            can immediately implement in your business after the call.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4">
            <a
              href="#book-call"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-ink px-8 text-base font-semibold text-white shadow-soft transition hover:bg-gold-800 focus:outline-none focus:ring-4 focus:ring-gold-200"
            >
              Booking your FREE Consultation Call Now
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
