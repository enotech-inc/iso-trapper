import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { Section } from "../components/layout/Section";
import { Shell } from "../components/layout/Shell";
import { TrapDebugHud } from "../components/traps/TrapDebugHud";
import { TrapFocusPath } from "../components/traps/TrapFocusPath";
import { TrapRevealTile } from "../components/traps/TrapRevealTile";
import { TrapScrollLockLane } from "../components/traps/TrapScrollLockLane";
import { useTrapContext } from "../components/traps/TrapProvider";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { trapRegistry } from "../lib/trapRegistry";

const Patterns: NextPage = () => {
  const { debug, setDebug } = useTrapContext();

  return (
    <Shell>
      <Head>
        <title>Iso Trapper · Trap Patterns</title>
        <meta
          name="description"
          content="Trap pattern definitions and interactive examples."
        />
      </Head>
      <Navbar onToggleDebug={() => setDebug(!debug)} debugEnabled={debug} />
      <TrapDebugHud />

      <Section
        eyebrow="Trap Patterns"
        title="Explain and rehearse each trap"
        description="Each pattern includes an explanation, interaction states, and a working demo."
      >
        <div className="space-y-10">
          <Card>
            <CardHeader>
              <CardTitle>Pattern overview</CardTitle>
            </CardHeader>
            <CardContent>
              {trapRegistry.map((trap) => (
                <div
                  key={trap.trapId}
                  className="border-b border-[color:var(--border)] py-3 last:border-b-0"
                >
                  <p className="font-semibold text-[color:var(--text-primary)]">
                    {trap.title}
                  </p>
                  <p className="text-xs text-[color:var(--text-soft)]">
                    {trap.a11yNotes}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <TrapRevealTile />
          <TrapScrollLockLane />
          <TrapFocusPath />
        </div>
      </Section>

      <Footer />
    </Shell>
  );
};

export default Patterns;
