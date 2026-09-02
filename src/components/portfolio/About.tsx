import { User, icons } from "lucide-react";
import { about } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

/** About Me — narrative background plus quick detail badges. */
export function About() {
  return (
    <section id="about" className="border-t py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          icon={User}
          title="About Me"
          subtitle="My financial foundation, AI training, and the details that define my profile."
        />
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {about.badges.map((b) => {
              const Icon = icons[b.icon as keyof typeof icons];
              return (
                <div key={b.label} className="card-hover rounded-xl border bg-card p-4">
                  <span className="mb-2 inline-grid size-8 place-items-center rounded-lg bg-accent text-primary">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="text-sm font-semibold text-primary">{b.label}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {b.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
