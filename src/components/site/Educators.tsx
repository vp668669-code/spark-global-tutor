import { GraduationCap } from "lucide-react";
import teachingImg from "@/assets/educator-teaching.jpg";

const educators = [
  {
    name: "Mr. S. S. Srivastava",
    role: "Founder | Math & Science Teacher",
    quals: "Bachelor of Engineering",
    years: "45+ Years",
  },
  {
    name: "Dr. Vijay Prakash",
    role: "Director",
    quals: "B.Tech. | Ph.D.",
    years: "25+ Years",
  },
  {
    name: "Kamini Shrivastava",
    role: "Online Math Educator",
    quals: "M.Com. | B.Ed. | Montessori-Trained",
    years: "20+ Years",
  },
  {
    name: "Kalpana Shrivastava",
    role: "Online Math Educator",
    quals: "B.Com. | PGDCA | PGDBA",
    years: "12+ Years",
  },
  {
    name: "Supriya Supekar",
    role: "Online Math Educator",
    quals: "M.Com. | Montessori-Trained",
    years: "20+ Years",
  },
  {
    name: "Usha Shrivastava",
    role: "Online Math Educator",
    quals: "M.Com. | MBA",
    years: "7+ Years",
  },
];

const initials = (n: string) =>
  n
    .replace(/^(Mr\.|Mrs\.|Dr\.|Ms\.)\s*/, "")
    .split(/\s+/)
    .filter((p) => !p.endsWith("."))
    .slice(0, 2)
    .map((p) => p[0])
    .join("");

export function Educators() {
  return (
    <section id="educators" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Educators</h2>
          <p className="mt-3 text-muted-foreground">
            Qualified, experienced teachers with 129+ years of combined teaching
            experience in Math &amp; Science.
          </p>
        </div>

        <div className="mb-12 rounded-2xl overflow-hidden border border-border shadow-card">
          <img
            src={teachingImg}
            alt="crestQ educator teaching quadratic equations on a digital whiteboard in a live online class"
            loading="lazy"
            width={1200}
            height={704}
            className="w-full h-auto"
          />
        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {educators.map((e) => (
            <div
              key={e.name}
              className="rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-accent grid place-items-center text-primary-foreground font-bold text-lg flex-shrink-0">
                  {initials(e.name)}
                </div>
                <div>
                  <h3 className="font-semibold text-lg leading-tight">{e.name}</h3>
                  <div className="text-xs font-semibold uppercase tracking-wide text-accent mt-1">
                    {e.role}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{e.quals}</p>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-xs font-semibold">
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                {e.years} of Teaching Experience
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <span className="inline-block px-5 py-2.5 rounded-full bg-accent-soft text-accent-foreground font-semibold text-sm">
            129+ Years of Combined Teaching Experience
          </span>
        </div>
      </div>
    </section>
  );
}
