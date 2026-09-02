import { Cpu } from "lucide-react";
import { skillCategories } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

/** Skills — categorized badge grids for finance, digital/AI, and soft skills. */
export function Skills() {
  return (
    <section id="skills" className="border-t bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          icon={Cpu}
          title="Skills"
          subtitle="A blend of financial expertise, AI-enabled digital capabilities, and collaborative soft skills."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group) => (
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
      </div>
    </section>
  );
}
