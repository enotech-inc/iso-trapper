import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { IsoTrapperLayout } from "../components/iso/IsoTrapperLayout";
import { IsoZone } from "../components/iso/IsoZone";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { BaseDialog } from "../components/ui/dialog";
import { Tabs } from "../components/ui/tabs";
import { Toast } from "../components/ui/toast";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Iso Trapper UI Framework</title>
        <meta
          name="description"
          content="Iso Trapper dashboard showcasing zoned isometric layout and reusable zone components."
        />
      </Head>
      <IsoTrapperLayout
        navigation={
          // Navigation zone: dark, anchored surface to keep routing decisions isolated.
          <IsoZone variant="navigation" className="flex h-full flex-col gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Iso Trapper
              </p>
              <h1 className="mt-3 text-2xl font-semibold">Control Hub</h1>
              <p className="mt-2 text-sm text-white/70">
                Primary routes stay contained here to reduce cognitive load.
              </p>
            </div>
            <nav className="flex flex-col gap-3 text-sm">
              {[
                "Overview",
                "Zone Library",
                "Telemetry",
                "Automation",
                "Settings",
              ].map((item) => (
                <button
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-white/80 transition hover:bg-white/10"
                >
                  <span>{item}</span>
                  <Badge tone="accent" className="bg-white/10 text-white">
                    Live
                  </Badge>
                </button>
              ))}
            </nav>
            <Card className="border-white/10 bg-white/5 text-white">
              <CardHeader>
                <CardTitle className="text-white">Zone Health</CardTitle>
                <CardDescription className="text-white/70">
                  Iso layers in sync.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-white/70">
                <div className="flex items-center justify-between">
                  <span>Navigation</span>
                  <span className="text-emerald-300">Stable</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Action</span>
                  <span className="text-emerald-300">Stable</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Content</span>
                  <span className="text-amber-300">Warming</span>
                </div>
              </CardContent>
            </Card>
          </IsoZone>
        }
        action={
          // Action zone: elevated bar for commands and filters, keeping actions scoped.
          <IsoZone variant="action" className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Action Zone
                </p>
                <h2 className="mt-2 text-xl font-semibold">
                  Iso Trapper Command Deck
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="secondary">Generate Report</Button>
                <Button onClick={() => setOpen(true)}>Open Dialog</Button>
              </div>
            </div>
            <Tabs
              tabs={[
                { label: "Today", value: "today" },
                { label: "Week", value: "week" },
                { label: "Month", value: "month" },
                { label: "Quarter", value: "quarter" },
              ]}
              active="week"
            />
          </IsoZone>
        }
        content={
          // Content zone: layered cards and data tables with depth to guide scanning.
          <IsoZone variant="content" className="space-y-6">
            <Card className="overflow-hidden border-slate-200/70 bg-white">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-5 p-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Launch Ready
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
                      Build a landing page hero that makes your value impossible
                      to ignore.
                    </h2>
                    <p className="text-base text-slate-600 md:text-lg">
                      Capture attention in seconds with a bold headline, a clear
                      promise, and a call to action that feels effortless to
                      say yes to.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button className="px-6 py-3 text-base">
                      Start Your Free Preview
                    </Button>
                    <Button variant="ghost" className="text-slate-600">
                      See it in action
                    </Button>
                  </div>
                </div>
                <div className="relative flex flex-col justify-between gap-6 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 p-8 text-white">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                      Design cues
                    </p>
                    <h3 className="text-xl font-semibold">
                      Suggested visual direction
                    </h3>
                    <p className="text-sm text-white/70">
                      Pair the hero copy with a cinematic gradient backdrop and
                      plenty of negative space so the headline can breathe.
                    </p>
                  </div>
                  <div className="space-y-4 text-sm text-white/80">
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                      <p className="font-semibold text-white">Background</p>
                      <p>
                        Soft gradient or blurred cityscape image with a dark
                        overlay for contrast.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                      <p className="font-semibold text-white">Typography</p>
                      <p>
                        Use a confident geometric sans-serif with generous line
                        height and tight letter spacing on the headline.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                      <p className="font-semibold text-white">Layout</p>
                      <p>
                        Keep the CTA above the fold with a contrasting button
                        color and a subtle hover glow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Active Pipelines",
                  value: "18",
                  detail: "+6 this week",
                  tone: "success" as const,
                },
                {
                  title: "Queued Builds",
                  value: "42",
                  detail: "2 flagged",
                  tone: "warning" as const,
                },
                {
                  title: "Support Tickets",
                  value: "9",
                  detail: "Auto-prioritized",
                  tone: "accent" as const,
                },
              ].map((metric) => (
                <Card key={metric.title} className="p-5">
                  <CardHeader>
                    <CardDescription>{metric.title}</CardDescription>
                    <CardTitle className="text-3xl font-semibold">
                      {metric.value}
                    </CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <Badge tone={metric.tone}>{metric.detail}</Badge>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Zone Activity</CardTitle>
                  <CardDescription>
                    Workloads aligned to their Iso layers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-2xl border border-slate-200/70">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-400">
                        <tr>
                          <th className="px-4 py-3">Zone</th>
                          <th className="px-4 py-3">Owner</th>
                          <th className="px-4 py-3">Status</th>
                          <th className="px-4 py-3 text-right">Load</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            zone: "Navigation",
                            owner: "UI Systems",
                            status: "Stable",
                            load: "68%",
                          },
                          {
                            zone: "Action",
                            owner: "Ops",
                            status: "Optimized",
                            load: "54%",
                          },
                          {
                            zone: "Content",
                            owner: "Experience",
                            status: "Calibrating",
                            load: "72%",
                          },
                        ].map((row) => (
                          <tr
                            key={row.zone}
                            className="border-t border-slate-200/70 text-slate-600"
                          >
                            <td className="px-4 py-3 font-semibold text-slate-900">
                              {row.zone}
                            </td>
                            <td className="px-4 py-3">{row.owner}</td>
                            <td className="px-4 py-3">
                              <Badge tone="neutral">{row.status}</Badge>
                            </td>
                            <td className="px-4 py-3 text-right font-semibold">
                              {row.load}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col justify-between p-6">
                <CardHeader>
                  <CardTitle>The Idea Forge</CardTitle>
                  <CardDescription>
                    A practical guide to turning sparks into original concepts.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-slate-600">
                  <p>
                    Creativity starts with input. Fill your mind with diverse
                    materials, then let them mix. A walk, a new playlist, or a
                    conversation outside your field can become the unexpected
                    bridge your brain needs.
                  </p>
                  <div className="rounded-xl border border-slate-200/70 px-4 py-3">
                    <p className="font-semibold text-slate-700">
                      Three moves that unlock fresh ideas
                    </p>
                    <ul className="mt-2 space-y-2">
                      <li>
                        <span className="font-semibold text-slate-700">
                          Reframe the question:
                        </span>{" "}
                        Ask “What if the opposite were true?” or “How would a
                        child solve this?”
                      </li>
                      <li>
                        <span className="font-semibold text-slate-700">
                          Make tiny prototypes:
                        </span>{" "}
                        Sketch, outline, or storyboard before judging the
                        quality.
                      </li>
                      <li>
                        <span className="font-semibold text-slate-700">
                          Collect collisions:
                        </span>{" "}
                        Pair two unrelated notes and see what new shape
                        appears.
                      </li>
                    </ul>
                  </div>
                  <p>
                    Finally, protect the spark. Schedule short “idea sessions,”
                    keep a capture list, and share early drafts with someone
                    curious. Momentum builds when you treat ideas like seeds: a
                    little water today grows into something surprising tomorrow.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full">
                    Explore Creativity Rituals
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </IsoZone>
        }
        feedback={
          // Feedback zone: grounded rail for system status and alerts.
          <IsoZone variant="feedback" className="grid gap-4 lg:grid-cols-3">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                Feedback Zone
              </p>
              <h3 className="text-lg font-semibold">Status Stream</h3>
              <p className="text-sm text-white/70">
                Notifications live here so primary workflows stay focused.
              </p>
            </div>
            <Toast tone="success" className="lg:col-span-2">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">Deploy complete</p>
                  <p className="text-xs text-emerald-800/70">
                    Iso zones updated with latest layouts.
                  </p>
                </div>
                <Badge tone="success" className="bg-emerald-200/80">
                  2 min ago
                </Badge>
              </div>
            </Toast>
            <Toast tone="warning" className="lg:col-span-2">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">Attention needed</p>
                  <p className="text-xs text-amber-800/70">
                    Content zone queue at 72% capacity.
                  </p>
                </div>
                <Button variant="ghost" className="text-amber-900">
                  Review
                </Button>
              </div>
            </Toast>
          </IsoZone>
        }
      />
      <BaseDialog
        open={open}
        onClose={setOpen}
        title="Iso Trapper Dialog"
        description="Dialogs stay in the action zone to keep focus centered."
      >
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            Use dialogs sparingly to confirm intent while keeping the rest of the
            layout stable.
          </p>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        </div>
      </BaseDialog>
    </>
  );
};

export default Home;
