import Image from "next/image";
import { BookingForm } from "@/components/sections/booking-form";
import { CtaBlock } from "@/components/sections/cta-block";
import { SectionReveal } from "@/components/sections/section-reveal";
import { ServiceCard } from "@/components/sections/service-card";
import { StudioExperience } from "@/components/sections/studio-experience";
import { TestimonialsSlider } from "@/components/sections/testimonials-slider";
import { TreatmentPhilosophy } from "@/components/sections/treatment-philosophy";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCurrentLocale } from "@/lib/i18n-server";
import { getServices, getSpecialists } from "@/lib/salon-data";

export default async function HomePage() {
  const locale = await getCurrentLocale();
  const featuredServices = getServices(locale).slice(0, 4);
  const specialists = getSpecialists(locale);

  const copy =
    locale === "ru"
      ? {
          heroEyebrow: "Премиальная студия self-care",
          heroTitle: "Бьюти-ритуалы, которые дарят спокойствие, эстетику и уверенность",
          heroDescription:
            "В Lumiere Atelier каждая деталь продумана: персональные планы ухода, спокойная атмосфера и специалисты, которые создают результат для реальной жизни.",
          heroCaption: "Где элегантность ощущается естественно",
          book: "Записаться",
          explore: "Смотреть услуги",
          mostRequested: "Самые востребованные",
          serviceTitle: "Ключевые услуги под ваш ритм и цели",
          serviceDescription: "Премиальный уход для волос, ногтей, кожи лица и восстановления тела.",
          teamPhilosophy: "Философия команды",
          teamTitle: "Техника с мягким подходом",
          teamDescription:
            "Наши специалисты сочетают точную технику и спокойную коммуникацию. Консультации не проходят в спешке, а рекомендации учитывают ваш ритм и стиль.",
          featuredLead: "Ведущий специалист:",
          meetTeam: "О команде",
          bookingEyebrow: "Запись за минуту",
          bookingTitle: "Простая форма записи без лишних шагов",
          bookingDescription: "Выберите услугу, специалиста, дату и время. Четко, быстро и понятно.",
          ctaTitle: "Забронируйте свой следующий ритуал ухода",
          ctaDescription: "На этой неделе есть ограниченные слоты на facial- и hair-услуги.",
        }
      : locale === "es"
        ? {
            heroEyebrow: "Estudio premium de self-care",
            heroTitle: "Rituales de belleza diseñados para calma, elegancia y confianza",
            heroDescription:
              "En Lumiere Atelier cada detalle es intencional: planes personalizados, ambiente sereno y especialistas que crean resultados para la vida real.",
            heroCaption: "Donde la elegancia se siente natural",
            book: "Reservar cita",
            explore: "Explorar servicios",
            mostRequested: "Más solicitados",
            serviceTitle: "Servicios clave adaptados a tu ritmo",
            serviceDescription: "Cuidado premium para cabello, uñas, piel y recuperación corporal.",
            teamPhilosophy: "Filosofía del equipo",
            teamTitle: "Técnica con trato humano",
            teamDescription:
              "Nuestros especialistas combinan precisión técnica con una atención serena. Las consultas se hacen sin prisa y cada recomendación se adapta a tu estilo de vida.",
            featuredLead: "Especialista destacada:",
            meetTeam: "Conocer equipo",
            bookingEyebrow: "Reserva en segundos",
            bookingTitle: "Flujo claro y rápido para reservar",
            bookingDescription: "Selecciona servicio, especialista, fecha y hora. Sin fricción.",
            ctaTitle: "Reserva tu próximo momento de cuidado",
            ctaDescription: "Tenemos disponibilidad limitada esta semana para facial y cabello.",
          }
        : {
            heroEyebrow: "Premium Self-Care Studio",
            heroTitle: "Beauty rituals designed to feel quiet, modern, and deeply personal.",
            heroDescription:
              "At Lumiere Atelier, every detail is intentional: tailored service plans, serene spaces, and specialists who understand refined beauty that looks effortless in real life.",
            heroCaption: "Where refinement feels effortless",
            book: "Book Appointment",
            explore: "Explore Services",
            mostRequested: "Most Requested",
            serviceTitle: "Signature services built around your lifestyle",
            serviceDescription: "Premium care across hair, nails, facial skin health, and body recovery rituals.",
            teamPhilosophy: "Team Philosophy",
            teamTitle: "Skill with softness",
            teamDescription:
              "Our specialists combine technical precision with a calm, human approach. Consultations are never rushed, and every recommendation is tailored to your comfort, routine, and visual identity.",
            featuredLead: "Featured lead:",
            meetTeam: "Meet the Team",
            bookingEyebrow: "Book In Seconds",
            bookingTitle: "A clean booking flow, built for clarity",
            bookingDescription: "Select service, specialist, date, and time. No clutter, no friction.",
            ctaTitle: "Reserve your next moment of care",
            ctaDescription: "Limited same-week appointments available for facial and hair services.",
          };
  return (
    <div className="pb-24">
      <section className="mx-auto mt-8 grid w-full max-w-6xl gap-8 px-4 sm:mt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="rounded-3xl border border-(--color-line) bg-(--color-surface) p-8 shadow-(--shadow-soft) sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-muted)">
            {copy.heroEyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-(--color-text) sm:text-5xl">
            {copy.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-(--color-muted) sm:text-lg">
            {copy.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/booking">{copy.book}</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              {copy.explore}
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-96 overflow-hidden rounded-3xl border border-(--color-line)">
          <Image
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80"
            alt="Calm premium salon interior"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/40 to-transparent p-6">
            <p className="font-display text-2xl text-white">{copy.heroCaption}</p>
          </div>
        </div>
      </section>

      <SectionReveal className="mt-20">
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={copy.mostRequested}
            title={copy.serviceTitle}
            description={copy.serviceDescription}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} locale={locale} />
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal className="mt-20">
        <TreatmentPhilosophy locale={locale} />
      </SectionReveal>

      <SectionReveal className="mt-20">
        <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <TestimonialsSlider locale={locale} />
          <article className="rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft) sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-muted)">
              {copy.teamPhilosophy}
            </p>
            <h2 className="mt-3 font-display text-3xl text-(--color-text)">{copy.teamTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-(--color-muted) sm:text-base">
              {copy.teamDescription}
            </p>
            <p className="mt-6 text-sm text-(--color-text)">
              {copy.featuredLead} <span className="font-semibold">{specialists[0].name}</span>, {specialists[0].role}
            </p>
            <ButtonLink href="/team" variant="secondary" className="mt-6 w-fit">
              {copy.meetTeam}
            </ButtonLink>
          </article>
        </section>
      </SectionReveal>

      <SectionReveal className="mt-20">
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={copy.bookingEyebrow}
            title={copy.bookingTitle}
            description={copy.bookingDescription}
          />
          <div className="mt-8 max-w-4xl">
            <BookingForm compact locale={locale} />
          </div>
        </section>
      </SectionReveal>

      <SectionReveal className="mt-20">
        <StudioExperience locale={locale} />
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
