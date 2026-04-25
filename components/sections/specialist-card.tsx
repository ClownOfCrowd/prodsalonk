import Image from "next/image";
import type { Specialist } from "@/lib/salon-data";
import { type Locale } from "@/lib/i18n";
import { getUIText } from "@/lib/salon-data";

type SpecialistCardProps = {
  specialist: Specialist;
  locale: Locale;
};

export function SpecialistCard({ specialist, locale }: SpecialistCardProps) {
  const text = getUIText(locale);

  return (
    <article className="rounded-2xl border border-(--color-line) bg-white p-5 shadow-(--shadow-soft)">
      <div className="relative h-72 overflow-hidden rounded-xl">
        <Image
          src={specialist.image}
          alt={specialist.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-5 font-display text-2xl text-(--color-text)">{specialist.name}</h3>
      <p className="mt-1 text-sm font-semibold text-(--color-muted)">{specialist.role}</p>
      <p className="mt-2 text-sm text-(--color-text)">{specialist.experience} {text.common.yearsExperience}</p>
      <p className="mt-1 text-sm leading-relaxed text-(--color-muted)">{specialist.focus}</p>
      <p className="mt-4 border-l-2 border-(--color-accent) pl-3 text-sm italic text-(--color-muted)">
        “{specialist.quote}”
      </p>
    </article>
  );
}
