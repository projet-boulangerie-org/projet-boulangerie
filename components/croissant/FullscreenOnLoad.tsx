"use client";
import { useEffect } from "react";

export default function FullscreenOnLoad() {
  useEffect(() => {
    const setVh = () => {
      if (typeof window === "undefined") return;
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    const onLoad = () => {
      setVh();
      try {
        const docEl = document.documentElement as HTMLElement & {
          requestFullscreen?: () => Promise<void>;
        };
        if (!document.fullscreenElement && typeof docEl.requestFullscreen === "function") {
          docEl
            .requestFullscreen!()
            .catch(() => {
              /* Navigateur exige un geste utilisateur: ignorer silencieusement */
            });
        }
      } catch {
        /* ignore */
      }
    };

    if (document.readyState === "complete") {
      // Appelé après le chargement si déjà complet
      setTimeout(onLoad, 0);
    } else {
      window.addEventListener("load", onLoad);
    }
    window.addEventListener("resize", setVh);
    setVh();
    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", setVh);
    };
  }, []);

  return null;
}
