import type { ButtonHTMLAttributes } from "react";

interface IsoTileProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function IsoTile({ active = false, className = "", ...props }: IsoTileProps) {
  return (
    <button
      className={`relative flex h-28 flex-col items-start justify-between rounded-2xl border px-4 py-3 text-left shadow-[0_15px_30px_rgba(15,23,42,0.35)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
        active
          ? "border-indigo-400 bg-indigo-500/20 text-white"
          : "border-slate-700 bg-slate-900/80 text-slate-200 hover:border-slate-500"
      } ${className}`}
      {...props}
    />
  );
}
