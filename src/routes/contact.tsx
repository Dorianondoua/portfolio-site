import { createFileRoute } from "@tanstack/react-router";
import { canonical, OG_IMAGE, SITE_NAME } from "@/lib/site";
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
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:url", content: canonical("/contact") },
      { property: "og:title", content: "Contact — Dorian Ondoua" },
      { property: "og:description", content: "Let's work together. Get in touch with Dorian Ondoua — Full-Stack Developer." },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact — Dorian Ondoua" },
      { name: "twitter:description", content: "Let's work together. Get in touch with Dorian Ondoua — Full-Stack Developer." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: canonical("/contact") }],
  }),
});

function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: "#080f1a" }}>
      <PortfolioNavbar />
      <div className="pt-20">
        {/* Crawlers need one h1 per page; the section heading below is an h2. */}
        <h1 className="sr-only">Contact Dorian Ondoua — Full-Stack Developer</h1>
        <Contact />
      </div>
      <PortfolioFooter />
      <GrainOverlay />
    </main>
  );
}
