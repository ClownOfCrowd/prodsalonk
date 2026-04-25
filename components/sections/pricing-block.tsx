import { type Locale } from "@/lib/i18n";

type PricingBlockProps = {
  title: string;
  startsFrom: string;
  items: Array<{ name: string; value: string }>;
  locale: Locale;
};

export function PricingBlock({ title, startsFrom, items, locale }: PricingBlockProps) {
  const startsFromLabel =
    locale === "ru" ? "Цена от" : locale === "es" ? "Desde" : "Starts from";

  return (
    <section className="rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft)">
      <h3 className="font-display text-2xl text-(--color-text)">{title}</h3>
      <p className="mt-1 text-sm text-(--color-muted)">{startsFromLabel} {startsFrom}</p>
      <dl className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <dt className="text-(--color-muted)">{item.name}</dt>
            <dd className="font-semibold text-(--color-text)">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
