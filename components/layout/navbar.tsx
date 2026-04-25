"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { localeLabels, locales, type Locale } from "@/lib/i18n";
import { getUIText } from "@/lib/salon-data";

type NavbarProps = {
  locale: Locale;
};

export function Navbar({ locale }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const text = getUIText(locale);

  const links = [
    { href: "/", label: text.nav.home },
    { href: "/services", label: text.nav.services },
    { href: "/team", label: text.nav.team },
    { href: "/gallery", label: text.nav.gallery },
    { href: "/booking", label: text.nav.booking },
    { href: "/contact", label: text.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLocale = async (nextLocale: Locale) => {
    await fetch("/api/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: nextLocale }),
    });

    window.location.reload();
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        isScrolled
          ? "border-(--color-line) bg-(--color-surface)/80 shadow-(--shadow-soft) backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl tracking-wide text-(--color-text)">
          Lumiere Atelier
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-(--color-muted) transition-colors hover:text-(--color-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex rounded-xl border border-(--color-line) bg-white/80 p-1" aria-label="Language switcher">
            {locales.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => changeLocale(item)}
                className={`rounded-lg px-2 py-1 text-xs font-semibold transition ${
                  item === locale ? "bg-(--color-text) text-(--color-surface)" : "text-(--color-muted)"
                }`}
                aria-label={`Switch language to ${item}`}
              >
                {localeLabels[item]}
              </button>
            ))}
          </div>

          <Link
            href="/booking"
            className="rounded-xl border border-(--color-line) bg-white/80 px-4 py-2 text-sm font-semibold text-(--color-text) transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
          >
            {text.nav.book}
          </Link>
        </div>
      </div>
    </header>
  );
}
