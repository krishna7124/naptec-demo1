import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  ClipboardCheck,
  Search,
  Gauge,
  Building2,
  GraduationCap,
  FileSearch,
  BadgeCheck,
  Scale,
  TrendingUp,
  Globe2,
  Users,
  Quote,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/sections";
import heroImg from "@/assets/hero-building.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NAPTEC — Advancing Excellence Through Independent Accreditation" },
      {
        name: "description",
        content:
          "NAPTEC is an independent accreditation and professional evaluation council. Apply for accreditation and discover our standards, methodology, and commitment to quality.",
      },
      { property: "og:title", content: "NAPTEC — Independent Accreditation Authority" },
      {
        property: "og:description",
        content: "Building trust and quality through accreditation, evaluation, and professional standards.",
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Building2, title: "Institutional Accreditation", desc: "Comprehensive evaluation of educational institutions against recognised quality benchmarks." },
  { icon: GraduationCap, title: "Program Accreditation", desc: "Assessment of individual programs, courses, and professional certification pathways." },
  { icon: FileSearch, title: "Quality Audits", desc: "Independent audits that verify governance, delivery, and continuous improvement." },
  { icon: ClipboardCheck, title: "Compliance Assessments", desc: "Verification of conformity with regulatory and sector-specific requirements." },
  { icon: BadgeCheck, title: "Professional Evaluation", desc: "Evaluation of skill development centres and learning organisations." },
  { icon: Scale, title: "Standards Development", desc: "Frameworks and criteria informed by international best practice." },
];

const steps = [
  { n: "01", icon: ClipboardCheck, title: "Application", desc: "Submit your application and eligibility documentation for initial review." },
  { n: "02", icon: FileSearch, title: "Documentation Review", desc: "Our analysts examine your evidence against NAPTEC standards." },
  { n: "03", icon: Search, title: "Evaluation", desc: "On-site and virtual assessment conducted by trained evaluators." },
  { n: "04", icon: Award, title: "Accreditation Decision", desc: "An independent panel determines the accreditation outcome." },
  { n: "05", icon: Gauge, title: "Continuous Monitoring", desc: "Ongoing review ensures sustained quality and compliance." },
];

const benefits = [
  "Independent, third-party validation of quality",
  "Enhanced credibility with students and partners",
  "Recognition aligned with international standards",
  "A clear framework for continuous improvement",
  "Greater access to funding and collaboration",
  "Public trust through transparent evaluation",
];

const stats = [
  { value: "480+", label: "Accredited Organizations", icon: Building2 },
  { value: "32", label: "Countries Recognised", icon: Globe2 },
  { value: "1,200+", label: "Programs Evaluated", icon: GraduationCap },
  { value: "98%", label: "Renewal Satisfaction", icon: TrendingUp },
];

const testimonials = [
  { quote: "NAPTEC accreditation transformed how stakeholders perceive our institution. The process was rigorous, fair, and genuinely constructive.", name: "Dr. A. Reyes", role: "Vice-Chancellor, National Polytechnic (Placeholder)" },
  { quote: "The evaluation gave us a clear roadmap for improvement. We emerged stronger, more transparent, and more trusted.", name: "M. Okafor", role: "Director, Skills Institute (Placeholder)" },
  { quote: "Working with NAPTEC reassured our partners that our programs meet international benchmarks of quality.", name: "S. Lindqvist", role: "Head of Quality, Training Council (Placeholder)" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <img
          src={heroImg}
          alt="Classical institutional architecture representing accreditation authority"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <span className="eyebrow">
              <ShieldCheck className="h-4 w-4" /> Independent Accreditation Authority
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Advancing Excellence Through Independent Accreditation
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/85 sm:text-xl">
              Building trust and quality through accreditation, evaluation, and professional standards.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/apply">
                  Apply for Accreditation <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-navy-foreground/70">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Internationally aligned</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Impartial evaluation</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Transparent standards</span>
            </div>
          </motion.div>
        </div>
        <div className="relative h-1 w-full bg-gradient-to-r from-gold via-gold/40 to-transparent" />
      </section>

      {/* About overview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="About NAPTEC"
              title="An independent council dedicated to quality assurance"
              description="The National Accreditation and Professional Training Evaluation Council evaluates educational institutions, training providers, certification programs, and skill development centres against established standards and best practice."
            />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Operating with strict independence and integrity, NAPTEC provides objective, evidence-based judgments that organisations, governments, and the public can trust.
            </p>
            <Button asChild variant="default" className="mt-7">
              <Link to="/about">Read our mandate <ArrowRight /></Link>
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Scale, t: "Independence", d: "Free from commercial and political influence." },
                { icon: ShieldCheck, t: "Integrity", d: "Rigorous, ethical, and consistent decisions." },
                { icon: Globe2, t: "Recognition", d: "Standards aligned with global frameworks." },
                { icon: TrendingUp, t: "Improvement", d: "Driving continuous quality enhancement." },
              ].map((c) => (
                <div key={c.t} className="rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <c.icon className="h-7 w-7 text-gold" />
                  <h3 className="mt-3 font-serif text-lg font-bold text-navy">{c.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why accreditation matters */}
      <section className="bg-secondary py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Why It Matters"
              title="Why accreditation matters"
              description="Accreditation is the foundation of public confidence in education and training. It assures learners, employers, and society that quality has been independently verified."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Users, t: "Protects Learners", d: "Ensures students invest in programs that meet recognised quality thresholds." },
              { icon: BadgeCheck, t: "Builds Credibility", d: "Signals to employers and partners that an organisation upholds excellence." },
              { icon: Globe2, t: "Enables Recognition", d: "Supports mobility and mutual recognition across borders and sectors." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="h-full rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-navy-foreground">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-navy">{c.t}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading center eyebrow="Our Services" title="NAPTEC services" description="A complete suite of accreditation, audit, and evaluation services tailored to institutions and training providers." />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-gold/50">
                <s.icon className="h-8 w-8 text-navy transition-colors group-hover:text-gold" />
                <h3 className="mt-4 font-serif text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline"><Link to="/services">Explore all services <ArrowRight /></Link></Button>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy py-20 text-navy-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">The Process</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A clear, five-step accreditation journey</h2>
              <p className="mt-4 text-lg text-navy-foreground/75">Transparent at every stage — from application to continuous monitoring.</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative h-full rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                  <span className="font-serif text-3xl font-bold text-gold/80">{s.n}</span>
                  <s.icon className="mt-3 h-7 w-7 text-gold" />
                  <h3 className="mt-3 font-serif text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-navy-foreground/70">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="hero"><Link to="/process">View full process <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="Benefits" title="The benefits of accreditation" description="Accreditation by NAPTEC delivers tangible advantages that strengthen organisations and the communities they serve." />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm leading-relaxed text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center">
                <s.icon className="mx-auto h-8 w-8 text-gold" />
                <p className="mt-3 font-serif text-4xl font-bold text-navy">{s.value}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading center eyebrow="Success Stories" title="Trusted by leading organisations" description="Placeholder testimonials illustrating the experience of accredited institutions." />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                <Quote className="h-8 w-8 text-gold" />
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-serif font-bold text-navy">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "26px 26px" }} />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="eyebrow">Begin Your Journey</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ready to pursue accreditation?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-foreground/80">
              Join a community of organisations recognised for their commitment to excellence and quality assurance.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="xl"><Link to="/apply">Apply for Accreditation <ArrowRight /></Link></Button>
              <Button asChild variant="heroOutline" size="xl"><Link to="/contact">Talk to Our Team</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
