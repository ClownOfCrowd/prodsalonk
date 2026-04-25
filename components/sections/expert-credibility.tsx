import { type Locale } from "@/lib/i18n";
import { getExpertCredibility } from "@/lib/salon-data";
import { SectionHeading } from "@/components/ui/section-heading";

type ExpertCredibilityProps = {
  locale: Locale;
};

export function ExpertCredibility({ locale }: ExpertCredibilityProps) {
  const expertCredibility = getExpertCredibility(locale);
  const copy =
    locale === "ru"
      ? {
          eyebrow: "Экспертность",
          title: "Квалификация и опыт за каждой процедурой",
          description: "Наши стандарты строятся на сертифицированной подготовке, специализации и постоянном обучении.",
        }
      : locale === "es"
        ? {
            eyebrow: "Credibilidad experta",
            title: "Credenciales y experiencia detrás de cada cita",
            description: "Nuestros estándares se sostienen en formación certificada, especialización y aprendizaje continuo.",
          }
        : {
            eyebrow: "Expert Credibility",
            title: "Credentials and depth behind every appointment",
            description: "Our standards are built on certified training, focused specialization, and continuous education.",
          };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {expertCredibility.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft)"
          >
            <h3 className="font-display text-2xl text-(--color-text)">{item.label}</h3>
            <p className="mt-3 text-sm leading-relaxed text-(--color-muted)">{item.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
