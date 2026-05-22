const steps = [
  { n: "01", title: "Book a Free Trial", desc: "Fill the simple form and tell us about your child." },
  { n: "02", title: "We Assess The Level", desc: "Our tutor evaluates strengths and gaps in the trial class." },
  { n: "03", title: "Create a Learning Plan", desc: "A personalized roadmap aligned with the school curriculum." },
  { n: "04", title: "Regular Online Classes", desc: "Your child starts live 1-on-1 maths classes at $9/hour." },
  { n: "05", title: "Parent Progress Updates", desc: "Receive feedback, reports and improvement insights." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="mt-3 text-muted-foreground">
            From your first message to confident maths — in 5 simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card transition-all relative"
            >
              <div className="text-5xl font-bold font-display text-accent leading-none">
                {s.n}
              </div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
