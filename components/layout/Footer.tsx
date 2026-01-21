import Link from "next/link";

const footerLinks = [
  { label: "Trap registry", href: "/patterns" },
  { label: "Design system", href: "/system" },
  { label: "Playground", href: "/playground" },
];

export function Footer() {
  return (
    <footer className="flex flex-col gap-6 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-sm text-[color:var(--text-soft)]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--text-soft)]">
          Iso Trapper · Spatial UI Lab
        </p>
        <div className="flex gap-3">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              className="rounded-full border border-[color:var(--border)] px-3 py-1.5 text-xs font-semibold text-[color:var(--text-muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--text-primary)]"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-xs text-[color:var(--text-soft)]">
        Built with isometric layers, modular tiles, and trap-based interactions
        that react to motion, focus, and scroll.
      </p>
    </footer>
  );
}
