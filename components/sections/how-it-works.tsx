import { type Locale } from "@/lib/i18n";
import { getUIText, getVisitFlow } from "@/lib/salon-data";
import { SectionHeading } from "@/components/ui/section-heading";

type HowItWorksProps = {
  locale: Locale;
};

export function HowItWorks({ locale }: HowItWorksProps) {
  const visitFlow = getVisitFlow(locale);
  const text = getUIText(locale);
  const eyebrow = locale === "ru" ? "Как это работает" : locale === "es" ? "Cómo funciona" : "How It Works";

  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={eyebrow}
        title={text.common.howItWorksTitle}
        description={text.common.howItWorksDescription}
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {visitFlow.map((step) => (
          <article
            key={step.title}
            className="rounded-2xl border border-(--color-line) bg-white p-5 shadow-(--shadow-soft)"
          >
            <h3 className="font-display text-2xl text-(--color-text)">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-(--color-muted)">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
