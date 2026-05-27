import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your free 1:1 digital marketing consultation request has been received."
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fffdf8] px-5 py-12">
      <section className="w-full max-w-2xl text-center">
        <div className="mx-auto mb-8 flex h-24 w-56 items-center justify-center rounded-md bg-white px-4 shadow-soft ring-1 ring-gold-100">
          <Image
            src="/tpt-logo-latest.png"
            alt="TPT logo"
            width={220}
            height={85}
            priority
            className="h-auto w-48 object-contain"
          />
        </div>
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-700">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
          Request received
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          Thank you for booking your free consultation.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-zinc-700">
          We&apos;ll review your business details and prepare for your 1:1 consultation with a customized strategy for your business.
        </p>
        <div className="mx-auto mt-9 grid max-w-xl gap-3 text-left sm:grid-cols-2">
          <div className="rounded-md border border-gold-100 bg-white p-5">
            <Mail className="mb-3 h-5 w-5 text-gold-700" aria-hidden="true" />
            <h2 className="font-semibold text-ink">Check your email</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              We may send confirmation or next steps to your active email.
            </p>
          </div>
          <div className="rounded-md border border-gold-100 bg-white p-5">
            <MessageCircle
              className="mb-3 h-5 w-5 text-gold-700"
              aria-hidden="true"
            />
            <h2 className="font-semibold text-ink">Keep WhatsApp ready</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              We may contact you on WhatsApp about your consultation.
            </p>
          </div>
        </div>
        <Link
          href="/"
          className="mt-9 inline-flex h-12 items-center justify-center rounded-md bg-ink px-6 text-sm font-semibold text-white transition hover:bg-gold-800 focus:outline-none focus:ring-4 focus:ring-gold-200"
        >
          Back to landing page
        </Link>
        <a
          href="https://wa.me/9779804424395"
          target="_blank"
          rel="noreferrer"
          className="ml-0 mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 text-sm font-semibold text-white transition hover:bg-[#1fb857] focus:outline-none focus:ring-4 focus:ring-green-200 sm:ml-3 sm:mt-9"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
      </section>
    </main>
  );
}
