import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero, Reveal, SectionHeading } from "@/components/sections";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply for Accreditation — NAPTEC" },
      { name: "description", content: "Begin your NAPTEC accreditation application. Review eligibility requirements and submit your organisation's details." },
      { property: "og:title", content: "Apply for Accreditation — NAPTEC" },
      { property: "og:description", content: "Eligibility requirements and the online accreditation application." },
    ],
  }),
  component: Apply,
});

const schema = z.object({
  organization: z.string().trim().min(2, "Organization name is required").max(150),
  contactName: z.string().trim().min(2, "Contact name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  type: z.string().trim().min(2, "Please specify the type").max(100),
  message: z.string().trim().max(1500).optional(),
});

const eligibility = [
  "Legally registered and operating organisation",
  "Minimum of one completed delivery cycle",
  "Documented quality assurance policies",
  "Commitment to continuous improvement",
];

function Apply() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Application received. Our team will be in touch shortly.");
      e.currentTarget?.reset?.();
    }, 700);
  }

  return (
    <>
      <PageHero
        eyebrow="Apply for Accreditation"
        title="Begin your accreditation journey"
        description="Complete the application below and our team will guide you through eligibility, documentation, and the next steps."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div>
              <SectionHeading eyebrow="Eligibility" title="Eligibility requirements" />
              <ul className="mt-6 space-y-3">
                {eligibility.map((e) => (
                  <li key={e} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-sm text-foreground">{e}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-lg border border-border bg-secondary p-6">
                <ClipboardList className="h-7 w-7 text-gold" />
                <h3 className="mt-3 font-serif text-lg font-bold text-navy">Process overview</h3>
                <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>1. Submit application & eligibility evidence</li>
                  <li>2. Documentation review by NAPTEC analysts</li>
                  <li>3. On-site / virtual evaluation</li>
                  <li>4. Independent accreditation decision</li>
                  <li>5. Continuous monitoring & renewal</li>
                </ol>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-2xl font-bold text-navy">Online application</h2>
              <p className="mt-1 text-sm text-muted-foreground">All fields marked with * are required.</p>
              <div className="mt-6 grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="organization">Organization name *</Label>
                  <Input id="organization" name="organization" placeholder="Your institution or provider" required maxLength={150} />
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="contactName">Contact name *</Label>
                    <Input id="contactName" name="contactName" placeholder="Full name" required maxLength={100} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="you@org.org" required maxLength={255} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type">Type of accreditation sought *</Label>
                  <Input id="type" name="type" placeholder="e.g. Institutional, Program, Quality Audit" required maxLength={100} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Additional details</Label>
                  <Textarea id="message" name="message" rows={4} placeholder="Tell us about your organisation and goals" maxLength={1500} />
                </div>
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? "Submitting…" : "Submit Application"}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
