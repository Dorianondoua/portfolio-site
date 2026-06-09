import {
  forwardRef,
  useRef,
  type ReactNode,
  type CSSProperties,
  type MouseEvent,
} from "react";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";

/* ──────────────────────────────────────────────
   Magnetic — element drifts toward the cursor.
   Wrap a button / link to give it a premium pull.
─────────────────────────────────────────────── */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.3 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   SpotlightCard — a motion.div that reveals a soft
   radial glow following the cursor. Drop-in
   replacement for the existing card motion.divs:
   forwards all motion props + a ref (for useInView).
─────────────────────────────────────────────── */
type SpotlightCardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Color of the cursor glow. */
  spotlightColor?: string;
  /** Radius of the glow in px. */
  spotlightSize?: number;
};

export const SpotlightCard = forwardRef<HTMLDivElement, SpotlightCardProps>(
  function SpotlightCard(
    {
      children,
      className,
      style,
      spotlightColor = "rgba(78,253,253,0.10)",
      spotlightSize = 340,
      onMouseMove,
      onMouseLeave,
      ...rest
    },
    forwardedRef,
  ) {
    const internalRef = useRef<HTMLDivElement>(null);

    const resolve = (node: HTMLDivElement | null) => {
      internalRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    };

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
      const el = internalRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
        el.style.setProperty("--spot-o", "1");
      }
      onMouseMove?.(e);
    };

    const handleLeave = (e: MouseEvent<HTMLDivElement>) => {
      internalRef.current?.style.setProperty("--spot-o", "0");
      onMouseLeave?.(e);
    };

    return (
      <motion.div
        ref={resolve}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={className}
        style={{ position: "relative", overflow: "hidden", ...style }}
        {...rest}
      >
        <span
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: "var(--spot-o, 0)" as unknown as number,
            transition: "opacity 0.35s ease",
            background: `radial-gradient(${spotlightSize}px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${spotlightColor}, transparent 70%)`,
          }}
        />
        {children}
      </motion.div>
    );
  },
);

/* ──────────────────────────────────────────────
   GrainOverlay — fixed, ultra-subtle film grain
   over the whole page. Adds analog texture/depth.
─────────────────────────────────────────────── */
export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="grain-overlay pointer-events-none fixed inset-0 z-[35]"
      style={{ opacity: 0.04, mixBlendMode: "overlay" }}
    />
  );
}
