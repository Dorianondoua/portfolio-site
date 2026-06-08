import { useState } from "react";
import { ArrowRight } from "lucide-react";

const pages1 = [
  { label: "Home",     href: "/",        active: true },
  { label: "About us", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Pricing",  href: "/pricing" },
  { label: "Blog",     href: "/blog" },
];

const pages2 = [
  { label: "Career",        href: "/career" },
  { label: "Career Single", href: "/career/single" },
  { label: "Blog Single",   href: "/blog/single" },
  { label: "Contact us",    href: "/contact" },
];

const utility = [
  { label: "License",   href: "/license" },
  { label: "Changelog", href: "/changelog" },
  { label: "404",       href: "/404" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ background: "#080f1a" }}>
      {/* Dashed top border */}
      <div
        className="w-full"
        style={{
          borderTop: "1px dashed rgba(78,253,253,0.4)",
        }}
      />

      <div className="mx-auto max-w-7xl px-8 py-14 md:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Col 1 — logo + newsletter */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5">
              <LenkrioIcon />
              <span className="text-xl font-semibold tracking-tight" style={{ color: "#4efdfd" }}>
                lenkrio
              </span>
            </a>

            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              The all-in-one platform for powerful, trackable links.
            </p>

            <div>
              <p className="mb-3 text-sm font-bold text-white">Subscribe to our newsletter</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center overflow-hidden rounded-lg"
                style={{ background: "#0d1b24", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none"
                  style={{ color: "white" }}
                />
                <button
                  type="submit"
                  className="flex h-full items-center px-3 transition-colors hover:text-[#4efdfd]"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Col 2 — Pages */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
              Pages
            </p>
            <ul className="flex flex-col gap-3">
              {pages1.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#4efdfd]"
                    style={{ color: link.active ? "#4efdfd" : "rgba(255,255,255,0.6)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Pages (2) */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
              Pages
            </p>
            <ul className="flex flex-col gap-3">
              {pages2.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#4efdfd]"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Utility */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
              Utility pages
            </p>
            <ul className="flex flex-col gap-3">
              {utility.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#4efdfd]"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-8 py-5 text-center text-xs"
        style={{ borderColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)" }}
      >
        Copyright ©2025. All rights reserved. Powered by webflow
      </div>
    </footer>
  );
}

function LenkrioIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
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
