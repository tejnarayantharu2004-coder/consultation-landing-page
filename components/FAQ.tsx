"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. The 1:1 strategy call is free. You will get clarity about what is not working and what to do next."
  },
  {
    question: "Who is this consultation for?",
    answer:
      "It is for Nepal-based business owners who want more serious leads, daily inquiries, better sales, and a clearer digital marketing plan."
  },
  {
    question: "What will I get inside the consultation call?",
    answer:
      "I will understand your business, diagnose your current marketing, and share a simple lead generation plan you can start implementing."
  },
  {
    question: "How long will the consultation call be?",
    answer:
      "The call is planned for around 1 hour, so we have enough time to understand your business properly."
  },
  {
    question: "Do I need to have a website before booking the call?",
    answer:
      "No. You can book the call even if you only have a Facebook page. If a website or landing page is needed, I will explain that clearly."
  },
  {
    question: "What happens after I fill up the form?",
    answer:
      "You will be redirected to the thank you page. Then you can follow the next steps and contact me on WhatsApp if needed."
  },
  {
    question: "Will you help me create a marketing plan for my business?",
    answer:
      "Yes. The goal of the call is to give you a customized digital marketing plan based on your business situation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
            Questions
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="rounded-md border border-gold-100 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-ink"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold-700 transition ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen ? (
                  <div className="border-t border-gold-100 px-5 pb-5 pt-1 text-sm leading-7 text-zinc-700">
                    {faq.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
