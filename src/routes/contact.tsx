import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/portfolio/Contact";
import { PortfolioNavbar } from "@/components/portfolio/Navbar";
import { PortfolioFooter } from "@/components/portfolio/Footer";
import { GrainOverlay } from "@/components/portfolio/premium";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Dorian Ondoua" },
      { name: "description", content: "Let's work together. Get in touch with Dorian Ondoua — Full-Stack Developer (React, Next.js & Spring Boot)." },
      { property: "og:title", content: "Contact — Dorian Ondoua" },
      { property: "og:description", content: "Let's work together. Get in touch with Dorian Ondoua — Full-Stack Developer." },
      { property: "og:image", content: "/mark.svg" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Contact — Dorian Ondoua" },
      { name: "twitter:description", content: "Let's work together. Get in touch with Dorian Ondoua — Full-Stack Developer." },
    ],
  }),
});

function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: "#080f1a" }}>
      <PortfolioNavbar />
      <div className="pt-20">
        <Contact />
      </div>
      <PortfolioFooter />
      <GrainOverlay />
    </main>
  );
}
