import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQSection } from "@/components/faq/FAQSection";
import { BookingCTA } from "@/components/booking/BookingCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/structuredData";
import { buildMetadata } from "@/lib/seo";
import { generalFaqs } from "@/data/faqs";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Common questions about booking a private taxi or tour with Braj Travels — vehicle, driver, outstation travel, GPS tracking and more.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" />
      <section className="section-y">
        <Container className="max-w-2xl">
          <FAQSection faqs={generalFaqs} />
        </Container>
        <JsonLd data={faqSchema(generalFaqs)} />
      </section>
      <BookingCTA />
    </>
  );
}
