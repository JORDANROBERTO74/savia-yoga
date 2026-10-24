/**
 * English dictionary. This file is the source of truth for the copy shape:
 * every other locale must implement the same `Dictionary` type.
 */
export const en = {
  meta: {
    home: {
      title: "Savia — Online yoga for a stronger body and a calmer mind",
      description:
        "Live yoga classes, structured online programs and 1-on-1 coaching from Savia. Build strength, reduce stress and create lasting balance — from our studio in Madrid or from home.",
    },
  },

  common: {
    skip: "Skip to content",
    currency: "€",
  },

  nav: {
    home: "Home",
    about: "About",
    programs: "Programs",
    contact: "Contact",
    bookCall: "Book a call",
    language: "Change language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    title1: "Stronger every day,",
    title2: "calmer every moment.",
    subtitle:
      "Live yoga classes, structured online programs and 1-on-1 coaching to help you build lasting strength and inner calm.",
    ctaPrimary: "Start your journey",
    ctaSecondary: "Join as a member",
    coachName: "Luca Moreno",
    coachRole: "Certified yoga & movement coach",
    coachCta: "Let's talk",
    aboutEyebrow: "About us",
    aboutText:
      "From our studio in Madrid to your home, we deliver personalized coaching, online programs and community classes to help you build strength, reduce stress and transform your lifestyle.",
    asSeenIn: "As seen in",
  },

  features: {
    title: "Discover a range of holistic wellness programs",
    subtitle:
      "Structured coaching, community support and mindful movement to help you achieve lasting mind and body transformation.",
    viewProgram: "View program",
    categories: "Program categories",
    programs: [
      {
        tag: "Mind & Body",
        titleLines: ["Building your mind", "& body strength"],
        image: "/images/program-01.jpg",
        alt: "A person training outdoors",
        price: 99,
        label: "Online program, from",
      },
      {
        tag: "Mindfulness & Calm",
        titleLines: ["Find peace &", "mental clarity"],
        image: "/images/program-02.jpg",
        alt: "A person practicing mindful breathing",
        price: 79,
        label: "Session, from",
      },
      {
        tag: "1-on-1 Coaching",
        titleLines: ["Personalized", "coaching plans"],
        image: "/images/program-03.jpg",
        alt: "A coach guiding a personal session",
        price: 149,
        label: "Per month, from",
      },
      {
        tag: "Community & Group",
        titleLines: ["Train together,", "grow stronger"],
        image: "/images/program-04.jpg",
        alt: "A group class in a studio",
        price: 49,
        label: "Monthly access, from",
      },
      {
        tag: "Full Transformation",
        titleLines: ["Transform body", "& mindset"],
        image: "/images/program-05.jpg",
        alt: "A person training with weights",
        price: 199,
        label: "Workshop, from",
      },
      {
        tag: "Yoga & Flexibility",
        titleLines: ["Flow, breathe", "& restore"],
        image: "/images/program-06.jpg",
        alt: "A person holding a yoga pose",
        price: 59,
        label: "Yoga plan, from",
      },
    ],
    highlights: [
      {
        title: "Always supported",
        description:
          "Stay consistent with a community that motivates you and coaching that keeps you on track.",
      },
      {
        title: "Total life balance",
        description:
          "Build strength, reduce stress and stay consistent with expert guidance.",
      },
      {
        title: "Guided every step",
        description:
          "Clear plans, smart training and support to keep you moving forward.",
      },
    ],
  },

  whyUs: {
    title: "Why train and transform with us",
    subtitle:
      "Expert coaching, structured programs and real accountability to help you build strength, balance and consistency.",
    stats: [
      {
        number: "20K+",
        text: "People practicing with Savia every month",
      },
      {
        number: "35K+",
        text: "Live and on-demand classes delivered",
      },
      {
        number: "2M+",
        text: "Training sessions completed",
      },
      {
        number: "500K+",
        text: "Hours of guided movement and meditation",
      },
    ],
    features: [
      "Personalized coaching",
      "Flexible online access",
      "Community support",
      "Safe and guided training",
      "Structured training plans",
      "Balanced wellness system",
      "Goal-focused approach",
    ],
  },

  testimonials: {
    title: "Committed to change, proven by results",
    subtitle:
      "Authentic stories from people who trusted the process and transformed their lifestyle.",
    readMore: "Read more reviews",
    items: [
      {
        name: "Marcus Chen",
        role: "Entrepreneur",
        rating: 5.0,
        headline: "A complete shift in daily energy.",
        text: "The holistic approach helped me regain peak performance. I feel more centered and productive than ever before in my career.",
        image: "/images/testimonial-01.png",
        avatar: "/images/avatar-02.jpg",
      },
      {
        name: "David Miller",
        role: "University Student",
        rating: 5.0,
        headline: "Study and health in balance.",
        text: "Balancing studies was a struggle until I joined. The classes are efficient and fit perfectly into my busy schedule.",
        image: "/images/testimonial-02.jpg",
        avatar: "/images/avatar-03.jpg",
      },
      {
        name: "James Wilson",
        role: "Creative Director",
        rating: 5.0,
        headline: "Results that speak every day.",
        text: "I've tried many programs, but none offered this depth. My physical health has never been better at this stage of my life.",
        image: "/images/feature-04-img-3.png",
        avatar: "/images/avatar-04.jpg",
      },
      {
        name: "Alex Rivera",
        role: "Software Engineer",
        rating: 5.0,
        headline: "Precision meets mindful movement.",
        text: "As an engineer, I appreciate the structured approach. The program is logically sound and delivers consistent progress.",
        image: "/images/feature-04-img-2.png",
        avatar: "/images/avatar-05.jpg",
      },
    ],
  },

  team: {
    title: "Meet your expert coaches",
    subtitle:
      "Certified instructors dedicated to your strength, balance and lasting transformation.",
    previous: "Previous coaches",
    next: "Next coaches",
    coaches: [
      { name: "Lucía Fernández", role: "Vinyasa & Flow", image: "/images/coach-1.png" },
      { name: "Mateo García", role: "Strength & Mobility", image: "/images/coach-2.png" },
      { name: "Elena Ruiz", role: "Mindfulness & Breathwork", image: "/images/coach-3.png" },
      { name: "Sofía Navarro", role: "Restorative Yoga", image: "/images/coach-4.png" },
      { name: "Pablo Ortega", role: "1-on-1 Coaching", image: "/images/coach-5.png" },
      { name: "Carla Domínguez", role: "Prenatal Yoga", image: "/images/coach-1.png" },
      { name: "Andrés Molina", role: "Power & Conditioning", image: "/images/coach-2.png" },
      { name: "Isabel Castro", role: "Meditation Teacher", image: "/images/coach-3.png" },
      { name: "Diego Herrera", role: "Flexibility & Recovery", image: "/images/coach-4.png" },
      { name: "Marta Vidal", role: "Yin Yoga", image: "/images/coach-5.png" },
      { name: "Hugo Santos", role: "Breath & Posture", image: "/images/coach-1.png" },
      { name: "Noa Ibáñez", role: "Community Classes", image: "/images/coach-2.png" },
    ],
  },

  pricing: {
    title: "Commit to your mind and body growth",
    subtitle: "Transparent pricing with no hidden fees and full support.",
    included: "Included",
    startFrom: "Start from",
    perMonth: "/month",
    plans: [
      {
        title: "Online Transformation",
        subtitle: "Perfect to start your transformation",
        price: 49,
        buttonText: "Get started today",
        features: [
          { text: "Full access to live & on-demand classes", included: true },
          { text: "Guided mindfulness practices", included: true },
          { text: "Structured weekly program", included: true },
          { text: "Community access", included: true },
          { text: "Progress tracking", included: false },
          { text: "1-on-1 coaching sessions", included: false },
        ],
      },
      {
        title: "Community Plan",
        subtitle: "Perfect for support and motivation",
        price: 79,
        buttonText: "Join the community",
        features: [
          { text: "Full access to live & on-demand classes", included: true },
          { text: "Guided mindfulness practices", included: true },
          { text: "Structured weekly program", included: true },
          { text: "Community access", included: true },
          { text: "Progress tracking", included: true },
          { text: "1-on-1 coaching sessions", included: false },
        ],
      },
      {
        title: "1:1 Personal Coaching",
        subtitle: "Perfect for committed goal achievers",
        price: 149,
        buttonText: "Get started today",
        features: [
          { text: "Full access to live & on-demand classes", included: true },
          { text: "Guided mindfulness practices", included: true },
          { text: "Structured weekly program", included: true },
          { text: "Community access", included: true },
          { text: "Progress tracking", included: true },
          { text: "1-on-1 coaching sessions", included: true },
        ],
      },
    ],
  },

  contact: {
    title: "Let's start your transformation journey",
    subtitle:
      "Tell us about your goals, your experience level and how we can help you build strength, balance and lasting wellness.",
    studioLabel: "Studio",
    emailLabel: "Email",
    phoneLabel: "Phone",
    follow: "Follow us",
    formTitle: "Let's talk!",
    nameLabel: "Full name",
    namePlaceholder: "Enter your name",
    phonePlaceholder: "Enter your phone",
    emailPlaceholder: "Enter your email",
    messageLabel: "Message",
    messagePlaceholder:
      "Tell us about your goals, your level, or anything you'd like us to know",
    submit: "Submit your query",
  },

  footer: {
    ctaTitle: "Train with expert coaches today",
    ctaSubtitle:
      "Book your first class and begin your mind and body transformation journey.",
    ctaButton: "Get started today",
    about:
      "A complete mind and body transformation ecosystem designed to deliver measurable results and lasting habits.",
    navigateTitle: "Navigate",
    studioTitle: "Studio",
    followTitle: "Follow us",
    navigate: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Programs", href: "#programs" },
      { label: "Contact", href: "#contact" },
    ],
    studio: [
      { label: "Live classes", href: "#programs" },
      { label: "Online programs", href: "#programs" },
      { label: "1-on-1 coaching", href: "#pricing" },
      { label: "Workshops", href: "#programs" },
    ],
    followUs: [
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    copyright: "© 2026 Savia. All rights reserved.",
    privacy: "Privacy policy",
    terms: "Terms & conditions",
  },
};

export type Dictionary = typeof en;
