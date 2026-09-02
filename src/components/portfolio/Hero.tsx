import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import headshot from "@/assets/headshot.jpg";

/**
 * Hero / Home — name, tagline, elevator pitch, CTAs, and headshot.
 */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      {/* Decorative glow + grid backdrop */}
      <div className="glow-primary pointer-events-none absolute inset-0" aria-hidden />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" />
            Open to internships &amp; full-time roles
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-semibold text-primary sm:text-xl">{profile.title}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            {profile.elevatorPitch}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40"
            >
              View Projects <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent"
            >
              <Mail className="size-4" /> Contact Me
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent"
            >
              <Download className="size-4" /> Download CV
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" /> {profile.location}
          </p>
        </div>

        {/* Headshot */}
        <div className="relative mx-auto w-64 sm:w-72 md:w-full md:max-w-sm">
          <div
            className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/30 to-primary-glow/20 blur-2xl"
            aria-hidden
          />
          <img
            src={headshot}
            alt={`Professional headshot of ${profile.name}`}
            width={768}
            height={768}
            className="relative aspect-square w-full rounded-3xl border object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
