import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const publicDirectory = resolve(scriptDirectory, "../dist/public");
const sourceIndex = resolve(publicDirectory, "index.html");

const routes = [
  "services",
  "research",
  "databank",
  "contact",
  "en",
  "en/services",
  "en/research",
  "en/databank",
  "en/contact",
];

await Promise.all(
  routes.map(async (route) => {
    const targetDirectory = resolve(publicDirectory, route);
    await mkdir(targetDirectory, { recursive: true });
    await copyFile(sourceIndex, resolve(targetDirectory, "index.html"));
  }),
);

console.log(`Created static route entries for ${routes.length} routes.`);
