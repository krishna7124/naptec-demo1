import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Scale, ShieldCheck, Landmark, Users } from "lucide-react";
import { PageHero, Reveal, SectionHeading } from "@/components/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NAPTEC — Mission, Vision & Governance" },
      { name: "description", content: "Learn about NAPTEC's mission, vision, core values, governance, and our commitment to independence and integrity in accreditation." },
      { property: "og:title", content: "About NAPTEC" },
      { property: "og:description", content: "Mission, vision, values, and governance of an independent accreditation council." },
    ],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, t: "Integrity", d: "We act ethically and impartially in every evaluation." },
  { icon: Scale, t: "Independence", d: "Our judgments are free from commercial or political influence." },
  { icon: Eye, t: "Transparency", d: "Our standards and methodology are open and accountable." },
  { icon: Users, t: "Excellence", d: "We hold ourselves to the highest professional standards." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About NAPTEC"
        title="An independent voice for quality and trust"
        description="NAPTEC exists to safeguard and elevate the quality of education and professional training through rigorous, independent accreditation and evaluation."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <Target className="h-9 w-9 text-gold" />
              <h2 className="mt-4 text-2xl font-bold text-navy">Our Mission</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To advance excellence in education and professional training by providing independent, credible, and transparent accreditation and evaluation services that protect learners and strengthen public trust.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <Eye className="h-9 w-9 text-gold" />
              <h2 className="mt-4 text-2xl font-bold text-navy">Our Vision</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To be a nationally and internationally recognised authority for quality assurance — a trusted benchmark that organisations aspire to and the public can rely upon.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal><SectionHeading center eyebrow="Core Values" title="The principles that guide us" /></Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="h-full rounded-lg border border-border bg-card p-7 text-center shadow-[var(--shadow-card)]">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-navy text-navy-foreground">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-navy">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading eyebrow="Governance" title="Independent governance structure" description="NAPTEC is governed by an independent council supported by specialist committees of academics, industry experts, and public representatives." />
            <ul className="mt-6 space-y-4">
              {[
                { t: "Governing Council", d: "Sets strategic direction and upholds independence." },
                { t: "Accreditation Panel", d: "Makes impartial, evidence-based accreditation decisions." },
                { t: "Standards Committee", d: "Develops and reviews quality standards and criteria." },
                { t: "Appeals Board", d: "Provides fair and transparent review of decisions." },
              ].map((g) => (
                <li key={g.t} className="flex gap-4 rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <Landmark className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-serif font-bold text-navy">{g.t}</h3>
                    <p className="text-sm text-muted-foreground">{g.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-lg border-2 border-gold/30 bg-navy p-8 text-navy-foreground shadow-[var(--shadow-elegant)]">
              <Scale className="h-10 w-10 text-gold" />
              <h2 className="mt-4 text-2xl font-bold">Independence & Integrity</h2>
              <p className="mt-4 leading-relaxed text-navy-foreground/85">
                NAPTEC maintains strict separation between its evaluation activities and any commercial interest. Our evaluators are bound by codes of conduct and conflict-of-interest policies that protect the impartiality of every decision.
              </p>
              <p className="mt-4 leading-relaxed text-navy-foreground/85">
                We are accountable to the public and committed to transparency in our methods, criteria, and outcomes — ensuring our accreditation carries genuine, defensible value.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
