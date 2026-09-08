import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-saffron-400 text-navy-900 hover:bg-saffron-500 focus-visible:bg-saffron-500",
  secondary:
    "bg-navy-700 text-white hover:bg-navy-800 focus-visible:bg-navy-800",
  outline:
    "border border-navy-300 text-navy-700 hover:border-navy-500 hover:bg-navy-50",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-3 text-[15px] min-h-[44px]",
  sm: "px-3.5 py-2 text-[13.5px] min-h-[40px]",
};

const base = "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: LinkButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https://wa.me");
  const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

