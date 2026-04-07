import { motion } from "framer-motion";
import { Users, Search, MessageCircle, CheckCircle } from "lucide-react";

const benefits = [
  { icon: Users, title: "Get More Student Enquiries", desc: "Attract students and parents actively searching for coaching classes in your area." },
  { icon: Search, title: "Rank on Google", desc: "Appear on the first page when parents search for tuition classes near them." },
  { icon: MessageCircle, title: "Direct WhatsApp Leads", desc: "Students contact you instantly on WhatsApp — no forms, no waiting." },
  { icon: CheckCircle, title: "Simple & Effective System", desc: "No complicated setup. We handle everything so you can focus on teaching." },
];

const BenefitsSection = () => (
  <section className="bg-background py-16 md:py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="mb-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Why Coaching Institutes Choose Us
        </h2>
        <p className="text-muted-foreground">
          Everything you need to fill your batches
        </p>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
              <b.icon className="h-7 w-7 text-secondary-foreground" />
            </div>
            <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
