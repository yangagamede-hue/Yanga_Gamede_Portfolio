import { FolderGit2, ExternalLink, Github, Check } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

/** Featured Work — project cards with features, stack badges, and links. */
export function Projects() {
  return (
    <section id="projects" className="border-t py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          icon={FolderGit2}
          title="Featured Projects"
          subtitle="A selection of things I've designed, built, and shipped end to end."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-hover flex flex-col rounded-2xl border bg-card p-6"
            >
              <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-2 pt-2">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <ExternalLink className="size-3.5" /> Live Demo
                </a>
                <a
                  href={p.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors hover:bg-accent"
                >
                  <Github className="size-3.5" /> GitHub Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
