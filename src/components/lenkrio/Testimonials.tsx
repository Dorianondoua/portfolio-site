import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Sarah M",
    role: "Manager at Growth",
    quote: "Since switching to this platform, my bio clicks doubled. I can finally showcase all my content in one place that looks and feels like me.",
    col: 1,
  },
  {
    name: "Marco D",
    role: "Founder at Elevate",
    quote: "As an agency, link tracking used to be a headache. Now we manage multiple brands under one roof and export white-label reports in minutes.",
    col: 2,
  },
  {
    name: "Jason R",
    role: "Content Creator",
    quote: "As an agency, link tracking used to be a headache. Now we manage multiple brands under one roof and export white-label reports in minutes.",
    col: 1,
  },
];

const avatarColors = ["#156e6e", "#4efdfd", "#9b2d7a", "#292c37"];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full"
      style={{ background: "#080f1a" }}
      id="testimonials"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">

        {/* Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold tracking-wide"
            style={{ color: "#4efdfd" }}
          >
            Testimonials
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4 font-semibold leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <span className="text-white">What Our Users</span>
            <br />
            <span className="text-white">Are </span>
            <span style={{ color: "#4efdfd" }}>Saying</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-md text-sm"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Create, customize, and track your links in just a few clicks.
          </motion.p>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr_1fr]">

          {/* Left — stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Rating */}
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-semibold text-white">4.9</span>
                <span className="text-lg font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>/5</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                We've delivered <strong className="text-white">50+ projects</strong> that help companies generate real results.
              </p>
            </div>

            {/* Trusted by */}
            <div>
              {/* Avatar group */}
              <div className="mb-2 flex">
                {avatarColors.map((color, i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{
                      background: color,
                      border: "2px solid #080f1a",
                      marginLeft: i === 0 ? 0 : "-8px",
                      zIndex: 4 - i,
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                Trusted by clients worldwide
              </p>
            </div>

            {/* CTA */}
            <a
              href="#review"
              className="inline-flex w-fit items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-[#080f1a] transition-opacity hover:opacity-90"
              style={{ background: "#4efdfd" }}
            >
              Leave a review
            </a>
          </motion.div>

          {/* Testimonial columns */}
          {[0, 1].map((col) => (
            <div key={col} className="flex flex-col gap-6">
              {testimonials
                .filter((_, i) => i % 2 === col)
                .map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 28 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + (col * 0.1) + (i * 0.1) }}
                    className="rounded-2xl p-5"
                    style={{
                      background: "#0d1b24",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {/* Avatar + name */}
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                        style={{ background: "linear-gradient(135deg, #156e6e, #4efdfd)" }}
                      >
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{t.name}</div>
                        <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{t.role}</div>
                      </div>
                    </div>
                    {/* Quote */}
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                      "{t.quote}"
                    </p>
                  </motion.div>
                ))}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
