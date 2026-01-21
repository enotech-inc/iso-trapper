import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "../components/layout/Footer";
import { Section } from "../components/layout/Section";
import { Shell } from "../components/layout/Shell";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useTrapContext } from "../components/traps/TrapProvider";
import { fadeUp } from "../lib/motionPresets";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Pillars", href: "#pillars" },
  { label: "2026 Vision", href: "#vision" },
  { label: "Venture", href: "#venture" },
  { label: "Contact", href: "#contact" },
];

const focusAreas = [
  {
    title: "Brand Systems",
    summary: "Identity frameworks that scale with growth.",
    includes: ["Strategy", "Visual identity", "Guidelines"],
    outcome: "Consistent recognition and trust.",
  },
  {
    title: "Product Experience",
    summary: "UX that drives adoption and retention.",
    includes: ["User journeys", "UI systems", "Prototyping"],
    outcome: "Improved clarity and conversion.",
  },
  {
    title: "Software Delivery",
    summary: "MVP to production builds with confidence.",
    includes: ["Frontend", "Backend", "APIs"],
    outcome: "Reliable releases and maintainability.",
  },
  {
    title: "Venture Formation",
    summary: "From concept to business readiness.",
    includes: ["Validation", "Modeling", "GTM experiments"],
    outcome: "Investable direction and traction.",
  },
  {
    title: "Infrastructure & Systems",
    summary: "Integrations and operations that hold scale.",
    includes: ["Architecture", "Pipelines", "Automations"],
    outcome: "Resilience and operational clarity.",
  },
];

const pillars = [
  {
    id: "brand",
    title: "Brand & Identity",
    icon: "◆",
    intro:
      "Strategy-to-visual identity systems that make a brand coherent, recognizable, and scalable.",
    capabilities: [
      "Positioning & messaging systems",
      "Naming & brand architecture",
      "Visual identity + brand guidelines",
      "Templates, tone of voice, rollout planning",
    ],
    deliverables: [
      "Brand book / guidelines",
      "Identity assets + logo suite",
      "Messaging kit + templates",
    ],
    process: [
      "Discover context + audience",
      "Define positioning + narrative",
      "Design identity system",
      "Validate + refine",
      "Package + rollout",
    ],
    outcomes: "Consistent trust, clarity, and differentiation.",
    bestFor: ["Founders", "Rebrands", "New product lines"],
    deepDive: "Identity components: Positioning → Visual System → Messaging → Assets",
  },
  {
    id: "product",
    title: "Product Design",
    icon: "◇",
    intro:
      "UX-first design that turns complexity into usable, compelling product experiences.",
    capabilities: [
      "User flows + journeys",
      "Wireframes + prototypes",
      "UI systems + components",
      "Design systems (tokens + patterns)",
    ],
    deliverables: [
      "UX flows + prototypes",
      "UI kit + component spec",
      "Design system baseline",
    ],
    process: [
      "Understand users + jobs-to-be-done",
      "Map flows",
      "Prototype quickly",
      "Validate + iterate",
      "Final UI + system packaging",
    ],
    outcomes: "Higher adoption, reduced friction, stronger retention.",
    bestFor: ["SaaS", "Marketplaces", "Platform redesigns"],
    deepDive: "Journey story mode: Problem → Flow → Solution → Outcome",
  },
  {
    id: "software",
    title: "Software Development",
    icon: "▲",
    intro:
      "Building production-ready software from MVP to scalable platforms.",
    capabilities: [
      "Frontend + backend development",
      "APIs + integrations",
      "Testing + reliability practices",
      "Deployment pipelines (CI/CD)",
    ],
    deliverables: [
      "Deployed application",
      "API documentation",
      "Release checklist + monitoring baseline",
    ],
    process: [
      "Plan architecture",
      "Build core features",
      "Integrate & test",
      "Launch + stabilize",
      "Iterate for scale",
    ],
    outcomes: "Faster delivery with maintainable architecture.",
    bestFor: ["MVPs", "Scaling teams", "Platform rebuilds"],
    deepDive: "Build modes: MVP → Growth → Enterprise",
  },
  {
    id: "venture",
    title: "Venture Incubation",
    icon: "●",
    intro:
      "Structured venture building: validate, launch, learn, and scale.",
    capabilities: [
      "Venture thesis + positioning",
      "Validation + experiments + metrics",
      "GTM strategy + partnerships",
      "Operational scaffolding for growth",
    ],
    deliverables: [
      "Venture thesis + roadmap",
      "Experiment plan + KPI framework",
      "Pitch narrative outline",
    ],
    process: [
      "Thesis + market framing",
      "Validation experiments",
      "MVP launch",
      "Traction systems",
      "Scale strategy",
    ],
    outcomes: "A clear path to traction and repeatable growth.",
    bestFor: ["Internal ventures", "Spinouts", "Ambitious founders"],
    deepDive: "Incubation timeline: Thesis → Validate → Launch → Traction → Scale",
  },
  {
    id: "systems",
    title: "Systems Infrastructure",
    icon: "■",
    intro:
      "The systems layer that makes product and operations scalable and reliable.",
    capabilities: [
      "Architecture planning",
      "Integrations + data flows",
      "Automations + operational tooling",
      "Observability basics (logging/monitoring)",
    ],
    deliverables: [
      "Infrastructure plan",
      "Integration map",
      "Reliability checklist + ops baseline",
    ],
    process: [
      "Assess current systems",
      "Design integration map",
      "Implement automations",
      "Harden reliability",
      "Monitor + iterate",
    ],
    outcomes: "Performance, resilience, operational clarity.",
    bestFor: ["Scaling ops", "Complex stacks", "Data-heavy products"],
    deepDive: "Systems map: Payments ↔ Product ↔ Analytics ↔ Support ↔ Ops tools",
  },
];

