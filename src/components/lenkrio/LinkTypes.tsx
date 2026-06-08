import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, RefreshCw, QrCode, Shield, Link2, MessageCircle, Rocket, Target, Shuffle, Crop } from "lucide-react";

const shortLinkFeatures = [
  { icon: <Globe className="h-3 w-3" />, label: "Custom Domain" },
  { icon: <RefreshCw className="h-3 w-3" />, label: "Auto-generate" },
  { icon: <QrCode className="h-3 w-3" />, label: "Embed trackable QR" },
  { icon: <Shield className="h-3 w-3" />, label: "Enterprise-grade" },
  { icon: <Link2 className="h-3 w-3" />, label: "Optimized links" },
  { icon: <MessageCircle className="h-3 w-3" />, label: "community chats" },
];

const utmNodes = [
  { icon: <Rocket className="h-4 w-4" />, pos: "bottom-left" },
  { icon: <Shuffle className="h-4 w-4" />, pos: "top-right" },
  { icon: <Crop className="h-4 w-4" />, pos: "right" },
  { icon: <Target className="h-4 w-4" />, pos: "bottom-right" },
  { icon: <Globe className="h-4 w-4" />, pos: "top-left" },
  { icon: <RefreshCw className="h-4 w-4" />, pos: "left" },
];

export function LinkTypes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full"
      style={{ background: "#080f1a" }}
      id="link-types"
    >
      <div className="mx-auto max-w-7xl px-8 py-20 md:px-12">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold"
          style={{ borderColor: "rgba(78,253,253,0.35)", color: "#4efdfd", background: "rgba(78,253,253,0.06)" }}
        >
          Link Types
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-12 max-w-2xl font-semibold leading-tight text-white"
          style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
        >
          Build the Right Kind of Link for Every Use Case.
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Card 1 — Short Link */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col overflow-hidden rounded-2xl"
            style={{ background: "#0d1b24", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Illustration area */}
            <div className="relative flex h-56 items-center justify-center p-6">
              {/* Feature pills grid */}
              <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
                {shortLinkFeatures.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-[11px]"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
                  >
                    <span style={{ color: "#4efdfd" }}>{f.icon}</span>
                    {f.label}
                  </div>
                ))}
              </div>
              {/* Central icon */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(135deg, #156e6e, #4efdfd)",
                  boxShadow: "0 0 30px rgba(78,253,253,0.4)",
                }}
              >
                <Link2 className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* Text */}
            <div className="p-6 pt-2">
              <h3 className="mb-2 text-base font-bold text-white">Short Link</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Transform long, unwieldy URLs into concise, elegant short links. Perfect for improving your digital presence. Generate unique, track-able URLs.
              </p>
            </div>
          </motion.div>

          {/* Card 2 — Campaign/UTM Link */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col overflow-hidden rounded-2xl"
            style={{ background: "#0d1b24", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Hub diagram illustration */}
            <div className="relative flex h-56 items-center justify-center">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 220" aria-hidden>
                {/* Connection lines from center to nodes */}
                {[
                  [200, 110, 80,  55],
                  [200, 110, 320, 55],
                  [200, 110, 340, 110],
                  [200, 110, 320, 165],
                  [200, 110, 80,  165],
                  [200, 110, 60,  110],
                ].map(([x1, y1, x2, y2], i) => (
                  <line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="rgba(78,253,253,0.2)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                ))}
              </svg>

              {/* Central node */}
              <div
                className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(135deg, #1a8080, #4efdfd)",
                  boxShadow: "0 0 50px rgba(78,253,253,0.5), 0 0 100px rgba(78,253,253,0.2)",
                }}
              >
                <RefreshCw className="h-7 w-7 text-white" />
              </div>

              {/* Satellite nodes */}
              {[
                { icon: <Rocket className="h-4 w-4" />,   style: { top: "18%",  left: "16%" } },
                { icon: <Shuffle className="h-4 w-4" />,  style: { top: "18%",  right: "16%" } },
                { icon: <Crop className="h-4 w-4" />,     style: { top: "50%",  right: "10%", transform: "translateY(-50%)" } },
                { icon: <Target className="h-4 w-4" />,   style: { bottom: "18%", right: "16%" } },
                { icon: <Globe className="h-4 w-4" />,    style: { bottom: "18%", left: "16%" } },
                { icon: <Shield className="h-4 w-4" />,   style: { top: "50%",  left: "10%", transform: "translateY(-50%)" } },
              ].map((node, i) => (
                <div
                  key={i}
                  className="absolute flex h-10 w-10 items-center justify-center rounded-full"
                  style={{
                    ...node.style,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(78,253,253,0.2)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {node.icon}
                </div>
              ))}
            </div>

            {/* Text */}
            <div className="p-6 pt-2">
              <h3 className="mb-2 text-base font-bold text-white">Campaign/UTM Link</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Unlock deeper marketing intelligence with Campaign/UTM Links. Generate unique, trackable URLs that provide granular analytics for every campaign.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
