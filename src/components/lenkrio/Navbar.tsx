import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Pages", href: "#", hasDropdown: true },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "#0d1b24" : "transparent",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:py-5">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <LenkrioIcon />
          <span
            className="text-xl font-semibold tracking-tight transition-colors duration-300"
            style={{ color: scrolled ? "#ffffff" : "#4efdfd" }}
          >
            lenkrio
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center gap-1 transition-colors duration-200 hover:text-[#4efdfd]"
                  style={{ color: scrolled ? "rgba(255,255,255,0.85)" : "rgba(100,110,130,1)" }}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a
          href="/contact"
          className="rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:opacity-90"
          style={
            scrolled
              ? {
                  border: "1px solid rgba(78,253,253,0.4)",
                  color: "#4efdfd",
                  background: "transparent",
                }
              : {
                  background: "#111521",
                  color: "#4efdfd",
                  border: "1px solid transparent",
                }
          }
        >
          Contact Us
        </a>

      </div>
    </motion.header>
  );
}

function LenkrioIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M13 7 L13 13 L7 13 L7 19 L13 19 L13 25 L19 25 L19 19 L25 19 L25 13 L19 13 L19 7 Z"
        fill="none"
        stroke="#4efdfd"
        strokeWidth="0"
      />
      {/* Lenkrio "+" chain link icon */}
      <path
        d="M10 16 C10 13.2 12.2 11 15 11 L17 11 L17 13 L15 13 C13.3 13 12 14.3 12 16 C12 17.7 13.3 19 15 19 L17 19 L17 21 L15 21 C12.2 21 10 18.8 10 16Z"
        fill="#4efdfd"
      />
      <path
        d="M22 16 C22 18.8 19.8 21 17 21 L15 21 L15 19 L17 19 C18.7 19 20 17.7 20 16 C20 14.3 18.7 13 17 13 L15 13 L15 11 L17 11 C19.8 11 22 13.2 22 16Z"
        fill="#4efdfd"
      />
      <rect x="14" y="15" width="4" height="2" fill="#4efdfd" />
    </svg>
  );
}
