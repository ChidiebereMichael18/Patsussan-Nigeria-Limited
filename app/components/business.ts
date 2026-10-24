export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://patsusannigerialimited.com");

export const business = {
  name: "Patsusan Nigeria Limited",
  phone: "0802 229 7172",
  whatsapp: "2349083297594",
  whatsappDisplay: "+234 908 329 7594",
  email: "info@patsusannigerialimited.com",
  address: "16 Wey Street, Mushin, Lagos, Nigeria",
  hours: [
    ["Monday – Friday", "8:00am – 6:00pm"],
    ["Saturday", "8:00am – 6:00pm"],
    ["Sunday", "Closed"],
  ],
};
