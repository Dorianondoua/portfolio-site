import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { Magnetic } from "@/components/portfolio/premium";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "5+",          label: "Projects delivered" },
  { value: "React",       label: "/ Next.js" },
  { value: "Spring Boot", label: "Backend" },
  { value: "API",         label: "JWT-secured" },
];

export function PortfolioHero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax layers — different speeds for cinematic depth
  const bgY         = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const orbY        = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const dotY        = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY       = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const photoY      = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-screen overflow-hidden"
      style={{ background: "#080f1a" }}
    >
      {/* ── Layer 1: Background gradient blob (slowest) ── */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 100%, #156e6e 0%, #0d2535 35%, #080f1a 65%)",
          }}
        />
      </motion.div>

      {/* ── Layer 2: Ambient glow orbs (slow + pulsing) ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ y: orbY }}
      >
        {/* Orb top-right */}
        <motion.div
          className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(78,253,253,0.07) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Orb bottom-left */}
        <motion.div
          className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(21,110,110,0.09) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </motion.div>

      {/* ── Layer 3: Dot grid (medium parallax) ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          y: dotY,
        }}
      />


      {/* ── Layer 5: Main content (fades out on scroll) ── */}
      <motion.div
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-24 pb-16 md:grid-cols-2 md:px-12"
        style={{ opacity: heroOpacity }}
      >
        {/* Left — text column (own parallax speed) */}
        <motion.div className="flex flex-col" style={{ y: textY }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold"
            style={{ borderColor: "rgba(78,253,253,0.3)", color: "#4efdfd", background: "rgba(78,253,253,0.06)" }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#4efdfd]" />
            Available for freelance missions
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
            className="text-white"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
          >
            Dorian
            <br />
            <span className="text-gradient">Ondoua</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: EASE }}
            className="mt-3 text-base font-medium md:text-lg"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Full-Stack Developer — React, Next.js &amp; Spring Boot
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34, ease: EASE }}
            className="mt-4 max-w-md text-sm leading-relaxed md:text-base"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            I build modern, fast, and premium web applications.
            From React frontend to Spring Boot backend, with a UI that converts.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.44, ease: EASE }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Magnetic>
              <motion.a
                href="#projects"
                className="rounded-lg px-6 py-3 text-sm font-semibold text-[#080f1a]"
                style={{ background: "#4efdfd" }}
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(78,253,253,0.4)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                View my projects
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a
                href="#contact"
                className="rounded-lg border px-6 py-3 text-sm font-semibold text-white"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
                whileHover={{ borderColor: "#4efdfd", color: "#4efdfd", scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                Contact me
              </motion.a>
            </Magnetic>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.56 }}
            className="mt-6 flex items-center gap-4"
          >
            <motion.a
              href="https://github.com/DorianOndoua"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.4)" }}
              whileHover={{ color: "#4efdfd", scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dorian-ondoua-692b483a5"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.4)" }}
              whileHover={{ color: "#4efdfd", scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <LinkedinIcon />
            </motion.a>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              ondouadorian188@gmail.com
            </span>
          </motion.div>
        </motion.div>

        {/* Right — photo + stats (different parallax speed) */}
        <motion.div
          className="flex flex-col items-center gap-6"
          style={{ y: photoY }}
        >
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
            whileHover={{ scale: 1.02 }}
            style={{ transition: "scale 0.4s cubic-bezier(0.22,1,0.36,1)" }}
            className="relative"
          >
            {/* Glow ring */}
            <motion.div
              className="absolute -inset-1 rounded-2xl opacity-60"
              style={{
                background: "linear-gradient(135deg, #4efdfd, #156e6e, transparent)",
                filter: "blur(12px)",
              }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <PhotoFrame />
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5, ease: EASE }}
            className="grid w-full max-w-xs grid-cols-2 gap-3"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="rounded-xl px-4 py-3 text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(78,253,253,0.12)",
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.08, ease: EASE }}
                whileHover={{
                  background: "rgba(78,253,253,0.07)",
                  borderColor: "rgba(78,253,253,0.3)",
                  y: -3,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <div className="text-lg font-semibold" style={{ color: "#4efdfd" }}>
                  {s.value}
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1"
        style={{ color: "rgba(255,255,255,0.25)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}

function PhotoFrame() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-1 rounded-2xl opacity-50"
        style={{
          background: "linear-gradient(135deg, #4efdfd, #156e6e, transparent)",
          filter: "blur(12px)",
        }}
      />
      <div
        className="relative h-72 w-60 overflow-hidden rounded-2xl md:h-80 md:w-64"
        style={{ border: "1px solid rgba(78,253,253,0.2)" }}
      >
        <img
          src="/dorian.png"
          alt="Dorian Ondoua"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
