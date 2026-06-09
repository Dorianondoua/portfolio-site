import { motion } from "framer-motion";
import { Zap, Code2, Layers, Shield } from "lucide-react";
import { SpotlightCard } from "@/components/portfolio/premium";

const EASE = [0.22, 1, 0.36, 1] as const;

const highlights = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Premium UI",
    desc: "Interfaces that captivate and convert, inspired by the best Awwwards standards.",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Full-Stack",
    desc: "From React components to the Spring Boot API, I manage the entire application stack.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "SaaS & Dashboards",
    desc: "Business dashboards, subscriptions, multi-tenant management — my domain of expertise.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Secure APIs",
    desc: "JWT authentication, roles, permissions — security built in from the ground up.",
  },
];

export function About() {
  return (
    <section id="about" className="w-full" style={{ background: "#080f1a" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">

          {/* Left — text with stagger reveal */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
              className="mb-4 text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#4efdfd" }}
            >
              About
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
              className="mb-6 text-white"
            >
              Developer passionate about interfaces that make a difference.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-4 text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              <p>
                I'm <strong className="text-white">Dorian Ondoua</strong>, a full-stack developer
                specializing in building modern web applications with React, Next.js, and Spring Boot.
              </p>
              <p>
                My strength? Combining <strong className="text-white">premium UI</strong> that captures
                attention with a <strong className="text-white">robust backend architecture</strong>.
                Every project I deliver is designed to perform, scale, and impress.
              </p>
              <p>
                Passionate about SaaS, medical dashboards, and business applications,
                I always aim for that balance between beautiful and functional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
              className="mt-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
              style={{ borderColor: "rgba(78,253,253,0.25)", color: "#4efdfd", background: "rgba(78,253,253,0.05)" }}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#4efdfd]" />
              Available for new projects
            </motion.div>
          </div>

          {/* Right — highlights grid with stagger + spring hover */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <SpotlightCard
                key={h.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: EASE }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 12px 40px rgba(78,253,253,0.08)",
                  transition: { type: "spring", stiffness: 300, damping: 22 },
                }}
                whileTap={{ scale: 0.98 }}
                className="cursor-default rounded-2xl p-5"
                style={{
                  background: "#0d1b24",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <motion.div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "rgba(78,253,253,0.1)", color: "#4efdfd" }}
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                >
                  {h.icon}
                </motion.div>
                <h3 className="mb-1.5 text-sm font-semibold text-white">{h.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {h.desc}
                </p>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
