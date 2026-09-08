import { getGenericWhatsAppUrl, createServiceEnquiryUrl } from "@/lib/whatsapp";
import { LinkButton } from "./Button";

export function WhatsAppButton({
  variant = "secondary",
  label = "WhatsApp Us",
  serviceName,
  className,
}: {
  variant?: "primary" | "secondary" | "outline";
  label?: string;
  serviceName?: string;
  className?: string;
}) {
  const href = serviceName ? createServiceEnquiryUrl(serviceName) : getGenericWhatsAppUrl();

  return (
    <LinkButton
      href={href}
      variant={variant}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </LinkButton>
  );
}
