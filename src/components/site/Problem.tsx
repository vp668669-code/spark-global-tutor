import { Frown, BookX, Brain, Clock4, User, Briefcase } from "lucide-react";

const items = [
  { icon: Frown, title: "Low confidence in maths", desc: "Hesitates to attempt problems or ask questions in class." },
  { icon: BookX, title: "Difficulty in word problems", desc: "Struggles to translate language into equations." },
  { icon: Brain, title: "Weak basics", desc: "Gaps in fundamentals make new topics harder." },
  { icon: Clock4, title: "Fear of exams", desc: "Stress and anxiety before tests and assessments." },
  { icon: User, title: "Needs personal attention", desc: "Classroom pace doesn't suit every learner." },
  { icon: Briefcase, title: "Busy parent schedule", desc: "You can't always help with homework — we can." },
];

export function Problem() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Is Your Child Struggling With Maths?</h2>
          <p className="mt-3 text-muted-foreground">
            You're not alone. These are the most common challenges parents share with us.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-soft text-accent grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" strokeWidth={2.25} />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
