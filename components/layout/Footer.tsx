import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { routes } from "@/data/routes";
import { getTelUrl } from "@/lib/phone";
import { getGenericWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100 bg-navy-800 text-navy-100">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">BRAJ TRAVELS</p>
          <p className="mt-1 text-sm text-saffron-300">{business.descriptor}</p>
          <p className="mt-4 text-sm leading-relaxed text-navy-200">
            {business.addressLocality}
          </p>
          <p className="mt-3 text-sm text-navy-200">
            <a href={getTelUrl()} className="hover:text-white">
              {business.phoneDisplay}
            </a>
          </p>
          <a
            href={getGenericWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-navy-200 hover:text-white"
          >
            Message us on WhatsApp
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-navy-200">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={s.href} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="hover:text-white">
                All Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Popular Routes</p>
          <ul className="mt-3 space-y-2 text-sm text-navy-200">
            {routes.slice(0, 6).map((r) => (
              <li key={r.slug}>
                <Link href={`/routes/${r.slug}`} className="hover:text-white">
                  {r.from} to {r.to}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-navy-200">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-navy-700">
        <Container className="flex flex-col gap-3 py-6 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Braj Travels. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link href="/cancellation-policy" className="hover:text-white">
              Cancellation Policy
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
