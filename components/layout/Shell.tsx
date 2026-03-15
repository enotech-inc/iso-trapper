import type { ReactNode } from "react";

interface ShellProps {
  children: ReactNode;
  className?: string;
}

export function Shell({ children, className = "" }: ShellProps) {
  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100 ${className}`}>
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.2),_transparent_60%)]" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
}
