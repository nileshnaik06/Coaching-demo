import { motion } from "framer-motion";
import { Globe, Search, MessageCircle } from "lucide-react";

const steps = [
  { icon: Globe, step: "Step 1", title: "We Build Your Website", desc: "A professional, mobile-friendly website designed to convert visitors into enquiries." },
  { icon: Search, step: "Step 2", title: "Students Find You on Google", desc: "We optimise your site so parents and students discover you when searching online." },
  { icon: MessageCircle, step: "Step 3", title: "They Contact You on WhatsApp", desc: "One-click WhatsApp button lets students reach you instantly — no barriers." },
];

const HowItWorksSection = () => (
  <section className="bg-card py-16 md:py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="mb-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
          How It Works
        </h2>
        <p className="text-muted-foreground">
          Three simple steps to more admissions
        </p>
      </motion.div>
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <s.icon className="h-7 w-7" />
            </div>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary">
              {s.step}
            </span>
            <h3 className="mb-2 font-heading text-xl font-bold text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
