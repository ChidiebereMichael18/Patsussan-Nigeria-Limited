export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://patsusannigerialimited.com");

export const business = {
  name: "Patsusan Nigeria Limited",
  phone: "+234 814 017 9451",
  whatsapp: "2348140179451",
  whatsappDisplay: "+234 814 017 9451",
  email: "info@patsusannigerialimited.com",
  address: "16 Wey Street, Mushin, Lagos, Nigeria",
  hours: [
    ["Monday – Friday", "8:00am – 6:00pm"],
    ["Saturday", "8:00am – 6:00pm"],
    ["Sunday", "Closed"],
  ],
};
