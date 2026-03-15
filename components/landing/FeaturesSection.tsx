import { Section } from "../layout/Section";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const features = [
  {
    icon: "⌁",
    title: "Composable trap primitives",
    description: "Mix reveal, dock, focus, and scroll-lock traps without rewriting interaction logic.",
  },
  {
    icon: "⚡",
    title: "Production-ready defaults",
    description: "Sensible motion presets, keyboard-safe focus behavior, and clear API ergonomics.",
  },
  {
    icon: "◫",
    title: "Spatial grid orchestration",
    description: "Coordinate depth layers and tile systems for consistent isometric experiences.",
  },
  {
    icon: "⌘",
    title: "Developer-first DX",
    description: "Clear docs, small APIs, and reusable recipes to accelerate onboarding.",
  },
  {
    icon: "♿",
    title: "Accessibility baseline",
    description: "Semantic HTML patterns, focus rings, ARIA labels, and color contrast-aware styles.",
  },
  {
    icon: "☁",
    title: "Vercel-ready deployment",
    description: "Optimized for Next.js routes and modern SaaS landing + docs architectures.",
  },
];

export function FeaturesSection() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      title="Everything needed to ship trap-based interfaces"
      description="Use modular building blocks to create modern documentation-driven product experiences."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <p className="text-2xl" aria-hidden="true">{feature.icon}</p>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
