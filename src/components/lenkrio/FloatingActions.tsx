import { motion } from "framer-motion";
import { User, FileCode } from "lucide-react";

export function FloatingActions() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-30 flex flex-col gap-2"
    >
      <a
        href="#access"
        className="flex items-center gap-2 rounded-full bg-[var(--brand-magenta)] px-3 py-2 text-xs font-medium text-white shadow-lg transition-transform hover:scale-[1.03]"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-black/30">
          <User className="h-3.5 w-3.5" />
        </span>
        Get All Access
      </a>
      <a
        href="#template"
        className="flex items-center gap-2 rounded-full bg-black px-3 py-2 text-xs font-medium text-white shadow-lg transition-transform hover:scale-[1.03]"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10">
          <FileCode className="h-3.5 w-3.5" />
        </span>
        Get Template
      </a>
    </motion.div>
  );
}
