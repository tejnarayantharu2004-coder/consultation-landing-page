import { Check } from "lucide-react";

const benefits = [
  "Know exactly what's not working in your marketing",
  "Clear plan to get more leads and customers",
  "Stop wasting money on things that don't work",
  "Simple steps you can actually follow"
];

const steps = [
  {
    title: "Step 1",
    text: "You book the call and share your business details"
  },
  {
    title: "Step 2",
    text: "We review your current marketing and problems"
  },
  {
    title: "Step 3",
    text: "You get a clear, customized plan for your business"
  }
];

export default function Benefits() {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
              How You Benefit From This Consultation
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              A clear path to more leads and customers.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-md border border-gold-100 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-gold-100 text-gold-800">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="font-semibold leading-7 text-ink">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-gold-100 pt-12">
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
            Process of This Consultation
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-md border border-gold-100 bg-white p-6"
              >
                <p className="text-sm font-semibold text-gold-700">
                  {step.title}
                </p>
                <p className="mt-3 leading-7 text-zinc-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
