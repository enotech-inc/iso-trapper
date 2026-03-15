import type { ReactNode } from "react";

interface ShellProps {
  children: ReactNode;
  className?: string;
}

export function Shell({ children, className = "" }: ShellProps) {
  return (
    <div
      className={`relative min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100 ${className}`}
    >
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.2),_transparent_60%)]" />

      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-full w-full max-w-7xl border-x border-slate-200/70 dark:border-slate-800/80" />
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}
