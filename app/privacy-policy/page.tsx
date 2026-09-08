import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/data/business";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for Braj Travels.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section-y">
        <Container className="max-w-2xl space-y-6 text-navy-600 leading-relaxed">
          <p>
            This Privacy Policy explains how {business.name} collects and
            uses information when you enquire about or book a private taxi or
            tour through this website.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-navy-800">
              Information We Collect
            </h2>
            <p className="mt-2">
              When you submit a booking or contact form, we collect the
              information you provide — such as your name, mobile number,
              pickup location, destination, travel dates and any additional
              requirements you share with us.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-800">
              How We Use Your Information
            </h2>
            <p className="mt-2">
              We use this information solely to respond to your enquiry,
              confirm availability, share a fare estimate, and coordinate
              your trip. We do not sell or rent your personal information to
              third parties.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-800">
              WhatsApp and Phone Communication
            </h2>
            <p className="mt-2">
              If you contact us via WhatsApp or phone, that communication is
              subject to the respective platform&rsquo;s own privacy practices in
              addition to this policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-800">
              Contact Us
            </h2>
            <p className="mt-2">
              If you have questions about this Privacy Policy, contact us at{" "}
              {business.phoneDisplay}.
            </p>
          </div>

          <p className="text-sm text-navy-400">
            This policy may be updated from time to time. Please check this
            page periodically for changes.
          </p>
        </Container>
      </section>
    </>
  );
}
