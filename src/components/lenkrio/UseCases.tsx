import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Settings, Layers, FlaskConical, Info } from "lucide-react";

const cases = [
  {
    num: "01",
    title: "Marketers",
    desc: "Invite teammates, assign roles, and manage permissions perfect for agencies and teams.",
  },
  {
    num: "02",
    title: "Creators & Influencers",
    desc: "Get notified when a link hits a milestone, drops in performance, or gets high-volume traffic.",
  },
  {
    num: "03",
    title: "Brands & eCommerce",
    desc: "Make every link uniquely yours. Customize your URLs with branded elements, giving your content a professional look.",
  },
];

const assistantItems = [
  {
    icon: <Settings className="h-4 w-4" />,
    title: "Configure Prompt",
    desc: "Define assistant's name, role, character, company, and goals.",
  },
  {
    icon: <Layers className="h-4 w-4" />,
    title: "SCRIPT / STAGES",
    desc: "Script stages to guide your agent during conversation.",
  },
  {
    icon: <Settings className="h-4 w-4" />,
    title: "Settings",
    desc: "Adjust assistant voice and LLM model parameters.",
  },
];

const tabs = ["Dataset", "Configure", "Lead Sources", "Tools", "Test"];

export function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full"
      style={{ background: "#080f1a" }}
      id="use-cases"
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
            Use Cases
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-10 font-semibold leading-tight text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Unlock the Full Potential of Every Click
          </motion.h2>

          {/* Cases list */}
          <div className="flex flex-col gap-8">
            {cases.map((c, i) => (
              <motion.div
                key={c.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="flex gap-4"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
                  style={{ background: "linear-gradient(69deg, #156e6e 0%, #4efdfd 80%)" }}
                >
                  {c.num}
                </div>
                <div>
                  <h3 className="mb-1.5 text-base font-semibold text-white">{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — Link Assistant mockup */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div
            className="w-full max-w-md rounded-2xl p-0.5"
            style={{
              background: "linear-gradient(135deg, rgba(78,253,253,0.3) 0%, rgba(78,253,253,0.05) 60%, transparent 100%)",
              boxShadow: "0 0 60px rgba(78,253,253,0.15), 0 0 120px rgba(78,253,253,0.05)",
            }}
          >
            <div className="rounded-2xl p-5" style={{ background: "#0d1b24" }}>

              {/* Card header */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ background: "linear-gradient(135deg, #156e6e, #4efdfd)" }}
                  >
                    <svg viewBox="0 0 20 20" className="h-5 w-5 text-white" fill="currentColor">
                      <circle cx="10" cy="7" r="3" />
                      <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Link Assistant</div>
                    <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                      Context-aware Link Assist.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="rounded px-1.5 py-0.5 text-[10px] font-bold tracking-wider"
                    style={{ background: "rgba(78,253,253,0.15)", color: "#4efdfd" }}
                  >
                    OUTBOUND
                  </span>
                  <button
                    className="flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px]"
                    style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}
                  >
                    <Info className="h-3 w-3" /> Info
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div
                className="mb-5 flex gap-4 border-b pb-3 text-[12px]"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className="flex items-center gap-1.5 pb-1 transition-colors"
                    style={{
                      color: tab === "Configure" ? "#4efdfd" : "rgba(255,255,255,0.45)",
                      borderBottom: tab === "Configure" ? "1px solid #4efdfd" : "none",
                    }}
                  >
                    {tab === "Dataset" && <Database className="h-3 w-3" />}
                    {tab === "Configure" && <Settings className="h-3 w-3" />}
                    {tab === "Lead Sources" && <Layers className="h-3 w-3" />}
                    {tab === "Tools" && <Settings className="h-3 w-3" />}
                    {tab === "Test" && <FlaskConical className="h-3 w-3" />}
                    {tab}
                  </button>
                ))}
              </div>

              {/* Description */}
              <p className="mb-4 text-xs font-medium text-white">
                Define your Assistant's prompt and conversation settings
              </p>

              {/* Items */}
              <div className="flex flex-col gap-3">
                {assistantItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl p-3"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "rgba(78,253,253,0.15)", color: "#4efdfd" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{item.title}</div>
                      <div className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
