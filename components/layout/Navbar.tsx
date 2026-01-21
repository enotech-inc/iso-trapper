import Link from "next/link";
import { Button } from "../ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Playground", href: "/playground" },
  { label: "System", href: "/system" },
  { label: "Patterns", href: "/patterns" },
  { label: "About", href: "/about" },
];

interface NavbarProps {
  onToggleDebug?: () => void;
  debugEnabled?: boolean;
}

export function Navbar({ onToggleDebug, debugEnabled }: NavbarProps) {
  return (
    <header className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_30px_70px_rgba(15,23,42,0.45)] backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500 text-sm font-semibold text-white">
            IT
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Iso Trapper</p>
            <p className="text-xs text-slate-400">
              Isometric trap-based UI system
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          {onToggleDebug ? (
            <Button
              variant="secondary"
              size="sm"
              onClick={onToggleDebug}
              aria-pressed={debugEnabled}
            >
              {debugEnabled ? "Hide" : "Show"} Debug HUD
            </Button>
          ) : null}
          <Button size="sm">Launch demo</Button>
        </div>
      </div>
      <nav aria-label="Primary">
        <ul className="flex flex-wrap gap-3 text-sm font-semibold text-slate-300">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                className="rounded-full border border-transparent px-4 py-2 transition hover:border-slate-600 hover:bg-slate-800/70"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
