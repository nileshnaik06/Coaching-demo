import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Stethoscope, FileText } from "lucide-react";

const courses = [
  {
    icon: BookOpen,
    title: "Class 8–10 Foundation",
    desc: "Build a strong academic foundation with concept-driven teaching for Maths, Science, and English.",
  },
  {
    icon: FlaskConical,
    title: "Class 11–12 Science / Commerce",
    desc: "In-depth coaching for PCM, PCB, and Commerce streams with regular tests and board exam preparation.",
  },
  {
    icon: Stethoscope,
    title: "NEET Preparation",
    desc: "Structured NEET coaching with comprehensive study material, mock tests, and individual mentoring.",
  },
  {
    icon: FileText,
    title: "SSC Preparation",
    desc: "Focused preparation for SSC exams covering Reasoning, Maths, English, and General Knowledge.",
  },
];

const CoursesSection = () => (
  <section id="courses" className="bg-background py-16 md:py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="mb-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
          Courses We Offer
        </h2>
        <p className="text-muted-foreground">
          Comprehensive programmes tailored for every learning goal
        </p>
      </motion.div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-xl border border-border/60 bg-card p-6 transition-all hover:border-primary/20 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/10">
              <c.icon className="h-6 w-6 text-secondary-foreground transition-colors group-hover:text-primary" />
            </div>
            <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
              {c.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
