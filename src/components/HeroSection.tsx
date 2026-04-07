import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  BookOpen,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden  bg-gradient-to-b from-transparent via-foreground/15 to-transparent py-20 md:py-28 lg:py-32">
   
    
    {/* Soft background shapes */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/20" />
      <div className="absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-secondary" />
      <div className="absolute -bottom-16 right-1/4 h-64 w-64 rounded-full bg-primary/[0.10]" />
    </div>

    {/* Floating education icons */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      <BookOpen className="absolute top-20 right-[15%] h-8 w-8 text-primary/10 animate-float" />
      <GraduationCap
        className="absolute bottom-24 left-[12%] h-10 w-10 text-primary/10 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <Lightbulb
        className="absolute top-1/3 left-[8%] h-7 w-7 text-primary/10 animate-float"
        style={{ animationDelay: "2s" }}
      />
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="mb-5 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-medium tracking-wide text-secondary-foreground">
          Trusted by 500+ students in Raipur
        </span>
        <h1 className="mb-5 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
          Guiding Students Towards Academic Success
        </h1>
        <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
          Personalized coaching for Class 8–12, NEET &amp; SSC aspirants.
          Building strong foundations and confident learners since 2015.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-flex items-center  gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-xl transition-all hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            Book a Free Consultation
          </a>
          <a
            href={import.meta.env.VITE_WHATSAPP_API}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-success bg-success/10 px-6 py-3 text-sm font-semibold text-success transition-all hover:bg-success hover:text-success-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
