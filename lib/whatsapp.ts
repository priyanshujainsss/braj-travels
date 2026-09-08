import { business } from "@/data/business";
import { BookingFormData } from "@/data/types";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || business.whatsappRaw;

/**
 * Builds a wa.me URL with a pre-filled enquiry message.
 * Pass partial data — any field the user has already filled in a form,
 * or nothing at all for a generic enquiry link.
 */
export function createWhatsAppUrl(data?: Partial<BookingFormData>): string {
  const lines = ["Hello Braj Travels,", "", "I would like to enquire about a taxi/tour."];

  if (data?.name) lines.push(`Name: ${data.name}`);
  if (data?.pickup) lines.push(`Pickup: ${data.pickup}`);
  if (data?.destination) lines.push(`Destination: ${data.destination}`);
  if (data?.tripType) lines.push(`Trip Type: ${data.tripType}`);
  if (data?.travelDate) lines.push(`Travel Date: ${data.travelDate}`);
  if (data?.returnDate) lines.push(`Return Date: ${data.returnDate}`);
  if (data?.passengers) lines.push(`Passengers: ${data.passengers}`);
  if (data?.requirements) lines.push(`Requirements: ${data.requirements}`);

  lines.push("", "Please share availability and fare.");

  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

/** A simple, generic WhatsApp link for use in headers/footers/sticky bars. */
export function getGenericWhatsAppUrl(): string {
  return createWhatsAppUrl();
}

/** Pre-fills a WhatsApp enquiry naming a specific service or route. */
export function createServiceEnquiryUrl(serviceName: string): string {
  const message = encodeURIComponent(
    `Hello Braj Travels,\n\nI would like to enquire about: ${serviceName}.\n\nPlease share availability and fare.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
