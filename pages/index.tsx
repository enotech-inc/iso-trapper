import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Iso Trapper: UI/UX Framework Overview</title>
        <meta
          name="description"
          content="A clear, approachable explanation of Iso Trapper as a UI/UX design framework, including core principles, workflow integration, and practical applications."
        />
      </Head>
      <main className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-12 text-white">
        <header className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-highlight">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Iso Trapper in UI/UX
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Iso Trapper is a structured design and development framework that
            helps teams build intuitive, consistent user experiences.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/70">
            Think of Iso Trapper as a practical system for designing interfaces
            that stay coherent as they grow. It gives designers and developers a
            shared playbook so layouts, components, and interactions feel
            connected, predictable, and easy to use.
          </p>
        </header>

        <section className="rounded-2xl border border-white/10 bg-black/40 p-8">
          <h2 className="text-2xl font-semibold">What Iso Trapper Is</h2>
          <p className="mt-3 text-white/70">
            Iso Trapper is a concept that combines a visual framework and a
            lightweight programming approach. It defines how interface elements
            are organized in “iso” layers (visual groupings) and how they are
            “trapped” into reusable, predictable patterns. In practice, that
            means teams treat sections, cards, navigation, and interactions as
            composable modules with clear rules.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">How It Functions</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-white/70">
                <li>
                  Organizes the interface into layers: structure, content, and
                  interaction.
                </li>
                <li>
                  Locks in spacing, typography, and component behavior for
                  consistency.
                </li>
                <li>
                  Encourages reusable building blocks instead of one-off designs.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Core Principles</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-white/70">
                <li>Clarity first: every section has a defined purpose.</li>
                <li>Modularity: components can be assembled like a kit.</li>
                <li>
                  Predictability: interactions behave the same across the site.
                </li>
                <li>
                  Scalability: the system grows without losing visual harmony.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/40 p-8">
          <h2 className="text-2xl font-semibold">
            How It Fits Into the Design & Development Process
          </h2>
          <div className="mt-4 space-y-4 text-white/70">
            <p>
              Iso Trapper integrates from the earliest discovery phase. Designers
              use it to map user journeys into clear, repeatable layouts.
              Developers then implement those layouts as shared components,
              ensuring that every new page stays aligned with the same rules.
            </p>
            <p>
              This alignment makes collaboration smoother: designers can hand off
              clear specifications and developers can build faster with less
              rework.
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-base font-semibold">Discovery</h3>
              <p className="mt-2 text-sm text-white/70">
                Map user goals into a clear section structure and prioritize key
                actions.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-base font-semibold">Design</h3>
              <p className="mt-2 text-sm text-white/70">
                Build a component library with defined layouts, spacing, and
                states.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-base font-semibold">Development</h3>
              <p className="mt-2 text-sm text-white/70">
                Implement reusable modules that map directly to the design
                system.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/40 p-8">
          <h2 className="text-2xl font-semibold">Practical Applications</h2>
          <p className="mt-3 text-white/70">
            Iso Trapper works well for marketing sites, SaaS dashboards, and
            e-commerce experiences—anywhere consistency and speed matter.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Responsive Layouts",
                body: "Grid-based sections adapt to device sizes while keeping hierarchy intact.",
              },
              {
                title: "Intuitive Navigation",
                body: "Navigation modules use consistent placement and labels, reducing user confusion.",
              },
              {
                title: "Engaging Interactions",
                body: "Micro-interactions follow shared timing and motion rules for a cohesive feel.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/40 p-8">
          <h2 className="text-2xl font-semibold">Benefits for Teams</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/70">
            <li>Improves usability by making interfaces easier to predict.</li>
            <li>Streamlines workflows through reusable components.</li>
            <li>Reduces design debt by keeping patterns consistent.</li>
            <li>Boosts engagement with clear visual hierarchy.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Examples & Scenarios</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold">SaaS Product Landing Page</h3>
              <p className="mt-2 text-white/70">
                A team defines a hero, feature grid, testimonials, and CTA as
                reusable modules. When launching a new feature, they can reuse
                the same layout without rethinking spacing or visual hierarchy.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold">E-commerce Category Page</h3>
              <p className="mt-2 text-white/70">
                Product cards, filters, and promotion banners follow the same
                iso layout rules, creating a consistent experience that builds
                shopper confidence across categories.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
