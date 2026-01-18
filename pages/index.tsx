import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page Update Plan</title>
        <meta
          name="description"
          content="A phased, actionable plan to modernize the home page with stronger design, content, UX, navigation, interaction, conversion, and accessibility."
        />
      </Head>
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 text-white">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-highlight">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Home Page Update Plan
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Modernize the home page with clarity, confidence, and conversion in
            mind.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            This plan balances creativity with best practices to deliver a
            homepage that feels fresh, guides users with purpose, and supports
            business goals. Each section outlines objectives, recommendations,
            and tangible deliverables to move from strategy to execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Design",
              "Content",
              "User Experience",
              "Navigation",
              "Interaction",
              "Conversion",
              "Performance & Accessibility",
            ].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70"
              >
                {pill}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">Design</h2>
            <p className="mt-3 text-white/70">
              Refresh the visual language to feel premium, current, and
              trustworthy without overwhelming visitors.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Objectives</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>Establish a cohesive brand system and hierarchy.</li>
                  <li>Highlight key value props above the fold.</li>
                  <li>Use whitespace to improve scanning.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Recommendations
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>
                    Introduce a hero background, refined typography, and a
                    modern color palette.
                  </li>
                  <li>
                    Add visual emphasis for core CTAs with contrasting colors.
                  </li>
                  <li>
                    Create reusable UI components for consistency (cards,
                    buttons, badges).
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Deliverables
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>Updated design system (colors, type scale, spacing).</li>
                  <li>Homepage wireframes + high-fidelity mockups.</li>
                  <li>Component library in Figma or code.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">Content</h2>
            <p className="mt-3 text-white/70">
              Ensure messaging is concise, benefit-driven, and tailored to top
              user intents.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Objectives</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>Clarify what the company does in 5 seconds.</li>
                  <li>Address core audience pain points and outcomes.</li>
                  <li>Support trust through proof points.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Recommendations
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>
                    Rewrite hero headline and subheadline to be outcome-focused.
                  </li>
                  <li>Introduce scannable sections with short paragraphs.</li>
                  <li>
                    Add social proof: testimonials, logos, metrics, or awards.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Deliverables
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>Homepage copy deck with headline variations.</li>
                  <li>Proof-point module content (quotes, stats, logos).</li>
                  <li>SEO-friendly meta titles and descriptions.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">User Experience</h2>
            <p className="mt-3 text-white/70">
              Guide visitors through a clear narrative that reduces friction and
              supports decision-making.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Objectives</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>Reduce cognitive load with clear structure.</li>
                  <li>Address the top questions proactively.</li>
                  <li>Encourage exploration without dead ends.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Recommendations
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>
                    Use modular sections: value prop, benefits, social proof,
                    use cases, CTA.
                  </li>
                  <li>
                    Include a quick “how it works” or “who it’s for” block.
                  </li>
                  <li>Ensure scroll progression feels intentional.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Deliverables
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>User journey map for homepage.</li>
                  <li>Priority questions + placement plan.</li>
                  <li>Section order blueprint.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">Navigation</h2>
            <p className="mt-3 text-white/70">
              Streamline paths to core pages and reduce the number of decisions
              required.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Objectives</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>Prioritize critical destinations.</li>
                  <li>Make navigation intuitive on desktop and mobile.</li>
                  <li>Keep the header lightweight yet informative.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Recommendations
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>
                    Limit primary nav to 4–6 items; group secondary links in the
                    footer.
                  </li>
                  <li>Add a persistent CTA button in the header.</li>
                  <li>
                    Use clear labels: “Solutions,” “Pricing,” “Resources.”
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Deliverables
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>Updated navigation sitemap.</li>
                  <li>Responsive header + footer specs.</li>
                  <li>Clickable navigation prototype.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">Interaction</h2>
            <p className="mt-3 text-white/70">
              Use subtle motion and micro-interactions to reinforce clarity and
              keep users engaged.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Objectives</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>Make the page feel responsive and modern.</li>
                  <li>Provide feedback for user actions.</li>
                  <li>Keep interactions lightweight and accessible.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Recommendations
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>
                    Add hover states, subtle section reveals, and CTA emphasis.
                  </li>
                  <li>Use iconography to support scannability.</li>
                  <li>Keep animations under 200–300ms.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Deliverables
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>Micro-interaction guidelines.</li>
                  <li>Motion specs for hero + section transitions.</li>
                  <li>Icon set mapped to key benefits.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">Conversion Optimization</h2>
            <p className="mt-3 text-white/70">
              Ensure the homepage drives measurable actions while building
              trust.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Objectives</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>Increase CTA clicks and qualified leads.</li>
                  <li>Reduce drop-off in the first screen.</li>
                  <li>Align messaging with conversion intent.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Recommendations
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>
                    Use a primary CTA and a secondary “learn more” option.
                  </li>
                  <li>
                    Add a conversion-friendly section: demo booking, lead form,
                    or product tour.
                  </li>
                  <li>Position testimonials near CTAs.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Deliverables
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>CTA hierarchy and placement plan.</li>
                  <li>Conversion module mockup (form, demo, or funnel).</li>
                  <li>A/B test backlog with hypotheses.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">
              Performance & Accessibility
            </h2>
            <p className="mt-3 text-white/70">
              Deliver a fast, inclusive experience that meets modern standards.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Objectives</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>Improve Core Web Vitals.</li>
                  <li>Ensure WCAG 2.2 AA compliance.</li>
                  <li>Reduce load time across devices.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Recommendations
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>Optimize hero imagery and lazy-load below the fold.</li>
                  <li>Use semantic headings and accessible color contrast.</li>
                  <li>Audit scripts and remove unused assets.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Deliverables
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-white/70">
                  <li>Performance budget + Lighthouse targets.</li>
                  <li>Accessibility checklist with remediation tasks.</li>
                  <li>Updated image and font loading strategy.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Phased Execution Timeline</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold">Phase 1: Quick Wins</h3>
              <p className="mt-2 text-white/70">1–2 weeks</p>
              <ul className="mt-4 list-disc space-y-1 pl-6 text-white/70">
                <li>Rewrite hero headline and CTA.</li>
                <li>Adjust navigation labels and order.</li>
                <li>Add proof points and testimonials.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold">Phase 2: Deep Enhancements</h3>
              <p className="mt-2 text-white/70">3–6 weeks</p>
              <ul className="mt-4 list-disc space-y-1 pl-6 text-white/70">
                <li>Implement new design system and components.</li>
                <li>Build conversion module and content blocks.</li>
                <li>Introduce motion + interaction layer.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold">Phase 3: Optimization</h3>
              <p className="mt-2 text-white/70">Ongoing</p>
              <ul className="mt-4 list-disc space-y-1 pl-6 text-white/70">
                <li>Run A/B tests on CTAs and hero layouts.</li>
                <li>Monitor performance and accessibility scores.</li>
                <li>Iterate content based on analytics and feedback.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
