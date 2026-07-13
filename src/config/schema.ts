import { z } from "zod";

/* ============================================================================
   Esquema de validación del config del cliente (site.config.json).
   Si la IA genera un JSON incompleto o mal formado, la validación falla ANTES
   de construir/desplegar, con un mensaje claro de qué campo está mal.
   ============================================================================ */

// Texto bilingüe: ambas versiones obligatorias y no vacías.
const bi = z.object({
  es: z.string().min(1, "falta el texto en español"),
  en: z.string().min(1, "falta el texto en inglés"),
});

// Color hexadecimal: #RGB o #RRGGBB.
const hex = z
  .string()
  .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "debe ser un color hex, p.ej. #8A6D5B");

// URL http(s), o cadena vacía cuando el campo es opcional de mostrar.
const url = z.string().url("debe ser una URL válida (https://...)");
const urlOrEmpty = z.union([url, z.literal("")]);

const service = z.object({
  name: bi,
  desc: bi.optional(),
  price: z.string(),                 // "25 €", "desde 40 €" o "" (no mostrar)
  duration: z.string().optional(),
});

const serviceCategory = z.object({
  name: bi,
  items: z.array(service).min(1, "cada categoría necesita al menos un servicio"),
});

export const siteConfigSchema = z.object({
  theme: z.object({ brand: hex, brandDark: hex, accent: hex }),

  business: z.object({ name: z.string().min(1), tagline: bi }),

  contact: z.object({
    phone: z.string().min(1),
    phoneRaw: z.string().regex(/^\+?[0-9]+$/, "solo dígitos y opcional + al inicio"),
    whatsapp: z.string().regex(/^[0-9]+$/, "solo dígitos, sin + ni espacios"),
    email: z.string().email("email no válido"),
    address: z.string().min(1),
    mapEmbed: urlOrEmpty,
  }),

  hero: z.object({ title: bi, subtitle: bi, image: url }),

  about: z.object({
    heading: bi,
    paragraphs: z.array(bi).min(1),
    image: url,
  }),

  services: z.object({
    heading: bi,
    intro: bi,
    categories: z.array(serviceCategory).min(1),
  }),

  gallery: z.object({ heading: bi, images: z.array(url) }),

  testimonials: z.object({
    heading: bi,
    items: z.array(
      z.object({ text: bi, name: z.string().min(1), meta: z.string() })
    ),
  }),

  hours: z.object({
    heading: bi,
    rows: z.array(z.object({ day: bi, time: z.string().min(1) })).min(1),
  }),

  seo: z.object({ title: z.string().min(1), description: bi }),
});

// Tipos derivados del esquema (una sola fuente de verdad).
export type Bi = z.infer<typeof bi>;
export type Service = z.infer<typeof service>;
export type ServiceCategory = z.infer<typeof serviceCategory>;
export type SiteConfig = z.infer<typeof siteConfigSchema>;
