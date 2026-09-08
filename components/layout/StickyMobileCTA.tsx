import Link from "next/link";
import { getTelUrl } from "@/lib/phone";
import { getGenericWhatsAppUrl } from "@/lib/whatsapp";

export function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-3 divide-x divide-navy-100">
        <a
          href={getGenericWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 text-[13px] font-medium text-navy-700"
        >
          <span aria-hidden="true">WhatsApp</span>
          <span className="sr-only">Message Braj Travels on WhatsApp</span>
        </a>
        <a
          href={getTelUrl()}
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 text-[13px] font-medium text-navy-700"
        >
          Call
        </a>
        <Link
          href="/book"
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 bg-saffron-400 text-[13px] font-semibold text-navy-900"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