const lifecycle = [
  "Discover — context, constraints, goals",
  "Define — scope, strategy, success metrics",
  "Design — UX/UI + prototypes",
  "Develop — build + iterate",
  "Deploy & Grow — launch, measure, improve",
];

const engagementTypes = [
  {
    title: "Sprint-based builds",
    detail: "Focused, time-bound delivery for a clear milestone.",
  },
  {
    title: "Retainer",
    detail: "Ongoing improvements and optimization after launch.",
  },
  {
    title: "Venture partnership",
    detail: "Incubation with shared upside and long-term commitment.",
  },
];

const roadmapObjectives = [
  {
    title: "Studio capability expansion",
    intent: "Deepen craft in brand, product, and engineering with reusable systems.",
    initiatives: [
      "Grow specialist pods",
      "Standardize delivery playbooks",
      "Expand research toolkit",
    ],
    metrics: ["Cycle time", "Client NPS", "Reusable module count"],
    outcomes: ["Faster delivery", "Higher quality", "More consistent outcomes"],
    lens: ["Studio"],
  },
  {
    title: "Venture pipeline development",
    intent: "Build a repeatable funnel for validating new ventures.",
    initiatives: [
      "Thesis library",
      "Experiment templates",
      "Launch calendar",
    ],
    metrics: ["Validation rate", "Launch velocity", "Active ventures"],
    outcomes: ["More signals", "Clearer traction paths"],
    lens: ["Ventures"],
  },
  {
    title: "Systems maturity + infrastructure readiness",
    intent: "Harden infrastructure so products can scale without friction.",
    initiatives: ["Observability baseline", "Automation backlog", "Data flow map"],
    metrics: ["Incident rate", "Automation coverage"],
    outcomes: ["Operational resilience", "Predictable performance"],
    lens: ["Systems"],
  },
  {
    title: "Partnerships + distribution",
    intent: "Strengthen networks that compound reach and distribution.",
    initiatives: ["Strategic partner list", "Co-build pilots", "Channel tests"],
    metrics: ["Partner activations", "Pipeline influence"],
    outcomes: ["Broader reach", "Shared momentum"],
    lens: ["Studio", "Ventures"],
  },
  {
    title: "Brand authority + presence",
    intent: "Make Iso Trapper visible through content and signals of craft.",
    initiatives: ["Publish field notes", "Showcase case studies", "Event presence"],
    metrics: ["Inbound interest", "Content engagement"],
    outcomes: ["Clear positioning", "Increased trust"],
    lens: ["Studio"],
  },
];

