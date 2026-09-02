import type { LucideIcon } from "lucide-react";

/** Consistent section header: icon chip + title + subtitle. */
export function SectionHeading({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="mb-4 inline-grid size-11 place-items-center rounded-xl bg-accent text-primary">
        <Icon className="size-5" />
      </span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
