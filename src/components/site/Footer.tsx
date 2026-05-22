import { SITE } from "@/lib/config";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border text-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="w-9 h-9 rounded-xl bg-accent text-accent-foreground grid place-items-center">
              <Sparkles className="w-5 h-5" />
            </span>
            Math<span className="text-accent">Spark</span>
          </a>
          <p className="mt-3 text-primary-foreground/80 max-w-sm">
            Online Maths Tutoring for Class 1 to 10. Spark confidence in Maths.
          </p>
          <a
            href="#book"
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition"
          >
            Book Free Trial
          </a>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#about" className="hover:text-accent">About</a></li>
            <li><a href="#grades" className="hover:text-accent">Classes</a></li>
            <li><a href="#pricing" className="hover:text-accent">Pricing</a></li>
            <li><a href="#how" className="hover:text-accent">How It Works</a></li>
            <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>
              <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-accent">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                {SITE.email}
              </a>
            </li>
            <li className="text-primary-foreground/70">USA · Canada · UK · Australia · Middle East · Global</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/70">
          <p>© {new Date().getFullYear()} MathSpark. All rights reserved.</p>
          <p>MathSpark — Spark confidence in Maths.</p>
        </div>
      </div>
    </footer>
  );
}
