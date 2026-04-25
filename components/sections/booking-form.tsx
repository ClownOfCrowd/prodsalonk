"use client";

import { FormEvent, useState } from "react";
import { type Locale } from "@/lib/i18n";
import { getBookingDefaults } from "@/lib/salon-data";

type BookingFormProps = {
  compact?: boolean;
  locale: Locale;
};

export function BookingForm({ compact = false, locale }: BookingFormProps) {
  const bookingDefaults = getBookingDefaults(locale);
  const [submitted, setSubmitted] = useState(false);

  const [formState, setFormState] = useState({
    service: bookingDefaults.services[0],
    specialist: bookingDefaults.specialists[0],
    date: "",
    time: bookingDefaults.times[0],
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const formattedDate =
    formState.date.length > 0
      ? new Date(formState.date).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      : locale === "ru"
        ? "выбранную дату"
        : locale === "es"
          ? "la fecha elegida"
          : "your selected date";

  const labels = {
    requested: locale === "ru" ? "Запрос отправлен" : locale === "es" ? "Solicitud enviada" : "Request received",
    title: locale === "ru" ? "Запись оформлена" : locale === "es" ? "Reserva solicitada" : "Appointment requested",
    thanks:
      locale === "ru"
        ? `Спасибо. Консьерж подтвердит услугу ${formState.service} со специалистом ${formState.specialist} на ${formattedDate} в ${formState.time}.`
        : locale === "es"
          ? `Gracias. Nuestro concierge confirmará tu sesión de ${formState.service} con ${formState.specialist} para ${formattedDate} a las ${formState.time}.`
          : `Thank you. Our concierge will confirm your ${formState.service} session with ${formState.specialist} for ${formattedDate} at ${formState.time}.`,
    noteOne:
      locale === "ru"
        ? "Подтверждение придет по email или телефону в рабочие часы студии."
        : locale === "es"
          ? "Recibirás confirmación por correo o teléfono durante el horario del estudio."
          : "You will receive confirmation by email or phone during studio hours.",
    noteTwo:
      locale === "ru"
        ? "Нужно изменить детали? Ответьте на подтверждение, и мы все скорректируем."
        : locale === "es"
          ? "¿Necesitas cambiar algo? Responde al mensaje de confirmación y lo ajustaremos."
          : "Need to change details? Reply to the confirmation and we will adjust it.",
    reset: locale === "ru" ? "Записаться снова" : locale === "es" ? "Reservar otro horario" : "Book another time",
    intro:
      locale === "ru"
        ? "Выберите основные параметры. Финальные детали мы уточним на консультации в студии."
        : locale === "es"
          ? "Elige los parámetros esenciales. Ajustaremos los detalles finales durante la consulta en estudio."
          : "Choose the essentials below. We finalize treatment details during your in-studio consultation.",
    service: locale === "ru" ? "Услуга" : locale === "es" ? "Servicio" : "Service",
    specialist: locale === "ru" ? "Специалист" : locale === "es" ? "Especialista" : "Specialist",
    date: locale === "ru" ? "Дата" : locale === "es" ? "Fecha" : "Date",
    time: locale === "ru" ? "Время" : locale === "es" ? "Hora" : "Time",
    agreement:
      locale === "ru"
        ? "Отправляя форму, вы соглашаетесь получить подтверждение по этой заявке."
        : locale === "es"
          ? "Al enviar, aceptas recibir un mensaje de confirmación sobre esta solicitud."
          : "By submitting, you agree to receive a confirmation message regarding this booking request.",
    confirm: locale === "ru" ? "Подтвердить запрос" : locale === "es" ? "Confirmar solicitud" : "Confirm request",
  };

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft)"
        aria-live="polite"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-muted)">
          {labels.requested}
        </p>
        <h3 className="mt-2 font-display text-2xl text-(--color-text)">{labels.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-(--color-muted)">
          {labels.thanks}
        </p>
        <ul className="mt-4 space-y-2 text-sm text-(--color-muted)">
          <li className="rounded-lg border border-(--color-line) bg-(--color-surface) px-3 py-2">
            {labels.noteOne}
          </li>
          <li className="rounded-lg border border-(--color-line) bg-(--color-surface) px-3 py-2">
            {labels.noteTwo}
          </li>
        </ul>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 rounded-xl border border-(--color-line) px-4 py-2 text-sm font-semibold text-(--color-text) transition hover:bg-(--color-surface) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
        >
          {labels.reset}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft) sm:p-8"
      aria-label="Booking form"
    >
      <p className="text-sm leading-relaxed text-(--color-muted)">
        {labels.intro}
      </p>
      <div className={`grid gap-5 ${compact ? "sm:grid-cols-2" : "md:grid-cols-2"}`}>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-semibold text-(--color-text)">
            {labels.service}
          </label>
          <select
            id="service"
            value={formState.service}
            onChange={(event) => setFormState((prev) => ({ ...prev, service: event.target.value }))}
            className="h-11 w-full rounded-xl border border-(--color-line) bg-white px-3 text-sm text-(--color-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
            required
          >
            {bookingDefaults.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="specialist" className="mb-2 block text-sm font-semibold text-(--color-text)">
            {labels.specialist}
          </label>
          <select
            id="specialist"
            value={formState.specialist}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, specialist: event.target.value }))
            }
            className="h-11 w-full rounded-xl border border-(--color-line) bg-white px-3 text-sm text-(--color-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
            required
          >
            {bookingDefaults.specialists.map((specialist) => (
              <option key={specialist} value={specialist}>
                {specialist}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date" className="mb-2 block text-sm font-semibold text-(--color-text)">
            {labels.date}
          </label>
          <input
            id="date"
            type="date"
            value={formState.date}
            onChange={(event) => setFormState((prev) => ({ ...prev, date: event.target.value }))}
            className="h-11 w-full rounded-xl border border-(--color-line) bg-white px-3 text-sm text-(--color-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
            required
          />
        </div>

        <div>
          <label htmlFor="time" className="mb-2 block text-sm font-semibold text-(--color-text)">
            {labels.time}
          </label>
          <select
            id="time"
            value={formState.time}
            onChange={(event) => setFormState((prev) => ({ ...prev, time: event.target.value }))}
            className="h-11 w-full rounded-xl border border-(--color-line) bg-white px-3 text-sm text-(--color-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)"
            required
          >
            {bookingDefaults.times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-4 text-xs text-(--color-muted)">
        {labels.agreement}
      </p>

      <button
        type="submit"
        className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-(--color-text) px-6 text-sm font-semibold tracking-wide text-(--color-surface) transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
      >
        {labels.confirm}
      </button>
    </form>
  );
}
