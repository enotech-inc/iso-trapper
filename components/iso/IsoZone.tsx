import type { HTMLAttributes } from "react";

const zoneStyles = {
  navigation: "bg-[color:var(--surface)]",
  action: "bg-[color:var(--surface-strong)]",
  content: "bg-[color:var(--surface)]",
  feedback: "bg-[color:var(--surface-strong)]",
};

export type IsoZoneVariant = keyof typeof zoneStyles;

interface IsoZoneProps extends HTMLAttributes<HTMLDivElement> {
  variant: IsoZoneVariant;
}

export function IsoZone({ variant, className = "", ...props }: IsoZoneProps) {
  return (
    <section
      className={`rounded-3xl border border-[color:var(--border)] p-6 shadow-[var(--shadow-card)] ${
        zoneStyles[variant]
      } ${className}`}
      {...props}
    />
  );
}
