import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Heart, BookOpen, Wallet } from "lucide-react";
import { SpotlightCard } from "@/components/portfolio/premium";
import { useLang } from "@/lib/i18n";
import type { Dict } from "@/lib/translations";

const EASE = [0.22, 1, 0.36, 1] as const;

type ProjectsUI = Dict["projects"]["ui"];

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

/* ─── Static data (non-translated: ids, colors, images, links, stack) ─── */
type ProjectStatic = Pick<
  Project,
  "id" | "index" | "title" | "accentColor" | "coverImage" | "gradient" | "stack" | "github" | "demoUrl" | "live" | "icon"
>;

const projectStatic: ProjectStatic[] = [
  {
    id: "healthcare",
    index: "01",
    title: "HealthSOD",
    accentColor: "#4efdfd",
    coverImage: "/logo/healthsod.png",
    gradient: "linear-gradient(135deg, #0d4060 0%, #0d1b24 100%)",
    icon: <Heart className="h-8 w-8" />,
    stack: ["React", "Spring Boot", "PostgreSQL", "JWT", "Java", "Tailwind CSS", "Vercel"],
    github: "https://github.com/DorianOndoua",
    demoUrl: null,
    live: "https://healthsod.vercel.app",
  },
  {
    id: "sira",
    index: "02",
    title: "SIRA Magazine",
    accentColor: "#b57efd",
    coverImage: "/logo/sira.png",
    gradient: "linear-gradient(135deg, #2d0d60 0%, #0d1b24 100%)",
    icon: <BookOpen className="h-8 w-8" />,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "",
    demoUrl: null,
    live: "https://front-end2-snowy.vercel.app",
  },
  {
    id: "wealthflow",
    index: "03",
    title: "WealthFlow",
    accentColor: "#4efda0",
    coverImage: "/logo/wealthflow.png",
    gradient: "linear-gradient(135deg, #0d4030 0%, #0d1b24 100%)",
    icon: <Wallet className="h-8 w-8" />,
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
function CaseStudyModal({ project: p, ui, onClose }: { project: Project; ui: ProjectsUI; onClose: () => void }) {
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
          aria-label={ui.closeAria}
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
              {p.index} / {ui.caseStudy}
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
                <SectionLabel text={ui.overview} color={p.accentColor} />
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {p.overview}
                </p>
              </div>

              {/* Challenge */}
              <div>
                <SectionLabel text={ui.challenge} color={p.accentColor} />
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {p.challenge}
                </p>
              </div>

              {/* Goals */}
              <div>
                <SectionLabel text={ui.goals} color={p.accentColor} />
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
              <SectionLabel text={ui.process} color={p.accentColor} />
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
            <SectionLabel text={ui.results} color={p.accentColor} />
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
              {ui.techStack}
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
                {ui.visitWebsite}
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
                {ui.viewGithub}
              </motion.a>
            )}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 border-t pt-10 text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <p className="mb-4 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              {ui.interested}
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
              {ui.startProject}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Project card (portfolio view) ─── */
function ProjectCard({ p, ui, onViewCaseStudy }: { p: Project; ui: ProjectsUI; onViewCaseStudy: () => void }) {
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
              {ui.viewCaseStudy}
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
                {ui.visitWebsite}
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
                {ui.viewGithub}
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
  const { t } = useLang();
  const ui = t.projects.ui;
  // Merge static (ids, colors, links) with the active-language copy.
  const projects: Project[] = projectStatic.map((s) => ({
    ...s,
    ...t.projects.items[s.id as keyof typeof t.projects.items],
  }));

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
              {t.projects.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-white"
            >
              {t.projects.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
              className="mt-4 max-w-lg text-sm"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {t.projects.intro}
            </motion.p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-8">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                p={p}
                ui={ui}
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
            ui={ui}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
