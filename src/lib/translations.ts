/* ──────────────────────────────────────────────
   Central FR/EN translation dictionary.
   `en` defines the shape; `fr` must match it.
   Only human-readable copy lives here — icons,
   colors, hrefs and tech-name lists stay in the
   components.
─────────────────────────────────────────────── */

const en = {
  nav: {
    links: {
      about: "About",
      stack: "Stack",
      workflow: "Workflow",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
    },
    cta: "Hire Me",
  },

  hero: {
    badge: "Available for freelance missions",
    role: "Full-Stack Developer — React, Next.js & Spring Boot",
    tagline:
      "I build modern, fast, and premium web applications. From React frontend to Spring Boot backend, with a UI that converts.",
    ctaProjects: "View my projects",
    ctaContact: "Contact me",
    scroll: "Scroll",
    stats: [
      { value: "5+", label: "Projects delivered" },
      { value: "React", label: "/ Next.js" },
      { value: "Spring Boot", label: "Backend" },
      { value: "API", label: "JWT-secured" },
    ],
  },

  about: {
    eyebrow: "About",
    heading: "Developer passionate about interfaces that make a difference.",
    p1: "I'm **Dorian Ondoua**, a full-stack developer specializing in building modern web applications with React, Next.js, and Spring Boot.",
    p2: "My strength? Combining **premium UI** that captures attention with a **robust backend architecture**. Every project I deliver is designed to perform, scale, and impress.",
    p3: "Passionate about SaaS, medical dashboards, and business applications, I always aim for that balance between beautiful and functional.",
    available: "Available for new projects",
    highlights: [
      {
        title: "Premium UI",
        desc: "Interfaces that captivate and convert, inspired by the best Awwwards standards.",
      },
      {
        title: "Full-Stack",
        desc: "From React components to the Spring Boot API, I manage the entire application stack.",
      },
      {
        title: "SaaS & Dashboards",
        desc: "Business dashboards, subscriptions, multi-tenant management — my domain of expertise.",
      },
      {
        title: "Secure APIs",
        desc: "JWT authentication, roles, permissions — security built in from the ground up.",
      },
    ],
  },

  stack: {
    eyebrow: "Technical Stack",
    heading: "Tools I Master",
    // aligned by index with the categories array in the component
    categories: ["Frontend", "Backend", "Database", "Tools"],
  },

  services: {
    eyebrow: "Services",
    heading: "What I can build for you",
    intro: "Each service is designed to deliver maximum value, quickly and cleanly.",
    cta: "Let's talk about your project",
    items: [
      {
        title: "Web Development",
        desc: "Modern, performant, SEO-optimized websites and web apps. From premium landing pages to complex projects.",
        features: ["React / Next.js", "Responsive & mobile-first", "Optimized performance", "Technical SEO"],
      },
      {
        title: "SaaS Development",
        desc: "Full dashboards, multi-role authentication, subscriptions, team management. Turnkey business applications.",
        features: ["Advanced dashboard", "JWT Auth / roles", "Secure REST API", "Multi-tenant ready"],
      },
      {
        title: "UI/UX Integration",
        desc: "Figma mockup to pixel-perfect interfaces with Framer Motion animations. Awwwards-level quality.",
        features: ["Pixel-perfect Figma", "Advanced animations", "Design system", "Framer Motion"],
      },
      {
        title: "Backend & APIs",
        desc: "Robust REST APIs with Spring Boot, database management, JWT security, Swagger documentation.",
        features: ["Spring Boot / Java", "PostgreSQL / MySQL", "JWT Authentication", "Documented API"],
      },
    ],
  },

  workflow: {
    eyebrow: "Workflow",
    heading: "My Development Process",
    intro: "A streamlined workflow combining strategy, design, engineering and long-term support.",
    stepsTitle: "Development Steps",
    toolsTitle: "Tools I Use",
    steps: [
      {
        title: "Discovery & Strategy",
        desc: "Understanding your business goals, defining project scope, and aligning expectations to establish a clear roadmap.",
      },
      {
        title: "Design & Prototyping",
        desc: "Creating wireframes, user journeys, and high-fidelity UI mockups that ensure an intuitive, conversion-focused experience.",
      },
      {
        title: "Development & Testing",
        desc: "Building scalable solutions with modern technologies and performing thorough QA testing to guarantee stability.",
      },
      {
        title: "Launch & Support",
        desc: "Deploying the project, monitoring performance, and providing continuous updates and improvements post-launch.",
      },
    ],
    // aligned by index with toolGroups in the component
    toolGroupLabels: ["Frontend", "Backend", "Database & Tools"],
    deliverEyebrow: "What I Deliver",
    deliverIntro: "Results-driven solutions tailored to your specific needs.",
    deliverables: [
      {
        title: "Web Development",
        desc: "Performant, SEO-optimized websites built with modern development practices.",
        features: ["SEO optimized", "High PageSpeed score", "Responsive design", "Secure & fast", "Scalable architecture"],
      },
      {
        title: "UI/UX Design",
        desc: "User-centered design that improves usability, engagement, and conversions.",
        features: ["Wireframes", "Prototypes", "User journeys", "Design systems", "Usability improvements"],
      },
      {
        title: "SaaS Development",
        desc: "End-to-end SaaS product development, from concept to a fully functional platform.",
        features: ["User authentication", "Admin dashboards", "API integrations", "Real-time features", "Cloud deployment"],
      },
    ],
    ctaEyebrow: "Ready to start?",
    ctaHeading: "Ready to transform your business?",
    ctaText:
      "Claim your free 30-minute strategy call and discover how my proven approach can help you outperform competitors and generate measurable growth.",
    ctaButton: "Book your free strategy call",
    ctaNote: "Limited availability · No obligation · 100% confidential",
  },

  projects: {
    eyebrow: "Projects",
    heading: "What I've built",
    intro:
      'Click "View case study" on any project to explore the full process — from problem to production.',
    ui: {
      caseStudy: "Case Study",
      overview: "Overview",
      challenge: "The Challenge",
      goals: "Project Goals",
      process: "Process",
      results: "Results",
      techStack: "Tech Stack",
      visitWebsite: "Visit website",
      viewGithub: "View on GitHub",
      viewCaseStudy: "View case study",
      interested: "Interested in a project like this?",
      startProject: "Start your project →",
      closeAria: "Close case study",
    },
    items: {
      healthcare: {
        label: "Healthcare",
        tagline: "Take back control of your health.",
        description:
          "HealthSOD brings your consultations, lab results, and doctors together in a single app. A full-stack platform (React + Spring Boot) deployed in production — 10K+ patients, 500+ doctors.",
        metrics: ["Live in production", "10K+ patients", "500+ doctors"],
        overview:
          "HealthSOD is a connected health platform that centralizes consultations, medical analyses, and doctor appointments into a single intuitive application. Built solo from architecture to deployment, it is now live in production with thousands of active users.",
        challenge:
          "Patients in Cameroon and across Africa struggle to manage their health data — appointments scattered, lab results lost, no direct connection with their doctors. HealthSOD was built to unify everything in one place, with real-time data, a clean UX, and bulletproof security.",
        goals: [
          "Build an intuitive health app for patients, doctors and admins",
          "Centralize appointments, symptoms and medical history",
          "Implement real-time health data tracking (BPM, steps, sleep)",
          "Secure all medical data with JWT multi-role authentication",
          "Achieve a 4.9★ app rating through premium UX design",
          "Deploy to production and scale to 10 000+ active users",
        ],
        process: [
          {
            title: "Product Architecture",
            desc: "Defined 3 user roles (patient, doctor, admin), data models and API contracts. Designed the PostgreSQL schema optimized for medical records at scale.",
          },
          {
            title: "UI/UX Design",
            desc: "Designed a clean, consumer-grade health interface — intuitive dashboards, appointment cards, symptom charts — prioritizing clarity over complexity.",
          },
          {
            title: "Frontend — React + Tailwind",
            desc: "Built the full interface with React and Tailwind. Protected routes, real-time health data widgets, appointment scheduling, and animated dashboards.",
          },
          {
            title: "Backend API — Spring Boot",
            desc: "Developed a secure REST API with Spring Boot. Complete CRUD for patients, appointments and records, JWT middleware, and Spring Security for role-based access.",
          },
          {
            title: "Authentication & Security",
            desc: "JWT multi-role auth with Spring Security. Complete data isolation between patients, doctors and admins. Zero critical vulnerabilities in production.",
          },
          {
            title: "Production Deployment",
            desc: "Deployed on Vercel (frontend) with optimized PostgreSQL backend. SSL, CORS, and environment-based secrets configured. Stable with 10K+ active users.",
          },
        ],
        results: [
          "Live in production at healthsod.vercel.app",
          "10 000+ patients and 500+ doctors onboarded",
          "4.9★ rating on App Store",
          "Delivered solo in 4 weeks from concept to production",
          "Zero critical security incidents since launch",
        ],
      },
      sira: {
        label: "Magazine",
        tagline: "Digital impact magazine for Africa",
        description:
          "A premium editorial platform built with Next.js 14, Framer Motion, and a custom CMS — designed to amplify humanitarian projects and social entrepreneurs across Africa.",
        metrics: ["6 weeks", "Solo dev", "CMS dashboard"],
        overview:
          "SIRA Magazine is a premium editorial platform that amplifies the voices of humanitarian projects, social entrepreneurs, and high-impact initiatives across Africa. Built with Next.js 14 and an Awwwards-level design system, it combines magazine-quality storytelling with modern web performance.",
        challenge:
          "High-impact projects in Africa remain invisible — buried in generalist platforms that don't tell their stories properly. SIRA needed a platform that felt as premium as the stories it tells, with a CMS simple enough for non-technical editors, and performance good enough to reach readers on slow connections.",
        goals: [
          "Design an Awwwards-level editorial interface that commands attention",
          "Build a CMS dashboard for non-technical editors",
          "Achieve Lighthouse 95+ performance score",
          "Implement advanced scroll animations that enhance storytelling",
          "Create a fully responsive design optimized for mobile readers",
          "Build a scalable content architecture for future growth",
        ],
        process: [
          {
            title: "Editorial Concept",
            desc: "Defined the content architecture, section hierarchy, and narrative flow. Researched premium magazine sites and created a moodboard aligned with African visual identity.",
          },
          {
            title: "Design System",
            desc: "Created a complete design system in Figma — typography scale, color tokens, component library, and editorial grid. Inspired by NYT, The Atlantic, and Awwwards winners.",
          },
          {
            title: "Frontend — Next.js + TypeScript",
            desc: "Built with Next.js 14 App Router, TypeScript, and Tailwind. Implemented SSG for performance, dynamic routing for articles, and custom image optimization.",
          },
          {
            title: "Animation System",
            desc: "Designed a comprehensive animation system with Framer Motion — scroll-triggered reveals, parallax layers, stagger effects, and smooth page transitions.",
          },
          {
            title: "CMS & Content",
            desc: "Built a lightweight CMS dashboard allowing editors to publish articles, manage categories, upload media, and preview content in real time — no coding required.",
          },
          {
            title: "SEO & Deployment",
            desc: "Optimized for technical SEO with structured data, Open Graph, and SSR. Deployed on Vercel with edge caching. Achieved 95+ Lighthouse across all categories.",
          },
        ],
        results: [
          "Awwwards-level design quality validated by the community",
          "Lighthouse 95+ across Performance, SEO, and Accessibility",
          "Advanced animations that genuinely enhance storytelling",
          "CMS enabling non-technical editors to publish independently",
          "Delivered in 6 weeks as a solo full-stack developer",
        ],
        testimonial: {
          text: "The platform exceeded our expectations. The design is stunning, the performance is incredible, and the CMS is so intuitive our editors adopted it immediately. Dorian handled everything from architecture to deployment with flawless precision.",
          author: "SIRA Magazine Editorial Team",
        },
      },
      wealthflow: {
        label: "Fintech",
        tagline: "Your money, finally under control.",
        description:
          "WealthFlow brings your income, expenses, and savings goals together in a crystal-clear dashboard. A full-stack personal budget web app — transaction tracking, monthly budgets, charts, and CSV export.",
        metrics: ["Live in production", "Budgets & goals", "CSV export"],
        overview:
          "WealthFlow is a full-stack personal finance application that brings income, expenses, and savings goals together in a crystal-clear dashboard. It lets users track every transaction by category, set monthly budgets, define savings goals, and visualize where every euro goes — without spreadsheets or hassle.",
        challenge:
          "Most people lose track of their money across scattered spreadsheets and banking apps that never tell the full story. WealthFlow was built to unify income, expenses, and savings into a single clear view — with real-time charts, category budgets, overspend alerts, and goal tracking that actually motivate better financial habits.",
        goals: [
          "Centralize income, expenses and savings goals in one dashboard",
          "Track transactions by category with clear visual breakdowns",
          "Set monthly category budgets with overspend alerts",
          "Define savings goals and track their progress over time",
          "Surface insights through bar, donut and balance-evolution charts",
          "Let users export their full financial data to CSV",
        ],
        process: [
          {
            title: "Product Architecture",
            desc: "Modeled transactions, categories, budgets, savings goals and notifications. Designed the data schema around monthly aggregation for fast budget and balance computations.",
          },
          {
            title: "UI/UX Design",
            desc: "Designed a crystal-clear finance dashboard — income vs expenses, category breakdowns, and goal progress — prioritizing legibility so users instantly see where every euro goes.",
          },
          {
            title: "Data Visualization",
            desc: "Built bar charts (income vs expenses), a donut chart for category distribution, and a balance-evolution line chart — turning raw transactions into actionable insight.",
          },
          {
            title: "Budgets & Goals Engine",
            desc: "Implemented monthly category budgets with overspend detection, and savings goals with live progress tracking — the core logic that drives the app's value.",
          },
          {
            title: "Notifications & Export",
            desc: "Added in-app notifications (budget exceeded, goal reached) and a one-click CSV export so users keep full ownership of their financial data.",
          },
          {
            title: "Production Deployment",
            desc: "Deployed on Vercel with environment-based secrets, SSL and optimized builds. Stable and live for daily personal-finance tracking.",
          },
        ],
        results: [
          "Live in production at controle-money.vercel.app",
          "Unified dashboard for income, expenses and savings goals",
          "Monthly budgets with real-time overspend alerts",
          "Bar, donut and balance-evolution charts for instant insight",
          "Savings-goal tracking and one-click CSV export",
        ],
      },
    },
  },

  contact: {
    eyebrow: "Contact",
    heading: "Let's work together",
    intro: "Available for freelance missions, SaaS projects, or any interesting collaboration.",
    bookTitle: "Book a Call",
    bookDesc: "30 min — let's discuss your project",
    availableTitle: "Available now",
    availableDesc: "Reply within 24h · Based in Cameroon · Remote work available",
    whatsappValue: "Discuss your project",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Your project in a few words",
      messageLabel: "Message",
      messagePlaceholder: "Describe your project, your needs, your budget...",
      sending: "Sending...",
      send: "Send message",
      success: "Message sent! I'll get back to you within 24h.",
      error: "Something went wrong. Please try again or contact me directly.",
    },
  },

  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with React · TypeScript · Tailwind · Framer Motion",
  },
};

