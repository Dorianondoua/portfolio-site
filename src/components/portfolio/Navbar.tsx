import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import Logo from "@/components/branding/Logo";
import { useLang, LanguageToggle } from "@/lib/i18n";

interface NavLinkDef { label: string; href: string }

function NavLink({ link, className, onClick, isHome }: {
  link: NavLinkDef;
  className: string;
  onClick?: () => void;
  isHome: boolean;
}) {
  const href = isHome ? link.href : `/${link.href}`;
  return (
    <a href={href} className={className} onClick={onClick}>
      {link.label}
    </a>
  );
}

export function PortfolioNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const { t } = useLang();

  const navLinks: NavLinkDef[] = [
    { label: t.nav.links.about,    href: "#about" },
    { label: t.nav.links.stack,    href: "#stack" },
    { label: t.nav.links.workflow, href: "#workflow" },
    { label: t.nav.links.projects, href: "#projects" },
    { label: t.nav.links.services, href: "#services" },
    { label: t.nav.links.contact,  href: "#contact" },
  ];

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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,15,26,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(78,253,253,0.08)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">

        {/* Logo */}
        <Link to="/">
          <Logo size={18} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              link={link}
              isHome={isHome}
              className="text-sm transition-colors duration-200 hover:text-[#4efdfd]"
            />
          ))}
        </nav>

        {/* Right side — language toggle + CTA (desktop) / burger (mobile) */}
        <div className="flex items-center gap-3">
          <LanguageToggle />

          {/* CTA */}
          <a
            href="#contact"
            className="hidden rounded-lg border px-5 py-2 text-sm font-semibold transition-all duration-200 hover:bg-[#4efdfd] hover:text-[#080f1a] md:inline-flex"
            style={{ borderColor: "rgba(78,253,253,0.5)", color: "#4efdfd" }}
          >
            {t.nav.cta}
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden"
            style={{ color: "#4efdfd" }}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4 px-6 pb-6 md:hidden"
          style={{ background: "rgba(8,15,26,0.98)" }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              link={link}
              isHome={isHome}
              className="text-sm font-medium text-white hover:text-[#4efdfd]"
              onClick={() => setMenuOpen(false)}
            />
          ))}
          <a
            href="#contact"
            className="mt-2 rounded-lg border px-5 py-2 text-center text-sm font-semibold"
            style={{ borderColor: "rgba(78,253,253,0.5)", color: "#4efdfd" }}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.cta}
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
