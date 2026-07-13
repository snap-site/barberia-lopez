"use client";
import { site } from "@/config/site";
import { useLang } from "@/lib/i18n";
import { waLink } from "@/lib/booking";

export default function Services() {
  const { t, lang } = useLang();
  return (
    <section id="servicios" className="bg-soft py-20">
      <div className="container-x">
        <h2 className="text-center font-serif text-3xl font-bold sm:text-4xl">{t(site.services.heading)}</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ink/60">{t(site.services.intro)}</p>

        <div className="mt-12 space-y-12">
          {site.services.categories.map((cat, i) => (
            <div key={i}>
              <h3 className="mb-5 font-serif text-2xl font-semibold text-brand">{t(cat.name)}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {cat.items.map((s, j) => (
                  <div key={j} className="flex items-start justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{t(s.name)}</span>
                        {s.duration && <span className="text-xs text-ink/50">· {s.duration}</span>}
                      </div>
                      {s.desc && <p className="mt-1 text-sm text-ink/60">{t(s.desc)}</p>}
                    </div>
                    <div className="flex flex-col items-end gap-2 whitespace-nowrap">
                      {s.price && <span className="font-serif text-lg font-bold text-brand">{s.price}</span>}
                      <a href={waLink(t(s.name))} className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white hover:brightness-110">
                        {lang === "es" ? "Reservar" : "Book"}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
