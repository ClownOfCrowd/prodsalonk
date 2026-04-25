import type { Locale } from "@/lib/i18n";

export type ServiceCategory = "Hair" | "Nails" | "Skin" | "Body";

type LocalizedString = Record<Locale, string>;
type LocalizedStringList = Record<Locale, string[]>;

type RawService = {
  slug: string;
  category: ServiceCategory;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  duration: string;
  price: string;
  benefits: LocalizedStringList;
  idealFor: LocalizedString;
  heroImage: string;
};

export type Service = {
  slug: string;
  category: ServiceCategory;
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  price: string;
  benefits: string[];
  idealFor: string;
  heroImage: string;
};

type RawSpecialist = {
  id: string;
  name: string;
  role: LocalizedString;
  experience: string;
  focus: LocalizedString;
  quote: LocalizedString;
  image: string;
};

export type Specialist = {
  id: string;
  name: string;
  role: string;
  experience: string;
  focus: string;
  quote: string;
  image: string;
};

type RawTestimonial = {
  name: string;
  text: LocalizedString;
  service: LocalizedString;
  experience: LocalizedString;
};

export type Testimonial = {
  name: string;
  text: string;
  service: string;
  experience: string;
};

type RawGalleryImage = {
  src: string;
  alt: LocalizedString;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

type RawSimpleItem = {
  title: LocalizedString;
  description: LocalizedString;
};

type RawFaq = {
  question: LocalizedString;
  answer: LocalizedString;
};

type RawMembership = {
  name: LocalizedString;
  price: string;
  description: LocalizedString;
  features: LocalizedStringList;
};

export type Membership = {
  name: string;
  price: string;
  description: string;
  features: string[];
};

type RawBeforeAfter = {
  client: LocalizedString;
  service: LocalizedString;
  before: LocalizedString;
  after: LocalizedString;
  timeframe: LocalizedString;
};

export type BeforeAfterCase = {
  client: string;
  service: string;
  before: string;
  after: string;
  timeframe: string;
};

type RawCredibility = {
  label: LocalizedString;
  value: LocalizedString;
};

export type CredibilityItem = {
  label: string;
  value: string;
};

type RawProduct = {
  name: string;
  category: LocalizedString;
  description: LocalizedString;
  signature: LocalizedString;
};

export type ProductHighlight = {
  name: string;
  category: string;
  description: string;
  signature: string;
};

const categoryLabels: Record<ServiceCategory, LocalizedString> = {
  Hair: { en: "Hair", ru: "Волосы", es: "Cabello" },
  Nails: { en: "Nails", ru: "Ногти", es: "Uñas" },
  Skin: { en: "Skin", ru: "Кожа", es: "Piel" },
  Body: { en: "Body", ru: "Тело", es: "Cuerpo" },
};

const rawServices: RawService[] = [
  {
    slug: "signature-cut-finish",
    category: "Hair",
    title: {
      en: "Signature Cut & Finish",
      ru: "Signature стрижка и укладка",
      es: "Corte Signature & Acabado",
    },
    subtitle: {
      en: "Shape, movement, and effortless polish.",
      ru: "Форма, движение и естественная аккуратность.",
      es: "Forma, movimiento y un acabado impecable sin esfuerzo.",
    },
    description: {
      en: "A personalized haircut experience with consultation, precision cutting, and a smoothing finish tailored to your daily rhythm.",
      ru: "Персонализированная стрижка с консультацией, точной техникой и финальной укладкой, адаптированной под ваш ежедневный ритм.",
      es: "Experiencia de corte personalizada con consulta, técnica de precisión y acabado pulido adaptado a tu rutina diaria.",
    },
    duration: "75 min",
    price: "$120",
    benefits: {
      en: [
        "Personalized silhouette based on face shape and texture",
        "Lightweight blowout for natural movement",
        "Product recommendations for easy at-home styling",
      ],
      ru: [
        "Индивидуальный силуэт с учетом формы лица и текстуры волос",
        "Легкая укладка с естественным движением",
        "Рекомендации по продуктам для простого домашнего ухода",
      ],
      es: [
        "Silueta personalizada según el rostro y la textura del cabello",
        "Secado ligero para un movimiento natural",
        "Recomendaciones de productos para peinado en casa",
      ],
    },
    idealFor: {
      en: "Clients who want an elevated everyday look that feels clean, soft, and intentional.",
      ru: "Для гостей, которым нужен продуманный повседневный образ: чистый, мягкий и собранный.",
      es: "Para clientes que buscan un look diario elevado, limpio y natural.",
    },
    heroImage:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "lived-in-color",
    category: "Hair",
    title: {
      en: "Lived-In Color",
      ru: "Lived-In окрашивание",
      es: "Color Lived-In",
    },
    subtitle: {
      en: "Dimensional tone with low-maintenance elegance.",
      ru: "Многогранный оттенок с элегантным и практичным результатом.",
      es: "Tono con dimensión y elegancia de bajo mantenimiento.",
    },
    description: {
      en: "Custom balayage and gloss service designed for seamless grow-out and luminous depth from root to tip.",
      ru: "Индивидуальное balayage-окрашивание и глоссинг для мягкого отрастания и сияющей глубины цвета.",
      es: "Balayage y gloss personalizados para un crecimiento suave y una profundidad luminosa de raíz a puntas.",
    },
    duration: "150 min",
    price: "$240",
    benefits: {
      en: [
        "Soft grow-out line with strategic placement",
        "Shine-enhancing gloss included",
        "Tone matched to your skin undertone and lifestyle",
      ],
      ru: [
        "Мягкая линия отрастания благодаря стратегическому размещению бликов",
        "Глоссинг для усиленного блеска включен",
        "Оттенок подбирается под подтон кожи и образ жизни",
      ],
      es: [
        "Transición suave en raíz con colocación estratégica",
        "Gloss potenciador de brillo incluido",
        "Tono adaptado a tu subtono de piel y estilo de vida",
      ],
    },
    idealFor: {
      en: "Anyone seeking natural-looking brightness that remains beautiful between appointments.",
      ru: "Для тех, кто хочет естественную яркость цвета, сохраняющуюся между визитами.",
      es: "Ideal para quien busca luminosidad natural que se mantenga entre citas.",
    },
    heroImage:
      "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "couture-manicure",
    category: "Nails",
    title: { en: "Couture Manicure", ru: "Couture маникюр", es: "Manicura Couture" },
    subtitle: {
      en: "Refined care for elegant hands.",
      ru: "Деликатный уход для безупречного вида рук.",
      es: "Cuidado refinado para manos elegantes.",
    },
    description: {
      en: "Detailed nail shaping, cuticle work, restorative treatment, and long-lasting color in curated neutral and statement tones.",
      ru: "Тщательная архитектура ногтя, работа с кутикулой, восстановление и стойкое покрытие в нейтральной или акцентной палитре.",
      es: "Forma detallada, cuidado de cutícula, tratamiento reparador y color de larga duración en tonos neutros o de acento.",
    },
    duration: "60 min",
    price: "$65",
    benefits: {
      en: ["Nail and cuticle health first", "Long-wear polish prep and application", "Hydrating hand massage"],
      ru: ["Приоритет здоровья ногтевой пластины и кутикулы", "Подготовка и нанесение стойкого покрытия", "Увлажняющий массаж рук"],
      es: ["Prioridad a la salud de uñas y cutículas", "Preparación y aplicación de esmalte de larga duración", "Masaje hidratante de manos"],
    },
    idealFor: {
      en: "Guests who appreciate clean detail, understated luxury, and impeccable finish.",
      ru: "Для гостей, ценящих чистую работу, сдержанную роскошь и идеальный финиш.",
      es: "Para quienes valoran el detalle limpio, el lujo discreto y un acabado impecable.",
    },
    heroImage:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "architectural-gel",
    category: "Nails",
    title: { en: "Architectural Gel", ru: "Архитектурный гель", es: "Gel Arquitectónico" },
    subtitle: {
      en: "Strength, shape, and modern minimal artistry.",
      ru: "Прочность, чистая форма и современная минималистичная эстетика.",
      es: "Resistencia, forma y estética minimalista moderna.",
    },
    description: {
      en: "Structured gel overlay that reinforces natural nails while maintaining a lightweight, refined look.",
      ru: "Структурный гелевый слой укрепляет натуральные ногти, сохраняя легкий и аккуратный результат.",
      es: "Capa de gel estructural que refuerza la uña natural manteniendo un aspecto ligero y elegante.",
    },
    duration: "90 min",
    price: "$95",
    benefits: {
      en: ["Builds natural nail strength", "Sleek profile with no bulk", "Lasting wear for busy schedules"],
      ru: ["Укрепляет натуральную ногтевую пластину", "Элегантный профиль без лишнего объема", "Стойкость при активном графике"],
      es: ["Fortalece la uña natural", "Perfil fino sin volumen excesivo", "Duración prolongada para agendas activas"],
    },
    idealFor: {
      en: "Clients needing durability without sacrificing sophisticated aesthetics.",
      ru: "Для клиентов, которым нужна стойкость без потери эстетики.",
      es: "Para clientes que necesitan durabilidad sin perder elegancia.",
    },
    heroImage:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "radiance-reset-facial",
    category: "Skin",
    title: { en: "Radiance Reset Facial", ru: "Radiance Reset уход", es: "Facial Radiance Reset" },
    subtitle: {
      en: "Hydration, calm, and visible glow.",
      ru: "Увлажнение, спокойствие кожи и заметное сияние.",
      es: "Hidratación, calma y luminosidad visible.",
    },
    description: {
      en: "A deeply replenishing facial combining gentle exfoliation, active serums, and sculpting massage for healthy luminosity.",
      ru: "Глубоко восстанавливающий уход с мягкой эксфолиацией, активными сыворотками и скульптурным массажем.",
      es: "Facial reparador con exfoliación suave, sueros activos y masaje de efecto lifting para una luminosidad saludable.",
    },
    duration: "70 min",
    price: "$140",
    benefits: {
      en: ["Rebalances dehydration and dullness", "Supports skin barrier resilience", "Leaves skin smooth, supple, and bright"],
      ru: ["Восстанавливает баланс при обезвоженности и тусклости", "Поддерживает барьерные функции кожи", "Оставляет кожу гладкой и сияющей"],
      es: ["Reequilibra deshidratación y opacidad", "Refuerza la barrera cutánea", "Deja la piel suave, flexible y luminosa"],
    },
    idealFor: {
      en: "Stressed skin in need of immediate refresh before events or travel.",
      ru: "Для кожи в стрессе, когда нужен быстрый видимый результат перед событиями или поездкой.",
      es: "Para piel estresada que necesita renovación inmediata antes de eventos o viajes.",
    },
    heroImage:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "lift-firm-ritual",
    category: "Skin",
    title: { en: "Lift & Firm Ritual", ru: "Lift & Firm ритуал", es: "Ritual Lift & Firm" },
    subtitle: {
      en: "Targeted performance with a restorative touch.",
      ru: "Точечное воздействие с деликатным восстановлением.",
      es: "Tratamiento de precisión con enfoque reparador.",
    },
    description: {
      en: "Advanced treatment focused on contour, elasticity, and tone using peptide-rich formulas and lifting massage techniques.",
      ru: "Продвинутый уход для контура, упругости и тонуса с пептидными формулами и лифтинговыми техниками массажа.",
      es: "Tratamiento avanzado para contorno, elasticidad y tono con fórmulas ricas en péptidos y masaje lifting.",
    },
    duration: "85 min",
    price: "$185",
    benefits: {
      en: ["Defines and tones facial contours", "Improves skin texture and bounce", "Visible immediate refinement"],
      ru: ["Подчеркивает и подтягивает контуры лица", "Улучшает текстуру и упругость", "Дает видимый эффект сразу после процедуры"],
      es: ["Define y tonifica contornos faciales", "Mejora textura y elasticidad", "Refinamiento visible inmediato"],
    },
    idealFor: {
      en: "Mature or fatigued skin seeking a visibly sculpted, refreshed effect.",
      ru: "Для зрелой или уставшей кожи, которой нужен выраженный эффект обновления.",
      es: "Para piel madura o fatigada que busca un efecto esculpido y renovado.",
    },
    heroImage:
      "https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "mineral-body-polish",
    category: "Body",
    title: { en: "Mineral Body Polish", ru: "Mineral Body Polish", es: "Exfoliación Corporal Mineral" },
    subtitle: {
      en: "Smooth texture and renewed softness.",
      ru: "Гладкая текстура кожи и мягкость после процедуры.",
      es: "Textura suave y tersura renovada.",
    },
    description: {
      en: "A full-body exfoliation and hydration ritual using mineral-rich blends to reveal velvety skin and reset body fatigue.",
      ru: "Полноценный ритуал эксфолиации и увлажнения с минеральными составами для бархатистой кожи и ощущения легкости в теле.",
      es: "Ritual de exfoliación e hidratación corporal con mezclas minerales para revelar piel aterciopelada y aliviar fatiga corporal.",
    },
    duration: "55 min",
    price: "$110",
    benefits: {
      en: ["Removes dull, dry buildup", "Boosts micro-circulation", "Leaves skin silk-soft and nourished"],
      ru: ["Удаляет тусклый и сухой слой", "Стимулирует микроциркуляцию", "Оставляет кожу шелковистой и напитанной"],
      es: ["Elimina acumulación seca y opaca", "Activa la microcirculación", "Deja la piel sedosa y nutrida"],
    },
    idealFor: {
      en: "Anyone looking to restore body skin comfort and luminous texture.",
      ru: "Для тех, кто хочет вернуть комфорт коже тела и естественное сияние.",
      es: "Ideal para recuperar confort y luminosidad en la piel del cuerpo.",
    },
    heroImage:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "deep-release-massage",
    category: "Body",
    title: { en: "Deep Release Massage", ru: "Deep Release массаж", es: "Masaje Deep Release" },
    subtitle: {
      en: "Grounding pressure for body and mind.",
      ru: "Глубокая работа с напряжением для тела и нервной системы.",
      es: "Presión terapéutica para relajar cuerpo y mente.",
    },
    description: {
      en: "Therapeutic full-body massage with pressure customized to your tension map, encouraging deep release and nervous system calm.",
      ru: "Терапевтический массаж всего тела с индивидуальной глубиной давления по карте напряжения.",
      es: "Masaje terapéutico integral con presión personalizada según tus zonas de tensión.",
    },
    duration: "80 min",
    price: "$160",
    benefits: {
      en: ["Eases chronic shoulder and back tension", "Promotes better sleep and recovery", "Improves mobility and circulation"],
      ru: ["Снимает хроническое напряжение плеч и спины", "Улучшает сон и восстановление", "Повышает подвижность и кровообращение"],
      es: ["Alivia tensión crónica en hombros y espalda", "Favorece sueño y recuperación", "Mejora movilidad y circulación"],
    },
    idealFor: {
      en: "Guests balancing demanding schedules who need meaningful recovery.",
      ru: "Для гостей с интенсивным графиком, которым нужно качественное восстановление.",
      es: "Para personas con agendas exigentes que necesitan recuperación real.",
    },
    heroImage:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1400&q=80",
  },
];

const rawSpecialists: RawSpecialist[] = [
  {
    id: "alina-kim",
    name: "Alina Kim",
    role: {
      en: "Creative Hair Director",
      ru: "Креативный директор по волосам",
      es: "Directora Creativa de Cabello",
    },
    experience: "11 years",
    focus: {
      en: "Precision cuts, lived-in color",
      ru: "Точные стрижки, lived-in окрашивание",
      es: "Cortes de precisión y color lived-in",
    },
    quote: {
      en: "Great hair should feel like confidence, not maintenance.",
      ru: "Красивые волосы должны давать уверенность, а не требовать постоянных усилий.",
      es: "Un gran cabello debe sentirse como confianza, no como mantenimiento.",
    },
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "mira-zhou",
    name: "Mira Zhou",
    role: {
      en: "Lead Skin Therapist",
      ru: "Ведущий skin-терапевт",
      es: "Especialista Principal en Piel",
    },
    experience: "9 years",
    focus: {
      en: "Barrier repair facials, sculpting rituals",
      ru: "Восстановление барьера, скульптурные уходы",
      es: "Faciales de reparación de barrera y rituales de escultura",
    },
    quote: {
      en: "Healthy skin is built through consistency, not intensity.",
      ru: "Здоровая кожа строится на системности, а не на агрессивности.",
      es: "La piel sana se construye con constancia, no con intensidad.",
    },
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "sophia-vale",
    name: "Sophia Vale",
    role: {
      en: "Senior Nail Artist",
      ru: "Старший nail-специалист",
      es: "Artista Senior de Uñas",
    },
    experience: "8 years",
    focus: {
      en: "Structured gel, modern nude palette",
      ru: "Структурный гель, современная nude-палитра",
      es: "Gel estructural y paleta nude moderna",
    },
    quote: {
      en: "The smallest details can make the strongest statement.",
      ru: "Самые тонкие детали часто создают самый сильный эффект.",
      es: "Los detalles más pequeños pueden crear la mayor diferencia.",
    },
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "nora-ellis",
    name: "Nora Ellis",
    role: {
      en: "Body Therapist",
      ru: "Терапевт по телу",
      es: "Terapeuta Corporal",
    },
    experience: "12 years",
    focus: {
      en: "Tension release, restorative body treatments",
      ru: "Снятие напряжения, восстановительные body-процедуры",
      es: "Liberación de tensión y tratamientos corporales restaurativos",
    },
    quote: {
      en: "When the body softens, the mind follows.",
      ru: "Когда тело отпускает напряжение, за ним успокаивается и разум.",
      es: "Cuando el cuerpo se relaja, la mente lo sigue.",
    },
    image:
      "https://images.unsplash.com/photo-1541534401786-2077eed87a72?auto=format&fit=crop&w=900&q=80",
  },
];

const rawTestimonials: RawTestimonial[] = [
  {
    name: "Elena R.",
    text: {
      en: "I arrived with reactive skin and very low expectations, but Mira explained each step with calm precision. The treatment felt deeply restorative rather than aggressive, and by evening my tone was visibly smoother. Two days later my makeup sat better than it had in months.",
      ru: "Я пришла с реактивной кожей и без особых ожиданий, но Мира спокойно и точно объяснила каждый шаг. Процедура ощущалась как глубокое восстановление, а не агрессивное воздействие. Уже вечером тон выглядел ровнее, а через два дня макияж лег лучше, чем за последние месяцы.",
      es: "Llegué con piel reactiva y pocas expectativas, pero Mira explicó cada paso con calma y precisión. El tratamiento se sintió reparador, no agresivo, y al final del día mi piel ya se veía más uniforme. Dos días después, el maquillaje se asentaba mejor que en meses.",
    },
    service: {
      en: "Radiance Reset Facial",
      ru: "Radiance Reset уход",
      es: "Facial Radiance Reset",
    },
    experience: {
      en: "Client for 8 months",
      ru: "Клиент 8 месяцев",
      es: "Cliente desde hace 8 meses",
    },
  },
  {
    name: "Maya T.",
    text: {
      en: "Alina listened to how I actually wear my hair day to day, then built color that looked expensive without demanding constant upkeep. The grow-out stayed soft, and the tone remained bright even after several weeks. It feels like my hair, only elevated.",
      ru: "Алина учла, как я реально ношу волосы каждый день, и сделала оттенок, который выглядит дорого, но не требует постоянной коррекции. Отрастание мягкое, тон остается чистым даже спустя недели. Это мои волосы, только на более высоком уровне.",
      es: "Alina entendió cómo llevo el cabello en el día a día y creó un color sofisticado sin mantenimiento excesivo. El crecimiento quedó suave y el tono se mantuvo luminoso durante semanas. Se siente como mi cabello, pero mejor.",
    },
    service: { en: "Lived-In Color", ru: "Lived-In окрашивание", es: "Color Lived-In" },
    experience: {
      en: "Client for 1 year",
      ru: "Клиент 1 год",
      es: "Cliente desde hace 1 año",
    },
  },
  {
    name: "Clara N.",
    text: {
      en: "Sophia is meticulous with preparation and shaping, and that makes all the difference. My nails stay clean, strong, and elegant without looking overdone. The entire appointment is calm, efficient, and consistently high standard.",
      ru: "София очень внимательна к подготовке и форме, и это действительно меняет результат. Ногти выглядят чисто, аккуратно и стойко, без лишнего эффекта. Весь визит проходит спокойно, четко и на стабильно высоком уровне.",
      es: "Sophia es meticulosa en la preparación y la forma, y eso marca la diferencia. Mis uñas se ven limpias, fuertes y elegantes sin exceso visual. La cita completa es tranquila, eficiente y de nivel constante.",
    },
    service: { en: "Couture Manicure", ru: "Couture маникюр", es: "Manicura Couture" },
    experience: {
      en: "Client for 6 months",
      ru: "Клиент 6 месяцев",
      es: "Cliente desde hace 6 meses",
    },
  },
];

const rawGalleryImages: RawGalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
    alt: {
      en: "Hair styling station with soft lighting",
      ru: "Рабочее место стилиста с мягким светом",
      es: "Estación de peinado con iluminación suave",
    },
  },
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Nail service in neutral palette", ru: "Ногтевой сервис в нейтральной палитре", es: "Servicio de uñas en paleta neutra" },
  },
  {
    src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=1200&q=80",
    alt: {
      en: "Facial treatment room with calm ambiance",
      ru: "Кабинет ухода за лицом со спокойной атмосферой",
      es: "Cabina facial con ambiente sereno",
    },
  },
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80",
    alt: {
      en: "Specialist preparing skincare ritual",
      ru: "Специалист готовит skincare-ритуал",
      es: "Especialista preparando ritual de skincare",
    },
  },
  {
    src: "https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&w=1200&q=80",
    alt: {
      en: "Premium salon interior with natural textures",
      ru: "Премиальный интерьер студии с натуральными текстурами",
      es: "Interior premium con texturas naturales",
    },
  },
  {
    src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=80",
    alt: {
      en: "Client receiving a polished blowout",
      ru: "Клиент получает аккуратную укладку",
      es: "Cliente recibiendo un brushing pulido",
    },
  },
];

