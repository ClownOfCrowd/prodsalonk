"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookingForm } from "@/components/sections/booking-form";
import { type Locale } from "@/lib/i18n";
import { getUIText } from "@/lib/salon-data";

type MobileBookCTAProps = {
  locale: Locale;
};

export function MobileBookCTA({ locale }: MobileBookCTAProps) {
  const [isOpen, setIsOpen] = useState(false);
  const text = getUIText(locale);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden" aria-label={text.common.quickBooking}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-controls="quick-booking-modal"
          className="flex h-12 w-full items-center justify-center rounded-2xl bg-(--color-text) px-5 text-sm font-semibold tracking-wide text-(--color-surface) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
        >
          {text.common.bookNow}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="quick-booking-modal"
            role="dialog"
            aria-modal="true"
            aria-label={text.common.quickBooking}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-end bg-black/50 p-3 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0.95 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="max-h-[92vh] w-full overflow-y-auto rounded-2xl border border-(--color-line) bg-(--color-surface) p-4"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-display text-2xl text-(--color-text)">{text.common.quickBooking}</h2>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg border border-(--color-line) bg-white px-3 py-1.5 text-sm text-(--color-text)"
                >
                  {text.common.close}
                </button>
              </div>
              <BookingForm compact locale={locale} />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
