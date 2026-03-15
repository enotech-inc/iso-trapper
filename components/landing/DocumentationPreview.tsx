import Link from "next/link";
import { Section } from "../layout/Section";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const docItems = [
  { title: "Getting Started", detail: "Install, configure, and render your first trap." },
  { title: "Trap Patterns", detail: "Apply reveal, focus, dock, and scroll lock compositions." },
  { title: "Design System", detail: "Token guidance, spacing rules, and motion consistency." },
];

export function DocumentationPreview() {
  return (
    <Section
      id="documentation"
      eyebrow="Documentation"
      title="Documentation-style layout for fast onboarding"
      description="Navigate patterns quickly and move from concept to implementation without friction."
    >
      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <Card>
          <CardHeader>
            <Badge tone="success" className="w-fit">Guided docs flow</Badge>
            <CardTitle>Structured for teams and solo developers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {docItems.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.detail}</p>
              </article>
            ))}
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Resource Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/patterns" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
              Pattern registry
            </Link>
            <Link href="/system" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
              System playground
            </Link>
            <Link href="/about" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
              Team + mission
            </Link>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
