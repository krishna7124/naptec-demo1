import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download, Layers, CheckCircle2 } from "lucide-react";
import { PageHero, Reveal, SectionHeading } from "@/components/sections";

export const Route = createFileRoute("/standards")({
  head: () => ({
    meta: [
      { title: "Standards & Frameworks — NAPTEC" },
      { name: "description", content: "Explore NAPTEC quality standards, evaluation criteria, accreditation levels, and downloadable resources." },
      { property: "og:title", content: "Standards & Frameworks — NAPTEC" },
      { property: "og:description", content: "Quality standards, evaluation criteria, and accreditation levels." },
    ],
  }),
  component: Standards,
});

const criteria = [
  "Governance, leadership, and strategic direction",
  "Curriculum design and academic quality",
  "Teaching, learning, and assessment practices",
  "Faculty qualifications and development",
  "Learner support and outcomes",
  "Resources, facilities, and infrastructure",
  "Quality assurance and continuous improvement",
  "Ethics, transparency, and accountability",
];

const levels = [
  { t: "Provisional Accreditation", d: "Awarded to new or developing organisations meeting core requirements, with a defined improvement pathway.", years: "Up to 2 years" },
  { t: "Full Accreditation", d: "Granted to organisations demonstrating substantial conformity with all NAPTEC standards.", years: "5 years" },
  { t: "Accreditation with Distinction", d: "Recognises organisations of exemplary quality that exceed benchmark standards.", years: "5 years + recognition" },
];

const resources = [
  { t: "NAPTEC Standards Handbook", s: "PDF · 2.4 MB" },
  { t: "Self-Assessment Template", s: "DOCX · 480 KB" },
  { t: "Evaluation Criteria Guide", s: "PDF · 1.1 MB" },
  { t: "Application Checklist", s: "PDF · 320 KB" },
];

function Standards() {
  return (
    <>
      <PageHero
        eyebrow="Standards & Frameworks"
        title="Benchmarks that define quality"
        description="NAPTEC standards are developed in line with international best practice and reviewed regularly to remain rigorous, relevant, and fair."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Quality Standards" title="A comprehensive evaluation framework" description="Our framework spans the full institutional lifecycle — from governance to learner outcomes — ensuring quality is embedded throughout." />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {criteria.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm text-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal><SectionHeading center eyebrow="Accreditation Levels" title="Recognition that reflects quality" /></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {levels.map((l, i) => (
              <Reveal key={l.t} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                  <Layers className="h-8 w-8 text-gold" />
                  <h3 className="mt-4 font-serif text-lg font-bold text-navy">{l.t}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{l.d}</p>
                  <span className="mt-4 inline-flex w-fit rounded-full bg-navy px-3 py-1 text-xs font-semibold text-navy-foreground">{l.years}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal><SectionHeading center eyebrow="Resources" title="Downloadable resources" description="Access the documents you need to prepare for accreditation. (Sample resources — links are placeholders.)" /></Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {resources.map((r, i) => (
            <Reveal key={r.t} delay={(i % 2) * 0.08}>
              <a href="#" className="flex items-center justify-between rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:border-gold/50">
                <span className="flex items-center gap-4">
                  <FileText className="h-8 w-8 text-navy" />
                  <span>
                    <span className="block font-serif font-bold text-navy">{r.t}</span>
                    <span className="block text-xs text-muted-foreground">{r.s}</span>
                  </span>
                </span>
                <Download className="h-5 w-5 text-gold" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
