"use client";
import { site } from "@/config/site";
import { useLang } from "@/lib/i18n";

export default function Gallery() {
  const { t } = useLang();
  if (!site.gallery.images.length) return null;
  return (
    <section id="galeria" className="bg-soft py-20">
      <div className="container-x">
        <h2 className="text-center font-serif text-3xl font-bold sm:text-4xl">{t(site.gallery.heading)}</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {site.gallery.images.map((src, i) => (
            <img key={i} src={src} alt="" className="aspect-square w-full rounded-2xl object-cover transition hover:opacity-90" />
          ))}
        </div>
      </div>
    </section>
  );
}
