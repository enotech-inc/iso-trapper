import Link from "next/link";

const footerLinks = [
  { label: "Documentation", href: "#documentation" },
  { label: "Patterns", href: "/patterns" },
  { label: "Playground", href: "/playground" },
  { label: "GitHub", href: "https://github.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Isotrapper
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Build spatial interfaces with predictable trap-based interactions.
          </p>
        </div>
        <nav aria-label="Footer links" className="flex flex-wrap gap-3">
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
