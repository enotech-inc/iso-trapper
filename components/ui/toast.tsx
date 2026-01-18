import type { HTMLAttributes } from "react";

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  tone?: "info" | "success" | "warning";
}

const toneStyles: Record<NonNullable<ToastProps["tone"]>, string> = {
  info: "border-indigo-200 bg-indigo-50 text-indigo-900",
  success: "border-emerald-200 bg-emerald-50 text-emerald-900",
  warning: "border-amber-200 bg-amber-50 text-amber-900",
};

export function Toast({ tone = "info", className = "", ...props }: ToastProps) {
  return (
    <div
      className={`rounded-2xl border px-4 py-3 text-sm shadow-[0_12px_24px_rgba(15,23,42,0.12)] ${toneStyles[tone]} ${className}`}
      {...props}
    />
  );
}
