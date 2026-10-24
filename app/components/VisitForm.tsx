"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { business } from "./business";

export default function VisitForm() {
  const product = useSearchParams().get("product");
  const [f, setF] = useState({ name: "", phone: "", type: product ? "Ask about a product" : "Visit the warehouse", date: "", time: "", msg: product ? `I am interested in: ${product}` : "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello Patsusan, I'd like to ${f.type.toLowerCase()}.\nName: ${f.name}\nPhone: ${f.phone}\nPreferred date: ${f.date} ${f.time}\nInterested in: ${f.msg}`;
    window.open(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  }

  const input = "w-full rounded-lg border border-coffee/20 px-4 py-3 outline-none focus:border-coffee focus:ring-2 focus:ring-coffee/20";
  return (
    <form onSubmit={submit} className="space-y-4">
      <input required placeholder="Your name" className={input} value={f.name} onChange={set("name")} />
      <input required type="tel" placeholder="Phone number" className={input} value={f.phone} onChange={set("phone")} />
      <select className={input} value={f.type} onChange={set("type")}>
        <option>Ask about a product</option>
        <option>Visit the warehouse</option>
        <option>Warehouse tour</option>
        <option>Request a bulk quote</option>
      </select>
      <div className="grid grid-cols-2 gap-4">
        <input type="date" className={input} value={f.date} onChange={set("date")} />
        <input type="time" className={input} value={f.time} onChange={set("time")} />
      </div>
      <textarea rows={4} placeholder="What are you looking for? (leather, soles, laces, quantity…)" className={input} value={f.msg} onChange={set("msg")} />
      <button className="w-full rounded-full bg-coffee py-3 font-semibold text-white hover:bg-coffee-dark">
        Send Request via WhatsApp
      </button>
    </form>
  );
}

