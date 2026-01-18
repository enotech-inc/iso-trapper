import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page Update Implementation Guide</title>
        <meta
          name="description"
          content="Step-by-step guide to implementing the home page modernization plan within this Next.js platform."
        />
      </Head>
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 text-white">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-highlight">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Implementation Guide
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            How to execute the home page update plan on this platform.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            This guide translates the plan into clear, practical steps using the
            existing Next.js and Tailwind setup. Follow the sequence to move from
            preparation through launch, keeping the scope controlled and outcomes
            measurable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Prep",
              "Design",
              "Content",
              "UX",
              "Navigation",
              "Interaction",
              "Conversion",
              "Performance",
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
            <h2 className="text-2xl font-semibold">1. Prepare the workspace</h2>
            <p className="mt-3 text-white/70">
              Align on inputs, structure, and guardrails before making edits.
            </p>
            <ol className="mt-6 list-decimal space-y-2 pl-6 text-white/70">
              <li>
                Confirm the goals, target audience, and primary CTA in a short
                doc so copy and layout decisions stay consistent.
              </li>
              <li>
                Review the existing page sections and note which blocks will be
                updated, removed, or added.
              </li>
              <li>
                Collect assets (logos, testimonials, metrics, imagery) and place
                them in <span className="font-semibold">/public</span> with
                clear filenames.
              </li>
              <li>
                Create a checklist for design, content, and accessibility so the
                rollout stays organized.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">2. Implement the design</h2>
            <p className="mt-3 text-white/70">
              Translate the visual direction into reusable UI patterns.
            </p>
            <ol className="mt-6 list-decimal space-y-2 pl-6 text-white/70">
              <li>
                Update the color palette and type scale in Tailwind config if new
                tokens are required.
              </li>
              <li>
                Build shared components (cards, buttons, badges) in
                <span className="font-semibold"> /components</span> to avoid
                one-off styling.
              </li>
              <li>
                Apply the new spacing and hierarchy on the home page, starting
                with the hero and above-the-fold content.
              </li>
              <li>
                Validate contrast ratios and adjust colors where needed for
                readability.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">3. Rework the content</h2>
            <p className="mt-3 text-white/70">
              Ensure copy is concise, benefit-focused, and easy to scan.
            </p>
            <ol className="mt-6 list-decimal space-y-2 pl-6 text-white/70">
              <li>
                Rewrite the headline and subheadline to clarify the value in the
                first five seconds.
              </li>
              <li>
                Break long paragraphs into short blocks with descriptive
                subheads.
              </li>
              <li>
                Insert proof points (stats, testimonials, logos) near the main
                CTA.
              </li>
              <li>
                Update page metadata in <span className="font-semibold">Head</span>
                so it matches the new messaging.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">4. Shape the user flow</h2>
            <p className="mt-3 text-white/70">
              Create a clear narrative from top to bottom.
            </p>
            <ol className="mt-6 list-decimal space-y-2 pl-6 text-white/70">
              <li>
                Order sections to match the journey: value, benefits, proof,
                how-it-works, CTA.
              </li>
              <li>
                Add a short “who it&apos;s for” block to remove ambiguity.
              </li>
              <li>
                Keep each section to a single idea and include a short prompt to
                continue scrolling.
              </li>
              <li>
                Validate the experience on mobile to ensure the flow remains
                intact.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">5. Refine navigation</h2>
            <p className="mt-3 text-white/70">
              Make key paths obvious with minimal choices.
            </p>
            <ol className="mt-6 list-decimal space-y-2 pl-6 text-white/70">
              <li>
                Limit the primary nav to essential destinations and push
                secondary links into the footer.
              </li>
              <li>
                Add a persistent CTA in the header that mirrors the main action
                in the hero.
              </li>
              <li>
                Check navigation labels for clarity (use common terms and avoid
                internal jargon).
              </li>
              <li>
                Test the header on mobile to ensure the CTA remains visible and
                tappable.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">6. Add interaction</h2>
            <p className="mt-3 text-white/70">
              Introduce subtle motion that supports clarity.
            </p>
            <ol className="mt-6 list-decimal space-y-2 pl-6 text-white/70">
              <li>
                Add hover and focus states to buttons, cards, and links to show
                feedback.
              </li>
              <li>
                Use simple transitions (200–300ms) for section reveals or button
                emphasis.
              </li>
              <li>
                Keep animations optional for users who prefer reduced motion.
              </li>
              <li>
                Validate performance to ensure effects do not impact load time.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">7. Optimize for conversion</h2>
            <p className="mt-3 text-white/70">
              Make the primary action easy to find and trust.
            </p>
            <ol className="mt-6 list-decimal space-y-2 pl-6 text-white/70">
              <li>
                Place the primary CTA in the hero and repeat it after proof
                points.
              </li>
              <li>
                Add a conversion module (demo, form, or product tour) with a
                short explanation of what happens next.
              </li>
              <li>
                Align CTA labels with intent (e.g., “Book a demo” or “Start
                trial”).
              </li>
              <li>
                Track CTA clicks and form completion with analytics events.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-semibold">
              8. Performance and accessibility
            </h2>
            <p className="mt-3 text-white/70">
              Deliver a fast, inclusive experience across devices.
            </p>
            <ol className="mt-6 list-decimal space-y-2 pl-6 text-white/70">
              <li>
                Optimize images with Next.js image handling and lazy-load below
                the fold.
              </li>
              <li>
                Ensure headings are sequential and semantic for screen readers.
              </li>
              <li>
                Audit color contrast and add visible focus states for keyboard
                navigation.
              </li>
              <li>
                Run Lighthouse checks and capture targets for Core Web Vitals.
              </li>
            </ol>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Launch checklist</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold">Content + Design</h3>
              <ul className="mt-4 list-disc space-y-1 pl-6 text-white/70">
                <li>All sections follow the new hierarchy.</li>
                <li>Copy is benefit-driven and proof points are in place.</li>
                <li>Buttons and cards use shared components.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold">Experience</h3>
              <ul className="mt-4 list-disc space-y-1 pl-6 text-white/70">
                <li>Navigation is simplified and CTA is persistent.</li>
                <li>Mobile flow matches desktop hierarchy.</li>
                <li>Motion is subtle and respects reduced motion.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold">Quality</h3>
              <ul className="mt-4 list-disc space-y-1 pl-6 text-white/70">
                <li>Lighthouse scores meet your targets.</li>
                <li>Keyboard navigation works end to end.</li>
                <li>Analytics events confirm CTA engagement.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
