import { Star } from "lucide-react";

const items = [
  {
    quote:
      "My son became more confident in Math and Science within a few weeks. The teacher explains very patiently.",
    name: "Priya S.",
    location: "New Jersey, USA",
  },
  {
    quote:
      "Affordable and very effective. The timings worked perfectly for us in Canada.",
    name: "Rohit M.",
    location: "Toronto, Canada",
  },
  {
    quote:
      "CrestQ helped my daughter improve her basics and solve word problems with confidence.",
    name: "Anita K.",
    location: "London, UK",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by Parents Across the World</h2>
          <p className="mt-3 text-muted-foreground">Real stories from international families.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-card transition-all flex flex-col"
            >
              <div className="flex gap-0.5 text-accent mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
