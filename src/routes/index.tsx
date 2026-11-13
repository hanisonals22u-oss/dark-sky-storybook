import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillsGrid } from "@/components/site/SkillsGrid";
import { profile } from "@/lib/profile";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Rivera — Designer & Frontend Engineer" },
      { name: "description", content: profile.tagline },
      { property: "og:title", content: "Alex Rivera — Designer & Frontend Engineer" },
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
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full glow-orb" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:pb-28 lg:pt-24">
          <div>
            <div className="inline-flex animate-rise items-center gap-2.5 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs text-muted-foreground">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-primary" />
              {profile.availability}
            </div>

            <h1 className="mt-7 animate-rise font-display text-6xl leading-[0.95] tracking-tight [animation-delay:80ms] sm:text-7xl lg:text-8xl">
              Hi, I'm {profile.firstName}.
              <br />
              <span className="italic text-gradient-accent">I build for the web.</span>
            </h1>

            <p className="mt-7 max-w-lg animate-rise text-lg text-muted-foreground [animation-delay:160ms]">
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

            <dl className="mt-14 grid max-w-md animate-rise grid-cols-3 gap-6 border-t border-border pt-8 [animation-delay:320ms]">
              {profile.stats.map((s) => (
                <div key={s.label}>
                  <dt className="eyebrow">{s.label}</dt>
                  <dd className="mt-1 font-display text-4xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm animate-rise [animation-delay:200ms] lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-border shadow-glow">
              <img
                src={portrait}
                alt={`Portrait of ${profile.name}`}
                width={896}
                height={1120}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-border bg-card/90 px-4 py-3 backdrop-blur-xl">
              <div>
                <p className="text-sm font-medium">{profile.name}</p>
                <p className="text-xs text-muted-foreground">{profile.role}</p>
              </div>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Lisbon
              </span>
            </div>
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
