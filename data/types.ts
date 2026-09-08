export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  href: string;
  cta: string;
  highlights: string[];
}

export interface RouteInfo {
  slug: string;
  from: string;
  to: string;
  title: string;
  metaDescription: string;
  overview: string;
  whyTravel: string[];
  pickupInfo: string;
  travelConsiderations: string;
  faqs: { question: string; answer: string }[];
  relatedRouteSlugs: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  content: BlogSection[];
  relatedServiceHrefs: { label: string; href: string }[];
}

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface VehicleImage {
  src: string;
  alt: string;
  type: "hero" | "front" | "side" | "rear" | "interior" | "cabin" | "luggage";
}

export interface BookingFormData {
  tripType: string;
  pickup: string;
  destination: string;
  travelDate: string;
  returnDate?: string;
  passengers: string;
  name: string;
  mobile: string;
  whatsapp?: string;
  requirements?: string;
}
