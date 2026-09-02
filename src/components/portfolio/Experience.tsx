import { Briefcase } from "lucide-react";
import { experience } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

/** Work Experience timeline. */
export function Experience() {
  return (
    <section id="experience" className="border-t bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          icon={Briefcase}
          title="Work Experience"
          subtitle="Where I've worked and what I delivered there."
        />
        <ol className="relative space-y-8 border-l pl-6 sm:pl-8">
          {experience.map((item) => (
            <li key={item.role} className="relative">
              <span className="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-background bg-primary sm:-left-[39px]" />
              <div className="card-hover rounded-2xl border bg-card p-5">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:flex sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-bold">{item.role}</h3>
                    <p className="text-sm text-primary">{item.company}</p>
                  </div>
                  <span className="shrink-0 rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
