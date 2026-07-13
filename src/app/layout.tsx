import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/config/site";
import { hexToRgb } from "@/lib/theme";
import { LangProvider } from "@/lib/i18n";

// SEO: rendered statically (default language: Spanish, primary market).
export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description.es,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description.es,
    images: [site.hero.image],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Injects brand colors from config as CSS variables.
  const themeVars = `:root{--brand:${hexToRgb(site.theme.brand)};--brand-dark:${hexToRgb(
    site.theme.brandDark
  )};--accent:${hexToRgb(site.theme.accent)};}`;

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,500&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: themeVars }} />
      </head>
      <body className="font-sans antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
