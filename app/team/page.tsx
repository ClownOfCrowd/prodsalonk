import { CtaBlock } from "@/components/sections/cta-block";
import { ExpertCredibility } from "@/components/sections/expert-credibility";
import { SectionReveal } from "@/components/sections/section-reveal";
import { SpecialistCard } from "@/components/sections/specialist-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCurrentLocale } from "@/lib/i18n-server";
import { getSpecialists } from "@/lib/salon-data";

export default async function TeamPage() {
  const locale = await getCurrentLocale();
  const specialists = getSpecialists(locale);
  const copy =
    locale === "ru"
      ? {
          eyebrow: "Специалисты",
          title: "Команда экспертов Lumiere Atelier",
          description:
            "Сильная команда, известная точной техникой, внимательной коммуникацией и стабильным результатом.",
          ctaTitle: "Выбирайте специалиста уверенно",
          ctaDescription:
            "В каждом профиле указаны специализации, чтобы вам было проще подобрать правильного мастера.",
        }
      : locale === "es"
        ? {
            eyebrow: "Especialistas",
            title: "Conoce al equipo detrás de Lumiere Atelier",
            description:
              "Un equipo cercano reconocido por precisión técnica, trato cálido y resultados consistentes.",
            ctaTitle: "Elige especialista con confianza",
            ctaDescription:
              "Cada perfil incluye áreas de enfoque para ayudarte a encontrar a la persona ideal.",
          }
        : {
            eyebrow: "Specialists",
            title: "Meet the artists and therapists behind Lumiere",
            description:
              "A close-knit team known for technical precision, warm communication, and timeless results.",
            ctaTitle: "Choose your specialist with confidence",
            ctaDescription:
              "Every profile includes focus areas to help you match with the right expert for your goals.",
          };

  return (
    <div className="pb-24">
      <section className="mx-auto mt-12 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
      </section>

      <SectionReveal className="mt-12">
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {specialists.map((specialist) => (
              <SpecialistCard key={specialist.id} specialist={specialist} locale={locale} />
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal className="mt-20">
        <ExpertCredibility locale={locale} />
      </SectionReveal>

      <SectionReveal className="mt-20">
        <CtaBlock
          title={copy.ctaTitle}
          description={copy.ctaDescription}
          locale={locale}
        />
      </SectionReveal>
    </div>
  );
}
