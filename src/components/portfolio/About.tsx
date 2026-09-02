import { User } from "lucide-react";
import { about } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

/** About Me — narrative background plus core values grid. */
export function About() {
  return (
    <section id="about" className="border-t py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          icon={User}
          title="About Me"
          subtitle="Background, motivation, and what I care about as an engineer."
        />
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {about.values.map((v) => (
              <div key={v.title} className="card-hover rounded-xl border bg-card p-4">
                <h3 className="text-sm font-semibold text-primary">{v.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
