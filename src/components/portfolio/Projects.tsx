import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Heart, BookOpen, Wallet } from "lucide-react";
import { SpotlightCard } from "@/components/portfolio/premium";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Types ─── */
interface ProcessStep { title: string; desc: string }
interface Project {
  id: string;
  index: string;
  label: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
  coverImage: string | null;
  gradient: string;
  metrics: string[];
  overview: string;
  challenge: string;
  goals: string[];
  process: ProcessStep[];
  results: string[];
  testimonial?: { text: string; author: string };
  stack: string[];
  github: string;
  demoUrl: string | null;
  live: string | null;
  icon: React.ReactNode;
}

/* ─── Data ─── */
const projects: Project[] = [
  {
    id: "healthcare",
    index: "01",
    label: "Healthcare",
    title: "HealthSOD",
    tagline: "Reprenez le contrôle de votre santé.",
    description:
      "HealthSOD rassemble vos consultations, analyses et médecins dans une seule application. Plateforme full-stack (React + Spring Boot) déployée en production — 10K+ patients, 500+ médecins.",
    accentColor: "#4efdfd",
    coverImage: "/logo/healthsod.png",
    gradient: "linear-gradient(135deg, #0d4060 0%, #0d1b24 100%)",
    metrics: ["Live in production", "10K+ patients", "500+ médecins"],
    icon: <Heart className="h-8 w-8" />,
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
    stack: ["React", "Spring Boot", "PostgreSQL", "JWT", "Java", "Tailwind CSS", "Vercel"],
    github: "https://github.com/DorianOndoua",
    demoUrl: null,
    live: "https://healthsod.vercel.app",
  },
  {
    id: "sira",
    index: "02",
    label: "Magazine",
    title: "SIRA Magazine",
    tagline: "Digital impact magazine for Africa",
    description:
      "A premium editorial platform built with Next.js 14, Framer Motion, and a custom CMS — designed to amplify humanitarian projects and social entrepreneurs across Africa.",
    accentColor: "#b57efd",
    coverImage: "/logo/sira.png",
    gradient: "linear-gradient(135deg, #2d0d60 0%, #0d1b24 100%)",
    metrics: ["6 weeks", "Solo dev", "CMS dashboard"],
    icon: <BookOpen className="h-8 w-8" />,
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
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "",
    demoUrl: null,
    live: "https://front-end2-snowy.vercel.app",
  },
  {
    id: "wealthflow",
    index: "03",
    label: "Fintech",
    title: "WealthFlow",
    tagline: "Votre argent, enfin sous contrôle.",
    description:
      "WealthFlow réunit vos revenus, dépenses et objectifs d'épargne dans un dashboard limpide. Application web full-stack de gestion de budget personnel — suivi des transactions, budgets mensuels, graphiques et export CSV.",
    accentColor: "#4efda0",
    coverImage: "/logo/wealthflow.png",
    gradient: "linear-gradient(135deg, #0d4030 0%, #0d1b24 100%)",
    metrics: ["Live en production", "Budgets & objectifs", "Export CSV"],
    icon: <Wallet className="h-8 w-8" />,
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
    stack: ["React", "Spring Boot", "PostgreSQL", "JWT", "Java", "Tailwind CSS", "Vercel"],
    github: "https://github.com/DorianOndoua",
    demoUrl: null,
    live: "https://controle-money.vercel.app",
  },
];

