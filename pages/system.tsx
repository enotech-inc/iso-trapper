import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { Section } from "../components/layout/Section";
import { Shell } from "../components/layout/Shell";
import { IsoGrid } from "../components/iso/IsoGrid";
import { IsoPanel } from "../components/iso/IsoPanel";
import { IsoTile } from "../components/iso/IsoTile";
import { TrapDebugHud } from "../components/traps/TrapDebugHud";
import { useTrapContext } from "../components/traps/TrapProvider";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { trapRegistry } from "../lib/trapRegistry";

const System: NextPage = () => {
  const { debug, setDebug } = useTrapContext();

  return (
    <Shell>
      <Head>
        <title>Iso Trapper · Design System</title>
        <meta name="description" content="Iso Trapper design system." />
      </Head>
      <Navbar onToggleDebug={() => setDebug(!debug)} debugEnabled={debug} />
      <TrapDebugHud />

      <Section
        eyebrow="Design System"
        title="Primitives, states, variants"
        description="Document the foundational pieces: tiles, panels, depth layers, and trap states."
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <IsoPanel className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="accent">Spatial primitives</Badge>
              <Badge tone="neutral">Grid: 3x3</Badge>
            </div>
            <IsoGrid columns={3} className="bg-transparent p-0 shadow-none">
              {["Tile", "Panel", "Lane", "Node", "Dock", "Path"].map((item) => (
                <div key={item} className="-rotate-45">
                  <IsoTile>{item}</IsoTile>
                </div>
              ))}
            </IsoGrid>
          </IsoPanel>
          <Card className="border-slate-800 bg-slate-900/70 text-slate-200">
            <CardHeader>
              <CardTitle className="text-white">Trap states</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-300">
              {[
                {
                  label: "Armed",
                  detail: "Ready to trigger on hover, focus, or scroll.",
                },
                {
                  label: "Triggered",
                  detail: "Active and revealing contextual metadata.",
                },
                {
                  label: "Pinned",
                  detail: "Docked state reserved in layout to prevent shift.",
                },
              ].map((state) => (
                <div
                  key={state.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {state.label}
                  </p>
                  <p className="text-xs text-slate-400">{state.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="Trap Registry"
        title="Registered modules"
        description="Keep trap definitions centralized for consistent UX and documentation."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {trapRegistry.map((trap) => (
            <Card
              key={trap.trapId}
              className="border-slate-800 bg-slate-900/70 text-slate-200"
            >
              <CardHeader>
                <CardTitle className="text-white">{trap.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300">
                <p>
                  <span className="text-xs uppercase text-slate-500">States</span>
                  <br />
                  {trap.states.join(" · ")}
                </p>
                <p>
                  <span className="text-xs uppercase text-slate-500">Events</span>
                  <br />
                  {trap.events.join(" · ")}
                </p>
                <p className="text-xs text-slate-400">{trap.a11yNotes}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Footer />
    </Shell>
  );
};

export default System;
