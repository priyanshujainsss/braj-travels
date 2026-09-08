import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/data/business";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms and Conditions for booking with Braj Travels.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Terms & Conditions", path: "/terms-and-conditions" }]}
      />
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="section-y">
        <Container className="max-w-2xl space-y-6 text-navy-600 leading-relaxed">
          <p>
            These terms apply when you book a trip with {business.name}. By
            submitting a booking enquiry or confirming a trip with us, you
            agree to the terms below.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-navy-800">
              Booking &amp; Confirmation
            </h2>
            <p className="mt-2">
              All bookings made through the website, WhatsApp or phone are
              enquiries. A trip is confirmed only after we have verified
              availability and shared the fare with you directly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-800">
              Service Model
            </h2>
            <p className="mt-2">
              Braj Travels provides a complete private car with driver. This
              is not a self-drive rental and not a shared or per-seat taxi
              service.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-800">
              Fare &amp; Payment
            </h2>
            <p className="mt-2">
              Fares depend on route, travel dates, trip type and vehicle
              availability, and are confirmed with you before travel. We do
              not publish fixed online rates.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-800">
              Customer Responsibilities
            </h2>
            <p className="mt-2">
              Customers are responsible for providing accurate pickup,
              destination and travel date information, and for any entry
              tickets, permits or documentation required for their trip
              (such as monument tickets or ID proof for travel).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-800">
              Route Feasibility
            </h2>
            <p className="mt-2">
              All trips are subject to route feasibility, road conditions and
              vehicle availability at the time of travel.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-800">
              Changes to These Terms
            </h2>
            <p className="mt-2">
              These terms may be updated from time to time. Please review
              this page periodically.
            </p>
          </div>

          <p className="text-sm text-navy-400">
            For questions about these terms, contact us at{" "}
            {business.phoneDisplay}.
          </p>
        </Container>
      </section>
    </>
  );
}
