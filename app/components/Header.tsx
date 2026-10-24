"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-coffee/10">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Patsusan home">
          <img src="/logo.png" alt="Patsusan logo" width={48} height={48} className="h-12 w-12 object-contain" />
          <span className="font-serif text-2xl font-bold tracking-[0.2em] text-coffee">PATSUSAN</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={`text-sm font-medium transition-colors hover:text-coffee-mid ${path === l.href ? "text-coffee border-b-2 border-coffee" : "text-coffee/70"}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact#visit" className="rounded-full bg-coffee px-5 py-2 text-sm font-medium text-white hover:bg-coffee-dark">
            Visit Our Warehouse
          </Link>
        </nav>
        <button aria-label="Menu" className="md:hidden text-coffee text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-coffee/10 bg-background px-5 py-3 flex flex-col gap-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 font-medium text-coffee">
              {l.label}
            </Link>
          ))}
          <Link href="/contact#visit" onClick={() => setOpen(false)} className="rounded-full bg-coffee px-5 py-2 text-center text-white">
            Visit Our Warehouse
          </Link>
        </nav>
      )}
    </header>
  );
}

