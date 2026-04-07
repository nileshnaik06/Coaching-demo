import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href={`${import.meta.env.VITE_WHATSAPP_API}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Bright%20Future%20Academy`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 animate-float items-center justify-center rounded-full bg-success shadow-lg transition-transform hover:scale-110"
  >
    <MessageCircle className="h-7 w-7 text-success-foreground" />
  </a>
);

export default WhatsAppFloat;
