import { createFileRoute } from "@tanstack/react-router";
import { SkillsGrid } from "@/components/site/SkillsGrid";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Alex Rivera" },
      {
        name: "description",
        content: "Frontend, design, backend and tooling skills Alex Rivera brings to every project.",
      },
      { property: "og:title", content: "Skills — Alex Rivera" },
      {
        property: "og:description",
        content: "Frontend, design, backend and tooling skills Alex Rivera brings to every project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="eyebrow animate-rise">Skills & tools</p>
        <h1 className="mt-4 max-w-3xl animate-rise font-display text-5xl leading-[1.02] [animation-delay:80ms] sm:text-6xl">
          The toolkit behind <span className="italic text-gradient-accent">the work.</span>
        </h1>
        <p className="mt-6 max-w-xl animate-rise text-lg text-muted-foreground [animation-delay:160ms]">
          A blend of design sensibility and engineering depth — the things I reach for every day.
        </p>
        <div className="mt-14 animate-rise [animation-delay:240ms]">
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
}
