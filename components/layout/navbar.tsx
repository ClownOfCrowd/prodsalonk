"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { localeLabels, locales, type Locale } from "@/lib/i18n";
import { getUIText } from "@/lib/salon-data";

type NavbarProps = {
  locale: Locale;
};

export function Navbar({ locale }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const menuTriggerRef = useRef<HTMLButtonElement | null>(null);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    menuTriggerRef.current?.focus();
  };

  const text = getUIText(locale);
  const mobileCopy =
    locale === "ru"
      ? {
          menu: "Меню",
          openMenu: "Открыть меню",
          closeMenu: "Закрыть меню",
          language: "Язык",
        }
      : locale === "es"
        ? {
            menu: "Menú",
            openMenu: "Abrir menú",
            closeMenu: "Cerrar menú",
            language: "Idioma",
          }
        : {
            menu: "Menu",
            openMenu: "Open menu",
            closeMenu: "Close menu",
            language: "Language",
          };

  const links = [
    { href: "/", label: text.nav.home },
    { href: "/services", label: text.nav.services },
    { href: "/team", label: text.nav.team },
    { href: "/gallery", label: text.nav.gallery },
    { href: "/booking", label: text.nav.booking },
    { href: "/contact", label: text.nav.contact },
  ];

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const panel = mobilePanelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const firstFocusable = focusable?.[0];
    const lastFocusable = focusable?.[focusable.length - 1];

    firstFocusable?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuTriggerRef.current?.focus();
        return;
      }

      if (event.key === "Tab" && firstFocusable && lastFocusable) {
        if (event.shiftKey && document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        } else if (!event.shiftKey && document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

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
      className="sticky top-0 z-40 border-b border-(--color-line) bg-(--color-surface)"
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
          <div className="hidden rounded-xl border border-(--color-line) bg-white p-1 md:flex" aria-label="Language switcher">
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

          <button
            ref={menuTriggerRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-(--color-line) bg-white text-(--color-text) transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 md:hidden"
            aria-label={mobileCopy.openMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">{mobileCopy.menu}</span>
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
            </span>
          </button>

          <Link
            href="/booking"
            className="hidden rounded-xl border border-(--color-line) bg-white px-4 py-2 text-sm font-semibold text-(--color-text) transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 md:inline-flex"
          >
            {text.nav.book}
          </Link>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="md:hidden" role="dialog" aria-modal="true" aria-label={mobileCopy.menu}>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/40"
            aria-label={mobileCopy.closeMenu}
            onClick={closeMobileMenu}
          />
          <div
            id="mobile-navigation"
            ref={mobilePanelRef}
            className="fixed right-0 top-0 z-50 flex h-[100dvh] w-[86vw] max-w-sm flex-col border-l border-(--color-line) bg-(--color-surface) p-5 shadow-(--shadow-soft)"
          >
            <div className="mb-5 flex items-center justify-between">
              <p className="font-display text-2xl text-(--color-text)">{mobileCopy.menu}</p>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="rounded-lg border border-(--color-line) px-3 py-1.5 text-sm text-(--color-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
              >
                {mobileCopy.closeMenu}
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="space-y-1">
              {links.map((link) => {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block rounded-xl px-3 py-3 text-base text-(--color-text) transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 rounded-xl border border-(--color-line) bg-white p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-(--color-muted)">
                {mobileCopy.language}
              </p>
              <div className="flex gap-2">
                {locales.map((item) => (
                  <button
                    key={`mobile-${item}`}
                    type="button"
                    onClick={() => changeLocale(item)}
                    className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                      item === locale
                        ? "bg-(--color-text) text-(--color-surface)"
                        : "border border-(--color-line) text-(--color-muted)"
                    }`}
                    aria-label={`Switch language to ${item}`}
                  >
                    {localeLabels[item]}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/booking"
              onClick={closeMobileMenu}
              className="mt-auto inline-flex items-center justify-center rounded-xl bg-(--color-text) px-4 py-3 text-sm font-semibold text-(--color-surface) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
            >
              {text.nav.book}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
