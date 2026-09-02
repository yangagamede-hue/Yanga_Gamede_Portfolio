import { useState, type FormEvent } from "react";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };

/** Client-side validation rules for the contact form. */
function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (values.subject.trim().length < 3) errors.subject = "Subject is too short.";
  if (values.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

/** Contact — validated form plus direct contact badges. */
export function Contact() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    // No backend wired up yet — show success feedback and reset.
    setSent(true);
    setValues(EMPTY);
    setTimeout(() => setSent(false), 6000);
  };

  const inputClass =
    "w-full rounded-lg border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <section id="contact" className="border-t bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          icon={Mail}
          title="Get In Touch"
          subtitle="Have a role, a project, or a question? I'd love to hear from you."
        />

        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
          {/* Direct contact badges */}
          <ul className="space-y-3">
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: MapPin, label: "Location", value: profile.location, href: "#contact" },
              { icon: Github, label: "GitHub", value: "View my code", href: profile.github },
              { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: profile.linkedin },
            ].map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="card-hover flex items-center gap-3 rounded-xl border bg-card p-4"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                    <c.icon className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{c.label}</span>
                    <span className="block truncate text-sm font-medium">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Form */}
          <form onSubmit={onSubmit} noValidate className="rounded-2xl border bg-card p-6">
            {sent && (
              <p className="mb-5 flex items-center gap-2 rounded-lg border border-primary/30 bg-accent px-3 py-2.5 text-sm font-medium text-accent-foreground">
                <CheckCircle2 className="size-4 text-primary" />
                Thanks! Your message has been sent.
              </p>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input className={inputClass} value={values.name} onChange={update("name")} placeholder="Jane Doe" />
              </Field>
              <Field label="Email" error={errors.email}>
                <input className={inputClass} value={values.email} onChange={update("email")} placeholder="jane@company.com" />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Subject" error={errors.subject}>
                <input className={inputClass} value={values.subject} onChange={update("subject")} placeholder="Internship opportunity" />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message" error={errors.message}>
                <textarea rows={5} className={inputClass} value={values.message} onChange={update("message")} placeholder="Tell me about the role or project..." />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40 sm:w-auto"
            >
              <Send className="size-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/** Labeled form field wrapper with inline error text. */
function Field({ label, error, children }: { label: string; error: string | undefined; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
