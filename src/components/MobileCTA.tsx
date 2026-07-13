"use client";
import { useLang } from "@/lib/i18n";
import { waLink, telLink } from "@/lib/booking";

export default function MobileCTA() {
  const { lang } = useLang();
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-3 border-t border-black/10 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      <a href={telLink} className="btn-brand flex-1 !py-2.5">📞 {lang === "es" ? "Llamar" : "Call"}</a>
      <a href={waLink()} className="btn flex-1 !py-2.5 bg-[#25D366] text-white">💬 WhatsApp</a>
    </div>
  );
}
