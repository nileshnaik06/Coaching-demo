import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Parent of Class 10 Student",
    text: "My daughter's confidence and grades have improved so much since joining Bright Future Academy. The teachers really care about each student.",
  },
  {
    name: "Rahul Verma",
    role: "NEET Aspirant, 2024",
    text: "The structured approach to NEET preparation helped me stay focused. The regular mock tests and personal mentoring made a real difference.",
  },
  {
    name: "Sunita Patel",
    role: "Parent of Class 12 Student",
    text: "We chose this institute because of their small batch sizes. My son gets personal attention and his performance has been consistently improving.",
  },
  {
    name: "Karan Tiwari",
    role: "SSC Aspirant",
    text: "The faculty is very supportive and the study material is well-structured. I feel well-prepared and confident about my exams.",
  },
];

const TrustSection = () => (
  <section className="bg-card py-16 md:py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="mb-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
          What Students &amp; Parents Say
        </h2>
        <p className="text-muted-foreground">
          Hear from our community
        </p>
      </motion.div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col rounded-xl border border-border/50 bg-background p-5"
          >
            <Quote className="mb-3 h-5 w-5 text-primary/30" />
            <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground/80">
              "{t.text}"
            </p>
            <div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
