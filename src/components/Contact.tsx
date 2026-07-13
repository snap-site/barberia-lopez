"use client";
import { site } from "@/config/site";
import { useLang } from "@/lib/i18n";
import { waLink, telLink } from "@/lib/booking";

export default function Contact() {
  const { t, lang } = useLang();
  return (
    <section id="contacto" className="bg-brand-dark py-20 text-white">
      <div className="container-x grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">{lang === "es" ? "Reserva tu cita" : "Book your appointment"}</h2>
          <p className="mt-3 text-white/80">
            {lang === "es"
              ? "Escríbenos por WhatsApp o llámanos. Te confirmamos la hora en el momento."
              : "Message us on WhatsApp or call. We confirm your time right away."}
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href={waLink()} className="btn-accent">💬 WhatsApp</a>
            <a href={telLink} className="btn-outline">📞 {site.contact.phone}</a>
          </div>

          <dl className="mt-10 space-y-4 text-sm">
            <div className="flex gap-3"><dt className="w-24 text-white/60">Email</dt><dd><a href={`mailto:${site.contact.email}`} className="underline">{site.contact.email}</a></dd></div>
            <div className="flex gap-3"><dt className="w-24 text-white/60">{lang === "es" ? "Dirección" : "Address"}</dt><dd>{site.contact.address}</dd></div>
          </dl>

          <h3 className="mt-10 font-serif text-xl font-semibold">{t(site.hours.heading)}</h3>
          <table className="mt-3 text-sm">
            <tbody>
              {site.hours.rows.map((r, i) => (
                <tr key={i}><td className="py-1 pr-8 text-white/70">{t(r.day)}</td><td className="py-1 font-medium">{r.time}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {site.contact.mapEmbed && (
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/15">
            <iframe src={site.contact.mapEmbed} className="h-full min-h-[340px] w-full" loading="lazy" title="Mapa" />
          </div>
        )}
      </div>
    </section>
  );
}
