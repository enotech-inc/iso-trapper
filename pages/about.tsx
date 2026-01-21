import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { Section } from "../components/layout/Section";
import { Shell } from "../components/layout/Shell";
import { TrapDebugHud } from "../components/traps/TrapDebugHud";
import { useTrapContext } from "../components/traps/TrapProvider";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const About: NextPage = () => {
  const { debug, setDebug } = useTrapContext();

  return (
    <Shell>
      <Head>
        <title>Iso Trapper · Philosophy</title>
        <meta name="description" content="Iso Trapper philosophy and story." />
      </Head>
      <Navbar onToggleDebug={() => setDebug(!debug)} debugEnabled={debug} />
      <TrapDebugHud />

      <Section
        eyebrow="Philosophy"
        title="Why Iso Trapper exists"
        description="Iso Trapper explores spatial UI as a storytelling tool. The system treats every interaction as a trap that reveals the next layer of intent."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Spatial empathy",
              detail:
                "Depth cues help users predict where information will surface next, reducing cognitive load.",
            },
            {
              title: "Modular evolution",
              detail:
                "Tiles, lanes, and panels can be recomposed quickly without losing consistent interaction rules.",
            },
            {
              title: "Intent-driven traps",
              detail:
                "Traps respond to signals (hover, scroll, focus) to reveal contextual details at the right moment.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>{item.detail}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Principles"
        title="Design principles"
        description="Balance experimentation with accessibility, clarity, and performance."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Respect reduced motion",
              detail:
                "Trap modules check user preferences and provide manual overrides for motion intensity.",
            },
            {
              title: "Keyboard-first interaction",
              detail:
                "Grid navigation and focus traps include roving tabindex and visible focus rings.",
            },
            {
              title: "No layout shift",
              detail:
                "Docked panels reserve space to keep the spatial grid stable during transitions.",
            },
            {
              title: "Progressive disclosure",
              detail:
                "Information reveals step by step, ensuring context stays digestible.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>{item.detail}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Footer />
    </Shell>
  );
};

export default About;
