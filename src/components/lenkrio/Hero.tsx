import { motion } from "framer-motion";
import { Link2 } from "lucide-react";
import { Navbar } from "./Navbar";
import { FlowDiagram } from "./FlowDiagram";

export function Hero() {
  return (
    <section
      className="relative isolate min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 100% 60% at 50% 100%, #3ecfcf 0%, #1a6060 20%, #0d2535 45%, #080f1a 70%)",
      }}
    >
      {/* Subtle dot grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <Navbar />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-28 pb-24 md:pt-32">

        {/* Flow diagram */}
        <FlowDiagram />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="mt-12 text-center font-semibold leading-none tracking-tight"
          style={{ fontSize: "clamp(52px, 9vw, 100px)" }}
        >
          <span className="text-white">WE GENERATE</span>
          <br />
          <span style={{ color: "#4efdfd" }}>LINKS</span>
          <span className="text-white"> EASY</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 max-w-lg text-center text-sm leading-relaxed md:text-base"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Create, share &amp; track links like a pro. No coding needed, yet easy to use for all.
          It's the only tool you'll need to build powerful, high-performing link
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#create"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0d1b24]"
          style={{ boxShadow: "0 8px 32px rgba(78,253,253,0.25)" }}
        >
          <Link2 className="h-4 w-4" />
          Create link
        </motion.a>

      </div>
    </section>
  );
}
