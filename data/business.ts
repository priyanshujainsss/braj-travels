export const business = {
  name: "Braj Travels",
  descriptor: "Private Car • Taxi • Tours • Pan-India Travel",
  legalCity: "Govardhan",
  district: "Mathura",
  state: "Uttar Pradesh",
  country: "India",
  addressLocality: "Govardhan, Mathura, Uttar Pradesh, India",
  phoneDisplay: "+91 97192 94193",
  phoneRaw: "+919719294193",
  whatsappRaw: "919719294193",
  serviceAreas: [
    "Govardhan",
    "Mathura",
    "Vrindavan",
    "Braj region",
    "Uttar Pradesh",
    "Destinations across India by private car",
  ],
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://braj-travels.vercel.app/";
