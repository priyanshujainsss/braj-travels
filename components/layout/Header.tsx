import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Local Tours", href: "/local-sightseeing" },
  { label: "Outstation", href: "/outstation-taxi" },
  { label: "Pan-India", href: "/pan-india-tours" },
  { label: "Customized Tours", href: "/customized-tours" },
  { label: "Our Car", href: "/our-car" },
  { label: "Routes", href: "/routes" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 flex-col leading-tight">
          <span className="text-lg font-bold tracking-tight text-navy-800">
            BRAJ TRAVELS
          </span>
          <span className="hidden text-xs text-saffron-600 sm:block">
            Private Car &amp; Tours
          </span>
        </Link>

        {/* Full nav only shown once there's genuinely enough width for all
            10 links + logo + CTA to sit on one line without wrapping. */}
        <nav aria-label="Primary" className="hidden min-w-0 xl:block">
          <ul className="flex items-center gap-4 whitespace-nowrap text-[13.5px] font-medium text-navy-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-saffron-600 no-underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LinkButton href="/book" variant="primary" size="sm" className="xl:hidden">
            Book Now
          </LinkButton>
          <LinkButton href="/book" variant="primary" className="hidden xl:inline-flex">
            Book Now
          </LinkButton>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