const ventureChecklist = [
  "Problem clarity",
  "Market signal",
  "Product readiness",
  "Distribution plan",
  "Systems readiness",
  "Metrics baseline",
];

const ventureComparison = [
  {
    title: "Studio project",
    detail: "Deliverable-focused with a defined scope and timeline.",
  },
  {
    title: "Venture",
    detail: "Business-building with validation, systems, and growth focus.",
  },
];

const proofSignals = [
  {
    title: "Shipping mindset",
    detail: "We prioritize momentum over perfection to get signal fast.",
  },
  {
    title: "Systems-first",
    detail: "Every engagement includes operational and technical scaffolding.",
  },
  {
    title: "Cross-discipline teams",
    detail: "Brand, product, and engineering move in one loop.",
  },
];

const Home: NextPage = () => {
  const { reducedMotion } = useTrapContext();
  const [activePillar, setActivePillar] = useState(pillars[0]);
  const [showDiagram, setShowDiagram] = useState(false);
  const [showNot, setShowNot] = useState(false);
  const [compareMode, setCompareMode] = useState(false);
  const [pathMode, setPathMode] = useState<"client" | "venture">("client");
  const [visionFilter, setVisionFilter] = useState<
    "All" | "Studio" | "Ventures" | "Systems"
  >("All");
  const [visionDetail, setVisionDetail] = useState(false);
  const [readiness, setReadiness] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const storedTheme =
      typeof window !== "undefined"
        ? window.localStorage.getItem("iso-theme")
        : null;
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      return;
    }
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("iso-theme", theme);
  }, [theme]);

  const filteredObjectives = useMemo(() => {
    if (visionFilter === "All") {
      return roadmapObjectives;
    }
    return roadmapObjectives.filter((objective) =>
      objective.lens.includes(visionFilter)
    );
  }, [visionFilter]);

  const handleChecklistToggle = (item: string) => {
    setReadiness((prev) =>
      prev.includes(item)
        ? prev.filter((entry) => entry !== item)
        : [...prev, item]
    );
  };

  const handleCopy = async () => {
    const summary =
      "We build ventures and digital systems that move ideas into real-world momentum.";
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Shell>
      <Head>
        <title>Iso Trapper · Creative Technology Studio & Venture Builder</title>
        <meta
          name="description"
          content="Iso Trapper is a creative technology studio and venture builder turning ideas into brands, products, software, and scalable systems."
        />
      </Head>

      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-6 focus:z-50 focus:rounded-full focus:bg-[color:var(--surface)] focus:px-4 focus:py-2 focus:text-sm focus:text-[color:var(--text-primary)]"
      >
        Skip to content
      </a>

      <header className="sticky top-6 z-40 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-card-strong)] backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link className="flex items-center gap-3" href="/">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-sm font-semibold text-white">
              IT
            </span>
            <div>
              <p className="text-sm font-semibold text-[color:var(--text-primary)]">Iso Trapper</p>
              <p className="text-xs text-[color:var(--text-soft)]">
                Creative technology studio + venture builder
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </Button>
            <Link href="#pillars" className="inline-flex">
              <Button size="sm" className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-hover)]">
                Explore the Studio
              </Button>
            </Link>
            <Link href="#vision" className="inline-flex">
              <Button size="sm" variant="secondary">
                View 2026 Vision
              </Button>
            </Link>
          </div>
        </div>
        <nav aria-label="Primary" className="mt-4">
          <ul className="flex flex-wrap gap-3 text-sm font-semibold text-[color:var(--text-muted)]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="rounded-full border border-transparent px-4 py-2 transition hover:border-[color:var(--accent)] hover:bg-[color:var(--surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="content" className="space-y-20">
        <Section
          id="overview"
          eyebrow="Iso Trapper"
          title="A creative technology studio and venture builder."
          description="We design brands, products, and software — and incubate ventures with systems that scale."
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={reducedMotion ? false : fadeUp.initial}
              whileInView={reducedMotion ? undefined : fadeUp.animate}
              transition={reducedMotion ? { duration: 0 } : fadeUp.transition}
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-semibold text-[color:var(--text-primary)] md:text-5xl">
                Iso Trapper
              </h1>
              <p className="text-base text-[color:var(--text-muted)] md:text-lg">
                We build ventures and digital systems that move ideas into real-world
                momentum.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#pillars" className="inline-flex">
                  <Button size="lg" className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-hover)]">
                    Explore the Studio
                  </Button>
                </Link>
                <Link href="#vision" className="inline-flex">
                  <Button variant="secondary" size="lg">
                    View 2026 Vision
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "5 Pillars",
                  "Studio + Venture",
                  "2026: Foundation to Force",
                ].map((item) => (
                  <Badge key={item} tone="neutral">
                    {item}
                  </Badge>
                ))}
              </div>
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-soft)]">
                Scroll to explore ↓
              </p>
            </motion.div>
            <Card className="border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-primary)]">
              <CardHeader>
                <CardTitle className="text-[color:var(--text-primary)]">What Iso Trapper is</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-[color:var(--text-muted)]">
                <p>
                  Iso Trapper is a creative technology studio and venture builder
                  that turns ideas into brands, products, and scalable systems,
                  then evolves them into ventures.
                </p>
                <ul className="space-y-2">
                  <li>• Build identity and trust (brand systems)</li>
                  <li>• Design product experiences (UX/UI)</li>
                  <li>• Ship software and infrastructure (delivery + systems)</li>
                </ul>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setShowNot((prev) => !prev)}
                    className="text-left text-sm font-semibold text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    aria-expanded={showNot}
                  >
                    {showNot ? "Hide" : "Show"} what we’re not
                  </button>
                  {showNot ? (
                    <ul className="space-y-2 text-[color:var(--text-soft)]">
                      <li>• Not just an agency.</li>
                      <li>• Not just dev outsourcing.</li>
                      <li>• Not just ideation — we build and scale.</li>
                    </ul>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => setShowDiagram((prev) => !prev)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  aria-pressed={showDiagram}
                >
                  {showDiagram ? "Hide" : "View"} as diagram
                </button>
                {showDiagram ? (
                  <p className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-3 text-xs text-[color:var(--text-muted)]">
                    Studio → Products → Ventures → Systems
                  </p>
                ) : null}
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section
          eyebrow="Core Focus"
          title="The foundational lenses we apply to every engagement"
          description="Five focus areas shape how we diagnose, design, and build. Toggle compare mode to see them side by side."
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-[color:var(--text-soft)]">
              Build clarity fast, then scale with systems.
            </p>
            <button
              type="button"
              onClick={() => setCompareMode((prev) => !prev)}
              className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)] transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-pressed={compareMode}
            >
              Compare mode
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <Card
                key={area.title}
                className={`border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-primary)] transition ${
                  compareMode ? "ring-1 ring-indigo-400/60" : ""
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-[color:var(--text-primary)]">{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-[color:var(--text-muted)]">
                  <p>{area.summary}</p>
                  <ul className="space-y-1 text-xs text-[color:var(--text-soft)]">
                    {area.includes.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                  <p className="text-xs font-semibold text-[color:var(--accent)]">
                    Outcome: {area.outcome}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="pillars"
          eyebrow="Service Pillars"
          title="Five ways we deliver clarity, craft, and scale"
          description="Switch between pillars to explore capabilities, deliverables, and outcomes with progressive detail."
        >
          <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
            <div className="space-y-3">
              {pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillar(pillar)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    activePillar.id === pillar.id
                      ? "border-[color:var(--accent)] bg-[color:var(--accent-soft)] text-[color:var(--text-primary)]"
                      : "border-[color:var(--border)] bg-[color:var(--surface-muted)] text-[color:var(--text-muted)] hover:border-[color:var(--accent)]"
                  }`}
                  aria-pressed={activePillar.id === pillar.id}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg text-[color:var(--accent)]">
                      {pillar.icon}
                    </span>
                    {pillar.title}
                  </span>
                  <span className="text-xs text-[color:var(--text-soft)]">View →</span>
                </button>
              ))}
            </div>
            <Card className="border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-primary)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-[color:var(--text-primary)]">
                  <span className="text-lg text-[color:var(--accent)]">
                    {activePillar.icon}
                  </span>
                  {activePillar.title}
                </CardTitle>
                <p className="text-sm text-[color:var(--text-muted)]">{activePillar.intro}</p>
              </CardHeader>
              <CardContent className="grid gap-6 text-sm text-[color:var(--text-muted)] lg:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-soft)]">
                    What we do
                  </h3>
                  <ul className="space-y-2">
                    {activePillar.capabilities.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-soft)]">
                    Deliverables
                  </h3>
                  <ul className="space-y-2">
                    {activePillar.deliverables.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-soft)]">
                    Process snapshot
                  </h3>
                  <ol className="space-y-2">
                    {activePillar.process.map((item, index) => (
                      <li key={item}>
                        {index + 1}. {item}
                      </li>
                    ))}
                  </ol>
                  <p className="text-sm font-semibold text-[color:var(--accent)]">
                    Outcomes: {activePillar.outcomes}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activePillar.bestFor.map((tag) => (
                      <Badge key={tag} tone="accent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <details className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-3">
                    <summary className="cursor-pointer text-sm font-semibold text-[color:var(--accent)]">
                      Deep dive
                    </summary>
                    <p className="mt-2 text-xs text-[color:var(--text-muted)]">
                      {activePillar.deepDive}
                    </p>
                  </details>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section
          eyebrow="How We Work"
          title="A five-stage lifecycle with flexible engagement models"
          description="We move from discovery to launch with shared visibility and measurable outcomes."
        >
          <div className="grid gap-6 lg:grid-cols-[0.6fr_0.4fr]">
            <Card className="border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-primary)]">
              <CardHeader>
                <CardTitle className="text-[color:var(--text-primary)]">Lifecycle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-[color:var(--text-muted)]">
                <ol className="space-y-2">
                  {lifecycle.map((step, index) => (
                    <li key={step}>
                      {index + 1}. {step}
                    </li>
                  ))}
                </ol>
                <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-soft)]">
                    Choose your path
                  </p>
                  <div className="mt-3 flex gap-2">
                    {["client", "venture"].map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setPathMode(mode as "client" | "venture")}
                        className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                          pathMode === mode
                            ? "bg-[color:var(--accent)] text-white"
                            : "border border-[color:var(--border)] text-[color:var(--text-muted)]"
                        }`}
                        aria-pressed={pathMode === mode}
                      >
                        {mode} build
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-[color:var(--text-muted)]">
                    {pathMode === "client"
                      ? "Client builds emphasize scoped delivery, rapid momentum, and handoff support."
                      : "Venture builds focus on validation loops, growth systems, and shared upside."}
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-4">
              {engagementTypes.map((item) => (
                <Card
                  key={item.title}
                  className="border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-primary)]"
                >
                  <CardHeader>
                    <CardTitle className="text-[color:var(--text-primary)]">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-[color:var(--text-muted)]">
                    {item.detail}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="vision"
          eyebrow="2026 Forecast"
          title="Foundation to Force"
          description="2026 is about strengthening core systems (Foundation) and converting them into scalable execution power (Force)."
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {["All", "Studio", "Ventures", "Systems"].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setVisionFilter(filter as typeof visionFilter)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    visionFilter === filter
                      ? "bg-[color:var(--accent)] text-white"
                      : "border border-[color:var(--border)] text-[color:var(--text-muted)]"
                  }`}
                  aria-pressed={visionFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setVisionDetail((prev) => !prev)}
              className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)] transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-pressed={visionDetail}
            >
              {visionDetail ? "High-level" : "Detailed"}
            </button>
          </div>
          <div className="space-y-4">
            {filteredObjectives.map((objective) => (
              <details
                key={objective.title}
                className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-[color:var(--text-primary)]"
              >
                <summary className="cursor-pointer text-base font-semibold text-[color:var(--text-primary)]">
                  {objective.title}
                </summary>
                <p className="mt-3 text-sm text-[color:var(--text-muted)]">{objective.intent}</p>
                {visionDetail ? (
                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
                        Initiatives
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-[color:var(--text-muted)]">
                        {objective.initiatives.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
                        Success indicators
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-[color:var(--text-muted)]">
                        {objective.metrics.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
                        Outcomes
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-[color:var(--text-muted)]">
                        {objective.outcomes.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </details>
            ))}
          </div>
        </Section>

        <Section
          id="venture"
          eyebrow="Definition"
          title="What “venture” means at Iso Trapper"
          description="A venture at Iso Trapper is a product-led business initiative designed to scale, validated by real usage, structured operations, and repeatable growth."
        >
          <div className="grid gap-6 lg:grid-cols-[0.6fr_0.4fr]">
            <Card className="border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-primary)]">
              <CardHeader>
                <CardTitle className="text-[color:var(--text-primary)]">Venture readiness</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-[color:var(--text-muted)]">
                <p>Toggle the checkpoints to see what we look for.</p>
                <div className="grid gap-2">
                  {ventureChecklist.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleChecklistToggle(item)}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                        readiness.includes(item)
                          ? "border-[color:var(--accent)] bg-[color:var(--accent-soft)] text-[color:var(--text-primary)]"
                          : "border-[color:var(--border)] bg-[color:var(--surface-strong)] text-[color:var(--text-muted)]"
                      }`}
                      aria-pressed={readiness.includes(item)}
                    >
                      <span>{item}</span>
                      <span className="text-xs text-[color:var(--text-soft)]">
                        {readiness.includes(item) ? "Ready" : "Pending"}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="space-y-4">
              {ventureComparison.map((item) => (
                <Card
                  key={item.title}
                  className="border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-primary)]"
                >
                  <CardHeader>
                    <CardTitle className="text-[color:var(--text-primary)]">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-[color:var(--text-muted)]">
                    {item.detail}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Shareable"
          title="We build ventures and digital systems that move ideas into real-world momentum."
          description="Use the one-line summary when you need to explain Iso Trapper fast."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={handleCopy} className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-hover)]">
              Copy one-line summary
            </Button>
            {copied ? (
              <span className="text-sm font-semibold text-[color:var(--accent)]">
                Copied to clipboard.
              </span>
            ) : null}
          </div>
        </Section>

        <Section
          eyebrow="Signals"
          title="Proof that we ship with intention"
          description="We keep proof lightweight and focused on principles until deeper case studies are ready."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {proofSignals.map((item) => (
              <Card
                key={item.title}
                className="border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-primary)]"
              >
                <CardHeader>
                  <CardTitle className="text-[color:var(--text-primary)]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[color:var(--text-muted)]">
                  {item.detail}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Ready to build?"
          description="Start a project, discuss a venture, or request the overview deck."
        >
          <div className="grid gap-6 lg:grid-cols-[0.55fr_0.45fr]">
            <Card className="border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-primary)]">
              <CardHeader>
                <CardTitle className="text-[color:var(--text-primary)]">Start a conversation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-[color:var(--text-muted)]">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-xs text-[color:var(--text-soft)]">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-3 text-sm text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-xs text-[color:var(--text-soft)]">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-3 text-sm text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="interest"
                      className="text-xs text-[color:var(--text-soft)]"
                    >
                      Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-3 text-sm text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a pillar
                      </option>
                      {pillars.map((pillar) => (
                        <option key={pillar.id} value={pillar.title}>
                          {pillar.title}
                        </option>
                      ))}
                      <option value="partnership">Venture partnership</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-xs text-[color:var(--text-soft)]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-3 text-sm text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                      placeholder="Tell us about your project or venture."
                    />
                  </div>
                  <Button type="submit" className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-hover)]">
                    Start a project
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <Card className="border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-primary)]">
                <CardHeader>
                  <CardTitle className="text-[color:var(--text-primary)]">Primary CTAs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-[color:var(--text-muted)]">
                  <Button className="w-full bg-[color:var(--accent)] hover:bg-[color:var(--accent-hover)]">
                    Start a project
                  </Button>
                  <Button className="w-full" variant="secondary">
                    Discuss a venture
                  </Button>
                  <Button
                    className="w-full text-[color:var(--text-primary)] hover:bg-[color:var(--surface-muted)]"
                    variant="ghost"
                  >
                    Request the overview deck
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-primary)]">
                <CardHeader>
                  <CardTitle className="text-[color:var(--text-primary)]">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-[color:var(--text-muted)]">
                  <p>Email: hello@isotrapper.com</p>
                  <p>LinkedIn: /company/isotrapper</p>
                  <p>Installable PWA (offline-ready soon)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </Shell>
  );
};

export default Home;
