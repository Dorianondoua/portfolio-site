import { motion } from "framer-motion";
import { Globe, LayoutDashboard, PenTool, Server } from "lucide-react";
import { SpotlightCard } from "@/components/portfolio/premium";

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Development",
    desc: "Modern, performant, SEO-optimized websites and web apps. From premium landing pages to complex projects.",
    features: ["React / Next.js", "Responsive & mobile-first", "Optimized performance", "Technical SEO"],
  },
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "SaaS Development",
    desc: "Full dashboards, multi-role authentication, subscriptions, team management. Turnkey business applications.",
    features: ["Advanced dashboard", "JWT Auth / roles", "Secure REST API", "Multi-tenant ready"],
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "UI/UX Integration",
    desc: "Figma mockup to pixel-perfect interfaces with Framer Motion animations. Awwwards-level quality.",
    features: ["Pixel-perfect Figma", "Advanced animations", "Design system", "Framer Motion"],
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Backend & APIs",
    desc: "Robust REST APIs with Spring Boot, database management, JWT security, Swagger documentation.",
    features: ["Spring Boot / Java", "PostgreSQL / MySQL", "JWT Authentication", "Documented API"],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 70% 50% at 50% 100%, #0d3535 0%, #080f1a 60%)",
      }}
    >
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
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-white"
          >
            What I can build for you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto mt-4 max-w-lg text-sm"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Each service is designed to deliver maximum value, quickly and cleanly.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <SpotlightCard
              key={s.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 + i * 0.1, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 60px rgba(78,253,253,0.09)",
                transition: { type: "spring", stiffness: 280, damping: 20 },
              }}
              whileTap={{ scale: 0.97 }}
              className="group flex cursor-default flex-col rounded-2xl p-6"
              style={{
                background: "#0d1b24",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Icon with glow on hover */}
              <motion.div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(78,253,253,0.08)",
                  border: "1px solid rgba(78,253,253,0.15)",
                  color: "#4efdfd",
                }}
                whileHover={{
                  boxShadow: "0 0 28px rgba(78,253,253,0.35)",
                  background: "rgba(78,253,253,0.14)",
                  rotate: [0, -6, 6, 0],
                  transition: { duration: 0.4 },
                }}
              >
                {s.icon}
              </motion.div>

              <h3 className="mb-2 text-base font-semibold text-white">{s.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {s.desc}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-1.5">
                {s.features.map((f, fi) => (
                  <motion.li
                    key={f}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 + fi * 0.06, ease: EASE }}
                    viewport={{ once: true, margin: "-80px" }}
                  >
                    <span className="h-1 w-1 rounded-full bg-[#4efdfd]" />
                    {f}
                  </motion.li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5, ease: EASE }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            href="#contact"
            className="rounded-lg px-8 py-3.5 text-sm font-semibold text-[#080f1a]"
            style={{ background: "linear-gradient(90deg, #156e6e, #4efdfd)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 32px rgba(78,253,253,0.35)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            Let's talk about your project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
