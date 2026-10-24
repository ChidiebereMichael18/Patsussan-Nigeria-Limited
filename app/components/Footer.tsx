import Link from "next/link";
import { business } from "./business";

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-white/80">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <img src="/logo.png" alt="Patsussan logo" className="h-20 w-20 rounded-full object-cover" />
          <p className="mt-3 font-serif text-2xl text-white">{business.name}</p>
          <p className="mt-3 text-sm">Affordable, quality and premium leathers and shoe materials in the heart of Lagos.</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold text-white">Explore</p>
          <Link className="block hover:text-white" href="/">Home</Link>
          <Link className="block hover:text-white" href="/gallery">Gallery</Link>
          <Link className="block hover:text-white" href="/contact">Contact &amp; Visit</Link>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold text-white">Visit Us</p>
          <p>{business.address}</p>
          <p>{business.phone}</p>
          <p>{business.email}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
