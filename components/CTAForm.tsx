"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";

type FormState = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: ""
};

export default function CTAForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const emailIsValid = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()),
    [form.email]
  );

  function validate() {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Active Email is required.";
    } else if (!emailIsValid) {
      nextErrors.email = "Enter a valid active email.";
    }
    if (!form.whatsapp.trim()) {
      nextErrors.whatsapp = "WhatsApp Number is required.";
    }
    if (!form.businessName.trim()) {
      nextErrors.businessName = "Business Name is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (submitted) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    if (!validate()) return;

    router.push("/thank-you");
  }

  return (
    <section id="book-call" className="px-5 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
            Book the Call
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            1:1 Consultation
          </h2>
          <p className="mt-5 text-xl leading-8 text-zinc-700">
            Customized Strategy for Your Business
          </p>
          <p className="mt-5 max-w-md text-base leading-7 text-zinc-600">
            Share your business details so we can review your current marketing
            and problems before the call.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-md border border-gold-100 bg-white p-5 shadow-soft sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="fullName"
              label="Full Name"
              placeholder="Your full name"
              value={form.fullName}
              error={errors.fullName}
              onChange={(value) => updateField("fullName", value)}
              required
            />
            <Field
              id="email"
              label="Active Email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              error={errors.email}
              onChange={(value) => updateField("email", value)}
              required
            />
            <Field
              id="whatsapp"
              label="WhatsApp Number"
              type="tel"
              placeholder="Your WhatsApp number"
              value={form.whatsapp}
              error={errors.whatsapp}
              onChange={(value) => updateField("whatsapp", value)}
              required
            />
            <Field
              id="businessName"
              label="Business Name"
              placeholder="Your business name"
              value={form.businessName}
              error={errors.businessName}
              onChange={(value) => updateField("businessName", value)}
              required
            />
          </div>

          <div className="mt-5">
            <Field
              id="website"
              label="Website / Facebook URL"
              placeholder="https://..."
              value={form.website}
              error={errors.website}
              onChange={(value) => updateField("website", value)}
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-ink"
            >
              Anything you want to say
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us anything important about your business..."
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="w-full resize-none rounded-md border border-zinc-200 bg-[#fffdf8] px-4 py-3 text-base outline-none transition placeholder:text-zinc-400 focus:border-gold-400 focus:ring-4 focus:ring-gold-100"
            />
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center rounded-md bg-ink px-7 text-base font-semibold text-white shadow-soft transition hover:bg-gold-800 focus:outline-none focus:ring-4 focus:ring-gold-200"
            >
              Book Free Consultation
            </button>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600">
              <LockKeyhole className="h-4 w-4 text-gold-700" aria-hidden="true" />
              We respect your privacy. No spam.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  value,
  error,
  onChange,
  type = "text",
  required = false
}: {
  id: keyof FormState;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label}
        {required ? <span className="text-gold-700"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-md border border-zinc-200 bg-[#fffdf8] px-4 text-base outline-none transition placeholder:text-zinc-400 focus:border-gold-400 focus:ring-4 focus:ring-gold-100"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
