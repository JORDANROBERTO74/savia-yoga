import type { Dictionary } from "./en";

/**
 * Spanish dictionary. Mirrors the shape of `en` exactly; the `Dictionary` type
 * keeps the two locales in sync at compile time.
 */
export const es: Dictionary = {
  meta: {
    home: {
      title: "Savia — Yoga online para un cuerpo más fuerte y una mente más tranquila",
      description:
        "Clases de yoga en directo, programas online estructurados y coaching 1-a-1 de Savia. Gana fuerza, reduce el estrés y crea un equilibrio duradero — desde nuestro estudio en Madrid o desde casa.",
    },
  },

  common: {
    skip: "Ir al contenido",
    currency: "€",
  },

  nav: {
    home: "Inicio",
    about: "Nosotros",
    programs: "Programas",
    contact: "Contacto",
    bookCall: "Reserva una llamada",
    language: "Cambiar idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },

  hero: {
    title1: "Más fuerte cada día,",
    title2: "más en calma cada momento.",
    subtitle:
      "Clases de yoga en directo, programas online estructurados y coaching 1-a-1 para ayudarte a construir fuerza duradera y calma interior.",
    ctaPrimary: "Empieza tu camino",
    ctaSecondary: "Hazte miembro",
    coachName: "Luca Moreno",
    coachRole: "Instructor certificado de yoga y movimiento",
    coachCta: "Hablemos",
    aboutEyebrow: "Sobre nosotros",
    aboutText:
      "De nuestro estudio en Madrid a tu casa, ofrecemos coaching personalizado, programas online y clases en comunidad para ayudarte a ganar fuerza, reducir el estrés y transformar tu estilo de vida.",
    asSeenIn: "Visto en",
  },

  features: {
    title: "Descubre una gama de programas de bienestar integral",
    subtitle:
      "Coaching estructurado, apoyo de la comunidad y movimiento consciente para lograr una transformación duradera de cuerpo y mente.",
    viewProgram: "Ver programa",
    categories: "Categorías de programas",
    programs: [
      {
        tag: "Cuerpo y mente",
        titleLines: ["Fortalece tu cuerpo", "y tu mente"],
        image: "/images/program-01.jpg",
        alt: "Una persona entrenando al aire libre",
        price: 99,
        label: "Programa online, desde",
      },
      {
        tag: "Mindfulness y calma",
        titleLines: ["Encuentra paz y", "claridad mental"],
        image: "/images/program-02.jpg",
        alt: "Una persona practicando respiración consciente",
        price: 79,
        label: "Sesión, desde",
      },
      {
        tag: "Coaching 1-a-1",
        titleLines: ["Planes de coaching", "personalizados"],
        image: "/images/program-03.jpg",
        alt: "Un instructor guiando una sesión personal",
        price: 149,
        label: "Al mes, desde",
      },
      {
        tag: "Comunidad y grupo",
        titleLines: ["Entrena en grupo,", "crece más fuerte"],
        image: "/images/program-04.jpg",
        alt: "Una clase en grupo en el estudio",
        price: 49,
        label: "Acceso mensual, desde",
      },
      {
        tag: "Transformación total",
        titleLines: ["Transforma cuerpo", "y mentalidad"],
        image: "/images/program-05.jpg",
        alt: "Una persona entrenando con pesas",
        price: 199,
        label: "Taller, desde",
      },
      {
        tag: "Yoga y flexibilidad",
        titleLines: ["Fluye, respira", "y restaura"],
        image: "/images/program-06.jpg",
        alt: "Una persona manteniendo una postura de yoga",
        price: 59,
        label: "Plan de yoga, desde",
      },
    ],
    highlights: [
      {
        title: "Siempre acompañado",
        description:
          "Mantén la constancia con una comunidad que te motiva y un coaching que te guía.",
      },
      {
        title: "Equilibrio total",
        description:
          "Gana fuerza, reduce el estrés y mantén la constancia con orientación experta.",
      },
      {
        title: "Guiado en cada paso",
        description:
          "Planes claros, entrenamiento inteligente y apoyo para seguir avanzando.",
      },
    ],
  },

  whyUs: {
    title: "Por qué entrenar y transformarte con nosotros",
    subtitle:
      "Coaching experto, programas estructurados y responsabilidad real para ayudarte a ganar fuerza, equilibrio y constancia.",
    stats: [
      {
        number: "20K+",
        text: "Personas que practican con Savia cada mes",
      },
      {
        number: "35K+",
        text: "Clases en directo y bajo demanda impartidas",
      },
      {
        number: "2M+",
        text: "Sesiones de entrenamiento completadas",
      },
      {
        number: "500K+",
        text: "Horas de movimiento y meditación guiados",
      },
    ],
    features: [
      "Coaching personalizado",
      "Acceso online flexible",
      "Apoyo de la comunidad",
      "Entrenamiento seguro y guiado",
      "Planes de entrenamiento estructurados",
      "Sistema de bienestar equilibrado",
      "Enfoque orientado a objetivos",
    ],
  },

  testimonials: {
    title: "Compromiso con el cambio, demostrado por los resultados",
    subtitle:
      "Historias reales de personas que confiaron en el proceso y transformaron su estilo de vida.",
    readMore: "Leer más reseñas",
    items: [
      {
        name: "Marcus Chen",
        role: "Emprendedor",
        rating: 5.0,
        headline: "Un cambio total en mi energía diaria.",
        text: "El enfoque integral me ayudó a recuperar mi máximo rendimiento. Me siento más centrado y productivo que nunca en mi carrera.",
        image: "/images/testimonial-01.png",
        avatar: "/images/avatar-02.jpg",
      },
      {
        name: "David Miller",
        role: "Estudiante universitario",
        rating: 5.0,
        headline: "Estudio y salud en equilibrio.",
        text: "Compaginar los estudios era un reto hasta que me uní. Las clases son eficientes y encajan perfectamente en mi agenda.",
        image: "/images/testimonial-02.jpg",
        avatar: "/images/avatar-03.jpg",
      },
      {
        name: "James Wilson",
        role: "Director creativo",
        rating: 5.0,
        headline: "Resultados que hablan cada día.",
        text: "He probado muchos programas, pero ninguno con esta profundidad. Mi salud física nunca había estado mejor en esta etapa de mi vida.",
        image: "/images/feature-04-img-3.png",
        avatar: "/images/avatar-04.jpg",
      },
      {
        name: "Alex Rivera",
        role: "Ingeniero de software",
        rating: 5.0,
        headline: "Precisión y movimiento consciente.",
        text: "Como ingeniero, valoro el enfoque estructurado. El programa es lógico y ofrece un progreso constante.",
        image: "/images/feature-04-img-2.png",
        avatar: "/images/avatar-05.jpg",
      },
    ],
  },

  team: {
    title: "Conoce a tus instructores expertos",
    subtitle:
      "Instructores certificados dedicados a tu fuerza, equilibrio y transformación duradera.",
    previous: "Instructores anteriores",
    next: "Siguientes instructores",
    coaches: [
      { name: "Lucía Fernández", role: "Vinyasa y flow", image: "/images/coach-1.png" },
      { name: "Mateo García", role: "Fuerza y movilidad", image: "/images/coach-2.png" },
      { name: "Elena Ruiz", role: "Mindfulness y respiración", image: "/images/coach-3.png" },
      { name: "Sofía Navarro", role: "Yoga restaurativo", image: "/images/coach-4.png" },
      { name: "Pablo Ortega", role: "Coaching 1-a-1", image: "/images/coach-5.png" },
      { name: "Carla Domínguez", role: "Yoga prenatal", image: "/images/coach-1.png" },
      { name: "Andrés Molina", role: "Fuerza y acondicionamiento", image: "/images/coach-2.png" },
      { name: "Isabel Castro", role: "Meditación", image: "/images/coach-3.png" },
      { name: "Diego Herrera", role: "Flexibilidad y recuperación", image: "/images/coach-4.png" },
      { name: "Marta Vidal", role: "Yin yoga", image: "/images/coach-5.png" },
      { name: "Hugo Santos", role: "Respiración y postura", image: "/images/coach-1.png" },
      { name: "Noa Ibáñez", role: "Clases en comunidad", image: "/images/coach-2.png" },
    ],
  },

  pricing: {
    title: "Comprométete con tu crecimiento mental y físico",
    subtitle: "Precios transparentes, sin cuotas ocultas y con soporte total.",
    included: "Incluye",
    startFrom: "Desde",
    perMonth: "/mes",
    plans: [
      {
        title: "Transformación online",
        subtitle: "Perfecto para empezar tu transformación",
        price: 49,
        buttonText: "Empieza hoy",
        features: [
          { text: "Acceso completo a clases en directo y bajo demanda", included: true },
          { text: "Prácticas guiadas de mindfulness", included: true },
          { text: "Programa semanal estructurado", included: true },
          { text: "Acceso a la comunidad", included: true },
          { text: "Seguimiento del progreso", included: false },
          { text: "Sesiones de coaching 1-a-1", included: false },
        ],
      },
      {
        title: "Plan comunidad",
        subtitle: "Perfecto para el apoyo y la motivación",
        price: 79,
        buttonText: "Únete a la comunidad",
        features: [
          { text: "Acceso completo a clases en directo y bajo demanda", included: true },
          { text: "Prácticas guiadas de mindfulness", included: true },
          { text: "Programa semanal estructurado", included: true },
          { text: "Acceso a la comunidad", included: true },
          { text: "Seguimiento del progreso", included: true },
          { text: "Sesiones de coaching 1-a-1", included: false },
        ],
      },
      {
        title: "Coaching personal 1:1",
        subtitle: "Perfecto para objetivos ambiciosos",
        price: 149,
        buttonText: "Empieza hoy",
        features: [
          { text: "Acceso completo a clases en directo y bajo demanda", included: true },
          { text: "Prácticas guiadas de mindfulness", included: true },
          { text: "Programa semanal estructurado", included: true },
          { text: "Acceso a la comunidad", included: true },
          { text: "Seguimiento del progreso", included: true },
          { text: "Sesiones de coaching 1-a-1", included: true },
        ],
      },
    ],
  },

  contact: {
    title: "Empecemos tu viaje de transformación",
    subtitle:
      "Cuéntanos tus objetivos, tu nivel y cómo podemos ayudarte a ganar fuerza, equilibrio y bienestar duradero.",
    studioLabel: "Estudio",
    emailLabel: "Email",
    phoneLabel: "Teléfono",
    follow: "Síguenos",
    formTitle: "¡Hablemos!",
    nameLabel: "Nombre completo",
    namePlaceholder: "Escribe tu nombre",
    phonePlaceholder: "Escribe tu teléfono",
    emailPlaceholder: "Escribe tu email",
    messageLabel: "Mensaje",
    messagePlaceholder:
      "Cuéntanos tus objetivos, tu nivel o cualquier cosa que quieras que sepamos",
    submit: "Enviar consulta",
  },

  footer: {
    ctaTitle: "Entrena hoy con instructores expertos",
    ctaSubtitle:
      "Reserva tu primera clase y empieza tu viaje de transformación de cuerpo y mente.",
    ctaButton: "Empieza hoy",
    about:
      "Un ecosistema completo de transformación de cuerpo y mente diseñado para lograr resultados medibles y hábitos duraderos.",
    navigateTitle: "Navegar",
    studioTitle: "Estudio",
    followTitle: "Síguenos",
    navigate: [
      { label: "Inicio", href: "#home" },
      { label: "Nosotros", href: "#about" },
      { label: "Programas", href: "#programs" },
      { label: "Contacto", href: "#contact" },
    ],
    studio: [
      { label: "Clases en directo", href: "#programs" },
      { label: "Programas online", href: "#programs" },
      { label: "Coaching 1-a-1", href: "#pricing" },
      { label: "Talleres", href: "#programs" },
    ],
    followUs: [
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    copyright: "© 2026 Savia. Todos los derechos reservados.",
    privacy: "Política de privacidad",
    terms: "Términos y condiciones",
  },
};
