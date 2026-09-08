import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Local Sightseeing — Govardhan, Mathura & Vrindavan",
  description:
    "Private car for local sightseeing around Govardhan, Mathura, Vrindavan, Barsana, Nandgaon and Gokul. Flexible stops, driver included.",
  path: "/local-sightseeing",
});

export default function LocalSightseeingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Local Sightseeing"
      title="Local Sightseeing Around Govardhan & Mathura"
      intro="Explore Govardhan, Mathura, Vrindavan, Barsana, Nandgaon and Gokul with a private car and driver, at a pace that suits your group."
      path="/local-sightseeing"
      ctaLabel="Plan Local Sightseeing"
      formTripType="Local Sightseeing"
      bodyParagraphs={[
        "Local sightseeing around Braj usually means visiting a mix of temples, ghats and towns spread across Govardhan, Mathura, Vrindavan and the surrounding area. Rather than arranging transport separately for each stop, a private car with driver lets you move between them on your own schedule.",
        "This service is built around flexibility — you decide which places matter most, how long to spend at each, and whether to add or drop a stop on the day. Pickup can be arranged from Govardhan, Mathura, Vrindavan or a nearby location.",
      ]}
      bullets={[
        "Flexible, customizable stops within the local Braj area",
        "Driver familiar with local temples, ghats and timings",
        "Comfortable for families, elderly travellers and small groups",
        "Pickup from Govardhan, Mathura, Vrindavan or nearby",
      ]}
      faqs={[
        {
          question: "Which places are usually covered in local sightseeing?",
          answer:
            "Common stops include Govardhan, Mathura, Vrindavan, Barsana, Nandgaon and Gokul — but the exact route is built around what you'd like to see.",
        },
        {
          question: "Can I do this over a half day rather than a full day?",
          answer:
            "Yes, half-day and full-day plans are both possible. Let us know your available time when you enquire.",
        },
        {
          question: "Is this different from Braj Darshan?",
          answer:
            "Local sightseeing is generally a shorter, more flexible trip, while Braj Darshan often covers a wider circuit of pilgrimage sites. Both use the same private-car service.",
        },
      ]}
      relatedLinks={[
        { label: "Braj Darshan", href: "/braj-darshan" },
        { label: "Customized Tours", href: "/customized-tours" },
        { label: "Our Car", href: "/our-car" },
      ]}
    />
  );
}
