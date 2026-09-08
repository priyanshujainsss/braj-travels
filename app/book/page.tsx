import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BookingForm } from "@/components/booking/BookingForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book Your Trip",
  description:
    "Send your trip details to Braj Travels — pickup, destination, dates and passengers — and we'll confirm availability and fare.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Book", path: "/book" }]} />
      <PageHero
        eyebrow="Book Your Trip"
        title="Request a Fare Estimate"
        description="Share your trip details and we'll contact you on call or WhatsApp to confirm availability and fare."
      />
      <section className="section-y">
        <Container className="max-w-xl">
          <BookingForm />
        </Container>
      </section>
    </>
  );
}
