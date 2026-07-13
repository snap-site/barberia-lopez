"use client";
import { useLang } from "@/lib/i18n";

export default function LangToggle() {
  const { lang, setLang } = useLang();
  const base = "px-2.5 py-1 text-xs font-bold transition";
  return (
    <div className="flex overflow-hidden rounded-full border border-black/10">
      <button onClick={() => setLang("es")} className={`${base} ${lang === "es" ? "bg-brand text-white" : "text-ink/60"}`}>ES</button>
      <button onClick={() => setLang("en")} className={`${base} ${lang === "en" ? "bg-brand text-white" : "text-ink/60"}`}>EN</button>
    </div>
  );
}
