"use client";

import { useState } from "react";
import { type Locale } from "@/lib/i18n";
import { getFaqs, getUIText } from "@/lib/salon-data";
import { SectionHeading } from "@/components/ui/section-heading";

type FaqSectionProps = {
  locale: Locale;
};

export function FaqSection({ locale }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const faqs = getFaqs(locale);
  const text = getUIText(locale);
  const eyebrow = locale === "ru" ? "FAQ" : locale === "es" ? "Preguntas frecuentes" : "FAQ";

  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={eyebrow}
        title={text.common.faqTitle}
        description={text.common.faqDescription}
      />
      <div className="mt-8 space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = index === openIndex;

          return (
            <article
              key={faq.question}
              className="rounded-2xl border border-(--color-line) bg-white shadow-(--shadow-soft)"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
              >
                <span className="font-semibold text-(--color-text)">{faq.question}</span>
                <span className="text-(--color-muted)">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen ? (
                <p className="border-t border-(--color-line) px-5 py-4 text-sm leading-relaxed text-(--color-muted)">
                  {faq.answer}
                </p>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
