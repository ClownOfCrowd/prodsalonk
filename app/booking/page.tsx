import { BookingForm } from "@/components/sections/booking-form";
import { FaqSection } from "@/components/sections/faq-section";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SectionReveal } from "@/components/sections/section-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCurrentLocale } from "@/lib/i18n-server";

export default async function BookingPage() {
  const locale = await getCurrentLocale();
  const bookingNotes =
    locale === "ru"
      ? [
          "Подтверждение отправляется в рабочее время студии.",
          "Нужно скорректировать запись? Ответьте на письмо с подтверждением.",
          "Пожалуйста, приходите за 10 минут до консультации.",
        ]
      : locale === "es"
        ? [
            "La confirmación se envía dentro del horario de estudio.",
            "¿Necesitas ajustar tu reserva? Responde al correo de confirmación.",
            "Por favor, llega 10 minutos antes para la consulta.",
          ]
        : [
            "A confirmation message is sent within working hours.",
            "Need to adjust your booking? Reply to the confirmation email.",
            "Please arrive 10 minutes early for your consultation.",
          ];

  const copy =
    locale === "ru"
      ? {
          eyebrow: "Запись",
          title: "Оформите запись меньше чем за минуту",
          description: "Простой сценарий, чтобы быстро выбрать услугу, специалиста и удобное время.",
          asideTitle: "Перед визитом",
        }
      : locale === "es"
        ? {
            eyebrow: "Reserva",
            title: "Reserva tu cita en menos de un minuto",
            description: "Flujo simple para asegurar servicio y especialista sin pasos innecesarios.",
            asideTitle: "Antes de tu visita",
          }
        : {
            eyebrow: "Booking",
            title: "Reserve your appointment in under a minute",
            description:
              "Simple flow designed to help you secure your preferred service and specialist quickly.",
            asideTitle: "Before you visit",
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

      <SectionReveal className="mt-10">
        <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <BookingForm locale={locale} />
          <aside className="rounded-2xl border border-(--color-line) bg-(--color-surface) p-6 shadow-(--shadow-soft)">
            <h2 className="font-display text-2xl text-(--color-text)">{copy.asideTitle}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-(--color-muted)">
              {bookingNotes.map((note) => (
                <li key={note} className="rounded-xl border border-(--color-line) bg-white px-3 py-2">
                  {note}
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </SectionReveal>

      <SectionReveal className="mt-20">
        <HowItWorks locale={locale} />
      </SectionReveal>

      <SectionReveal className="mt-20">
        <FaqSection locale={locale} />
      </SectionReveal>
    </div>
  );
}
