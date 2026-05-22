import { SITE } from "@/lib/config";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import heroImg from "@/assets/hero-student.jpg";

const badges = [
  "Class 1–12 Maths",
  "1-on-1 Online",
  "International Students",
  "Indian Expert Tutors",
  "Only $9/hour",
  "Flexible Timings",
];

export function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 gradient-hero -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/15 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent-foreground text-xs font-semibold mb-5">
            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
            Trusted by parents worldwide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
            Make Your Child{" "}
            <span className="relative inline-block text-accent">Confident</span>{" "}
            in Maths
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Live online maths tutoring for Class 1 to 12 students across USA, Canada
            and global locations — only <strong className="text-foreground">$9/hour</strong>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full gradient-primary text-primary-foreground font-semibold shadow-soft hover:shadow-glow transition-shadow"
            >
              Book a Free Trial Class <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-whatsapp)] text-primary-foreground font-semibold shadow-soft hover:opacity-90 transition"
            >
              <MessageCircle className="w-4 h-4" /> Talk to Us on WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="px-3 py-1.5 rounded-full bg-background/80 border border-border text-xs font-medium text-foreground shadow-soft"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="relative fade-up">
          <div className="absolute inset-0 gradient-accent rounded-[2rem] rotate-3 -z-10 opacity-40 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-card bg-card border border-border animate-float">
            <img
              src={heroImg}
              alt="Happy student learning maths online with a friendly tutor on a video call"
              width={1280}
              height={1024}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl px-4 py-3 shadow-card hidden sm:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-accent grid place-items-center text-primary-foreground font-bold">
              A+
            </div>
            <div>
              <div className="text-sm font-semibold">Confidence up 90%</div>
              <div className="text-xs text-muted-foreground">After 4 weeks</div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-card hidden sm:block">
            <div className="text-xs text-muted-foreground">Starting at</div>
            <div className="text-xl font-bold text-primary">$9<span className="text-sm text-muted-foreground">/hr</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
