import { BookingForm } from "./BookingForm";
import { SITE } from "@/lib/config";
import { Mail, MessageCircle, Globe2 } from "lucide-react";

const countries = ["USA", "Canada", "UK", "Australia", "Middle East", "India", "Global"];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12" id="book">
          <div className="inline-block px-3 py-1 rounded-full bg-accent-soft text-accent-foreground text-xs font-semibold mb-4">
            Free Trial Class
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Book Your Free Trial Today</h2>
          <p className="mt-3 text-muted-foreground">
            Fill the form below and our team will reach out to schedule your child's first class.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-card border border-border p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-whatsapp)]/15 text-[var(--color-whatsapp)] grid place-items-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-semibold">WhatsApp Us</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Fastest way to reach our team for questions or scheduling.
              </p>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-whatsapp)] text-primary-foreground text-sm font-semibold"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl bg-card border border-border p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary-soft text-primary grid place-items-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-semibold">Email</h3>
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="text-primary font-medium hover:underline text-sm"
              >
                {SITE.email}
              </a>
            </div>

            <div className="rounded-2xl bg-card border border-border p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent grid place-items-center">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="font-semibold">Countries Served</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {countries.map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-1 rounded-full bg-muted text-foreground text-xs font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
