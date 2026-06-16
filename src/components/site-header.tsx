import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/assets/brand";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/standards", label: "Standards" },
  { to: "/services", label: "Services" },
  { to: "/directory", label: "Accredited" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={brand.horizontal}
            alt="NAPTEC — National Accreditation and Professional Training Evaluation Council"
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-navy after:scale-x-100" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-navy after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="default" size="sm">
            <Link to="/apply">Apply for Accreditation</Link>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-navy" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link to="/apply" onClick={() => setOpen(false)}>
                <ShieldCheck /> Apply for Accreditation
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