export const contactDetails = {
  studioName: "Lumiere Atelier",
  phone: "+1 (212) 555-0194",
  email: "hello@lumiereatelier.studio",
  address: "18 Mercer Street, SoHo, New York",
  hours: [
    "Mon - Fri: 9:00 - 20:00",
    "Saturday: 9:00 - 18:00",
    "Sunday: 10:00 - 16:00",
  ],
};

const rawTreatmentPhilosophy: RawSimpleItem[] = [
  {
    title: {
      en: "Consult before treatment",
      ru: "Сначала консультация",
      es: "Consulta antes del tratamiento",
    },
    description: {
      en: "Every session starts with a focused consultation to understand skin condition, hair history, sensitivity, and lifestyle constraints.",
      ru: "Каждый сеанс начинается с консультации: мы оцениваем состояние кожи и волос, чувствительность и ваш привычный ритм.",
      es: "Cada sesión comienza con una consulta para entender estado de piel, historial capilar, sensibilidad y ritmo de vida.",
    },
  },
  {
    title: {
      en: "Performance with comfort",
      ru: "Эффективность без дискомфорта",
      es: "Resultados con confort",
    },
    description: {
      en: "We prioritize visible results using techniques that respect the barrier, natural texture, and long-term health of hair, skin, and nails.",
      ru: "Мы добиваемся видимого результата методами, которые бережно относятся к барьеру кожи, текстуре волос и здоровью ногтей.",
      es: "Priorizamos resultados visibles con técnicas que respetan la barrera cutánea, la textura natural y la salud a largo plazo.",
    },
  },
  {
    title: {
      en: "Refined, not excessive",
      ru: "Изысканно, а не чрезмерно",
      es: "Refinado, no excesivo",
    },
    description: {
      en: "Our aesthetic is polished and modern. Enhancements are designed to feel balanced, wearable, and authentically yours.",
      ru: "Наша эстетика современная и чистая. Мы усиливаем естественные черты так, чтобы результат оставался вашим.",
      es: "Nuestra estética es pulida y moderna. Buscamos un resultado equilibrado, llevable y auténticamente tuyo.",
    },
  },
  {
    title: {
      en: "Consistency over intensity",
      ru: "Системность важнее интенсивности",
      es: "Constancia antes que intensidad",
    },
    description: {
      en: "We build treatment plans that can be realistically maintained, because sustainable routines outperform one-off extreme interventions.",
      ru: "Мы строим план ухода, который реально поддерживать в жизни, потому что стабильность дает лучший результат, чем разовые экстремальные процедуры.",
      es: "Diseñamos planes sostenibles porque la constancia da mejores resultados que intervenciones extremas puntuales.",
    },
  },
];

