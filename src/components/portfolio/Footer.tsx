import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

/** Site footer with social links and a back-to-top control. */
export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 text-center sm:flex sm:items-center sm:justify-between sm:px-6 sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp; Tailwind.
        </p>
        <div className="flex items-center justify-center gap-2">
          {[
            { icon: Github, href: profile.github, label: "GitHub" },
            { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid size-9 place-items-center rounded-lg border text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
            >
              <s.icon className="size-4" />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="grid size-9 place-items-center rounded-lg border text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
