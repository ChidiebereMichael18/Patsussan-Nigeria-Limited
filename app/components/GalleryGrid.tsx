"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { items, categories } from "./products";
import { business } from "./business";

export default function GalleryGrid() {
  const param = useSearchParams().get("cat");
  const initial = categories.find((c) => c.toLowerCase() === param?.toLowerCase()) ?? "All";
  const [cat, setCat] = useState(initial);
  const [open, setOpen] = useState<number | null>(null);
  const shown = items.filter((p) => cat === "All" || p.category === cat);
  const current = open !== null ? shown[open] : null;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={`rounded-full px-5 py-2 text-sm font-medium border transition ${cat === c ? "bg-coffee text-white border-coffee" : "border-coffee/30 text-coffee hover:bg-cream"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {shown.map((p, i) => (
          <button key={p.src} onClick={() => setOpen(i)}
            className="group relative block w-full overflow-hidden rounded-2xl border border-coffee/10 text-left shadow-sm hover:shadow-lg transition">
            <img src={p.src} alt={p.title} loading="lazy" className="w-full transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-coffee-dark/90 to-transparent p-4 text-white">
              <span className="text-xs uppercase tracking-widest text-white/70">{p.category}</span>
              <p className="font-serif text-lg">{p.title}</p>
            </div>
          </button>
        ))}
      </div>
      {current && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4" onClick={() => setOpen(null)}>
          <button aria-label="Close" className="absolute right-5 top-4 text-3xl text-white">X</button>
          <button aria-label="Previous" className="absolute left-3 text-4xl text-white px-3"
            onClick={(e) => { e.stopPropagation(); setOpen((open! - 1 + shown.length) % shown.length); }}>&lsaquo;</button>
          <div className="max-h-full max-w-4xl text-center" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.title} className="max-h-[80vh] rounded-lg" />
            <p className="mt-3 font-serif text-xl text-white">{current.title}</p>
            {current.sample && <p className="text-xs text-white/60">Sample image. Visit our warehouse to see the real stock.</p>}
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Hello Patsussan, I am interested in: ${current.title} (${current.category}). Please send me more details.`)}`}
                target="_blank" rel="noopener" className="rounded-full bg-background px-6 py-2 text-sm font-semibold text-coffee hover:bg-cream">
                Send us a message
              </a>
              <Link href={`/contact?product=${encodeURIComponent(current.title)}#visit`}
                className="rounded-full border border-white/60 px-6 py-2 text-sm font-semibold text-white hover:bg-white/10">
                Use contact form
              </Link>
            </div>
          </div>
          <button aria-label="Next" className="absolute right-3 text-4xl text-white px-3"
            onClick={(e) => { e.stopPropagation(); setOpen((open! + 1) % shown.length); }}>&rsaquo;</button>
        </div>
      )}
    </>
  );
}