const rawProducts: RawProduct[] = [
  {
    name: "Augustinus Bader",
    category: { en: "Skin Recovery", ru: "Восстановление кожи", es: "Recuperación de la piel" },
    description: {
      en: "Biomimetic formulas used in post-treatment hydration protocols to support skin comfort, elasticity, and visible tone refinement.",
      ru: "Биомиметические формулы в протоколах пост-ухода для комфорта кожи, упругости и выравнивания тона.",
      es: "Fórmulas biomiméticas usadas en protocolos post-tratamiento para confort, elasticidad y mejor tono visible.",
    },
    signature: {
      en: "The Rich Cream + custom peptide layering",
      ru: "The Rich Cream + персональный пептидный layering",
      es: "The Rich Cream + capas personalizadas de péptidos",
    },
  },
  {
    name: "Oribe",
    category: { en: "Hair Rituals", ru: "Hair-ритуалы", es: "Rituales capilares" },
    description: {
      en: "Salon-grade care for color longevity, scalp balance, and thermal protection with a lightweight finish suited for daily styling.",
      ru: "Профессиональный уход для стойкости цвета, баланса кожи головы и термозащиты без утяжеления.",
      es: "Cuidado profesional para duración del color, equilibrio del cuero cabelludo y protección térmica sin peso.",
    },
    signature: {
      en: "Gold Lust restoration and gloss retention routine",
      ru: "Gold Lust восстановление и поддержка блеска",
      es: "Rutina Gold Lust de restauración y retención de brillo",
    },
  },
  {
    name: "Biologique Recherche",
    category: { en: "Facial Precision", ru: "Точная facial-терапия", es: "Precisión facial" },
    description: {
      en: "Targeted actives selected by skin condition, helping improve texture and radiance while preserving barrier resilience.",
      ru: "Точечные активы подбираются по состоянию кожи и улучшают текстуру и сияние без компромисса для барьера.",
      es: "Activos dirigidos según condición de la piel para mejorar textura y luminosidad preservando la barrera.",
    },
    signature: {
      en: "Lotion P50 adaptation and oxygenating boosters",
      ru: "Адаптация Lotion P50 и кислородные бустеры",
      es: "Adaptación de Lotion P50 y boosters oxigenantes",
    },
  },
  {
    name: "The GelBottle",
    category: { en: "Nail Architecture", ru: "Архитектура ногтей", es: "Arquitectura de uñas" },
    description: {
      en: "Professional gel systems known for clean structure, durability, and elegant wear without bulk.",
      ru: "Профессиональные гелевые системы с чистой архитектурой, стойкостью и элегантным видом без утяжеления.",
      es: "Sistemas de gel profesionales conocidos por estructura limpia, durabilidad y acabado elegante sin volumen.",
    },
    signature: {
      en: "Builder In A Bottle for natural strength",
      ru: "Builder In A Bottle для естественного укрепления",
      es: "Builder In A Bottle para fuerza natural",
    },
  },
];