/* ─── Laptop mockup frame ─── */
function LaptopMockup({ src, alt, gradient, icon, accentColor }: {
  src: string | null;
  alt: string;
  gradient: string;
  icon: React.ReactNode;
  accentColor: string;
}) {
  return (
    <div className="relative w-full max-w-120 mx-auto select-none">
      {/* Screen bezel */}
      <div
        className="relative rounded-t-xl overflow-hidden"
        style={{
          background: "#12131f",
          border: "2px solid #1e2035",
          borderBottom: "none",
          padding: "10px 10px 0",
        }}
      >
        {/* Camera dot */}
        <div className="flex justify-center mb-2">
          <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#1e2035" }} />
        </div>

        {/* Screenshot / placeholder */}
        <div className="overflow-hidden" style={{ borderRadius: "4px 4px 0 0", minHeight: "220px" }}>
          {src ? (
            <img
              src={src}
              alt={alt}
              className="w-full object-cover object-top"
              style={{ maxHeight: "300px" }}
            />
          ) : (
            <div
              className="w-full flex items-center justify-center"
              style={{ background: gradient, minHeight: "220px", color: accentColor }}
            >
              {icon}
            </div>
          )}
        </div>
      </div>

      {/* Hinge */}
      <div style={{ height: "4px", background: "#0e0f1a", borderRadius: "0" }} />

      {/* Base */}
      <div
        style={{
          height: "18px",
          width: "108%",
          marginLeft: "-4%",
          background: "linear-gradient(180deg, #1a1b2a 0%, #0e0f1a 100%)",
          borderRadius: "0 0 10px 10px",
        }}
      />

      {/* Shadow */}
      <div
        style={{
          height: "6px",
          width: "70%",
          margin: "0 auto",
          background: "rgba(0,0,0,0.35)",
          filter: "blur(6px)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

/* ─── Section label ─── */
function SectionLabel({ text, color }: { text: string; color: string }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color }}>
        {text}
      </span>
      <div className="h-px flex-1" style={{ background: `${color}28` }} />
    </div>
  );
}

/* ─── Case Study Modal ─── */
function CaseStudyModal({ project: p, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-100 flex flex-col overflow-hidden"
      style={{ background: "#080f1a" }}
    >
      {/* Sticky header */}
      <div
        className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 md:px-12"
        style={{
          background: "rgba(8,15,26,0.9)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: `${p.accentColor}18`, color: p.accentColor, border: `1px solid ${p.accentColor}30` }}
          >
            {p.label}
          </span>
          <span className="text-sm font-semibold text-white">{p.title}</span>
        </div>
        <motion.button
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}
          whileHover={{ background: "rgba(255,255,255,0.1)", color: "white", scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          aria-label="Close case study"
        >
          <X className="h-4 w-4" />
        </motion.button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
          className="mx-auto max-w-4xl px-6 py-12 md:px-12"
        >
          {/* Hero screenshot */}
          <div
            className="mb-12 w-full overflow-hidden rounded-2xl"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <LaptopMockup
              src={p.coverImage}
              alt={p.title}
              gradient={p.gradient}
              icon={p.icon}
              accentColor={p.accentColor}
            />
          </div>

          {/* Title */}
          <div className="mb-10">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: p.accentColor }}>
              {p.index} / Case Study
            </p>
            <h2 className="text-white" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
              {p.title}
            </h2>
            <p className="mt-1 text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
              {p.tagline}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.metrics.map((m) => (
                <span
                  key={m}
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ background: `${p.accentColor}12`, border: `1px solid ${p.accentColor}28`, color: p.accentColor }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Left */}
            <div className="flex flex-col gap-10">
              {/* Overview */}
              <div>
                <SectionLabel text="Overview" color={p.accentColor} />
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {p.overview}
                </p>
              </div>

              {/* Challenge */}
              <div>
                <SectionLabel text="The Challenge" color={p.accentColor} />
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {p.challenge}
                </p>
              </div>

              {/* Goals */}
              <div>
                <SectionLabel text="Project Goals" color={p.accentColor} />
                <ul className="flex flex-col gap-2.5">
                  {p.goals.map((g, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      <span className="mt-0.5 shrink-0 font-bold" style={{ color: p.accentColor }}>✔</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right */}
            <div>
              <SectionLabel text="Process" color={p.accentColor} />
              <div className="flex flex-col gap-3">
                {p.process.map((step, i) => (
                  <div
                    key={i}
                    className="rounded-xl px-4 py-3.5"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="text-xs font-bold opacity-50" style={{ color: p.accentColor }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-semibold text-white">{step.title}</span>
                    </div>
                    <p className="pl-6 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mt-10">
            <SectionLabel text="Results" color={p.accentColor} />
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {p.results.map((r, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl px-4 py-3"
                  style={{ background: `${p.accentColor}07`, border: `1px solid ${p.accentColor}18` }}
                >
                  <span className="mt-0.5 shrink-0 font-bold" style={{ color: p.accentColor }}>▲</span>
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {p.testimonial && (
            <blockquote
              className="mt-10 rounded-2xl px-6 py-6 md:px-8"
              style={{ background: `${p.accentColor}06`, border: `1px solid ${p.accentColor}20` }}
            >
              <p className="mb-3 text-sm italic leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                "{p.testimonial.text}"
              </p>
              <footer className="text-xs font-semibold" style={{ color: p.accentColor }}>
                — {p.testimonial.author}
              </footer>
            </blockquote>
          )}

          {/* Tech Stack */}
          <div className="mt-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md px-3 py-1.5 text-xs font-medium"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.65)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-3">
            {p.live && (
              <motion.a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-[#080f1a]"
                style={{ background: p.accentColor }}
                whileHover={{ scale: 1.04, boxShadow: `0 0 28px ${p.accentColor}50` }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Visit website
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            )}
            {p.github && (
              <motion.a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}
                whileHover={{ borderColor: "rgba(255,255,255,0.4)", color: "white", y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
              >
                View on GitHub
              </motion.a>
            )}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 border-t pt-10 text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <p className="mb-4 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Interested in a project like this?
            </p>
            <motion.a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold text-[#080f1a]"
              style={{ background: "linear-gradient(90deg, #156e6e, #4efdfd)" }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(78,253,253,0.35)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Start your project →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Project card (portfolio view) ─── */
function ProjectCard({ p, onViewCaseStudy }: { p: Project; onViewCaseStudy: () => void }) {
  return (
    <SpotlightCard
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: EASE }}
      viewport={{ once: true, margin: "-60px" }}
      spotlightColor={`${p.accentColor}12`}
      spotlightSize={460}
      className="rounded-2xl"
      style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#0d1b24" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Left — laptop mockup on dark bg */}
        <div
          className="relative flex items-center justify-center p-8 md:p-10 min-h-75"
          style={{
            background: "radial-gradient(ellipse 80% 80% at 50% 50%, #0f1c2b 0%, #080f1a 100%)",
            borderRight: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 50% 80%, ${p.accentColor}08 0%, transparent 70%)`,
            }}
          />
          <LaptopMockup
            src={p.coverImage}
            alt={p.title}
            gradient={p.gradient}
            icon={p.icon}
            accentColor={p.accentColor}
          />
        </div>

        {/* Right — info */}
        <div className="flex flex-col justify-center gap-6 p-8 md:p-10">

          {/* Label + index */}
          <div className="flex items-center gap-3">
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{ background: `${p.accentColor}14`, color: p.accentColor, border: `1px solid ${p.accentColor}28` }}
            >
              {p.label}
            </span>
            <span className="text-xs font-bold opacity-30 text-white">{p.index}</span>
          </div>

          {/* Title */}
          <div>
            <h3
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
            >
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              {p.description}
            </p>
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-2">
            {p.metrics.map((m) => (
              <span
                key={m}
                className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{ background: `${p.accentColor}10`, border: `1px solid ${p.accentColor}25`, color: p.accentColor }}
              >
                {m}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <motion.button
              onClick={onViewCaseStudy}
              className="rounded-lg border px-5 py-2.5 text-sm font-semibold"
              style={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.85)", background: "transparent" }}
              whileHover={{
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.35)",
                y: -2,
                transition: { type: "spring", stiffness: 350, damping: 22 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              View case study
            </motion.button>

            {p.live ? (
              <motion.a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-[#080f1a]"
                style={{ background: p.accentColor }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: `0 0 20px ${p.accentColor}45`,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.97 }}
              >
                Visit website
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            ) : (
              <motion.a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold"
                style={{ background: `${p.accentColor}14`, color: p.accentColor, border: `1px solid ${p.accentColor}30` }}
                whileHover={{
                  background: `${p.accentColor}22`,
                  y: -2,
                  transition: { type: "spring", stiffness: 350, damping: 22 },
                }}
                whileTap={{ scale: 0.97 }}
              >
                View on GitHub
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ─── Main Projects section ─── */
export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="w-full" style={{ background: "#080f1a" }}>
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-12">

          {/* Header */}
          <div className="mb-14">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
              className="mb-3 text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#4efdfd" }}
            >
              Projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-white"
            >
              What I've built
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
              className="mt-4 max-w-lg text-sm"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Click "View case study" on any project to explore the full process — from problem to production.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-8">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                p={p}
                onViewCaseStudy={() => setActiveProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case study modal */}
      <AnimatePresence>
        {activeProject && (
          <CaseStudyModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
