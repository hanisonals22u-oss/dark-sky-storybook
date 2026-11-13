import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hani" },
      {
        name: "description",
        content: "The story, values and experience behind Hani's design and engineering work.",
      },
      { property: "og:title", content: "About — Hani" },
      {
        property: "og:description",
        content: "The story, values and experience behind Hani's design and engineering work.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2022 — Now", role: "Independent designer & engineer", place: "Remote" },
  { year: "2019 — 2022", role: "Senior Frontend Engineer", place: "Northwind Studio" },
  { year: "2016 — 2019", role: "Product Designer", place: "Brightline Labs" },
];

const values = [
  { title: "Clarity first", body: "Every screen should explain itself. I remove until only the essential remains." },
  { title: "Built to last", body: "Accessible, fast and maintainable code that teams enjoy working in." },
  { title: "Close collaboration", body: "I work alongside founders and teams, not behind a handoff wall." },
];

function About() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <p className="eyebrow animate-rise">About me</p>
      <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="animate-rise [animation-delay:80ms]">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              width={896}
              height={1120}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </div>

        <div className="animate-rise [animation-delay:160ms]">
          <h1 className="font-display text-5xl leading-[1.02] sm:text-6xl">
            Designer by training, <span className="italic text-primary">engineer</span> by obsession.
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm {profile.name}, a {profile.role.toLowerCase()} based in {profile.location}. For
              over eight years I've helped startups and studios turn fuzzy ideas into products people
              genuinely enjoy using.
            </p>
            <p>
              I sit comfortably between design and code — sketching flows in Figma in the morning,
              shipping them in React by the afternoon. That overlap is where the best details live.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="eyebrow">Experience</p>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {timeline.map((t) => (
                <li key={t.year} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                  <span className="font-medium">{t.role}</span>
                  <span className="text-sm text-muted-foreground">
                    {t.place} · <span className="font-mono text-xs">{t.year}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Button asChild variant="hero" size="xl" className="mt-10">
            <Link to="/contact">
              Get in touch <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
