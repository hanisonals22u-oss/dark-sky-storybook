import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";
import { profile } from "@/lib/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hani" },
      { name: "description", content: "Start a project or just say hello to Hani." },
      { property: "og:title", content: "Contact — Hani" },
      { property: "og:description", content: "Start a project or just say hello to Hani." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const fieldClass =
  "h-12 rounded-xl border-border bg-secondary/50 px-4 text-base focus-visible:border-primary/60 focus-visible:ring-primary/30";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success(`Thanks, ${values.name.split(" ")[0]}!`, {
      description: "Your message is in. I'll get back to you within two days.",
    });
    reset();
  };

  return (
    <section className="relative overflow-clip">
      <div className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full glow-orb" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:py-24">
        <div className="animate-rise">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] sm:text-6xl">
            Have an idea? <br />
            <span className="italic text-gradient-accent">Let's talk.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Whether it's a new product, a redesign or a quick question — my inbox is open.
          </p>
          <ul className="mt-10 space-y-4">
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary">
                <Mail className="h-4 w-4 text-primary" />
              </span>
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-primary">
                {profile.email}
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="animate-rise space-y-5 rounded-3xl border border-border bg-card p-6 shadow-card [animation-delay:120ms] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Jane Doe" maxLength={100} className={fieldClass} aria-invalid={!!errors.name} {...register("name")} />
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jane@company.com" maxLength={255} className={fieldClass} aria-invalid={!!errors.email} {...register("email")} />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={6}
              maxLength={1000}
              placeholder="Tell me a little about your project…"
              className="rounded-xl border-border bg-secondary/50 px-4 py-3 text-base focus-visible:border-primary/60 focus-visible:ring-primary/30"
              aria-invalid={!!errors.message}
              {...register("message")}
            />
            {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
          </div>
          <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send message"} <Send />
          </Button>
        </form>
      </div>
    </section>
  );
}
