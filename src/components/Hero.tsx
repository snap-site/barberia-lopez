"use client";
import { site } from "@/config/site";
import { useLang } from "@/lib/i18n";
import { waLink, telLink } from "@/lib/booking";

export default function Hero() {
  const { t, lang } = useLang();
  return (
    <section className="relative isolate overflow-hidden">
      <img src={site.hero.image} alt={site.business.name} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
      <div className="container-x relative flex min-h-[78vh] flex-col justify-center py-24 text-white">
        <p className="mb-3 font-serif text-lg italic text-white/85">{t(site.business.tagline)}</p>
        <h1 className="max-w-2xl font-serif text-4xl font-bold leading-tight sm:text-6xl">{t(site.hero.title)}</h1>
        <p className="mt-5 max-w-xl text-lg text-white/90">{t(site.hero.subtitle)}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={waLink()} className="btn-accent text-base">
            💬 {lang === "es" ? "Reservar por WhatsApp" : "Book on WhatsApp"}
          </a>
          <a href={telLink} className="btn-outline text-base">
            📞 {lang === "es" ? "Llamar" : "Call"}
          </a>
        </div>
      </div>
    </section>
  );
}
