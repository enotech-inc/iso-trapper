import type { HTMLAttributes } from "react";

interface DepthLayerProps extends HTMLAttributes<HTMLDivElement> {
  depth?: "low" | "mid" | "high";
}

const depthStyles: Record<NonNullable<DepthLayerProps["depth"]>, string> = {
  low: "shadow-[0_20px_40px_rgba(15,23,42,0.4)]",
  mid: "shadow-[0_30px_70px_rgba(15,23,42,0.45)]",
  high: "shadow-[0_40px_90px_rgba(15,23,42,0.55)]",
};

export function DepthLayer({
  depth = "mid",
  className = "",
  ...props
}: DepthLayerProps) {
  return (
    <div
      className={`rounded-3xl border border-slate-800 bg-slate-900/70 ${depthStyles[depth]} ${className}`}
      {...props}
    />
  );
}
