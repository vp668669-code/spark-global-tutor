const grades = [
  {
    range: "Class 1–2",
    gradient: "linear-gradient(135deg, oklch(0.72 0.22 315), oklch(0.78 0.18 350))",
    topics: ["Number sense", "Addition & Subtraction", "Shapes", "Basic concepts"],
  },
  {
    range: "Class 3–5",
    gradient: "linear-gradient(135deg, oklch(0.8 0.18 70), oklch(0.74 0.2 40))",
    topics: ["Multiplication & Division", "Fractions", "Decimals", "Word problems"],
  },
  {
    range: "Class 6–8",
    gradient: "linear-gradient(135deg, oklch(0.7 0.18 220), oklch(0.65 0.22 260))",
    topics: ["Algebra basics", "Ratios & Percentages", "Geometry", "Integers"],
  },
  {
    range: "Class 9–10",
    gradient: "linear-gradient(135deg, oklch(0.75 0.2 160), oklch(0.7 0.22 195))",
    topics: ["Algebra", "Geometry", "Trigonometry", "Statistics & Exam Prep"],
  },
  {
    range: "Class 11–12",
    gradient: "linear-gradient(135deg, oklch(0.7 0.22 30), oklch(0.72 0.22 350))",
    topics: ["Calculus", "Vectors & 3D Geometry", "Probability", "Board & Competitive Prep"],
  },
];

const boards = ["CBSE", "ICSE", "Indian State Boards", "Common Core (USA)", "UK / Canada / Australia", "Homework & Tests"];

export function Grades() {
  return (
    <section id="grades" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Maths Classes We Offer</h2>
          <p className="mt-3 text-muted-foreground">
            Structured curriculum from foundations to board exam preparation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {grades.map((g) => (
            <div
              key={g.range}
              className="rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all"
            >
              <div
                className="w-full h-24 rounded-xl grid place-items-center mb-5 shadow-sog"
                style={{ background: g.gradient }}
              >
                <span className="font-display font-bold text-2xl text-background">{g.range}</span>
              </div>
              <ul className="space-y-2">
                {g.topics.map((t) => (
                  <li key={t} className="text-sm text-foreground flex gap-2">
                    <span className="text-accent">●</span> {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Curriculum Support</h3>
          <p className="text-muted-foreground mb-6">We align with your child's school curriculum:</p>
          <div className="flex flex-wrap gap-2.5">
            {boards.map((b) => (
              <span
                key={b}
                className="px-4 py-2 rounded-full bg-primary-soft text-primary text-sm font-semibold"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
