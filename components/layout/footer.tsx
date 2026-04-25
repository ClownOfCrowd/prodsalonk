import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { contactDetails, getUIText } from "@/lib/salon-data";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const text = getUIText(locale);

  return (
    <footer className="mt-24 border-t border-(--color-line) bg-(--color-surface)/70 py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-display text-xl text-(--color-text)">
            {contactDetails.studioName}
          </h2>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-(--color-muted)">
            {text.common.studioTagline}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-(--color-muted)">
            {text.common.visit}
          </h3>
          <p className="mt-3 text-sm text-(--color-text)">{contactDetails.address}</p>
          <p className="mt-1 text-sm text-(--color-text)">{contactDetails.phone}</p>
          <p className="mt-1 text-sm text-(--color-text)">{contactDetails.email}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-(--color-muted)">
            {text.common.explore}
          </h3>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link href="/services" className="text-sm text-(--color-text) underline-offset-4 hover:underline">
              {text.nav.services}
            </Link>
            <Link href="/team" className="text-sm text-(--color-text) underline-offset-4 hover:underline">
              {text.nav.team}
            </Link>
            <Link href="/booking" className="text-sm text-(--color-text) underline-offset-4 hover:underline">
              {text.nav.booking}
            </Link>
            <Link href="/contact" className="text-sm text-(--color-text) underline-offset-4 hover:underline">
              {text.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