const rawBeforeAfterCases: RawBeforeAfter[] = [
  {
    client: { en: "Case 01 · Hair", ru: "Кейс 01 · Волосы", es: "Caso 01 · Cabello" },
    service: {
      en: "Lived-In Color + Precision Gloss",
      ru: "Lived-In окрашивание + Precision Gloss",
      es: "Color Lived-In + Gloss de precisión",
    },
    before: {
      en: "Flat tone, visible regrowth line, uneven warmth through mid-lengths.",
      ru: "Плоский тон, заметная линия отрастания, неоднородная теплота по длине.",
      es: "Tono plano, línea de crecimiento visible y calidez irregular en medios.",
    },
    after: {
      en: "Soft-root transition with dimensional cool-beige depth and brighter face frame.",
      ru: "Мягкий переход у корней, объемный холодно-бежевый оттенок и более светлая зона у лица.",
      es: "Transición suave en raíz con profundidad beige fría y marco facial más luminoso.",
    },
    timeframe: {
      en: "Single 2.5-hour session",
      ru: "Один сеанс 2.5 часа",
      es: "Una sesión de 2.5 horas",
    },
  },
  {
    client: { en: "Case 02 · Skin", ru: "Кейс 02 · Кожа", es: "Caso 02 · Piel" },
    service: {
      en: "Radiance Reset Facial Series",
      ru: "Серия Radiance Reset уходов",
      es: "Serie Facial Radiance Reset",
    },
    before: {
      en: "Dehydrated texture, post-stress dullness, makeup separating by midday.",
      ru: "Обезвоженная текстура, тусклость после стресса, макияж терял ровность к середине дня.",
      es: "Textura deshidratada, opacidad por estrés y maquillaje que se separaba al mediodía.",
    },
    after: {
      en: "Improved hydration retention, smoother surface, visibly more even luminosity.",
      ru: "Лучшее удержание влаги, более гладкая поверхность и заметно более ровное сияние.",
      es: "Mejor retención de hidratación, superficie más lisa y luminosidad más uniforme.",
    },
    timeframe: {
      en: "3 sessions over 6 weeks",
      ru: "3 сеанса за 6 недель",
      es: "3 sesiones en 6 semanas",
    },
  },
  {
    client: { en: "Case 03 · Body", ru: "Кейс 03 · Тело", es: "Caso 03 · Cuerpo" },
    service: {
      en: "Deep Release Massage",
      ru: "Deep Release массаж",
      es: "Masaje Deep Release",
    },
    before: {
      en: "Upper-back tension, reduced neck mobility, disrupted sleep quality.",
      ru: "Напряжение верхней части спины, скованность шеи, нестабильный сон.",
      es: "Tensión en espalda alta, menor movilidad cervical y sueño irregular.",
    },
    after: {
      en: "Noticeable shoulder release, improved range of motion, calmer evening recovery.",
      ru: "Выраженное расслабление плеч, улучшение подвижности и более спокойное восстановление вечером.",
      es: "Liberación notable en hombros, mejor rango de movimiento y recuperación más calmada por la noche.",
    },
    timeframe: {
      en: "2 sessions over 14 days",
      ru: "2 сеанса за 14 дней",
      es: "2 sesiones en 14 días",
    },
  },
];

