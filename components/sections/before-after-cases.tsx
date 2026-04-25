import { type Locale } from "@/lib/i18n";
import { getBeforeAfterCases, getUIText } from "@/lib/salon-data";
import { SectionHeading } from "@/components/ui/section-heading";

type BeforeAfterCasesProps = {
  locale: Locale;
};

export function BeforeAfterCases({ locale }: BeforeAfterCasesProps) {
  const beforeAfterCases = getBeforeAfterCases(locale);
  const text = getUIText(locale);
  const copy =
    locale === "ru"
      ? {
          eyebrow: "До / После",
          title: "Реальные кейсы последних программ ухода",
          description: "Коротко: исходная ситуация, что мы сделали и какой результат получили.",
        }
      : locale === "es"
        ? {
            eyebrow: "Antes / Después",
            title: "Casos reales de tratamientos recientes",
            description: "Una vista clara del punto de partida, ajustes realizados y resultado logrado.",
          }
        : {
            eyebrow: "Before / After",
            title: "Real outcome snapshots from recent treatment plans",
            description: "A concise look at where clients started, what we adjusted, and the results achieved.",
          };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <div className="mt-8 space-y-5">
        {beforeAfterCases.map((item) => (
          <article
            key={item.client}
            className="rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft)"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-2xl text-(--color-text)">{item.client}</h3>
              <p className="text-sm font-semibold text-(--color-muted)">{item.timeframe}</p>
            </div>
            <p className="mt-2 text-sm text-(--color-text)">{item.service}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-(--color-line) bg-(--color-surface) p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-muted)">{text.common.before}</p>
                <p className="mt-2 text-sm leading-relaxed text-(--color-muted)">{item.before}</p>
              </div>
              <div className="rounded-xl border border-(--color-line) bg-(--color-surface) p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-muted)">{text.common.after}</p>
                <p className="mt-2 text-sm leading-relaxed text-(--color-muted)">{item.after}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
