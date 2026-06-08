import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Generate Your Link",
    desc: "Quickly create and customize unique links tailored to your needs. Our intuitive generator allows you to produce shareable URLs in just moments, ready for immediate use.",
  },
  {
    num: "02",
    title: "Customize & Brand It",
    desc: "Make every link uniquely yours. Customize your URLs with branded elements, giving your content a professional and consistent look that builds trust and recognition.",
  },
  {
    num: "03",
    title: "Share Anywhere",
    desc: "Once generated and customized, your links are ready for the world. Share them effortlessly across any digital platform, from social media to email campaigns, websites, and beyond.",
  },
  {
    num: "04",
    title: "Track & Optimize",
    desc: "Gain real-time insights into your link performance. Track clicks, conversions, and audience engagement to understand what's working and continually optimize.",
  },
];

const sideNav = ["How It Works", "Use Cases", "Link Types", "Integrations"];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full"
      style={{ background: "#080f1a" }}
      id="how-it-works"
    >
      <div className="mx-auto flex max-w-7xl gap-0">

        {/* Left sidebar nav */}
        <div className="hidden w-48 shrink-0 flex-col gap-6 border-r py-20 pl-8 pr-6 md:flex"
          style={{ borderColor: "rgba(78,253,253,0.1)" }}
        >
          {sideNav.map((label, i) => (
            <div key={label} className="flex items-center gap-3">
              <div
                className="h-2.5 w-2.5 rounded-full shrink-0"
                style={{ background: i === 0 ? "#4efdfd" : "rgba(78,253,253,0.3)" }}
              />
              <span
                className="text-sm"
                style={{ color: i === 0 ? "#4efdfd" : "rgba(255,255,255,0.4)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 px-8 py-20 md:px-12">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold"
            style={{
              borderColor: "rgba(78,253,253,0.35)",
              color: "#4efdfd",
              background: "rgba(78,253,253,0.06)",
            }}
          >
            How It Works
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-12 max-w-2xl font-semibold leading-tight text-white"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            Create, customize, and track your links in just a few clicks.
          </motion.h2>

          {/* Steps grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="flex flex-col gap-3"
              >
                {/* Number badge */}
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white"
                  style={{
                    background: "linear-gradient(69deg, #156e6e 0%, #4efdfd 80%)",
                  }}
                >
                  {step.num}
                </div>

                <h3 className="text-base font-semibold text-white">{step.title}</h3>

                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
