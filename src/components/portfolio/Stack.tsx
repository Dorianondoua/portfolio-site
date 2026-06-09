import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SpotlightCard } from "@/components/portfolio/premium";

const EASE = [0.22, 1, 0.36, 1] as const;

interface SkillItem { name: string; level: number }
interface Category { label: string; items: SkillItem[] }

const categories: Category[] = [
  {
    label: "Frontend",
    items: [
      { name: "React.js",     level: 90 },
      { name: "Next.js",      level: 85 },
      { name: "TypeScript",   level: 82 },
      { name: "JavaScript",   level: 90 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Spring Boot",  level: 80 },
      { name: "Java",         level: 78 },
      { name: "REST API",     level: 85 },
      { name: "JWT Auth",     level: 80 },
      { name: "Firebase",     level: 75 },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL",   level: 78 },
      { name: "MySQL",        level: 75 },
      { name: "Firebase DB",  level: 72 },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git / GitHub", level: 88 },
      { name: "Figma",        level: 70 },
      { name: "Postman",      level: 80 },
      { name: "Docker",       level: 80 },
    ],
  },
];

/* ─── Single card: useInView on the card drives ALL bar animations ─── */
function CategoryCard({ cat, ci }: { cat: Category; ci: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  // inView drives both card entrance AND progress bar animations
  const inView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <SpotlightCard
      ref={cardRef}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: ci * 0.1, ease: EASE }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 16px 48px rgba(78,253,253,0.07)",
        transition: { type: "spring", stiffness: 280, damping: 22 },
      }}
      whileTap={{ scale: 0.98 }}
      className="cursor-default rounded-2xl p-6"
      style={{
        background: "#0d1b24",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Category badge */}
      <div
        translate="no"
        className="mb-5 inline-block rounded-md px-3 py-1 text-xs font-bold uppercase tracking-widest"
        style={{ background: "rgba(78,253,253,0.1)", color: "#4efdfd" }}
      >
        {cat.label}
      </div>

      {/* Skills with progress bars */}
      <div className="flex flex-col gap-3.5">
        {cat.items.map((item, ii) => (
          <div key={item.name}>
            <div className="mb-1 flex items-center justify-between">
              <span translate="no" className="text-sm font-medium text-white">
                {item.name}
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                {item.level}%
              </span>
            </div>
            {/* Track */}
            <div
              className="h-1 w-full overflow-hidden rounded-full"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              {/* Bar — driven by card's inView, NOT its own whileInView */}
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #156e6e, #4efdfd)" }}
                initial={{ width: "0%" }}
                animate={inView ? { width: `${item.level}%` } : { width: "0%" }}
                transition={{
                  duration: 1,
                  delay: ci * 0.1 + ii * 0.08,
                  ease: EASE,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
}

/* ─── Stack section ─── */
export function Stack() {
  return (
    <section id="stack" className="w-full" style={{ background: "#080f1a" }}>
      {/* Separator */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="h-px w-full" style={{ background: "rgba(78,253,253,0.08)" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">

        {/* Header */}
        <div className="mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-3 text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#4efdfd" }}
          >
            Technical Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-white"
          >
            Tools I Master
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, ci) => (
            <CategoryCard key={cat.label} cat={cat} ci={ci} />
          ))}
        </div>
      </div>
    </section>
  );
}
