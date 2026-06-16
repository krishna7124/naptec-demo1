import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { brand } from "@/assets/brand";

const columns = [
  {
    title: "Organization",
    links: [
      { to: "/about", label: "About NAPTEC" },
      { to: "/about", label: "Governance" },
      { to: "/standards", label: "Standards & Frameworks" },
      { to: "/directory", label: "Accredited Organizations" },
    ],
  },
  {
    title: "Accreditation",
    links: [
      { to: "/process", label: "Accreditation Process" },
      { to: "/services", label: "Services" },
      { to: "/apply", label: "Apply Now" },
      { to: "/directory", label: "Verify Accreditation" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={brand.seal} alt="NAPTEC official accreditation seal" width={48} height={48} className="h-16 w-16 rounded-full bg-white/95 p-0.5" loading="lazy" />
            <span className="font-serif text-xl font-bold">NAPTEC</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
            National Accreditation and Professional Training Evaluation Council — an
            independent authority advancing excellence through quality assurance.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.to}
                    className="text-sm text-navy-foreground/75 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/75">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>NAPTEC Secretariat, Council House, Capital District (Address placeholder)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:info@naptec.org" className="hover:text-gold">info@naptec.org</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+10000000000" className="hover:text-gold">+1 (000) 000-0000</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-navy-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} NAPTEC. All rights reserved.</p>
          <p>Independent · Impartial · Internationally Aligned</p>
        </div>
      </div>
    </footer>
  );
}
