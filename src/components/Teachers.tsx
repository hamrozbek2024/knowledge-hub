import { motion } from "framer-motion";
import teacher1 from "@/assets/teacher1.jpg";
import teacher2 from "@/assets/teacher2.jpg";
import teacher3 from "@/assets/teacher3.jpg";

const teachers = [
  { name: "Dr. Sarah Mitchell", role: "Web Development Lead", image: teacher1, courses: 12 },
  { name: "Prof. James Carter", role: "Data Science Expert", image: teacher2, courses: 8 },
  { name: "Emma Rodriguez", role: "UX Design Instructor", image: teacher3, courses: 15 },
];

const Teachers = () => (
  <section id="teachers" className="py-24 bg-surface-warm">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Our Team</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
          Meet Our <span className="text-gradient">Teachers</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {teachers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group text-center bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-shadow duration-300"
          >
            <div className="relative overflow-hidden aspect-square">
              <img
                src={t.image}
                alt={`${t.name}, ${t.role}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-bold text-card-foreground">{t.name}</h3>
              <p className="text-sm text-primary font-medium mt-1">{t.role}</p>
              <p className="text-xs text-muted-foreground mt-2">{t.courses} Courses</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Teachers;
