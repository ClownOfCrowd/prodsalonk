import Link from "next/link";
import type { Service } from "@/lib/salon-data";
import { type Locale } from "@/lib/i18n";
import { getUIText } from "@/lib/salon-data";

type ServiceCardProps = {
  service: Service;
  locale: Locale;
};

export function ServiceCard({ service, locale }: ServiceCardProps) {
  const text = getUIText(locale);

  return (
    <article className="group rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft) transition hover:-translate-y-1">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-(--color-muted)">
        {service.category}
      </p>
      <h3 className="mt-2 font-display text-2xl text-(--color-text)">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-(--color-muted)">{service.subtitle}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-(--color-text)">
        <span>{service.duration}</span>
        <span className="font-semibold">{service.price}</span>
      </div>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex text-sm font-semibold text-(--color-text) underline decoration-(--color-accent-strong) underline-offset-4 transition group-hover:decoration-(--color-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
      >
        {text.common.viewDetails}
      </Link>
    </article>
  );
}
