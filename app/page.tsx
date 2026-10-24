import Link from "next/link";

const features = [
  { t: "Affordable", d: "Fair prices for tailors, cobblers and shoe makers — buy a little or in bulk." },
  { t: "Quality & Premium", d: "From everyday leather to premium hides, hand-picked for lasting finish." },
  { t: "Complete Materials", d: "Leather, soles, laces and more — everything for your shoe in one place." },
];

export default function Home() {
  return (
    <>
      <section className="relative bg-coffee-dark bg-cover bg-center text-white" style={{ backgroundImage: "url(/images/hero-leather.jpg)" }}>
        <div className="absolute inset-0 bg-coffee-dark/60" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-40 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">Lagos, Nigeria</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold leading-tight">
            The Home of Quality &amp; Premium<br />Leather and Shoe Materials
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Leather, shoe soles, shoe lasts, shoe laces and more — affordable and premium, in the heart of Lagos.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact#visit" className="rounded-full bg-background px-8 py-3 font-semibold text-coffee hover:bg-cream">Visit Our Warehouse</Link>
            <Link href="/gallery" className="rounded-full border border-white/60 px-8 py-3 font-semibold hover:bg-background/10">View Gallery</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-center font-serif text-3xl text-coffee">Why Patsussan?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.t} className="rounded-2xl border border-coffee/10 bg-cream p-8">
              <h3 className="font-serif text-xl text-coffee">{f.t}</h3>
              <p className="mt-3 text-coffee/75">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-center font-serif text-3xl text-coffee">What We Sell</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[["Leather", "/warehouse/p17.jpeg"], ["Shoe Soles", "/images/soles.jpg"], ["Shoe Lasts", "/images/lasts.jpg"], ["Shoe Laces", "/images/laces.jpg"]].map(([n, src]) => (
              <Link key={n} href={`/gallery?cat=${n.replace("Shoe ", "")}`} className="group overflow-hidden rounded-2xl bg-background shadow-sm hover:shadow-lg transition">
                <div className="h-52 overflow-hidden"><img src={src} alt={n} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                <p className="p-5 font-serif text-xl text-coffee">{n} &rarr;</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 grid items-center gap-10 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <img src="/warehouse/p19.jpeg" alt="Our warehouse" className="col-span-2 h-56 w-full rounded-2xl object-cover" />
          <img src="/warehouse/p12.jpeg" alt="Inspecting leather" className="h-40 w-full rounded-2xl object-cover" />
          <img src="/warehouse/p17.jpeg" alt="Leather hides" className="h-40 w-full rounded-2xl object-cover" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-coffee-mid">Our Warehouse</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-coffee">Visit our warehouse and you might just find what you like</h2>
          <p className="mt-4 text-coffee/75">
            Shelves of leather, soles, lasts, laces and more under one roof. Touch, compare and choose — our team will help you find the right material for your next pair.
          </p>
          <Link href="/contact#visit" className="mt-8 inline-block rounded-full bg-coffee px-8 py-3 font-semibold text-white hover:bg-coffee-dark">
            Plan Your Visit
          </Link>
        </div>
      </section>
    </>
  );
}