const rawVisitFlow: RawSimpleItem[] = [
  {
    title: { en: "1. Choose your service", ru: "1. Выберите услугу", es: "1. Elige tu servicio" },
    description: {
      en: "Select a treatment category and we will guide final tailoring during consultation.",
      ru: "Выберите направление, а финальную настройку услуги мы сделаем на консультации.",
      es: "Selecciona una categoría y ajustaremos los detalles durante la consulta.",
    },
  },
  {
    title: { en: "2. Match with specialist", ru: "2. Подберите специалиста", es: "2. Elige especialista" },
    description: {
      en: "Pick your preferred expert based on specialization and availability.",
      ru: "Выберите мастера по специализации и доступному времени.",
      es: "Elige el profesional según especialización y disponibilidad.",
    },
  },
  {
    title: { en: "3. Confirm date and time", ru: "3. Подтвердите дату и время", es: "3. Confirma fecha y hora" },
    description: {
      en: "Reserve a suitable slot in under a minute through our simplified booking flow.",
      ru: "Забронируйте удобный слот меньше чем за минуту через упрощенную форму.",
      es: "Reserva tu horario ideal en menos de un minuto con nuestro flujo simplificado.",
    },
  },
  {
    title: { en: "4. Arrive and reset", ru: "4. Приходите и восстанавливайтесь", es: "4. Llega y renueva" },
    description: {
      en: "Your specialist reviews goals, performs treatment, and shares practical aftercare.",
      ru: "Специалист уточняет цели, проводит процедуру и дает практичные рекомендации по домашнему уходу.",
      es: "Tu especialista revisa objetivos, realiza el tratamiento y comparte aftercare práctico.",
    },
  },
];

