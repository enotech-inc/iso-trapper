import Link from "next/link";
import { Section } from "../layout/Section";

export function CallToAction() {
  return (
    <Section
      title="Ready to modernize your interaction layer?"
      description="Ship production-ready isometric and trap-based UI patterns with a polished developer experience."
      className="pb-20"
    >
      <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-8 text-center dark:border-indigo-500/20 dark:bg-indigo-500/10 sm:p-10">
        <p className="text-base text-indigo-900 dark:text-indigo-100">
          Start with the playground, then explore deeper patterns and system guidance.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/playground"
            aria-label="Open playground"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-600 px-5 text-base font-medium text-white transition duration-200 hover:bg-indigo-500"
          >
            Launch playground
          </Link>
          <Link
            href="/patterns"
            aria-label="Explore patterns"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-base font-medium text-slate-700 transition duration-200 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Explore patterns
          </Link>
        </div>
      </div>
    </Section>
  );
}
