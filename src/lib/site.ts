/**
 * Canonical site metadata — single source of truth for SEO tags.
 * Update SITE_URL here if a custom domain replaces the vercel.app one.
 */
export const SITE_URL = "https://portfolio-site-psi-liart.vercel.app";

export const SITE_NAME = "Dorian Ondoua";

/** Absolute URL — social crawlers reject relative og:image paths. */
export const OG_IMAGE = `${SITE_URL}/og.png`;

export const SOCIAL_PROFILES = [
  "https://github.com/DorianOndoua",
  "https://www.linkedin.com/in/dorian-ondoua-692b483a5",
];

/** Builds the absolute canonical URL for a route path ("/", "/projects", ...). */
export function canonical(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}
