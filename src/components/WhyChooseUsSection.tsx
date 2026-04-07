import { motion } from "framer-motion";
import { Award, Users, ClipboardCheck, TrendingUp } from "lucide-react";

const reasons = [
  { icon: Award, title: "Experienced Faculty", desc: "Our teachers bring 10+ years of experience and genuine passion for student growth." },
  { icon: Users, title: "Small Batch Size", desc: "Limited students per batch ensures focused attention and better learning outcomes." },
  { icon: ClipboardCheck, title: "Personal Attention", desc: "Regular one-on-one doubt-solving sessions and personalized study plans." },
  { icon: TrendingUp, title: "Regular Tests & Tracking", desc: "Weekly tests with detailed performance analysis and parent updates." },
];

const WhyChooseUsSection = () => (
  <section id="why-us" className="bg-card py-16 md:py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="mb-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
          Why Choose Us
        </h2>
        <p className="text-muted-foreground">
          What makes Bright Future Academy different
        </p>
      </motion.div>
      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex gap-4 rounded-xl bg-background p-5 transition-all hover:shadow-sm"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/10">
              <r.icon className="h-5 w-5 text-secondary-foreground transition-colors group-hover:text-primary" />
            </div>
            <div>
              <h3 className="mb-1 font-heading text-sm font-semibold text-foreground">{r.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
