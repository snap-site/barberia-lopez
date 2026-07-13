import { site } from "@/config/site";

/** WhatsApp link with a pre-filled message for booking. */
export function waLink(serviceName?: string) {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  const msg = serviceName
    ? `Hola, me gustaría reservar: ${serviceName}. ¿Qué disponibilidad tenéis?`
    : `Hola, me gustaría pedir cita. ¿Qué disponibilidad tenéis?`;
  return `${base}?text=${encodeURIComponent(msg)}`;
}

export const telLink = `tel:${site.contact.phoneRaw}`;
