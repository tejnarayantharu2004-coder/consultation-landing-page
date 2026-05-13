import { ClipboardCheck, Mail, MessageSquare, PhoneCall, Target } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Step 1",
    text: "Fill up the form"
  },
  {
    icon: Mail,
    title: "Step 2",
    text: "Receive an email with the appointment link"
  },
  {
    icon: MessageSquare,
    title: "Step 3",
    text: "Fill the appointment form"
  },
  {
    icon: PhoneCall,
    title: "Step 4",
    text: "Join the 1:1 consultation call"
  },
  {
    icon: Target,
    title: "Step 5",
    text: "Get your customized digital marketing plan for FREE"
  }
];

export default function Benefits() {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
            How The Free Consultation Works
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            Simple steps. No confusion.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-700">
            You fill the details, book your appointment, and come to the call
            ready to get clarity about your marketing.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="rounded-md border border-gold-100 bg-white p-5 shadow-sm">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-800">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-gold-700">{step.title}</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-ink">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
