import type { Metadata } from "next";
import { Suspense } from "react";
import GalleryGrid from "../components/GalleryGrid";
import { getItems } from "../components/getItems";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Buy quality leather, shoe soles, shoe lasts and laces in Lagos.",
  alternates: { canonical: "/gallery" },
};

export default function Gallery() {
  return (
    <>
      <section className="relative bg-coffee-dark bg-cover bg-center text-white text-center py-20" style={{ backgroundImage: "url(/images/hero-leather.jpg)" }}>
        <div className="absolute inset-0 bg-coffee-dark/60" />
        <div className="relative">
          <h1 className="font-serif text-4xl md:text-5xl">Our Gallery</h1>
          <p className="mt-3 text-white/80">Leather, soles, lasts, laces and our warehouse. Tap a photo to enlarge.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Suspense><GalleryGrid items={getItems()} /></Suspense>
        <p className="mt-12 text-center text-sm text-coffee/60">Stock changes often. Visit our warehouse to see and feel the full range.</p>
      </section>

    </>
  );
}