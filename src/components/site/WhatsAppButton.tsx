import { SITE } from "@/lib/config";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-[var(--color-whatsapp)] text-primary-foreground shadow-glow hover:scale-105 transition-transform"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
