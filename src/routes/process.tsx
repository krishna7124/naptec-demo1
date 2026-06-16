import { createFileRoute, Link } from "@tanstack/react-router";
import { ClipboardCheck, FileSearch, Search, Award, Gauge, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal } from "@/components/sections";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Accreditation Process — NAPTEC" },
      { name: "description", content: "Understand NAPTEC's five-step accreditation process: application, documentation review, evaluation, accreditation decision, and continuous monitoring." },
      { property: "og:title", content: "Accreditation Process — NAPTEC" },
      { property: "og:description", content: "A transparent five-step path from application to continuous monitoring." },
    ],
  }),
  component: Process,
});

const steps = [
  { n: "01", icon: ClipboardCheck, title: "Application", desc: "Eligible organisations submit a formal application with institutional details and self-assessment evidence. Our team confirms eligibility and outlines the engagement." },
  { n: "02", icon: FileSearch, title: "Documentation Review", desc: "Trained analysts review submitted documentation against NAPTEC standards, identifying strengths and areas requiring clarification before the evaluation visit." },
  { n: "03", icon: Search, title: "Evaluation", desc: "A panel of qualified evaluators conducts on-site and virtual assessments, interviewing stakeholders and verifying that practice matches policy." },
  { n: "04", icon: Award, title: "Accreditation Decision", desc: "An independent accreditation panel reviews the evaluation report and determines the outcome, including the accreditation level and any conditions." },
  { n: "05", icon: Gauge, title: "Continuous Monitoring", desc: "Accredited organisations undergo periodic monitoring and renewal to ensure sustained quality, with support for continuous improvement." },
];

function Process() {
  return (
    <>
      <PageHero
        eyebrow="Accreditation Process"
        title="A rigorous, transparent five-step journey"
        description="Every NAPTEC accreditation follows a consistent, evidence-based methodology designed to be fair, thorough, and constructive."
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-border sm:block" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className="relative flex gap-6">
                  <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-navy-foreground shadow-[var(--shadow-card)]">
                    <s.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                    <span className="font-serif text-sm font-bold uppercase tracking-widest text-gold">Step {s.n}</span>
                    <h2 className="mt-1 text-xl font-bold text-navy">{s.title}</h2>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg"><Link to="/apply">Start your application <ArrowRight /></Link></Button>
        </div>
      </section>
    </>
  );
}
