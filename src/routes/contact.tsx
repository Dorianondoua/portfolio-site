import { createFileRoute } from "@tanstack/react-router";
import { ContactHero } from "@/components/lenkrio/ContactHero";
import { ContactForm } from "@/components/lenkrio/ContactForm";
import { Footer } from "@/components/lenkrio/Footer";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Lenkrio" },
      { name: "description", content: "Get in touch with the Lenkrio team." },
    ],
  }),
});

function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: "#080f1a" }}>
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
