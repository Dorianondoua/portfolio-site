import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Logo from "@/components/branding/Logo";
import { useLang } from "@/lib/i18n";

const socials = [
  { icon: <Github className="h-4 w-4" />,        href: "https://github.com/DorianOndoua" },
  { icon: <Linkedin className="h-4 w-4" />,       href: "https://www.linkedin.com/in/dorian-ondoua-692b483a5" },
  { icon: <Mail className="h-4 w-4" />,           href: "mailto:ondouadorian188@gmail.com" },
  { icon: <MessageCircle className="h-4 w-4" />,  href: "https://wa.me/+237698973350" },
];

export function PortfolioFooter() {
  const { t } = useLang();
  const links = [
    { label: t.nav.links.about,    href: "#about" },
    { label: t.nav.links.stack,    href: "#stack" },
    { label: t.nav.links.projects, href: "#projects" },
    { label: t.nav.links.services, href: "#services" },
    { label: t.nav.links.contact,  href: "#contact" },
  ];

  return (
    <footer style={{ background: "#080f1a" }}>
      {/* Dashed top border */}
      <div style={{ borderTop: "1px dashed rgba(78,253,253,0.2)" }} />

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">

          {/* Logo */}
          <a href="#">
            <Logo size={18} />
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm transition-colors hover:text-[#4efdfd]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-all hover:border-[#4efdfd]/40 hover:text-[#4efdfd]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-8 flex flex-col items-center justify-between gap-2 border-t pt-6 text-center text-xs md:flex-row"
          style={{ borderColor: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)" }}
        >
          <span>© {new Date().getFullYear()} Dorian Ondoua. {t.footer.rights}</span>
          <span>{t.footer.builtWith}</span>
        </div>
      </div>
    </footer>
  );
}
