import type { HTMLAttributes } from "react";

const zoneStyles = {
  navigation:
    "bg-slate-950 text-white shadow-[0_30px_60px_rgba(15,23,42,0.4)]",
  action: "bg-white/90 text-slate-900 shadow-[0_20px_40px_rgba(15,23,42,0.15)]",
  content:
    "bg-gradient-to-br from-white via-white/90 to-slate-50 text-slate-900 shadow-[0_25px_50px_rgba(15,23,42,0.18)]",
  feedback:
    "bg-slate-900 text-white shadow-[0_25px_50px_rgba(15,23,42,0.35)]",
};

export type IsoZoneVariant = keyof typeof zoneStyles;

interface IsoZoneProps extends HTMLAttributes<HTMLDivElement> {
  variant: IsoZoneVariant;
}

export function IsoZone({ variant, className = "", ...props }: IsoZoneProps) {
  return (
    <section
      className={`rounded-3xl border border-white/10 p-6 ${
        zoneStyles[variant]
      } ${className}`}
      {...props}
    />
  );
}
