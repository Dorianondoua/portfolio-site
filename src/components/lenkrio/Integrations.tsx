import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Compass, Bug, Navigation, Snowflake, Upload, Image, Send } from "lucide-react";

const items = [
  {
    num: "01",
    title: "Marketing & Analytics",
    desc: "Get AI-driven slug suggestions, tag recommendations, and campaign name ideas to optimize performance.",
  },
  {
    num: "02",
    title: "Automation & Productivity",
    desc: "Keep your data clean with anti-bot filtering, fraud detection, and smart redirect validation.",
  },
  {
    num: "03",
    title: "Social & Creator Tools",
    desc: "Quickly create and customize unique links tailored to your needs. Our intuitive generator allows you to produce shareable URLs in just moments.",
  },
];

const appIcons = [
  { icon: <Zap className="h-5 w-5" />,        color: "#4efdfd" },
  { icon: <Snowflake className="h-5 w-5" />,  color: "#ffffff" },
  { icon: <Compass className="h-5 w-5" />,    color: "#4efdfd" },
  { icon: <Bug className="h-5 w-5" />,        color: "#ef4444" },
  { icon: <Navigation className="h-5 w-5" />, color: "#4efdfd" },
];

export function Integrations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full"
      style={{ background: "#080f1a" }}
      id="integrations"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-20 md:grid-cols-2 md:gap-16 md:px-12">

        {/* Left — text */}
        <div className="flex flex-col">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex w-fit items-center rounded-full border px-4 py-1.5 text-xs font-semibold"
            style={{ borderColor: "rgba(78,253,253,0.35)", color: "#4efdfd", background: "rgba(78,253,253,0.06)" }}
          >
            Integrations
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-10 font-semibold leading-tight text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Connect with the Tools You Already Use
          </motion.h2>

          {/* Items */}
          <div className="flex flex-col gap-8">
            {items.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="flex gap-4"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
                  style={{ background: "linear-gradient(69deg, #156e6e 0%, #4efdfd 80%)" }}
                >
                  {item.num}
                </div>
                <div>
                  <h3 className="mb-1.5 text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — Chat AI mockup */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div
            className="w-full max-w-md rounded-2xl overflow-hidden"
            style={{
              background: "#0d1b24",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 60px rgba(78,253,253,0.08)",
            }}
          >
            {/* Chat header */}
            <div className="px-6 pt-6 pb-4">
              <div className="mb-1 text-base">👋 <span className="text-white font-medium">Hi, Asil Design</span></div>
              <div className="text-sm font-semibold text-white">Can I help you with anything?</div>
            </div>

            {/* App icons arc */}
            <div className="relative flex h-44 items-center justify-center">
              {/* Glow radial bg */}
              <div
                className="absolute bottom-0 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full opacity-20"
                style={{ background: "radial-gradient(ellipse at 50% 100%, #4efdfd, transparent)" }}
              />
              {/* Icons arranged in arc */}
              {appIcons.map((app, i) => {
                const total = appIcons.length;
                const angle = -40 + (i / (total - 1)) * 80;
                const rad = (angle * Math.PI) / 180;
                const r = 90;
                const x = 50 + Math.sin(rad) * (r / 2.2);
                const y = 75 - Math.cos(rad) * (r / 3);
                return (
                  <div
                    key={i}
                    className="absolute flex h-12 w-12 items-center justify-center rounded-full"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      background: "rgba(255,255,255,0.06)",
                      border: `1.5px solid rgba(78,253,253,0.4)`,
                      color: app.color,
                      boxShadow: "0 0 16px rgba(78,253,253,0.15)",
                    }}
                  >
                    {app.icon}
                  </div>
                );
              })}
            </div>

            {/* Action buttons */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                { icon: <Upload className="h-3.5 w-3.5" />, label: "Upload file" },
                { icon: <Image className="h-3.5 w-3.5" />,  label: "AI Art" },
                { icon: <Upload className="h-3.5 w-3.5" />, label: "Upload file" },
              ].map((btn) => (
                <button
                  key={btn.label + Math.random()}
                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px]"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  <span style={{ color: "#4efdfd" }}>{btn.icon}</span>
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Chat input */}
            <div className="px-4 pb-3">
              <div
                className="flex items-center justify-between rounded-xl px-4 py-3"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>Ask me anything...</span>
                <Send className="h-4 w-4" style={{ color: "#4efdfd" }} />
              </div>
              <div className="mt-2 flex items-center justify-between px-1">
                <div className="flex items-center gap-2 text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                  <span>GPT4o</span>
                  <span>·</span>
                  <span>Web ↓</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
