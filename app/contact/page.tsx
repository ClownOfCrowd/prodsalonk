import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactDetails } from "@/lib/salon-data";
import { getCurrentLocale } from "@/lib/i18n-server";

export default async function ContactPage() {
  const locale = await getCurrentLocale();
  const localizedHours =
    locale === "ru"
      ? ["Пн - Пт: 9:00 - 20:00", "Суббота: 9:00 - 18:00", "Воскресенье: 10:00 - 16:00"]
      : locale === "es"
        ? ["Lun - Vie: 9:00 - 20:00", "Sábado: 9:00 - 18:00", "Domingo: 10:00 - 16:00"]
        : contactDetails.hours;

  const copy =
    locale === "ru"
      ? {
          eyebrow: "Контакты",
          title: "Посетите Lumiere Atelier",
          description: "Мы находимся в SoHo и ждем вас на персонализированные бьюти- и self-care сессии.",
          details: "Информация о студии",
          address: "Адрес",
          phone: "Телефон",
          email: "Email",
          hours: "Часы работы",
          book: "Записаться",
          arrival: "Как нас найти",
          p1: "Вход в студию находится на Mercer Street, второй этаж. В будние вечера рекомендуем заранее бронировать парковку рядом.",
          p2: "Для групповых визитов и private-форматов напишите нашему консьержу на email, и мы подготовим индивидуальный маршрут услуг.",
        }
      : locale === "es"
        ? {
            eyebrow: "Contacto",
            title: "Visita Lumiere Atelier",
            description: "Estamos en SoHo y te esperamos para sesiones premium de belleza y self-care personalizadas.",
            details: "Detalles del estudio",
            address: "Dirección",
            phone: "Teléfono",
            email: "Email",
            hours: "Horario",
            book: "Reservar cita",
            arrival: "Notas de llegada",
            p1: "Nuestra entrada está en Mercer Street, segundo piso. Si vienes en coche, recomendamos reservar parking cercano con antelación.",
            p2: "Para reservas en grupo o eventos privados, escribe a nuestro concierge y prepararemos un itinerario dedicado.",
          }
        : {
            eyebrow: "Contact",
            title: "Visit Lumiere Atelier",
            description:
              "We are located in SoHo and welcome you for thoughtfully tailored beauty and self-care sessions.",
            details: "Studio details",
            address: "Address",
            phone: "Phone",
            email: "Email",
            hours: "Opening hours",
            book: "Book Appointment",
            arrival: "Arrival notes",
            p1: "Our entrance is on Mercer Street, second floor. If you are visiting by car, we recommend reserving parking nearby in advance during weekday evenings.",
            p2: "For group bookings or private events, contact our concierge by email and we will create a dedicated service itinerary.",
          };

  return (
    <div className="pb-24">
      <section className="mx-auto mt-12 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft) sm:p-8">
            <h2 className="font-display text-2xl text-(--color-text)">{copy.details}</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-(--color-text)">{copy.address}</dt>
                <dd className="text-(--color-muted)">{contactDetails.address}</dd>
              </div>
              <div>
                <dt className="font-semibold text-(--color-text)">{copy.phone}</dt>
                <dd className="text-(--color-muted)">{contactDetails.phone}</dd>
              </div>
              <div>
                <dt className="font-semibold text-(--color-text)">{copy.email}</dt>
                <dd className="text-(--color-muted)">{contactDetails.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-(--color-text)">{copy.hours}</dt>
                <dd className="text-(--color-muted)">
                  {localizedHours.map((entry) => (
                    <p key={entry}>{entry}</p>
                  ))}
                </dd>
              </div>
            </dl>
            <ButtonLink href="/booking" className="mt-7 w-fit">
              {copy.book}
            </ButtonLink>
          </article>

          <article className="rounded-2xl border border-(--color-line) bg-(--color-surface) p-6 shadow-(--shadow-soft) sm:p-8">
            <h2 className="font-display text-2xl text-(--color-text)">{copy.arrival}</h2>
            <p className="mt-3 text-sm leading-relaxed text-(--color-muted)">
              {copy.p1}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-(--color-muted)">
              {copy.p2}
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
