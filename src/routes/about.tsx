import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hani" },
      {
        name: "description",
        content: "Who Hani is, what he's studying, and how he likes to work.",
      },
      { property: "og:title", content: "About — Hani" },
      {
        property: "og:description",
        content: "Who Hani is, what he's studying, and how he likes to work.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Clarity first",
    body: "Every screen should explain itself. I remove until only the essential remains.",
  },
  {
    title: "Built to last",
    body: "Accessible, fast and readable code — the kind the next person can pick up.",
  },
  {
    title: "Learn in the open",
    body: "Ask the question, share the half-finished thing, fix it in front of people.",
  },
];

function About() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
      <p className="eyebrow animate-rise">About me</p>
      <h1 className="mt-6 animate-rise font-display text-5xl leading-[1.02] [animation-delay:80ms] sm:text-6xl">
        Studying IT, <span className="italic text-primary">building</span> on the side.
      </h1>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground animate-rise [animation-delay:160ms]">
        <p>
          I'm {profile.name}, an {profile.role.toLowerCase()} with a habit of opening the hood.
          Coursework gives me the theory; the projects I build after class are where it actually
          clicks.
        </p>
        <p>
          Most of my time goes into the web — turning a rough idea into something you can click
          through, then making it faster and simpler until it feels obvious.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3 animate-rise [animation-delay:240ms]">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-medium text-foreground">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
          </div>
        ))}
      </div>

      <Button asChild variant="hero" size="xl" className="mt-12">
        <Link to="/contact">
          Get in touch <ArrowRight />
        </Link>
      </Button>
    </section>
  );
}
