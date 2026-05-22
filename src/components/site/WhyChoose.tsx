import { GraduationCap, DollarSign, UserCheck, BookOpen, Globe2, LineChart } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Expert Indian Maths Tutors", desc: "Hand-picked, trained and experienced in teaching global students." },
  { icon: DollarSign, title: "Affordable Global Pricing", desc: "Premium 1-on-1 classes at just $9/hour — unbeatable value." },
  { icon: UserCheck, title: "Personalized 1-on-1 Attention", desc: "Every class is designed around your child's pace and goals." },
  { icon: BookOpen, title: "Class 1 to 10 Curriculum", desc: "Full coverage from number sense to algebra, geometry and trigonometry." },
  { icon: Globe2, title: "Flexible Global Time Slots", desc: "Convenient timings for USA, Canada, UK, Australia and Middle East." },
  { icon: LineChart, title: "Practice & Progress Updates", desc: "Regular homework, assessments and parent feedback reports." },
];

export function WhyChoose() {
  return (
    <section id="why" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-accent-soft text-accent-foreground text-xs font-semibold mb-4">
            Why MathSpark
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Why Parents Worldwide Choose Us</h2>
          <p className="mt-3 text-muted-foreground">
            A premium learning experience designed for international families.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-primary-soft opacity-60" />
              <div className="relative w-12 h-12 rounded-xl gradient-primary text-primary-foreground grid place-items-center mb-4 shadow-soft">
                <Icon className="w-6 h-6" strokeWidth={2.25} />
              </div>
              <div className="relative">
                <div className="text-xs font-semibold text-primary mb-1">0{i + 1}</div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
