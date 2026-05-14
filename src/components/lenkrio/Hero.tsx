import { motion } from "framer-motion";
import { Link2 } from "lucide-react";
import { Navbar } from "./Navbar";
import { FlowDiagram } from "./FlowDiagram";
import { FloatingActions } from "./FloatingActions";

export function Hero() {
  return (
    <section
      className="relative isolate min-h-screen overflow-hidden rounded-b-[28px]"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* subtle grid noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <Navbar />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-6 pb-24 md:pt-10">
        <FlowDiagram />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="mt-14 text-center text-5xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          WE GENERATE
          <br />
          <span className="bg-gradient-to-b from-[#7ef0ea] to-[#3bb5b0] bg-clip-text text-transparent">
            LINKS
          </span>{" "}
          EASY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 max-w-xl text-center text-sm leading-relaxed text-foreground/75 md:text-base"
        >
          Create, share & track links like a pro. No coding needed, yet easy to use for all.
          It's the only tool you'll need to build powerful, high-performing link
        </motion.p>

        <motion.a
          href="#create"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0b1220] shadow-[0_10px_40px_rgba(126,240,234,0.35)]"
        >
          <Link2 className="h-4 w-4" />
          Create link
        </motion.a>
      </div>

      <FloatingActions />
    </section>
  );
}
