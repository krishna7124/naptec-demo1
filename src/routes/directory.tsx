import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, BadgeCheck, Building2, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PageHero, Reveal, SectionHeading } from "@/components/sections";
import { brand } from "@/assets/brand";

export const Route = createFileRoute("/directory")({
  head: () => ({
    meta: [
      { title: "Accredited Organizations — NAPTEC Directory" },
      { name: "description", content: "Search the NAPTEC directory of accredited organisations and verify accreditation status." },
      { property: "og:title", content: "Accredited Organizations — NAPTEC" },
      { property: "og:description", content: "Searchable directory and accreditation verification." },
    ],
  }),
  component: Directory,
});

const orgs = [
  { name: "National Institute of Technology (Placeholder)", level: "Full Accreditation", type: "Institution", id: "NAP-2024-0112" },
  { name: "Centre for Professional Skills (Placeholder)", level: "Accreditation with Distinction", type: "Training Provider", id: "NAP-2023-0087" },
  { name: "Metropolitan Business Academy (Placeholder)", level: "Full Accreditation", type: "Institution", id: "NAP-2024-0203" },
  { name: "Healthcare Training Council (Placeholder)", level: "Provisional Accreditation", type: "Program", id: "NAP-2025-0041" },
  { name: "Digital Skills Foundation (Placeholder)", level: "Full Accreditation", type: "Training Provider", id: "NAP-2023-0156" },
  { name: "Institute of Applied Sciences (Placeholder)", level: "Accreditation with Distinction", type: "Institution", id: "NAP-2022-0019" },
];

function Directory() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return orgs;
    return orgs.filter((o) => o.name.toLowerCase().includes(t) || o.id.toLowerCase().includes(t) || o.type.toLowerCase().includes(t));
  }, [q]);

  return (
    <>
      <PageHero
        eyebrow="Accredited Organizations"
        title="Verify and explore accredited organisations"
        description="Search our directory of accredited institutions and training providers, and verify accreditation status with confidence."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <img
              src={brand.seal}
              alt="NAPTEC official accreditation seal"
              className="mb-6 h-40 w-40"
              loading="lazy"
            />
            <SectionHeading center eyebrow="Directory" title="Searchable directory" description="Search by organisation name, type, or accreditation ID. (Demonstration data — placeholder records.)" />
          </div>
        </Reveal>

        <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-lg border border-border bg-card p-2 shadow-[var(--shadow-card)]">
          <Search className="ml-2 h-5 w-5 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search organisations or accreditation ID…"
            className="border-0 shadow-none focus-visible:ring-0"
            aria-label="Search accredited organisations"
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {filtered.map((o, i) => (
            <Reveal key={o.id} delay={(i % 2) * 0.06}>
              <div className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy text-navy-foreground">
                    <Building2 className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-navy">{o.name}</h3>
                    <p className="text-xs text-muted-foreground">{o.type} · ID {o.id}</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-navy">
                      <BadgeCheck className="h-3.5 w-3.5 text-gold" /> {o.level}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full py-8 text-center text-muted-foreground">No organisations match your search.</p>
          )}
        </div>

        <div className="mt-14 rounded-lg border-2 border-gold/30 bg-navy p-8 text-navy-foreground shadow-[var(--shadow-elegant)]">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-10 w-10 shrink-0 text-gold" />
            <div>
              <h2 className="text-xl font-bold">Accreditation Verification</h2>
              <p className="mt-2 max-w-2xl text-navy-foreground/80">
                To independently verify an accreditation, enter the organisation's accreditation ID above. An official verification portal will be available here, confirming status, level, and validity period.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
