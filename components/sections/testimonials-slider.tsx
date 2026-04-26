"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { type Locale } from "@/lib/i18n";
import { getTestimonials, getUIText } from "@/lib/salon-data";

type TestimonialsSliderProps = {
  locale: Locale;
};

export function TestimonialsSlider({ locale }: TestimonialsSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = getTestimonials(locale);
  const activeTestimonial = testimonials[activeIndex];
  const text = getUIText(locale);
  const headingLabel = locale === "ru" ? "Отзывы клиентов" : locale === "es" ? "Opiniones de clientes" : "Client Voices";
  const showTestimonialLabel =
    locale === "ru"
      ? "Показать отзыв"
      : locale === "es"
        ? "Mostrar testimonio"
        : "Show testimonial";

  return (
    <section className="rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft) sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-muted)">
        {headingLabel}
      </p>
      <div className="mt-5 min-h-44">
        <AnimatePresence mode="wait" initial={false}>
          <motion.blockquote
            key={`${activeIndex}-${activeTestimonial.name}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="text-lg leading-relaxed text-(--color-text)"
          >
            “{activeTestimonial.text}”
            <footer className="mt-5 text-sm text-(--color-muted)">
              {activeTestimonial.name} · {activeTestimonial.service}
              <p className="mt-1 text-xs uppercase tracking-[0.16em]">{activeTestimonial.experience}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
      <div className="mt-5 flex gap-2" role="tablist" aria-label={text.common.chooseTestimonial}>
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            role="tab"
            aria-selected={activeIndex === index}
            aria-label={`${showTestimonialLabel}: ${item.name}`}
            className={`h-2.5 w-8 rounded-full transition ${
              activeIndex === index ? "bg-(--color-text)" : "bg-(--color-line)"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
