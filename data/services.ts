import { Service } from "./types";

export const services: Service[] = [
  {
    slug: "local-sightseeing",
    name: "Local Sightseeing",
    shortDescription:
      "Private car for Govardhan, Mathura, Vrindavan and nearby Braj sights.",
    description:
      "Explore Govardhan, Mathura, Vrindavan, Barsana, Nandgaon and Gokul at your own pace, with a driver who knows the local routes and timings.",
    href: "/local-sightseeing",
    cta: "Plan Local Sightseeing",
    highlights: [
      "Flexible, customizable stops",
      "Driver familiar with local temples and routes",
      "Comfortable for families and groups",
    ],
  },
  {
    slug: "braj-darshan",
    name: "Braj Darshan",
    shortDescription:
      "A private car for your Braj Darshan journey across the region's key sites.",
    description:
      "Visit Govardhan, Mathura, Vrindavan, Barsana, Nandgaon, Gokul, Baldev and other Braj locations on a private, unhurried itinerary built around what you want to see.",
    href: "/braj-darshan",
    cta: "Plan Braj Darshan",
    highlights: [
      "Customized itinerary, not a fixed package",
      "Complete car with driver",
      "Suitable for families and pilgrimage groups",
    ],
  },
  {
    slug: "outstation-taxi",
    name: "Outstation Taxi",
    shortDescription:
      "Private outstation taxi from Govardhan and Mathura for one-way and round trips.",
    description:
      "Travel beyond Braj for religious trips, family visits, sightseeing or business — one-way, round trip or multi-day, in a complete private car with driver.",
    href: "/outstation-taxi",
    cta: "Get Outstation Fare",
    highlights: [
      "One-way and round-trip options",
      "Multi-day journeys supported",
      "Direct booking, no middlemen",
    ],
  },
  {
    slug: "pan-india-tours",
    name: "Pan-India Tours",
    shortDescription:
      "Travel from Govardhan to destinations across India by private car.",
    description:
      "Whether it's Delhi, Jaipur, Varanasi or a longer road trip, plan travel from Govardhan to destinations across India, with availability and fare confirmed for your specific route.",
    href: "/pan-india-tours",
    cta: "Plan a Pan-India Trip",
    highlights: [
      "Long-distance and multi-day travel",
      "Route planned around your dates",
      "One driver, one car, throughout the trip",
    ],
  },
  {
    slug: "one-way-taxi",
    name: "One-Way Taxi",
    shortDescription: "One-way private taxi from Govardhan or Mathura.",
    description:
      "Book a one-way trip to your destination without paying for a return journey you don't need — ideal for onward travel, drop-offs and single-leg trips.",
    href: "/one-way-taxi",
    cta: "Get One-Way Fare",
    highlights: [
      "Pay for the leg you travel",
      "Any destination in India, free text",
      "Good for airport and station drop-offs",
    ],
  },
  {
    slug: "round-trip-taxi",
    name: "Round-Trip Taxi",
    shortDescription: "Return journeys and multi-day trips with the same car.",
    description:
      "Book a return journey — for a day trip, a weekend, or a longer multi-day plan — with the same private car and driver for the whole trip.",
    href: "/round-trip-taxi",
    cta: "Request Round-Trip Fare",
    highlights: [
      "Same car and driver throughout",
      "Suited to multi-day itineraries",
      "Halting and waiting discussed upfront",
    ],
  },
  {
    slug: "multi-city-tours",
    name: "Multi-City Tours",
    shortDescription: "Plan a road trip across several cities in one booking.",
    description:
      "Cover several cities in a single trip — for example Govardhan to Agra to Jaipur to Udaipur — with your own itinerary and pace.",
    href: "/multi-city-tours",
    cta: "Plan Multi-City Trip",
    highlights: [
      "Custom itinerary across multiple cities",
      "One car for the entire journey",
      "Flexible day-by-day planning",
    ],
  },
  {
    slug: "airport-transfer",
    name: "Airport Transfer",
    shortDescription: "Private airport pickup and drop.",
    description:
      "Private car pickup or drop to the airport of your choice, subject to route, date and vehicle availability.",
    href: "/airport-transfer",
    cta: "Book Airport Transfer",
    highlights: [
      "Pickup or drop, your choice",
      "Enter any airport as free text",
      "Can be combined with sightseeing",
    ],
  },
  {
    slug: "railway-station-transfer",
    name: "Railway Station Transfer",
    shortDescription: "Private car pickup or drop at any railway station.",
    description:
      "Book a private car to or from any railway station, and combine it with local sightseeing or an onward outstation journey if needed.",
    href: "/railway-station-transfer",
    cta: "Book Station Transfer",
    highlights: [
      "Any railway station, free text entry",
      "Can connect to sightseeing or outstation trip",
      "Track-side pickup coordination by phone/WhatsApp",
    ],
  },
  {
    slug: "customized-tours",
    name: "Customized Tours",
    shortDescription: "Tell us your plan — we build the itinerary around it.",
    description:
      "For family trips, pilgrimage journeys, sightseeing circuits or long road trips that don't fit a fixed package, share your plan and we'll work out the itinerary and fare together.",
    href: "/customized-tours",
    cta: "Plan My Trip",
    highlights: [
      "Itinerary built around your dates and stops",
      "Works for pilgrimage, family or leisure travel",
      "Discussed and confirmed over call or WhatsApp",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
