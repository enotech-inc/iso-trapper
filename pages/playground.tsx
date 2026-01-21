import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { Section } from "../components/layout/Section";
import { Shell } from "../components/layout/Shell";
import { TrapDebugHud } from "../components/traps/TrapDebugHud";
import { useTrapContext } from "../components/traps/TrapProvider";

const TrapRevealTile = dynamic(
  () =>
    import("../components/traps/TrapRevealTile").then(
      (module) => module.TrapRevealTile
    ),
  {
    loading: () => (
      <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-sm text-[color:var(--text-soft)]">
        Loading Trap Reveal Tile...
      </div>
    ),
    ssr: false,
  }
);

const TrapScrollLockLane = dynamic(
  () =>
    import("../components/traps/TrapScrollLockLane").then(
      (module) => module.TrapScrollLockLane
    ),
  {
    loading: () => (
      <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-sm text-[color:var(--text-soft)]">
        Loading Trap Scroll Lock Lane...
      </div>
    ),
    ssr: false,
  }
);

const TrapFocusPath = dynamic(
  () =>
    import("../components/traps/TrapFocusPath").then(
      (module) => module.TrapFocusPath
    ),
  {
    loading: () => (
      <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-sm text-[color:var(--text-soft)]">
        Loading Trap Focus Path...
      </div>
    ),
    ssr: false,
  }
);

const Playground: NextPage = () => {
  const { debug, setDebug } = useTrapContext();

  return (
    <Shell>
      <Head>
        <title>Iso Trapper · Playground</title>
        <meta
          name="description"
          content="Interactive trap modules for Iso Trapper."
        />
      </Head>
      <Navbar onToggleDebug={() => setDebug(!debug)} debugEnabled={debug} />
      <TrapDebugHud />

      <Section
        eyebrow="Interactive Demos"
        title="Play with trap modules"
        description="Each module is a working demo with state indicators, reduced motion toggles, and reset controls."
      >
        <div className="space-y-10">
          <div id="reveal" className="scroll-mt-24">
            <TrapRevealTile />
          </div>
          <div id="scroll" className="scroll-mt-24">
            <TrapScrollLockLane />
          </div>
          <div id="focus" className="scroll-mt-24">
            <TrapFocusPath />
          </div>
        </div>
      </Section>

      <Footer />
    </Shell>
  );
};

export default Playground;
