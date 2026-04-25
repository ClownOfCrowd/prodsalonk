import { BeforeAfterCases } from "@/components/sections/before-after-cases";
import { CtaBlock } from "@/components/sections/cta-block";
import { MembershipsSection } from "@/components/sections/memberships-section";
import { PricingBlock } from "@/components/sections/pricing-block";
import { ProductsIngredients } from "@/components/sections/products-ingredients";
import { SectionReveal } from "@/components/sections/section-reveal";
import { ServiceCard } from "@/components/sections/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCurrentLocale } from "@/lib/i18n-server";
import { getServicesByCategory } from "@/lib/salon-data";

export default async function ServicesPage() {
  const locale = await getCurrentLocale();
  const groupedServices = getServicesByCategory(locale);
  const pricingOverview =
    locale === "ru"
      ? [
          {
            title: "Hair Atelier",
            startsFrom: "$120",
            items: [
              { name: "Signature стрижка и укладка", value: "$120" },
              { name: "Lived-In окрашивание", value: "$240" },
              { name: "Восстановительный hair-ритуал", value: "$95" },
            ],
          },
          {
            title: "Skin & Facial",
            startsFrom: "$140",
            items: [
              { name: "Radiance Reset уход", value: "$140" },
              { name: "Lift & Firm ритуал", value: "$185" },
              { name: "Express Glow Boost", value: "$90" },
            ],
          },
        ]
      : locale === "es"
        ? [
            {
              title: "Hair Atelier",
              startsFrom: "$120",
              items: [
                { name: "Corte Signature & Acabado", value: "$120" },
                { name: "Color Lived-In", value: "$240" },
                { name: "Ritual capilar restaurativo", value: "$95" },
              ],
            },
            {
              title: "Skin & Facial",
              startsFrom: "$140",
              items: [
                { name: "Facial Radiance Reset", value: "$140" },
                { name: "Ritual Lift & Firm", value: "$185" },
                { name: "Express Glow Boost", value: "$90" },
              ],
            },
          ]
        : [
            {
              title: "Hair Atelier",
              startsFrom: "$120",
              items: [
                { name: "Signature Cut & Finish", value: "$120" },
                { name: "Lived-In Color", value: "$240" },
                { name: "Restorative Hair Ritual", value: "$95" },
              ],
            },
            {
              title: "Skin & Facial",
              startsFrom: "$140",
              items: [
                { name: "Radiance Reset Facial", value: "$140" },
                { name: "Lift & Firm Ritual", value: "$185" },
                { name: "Express Glow Boost", value: "$90" },
              ],
            },
          ];

  const copy =
    locale === "ru"
      ? {
          eyebrow: "Услуги",
          title: "Продуманное меню процедур для современного бьюти-ухода",
          description:
            "Каждая услуга начинается с консультации и адаптируется под ваши цели, график и комфорт.",
          pricingEyebrow: "Стоимость",
          pricingTitle: "Прозрачный ориентир по ценам",
          pricingDescription:
            "Финальная стоимость может зависеть от длины, сложности и дополнительных опций после консультации.",
          ctaTitle: "Нужна помощь в выборе?",
          ctaDescription: "Запишитесь на короткую консультацию, и мы подберем оптимальный план услуг.",
        }
      : locale === "es"
        ? {
            eyebrow: "Servicios",
            title: "Menú curado de tratamientos para rituales de belleza modernos",
            description:
              "Cada servicio comienza con consulta y se adapta a tus objetivos, rutina y nivel de comodidad.",
            pricingEyebrow: "Resumen de precios",
            pricingTitle: "Tarifas base transparentes",
            pricingDescription:
              "El precio final puede variar según longitud, complejidad y extras definidos en consulta.",
            ctaTitle: "¿Necesitas guía antes de elegir?",
            ctaDescription: "Reserva una consulta breve y te recomendaremos la ruta de tratamiento ideal.",
          }
        : {
            eyebrow: "Services",
            title: "Curated treatment menu for modern beauty rituals",
            description:
              "Every service begins with consultation and adapts to your personal goals, schedule, and comfort.",
            pricingEyebrow: "Pricing Snapshot",
            pricingTitle: "Transparent starting rates",
            pricingDescription:
              "Final pricing may vary by length, complexity, and add-ons discussed during consultation.",
            ctaTitle: "Need guidance before choosing?",
            ctaDescription: "Book a short consultation and we will recommend the perfect service path for you.",
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

      {Object.entries(groupedServices).map(([category, categoryServices]) => (
        <SectionReveal key={category} className="mt-16">
          <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl text-(--color-text)">
              {categoryServices[0]?.categoryLabel ?? category}
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {categoryServices.map((service) => (
                <ServiceCard key={service.slug} service={service} locale={locale} />
              ))}
            </div>
          </section>
        </SectionReveal>
      ))}

      <SectionReveal className="mt-20">
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={copy.pricingEyebrow}
            title={copy.pricingTitle}
            description={copy.pricingDescription}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {pricingOverview.map((block) => (
              <PricingBlock
                key={block.title}
                title={block.title}
                startsFrom={block.startsFrom}
                items={block.items}
                locale={locale}
              />
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal className="mt-20">
        <ProductsIngredients locale={locale} />
      </SectionReveal>

      <SectionReveal className="mt-20">
        <BeforeAfterCases locale={locale} />
      </SectionReveal>

      <SectionReveal className="mt-20">
        <MembershipsSection locale={locale} />
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
