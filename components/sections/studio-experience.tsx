import Image from "next/image";
import { type Locale } from "@/lib/i18n";
import { getStudioExperience } from "@/lib/salon-data";

type StudioExperienceProps = {
  locale: Locale;
};

export function StudioExperience({ locale }: StudioExperienceProps) {
  const studioExperience = getStudioExperience(locale);
  const eyebrow = locale === "ru" ? "Опыт в студии" : locale === "es" ? "Experiencia en estudio" : "Studio Experience";
  const imageAlt =
    locale === "ru"
      ? "Атмосфера кабинета в студии"
      : locale === "es"
        ? "Ambiente de cabina en estudio"
        : "Studio treatment room ambiance";

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <article className="rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft) sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-muted)">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl text-(--color-text)">{studioExperience.title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-(--color-muted)">
          {studioExperience.description}
        </p>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-(--color-muted)">
          {studioExperience.points.map((point) => (
            <li key={point} className="rounded-xl border border-(--color-line) bg-(--color-surface) px-3 py-2">
              {point}
            </li>
          ))}
        </ul>
      </article>

      <div className="relative min-h-96 overflow-hidden rounded-2xl border border-(--color-line)">
        <Image
          src={studioExperience.image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
