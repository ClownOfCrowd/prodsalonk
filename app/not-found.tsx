import { ButtonLink } from "@/components/ui/button-link";
import { getCurrentLocale } from "@/lib/i18n-server";

export default async function NotFoundPage() {
  const locale = await getCurrentLocale();
  const copy =
    locale === "ru"
      ? {
          title: "Страница не найдена",
          description:
            "Страница недоступна или была перемещена. Вы можете продолжить просмотр услуг или вернуться на главную.",
          home: "Главная",
          services: "Услуги",
        }
      : locale === "es"
        ? {
            title: "Página no encontrada",
            description:
              "La página que buscas no está disponible o se ha movido. Puedes seguir explorando servicios o volver al inicio.",
            home: "Inicio",
            services: "Servicios",
          }
        : {
            title: "Page not found",
            description:
              "The page you are looking for is unavailable or has moved. You can continue exploring our services or return home.",
            home: "Home",
            services: "Services",
          };

  return (
    <section className="mx-auto flex min-h-[55vh] w-full max-w-3xl flex-col items-center justify-center px-4 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-muted)">404</p>
      <h1 className="mt-3 font-display text-4xl text-(--color-text)">{copy.title}</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-(--color-muted) sm:text-base">
        {copy.description}
      </p>
      <div className="mt-8 flex gap-3">
        <ButtonLink href="/">{copy.home}</ButtonLink>
        <ButtonLink href="/services" variant="secondary">
          {copy.services}
        </ButtonLink>
      </div>
    </section>
  );
}
