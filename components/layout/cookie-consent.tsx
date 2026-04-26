"use client";

import { useState } from "react";
import { type Locale } from "@/lib/i18n";
import { getUIText } from "@/lib/salon-data";

const STORAGE_KEY = "lumiere-cookie-consent";

type CookieConsentProps = {
  locale: Locale;
};

export function CookieConsent({ locale }: CookieConsentProps) {
  const text = getUIText(locale);

  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return !window.localStorage.getItem(STORAGE_KEY);
  });

  if (!visible) {
    return null;
  }

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  return (
    <div className="fixed bottom-24 left-4 right-4 z-50 rounded-2xl border border-(--color-line) bg-(--color-surface) p-4 md:bottom-6 md:left-auto md:right-6 md:max-w-sm">
      <p className="text-sm leading-relaxed text-(--color-muted)">
        {text.common.cookies}
      </p>
      <button
        type="button"
        onClick={accept}
        className="mt-3 inline-flex h-10 items-center justify-center rounded-xl bg-(--color-accent) px-4 text-sm font-semibold text-(--color-text) transition hover:bg-(--color-accent-strong) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
      >
        {text.common.accept}
      </button>
    </div>
  );
}
