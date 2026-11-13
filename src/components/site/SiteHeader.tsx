import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
            {profile.firstName[0]}
          </span>
          <span className="hidden text-sm font-medium sm:block">{profile.name}</span>
        </Link>

        <nav className="flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="hero" size="sm" className="ml-2 px-4">
            <Link to="/contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
