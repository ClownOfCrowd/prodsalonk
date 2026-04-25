import { type Locale } from "@/lib/i18n";
import { getProductHighlights } from "@/lib/salon-data";
import { SectionHeading } from "@/components/ui/section-heading";

type ProductsIngredientsProps = {
  locale: Locale;
};

export function ProductsIngredients({ locale }: ProductsIngredientsProps) {
  const productHighlights = getProductHighlights(locale);
  const copy =
    locale === "ru"
      ? {
          eyebrow: "Продукты и ингредиенты",
          title: "Премиальные формулы с доказуемым эффектом",
          description:
            "Мы работаем с брендами, которые дают стабильный результат и бережно относятся к коже и волосам.",
          label: "В работе в студии:",
        }
      : locale === "es"
        ? {
            eyebrow: "Productos e ingredientes",
            title: "Fórmulas premium elegidas por eficacia y seguridad",
            description:
              "Trabajamos con marcas seleccionadas por rendimiento real y compatibilidad con distintas condiciones de piel y cabello.",
            label: "Uso en estudio:",
          }
        : {
            eyebrow: "Products & Ingredients",
            title: "Professional formulas selected for performance and skin integrity",
            description:
              "We work with premium brands chosen for efficacy, stability, and compatibility across different skin and hair conditions.",
            label: "In-studio use:",
          };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {productHighlights.map((product) => (
          <article
            key={product.name}
            className="rounded-2xl border border-(--color-line) bg-white p-6 shadow-(--shadow-soft)"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-muted)">
              {product.category}
            </p>
            <h3 className="mt-2 font-display text-2xl text-(--color-text)">{product.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-(--color-muted)">{product.description}</p>
            <p className="mt-4 text-sm text-(--color-text)">
              <span className="font-semibold">{copy.label}</span> {product.signature}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
