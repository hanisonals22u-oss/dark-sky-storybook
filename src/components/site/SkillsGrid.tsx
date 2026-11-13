import { skillGroups } from "@/lib/profile";

export function SkillsGrid({ limit }: { limit?: number }) {
  const groups = limit ? skillGroups.slice(0, limit) : skillGroups;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group, i) => (
        <article
          key={group.title}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 glow-orb transition-opacity duration-500 group-hover:opacity-100" />
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-3xl">{group.title}</h3>
            <span className="font-mono text-xs text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{group.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-secondary-foreground transition-colors group-hover:border-primary/30"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
