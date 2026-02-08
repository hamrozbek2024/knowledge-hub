import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: BookOpen, value: "200+", label: "Courses" },
  { icon: Users, value: "15K+", label: "Students" },
  { icon: Award, value: "50+", label: "Experts" },
];

const Hero = () => {
  const scrollToCourses = () => {
    document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Students learning together" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      </div>

      <div className="container relative mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm font-semibold uppercase tracking-widest text-primary mb-4"
          >
            Welcome to EduVerse
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Learn Without{" "}
            <span className="text-gradient">Limits</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8"
          >
            Unlock your potential with expert-led courses designed for the modern learner. 
            Join thousands of students building their future, one lesson at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToCourses}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-border text-foreground font-semibold hover:bg-muted transition-colors"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-md"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
