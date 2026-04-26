import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variantClasses =
    variant === "primary"
      ? "bg-(--color-accent) text-(--color-text) shadow-(--shadow-soft) hover:-translate-y-0.5 hover:bg-(--color-accent-strong) focus-visible:ring-(--color-accent-strong)"
      : "border border-(--color-line) bg-white text-(--color-text) hover:bg-(--color-surface) focus-visible:ring-(--color-accent)";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`.trim()}>
      {children}
    </Link>
  );
}