const rawExpertCredibility: RawCredibility[] = [
  {
    label: { en: "Advanced Certifications", ru: "Профессиональные сертификации", es: "Certificaciones avanzadas" },
    value: {
      en: "CIDESCO, CIBTAC, and manufacturer-led advanced protocol training",
      ru: "CIDESCO, CIBTAC и углубленное обучение протоколам от профильных брендов",
      es: "CIDESCO, CIBTAC y formación avanzada en protocolos impartida por marcas",
    },
  },
  {
    label: { en: "Combined Team Experience", ru: "Совокупный опыт команды", es: "Experiencia combinada del equipo" },
    value: {
      en: "40+ years across hair artistry, skin therapy, nail architecture, and body treatment",
      ru: "40+ лет в hair-артистике, skin-терапии, архитектуре ногтей и body-практиках",
      es: "Más de 40 años en arte capilar, terapia de piel, arquitectura de uñas y tratamientos corporales",
    },
  },
  {
    label: { en: "Specialization Model", ru: "Модель специализаций", es: "Modelo de especialización" },
    value: {
      en: "Each specialist practices a focused domain to maintain technical depth and consistency",
      ru: "Каждый специалист работает в фокусной области, чтобы сохранять глубину экспертизы и стабильность результата",
      es: "Cada especialista trabaja en un dominio específico para mantener profundidad técnica y consistencia",
    },
  },
  {
    label: { en: "Continuous Education", ru: "Непрерывное обучение", es: "Formación continua" },
    value: {
      en: "Quarterly skill updates in formulation science, treatment safety, and trend adaptation",
      ru: "Ежеквартальное обновление навыков по формуляциям, безопасности процедур и адаптации трендов",
      es: "Actualización trimestral en ciencia de formulación, seguridad y adaptación de tendencias",
    },
  },
];

const rawFaqs: RawFaq[] = [
  {
    question: {
      en: "How far in advance should I book?",
      ru: "За сколько заранее лучше бронировать?",
      es: "¿Con cuánta anticipación debo reservar?",
    },
    answer: {
      en: "For weekday appointments, 3 to 5 days is usually sufficient. Evening and weekend slots are often booked 1 to 2 weeks ahead.",
      ru: "Для будних дней обычно достаточно 3-5 дней. Вечерние и выходные слоты часто бронируются за 1-2 недели.",
      es: "Para citas entre semana suelen bastar 3 a 5 días. Los horarios de tarde y fin de semana suelen reservarse con 1 a 2 semanas de anticipación.",
    },
  },
  {
    question: {
      en: "Can I change my service after booking?",
      ru: "Можно ли изменить услугу после бронирования?",
      es: "¿Puedo cambiar el servicio después de reservar?",
    },
    answer: {
      en: "Yes. Reply to your confirmation message and our concierge will adjust the treatment plan based on timing and specialist availability.",
      ru: "Да. Ответьте на подтверждение, и наш консьерж скорректирует план с учетом времени и доступности мастера.",
      es: "Sí. Responde al mensaje de confirmación y nuestro concierge ajustará el plan según tiempo y disponibilidad.",
    },
  },
  {
    question: {
      en: "Do you offer first-time consultations?",
      ru: "Есть ли консультация для первого визита?",
      es: "¿Ofrecen consulta para primera visita?",
    },
    answer: {
      en: "Absolutely. First-time guests receive a short consultation before treatment so we can align goals, comfort level, and maintenance expectations.",
      ru: "Да, конечно. Для первого визита предусмотрена короткая консультация, чтобы согласовать цели и ожидания по поддержанию результата.",
      es: "Por supuesto. En la primera visita hacemos una consulta breve para alinear objetivos, comodidad y expectativas de mantenimiento.",
    },
  },
  {
    question: {
      en: "Are your products suitable for sensitive skin?",
      ru: "Подходят ли продукты для чувствительной кожи?",
      es: "¿Sus productos son aptos para piel sensible?",
    },
    answer: {
      en: "We work with condition-based protocols and can adapt active intensity. Please note known sensitivities in booking so we prepare in advance.",
      ru: "Мы работаем по протоколам с учетом состояния кожи и можем корректировать интенсивность активов. Укажите чувствительность при бронировании.",
      es: "Trabajamos con protocolos según condición de la piel y ajustamos la intensidad de activos. Indica sensibilidades al reservar.",
    },
  },
  {
    question: {
      en: "What is your cancellation policy?",
      ru: "Какая у вас политика отмены записи?",
      es: "¿Cuál es su política de cancelación?",
    },
    answer: {
      en: "We kindly request at least 24 hours notice for rescheduling or cancellation to release the slot for other guests.",
      ru: "Мы просим предупреждать об отмене или переносе минимум за 24 часа, чтобы мы могли предложить слот другим гостям.",
      es: "Pedimos aviso mínimo de 24 horas para cambios o cancelaciones, así podemos liberar el horario para otros clientes.",
    },
  },
  {
    question: {
      en: "Can I book multiple services in one visit?",
      ru: "Можно ли объединить несколько услуг в один визит?",
      es: "¿Puedo reservar varios servicios en una sola visita?",
    },
    answer: {
      en: "Yes. We can combine compatible services into one itinerary and coordinate specialists to keep your visit smooth and efficient.",
      ru: "Да. Мы можем объединить совместимые услуги в один маршрут визита и скоординировать специалистов.",
      es: "Sí. Podemos combinar servicios compatibles en un mismo itinerario y coordinar especialistas para una visita fluida.",
    },
  },
];

