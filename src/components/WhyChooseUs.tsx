import { motion } from "framer-motion";
import { GraduationCap, Clock, ShieldCheck, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Study at your own pace with lifetime access to all course materials.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Courses",
    description: "Earn recognized certificates to boost your career and credibility.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated support team.",
  },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Why EduVerse</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
          Why Choose <span className="text-gradient">Us</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-glow transition-shadow duration-300"
          >
            <div className="mx-auto mb-5 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
