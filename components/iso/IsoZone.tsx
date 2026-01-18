import type { HTMLAttributes } from "react";

const zoneStyles = {
  navigation: "bg-white",
  action: "bg-slate-50",
  content: "bg-white",
  feedback: "bg-slate-50",
};

export type IsoZoneVariant = keyof typeof zoneStyles;

interface IsoZoneProps extends HTMLAttributes<HTMLDivElement> {
  variant: IsoZoneVariant;
}

export function IsoZone({ variant, className = "", ...props }: IsoZoneProps) {
  return (
    <section
      className={`rounded-3xl border border-slate-200/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ${
        zoneStyles[variant]
      } ${className}`}
      {...props}
    />
  );
}
