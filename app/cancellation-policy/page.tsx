import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/data/business";

export const metadata = buildMetadata({
  title: "Cancellation Policy",
  description: "Cancellation Policy for bookings with Braj Travels.",
  path: "/cancellation-policy",
});

export default function CancellationPolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Cancellation Policy", path: "/cancellation-policy" }]}
      />
      <PageHero eyebrow="Legal" title="Cancellation Policy" />
      <section className="section-y">
        <Container className="max-w-2xl space-y-6 text-navy-600 leading-relaxed">
          <p>
            We understand that travel plans can change. If you need to
            cancel or reschedule a confirmed trip with {business.name},
            please let us know as early as possible by phone or WhatsApp.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-navy-800">
              How to Cancel or Reschedule
            </h2>
            <p className="mt-2">
              Contact us directly at {business.phoneDisplay} or via WhatsApp
              with your booking details. We will confirm the cancellation or
              help you reschedule where possible.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-800">
              Advance Notice
            </h2>
            <p className="mt-2">
              Cancellations made with more advance notice are easier for us
              to accommodate, particularly for outstation and multi-day
              trips where the vehicle and driver&rsquo;s schedule are planned in
              advance.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-800">
              Last-Minute Cancellations
            </h2>
            <p className="mt-2">
              For cancellations made close to the travel date or after the
              driver has already been dispatched, please discuss the specific
              situation with us directly — this is handled case by case
              depending on how the trip was confirmed.
            </p>
          </div>

          <p className="text-sm text-navy-400">
            This policy may be updated from time to time. For any specific
            cancellation, please contact us directly rather than relying
            solely on this page.
          </p>
        </Container>
      </section>
    </>
  );
}
