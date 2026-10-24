import type { Metadata } from "next";
import { Suspense } from "react";
import VisitForm from "../components/VisitForm";
import { business } from "../components/business";

export const metadata: Metadata = {
  title: "Visit Our Warehouse",
  description: "Visit the Patsusan warehouse in Lagos to see and feel quality leather, soles, lasts and laces. Find our address, hours and contact details.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <section className="leather-grain bg-coffee text-white text-center py-16">
        <h1 className="font-serif text-4xl md:text-5xl">Contact &amp; Visit Us</h1>
        <p className="mt-3 text-white/80">Visit our warehouse and find what you like.</p>
      </section>
      <section id="visit" className="mx-auto max-w-6xl px-5 py-16 grid gap-12 md:grid-cols-2 scroll-mt-20">
        <div>
          <h2 className="font-serif text-3xl text-coffee">Visit Our Warehouse</h2>
          <p className="mt-2 mb-6 text-coffee/70">Walk in anytime, or tell us when you are coming and we will be ready — you might just find what you like.</p>
          <Suspense><VisitForm /></Suspense>
        </div>
        <div className="space-y-8">
          <div className="rounded-2xl bg-cream p-8">
            <h3 className="font-serif text-2xl text-coffee">Find Our Warehouse</h3>
            <p className="mt-3 text-coffee/80">{business.address}</p>
            <p className="mt-1 text-coffee/80">📞 <a href={`tel:${business.phone}`} className="underline">{business.phone}</a></p>
            <p className="mt-1 text-coffee/80">✉️ <a href={`mailto:${business.email}`} className="underline">{business.email}</a></p>
            <a href={`https://wa.me/${business.whatsapp}`} target="_blank" className="mt-5 inline-block rounded-full bg-coffee px-6 py-2 text-sm font-semibold text-white hover:bg-coffee-dark">Chat on WhatsApp</a>
          </div>
          <div className="rounded-2xl border border-coffee/10 p-8">
            <h3 className="font-serif text-2xl text-coffee">Opening Hours</h3>
            <ul className="mt-4 divide-y divide-coffee/10">
              {business.hours.map(([d, h]) => (
                <li key={d} className="flex justify-between py-2 text-coffee/80"><span>{d}</span><span>{h}</span></li>
              ))}
            </ul>
          </div>
          <iframe title="Map" className="h-64 w-full rounded-2xl border-0"
            src="https://www.google.com/maps?q=16+Wey+Street,Mushin,Lagos,Nigeria&output=embed" loading="lazy" />
        </div>
      </section>
    </>
  );
}

