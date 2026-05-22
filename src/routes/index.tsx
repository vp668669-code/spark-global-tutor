import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Grades } from "@/components/site/Grades";
import { Pricing } from "@/components/site/Pricing";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MathSpark | Online Maths Tutoring for Class 1 to 10 | $9/hour" },
      {
        name: "description",
        content:
          "MathSpark offers affordable online 1-on-1 maths tutoring for Class 1 to 10 students in USA, Canada and global locations at just $9/hour. Book a free trial class today.",
      },
      { property: "og:title", content: "MathSpark | Online Maths Tutoring for Class 1 to 10 | $9/hour" },
      {
        property: "og:description",
        content:
          "Affordable 1-on-1 online maths tutoring for Class 1 to 10 — only $9/hour. Trusted by parents in USA, Canada and worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "MathSpark",
          description:
            "Online 1-on-1 maths tutoring for Class 1 to 10 students worldwide at $9/hour.",
          areaServed: ["US", "CA", "GB", "AU", "AE", "IN"],
          offers: {
            "@type": "Offer",
            price: "9",
            priceCurrency: "USD",
            description: "Online 1-on-1 Maths Tutoring (per hour)",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhyChoose />
        <Grades />
        <Pricing />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
