import { Check, ArrowRight } from "lucide-react";

const includes = [
  "Live 1-on-1 online class",
  "Personalized learning plan",
  "Homework support",
  "Concept practice & worksheets",
  "Progress feedback to parents",
  "Flexible global time slots",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Simple and Affordable Pricing</h2>
          <p className="mt-3 text-muted-foreground">
            One transparent rate. No hidden charges. Cancel anytime.
          </p>
        </div>

        <div className="max-w-lg mx-auto relative">
          <div className="absolute -inset-4 gradient-accent rounded-[2.5rem] blur-2xl opacity-30 -z-10" />
          <div className="rounded-[2rem] bg-card border border-border p-8 md:p-10 shadow-card relative overflow-hidden">
            <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
              Best Value
            </div>
            <div className="text-sm font-semibold text-primary uppercase tracking-wide">
              Per Hour
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-6xl md:text-7xl font-bold font-display text-foreground">$9</span>
              <span className="text-muted-foreground font-medium">/ hour</span>
            </div>
            <p className="mt-3 text-muted-foreground">
              Live 1-on-1 Math & Science tutoring with expert Indian tutors.
            </p>

            <ul className="mt-6 space-y-3">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-success/15 text-success grid place-items-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium">{i}</span>
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-full gradient-primary text-primary-foreground font-semibold shadow-soft hover:shadow-glow transition-shadow"
            >
              Book a Free Trial Class <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
