import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { business, siteUrl } from "./components/business";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const description =
  "Buy quality leather, shoe soles, shoe lasts, laces and shoe materials in Lagos.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Patsusan Nigeria Limited | Leather & Shoe Materials in Lagos",
    template: "%s | Patsusan Nigeria Limited",
  },
  description,
  applicationName: business.name,
  keywords: [
    "leather in Lagos", "buy leather Lagos", "shoe materials Nigeria", "shoe soles Lagos",
    "shoe lasts Nigeria", "shoe laces", "animal skins", "leather warehouse Lagos",
    "Patsusan", "Patsusan Nigeria Limited", "shoe making materials", "Italian leather Nigeria", "wholesale shoe materials Lagos", "retail shoe materials",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: business.name,
    title: "Patsusan Nigeria Limited | Leather & Shoe Materials in Lagos",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Patsusan Nigeria Limited",
    description,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  category: "shopping",
};

export const viewport: Viewport = { themeColor: "#3e2415" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  telephone: business.phone,
  email: business.email,
  address: { "@type": "PostalAddress", streetAddress: "16 Wey Street, Mushin", addressLocality: "Lagos", addressCountry: "NG" },
  areaServed: "Nigeria",
  openingHours: ["Mo-Sa 08:00-18:00"],
  priceRange: "$$",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${heading.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}