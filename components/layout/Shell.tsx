import type { ReactNode } from "react";

interface ShellProps {
  children: ReactNode;
  className?: string;
}

export function Shell({ children, className = "" }: ShellProps) {
  return (
    <div
      className={`min-h-screen bg-slate-950 text-slate-100 ${className}`}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_60%),radial-gradient(circle_at_30%_20%,_rgba(124,58,237,0.15),_transparent_55%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-10">
        {children}
      </div>
    </div>
  );
}
