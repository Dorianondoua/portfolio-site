import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/lenkrio/Hero";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lenkrio — We Generate Links Easy" },
      {
        name: "description",
        content:
          "Create, share & track links like a pro. No coding needed — build powerful, high-performing links with Lenkrio.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
    </main>
  );
}