export type Dict = typeof en;

const fr: Dict = {
  nav: {
    links: {
      about: "À propos",
      stack: "Stack",
      workflow: "Méthode",
      projects: "Projets",
      services: "Services",
      contact: "Contact",
    },
    cta: "Recrutez-moi",
  },

  hero: {
    badge: "Disponible pour des missions freelance",
    role: "Développeur Full-Stack — React, Next.js & Spring Boot",
    tagline:
      "Je conçois des applications web modernes, rapides et premium. Du frontend React au backend Spring Boot, avec une UI qui convertit.",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    scroll: "Défiler",
    stats: [
      { value: "5+", label: "Projets livrés" },
      { value: "React", label: "/ Next.js" },
      { value: "Spring Boot", label: "Backend" },
      { value: "API", label: "Sécurisée JWT" },
    ],
  },

  about: {
    eyebrow: "À propos",
    heading: "Développeur passionné par les interfaces qui font la différence.",
    p1: "Je suis **Dorian Ondoua**, développeur full-stack spécialisé dans la création d'applications web modernes avec React, Next.js et Spring Boot.",
    p2: "Ma force ? Combiner une **UI premium** qui capte l'attention avec une **architecture backend robuste**. Chaque projet que je livre est conçu pour performer, monter en charge et impressionner.",
    p3: "Passionné par le SaaS, les dashboards médicaux et les applications métier, je vise toujours cet équilibre entre le beau et le fonctionnel.",
    available: "Disponible pour de nouveaux projets",
    highlights: [
      {
        title: "UI premium",
        desc: "Des interfaces qui captivent et convertissent, inspirées des meilleurs standards Awwwards.",
      },
      {
        title: "Full-Stack",
        desc: "Des composants React à l'API Spring Boot, je gère toute la stack applicative.",
      },
      {
        title: "SaaS & Dashboards",
        desc: "Dashboards métier, abonnements, gestion multi-tenant — mon domaine d'expertise.",
      },
      {
        title: "API sécurisées",
        desc: "Authentification JWT, rôles, permissions — la sécurité intégrée dès le départ.",
      },
    ],
  },

  stack: {
    eyebrow: "Stack technique",
    heading: "Les outils que je maîtrise",
    categories: ["Frontend", "Backend", "Base de données", "Outils"],
  },

  services: {
    eyebrow: "Services",
    heading: "Ce que je peux construire pour vous",
    intro: "Chaque service est pensé pour offrir un maximum de valeur, rapidement et proprement.",
    cta: "Parlons de votre projet",
    items: [
      {
        title: "Développement Web",
        desc: "Sites et applications web modernes, performants et optimisés SEO. De la landing page premium aux projets complexes.",
        features: ["React / Next.js", "Responsive & mobile-first", "Performance optimisée", "SEO technique"],
      },
      {
        title: "Développement SaaS",
        desc: "Dashboards complets, authentification multi-rôles, abonnements, gestion d'équipe. Applications métier clé en main.",
        features: ["Dashboard avancé", "Auth JWT / rôles", "API REST sécurisée", "Prêt pour le multi-tenant"],
      },
      {
        title: "Intégration UI/UX",
        desc: "De la maquette Figma aux interfaces pixel-perfect avec animations Framer Motion. Qualité niveau Awwwards.",
        features: ["Figma pixel-perfect", "Animations avancées", "Design system", "Framer Motion"],
      },
      {
        title: "Backend & API",
        desc: "API REST robustes avec Spring Boot, gestion de base de données, sécurité JWT, documentation Swagger.",
        features: ["Spring Boot / Java", "PostgreSQL / MySQL", "Authentification JWT", "API documentée"],
      },
    ],
  },

  workflow: {
    eyebrow: "Méthode",
    heading: "Mon processus de développement",
    intro: "Un workflow fluide qui combine stratégie, design, ingénierie et accompagnement sur le long terme.",
    stepsTitle: "Étapes de développement",
    toolsTitle: "Les outils que j'utilise",
    steps: [
      {
        title: "Découverte & Stratégie",
        desc: "Comprendre vos objectifs métier, définir le périmètre du projet et aligner les attentes pour établir une feuille de route claire.",
      },
      {
        title: "Design & Prototypage",
        desc: "Création de wireframes, de parcours utilisateurs et de maquettes UI haute fidélité garantissant une expérience intuitive et orientée conversion.",
      },
      {
        title: "Développement & Tests",
        desc: "Construction de solutions évolutives avec des technologies modernes et tests QA approfondis pour garantir la stabilité.",
      },
      {
        title: "Lancement & Support",
        desc: "Déploiement du projet, suivi des performances et mises à jour et améliorations continues après le lancement.",
      },
    ],
    toolGroupLabels: ["Frontend", "Backend", "Base de données & Outils"],
    deliverEyebrow: "Ce que je livre",
    deliverIntro: "Des solutions orientées résultats, adaptées à vos besoins spécifiques.",
    deliverables: [
      {
        title: "Développement Web",
        desc: "Des sites performants et optimisés SEO, construits avec des pratiques de développement modernes.",
        features: ["Optimisé SEO", "Score PageSpeed élevé", "Design responsive", "Sécurisé & rapide", "Architecture évolutive"],
      },
      {
        title: "Design UI/UX",
        desc: "Un design centré utilisateur qui améliore l'ergonomie, l'engagement et les conversions.",
        features: ["Wireframes", "Prototypes", "Parcours utilisateurs", "Design systems", "Améliorations d'ergonomie"],
      },
      {
        title: "Développement SaaS",
        desc: "Développement de produit SaaS de bout en bout, du concept à une plateforme pleinement fonctionnelle.",
        features: ["Authentification utilisateur", "Dashboards admin", "Intégrations API", "Fonctionnalités temps réel", "Déploiement cloud"],
      },
    ],
    ctaEyebrow: "Prêt à démarrer ?",
    ctaHeading: "Prêt à transformer votre activité ?",
    ctaText:
      "Réservez votre appel stratégique gratuit de 30 minutes et découvrez comment mon approche éprouvée peut vous aider à surpasser vos concurrents et générer une croissance mesurable.",
    ctaButton: "Réserver mon appel stratégique gratuit",
    ctaNote: "Disponibilités limitées · Sans engagement · 100% confidentiel",
  },

  projects: {
    eyebrow: "Projets",
    heading: "Ce que j'ai construit",
    intro:
      'Cliquez sur « Voir l\'étude de cas » sur un projet pour explorer tout le processus — du problème à la production.',
    ui: {
      caseStudy: "Étude de cas",
      overview: "Aperçu",
      challenge: "Le défi",
      goals: "Objectifs du projet",
      process: "Processus",
      results: "Résultats",
      techStack: "Stack technique",
      visitWebsite: "Visiter le site",
      viewGithub: "Voir sur GitHub",
      viewCaseStudy: "Voir l'étude de cas",
      interested: "Intéressé par un projet de ce type ?",
      startProject: "Démarrer votre projet →",
      closeAria: "Fermer l'étude de cas",
    },
    items: {
      healthcare: {
        label: "Santé",
        tagline: "Reprenez le contrôle de votre santé.",
        description:
          "HealthSOD rassemble vos consultations, analyses et médecins dans une seule application. Plateforme full-stack (React + Spring Boot) déployée en production — 10K+ patients, 500+ médecins.",
        metrics: ["En production", "10K+ patients", "500+ médecins"],
        overview:
          "HealthSOD est une plateforme de santé connectée qui centralise les consultations, les analyses médicales et les rendez-vous médecins dans une seule application intuitive. Conçue en solo de l'architecture au déploiement, elle est aujourd'hui en production avec des milliers d'utilisateurs actifs.",
        challenge:
          "Les patients au Cameroun et à travers l'Afrique peinent à gérer leurs données de santé — rendez-vous éparpillés, résultats d'analyses perdus, aucun lien direct avec leurs médecins. HealthSOD a été conçu pour tout réunir au même endroit, avec des données en temps réel, une UX épurée et une sécurité à toute épreuve.",
        goals: [
          "Construire une application de santé intuitive pour patients, médecins et admins",
          "Centraliser les rendez-vous, symptômes et antécédents médicaux",
          "Mettre en place un suivi des données de santé en temps réel (BPM, pas, sommeil)",
          "Sécuriser toutes les données médicales avec une authentification JWT multi-rôles",
          "Atteindre une note de 4,9★ grâce à un design UX premium",
          "Déployer en production et passer à l'échelle de 10 000+ utilisateurs actifs",
        ],
        process: [
          {
            title: "Architecture produit",
            desc: "Définition de 3 rôles utilisateurs (patient, médecin, admin), des modèles de données et des contrats d'API. Conception du schéma PostgreSQL optimisé pour les dossiers médicaux à grande échelle.",
          },
          {
            title: "Design UI/UX",
            desc: "Conception d'une interface de santé claire et grand public — dashboards intuitifs, cartes de rendez-vous, graphiques de symptômes — en privilégiant la clarté à la complexité.",
          },
          {
            title: "Frontend — React + Tailwind",
            desc: "Construction de toute l'interface avec React et Tailwind. Routes protégées, widgets de données de santé en temps réel, prise de rendez-vous et dashboards animés.",
          },
          {
            title: "API Backend — Spring Boot",
            desc: "Développement d'une API REST sécurisée avec Spring Boot. CRUD complet pour les patients, rendez-vous et dossiers, middleware JWT et Spring Security pour l'accès basé sur les rôles.",
          },
          {
            title: "Authentification & Sécurité",
            desc: "Auth JWT multi-rôles avec Spring Security. Isolation totale des données entre patients, médecins et admins. Zéro vulnérabilité critique en production.",
          },
          {
            title: "Déploiement en production",
            desc: "Déployé sur Vercel (frontend) avec un backend PostgreSQL optimisé. SSL, CORS et secrets par environnement configurés. Stable avec 10K+ utilisateurs actifs.",
          },
        ],
        results: [
          "En production sur healthsod.vercel.app",
          "10 000+ patients et 500+ médecins intégrés",
          "Note de 4,9★ sur l'App Store",
          "Livré en solo en 4 semaines, du concept à la production",
          "Zéro incident de sécurité critique depuis le lancement",
        ],
      },
      sira: {
        label: "Magazine",
        tagline: "Magazine digital d'impact pour l'Afrique",
        description:
          "Une plateforme éditoriale premium construite avec Next.js 14, Framer Motion et un CMS sur mesure — conçue pour amplifier les projets humanitaires et les entrepreneurs sociaux à travers l'Afrique.",
        metrics: ["6 semaines", "Dev solo", "Dashboard CMS"],
        overview:
          "SIRA Magazine est une plateforme éditoriale premium qui amplifie la voix des projets humanitaires, des entrepreneurs sociaux et des initiatives à fort impact à travers l'Afrique. Construite avec Next.js 14 et un design system de niveau Awwwards, elle allie une narration de qualité magazine à des performances web modernes.",
        challenge:
          "Les projets à fort impact en Afrique restent invisibles — noyés dans des plateformes généralistes qui ne racontent pas correctement leurs histoires. SIRA avait besoin d'une plateforme aussi premium que les histoires qu'elle raconte, avec un CMS assez simple pour des éditeurs non techniques et des performances suffisantes pour atteindre les lecteurs sur connexions lentes.",
        goals: [
          "Concevoir une interface éditoriale de niveau Awwwards qui capte l'attention",
          "Construire un dashboard CMS pour des éditeurs non techniques",
          "Atteindre un score de performance Lighthouse de 95+",
          "Mettre en place des animations au scroll avancées qui enrichissent la narration",
          "Créer un design entièrement responsive optimisé pour les lecteurs mobiles",
          "Construire une architecture de contenu évolutive pour la croissance future",
        ],
        process: [
          {
            title: "Concept éditorial",
            desc: "Définition de l'architecture de contenu, de la hiérarchie des sections et du fil narratif. Recherche sur les sites de magazines premium et création d'un moodboard aligné sur l'identité visuelle africaine.",
          },
          {
            title: "Design system",
            desc: "Création d'un design system complet sur Figma — échelle typographique, tokens de couleur, bibliothèque de composants et grille éditoriale. Inspiré du NYT, de The Atlantic et des lauréats Awwwards.",
          },
          {
            title: "Frontend — Next.js + TypeScript",
            desc: "Construction avec Next.js 14 App Router, TypeScript et Tailwind. SSG pour la performance, routing dynamique pour les articles et optimisation d'images sur mesure.",
          },
          {
            title: "Système d'animation",
            desc: "Conception d'un système d'animation complet avec Framer Motion — révélations au scroll, couches de parallaxe, effets de stagger et transitions de page fluides.",
          },
          {
            title: "CMS & Contenu",
            desc: "Construction d'un dashboard CMS léger permettant aux éditeurs de publier des articles, gérer les catégories, téléverser des médias et prévisualiser le contenu en temps réel — sans aucune ligne de code.",
          },
          {
            title: "SEO & Déploiement",
            desc: "Optimisation pour le SEO technique avec données structurées, Open Graph et SSR. Déployé sur Vercel avec edge caching. Score Lighthouse de 95+ dans toutes les catégories.",
          },
        ],
        results: [
          "Qualité de design niveau Awwwards validée par la communauté",
          "Lighthouse 95+ en Performance, SEO et Accessibilité",
          "Des animations avancées qui enrichissent réellement la narration",
          "Un CMS permettant aux éditeurs non techniques de publier en autonomie",
          "Livré en 6 semaines en tant que développeur full-stack solo",
        ],
        testimonial: {
          text: "La plateforme a dépassé nos attentes. Le design est superbe, les performances sont incroyables et le CMS est si intuitif que nos éditeurs l'ont adopté immédiatement. Dorian a tout géré, de l'architecture au déploiement, avec une précision irréprochable.",
          author: "Équipe éditoriale de SIRA Magazine",
        },
      },
      wealthflow: {
        label: "Fintech",
        tagline: "Votre argent, enfin sous contrôle.",
        description:
          "WealthFlow réunit vos revenus, dépenses et objectifs d'épargne dans un dashboard limpide. Application web full-stack de gestion de budget personnel — suivi des transactions, budgets mensuels, graphiques et export CSV.",
        metrics: ["En production", "Budgets & objectifs", "Export CSV"],
        overview:
          "WealthFlow est une application full-stack de finances personnelles qui réunit revenus, dépenses et objectifs d'épargne dans un dashboard d'une clarté limpide. Elle permet de suivre chaque transaction par catégorie, de définir des budgets mensuels, de fixer des objectifs d'épargne et de visualiser où part chaque euro — sans tableur ni prise de tête.",
        challenge:
          "La plupart des gens perdent le fil de leur argent entre des tableurs éparpillés et des applis bancaires qui ne racontent jamais toute l'histoire. WealthFlow a été conçu pour unifier revenus, dépenses et épargne dans une vue claire — avec des graphiques en temps réel, des budgets par catégorie, des alertes de dépassement et un suivi d'objectifs qui motivent réellement de meilleures habitudes financières.",
        goals: [
          "Centraliser revenus, dépenses et objectifs d'épargne dans un seul dashboard",
          "Suivre les transactions par catégorie avec des répartitions visuelles claires",
          "Définir des budgets mensuels par catégorie avec alertes de dépassement",
          "Fixer des objectifs d'épargne et suivre leur progression dans le temps",
          "Faire ressortir des insights via des graphiques en barres, donut et évolution du solde",
          "Permettre aux utilisateurs d'exporter toutes leurs données financières en CSV",
        ],
        process: [
          {
            title: "Architecture produit",
            desc: "Modélisation des transactions, catégories, budgets, objectifs d'épargne et notifications. Conception du schéma de données autour de l'agrégation mensuelle pour des calculs de budget et de solde rapides.",
          },
          {
            title: "Design UI/UX",
            desc: "Conception d'un dashboard financier d'une clarté limpide — revenus vs dépenses, répartitions par catégorie et progression des objectifs — en privilégiant la lisibilité pour voir instantanément où part chaque euro.",
          },
          {
            title: "Visualisation de données",
            desc: "Construction de graphiques en barres (revenus vs dépenses), d'un donut pour la répartition par catégorie et d'une courbe d'évolution du solde — transformant les transactions brutes en insights actionnables.",
          },
          {
            title: "Moteur de budgets & objectifs",
            desc: "Mise en place de budgets mensuels par catégorie avec détection de dépassement, et d'objectifs d'épargne avec suivi de progression en direct — la logique au cœur de la valeur de l'app.",
          },
          {
            title: "Notifications & Export",
            desc: "Ajout de notifications in-app (budget dépassé, objectif atteint) et d'un export CSV en un clic pour que les utilisateurs gardent la pleine maîtrise de leurs données financières.",
          },
          {
            title: "Déploiement en production",
            desc: "Déployé sur Vercel avec secrets par environnement, SSL et builds optimisés. Stable et en ligne pour le suivi quotidien des finances personnelles.",
          },
        ],
        results: [
          "En production sur controle-money.vercel.app",
          "Dashboard unifié pour revenus, dépenses et objectifs d'épargne",
          "Budgets mensuels avec alertes de dépassement en temps réel",
          "Graphiques en barres, donut et évolution du solde pour un aperçu instantané",
          "Suivi des objectifs d'épargne et export CSV en un clic",
        ],
      },
    },
  },

  contact: {
    eyebrow: "Contact",
    heading: "Travaillons ensemble",
    intro: "Disponible pour des missions freelance, des projets SaaS ou toute collaboration intéressante.",
    bookTitle: "Réserver un appel",
    bookDesc: "30 min — discutons de votre projet",
    availableTitle: "Disponible maintenant",
    availableDesc: "Réponse sous 24h · Basé au Cameroun · Travail à distance possible",
    whatsappValue: "Discutons de votre projet",
    form: {
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Email",
      emailPlaceholder: "votre@email.com",
      subjectLabel: "Sujet",
      subjectPlaceholder: "Votre projet en quelques mots",
      messageLabel: "Message",
      messagePlaceholder: "Décrivez votre projet, vos besoins, votre budget...",
      sending: "Envoi...",
      send: "Envoyer le message",
      success: "Message envoyé ! Je vous réponds sous 24h.",
      error: "Une erreur est survenue. Réessayez ou contactez-moi directement.",
    },
  },

  footer: {
    rights: "Tous droits réservés.",
    builtWith: "Conçu avec React · TypeScript · Tailwind · Framer Motion",
  },
};

export const translations: Record<"en" | "fr", Dict> = { en, fr };
