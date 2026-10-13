import { useEffect } from "react"
import Lenis from "lenis"

// Shared instance so overlays (e.g. the case-study modal) can pause page scrolling.
let instance: Lenis | null = null

export function getLenis() {
  return instance
}

export function useLenis() {
  useEffect(() => {
    // Respect the OS "reduce motion" setting: keep native scrolling.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      autoRaf: true,
    })
    instance = lenis

    // Glide to same-page #section links instead of jumping. Lenis reads the
    // sections' scroll-margin-top, so the fixed navbar is cleared.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return
      const link = (e.target as Element | null)?.closest?.("a[href*='#']") as HTMLAnchorElement | null
      if (!link || link.target === "_blank") return
      const url = new URL(link.href)
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)))
      if (!target) return

      e.preventDefault()
      history.pushState(null, "", url.hash)
      // A link inside an overlay closes it first; wait until Lenis is running again.
      let tries = 0
      const go = () => {
        if (lenis.isStopped && tries++ < 10) return requestAnimationFrame(go)
        lenis.scrollTo(target, { duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 4) })
      }
      go()
    }
    document.addEventListener("click", onClick)

    return () => {
      document.removeEventListener("click", onClick)
      lenis.destroy()
      instance = null
    }
  }, [])
}
