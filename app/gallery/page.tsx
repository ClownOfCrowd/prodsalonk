import { CtaBlock } from "@/components/sections/cta-block";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { SectionReveal } from "@/components/sections/section-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCurrentLocale } from "@/lib/i18n-server";

export default async function GalleryPage() {
  const locale = await getCurrentLocale();
  const copy =
    locale === "ru"
      ? {
          eyebrow: "Галерея",
          title: "Атмосфера студии и детали результата",
          description: "Интерьеры, рабочие моменты и финальный эстетичный результат процедур.",
          ctaTitle: "Готовы к собственному studio-опыту?",
          ctaDescription: "Запишитесь на визит, и мы составим персональный маршрут услуг.",
        }
      : locale === "es"
        ? {
            eyebrow: "Galería",
            title: "Una mirada a nuestra atmósfera y resultados",
            description: "Desde los espacios de tratamiento hasta los acabados finales, conoce el lenguaje visual del estudio.",
            ctaTitle: "¿Lista para vivir la experiencia del estudio?",
            ctaDescription: "Reserva tu cita y diseñaremos una ruta personalizada para ti.",
          }
        : {
            eyebrow: "Gallery",
            title: "A glimpse into our atmosphere and finishing details",
            description: "From treatment spaces to final results, explore the visual language of our studio.",
            ctaTitle: "Ready for your own studio experience?",
            ctaDescription: "Book your appointment and let us craft a service path that feels personal and elevated.",
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
          <GalleryGrid locale={locale} />
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
