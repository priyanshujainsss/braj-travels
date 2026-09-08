import { LinkButton } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { Container } from "@/components/ui/Container";

export function BookingCTA({
  title = "Plan Your Journey with Braj Travels",
  description = "Share your trip details and we'll confirm availability and fare on call or WhatsApp.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-navy-700">
      <Container className="flex flex-col items-start gap-5 py-12 sm:items-center sm:text-center lg:py-16">
        <h2 className="max-w-xl text-2xl font-semibold text-white sm:text-3xl">
          {title}
        </h2>
        <p className="max-w-lg text-navy-100">{description}</p>
        <div className="flex flex-wrap gap-3 sm:justify-center">
          <WhatsAppButton />
          <CallButton
            variant="outline"
            className="border-navy-400 text-white hover:bg-navy-600"
          />
          <LinkButton href="/book" variant="primary">
            Book Your Trip
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
