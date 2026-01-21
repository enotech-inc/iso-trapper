import type { HTMLAttributes } from "react";

interface IsoPanelProps extends HTMLAttributes<HTMLDivElement> {}

export function IsoPanel({ className = "", ...props }: IsoPanelProps) {
  return (
    <div
      className={`rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.45)] ${className}`}
      {...props}
    />
  );
}
