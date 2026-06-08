import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/portfolio/Projects";
import { PortfolioNavbar } from "@/components/portfolio/Navbar";
import { PortfolioFooter } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Dorian Ondoua" },
      { name: "description", content: "Discover Full-Stack projects by Dorian Ondoua — React, Next.js, Spring Boot." },
      { property: "og:title", content: "Projects — Dorian Ondoua" },
      { property: "og:description", content: "Discover Full-Stack projects by Dorian Ondoua — React, Next.js, Spring Boot." },
      { property: "og:image", content: "/mark.svg" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Projects — Dorian Ondoua" },
      { name: "twitter:description", content: "Discover Full-Stack projects by Dorian Ondoua — React, Next.js, Spring Boot." },
    ],
  }),
});

function ProjectsPage() {
  return (
    <main className="min-h-screen" style={{ background: "#080f1a" }}>
      <PortfolioNavbar />
      <div className="pt-24">
        <Projects />
      </div>
      <PortfolioFooter />
    </main>
  );
}
