import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "1",
    title: "Discovery & Strategy",
    desc: "Understanding your business goals, defining project scope, and aligning expectations to establish a clear roadmap.",
  },
  {
    number: "2",
    title: "Design & Prototyping",
    desc: "Creating wireframes, user journeys, and high-fidelity UI mockups that ensure an intuitive, conversion-focused experience.",
  },
  {
    number: "3",
    title: "Development & Testing",
    desc: "Building scalable solutions with modern technologies and performing thorough QA testing to guarantee stability.",
  },
  {
    number: "4",
    title: "Launch & Support",
    desc: "Deploying the project, monitoring performance, and providing continuous updates and improvements post-launch.",
  },
];

const toolGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Spring Boot", "Java", "Node.js", "REST API", "JWT Auth"],
  },
  {
    label: "Database & Tools",
    items: ["PostgreSQL", "MySQL", "Firebase", "Docker", "Git / GitHub"],
  },
];

const deliverables = [
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
];

export function Workflow() {
  return (
    <section id="workflow" className="w-full" style={{ background: "#080f1a" }}>

      {/* Separator */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="h-px w-full" style={{ background: "rgba(78,253,253,0.08)" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">

        {/* ── Header ── */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-3 text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#4efdfd" }}
          >
            Workflow
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-white"
          >
            My Development Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            A streamlined workflow combining strategy, design, engineering and long-term support.
          </motion.p>
        </div>

        {/* ── Main card: Steps + Tools ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 rounded-3xl p-8 md:p-12"
          style={{ background: "#0d1b24", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            {/* Left — Steps */}
            <div>
              <h3 className="mb-8 text-lg font-bold text-white">Development Steps</h3>
              <div className="flex flex-col gap-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: EASE }}
                    viewport={{ once: true, margin: "-60px" }}
                  >
                    {/* Dot + line */}
                    <div className="flex flex-col items-center gap-1 pt-0.5">
                      <motion.div
                        className="h-3 w-3 shrink-0 rounded-full"
                        style={{ background: "#4efdfd", boxShadow: "0 0 10px rgba(78,253,253,0.5)" }}
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
                      />
                      {i < steps.length - 1 && (
                        <div
                          className="w-px flex-1"
                          style={{
                            background: "linear-gradient(to bottom, rgba(78,253,253,0.3), rgba(78,253,253,0.05))",
                            minHeight: "40px",
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-2">
                      <p className="mb-1 text-base font-semibold text-white">
                        <span style={{ color: "#4efdfd" }}>{step.number}</span>
                        {" : "}
                        {step.title}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — Tools */}
            <div>
              <h3 className="mb-8 text-lg font-bold text-white">Tools I Use</h3>
              <div className="flex flex-col gap-7">
                {toolGroups.map((group, gi) => (
                  <motion.div
                    key={group.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + gi * 0.12, ease: EASE }}
                    viewport={{ once: true, margin: "-60px" }}
                  >
                    <p className="mb-3 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <motion.span
                          key={item}
                          className="rounded-full px-3.5 py-1.5 text-sm font-medium"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.75)",
                          }}
                          whileHover={{
                            background: "rgba(78,253,253,0.08)",
                            color: "#4efdfd",
                            borderColor: "rgba(78,253,253,0.3)",
                            transition: { duration: 0.15 },
                          }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── What I Deliver ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-5 text-center"
        >
          <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#4efdfd" }}>
            What I Deliver
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            Results-driven solutions tailored to your specific needs.
          </p>
        </motion.div>

        <div className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 16px 48px rgba(78,253,253,0.07)",
                transition: { type: "spring", stiffness: 280, damping: 22 },
              }}
              className="cursor-default rounded-2xl p-6"
              style={{ background: "#0d1b24", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Number badge */}
              <div
                className="mb-4 inline-flex items-center justify-center h-8 w-8 rounded-lg text-sm font-bold"
                style={{ background: "rgba(78,253,253,0.1)", color: "#4efdfd" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <h4 className="mb-2 text-base font-semibold text-white">{d.title}</h4>
              <p className="mb-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {d.desc}
              </p>

              <ul className="flex flex-col gap-1.5">
                {d.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#4efdfd]" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── CTA block ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative overflow-hidden rounded-3xl px-8 py-14 text-center md:px-16"
          style={{
            background: "radial-gradient(ellipse 90% 80% at 50% 50%, #0d3535 0%, #080f1a 65%)",
            border: "1px solid rgba(78,253,253,0.12)",
          }}
        >
          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(78,253,253,0.07) 0%, transparent 70%)",
            }}
          />

          <motion.p
            className="mb-2 text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#4efdfd" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            viewport={{ once: true }}
          >
            Ready to start?
          </motion.p>

          <motion.h3
            className="mb-4 text-white"
            style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
            viewport={{ once: true }}
          >
            Ready to transform your business?
          </motion.h3>

          <motion.p
            className="mx-auto mb-8 max-w-lg text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
            viewport={{ once: true }}
          >
            Claim your free 30-minute strategy call and discover how my proven approach
            can help you outperform competitors and generate measurable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: EASE }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://calendly.com/ondouadorian188/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold text-[#080f1a]"
              style={{ background: "linear-gradient(90deg, #156e6e, #4efdfd)" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 32px rgba(78,253,253,0.4)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Calendar className="h-4 w-4" />
              Book your free strategy call
            </motion.a>
          </motion.div>

          <motion.p
            className="mt-5 text-xs"
            style={{ color: "rgba(255,255,255,0.28)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            viewport={{ once: true }}
          >
            Limited availability&nbsp;·&nbsp;No obligation&nbsp;·&nbsp;100% confidential
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}
