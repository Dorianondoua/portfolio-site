import { motion } from "framer-motion";
import { Globe, Image as ImageIcon, IdCard, Download, FileImage } from "lucide-react";

type Chip = { label: string; icon: React.ReactNode };

const leftChips: Chip[] = [
  { label: "WEBSITE", icon: <Globe className="h-3.5 w-3.5" /> },
  { label: "IMAGE", icon: <ImageIcon className="h-3.5 w-3.5" /> },
  { label: "VCARD", icon: <IdCard className="h-3.5 w-3.5" /> },
];

const rightChips: Chip[] = [
  { label: "JPG", icon: <FileImage className="h-3.5 w-3.5" /> },
  { label: "PNG", icon: <FileImage className="h-3.5 w-3.5" /> },
  { label: "SVG", icon: <FileImage className="h-3.5 w-3.5" /> },
];

function Chip({ chip, delay }: { chip: Chip; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="inline-flex items-center gap-2 rounded-md border border-[var(--chip-border)] bg-[var(--chip-bg)]/90 px-3 py-2 text-[11px] font-semibold tracking-wider text-foreground/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"
    >
      <span className="text-[var(--brand-cyan)]">{chip.icon}</span>
      {chip.label}
    </motion.div>
  );
}

export function FlowDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-5xl px-2">
      <div className="grid grid-cols-3 items-center gap-4 md:gap-6">
        {/* LEFT column */}
        <div className="flex flex-col items-end gap-3 md:gap-4">
          <div className="md:mr-12">
            <Chip chip={leftChips[0]} delay={0.1} />
          </div>
          <Chip chip={leftChips[1]} delay={0.2} />
          <div className="md:mr-12">
            <Chip chip={leftChips[2]} delay={0.3} />
          </div>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="relative grid h-20 w-20 place-items-center rounded-xl border border-[var(--chip-border)] bg-[var(--chip-bg)]"
            style={{ boxShadow: "0 0 60px rgba(110,231,231,0.35)" }}
          >
            <svg viewBox="0 0 32 32" className="h-10 w-10" fill="none">
              <path d="M6 16h8M18 16h8M16 6v8M16 18v8" stroke="#6ee7e7" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </motion.div>
          <span className="mt-3 text-[11px] font-semibold tracking-[0.18em] text-foreground/85">LINK GENERATE</span>
        </div>

        {/* RIGHT column */}
        <div className="flex flex-col items-start gap-3 md:gap-4">
          <div className="md:ml-12">
            <Chip chip={rightChips[0]} delay={0.55} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-md border border-[var(--chip-border)] bg-[var(--chip-bg)]/90 px-3 py-2 text-[11px] font-semibold tracking-wider text-foreground/90"
          >
            <Download className="h-3.5 w-3.5 text-[var(--brand-cyan)]" />
            DOWNLOAD
          </motion.div>
          <div className="md:ml-12">
            <Chip chip={rightChips[1]} delay={0.65} />
          </div>
          <div className="md:ml-12 -mt-1">
            <Chip chip={rightChips[2]} delay={0.75} />
          </div>
        </div>
      </div>

      {/* Connector lines + lightning */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1000 320"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#2d6a7a" stopOpacity="0.7" />
            <stop offset="1" stopColor="#6ee7e7" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="bolt" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#6ee7e7" stopOpacity="0" />
            <stop offset="0.5" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="1" stopColor="#6ee7e7" stopOpacity="0" />
          </linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="3" /></filter>
        </defs>

        {/* left connectors into hub */}
        <path d="M260 80 H420 L500 160" stroke="url(#line)" strokeWidth="1" fill="none" />
        <path d="M260 160 H500" stroke="url(#line)" strokeWidth="1" fill="none" />
        <path d="M260 240 H420 L500 160" stroke="url(#line)" strokeWidth="1" fill="none" />

        {/* right connectors out */}
        <path d="M500 160 L580 80 H740" stroke="url(#line)" strokeWidth="1" fill="none" />
        <path d="M500 160 H740" stroke="url(#line)" strokeWidth="1" fill="none" />
        <path d="M500 160 L580 240 H740" stroke="url(#line)" strokeWidth="1" fill="none" />

        {/* central horizontal bolt */}
        <motion.path
          d="M260 160 Q330 140 380 165 T500 158"
          stroke="url(#bolt)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0.6] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />
        <motion.path
          d="M500 160 Q570 180 620 158 T740 162"
          stroke="url(#bolt)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0.6] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 0.4 }}
        />

        {/* arrow heads */}
        <polygon points="495,156 505,160 495,164" fill="#6ee7e7" />
        <polygon points="735,78 745,80 735,82" fill="#6ee7e7" opacity="0.8" />
        <polygon points="735,158 745,160 735,162" fill="#6ee7e7" opacity="0.8" />
        <polygon points="735,238 745,240 735,242" fill="#6ee7e7" opacity="0.8" />
      </svg>
    </div>
  );
}
