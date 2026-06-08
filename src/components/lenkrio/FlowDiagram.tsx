import { motion } from "framer-motion";
import {
  Globe,
  Image as ImageIcon,
  CreditCard,
  Download,
  FileImage,
} from "lucide-react";

interface Chip {
  label: string;
  icon: React.ReactNode;
}

const leftChips: Chip[] = [
  { label: "WEBSITE", icon: <Globe className="h-3.5 w-3.5" /> },
  { label: "IMAGE",   icon: <ImageIcon className="h-3.5 w-3.5" /> },
  { label: "VCARD",   icon: <CreditCard className="h-3.5 w-3.5" /> },
];

const rightChips: Chip[] = [
  { label: "JPG",  icon: <FileImage className="h-3.5 w-3.5" /> },
  { label: "PNG",  icon: <FileImage className="h-3.5 w-3.5" /> },
  { label: "SVG",  icon: <FileImage className="h-3.5 w-3.5" /> },
];

function Chip({ chip, delay }: { chip: Chip; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-[11px] font-semibold tracking-widest text-white/90"
      style={{
        background: "#0e1a2b",
        border: "1px solid #1c2b44",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)",
      }}
    >
      <span className="text-[#4efdfd]">{chip.icon}</span>
      {chip.label}
    </motion.div>
  );
}

export function FlowDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-4xl px-4">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">

        {/* LEFT column */}
        <div className="flex flex-col items-end gap-3">
          <div className="self-end pr-8">
            <Chip chip={leftChips[0]} delay={0.1} />
          </div>
          <Chip chip={leftChips[1]} delay={0.2} />
          <div className="self-end pr-8">
            <Chip chip={leftChips[2]} delay={0.3} />
          </div>
        </div>

        {/* CENTER hub */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="relative grid h-20 w-20 place-items-center rounded-xl"
            style={{
              background: "#0e1a2b",
              border: "1px solid #1c2b44",
              boxShadow: "0 0 60px rgba(78,253,253,0.3), 0 0 20px rgba(78,253,253,0.15)",
            }}
          >
            {/* Lenkrio + icon */}
            <svg viewBox="0 0 32 32" className="h-10 w-10" fill="none">
              <rect x="14" y="6"  width="4" height="20" rx="2" fill="white" />
              <rect x="6"  y="14" width="20" height="4"  rx="2" fill="white" />
            </svg>
          </motion.div>
          <span className="text-[10px] font-semibold tracking-[0.2em] text-white/70">
            LINK GENERATE
          </span>
        </div>

        {/* RIGHT column */}
        <div className="flex flex-col items-start gap-3">
          <div className="self-start pl-8">
            <Chip chip={rightChips[0]} delay={0.5} />
          </div>
          {/* DOWNLOAD chip — wider */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-[11px] font-semibold tracking-widest text-white/90"
            style={{ background: "#0e1a2b", border: "1px solid #1c2b44" }}
          >
            <Download className="h-3.5 w-3.5 text-[#4efdfd]" />
            DOWNLOAD
          </motion.div>
          <div className="self-start pl-8">
            <Chip chip={rightChips[1]} delay={0.6} />
          </div>
          <div className="self-start pl-8">
            <Chip chip={rightChips[2]} delay={0.65} />
          </div>
        </div>
      </div>

      {/* SVG connector lines + lightning */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="lineL" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#4efdfd" stopOpacity="0.1" />
            <stop offset="1" stopColor="#4efdfd" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="lineR" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#4efdfd" stopOpacity="0.6" />
            <stop offset="1" stopColor="#4efdfd" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="bolt" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0"   stopColor="#4efdfd" stopOpacity="0" />
            <stop offset="0.4" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="0.6" stopColor="#4efdfd" stopOpacity="1" />
            <stop offset="1"   stopColor="#4efdfd" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Left connectors */}
        <path d="M230 55  H370 L400 100" stroke="url(#lineL)" strokeWidth="1" fill="none" opacity="0.7" />
        <path d="M195 100 H400"           stroke="url(#lineL)" strokeWidth="1" fill="none" opacity="0.7" />
        <path d="M230 145 H370 L400 100" stroke="url(#lineL)" strokeWidth="1" fill="none" opacity="0.7" />

        {/* Right connectors */}
        <path d="M400 100 L430 55  H570" stroke="url(#lineR)" strokeWidth="1" fill="none" opacity="0.7" />
        <path d="M400 100 H605"           stroke="url(#lineR)" strokeWidth="1" fill="none" opacity="0.7" />
        <path d="M400 100 L430 145 H570" stroke="url(#lineR)" strokeWidth="1" fill="none" opacity="0.7" />

        {/* Lightning bolt left → center */}
        <motion.path
          d="M200 100 Q270 85 330 102 T400 98"
          stroke="url(#bolt)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        />

        {/* Lightning bolt center → right */}
        <motion.path
          d="M400 100 Q470 115 530 98 T600 102"
          stroke="url(#bolt)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Arrow tip at center */}
        <polygon points="396,96 404,100 396,104" fill="#4efdfd" opacity="0.9" />
      </svg>
    </div>
  );
}
