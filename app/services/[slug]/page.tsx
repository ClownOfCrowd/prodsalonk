import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBlock } from "@/components/sections/cta-block";
import { SectionReveal } from "@/components/sections/section-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { getCurrentLocale } from "@/lib/i18n-server";
import { getServiceBySlug, getServices } from "@/lib/salon-data";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServices("en").map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const locale = await getCurrentLocale();
  const { slug } = await params;
  const service = getServiceBySlug(locale, slug);

  if (!service) {
    notFound();
  }

  const copy =
    locale === "ru"
      ? {
          duration: "Длительность:",
          price: "Стоимость:",
          book: "Записаться на услугу",
          expect: "Что вы получите",
          ideal: "Кому подходит",
          note:
            "Каждый визит начинается с короткой консультации, чтобы согласовать результат, уровень ухода и комфорт.",
          ctaTitle: "Готовы записаться на эту процедуру?",
          ctaDescription: "Выберите специалиста и удобное время за пару кликов.",
        }
      : locale === "es"
        ? {
            duration: "Duración:",
            price: "Precio:",
            book: "Reservar este servicio",
            expect: "Qué puedes esperar",
            ideal: "Ideal para",
            note:
              "Todas las citas empiezan con una consulta breve para alinear resultado, mantenimiento y comodidad.",
            ctaTitle: "¿Lista para reservar este tratamiento?",
            ctaDescription: "Elige especialista y horario preferido en pocos clics.",
          }
        : {
            duration: "Duration:",
            price: "Price:",
            book: "Book this service",
            expect: "What you can expect",
            ideal: "Ideal for",
            note:
              "All appointments begin with a short consultation to align outcome, maintenance level, and comfort preferences.",
            ctaTitle: "Ready to schedule this treatment?",
            ctaDescription: "Reserve your preferred specialist and time in just a few clicks.",
          };

  return (
    <div className="pb-24">
      <section className="mx-auto mt-10 grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="relative min-h-96 overflow-hidden rounded-3xl border border-(--color-line)">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="rounded-3xl border border-(--color-line) bg-white p-7 shadow-(--shadow-soft) sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-muted)">
            {service.category}
          </p>
          <h1 className="mt-3 font-display text-4xl text-(--color-text)">{service.title}</h1>
          <p className="mt-3 text-base text-(--color-muted)">{service.subtitle}</p>
          <p className="mt-5 text-sm leading-relaxed text-(--color-muted)">{service.description}</p>
          <div className="mt-6 flex gap-6 text-sm">
            <p>
              <span className="font-semibold text-(--color-text)">{copy.duration}</span> {service.duration}
            </p>
            <p>
              <span className="font-semibold text-(--color-text)">{copy.price}</span> {service.price}
            </p>
          </div>
          <ButtonLink href="/booking" className="mt-7 w-fit">
            {copy.book}
          </ButtonLink>
        </div>
      </section>

      <SectionReveal className="mt-16">
        <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft) sm:p-8">
            <h2 className="font-display text-3xl text-(--color-text)">{copy.expect}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-(--color-muted)">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="rounded-xl border border-(--color-line) bg-(--color-surface) px-3 py-2">
                  {benefit}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-(--color-line) bg-(--color-surface) p-6 shadow-(--shadow-soft) sm:p-8">
            <h2 className="font-display text-3xl text-(--color-text)">{copy.ideal}</h2>
            <p className="mt-4 text-sm leading-relaxed text-(--color-muted)">{service.idealFor}</p>
            <p className="mt-4 text-sm leading-relaxed text-(--color-muted)">
              {copy.note}
            </p>
          </article>
        </section>
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
