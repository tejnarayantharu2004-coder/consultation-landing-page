import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thanks",
  description: "Watch the next-step video before your consultation."
};

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-[#fffaf0] px-5 py-10">
      <section className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Image
          src="/tpt-logo-latest.png"
          alt="TPT logo"
          width={420}
          height={124}
          priority
          className="h-auto w-64 object-contain sm:w-80"
        />
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
          Almost done
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-6xl">
          Wait... watch the video before you go
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700">
          Before your consultation, please watch this short video so you know
          what to do next.
        </p>

        <div className="mt-10 aspect-video w-full overflow-hidden rounded-md border border-gold-100 bg-ink shadow-soft">
          <iframe
            src="https://player.vimeo.com/video/1192038930?fl=tl&fe=ec"
            title="Consultation next steps video"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-full w-full"
            allowFullScreen
          />
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/9779804424395"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-[#25D366] px-8 text-base font-semibold text-white shadow-soft transition hover:bg-[#1fb857] focus:outline-none focus:ring-4 focus:ring-green-200"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Chat with me on WhatsApp
          </a>
          <Link
            href="/"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-gold-200 bg-white px-8 text-base font-semibold text-ink shadow-sm transition hover:border-gold-400 hover:bg-gold-50 focus:outline-none focus:ring-4 focus:ring-gold-100"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
