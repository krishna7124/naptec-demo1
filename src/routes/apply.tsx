import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ClipboardList } from "lucide-react";
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

const eligibility = [
  "Legally registered and operating organisation",
  "Minimum of one completed delivery cycle",
  "Documented quality assurance policies",
  "Commitment to continuous improvement",
];

function Apply() {
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
            <div className="overflow-hidden rounded-lg border border-border shadow-[var(--shadow-card)]">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfIh61-P0bxUcvrDRRkpP0eyMQmFMPpb22zNsohhsMJ77SShA/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
                title="NAPTEC Application Form"
              >
                Loading…
              </iframe>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
