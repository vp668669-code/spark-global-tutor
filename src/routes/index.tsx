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
      { title: "CrestQ | Online Math & Science Tutoring for Class 1 to 12 | $9/hour" },
      {
        name: "description",
        content:
          "CrestQ offers affordable online 1-on-1 Math & Science tutoring for Class 1 to 12 students in USA, Canada and global locations at just $9/hour. Visual learning for higher scores.",
      },
      { property: "og:title", content: "CrestQ | Online Math & Science Tutoring for Class 1 to 12 | $9/hour" },
      {
        property: "og:description",
        content:
          "Visual Learning for Higher Scores. Affordable 1-on-1 online Math & Science tutoring for Class 1 to 12 — only $9/hour.",
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
          name: "CrestQ",
          description:
            "Visual Learning for Higher Scores. Online 1-on-1 Math & Science tutoring for Class 1 to 12 students worldwide at $9/hour.",
          areaServed: ["US", "CA", "GB", "AU", "AE", "IN"],
          offers: {
            "@type": "Offer",
            price: "9",
            priceCurrency: "USD",
            description: "Online 1-on-1 Math & Science Tutoring (per hour)",
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
