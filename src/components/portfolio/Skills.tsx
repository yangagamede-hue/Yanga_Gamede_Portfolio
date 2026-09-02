import { Cpu, icons } from "lucide-react";
import { technicalSkills, softSkills } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

/** Skills — categorized technical badges plus a soft-skills card grid. */
export function Skills() {
  return (
    <section id="skills" className="border-t bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          icon={Cpu}
          title="Skills"
          subtitle="The technical stack I build with, and the human skills I bring to a team."
        />

        {/* Technical skills, grouped by category */}
        <div className="grid gap-4 sm:grid-cols-2">
          {technicalSkills.map((group) => (
            <div key={group.category} className="card-hover rounded-2xl border bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-primary/20 bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <h3 className="mb-6 mt-14 text-center text-xl font-bold tracking-tight">Soft Skills</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((s) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <div key={s.title} className="card-hover rounded-2xl border bg-card p-5">
                <span className="mb-3 inline-grid size-9 place-items-center rounded-lg bg-accent text-primary">
                  <Icon className="size-4" />
                </span>
                <h4 className="font-semibold">{s.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
