import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHero, Reveal } from "@/components/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NAPTEC" },
      { name: "description", content: "Get in touch with NAPTEC. Contact our secretariat for accreditation enquiries, support, and general questions." },
      { property: "og:title", content: "Contact NAPTEC" },
      { property: "og:description", content: "Reach the NAPTEC secretariat by email, phone, or message." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(2, "Subject is required").max(150),
  message: z.string().trim().min(5, "Please add a message").max(1500),
});

const details = [
  { icon: Mail, t: "Email", v: "info@naptec.org", href: "mailto:info@naptec.org" },
  { icon: Phone, t: "Phone", v: "+1 (000) 000-0000", href: "tel:+10000000000" },
  { icon: MapPin, t: "Office", v: "Council House, Capital District (Address placeholder)" },
  { icon: Clock, t: "Hours", v: "Mon–Fri · 9:00 – 17:00" },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with NAPTEC"
        description="Whether you're considering accreditation or have a question about our work, our team is here to help."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="grid gap-4">
              {details.map((d) => (
                <div key={d.t} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy text-navy-foreground">
                    <d.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-navy">{d.t}</h3>
                    {d.href ? (
                      <a href={d.href} className="text-sm text-muted-foreground hover:text-navy">{d.v}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{d.v}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-lg border border-border shadow-[var(--shadow-card)]">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfKttofxKl6FRtVR1emCMHRH4z1Dj91wykrTZCJp5xccrKKag/viewform?embedded=true"
                width="100%"
                height="700"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
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
