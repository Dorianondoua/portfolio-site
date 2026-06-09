import { createFileRoute } from "@tanstack/react-router";
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
      { title: "Dorian Ondoua — Full-Stack Developer" },
      { name: "description", content: "Full-Stack Developer specialized in React, Next.js & Spring Boot. I build modern, fast, and premium web applications." },
      { property: "og:title", content: "Dorian Ondoua — Full-Stack Developer" },
      { property: "og:description", content: "Full-Stack Developer specialized in React, Next.js & Spring Boot. I build modern, fast, and premium web applications." },
      { property: "og:image", content: "/mark.svg" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Dorian Ondoua — Full-Stack Developer" },
      { name: "twitter:description", content: "Full-Stack Developer specialized in React, Next.js & Spring Boot. I build modern, fast, and premium web applications." },
    ],
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
