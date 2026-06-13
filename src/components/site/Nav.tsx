import { useEffect, useState } from "react";
import { SITE } from "@/lib/config";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/crestq-logo.png.asset.json";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#grades", label: "Classes" },
  { href: "#why", label: "Why Us" },
  { href: "#pricing", label: "Pricing" },
  { href: "#how", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 font-display font-bold text-lg">
          <img src={logoAsset.url} alt="CrestQ logo" className="w-10 h-10 object-contain" />
          <span className="text-foreground tracking-wide">
            Crest<span className="text-accent">Q</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-primary hover:text-primary/80"
          >
            WhatsApp
          </a>
          <a
            href="#book"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-glow transition-shadow"
          >
            Book Free Trial
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 grid place-items-center rounded-lg border border-border bg-background"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-4 py-2.5 rounded-full gradient-primary text-primary-foreground text-sm font-semibold"
            >
              Book Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
