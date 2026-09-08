import Link from "next/link";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { BookingForm } from "@/components/booking/BookingForm";
import { BookingCTA } from "@/components/booking/BookingCTA";
import { FAQSection } from "@/components/faq/FAQSection";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema } from "@/lib/structuredData";
import { FAQ } from "@/data/types";

interface ServicePageTemplateProps {
  eyebrow: string;
  title: string;
  intro: string;
  path: string;
  bodyParagraphs: string[];
  bullets: string[];
  faqs: FAQ[];
  relatedLinks: { label: string; href: string }[];
  formTripType?: string;
  ctaLabel: string;
}

export function ServicePageTemplate({
  eyebrow,
  title,
  intro,
  path,
  bodyParagraphs,
  bullets,
  faqs,
  relatedLinks,
  formTripType,
  ctaLabel,
}: ServicePageTemplateProps) {
  return (
    <>
      <Breadcrumbs items={[{ name: title, path }]} />
      <PageHero eyebrow={eyebrow} title={title} description={intro}>
        <LinkButton href="/book" variant="primary">
          {ctaLabel}
        </LinkButton>
      </PageHero>

      <section className="section-y">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5 text-navy-600 leading-relaxed">
            {bodyParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <ul className="mt-4 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-navy-700">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-saffron-500"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>

            {relatedLinks.length > 0 && (
              <div className="pt-2">
                <p className="text-sm font-medium text-navy-700">Related</p>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-saffron-600 hover:text-saffron-700">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <BookingForm defaultTripType={formTripType} />
          </div>
        </Container>
      </section>

      {faqs.length > 0 && (
        <section className="section-y bg-sand-50">
          <Container className="max-w-2xl">
            <SectionHeading title="Frequently Asked Questions" />
            <div className="mt-6">
              <FAQSection faqs={faqs} />
            </div>
          </Container>
          <JsonLd data={faqSchema(faqs)} />
        </section>
      )}

      <BookingCTA />
      <JsonLd
        data={serviceSchema({ name: title, description: intro, path })}
      />
    </>
  );
}
