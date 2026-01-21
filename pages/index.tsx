import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { Section } from "../components/layout/Section";
import { Shell } from "../components/layout/Shell";
import { DepthLayer } from "../components/iso/DepthLayer";
import { IsoGrid } from "../components/iso/IsoGrid";
import { IsoPanel } from "../components/iso/IsoPanel";
import { IsoTile } from "../components/iso/IsoTile";
import { TrapDebugHud } from "../components/traps/TrapDebugHud";
import { useTrapContext } from "../components/traps/TrapProvider";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { fadeUp } from "../lib/motionPresets";

const Home: NextPage = () => {
  const { debug, setDebug, reducedMotion } = useTrapContext();

  return (
    <Shell>
      <Head>
        <title>Iso Trapper · Spatial UI Lab</title>
        <meta
          name="description"
          content="Iso Trapper is a spatial UI playground showcasing isometric layouts and trap-based interactions."
        />
      </Head>
      <Navbar onToggleDebug={() => setDebug(!debug)} debugEnabled={debug} />
      <TrapDebugHud />

      <Section
        eyebrow="Concept"
        title="Isometric surfaces with trap-based interactions"
        description="Iso Trapper is a living UI lab where tiles, panels, and lanes behave like spatial nodes. Hover, scroll, and focus to reveal context, pin details, and route paths across the grid."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <DepthLayer className="space-y-6 p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="accent">Trap registry active</Badge>
              <Badge tone="neutral">Depth layer: 02</Badge>
            </div>
            <h1 className="text-3xl font-semibold text-white md:text-4xl">
              Build modular, isometric UI systems that respond to intent.
            </h1>
            <p className="text-sm text-slate-300 md:text-base">
              Combine 2.5D grids with adaptive traps to create playful, functional
              interfaces. Each module ships with accessible states, motion
              presets, and a registry-first architecture.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">Enter playground</Button>
              <Link href="/system" className="inline-flex">
                <Button variant="secondary" size="lg">
                  View system docs
                </Button>
              </Link>
            </div>
          </DepthLayer>
          <IsoPanel className="overflow-hidden">
            <IsoGrid columns={2} className="bg-transparent p-0 shadow-none">
              {[
                "Trap Reveal",
                "Scroll Lock",
                "Focus Path",
                "Docked Panel",
              ].map((label, index) => (
                <motion.div
                  key={label}
                  initial={reducedMotion ? false : fadeUp.initial}
                  whileInView={reducedMotion ? undefined : fadeUp.animate}
                  transition={
                    reducedMotion
                      ? { duration: 0 }
                      : { ...fadeUp.transition, delay: index * 0.1 }
                  }
                  viewport={{ once: true, amount: 0.4 }}
                  className="-rotate-45"
                >
                  <IsoTile className="h-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
                    <span className="text-sm font-semibold text-white">
                      {label}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Spatial module
                    </span>
                  </IsoTile>
                </motion.div>
              ))}
            </IsoGrid>
          </IsoPanel>
        </div>
      </Section>

      <Section
        eyebrow="Trap Showcase"
        title="Preview the traps"
        description="Each trap module is a reusable component with a registry entry, motion presets, and a state machine-like reducer."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Trap Reveal Tile",
              detail: "Hover reveals metadata, click pins a docked panel.",
              href: "/playground#reveal",
            },
            {
              title: "Trap Scroll Lock Lane",
              detail: "Scroll locks a lane and unlocks steps in sequence.",
              href: "/playground#scroll",
            },
            {
              title: "Trap Focus Path",
              detail: "Keyboard focus highlights a connected node path.",
              href: "/playground#focus",
            },
          ].map((trap) => (
            <Card
              key={trap.title}
              className="border-slate-800 bg-slate-900/70 text-slate-200"
            >
              <CardHeader>
                <CardTitle className="text-white">{trap.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-300">
                <p>{trap.detail}</p>
                <Link href={trap.href} className="text-indigo-300">
                  See demo →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Architecture"
        title="Modular, accessible, performance-first"
        description="Trap modules are lazy-loaded, respect reduced motion, and maintain layout stability with docked panels and progress locks."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Trap registry",
              detail:
                "Each trap is defined by state transitions, events, and a11y notes for quick reference.",
            },
            {
              title: "Motion presets",
              detail:
                "Shared Framer Motion presets keep animation consistent and easy to disable.",
            },
            {
              title: "Spatial primitives",
              detail:
                "Tiles, panels, and depth layers combine into isometric layouts without heavy 3D.",
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="border-slate-800 bg-slate-900/70 p-6 text-slate-200"
            >
              <CardTitle className="text-white">{item.title}</CardTitle>
              <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Footer />
    </Shell>
  );
};

export default Home;
