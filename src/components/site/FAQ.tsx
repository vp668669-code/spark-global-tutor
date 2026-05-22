import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Which classes do you teach?", a: "We teach Maths from Class 1 to Class 10." },
  {
    q: "Do you teach students outside India?",
    a: "Yes, we teach students from USA, Canada, UK, Australia, Middle East and other global locations.",
  },
  { q: "What is the fee?", a: "Our fee is $9 per hour." },
  { q: "Is the class 1-on-1?", a: "Yes, classes are personalized and conducted live online." },
  { q: "Do you offer a trial class?", a: "Yes, parents can book a free trial class." },
  {
    q: "What curriculum do you support?",
    a: "We support CBSE, ICSE, Indian boards, and international school maths requirements.",
  },
  {
    q: "Do you help with homework?",
    a: "Yes, we help with homework, concepts, practice and exam preparation.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-3 text-muted-foreground">Everything parents usually ask us.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl bg-card border border-border shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 gap-4"
                >
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
