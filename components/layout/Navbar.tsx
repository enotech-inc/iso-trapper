import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const navItems = [
  { label: "Documentation", href: "#documentation" },
  { label: "Features", href: "#features" },
  { label: "Code", href: "#code" },
  { label: "GitHub", href: "https://github.com" },
];

interface NavbarProps {
  onToggleDebug?: () => void;
  debugEnabled?: boolean;
}

export function Navbar({ onToggleDebug, debugEnabled }: NavbarProps) {
  // Mobile nav state keeps the sticky header usable on small screens.
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 pt-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-6 dark:border-slate-800/80 dark:bg-slate-900/80">
          <div className="flex items-center justify-between gap-4">
            <Link
              className="flex items-center gap-3"
              href="/"
              aria-label="Go to Isotrapper homepage"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
                ISO
              </span>
              <span>
                <span className="block text-sm font-semibold">Isotrapper</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">
                  Spatial interaction toolkit
                </span>
              </span>
            </Link>

            <nav
              className="hidden items-center gap-2 lg:flex"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition duration-200 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              {onToggleDebug ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onToggleDebug}
                  aria-pressed={debugEnabled}
                >
                  {debugEnabled ? "Hide" : "Show"} Debug
                </Button>
              ) : null}
              <Link
                href="/playground"
                aria-label="Open the Isotrapper quick start playground"
                className="inline-flex h-9 items-center justify-center rounded-lg bg-indigo-600 px-3 text-sm font-medium text-white transition duration-200 hover:bg-indigo-500"
              >
                Quick start
              </Link>
            </div>

            <button
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((state) => !state)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition hover:bg-slate-100 lg:hidden dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              type="button"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>

          {mobileOpen ? (
            <nav
              id="mobile-nav"
              className="mt-4 space-y-2 border-t border-slate-200 pt-4 lg:hidden dark:border-slate-800"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {onToggleDebug ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onToggleDebug}
                    aria-pressed={debugEnabled}
                  >
                    {debugEnabled ? "Hide" : "Show"} Debug
                  </Button>
                ) : null}
                <Link
                  href="/playground"
                  aria-label="Open the Isotrapper quick start playground"
                  className="inline-flex h-9 items-center justify-center rounded-lg bg-indigo-600 px-3 text-sm font-medium text-white transition duration-200 hover:bg-indigo-500"
                >
                  Quick start
                </Link>
              </div>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
