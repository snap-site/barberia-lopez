# Plantilla web — Peluquería / Spa / Servicios

Sitio estático (SSG) en **Next.js 14 + TypeScript + Tailwind**, pensado como
plantilla reutilizable para negocios de servicios con cita previa (peluquerías,
centros de masaje, estética…). Bilingüe **ES/EN** con botón de idioma, reservas
por **WhatsApp** y **llamada**, y optimizado para SEO.

## Lo importante: para cada cliente nuevo, edita 1 solo archivo

Todo el contenido del sitio sale de **`src/config/site.config.json`**: nombre del
negocio, colores de marca, servicios y precios, horario, dirección,
teléfono/WhatsApp, fotos, opiniones y textos SEO. No hace falta tocar los
componentes ni ningún archivo `.ts`.

Es **JSON puro** a propósito: así lo puede generar la IA (o rellenarlo a mano) sin
riesgo de romper el build con un paréntesis mal puesto.

Los tres colores de marca están arriba del JSON:

```json
"theme": {
  "brand": "#8A6D5B",
  "brandDark": "#5F4A3C",
  "accent": "#C9A25A"
}
```

Los campos con forma `{ "es": "...", "en": "..." }` necesitan las dos versiones
(español e inglés).

### Validación (importante para automatizar)

El JSON se valida con un esquema **Zod** (`src/config/schema.ts`):

```bash
npm run validate   # comprueba site.config.json y sale con error si algo falta
```

- `npm run validate` revisa la config **sin construir el sitio** — ideal para el
  pipeline: se ejecuta ANTES de crear el repo o desplegar, y si el JSON está
  incompleto o mal formado avisa exactamente qué campo falla (color no hex, falta
  la versión en inglés, email inválido, etc.).
- Además, `npm run build` vuelve a validar automáticamente: un JSON roto nunca
  llega a producción, falla en el build con un mensaje claro.

## Cómo trabajar con ella

```bash
npm install        # instalar dependencias (una vez)
npm run dev        # previsualizar en http://localhost:3000
npm run build      # generar el sitio estático en la carpeta /out
```

`npm run build` produce una carpeta **`out/`** con HTML/CSS/JS estático. Esa
carpeta es lo que se sube al hosting.

## Previsualizar el sitio ya construido

La carpeta `out/` usa rutas absolutas, así que **no** se abre bien con doble clic
(file://). Para verla, sírvela con un servidor estático:

```bash
npx serve out      # o:  python3 -m http.server -d out 8080
```

## Publicar (hosting)

Al ser estático se puede subir gratis a **Vercel, Netlify o Cloudflare Pages**
(conecta el repositorio y listo), o subir la carpeta `out/` a cualquier hosting
por FTP. Coste de hosting: 0 € en los planes gratuitos.

## Detalles pensados para el modelo de negocio

- **Reservas por WhatsApp**: cada botón "Reservar" abre WhatsApp con un mensaje
  ya escrito e incluye el servicio elegido. No hace falta backend ni base de datos.
- **SEO**: el HTML se genera en estático con el texto en español (mercado
  principal) ya presente en la página — `title`, meta description, Open Graph,
  encabezados y precios. El botón EN cambia el idioma en el navegador.
- **Móvil**: barra fija inferior con Llamar / WhatsApp, que es donde se producen
  la mayoría de las reservas.

## Notas para la versión real de cada cliente

1. Sustituye las **fotos** de Unsplash (en `site.config.json`) por fotos reales del negocio.
2. Cambia el **mapa**: en `contact.mapEmbed` pon la URL de Google Maps del local
   (Compartir → Insertar un mapa → copia el `src` del iframe). Déjalo en `""` para
   ocultar el mapa.
3. Revisa **teléfono, WhatsApp y email**. Formatos:
   - `phone`: como se muestra, p.ej. `"600 123 456"`
   - `phoneRaw`: para el enlace de llamada, p.ej. `"+34600123456"`
   - `whatsapp`: para wa.me, sin `+` ni espacios, p.ej. `"34600123456"`

## Estructura

```
src/
  config/
    site.config.json ← ÚNICO archivo a editar por cliente (JSON, lo genera la IA)
    schema.ts        ← esquema Zod que valida el JSON
    site.ts          ← carga y valida el JSON en build time (no tocar)
  app/
    layout.tsx       ← metadatos SEO + inyección de colores + fuentes
    page.tsx         ← orden de las secciones
    globals.css      ← estilos base y utilidades
  components/        ← Header, Hero, Services, About, Gallery,
                       Testimonials, Contact, Footer, MobileCTA, LangToggle
  lib/
    i18n.tsx         ← cambio de idioma ES/EN
    booking.ts       ← enlaces de WhatsApp (con mensaje) y llamada
    theme.ts         ← convierte los colores hex a variables CSS
scripts/
  validate-config.ts ← `npm run validate` (usar en el pipeline antes de desplegar)
```

## Fuentes

Se cargan Playfair Display + Inter desde Google Fonts con un `<link>` en
`layout.tsx`. Si prefieres autoalojarlas (sin depender de Google), se puede
cambiar por `next/font/local` más adelante.
