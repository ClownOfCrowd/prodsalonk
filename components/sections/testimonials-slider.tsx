"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { type Locale } from "@/lib/i18n";
import { getTestimonials, getUIText } from "@/lib/salon-data";

type TestimonialsSliderProps = {
  locale: Locale;
};

export function TestimonialsSlider({ locale }: TestimonialsSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = getTestimonials(locale);
  const text = getUIText(locale);
  const headingLabel = locale === "ru" ? "Отзывы клиентов" : locale === "es" ? "Opiniones de clientes" : "Client Voices";
  const showTestimonialLabel =
    locale === "ru"
      ? "Показать отзыв"
      : locale === "es"
        ? "Mostrar testimonio"
        : "Show testimonial";

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft) sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-muted)">
        {headingLabel}
      </p>
      <div className="mt-5 min-h-44">
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.name}
            initial={{ opacity: 0, y: 6 }}
            animate={{
              opacity: index === activeIndex ? 1 : 0,
              y: index === activeIndex ? 0 : 4,
              display: index === activeIndex ? "block" : "none",
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-lg leading-relaxed text-(--color-text)"
            aria-hidden={index !== activeIndex}
          >
            “{item.text}”
            <footer className="mt-5 text-sm text-(--color-muted)">
              {item.name} · {item.service}
              <p className="mt-1 text-xs uppercase tracking-[0.16em]">{item.experience}</p>
            </footer>
          </motion.blockquote>
        ))}
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
