import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Import } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi, I'm ${name || "interested"}. My number is ${phone || "N/A"}. ${message || "I'd like to know more about your courses."}`,
    );
    window.open(`${import.meta.env.VITE_WHATSAPP_API}?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="bg-background py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">We'd love to hear from you</p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-5"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <Phone className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <a
                  href= {`tel:${import.meta.env.VITE_CALL_ON}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Call us
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <MessageCircle className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">WhatsApp</p>
                <a
                  href={import.meta.env.VITE_WHATSAPP_API}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Chat with us
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <MapPin className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Address</p>
                <p className="text-sm text-muted-foreground">
                  Near City Center Mall, Civil Lines,
                  <br />
                  Raipur, Chhattisgarh 492001
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-border/60 bg-card p-6"
          >
            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
                placeholder="Your name"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Phone
              </label>
              <input
                type="tel"
                value={phone}
                required={true}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone number"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
            </div>
            <div className="mb-5">
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="I'm interested in..."
                rows={3}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 resize-none"
              />
            </div>
            <button
              onClick={handleWhatsApp}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Send via WhatsApp
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
