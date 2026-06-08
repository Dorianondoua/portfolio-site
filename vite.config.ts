// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deployed to Vercel as a static SPA (no server runtime needed — the portfolio is
// fully client-rendered with EmailJS for the contact form).
//   - cloudflare: false  → drop the Cloudflare Worker build target
//   - spa.enabled: true  → prerender the shell to dist/client/index.html + client-side routing
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: { enabled: true },
  },
});
