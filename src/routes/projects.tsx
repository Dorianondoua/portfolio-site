import { createFileRoute } from "@tanstack/react-router";
import { canonical, OG_IMAGE, SITE_NAME } from "@/lib/site";
import { Projects } from "@/components/portfolio/Projects";
import { PortfolioNavbar } from "@/components/portfolio/Navbar";
import { PortfolioFooter } from "@/components/portfolio/Footer";
import { GrainOverlay } from "@/components/portfolio/premium";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Dorian Ondoua" },
      { name: "description", content: "Discover Full-Stack projects by Dorian Ondoua — React, Next.js, Spring Boot." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:url", content: canonical("/projects") },
      { property: "og:title", content: "Projects — Dorian Ondoua" },
      { property: "og:description", content: "Discover Full-Stack projects by Dorian Ondoua — React, Next.js, Spring Boot." },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Projects — Dorian Ondoua" },
      { name: "twitter:description", content: "Discover Full-Stack projects by Dorian Ondoua — React, Next.js, Spring Boot." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: canonical("/projects") }],
  }),
});

function ProjectsPage() {
  return (
    <main className="min-h-screen" style={{ background: "#080f1a" }}>
      <PortfolioNavbar />
      <div className="pt-24">
        {/* Crawlers need one h1 per page; the section heading below is an h2. */}
        <h1 className="sr-only">Projects by Dorian Ondoua — Full-Stack Developer</h1>
        <Projects />
      </div>
      <PortfolioFooter />
      <GrainOverlay />
    </main>
  );
}
