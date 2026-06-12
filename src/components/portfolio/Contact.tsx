import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Calendar, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLang } from "@/lib/i18n";

const EMAILJS_SERVICE_ID  = "service_lzzra49";
const EMAILJS_TEMPLATE_ID = "template_yya8mjh";
const EMAILJS_PUBLIC_KEY  = "C_fw0wXazuY3xYFyc";

const EASE = [0.22, 1, 0.36, 1] as const;

type Status = "idle" | "loading" | "success" | "error";

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const socials = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ondouadorian188@gmail.com",
      href: undefined as string | undefined,
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      value: t.contact.whatsappValue,
      href: "https://wa.me/+237698973350",
    },
    {
      icon: <LinkedinIcon />,
      label: "LinkedIn",
      value: "Dorian Ondoua",
      href: "https://www.linkedin.com/in/dorian-ondoua-692b483a5",
    },
    {
      icon: <GithubIcon />,
      label: "GitHub",
      value: "DorianOndoua",
      href: "https://github.com/DorianOndoua",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, subject: form.subject, message: form.message },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", JSON.stringify(err));
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
  };

  return (
    <section id="contact" className="w-full" style={{ background: "#080f1a" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">

        {/* Header */}
        <div className="mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-3 text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#4efdfd" }}
          >
            {t.contact.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-white"
          >
            {t.contact.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto mt-3 max-w-md text-sm"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {t.contact.intro}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.5fr]">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6"
          >
            {/* Book a call CTA */}
            <motion.a
              href="https://calendly.com/ondouadorian188/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl p-4"
              style={{
                background: "rgba(78,253,253,0.06)",
                border: "1px solid rgba(78,253,253,0.2)",
              }}
              whileHover={{
                borderColor: "rgba(78,253,253,0.45)",
                background: "rgba(78,253,253,0.09)",
                y: -3,
                transition: { type: "spring", stiffness: 300, damping: 22 },
              }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ background: "rgba(78,253,253,0.15)", color: "#4efdfd" }}
              >
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{t.contact.bookTitle}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {t.contact.bookDesc}
                </div>
              </div>
            </motion.a>

            {/* Availability */}
            <div
              className="rounded-xl p-4"
              style={{ background: "#0d1b24", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="mb-1 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#4efdfd]" />
                <span className="text-sm font-semibold text-white">{t.contact.availableTitle}</span>
              </div>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                {t.contact.availableDesc}
              </p>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              {socials.map((s, i) => {
                const sharedStyle = {
                  background: "#0d1b24",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.6)",
                };
                const inner = (
                  <>
                    <span style={{ color: "#4efdfd" }}>{s.icon}</span>
                    <div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
                      <div className="text-sm font-medium text-white">{s.value}</div>
                    </div>
                  </>
                );
                return s.href ? (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                    style={sharedStyle}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.08, ease: EASE }}
                    viewport={{ once: true, margin: "-80px" }}
                    whileHover={{
                      borderColor: "rgba(78,253,253,0.3)",
                      color: "#4efdfd",
                      x: 3,
                      transition: { type: "spring", stiffness: 350, damping: 22 },
                    }}
                  >
                    {inner}
                  </motion.a>
                ) : (
                  <motion.div
                    key={s.label}
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                    style={sharedStyle}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.08, ease: EASE }}
                    viewport={{ once: true, margin: "-80px" }}
                  >
                    {inner}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl p-6 md:p-8"
            style={{ background: "#0d1b24", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white">{t.contact.form.nameLabel}</label>
                <input
                  name="name" value={form.name} onChange={handleChange}
                  placeholder={t.contact.form.namePlaceholder} required disabled={status === "loading"}
                  className="w-full rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#4efdfd]/50 transition-colors disabled:opacity-50"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white">{t.contact.form.emailLabel}</label>
                <input
                  name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder={t.contact.form.emailPlaceholder} required disabled={status === "loading"}
                  className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors disabled:opacity-50"
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-white">{t.contact.form.subjectLabel}</label>
              <input
                name="subject" value={form.subject} onChange={handleChange}
                placeholder={t.contact.form.subjectPlaceholder} required disabled={status === "loading"}
                className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-colors disabled:opacity-50"
                style={inputStyle}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-white">{t.contact.form.messageLabel}</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder={t.contact.form.messagePlaceholder}
                rows={5} required disabled={status === "loading"}
                className="w-full resize-none rounded-lg px-4 py-2.5 text-sm outline-none transition-colors disabled:opacity-50"
                style={inputStyle}
              />
            </div>

            {status === "success" && (
              <div className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium"
                style={{ background: "rgba(78,253,253,0.08)", border: "1px solid rgba(78,253,253,0.25)", color: "#4efdfd" }}>
                <CheckCircle className="h-4 w-4 shrink-0" />
                {t.contact.form.success}
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium"
                style={{ background: "rgba(255,80,80,0.08)", border: "1px solid rgba(255,80,80,0.25)", color: "#ff6b6b" }}>
                <AlertCircle className="h-4 w-4 shrink-0" />
                {t.contact.form.error}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-[#080f1a] disabled:cursor-not-allowed disabled:opacity-60"
              style={{ background: "#4efdfd" }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 28px rgba(78,253,253,0.35)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {status === "loading" ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> {t.contact.form.sending}</>
              ) : (
                <><Send className="h-4 w-4" /> {t.contact.form.send}</>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
