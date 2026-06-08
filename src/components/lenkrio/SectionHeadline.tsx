import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function SectionHeadline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-full px-6 py-20 text-center"
      style={{ background: "#080f1a" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-semibold leading-none tracking-tight"
        style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
      >
        <span className="text-white">ONE LINK TO</span>
        <br />
        <span style={{ color: "#4efdfd" }}>RULE </span>
        <span className="text-white">THEM ALL</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mx-auto mt-6 max-w-md text-sm leading-relaxed md:text-base"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        Create, customize, and track your links in just a few clicks.
      </motion.p>
    </section>
  );
}
