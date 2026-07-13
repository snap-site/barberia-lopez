/* ============================================================================
   Carga y VALIDA el config del cliente (site.config.json) en build time.
   Si el JSON está mal o le falta algún campo, el build falla con un mensaje
   claro — así una config generada por IA nunca llega rota a producción.

   Para editar el contenido de un cliente: cambia site.config.json (NO este archivo).
   ============================================================================ */
import rawConfig from "./site.config.json";
import { siteConfigSchema, type SiteConfig } from "./schema";

function loadConfig(): SiteConfig {
  const result = siteConfigSchema.safeParse(rawConfig);
  if (!result.success) {
    const issues = result.error.issues
      .map((i) => `  • ${i.path.join(".") || "(raíz)"}: ${i.message}`)
      .join("\n");
    throw new Error(`\n❌ site.config.json no es válido:\n${issues}\n`);
  }
  return result.data;
}

export const site: SiteConfig = loadConfig();

// Re-exporta los tipos para que los componentes sigan importándolos desde aquí.
export type { Bi, Service, ServiceCategory, SiteConfig } from "./schema";
