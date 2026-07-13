"use client";
import { useState } from "react";
import { site } from "@/config/site";
import { useLang } from "@/lib/i18n";
import { telLink } from "@/lib/booking";
import LangToggle from "./LangToggle";

const links = [
  { href: "#servicios", es: "Servicios", en: "Services" },
  { href: "#nosotros", es: "Nosotros", en: "About" },
  { href: "#galeria", es: "Galería", en: "Gallery" },
  { href: "#contacto", es: "Contacto", en: "Contact" },
];

export default function Header() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#" className="font-serif text-xl font-bold text-brand">{site.business.name}</a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-ink/70 hover:text-brand">{l[lang]}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle />
          <a href={telLink} className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white sm:inline-block">
            {site.contact.phone}
          </a>
          <button className="text-2xl text-brand md:hidden" onClick={() => setOpen(!open)} aria-label="Menú">☰</button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-3 border-t border-black/5 px-5 py-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-ink/70">{l[lang]}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
