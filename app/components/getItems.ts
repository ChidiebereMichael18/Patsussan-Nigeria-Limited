import fs from "node:fs";
import path from "node:path";
import { items as base, type Item } from "./products";

const cats = [
  ["soles", "Soles", "Shoe soles"],
  ["lasts", "Lasts", "Shoe lasts"],
  ["laces", "Laces", "Shoe laces"],
] as const;

export function getItems(): Item[] {
  const real: Item[] = [];
  const hasReal = new Set<string>();
  for (const [folder, category, title] of cats) {
    const dir = path.join(process.cwd(), "public", "products", folder);
    let files: string[] = [];
    try {
      files = fs.readdirSync(dir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
    } catch {}
    if (files.length) hasReal.add(category);
    files.forEach((f, i) =>
      real.push({ src: `/products/${folder}/${encodeURIComponent(f)}`, category, title: `${title} ${i + 1}` })
    );
  }
  // keep AI samples only for categories with no real photos yet
  const kept = base.filter((b) => !(b.sample && hasReal.has(b.category)));
  const idx = kept.findIndex((k) => k.category === "Warehouse");
  return [...kept.slice(0, idx), ...real, ...kept.slice(idx)];
}

export function getCover(category: string, fallback: string): string {
  return getItems().find((i) => i.category === category && i.src.startsWith("/products/"))?.src ?? fallback;
}