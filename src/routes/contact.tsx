import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you — your message has been sent.");
      form.reset();
    }, 700);
  }

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
            <form onSubmit={onSubmit} className="rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-2xl font-bold text-navy">Send us a message</h2>
              <div className="mt-6 grid gap-5">
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" required maxLength={100} placeholder="Your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required maxLength={255} placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" name="subject" required maxLength={150} placeholder="How can we help?" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" rows={5} required maxLength={1500} placeholder="Write your message…" />
                </div>
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? "Sending…" : "Send Message"}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
