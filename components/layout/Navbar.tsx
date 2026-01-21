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
    <header className="flex flex-col gap-6 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-card-strong)] backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-sm font-semibold text-white">
            IT
          </span>
          <div>
            <p className="text-sm font-semibold text-[color:var(--text-primary)]">
              Iso Trapper
            </p>
            <p className="text-xs text-[color:var(--text-soft)]">
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
        <ul className="flex flex-wrap gap-3 text-sm font-semibold text-[color:var(--text-muted)]">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                className="rounded-full border border-transparent px-4 py-2 transition hover:border-[color:var(--accent)] hover:bg-[color:var(--surface-muted)]"
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
