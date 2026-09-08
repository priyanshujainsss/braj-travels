import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Braj Darshan by Private Car",
  description:
    "Plan a private Braj Darshan trip covering Govardhan, Mathura, Vrindavan, Barsana, Nandgaon, Gokul, Baldev and other Braj sites — customized to your priorities.",
  path: "/braj-darshan",
});

export default function BrajDarshanPage() {
  return (
    <ServicePageTemplate
      eyebrow="Braj Darshan"
      title="Private Braj Darshan by Car"
      intro="A customized Braj Darshan itinerary across Govardhan, Mathura, Vrindavan, Barsana, Nandgaon, Gokul, Baldev and other Braj locations."
      path="/braj-darshan"
      ctaLabel="Plan Braj Darshan"
      formTripType="Braj Darshan"
      bodyParagraphs={[
        "Braj Darshan can cover a wide circuit of sacred sites, and no two families or groups want to visit exactly the same set of places in the same order. We plan the itinerary around your priorities rather than offering one fixed package.",
        "Depending on how much time you have and which sites matter most, a Braj Darshan trip can be planned over a single day or spread across two, with stops at Kusum Sarovar or Radha Kund added where relevant.",
      ]}
      bullets={[
        "Customized itinerary, not a fixed package",
        "Complete car with driver for the full darshan trip",
        "Suitable for families and pilgrimage groups",
        "Can be spread across one or two days depending on your plan",
      ]}
      faqs={[
        {
          question: "Do I need to visit every Braj location in one trip?",
          answer:
            "No. Most customers prioritize a few key sites rather than trying to cover everything — the itinerary is built around what matters to you.",
        },
        {
          question: "Can the trip be spread across two days?",
          answer:
            "Yes, if you'd like to cover more sites without rushing, a two-day plan can be arranged.",
        },
        {
          question: "Can elderly family members travel comfortably on this trip?",
          answer:
            "Yes — mention this when booking so the pace and stops can be planned with extra time where needed.",
        },
      ]}
      relatedLinks={[
        { label: "Local Sightseeing", href: "/local-sightseeing" },
        { label: "Customized Tours", href: "/customized-tours" },
        {
          label: "Braj Darshan blog guide",
          href: "/blog/complete-guide-braj-darshan-from-govardhan",
        },
      ]}
    />
  );
}
