import { type Locale } from "@/lib/i18n";
import { getMemberships } from "@/lib/salon-data";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";

type MembershipsSectionProps = {
  locale: Locale;
};

export function MembershipsSection({ locale }: MembershipsSectionProps) {
  const memberships = getMemberships(locale);
  const copy =
    locale === "ru"
      ? {
          eyebrow: "Пакеты / Абонементы",
          title: "Программы регулярного ухода с понятным графиком",
          description: "Для гостей, которые предпочитают долгосрочный план и стабильный результат.",
          startWith: "Начать с",
        }
      : locale === "es"
        ? {
            eyebrow: "Paquetes / Membresías",
            title: "Programas estructurados para resultados constantes",
            description: "Pensados para clientes que prefieren planificación a largo plazo y ritmo mensual claro.",
            startWith: "Empezar con",
          }
        : {
            eyebrow: "Packages / Memberships",
            title: "Structured care programs for consistent results",
            description: "Designed for guests who prefer long-term planning and clear monthly treatment rhythm.",
            startWith: "Start with",
          };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {memberships.map((plan) => (
          <article
            key={plan.name}
            className="flex h-full flex-col rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft)"
          >
            <h3 className="font-display text-2xl text-(--color-text)">{plan.name}</h3>
            <p className="mt-2 text-sm font-semibold text-(--color-muted)">{plan.price}</p>
            <p className="mt-3 text-sm leading-relaxed text-(--color-muted)">{plan.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-(--color-muted)">
              {plan.features.map((feature) => (
                <li key={feature} className="rounded-lg border border-(--color-line) bg-(--color-surface) px-3 py-2">
                  {feature}
                </li>
              ))}
            </ul>
            <ButtonLink href="/booking" className="mt-6 w-fit">
              {copy.startWith} {plan.name}
            </ButtonLink>
          </article>
        ))}
      </div>
    </section>
  );
}
