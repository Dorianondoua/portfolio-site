import {
  createContext,
  useContext,
  useEffect,
  useState,
  Fragment,
  type ReactNode,
} from "react";
import { translations, type Dict } from "@/lib/translations";

export type Lang = "en" | "fr";

const STORAGE_KEY = "portfolio-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** The translation dictionary for the active language. */
  t: Dict;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start at "en" so the server-rendered HTML matches the first client
  // render (avoids hydration mismatch). The stored preference is applied in an
  // effect right after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((p) => (p === "en" ? "fr" : "en"));

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggle, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}

/* ──────────────────────────────────────────────
   Rich — renders **bold** segments as white strong
   tags, so translation strings can carry emphasis.
─────────────────────────────────────────────── */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} className="text-white">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

/* ──────────────────────────────────────────────
   LanguageToggle — compact EN | FR segmented switch
   that matches the cyan accent of the portfolio.
─────────────────────────────────────────────── */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={`inline-flex items-center rounded-full p-0.5 text-xs font-semibold ${className ?? ""}`}
      style={{
        border: "1px solid rgba(78,253,253,0.25)",
        background: "rgba(78,253,253,0.05)",
      }}
      role="group"
      aria-label="Language switcher"
    >
      {(["en", "fr"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className="rounded-full px-2.5 py-1 uppercase transition-colors duration-200"
            style={{
              background: active ? "#4efdfd" : "transparent",
              color: active ? "#080f1a" : "rgba(255,255,255,0.6)",
            }}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
