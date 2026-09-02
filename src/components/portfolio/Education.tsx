import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { education, certifications } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

/** Education timeline + certifications grid. */
export function Education() {
  return (
    <section id="education" className="border-t py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          icon={GraduationCap}
          title="Education & Certifications"
          subtitle="Formal study and the credentials I've earned along the way."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Education timeline */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Education
            </h3>
            <ol className="relative space-y-6 border-l pl-6">
              {education.map((e) => (
                <li key={e.degree} className="relative">
                  <span className="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-background bg-primary" />
                  <div className="card-hover rounded-2xl border bg-card p-5">
                    <h4 className="font-bold">{e.degree}</h4>
                    <p className="text-sm text-primary">{e.institution}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{e.year}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {e.details}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Certifications
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {certifications.map((c) => (
                <li key={c.name} className="card-hover rounded-2xl border bg-card p-4">
                  <span className="mb-3 inline-grid size-9 place-items-center rounded-lg bg-accent text-primary">
                    <Award className="size-4" />
                  </span>
                  <h4 className="text-sm font-semibold leading-snug">{c.name}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {c.issuer} · {c.date}
                  </p>
                  <a
                    href={c.credentialUrl}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    View credential <ExternalLink className="size-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
