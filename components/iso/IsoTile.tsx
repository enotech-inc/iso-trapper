import type { ButtonHTMLAttributes } from "react";

interface IsoTileProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function IsoTile({ active = false, className = "", ...props }: IsoTileProps) {
  return (
    <button
      className={`relative flex h-28 flex-col items-start justify-between rounded-2xl border px-4 py-3 text-left shadow-[var(--shadow-card)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
        active
          ? "border-[color:var(--accent)] bg-[color:var(--accent-soft)] text-[color:var(--text-primary)]"
          : "border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-primary)] hover:border-[color:var(--accent)]"
      } ${className}`}
      {...props}
    />
  );
}
