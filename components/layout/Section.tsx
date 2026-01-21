import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`space-y-6 ${className}`}>
      <div className="space-y-3">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--text-soft)]">
            {eyebrow}
          </p>
        ) : null}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-[color:var(--text-primary)] md:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-2xl text-sm text-[color:var(--text-muted)] md:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      {children}
    </section>
  );
}
