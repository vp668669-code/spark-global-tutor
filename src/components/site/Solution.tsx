import { CheckCircle2 } from "lucide-react";

const points = [
  "Concept clarity built from the ground up",
  "Regular practice with personalized worksheets",
  "Homework help and doubt-solving",
  "Exam preparation and revision strategies",
  "Confidence building through small wins",
];

export function Solution() {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold mb-4">
            Our Approach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            MathSpark Builds <span className="text-primary">Strong Maths Confidence</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            At MathSpark, we provide personalized online maths tutoring for Class 1 to 12
            students. Our tutors focus on concept clarity, practice, homework help, exam
            preparation, and confidence building — class after class.
          </p>
        </div>
        <ul className="grid gap-3">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-soft"
            >
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span className="font-medium">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
