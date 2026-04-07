import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Bright%20Future%20Academy";

const CTASection = () => (
  <section className="bg-primary py-14 md:py-18">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="mb-3 font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
          Start Your Learning Journey With Us
        </h2>
        <p className="mb-7 text-sm text-primary-foreground/70">
          Take the first step towards academic excellence. We're here to help.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={`tel:${import.meta.env.VITE_CALL_ON}`}
            className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-all hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={import.meta.env.VITE_WHATSAPP_API}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/20"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