const rawMemberships: RawMembership[] = [
  {
    name: { en: "Glow Ritual", ru: "Glow Ritual", es: "Glow Ritual" },
    price: "$320 / month",
    description: {
      en: "For consistent skin clarity and event-ready radiance.",
      ru: "Для стабильной чистоты кожи и сияния перед важными событиями.",
      es: "Para mantener claridad de piel y luminosidad lista para eventos.",
    },
    features: {
      en: ["1 Radiance Reset Facial", "1 Express Glow Boost", "Priority weekday booking"],
      ru: ["1 уход Radiance Reset", "1 Express Glow Boost", "Приоритетная запись в будни"],
      es: ["1 Facial Radiance Reset", "1 Express Glow Boost", "Reserva prioritaria entre semana"],
    },
  },
  {
    name: { en: "Skin Recovery Plan", ru: "Skin Recovery Plan", es: "Skin Recovery Plan" },
    price: "$460 / month",
    description: {
      en: "Structured support for dehydrated, stressed, or reactive skin.",
      ru: "Системный план поддержки для обезвоженной, стрессовой или реактивной кожи.",
      es: "Plan estructurado para piel deshidratada, estresada o reactiva.",
    },
    features: {
      en: ["2 targeted facial sessions", "Customized home-care adjustments", "Complimentary LED add-on"],
      ru: ["2 целевых facial-сеанса", "Индивидуальная корректировка домашнего ухода", "LED-дополнение в подарок"],
      es: ["2 sesiones faciales dirigidas", "Ajustes personalizados de home care", "Complemento LED incluido"],
    },
  },
  {
    name: { en: "Monthly Care Signature", ru: "Monthly Care Signature", es: "Monthly Care Signature" },
    price: "$540 / month",
    description: {
      en: "Balanced maintenance across hair, nails, and skin.",
      ru: "Сбалансированная поддержка волос, ногтей и кожи каждый месяц.",
      es: "Mantenimiento equilibrado para cabello, uñas y piel cada mes.",
    },
    features: {
      en: ["1 Signature Cut or Gloss", "1 Couture Manicure", "1 personalized facial touch-up"],
      ru: ["1 Signature стрижка или глоссинг", "1 Couture маникюр", "1 персонализированная facial-коррекция"],
      es: ["1 Corte Signature o gloss", "1 Manicura Couture", "1 ajuste facial personalizado"],
    },
  },
];

const studioExperienceData = {
  title: {
    en: "A studio built for quiet focus and visible results",
    ru: "Студия, созданная для спокойной концентрации и видимого результата",
    es: "Un estudio diseñado para calma y resultados visibles",
  },
  description: {
    en: "From scent and soundscape to treatment pacing, every part of the environment is designed to help you settle, reset, and leave feeling distinctly restored.",
    ru: "От аромата и звука до темпа процедур: пространство продумано так, чтобы вы могли выдохнуть, восстановиться и уйти с ощущением реального обновления.",
    es: "Desde aroma y paisaje sonoro hasta ritmo de tratamientos, cada detalle está pensado para ayudarte a resetear y salir renovada.",
  },
  points: {
    en: [
      "Private treatment rooms with controlled lighting",
      "Consultation-first rituals and unhurried timing",
      "Aftercare notes tailored to your real routine",
    ],
    ru: [
      "Приватные кабинеты с контролируемым освещением",
      "Ритуалы, начинающиеся с консультации и без спешки",
      "Рекомендации по домашнему уходу под ваш реальный график",
    ],
    es: [
      "Cabinas privadas con iluminación controlada",
      "Rituales con consulta inicial y tiempos sin prisa",
      "Indicaciones de aftercare adaptadas a tu rutina real",
    ],
  },
  image:
    "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=1400&q=80",
};

