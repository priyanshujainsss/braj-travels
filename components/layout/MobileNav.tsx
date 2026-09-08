"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { CallButton } from "@/components/ui/CallButton";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

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

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // document.body isn't available during SSR, so only portal after mount.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const menu = (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-white"
    >
      <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
        <span className="text-lg font-semibold text-navy-800">Menu</span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-navy-200 text-navy-700"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-md px-2 py-3 text-base font-medium text-navy-700 hover:bg-sand-100"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mt-2 flex flex-col gap-3 border-t border-navy-100 px-5 py-5">
        <WhatsAppButton className="w-full" />
        <CallButton className="w-full" />
      </div>
    </div>
  );

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-navy-200 text-navy-700"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 6h18M3 12h18M3 18h18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Rendered via portal directly on document.body: the header uses
          backdrop-blur, which — like transform/filter — creates a new
          containing block for any position:fixed descendant. Without the
          portal, this "fixed, full-screen" overlay would actually be
          confined to the header's own box instead of the viewport, letting
          page content behind it show through. */}
      {open && mounted && createPortal(menu, document.body)}
    </div>
  );
}

