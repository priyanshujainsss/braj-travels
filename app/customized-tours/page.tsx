import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Customized Tours from Govardhan",
  description:
    "Plan a customized tour by private car from Govardhan — family trips, pilgrimage journeys, sightseeing circuits or longer road trips built around your plan.",
  path: "/customized-tours",
});

export default function CustomizedToursPage() {
  return (
    <ServicePageTemplate
      eyebrow="Customized Tours"
      title="Customized Tours from Govardhan"
      intro="Family trips, religious journeys, sightseeing circuits or longer road trips — tell us your plan and we'll build the itinerary and fare around it."
      path="/customized-tours"
      ctaLabel="Plan My Trip"
      formTripType="Customized Tour"
      bodyParagraphs={[
        "Not every trip fits neatly into a fixed package. Customized tours are for travellers who have a rough idea of what they want — a family holiday, a pilgrimage circuit, a sightseeing trip, or a longer road trip — but need help shaping it into a realistic itinerary.",
        "Share your priorities, available days and any fixed dates when you enquire, and we'll work through a day-by-day plan with you rather than offering a generic package.",
      ]}
      bullets={[
        "Family trips and multi-generational travel",
        "Religious and pilgrimage journeys",
        "Sightseeing circuits built around your interests",
        "Airport/station pickup combined with sightseeing",
        "Long-distance road trips across multiple days",
      ]}
      faqs={[
        {
          question: "How is a customized tour different from a fixed package?",
          answer:
            "There's no fixed package — the itinerary, stops and pace are planned around what you actually want from the trip.",
        },
        {
          question: "What should I share when planning a customized tour?",
          answer:
            "Your priorities, available days, any fixed dates (like a festival or family event), and roughly how many people are travelling.",
        },
        {
          question: "Can this include multiple cities?",
          answer:
            "Yes, customized tours often include multi-city travel — see also our Multi-City Tours and Pan-India Tours pages.",
        },
      ]}
      relatedLinks={[
        { label: "Multi-City Tours", href: "/multi-city-tours" },
        { label: "Pan-India Tours", href: "/pan-india-tours" },
        { label: "Braj Darshan", href: "/braj-darshan" },
      ]}
    />
  );
}
