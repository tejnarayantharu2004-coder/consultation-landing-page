import FlodeskForm from "@/components/FlodeskForm";

export default function CTAForm() {
  return (
    <section id="book-call" className="px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl rounded-md border border-gold-100 bg-white p-5 shadow-soft sm:p-8 lg:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
            Final step
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            Book Your FREE 1:1 Consultation Call
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-700">
            Fill up the form below and we&apos;ll contact you with the next steps.
          </p>
        </div>

        <div className="mt-9">
          <FlodeskForm />
        </div>
      </div>
    </section>
  );
}
