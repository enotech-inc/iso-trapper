import type { HTMLAttributes } from "react";

interface IsoGridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number;
}

export function IsoGrid({
  columns = 3,
  className = "",
  style,
  ...props
}: IsoGridProps) {
  return (
    <div
      className={`relative grid gap-6 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-card-strong)] [transform-style:preserve-3d] ${className}`}
      style={{
        perspective: "1400px",
        transform: "rotateX(18deg) rotateZ(45deg)",
        ...style,
      }}
      {...props}
    >
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(transparent 40%, rgba(148,163,184,0.08) 40%, rgba(148,163,184,0.08) 42%, transparent 42%), linear-gradient(90deg, transparent 40%, rgba(148,163,184,0.08) 40%, rgba(148,163,184,0.08) 42%, transparent 42%)",
          backgroundSize: "70px 70px",
        }}
        aria-hidden="true"
      />
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {props.children}
      </div>
    </div>
  );
}
