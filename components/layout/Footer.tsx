import Link from "next/link";

const footerLinks = [
  { label: "Trap registry", href: "/patterns" },
  { label: "Design system", href: "/system" },
  { label: "Playground", href: "/playground" },
];

export function Footer() {
  return (
    <footer className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-sm text-slate-400">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Iso Trapper · Spatial UI Lab
        </p>
        <div className="flex gap-3">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              className="rounded-full border border-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-slate-600 hover:text-white"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-xs text-slate-500">
        Built with isometric layers, modular tiles, and trap-based interactions
        that react to motion, focus, and scroll.
      </p>
    </footer>
  );
}
