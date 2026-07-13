"use client";
import { site } from "@/config/site";
import { useLang } from "@/lib/i18n";
import { waLink } from "@/lib/booking";

export default function About() {
  const { t, lang } = useLang();
  return (
    <section id="nosotros" className="py-20">
      <div className="container-x grid items-center gap-12 md:grid-cols-2">
        <img src={site.about.image} alt={site.business.name} className="h-80 w-full rounded-3xl object-cover shadow-lg md:h-[420px]" />
        <div>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">{t(site.about.heading)}</h2>
          <div className="mt-5 space-y-4 text-ink/70">
            {site.about.paragraphs.map((p, i) => <p key={i}>{t(p)}</p>)}
          </div>
          <a href={waLink()} className="btn-brand mt-7">{lang === "es" ? "Pide tu cita" : "Book your appointment"}</a>
        </div>
      </div>
    </section>
  );
}
