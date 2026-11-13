import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillsGrid } from "@/components/site/SkillsGrid";
import { profile } from "@/lib/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hani — IT Student & Web Builder" },
      { name: "description", content: profile.tagline },
      { property: "og:title", content: "Hani — IT Student & Web Builder" },
      { property: "og:description", content: profile.tagline },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-clip">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full glow-orb" />

        <div className="relative mx-auto max-w-4xl px-5 pb-20 pt-20 sm:px-8 lg:pb-28 lg:pt-28">
          <div className="inline-flex animate-rise items-center gap-2.5 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-primary" />
            {profile.availability}
          </div>

          <h1 className="mt-7 animate-rise font-display text-6xl leading-[0.95] tracking-tight [animation-delay:80ms] sm:text-7xl lg:text-8xl">
            Hi, I'm {profile.firstName}.
            <br />
            <span className="italic text-gradient-accent">I build for the web.</span>
          </h1>

          <p className="mt-7 max-w-xl animate-rise text-lg text-muted-foreground [animation-delay:160ms]">
            {profile.tagline}
          </p>

          <div className="mt-10 flex animate-rise flex-wrap items-center gap-3 [animation-delay:240ms]">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Let's work together <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="line" size="xl">
              <Link to="/about">More about me</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">What I do</p>
            <h2 className="mt-3 font-display text-5xl">A few things I'm good at</h2>
          </div>
          <Link
            to="/skills"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            See all skills <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <SkillsGrid limit={3} />
      </section>
    </>
  );
}
