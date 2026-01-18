import type { NextPage } from "next";
import Head from "next/head";
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

const Home: NextPage = () => {
  const collections = [
    {
      title: "Onboarding flows",
      description: "Curated journeys from top product teams.",
      count: "1,240 screens",
    },
    {
      title: "Fintech dashboards",
      description: "Trusted layouts for money movement and clarity.",
      count: "860 screens",
    },
    {
      title: "Marketplace checkout",
      description: "Conversion-first patterns across platforms.",
      count: "940 screens",
    },
  ];

  const showcases = [
    {
      name: "Tidal",
      category: "Streaming · iOS",
      accent: "from-slate-900 via-slate-800 to-slate-700",
    },
    {
      name: "Linear",
      category: "Productivity · Web",
      accent: "from-indigo-900 via-indigo-700 to-slate-800",
    },
    {
      name: "Monzo",
      category: "Banking · Android",
      accent: "from-rose-700 via-rose-600 to-slate-800",
    },
  ];

  const insights = [
    {
      title: "Search 120k+ screens",
      description: "Instant access to real product UI patterns.",
    },
    {
      title: "Save inspiration boards",
      description: "Organize flows by project, client, or sprint.",
    },
    {
      title: "Stay aligned with teams",
      description: "Share updates without exporting decks.",
    },
  ];

  return (
    <>
      <Head>
        <title>Iso Trapper UI Library</title>
        <meta
          name="description"
          content="A refined design library inspired by Mobbin's clean and modern product discovery experience."
        />
      </Head>
      <IsoTrapperLayout
        navigation={
          <IsoZone
            variant="navigation"
            className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                IT
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Iso Trapper
                </p>
                <p className="text-xs text-slate-500">
                  Product design library
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-slate-600">
              {["Explore", "Collections", "Screens", "Resources"].map(
                (item) => (
                  <button
                    key={item}
                    className="transition hover:text-slate-900"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
              <div className="relative w-full md:w-72">
                <input
                  className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-slate-400 focus:outline-none"
                  placeholder="Search 120k+ screens"
                />
              </div>
              <Button size="md">Get Access</Button>
            </div>
          </IsoZone>
        }
        action={
          <IsoZone variant="action" className="space-y-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-5">
                <Badge tone="accent">New this week</Badge>
                <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                  Find pixel-perfect product inspiration in seconds.
                </h1>
                <p className="text-base text-slate-600 md:text-lg">
                  Explore real app flows, save the screens you love, and move
                  from idea to execution faster with a clean, focused discovery
                  experience.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="lg">Start exploring</Button>
                  <Button variant="secondary" size="lg">
                    Watch overview
                  </Button>
                </div>
              </div>
              <Card className="w-full max-w-sm p-6">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Today&apos;s highlights
                  </CardTitle>
                  <CardDescription>
                    Most saved flows in the last 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      label: "AI assistants",
                      count: "482 saves",
                    },
                    {
                      label: "Travel booking",
                      count: "319 saves",
                    },
                    {
                      label: "Fitness onboarding",
                      count: "208 saves",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="font-semibold text-slate-700">
                        {item.label}
                      </span>
                      <span className="text-slate-500">{item.count}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm">
                    View trends
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "iOS",
                "Android",
                "Web",
                "Fintech",
                "E-commerce",
                "Onboarding",
              ].map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
                >
                  {item}
                </button>
              ))}
            </div>
          </IsoZone>
        }
        content={
          <IsoZone variant="content" className="space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Collections
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Explore curated UI libraries
                </h2>
              </div>
              <Button variant="secondary" size="sm">
                Browse all
              </Button>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {collections.map((collection) => (
                <Card key={collection.title} className="p-6">
                  <CardHeader>
                    <CardTitle>{collection.title}</CardTitle>
                    <CardDescription>{collection.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-6 justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      {collection.count}
                    </span>
                    <Button variant="ghost" size="sm">
                      Open
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Trending screen sets</CardTitle>
                  <CardDescription>
                    A quick scan of the UI styles teams are saving the most.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-3">
                  {showcases.map((showcase) => (
                    <div
                      key={showcase.name}
                      className="space-y-3"
                    >
                      <div
                        className={`h-28 rounded-2xl bg-gradient-to-br ${showcase.accent}`}
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {showcase.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {showcase.category}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="flex h-full flex-col p-6">
                <CardHeader>
                  <CardTitle>Why teams choose it</CardTitle>
                  <CardDescription>
                    A polished workflow built for daily inspiration.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {insights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200/70 px-4 py-3"
                    >
                      <p className="text-sm font-semibold text-slate-800">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button size="sm">Request invite</Button>
                </CardFooter>
              </Card>
            </div>
          </IsoZone>
        }
        feedback={
          <IsoZone variant="feedback" className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Teams
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                  Design faster with shared inspiration
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Keep collections organized, synced, and ready for your next
                  build.
                </p>
              </div>
              <Button size="lg">Join the library</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "Saved collections stay private by default.",
                "Smart tags keep flows easy to find.",
                "Weekly updates highlight new patterns.",
              ].map((note) => (
                <div
                  key={note}
                  className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-sm text-slate-600"
                >
                  {note}
                </div>
              ))}
            </div>
          </IsoZone>
        }
      />
    </>
  );
};

export default Home;
