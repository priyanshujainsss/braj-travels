import { getTelUrl, getPhoneDisplay } from "@/lib/phone";
import { LinkButton } from "./Button";

export function CallButton({
  variant = "outline",
  label = "Call Now",
  className,
}: {
  variant?: "primary" | "secondary" | "outline";
  label?: string;
  className?: string;
}) {
  return (
    <LinkButton
      href={getTelUrl()}
      variant={variant}
      className={className}
      aria-label={`Call ${getPhoneDisplay()}`}
    >
      {label}
    </LinkButton>
  );
}
