import { motion } from "framer-motion";
import { Navbar } from "./Navbar";

export function ContactHero() {
  return (
    <section
      className="relative isolate min-h-[50vh] overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 100% 80% at 50% 100%, #3ecfcf 0%, #1a6060 25%, #0d2535 50%, #080f1a 75%)",
      }}
    >
      <Navbar />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-6 pb-16 pt-36 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-white"
          style={{ fontSize: "clamp(38px, 7vw, 84px)" }}
        >
          WHETHER YOU
          <br />
          HAVE A QUESTION
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-lg text-base"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Create, share &amp; track links like a pro. No coding needed, yet easy to use for all.
          It's the only tool you'll need to build powerful, high-performing link
        </motion.p>
      </div>
    </section>
  );
}
