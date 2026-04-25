import { type Locale } from "@/lib/i18n";
import { getTreatmentPhilosophy } from "@/lib/salon-data";
import { SectionHeading } from "@/components/ui/section-heading";

type TreatmentPhilosophyProps = {
  locale: Locale;
};

export function TreatmentPhilosophy({ locale }: TreatmentPhilosophyProps) {
  const treatmentPhilosophy = getTreatmentPhilosophy(locale);
  const copy =
    locale === "ru"
      ? {
          eyebrow: "Философия ухода",
          title: "Наш подход: профессионально, бережно и персонально",
          description:
            "Мы объединяем эстетическую точность и продуманные протоколы, чтобы результат выглядел естественно и оставался стабильным.",
        }
      : locale === "es"
        ? {
            eyebrow: "Filosofía de tratamiento",
            title: "Nuestro enfoque es técnico, sereno y personalizado",
            description:
              "Combinamos precisión estética con protocolos sólidos para lograr resultados elegantes y sostenibles.",
          }
        : {
            eyebrow: "Treatment Philosophy",
            title: "Our approach is thoughtful, clinical, and deeply personal",
            description:
              "We combine aesthetic artistry with disciplined treatment protocols, so outcomes look elevated and remain wearable in everyday life.",
          };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {treatmentPhilosophy.map((principle) => (
          <article
            key={principle.title}
            className="rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft)"
          >
            <h3 className="font-display text-2xl text-(--color-text)">{principle.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-(--color-muted)">
              {principle.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
