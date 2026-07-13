"use client";
import { site } from "@/config/site";
import { useLang } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLang();
  return (
    <section className="py-20">
      <div className="container-x">
        <h2 className="text-center font-serif text-3xl font-bold sm:text-4xl">{t(site.testimonials.heading)}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {site.testimonials.items.map((r, i) => (
            <figure key={i} className="rounded-2xl bg-soft p-6 ring-1 ring-black/5">
              <div className="text-accent">★★★★★</div>
              <blockquote className="mt-3 italic text-ink/80">“{t(r.text)}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {r.name} <span className="font-normal text-ink/50">· {r.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
