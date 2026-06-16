import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, GraduationCap, FileSearch, ClipboardCheck, BadgeCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal } from "@/components/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NAPTEC Accreditation & Evaluation" },
      { name: "description", content: "NAPTEC services include institutional accreditation, program accreditation, quality audits, compliance assessments, and professional evaluation." },
      { property: "og:title", content: "Services — NAPTEC" },
      { property: "og:description", content: "Accreditation, audits, compliance, and professional evaluation services." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Building2, t: "Institutional Accreditation", d: "A holistic evaluation of an entire institution's quality systems, governance, and outcomes against NAPTEC standards, resulting in formal institutional recognition." },
  { icon: GraduationCap, t: "Program Accreditation", d: "Focused assessment of specific programs, courses, or professional certification pathways to confirm they meet defined quality and learning-outcome benchmarks." },
  { icon: FileSearch, t: "Quality Audits", d: "Independent audits that examine governance, delivery, and continuous-improvement processes, providing actionable findings and assurance to stakeholders." },
  { icon: ClipboardCheck, t: "Compliance Assessments", d: "Structured verification of conformity with regulatory, sector-specific, and contractual requirements, helping organisations demonstrate accountability." },
  { icon: BadgeCheck, t: "Professional Evaluation Services", d: "Evaluation of skill-development centres, training providers, and learning organisations, including capability reviews and benchmarking." },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive accreditation and evaluation services"
        description="NAPTEC offers a full portfolio of independent services to help organisations demonstrate, verify, and continuously improve their quality."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={(i % 2) * 0.06}>
              <div className="grid gap-6 rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-card)] md:grid-cols-[auto_1fr] md:items-start">
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-navy text-navy-foreground">
                  <s.icon className="h-8 w-8 text-gold" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy">{s.t}</h2>
                  <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 rounded-lg border-2 border-gold/30 bg-navy p-10 text-center text-navy-foreground shadow-[var(--shadow-elegant)]">
          <h2 className="text-2xl font-bold">Not sure which service fits your organisation?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-navy-foreground/80">Our team will help you identify the right pathway toward accreditation and quality recognition.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="lg"><Link to="/apply">Apply for Accreditation <ArrowRight /></Link></Button>
            <Button asChild variant="heroOutline" size="lg"><Link to="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
