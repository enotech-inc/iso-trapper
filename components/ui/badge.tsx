import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "accent" | "success" | "warning";
}

const toneStyles: Record<NonNullable<BadgeProps["tone"]>, string> = {
  neutral:
    "bg-[color:var(--badge-neutral-bg)] text-[color:var(--badge-neutral-text)]",
  accent:
    "bg-[color:var(--badge-accent-bg)] text-[color:var(--badge-accent-text)]",
  success:
    "bg-[color:var(--badge-success-bg)] text-[color:var(--badge-success-text)]",
  warning:
    "bg-[color:var(--badge-warning-bg)] text-[color:var(--badge-warning-text)]",
};

export function Badge({ tone = "neutral", className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${toneStyles[tone]} ${className}`}
      {...props}
    />
  );
}
