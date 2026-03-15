import Link from "next/link";
import { Badge } from "../ui/badge";
import { CodeBlock } from "../ui/code-block";

const heroCode = `import { TrapProvider, TrapReveal } from "isotrapper";

export default function App() {
  return (
    <TrapProvider>
      <TrapReveal axis="y" distance={24}>
        <Dashboard />
      </TrapReveal>
    </TrapProvider>
  );
}`;

export function HeroSection() {
  // Hero follows a two-column SaaS pattern: value proposition + live code preview.
  return (
    <section className="grid gap-10 pb-12 pt-14 lg:grid-cols-2 lg:items-center">
      <div>
        <Badge tone="accent" className="mb-5">Tailwind-first interaction tooling</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
          Build spatial UI interactions with confidence.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Isotrapper helps developers orchestrate layered interfaces, motion states, and keyboard-safe traps with a clean API designed for modern React apps.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/playground"
            aria-label="Go to quick start playground"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-600 px-5 text-base font-medium text-white transition duration-200 ease-in-out hover:scale-105 hover:bg-indigo-500"
          >
            Get Started
          </Link>
          <Link
            href="#documentation"
            aria-label="View documentation preview"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-base font-medium text-slate-700 transition duration-200 ease-in-out hover:scale-105 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Read docs
          </Link>
        </div>
      </div>

      <CodeBlock code={heroCode} title="Quick start" language="tsx" />
    </section>
  );
}
