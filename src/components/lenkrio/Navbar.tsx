import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Pages", href: "#pages", hasDropdown: true },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:py-8"
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-md">
          <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
            <path d="M6 16h8M18 16h8M16 6v8M16 18v8" stroke="url(#g)" strokeWidth="3.5" strokeLinecap="round" />
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="32" y2="32">
                <stop stopColor="#6ee7e7" />
                <stop offset="1" stopColor="#4fd1c5" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="text-xl font-semibold tracking-tight text-foreground">lenkrio</span>
      </a>

      {/* Desktop Nav */}
      <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
        <ul className="flex items-center gap-9 text-sm">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`flex items-center gap-1 transition-colors hover:text-[var(--brand-cyan)] ${
                  l.active ? "text-[var(--brand-cyan)]" : "text-foreground/85"
                }`}
              >
                {l.label}
                {l.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA */}
      <a
        href="#contact"
        className="rounded-full border border-[var(--brand-cyan-strong)]/70 px-5 py-2 text-sm text-[var(--brand-cyan)] transition-all hover:shadow-[var(--shadow-cyan-glow)]"
      >
        Contact Us
      </a>
    </motion.header>
  );
}
