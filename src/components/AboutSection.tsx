import { motion } from "framer-motion";
import { Heart, Target, Users } from "lucide-react";

const highlights = [
  { icon: Heart, text: "Passionate & experienced educators" },
  { icon: Target, text: "Focused on conceptual clarity" },
  { icon: Users, text: "A supportive learning community" },
];

const AboutSection = () => (
  <section id="about" className="bg-card py-16 md:py-20">
    <div className="container">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
            About Bright Future Academy
          </h2>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            Founded in 2015, Bright Future Academy has been a trusted name in
            quality education in Raipur. We believe every student has the
            potential to excel they just need the right guidance, attention,
            and encouragement. Our small-batch approach ensures that no student
            is left behind, and our experienced faculty brings years of
            expertise to make learning engaging and effective.
          </p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-3 rounded-xl bg-background p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <h.icon className="h-5 w-5 text-secondary-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
