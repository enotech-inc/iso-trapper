import type { HTMLAttributes } from "react";

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  tabs: { label: string; value: string }[];
  active: string;
}

export function Tabs({ tabs, active, className = "", ...props }: TabsProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-2 rounded-full bg-[color:var(--surface-strong)] p-1 ${className}`}
      {...props}
    >
      {tabs.map((tab) => (
        <span
          key={tab.value}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
            active === tab.value
              ? "bg-[color:var(--surface)] text-[color:var(--text-primary)] shadow-[var(--shadow-card)]"
              : "text-[color:var(--text-soft)]"
          }`}
        >
          {tab.label}
        </span>
      ))}
    </div>
  );
}
