import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const features = [
  "10 active short links",
  "Basic analytics",
  "QR code generator",
  "1 bio page",
  "Branded link preview",
];

export function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 30%, #1ecfcf 0%, #0d6060 30%, #080f1a 65%)",
      }}
      id="pricing"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-5 text-sm font-semibold tracking-wide"
          style={{ color: "#4efdfd" }}
        >
          Pricing
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4 font-semibold leading-none tracking-tight"
          style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
        >
          <span className="text-white">SIMPLE PRICING</span>
          <br />
          <span className="text-white">NO </span>
          <span style={{ color: "#4efdfd" }}>SURPRISES</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Create, customize, and track your links in just a few clicks.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          {/* Card 1 — Light */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl p-6 text-left"
            style={{ background: "#ffffff" }}
          >
            <div className="mb-3 text-sm font-semibold text-[#111521]">Starter Plan</div>
            <div className="mb-1 flex items-baseline gap-1">
              <span className="text-4xl font-semibold text-[#111521]">$300</span>
              <span className="text-sm text-gray-500">/monthly</span>
            </div>
            <p className="mb-4 text-xs text-gray-500">Perfect for personal use and getting started.</p>
            <hr className="mb-4 border-gray-200" />
            <ul className="mb-6 flex flex-col gap-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-[#111521]">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "#111521" }}
                  >
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="text-sm font-semibold text-[#111521] underline-offset-2 hover:underline">
              Subscribe Now
            </button>
          </motion.div>

          {/* Card 2 — Dark */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl p-6 text-left"
            style={{ background: "#0d1b24", border: "1px solid rgba(78,253,253,0.15)" }}
          >
            <div className="mb-3 text-sm font-semibold text-white">Starter Plan</div>
            <div className="mb-1 flex items-baseline gap-1">
              <span className="text-4xl font-semibold text-white">$300</span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>/monthly</span>
            </div>
            <p className="mb-4 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Perfect for personal use and getting started.
            </p>
            <hr style={{ borderColor: "rgba(255,255,255,0.08)", marginBottom: "1rem" }} />
            <ul className="mb-6 flex flex-col gap-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-white">
                  <Check className="h-4 w-4 shrink-0" style={{ color: "#4efdfd" }} />
                  {f}
                </li>
              ))}
            </ul>
            <button className="text-sm font-semibold" style={{ color: "#4efdfd" }}>
              Subscribe Now
            </button>
          </motion.div>

        </div>

        {/* Custom plan banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl p-6 sm:flex-row sm:items-center"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="text-left">
            <div className="mb-1 font-bold text-white">Need Something Custom?</div>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              We'll build a plan that fits your workflow, not the other way around — ideal for agencies, enterprise teams, or advanced marketers.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(69deg, #156e6e 0%, #4efdfd 80%)" }}
          >
            Contact Us
          </a>
        </motion.div>

      </div>
    </section>
  );
}
