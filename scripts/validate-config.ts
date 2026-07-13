/* Valida site.config.json SIN construir el sitio.
   Úsalo en el pipeline ANTES de crear el repo / desplegar:
     npm run validate
   Sale con código 1 si la config no es válida. */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { siteConfigSchema } from "../src/config/schema";

const here = dirname(fileURLToPath(import.meta.url));
const file = resolve(here, "../src/config/site.config.json");

let raw: unknown;
try {
  raw = JSON.parse(readFileSync(file, "utf8"));
} catch (e) {
  console.error("❌ site.config.json no es JSON válido:", (e as Error).message);
  process.exit(1);
}

const result = siteConfigSchema.safeParse(raw);
if (!result.success) {
  console.error("❌ site.config.json inválido:");
  for (const i of result.error.issues) {
    console.error(`  • ${i.path.join(".") || "(raíz)"}: ${i.message}`);
  }
  process.exit(1);
}
console.log("✅ site.config.json válido");
