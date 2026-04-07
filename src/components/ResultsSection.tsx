import { motion } from "framer-motion";
import { Trophy, Star, BookCheck, Users } from "lucide-react";

const achievements = [
  { icon: Trophy, value: "95%+", label: "Board exam pass rate" },
  { icon: Star, value: "50+", label: "Students scored above 90% in boards" },
  { icon: BookCheck, value: "30+", label: "NEET selections since 2018" },
  { icon: Users, value: "500+", label: "Students coached successfully" },
];

const ResultsSection = () => (
  <section id="results" className="bg-background py-16 md:py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="mb-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
          Our Results Speak
        </h2>
        <p className="text-muted-foreground">
          Consistent academic excellence, year after year
        </p>
      </motion.div>
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 md:grid-cols-4">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col items-center rounded-xl border border-border/50 bg-card p-5 text-center"
          >
            <a.icon className="mb-3 h-6 w-6 text-primary" />
            <p className="mb-1 font-heading text-2xl font-bold text-foreground md:text-3xl">
              {a.value}
            </p>
            <p className="text-xs leading-snug text-muted-foreground">{a.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
