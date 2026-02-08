import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Frontend Developer",
    text: "EduVerse transformed my career. The courses are well-structured, and the instructors are incredibly knowledgeable. I landed my dream job within months!",
  },
  {
    name: "Maria Chen",
    role: "Data Analyst",
    text: "The data science program exceeded my expectations. Real-world projects and personalized feedback made all the difference. Highly recommended!",
  },
  {
    name: "David Kim",
    role: "UX Designer",
    text: "As someone switching careers, EduVerse gave me the confidence and skills I needed. The community is supportive and the content is top-notch.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            What Students <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 sm:p-12 shadow-card text-center"
            >
              <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
              <p className="text-lg text-card-foreground leading-relaxed mb-6">
                "{testimonials[current].text}"
              </p>
              <p className="font-display font-bold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
