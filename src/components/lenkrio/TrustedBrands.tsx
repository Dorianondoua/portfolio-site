export function TrustedBrands() {
  return (
    <section className="w-full" style={{ background: "#080f1a" }}>

      {/* Top cyan pill */}
      <div className="flex justify-center pt-2">
        <div className="h-1 w-10 rounded-full" style={{ background: "#4efdfd" }} />
      </div>

      {/* Title row */}
      <div className="flex items-center justify-center gap-4 px-8 py-5">
        <div className="h-px flex-1 max-w-xs" style={{ background: "rgba(78,253,253,0.25)" }} />
        <span
          className="text-[11px] font-semibold tracking-[0.25em] whitespace-nowrap"
          style={{ color: "#4efdfd" }}
        >
          OUR TRUSTED BRANDS
        </span>
        <div className="h-px flex-1 max-w-xs" style={{ background: "rgba(78,253,253,0.25)" }} />
      </div>

      {/* Magenta pill */}
      <div className="flex justify-center">
        <div className="h-1 w-10 rounded-full" style={{ background: "#d946a8" }} />
      </div>

      {/* Logos row */}
      <div
        className="mt-4 flex items-center justify-between px-8 py-5"
        style={{ borderTop: "1px solid rgba(78,253,253,0.12)", borderBottom: "1px solid rgba(78,253,253,0.12)" }}
      >
        {/* Logo 1 */}
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1.5" />
            <path d="M7 10h6M10 7v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-sm font-semibold text-white">ipsum</span>
        </div>

        <div className="h-6 w-px" style={{ background: "rgba(255,255,255,0.15)" }} />

        {/* Logo 2 — infinity */}
        <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
          <path
            d="M14 10 C14 6.7 11.3 4 8 4 C4.7 4 2 6.7 2 10 C2 13.3 4.7 16 8 16 C11 16 13 14 14 12 C15 14 17 16 20 16 C23.3 16 26 13.3 26 10 C26 6.7 23.3 4 20 4 C17 4 15 6 14 8"
            stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"
          />
        </svg>

        <div className="h-6 w-px" style={{ background: "rgba(255,255,255,0.15)" }} />

        {/* Logo 3 */}
        <div className="flex items-baseline gap-0.5">
          <span className="text-sm font-black tracking-widest text-white">IPSUM</span>
          <span className="text-[8px] text-white/60">™</span>
        </div>

        <div className="h-6 w-px" style={{ background: "rgba(255,255,255,0.15)" }} />

        {/* Logo 4 */}
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="2" width="16" height="16" rx="2" stroke="white" strokeWidth="1.5" />
            <rect x="5" y="5" width="4" height="10" fill="white" />
            <rect x="11" y="5" width="4" height="10" fill="white" />
          </svg>
          <span className="text-sm font-black tracking-widest text-white">OGO</span>
        </div>

        <div className="h-6 w-px" style={{ background: "rgba(255,255,255,0.15)" }} />

        {/* Logo 5 */}
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1" y="1" width="16" height="16" rx="3" stroke="white" strokeWidth="1.5" />
            <path d="M5 9h8M9 5v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-sm font-semibold text-white">logoipsum</span>
        </div>
      </div>

      {/* Bottom cyan pill */}
      <div className="flex justify-center py-2">
        <div className="h-1 w-10 rounded-full" style={{ background: "#4efdfd" }} />
      </div>

    </section>
  );
}