export const uiText = {
  en: {
    nav: { home: "Home", services: "Services", team: "Team", gallery: "Gallery", booking: "Booking", contact: "Contact", book: "Book" },
    common: {
      viewDetails: "View details",
      reserveAppointment: "Reserve Appointment",
      studioTagline: "Quiet luxury studio for hair, skin, nails, and restorative body rituals.",
      visit: "Visit",
      explore: "Explore",
      yearsExperience: "experience",
      before: "Before",
      after: "After",
      chooseTestimonial: "Choose testimonial",
      openImage: "Open image",
      imagePreview: "Gallery image preview",
      faqTitle: "Answers before your appointment",
      faqDescription: "Practical details to help you plan your visit with confidence.",
      howItWorksTitle: "A clear four-step journey from booking to aftercare",
      howItWorksDescription: "Designed for low friction and high confidence at every stage of your visit.",
      cookies: "We use cookies to improve booking flow and service recommendations. By continuing, you accept our cookie policy.",
      accept: "Accept",
      quickBooking: "Quick booking",
      close: "Close",
      bookNow: "Book Now",
    },
  },
  ru: {
    nav: { home: "Главная", services: "Услуги", team: "Команда", gallery: "Галерея", booking: "Запись", contact: "Контакты", book: "Записаться" },
    common: {
      viewDetails: "Подробнее",
      reserveAppointment: "Забронировать визит",
      studioTagline: "Студия спокойной роскоши для волос, кожи, ногтей и восстановления тела.",
      visit: "Адрес",
      explore: "Разделы",
      yearsExperience: "опыта",
      before: "До",
      after: "После",
      chooseTestimonial: "Выбрать отзыв",
      openImage: "Открыть изображение",
      imagePreview: "Просмотр изображения из галереи",
      faqTitle: "Ответы перед визитом",
      faqDescription: "Практичные детали, которые помогут спланировать запись уверенно.",
      howItWorksTitle: "Понятный путь в 4 шага: от записи до рекомендаций",
      howItWorksDescription: "Процесс без лишнего трения и с высокой предсказуемостью результата.",
      cookies: "Мы используем cookies, чтобы улучшать запись и рекомендации по услугам. Продолжая пользоваться сайтом, вы принимаете cookie-политику.",
      accept: "Принять",
      quickBooking: "Быстрая запись",
      close: "Закрыть",
      bookNow: "Записаться",
    },
  },
  es: {
    nav: { home: "Inicio", services: "Servicios", team: "Equipo", gallery: "Galería", booking: "Reserva", contact: "Contacto", book: "Reservar" },
    common: {
      viewDetails: "Ver detalles",
      reserveAppointment: "Reservar cita",
      studioTagline: "Estudio de lujo sereno para cabello, piel, uñas y rituales restaurativos corporales.",
      visit: "Visítanos",
      explore: "Explorar",
      yearsExperience: "de experiencia",
      before: "Antes",
      after: "Después",
      chooseTestimonial: "Elegir testimonio",
      openImage: "Abrir imagen",
      imagePreview: "Vista previa de imagen de galería",
      faqTitle: "Respuestas antes de tu cita",
      faqDescription: "Detalles prácticos para planificar tu visita con confianza.",
      howItWorksTitle: "Un recorrido claro de 4 pasos de la reserva al aftercare",
      howItWorksDescription: "Diseñado para minimizar fricción y dar máxima claridad en cada etapa.",
      cookies: "Usamos cookies para mejorar el flujo de reserva y las recomendaciones de servicios. Al continuar, aceptas nuestra política de cookies.",
      accept: "Aceptar",
      quickBooking: "Reserva rápida",
      close: "Cerrar",
      bookNow: "Reservar ahora",
    },
  },
};

export function getUIText(locale: Locale) {
  return uiText[locale];
}

function localizeSimpleItem(item: RawSimpleItem, locale: Locale) {
  return { title: item.title[locale], description: item.description[locale] };
}

export function getServices(locale: Locale): Service[] {
  return rawServices.map((service) => ({
    slug: service.slug,
    category: service.category,
    categoryLabel: categoryLabels[service.category][locale],
    title: service.title[locale],
    subtitle: service.subtitle[locale],
    description: service.description[locale],
    duration: service.duration,
    price: service.price,
    benefits: service.benefits[locale],
    idealFor: service.idealFor[locale],
    heroImage: service.heroImage,
  }));
}

export function getServiceBySlug(locale: Locale, slug: string): Service | undefined {
  return getServices(locale).find((service) => service.slug === slug);
}

export function getServicesByCategory(locale: Locale) {
  return getServices(locale).reduce<Record<ServiceCategory, Service[]>>(
    (acc, service) => {
      acc[service.category].push(service);
      return acc;
    },
    { Hair: [], Nails: [], Skin: [], Body: [] },
  );
}

export function getSpecialists(locale: Locale): Specialist[] {
  return rawSpecialists.map((specialist) => ({
    id: specialist.id,
    name: specialist.name,
    role: specialist.role[locale],
    experience: specialist.experience,
    focus: specialist.focus[locale],
    quote: specialist.quote[locale],
    image: specialist.image,
  }));
}

export function getTestimonials(locale: Locale): Testimonial[] {
  return rawTestimonials.map((testimonial) => ({
    name: testimonial.name,
    text: testimonial.text[locale],
    service: testimonial.service[locale],
    experience: testimonial.experience[locale],
  }));
}

export function getGalleryImages(locale: Locale): GalleryImage[] {
  return rawGalleryImages.map((image) => ({ src: image.src, alt: image.alt[locale] }));
}

export function getTreatmentPhilosophy(locale: Locale) {
  return rawTreatmentPhilosophy.map((item) => localizeSimpleItem(item, locale));
}

export function getProductHighlights(locale: Locale): ProductHighlight[] {
  return rawProducts.map((item) => ({
    name: item.name,
    category: item.category[locale],
    description: item.description[locale],
    signature: item.signature[locale],
  }));
}

export function getBeforeAfterCases(locale: Locale): BeforeAfterCase[] {
  return rawBeforeAfterCases.map((item) => ({
    client: item.client[locale],
    service: item.service[locale],
    before: item.before[locale],
    after: item.after[locale],
    timeframe: item.timeframe[locale],
  }));
}

export function getVisitFlow(locale: Locale) {
  return rawVisitFlow.map((item) => localizeSimpleItem(item, locale));
}

export function getExpertCredibility(locale: Locale): CredibilityItem[] {
  return rawExpertCredibility.map((item) => ({
    label: item.label[locale],
    value: item.value[locale],
  }));
}

export function getFaqs(locale: Locale) {
  return rawFaqs.map((item) => ({ question: item.question[locale], answer: item.answer[locale] }));
}

export function getMemberships(locale: Locale): Membership[] {
  return rawMemberships.map((item) => ({
    name: item.name[locale],
    price: item.price,
    description: item.description[locale],
    features: item.features[locale],
  }));
}

export function getStudioExperience(locale: Locale) {
  return {
    title: studioExperienceData.title[locale],
    description: studioExperienceData.description[locale],
    points: studioExperienceData.points[locale],
    image: studioExperienceData.image,
  };
}

export function getBookingDefaults(locale: Locale) {
  return {
    services: getServices(locale).map((service) => service.title),
    specialists: getSpecialists(locale).map((specialist) => specialist.name),
    times: ["09:00", "10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00"],
  };
}
