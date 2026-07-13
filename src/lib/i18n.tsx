"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Bi } from "@/config/site";

type Lang = "es" | "en";
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (b: Bi) => string };

const LangContext = createContext<Ctx>({ lang: "es", setLang: () => {}, t: (b) => b.es });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  // On client load: respect browser language (Spanish by default).
  useEffect(() => {
    const nav = typeof navigator !== "undefined" ? navigator.language : "es";
    if (nav && nav.startsWith("en")) setLang("en");
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const t = (b: Bi) => (b ? b[lang] : "");
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
