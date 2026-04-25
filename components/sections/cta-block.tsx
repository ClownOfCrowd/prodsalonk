import { ButtonLink } from "@/components/ui/button-link";
import { type Locale } from "@/lib/i18n";
import { getUIText } from "@/lib/salon-data";

type CtaBlockProps = {
  title: string;
  description: string;
  locale: Locale;
};

export function CtaBlock({ title, description, locale }: CtaBlockProps) {
  const text = getUIText(locale);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-(--color-line) bg-gradient-to-br from-(--color-surface) to-(--color-tint) p-8 shadow-(--shadow-soft) sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl text-(--color-text) sm:text-3xl">{title}</h3>
            <p className="mt-3 text-base leading-relaxed text-(--color-muted)">{description}</p>
          </div>
          <ButtonLink href="/booking" className="w-fit">
            {text.common.reserveAppointment}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
