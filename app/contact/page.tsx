import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { LinkButton } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/data/business";

export const metadata = buildMetadata({
  title: "Contact Braj Travels",
  description:
    "Contact Braj Travels in Govardhan, Mathura by phone, WhatsApp or the booking form to plan your private taxi or tour.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      <PageHero eyebrow="Contact" title="Get in Touch with Braj Travels" />

      <section className="section-y">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-navy-800">
              {business.name}
            </h2>
            <p className="mt-2 text-navy-600">{business.addressLocality}</p>
            <p className="mt-4 text-navy-600">
              Phone: <span className="font-medium">{business.phoneDisplay}</span>
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppButton />
              <CallButton />
              <LinkButton href="/book" variant="primary">
                Book Your Trip
              </LinkButton>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-navy-700">
                Service Areas
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2 text-sm text-navy-600">
                {business.serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-navy-200 px-3 py-1"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-navy-100 bg-sand-50 p-6">
            <h3 className="text-sm font-semibold text-navy-700">
              Prefer to send trip details directly?
            </h3>
            <p className="mt-2 text-sm text-navy-600">
              Use our booking form to share your pickup, destination, dates
              and passengers — we&rsquo;ll get back to you on call or WhatsApp with
              availability and fare.
            </p>
            <div className="mt-4">
              <LinkButton href="/book" variant="secondary">
                Go to Booking Form
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
