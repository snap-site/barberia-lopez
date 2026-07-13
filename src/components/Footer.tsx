"use client";
import { site } from "@/config/site";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer className="bg-ink py-8 pb-24 text-center text-sm text-white/60 md:pb-8">
      <p className="font-serif text-lg text-white">{site.business.name}</p>
      <p className="mt-2">© {new Date().getFullYear()} {site.business.name} · {lang === "es" ? "Todos los derechos reservados" : "All rights reserved"}</p>
      <p className="mt-1">{site.contact.address}</p>
    </footer>
  );
}
