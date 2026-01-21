import type { HTMLAttributes } from "react";

interface IsoPanelProps extends HTMLAttributes<HTMLDivElement> {}

export function IsoPanel({ className = "", ...props }: IsoPanelProps) {
  return (
    <div
      className={`rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-card-strong)] ${className}`}
      {...props}
    />
  );
}
