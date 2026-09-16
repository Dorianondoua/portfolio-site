import { createFileRoute } from "@tanstack/react-router";
import { canonical, OG_IMAGE, SITE_NAME } from "@/lib/site";
import { PortfolioHero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stack } from "@/components/portfolio/Stack";
import { Workflow } from "@/components/portfolio/Workflow";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { PortfolioFooter } from "@/components/portfolio/Footer";
import { PortfolioNavbar } from "@/components/portfolio/Navbar";
import { GrainOverlay } from "@/components/portfolio/premium";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dorian Ondoua — Full-Stack Developer (React, Next.js & Spring Boot)" },
      { name: "description", content: "Full-Stack Developer specialized in React, Next.js & Spring Boot. I build modern, fast, and premium web applications — from UI to secured APIs." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:url", content: canonical("/") },
      { property: "og:title", content: "Dorian Ondoua — Full-Stack Developer" },
      { property: "og:description", content: "Full-Stack Developer specialized in React, Next.js & Spring Boot. I build modern, fast, and premium web applications." },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dorian Ondoua — Full-Stack Developer" },
      { name: "twitter:description", content: "Full-Stack Developer specialized in React, Next.js & Spring Boot. I build modern, fast, and premium web applications." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: canonical("/") }],
  }),
});

function Index() {
  return (
    <main className="min-h-screen" style={{ background: "#080f1a" }}>
      <PortfolioNavbar />
      <PortfolioHero />
      <About />
      <Stack />
      <Workflow />
      <Projects />
      <Services />
      <Contact />
      <PortfolioFooter />
      <GrainOverlay />
    </main>
  );
}
