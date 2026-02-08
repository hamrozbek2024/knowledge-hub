import { motion } from "framer-motion";
import { Star } from "lucide-react";
import courseWebdev from "@/assets/course-webdev.jpg";
import courseDatascience from "@/assets/course-datascience.jpg";
import courseDesign from "@/assets/course-design.jpg";

const courses = [
  {
    title: "Full-Stack Web Development",
    image: courseWebdev,
    price: "$49.99",
    rating: 4.8,
    students: "3.2K",
    category: "Development",
  },
  {
    title: "Data Science & Machine Learning",
    image: courseDatascience,
    price: "$59.99",
    rating: 4.9,
    students: "2.8K",
    category: "Data Science",
  },
  {
    title: "UI/UX Design Masterclass",
    image: courseDesign,
    price: "$39.99",
    rating: 4.7,
    students: "4.1K",
    category: "Design",
  },
];

const Courses = () => (
  <section id="courses" className="py-24 bg-surface-warm">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Our Courses</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
          Popular <span className="text-gradient">Courses</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.article
            key={course.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-shadow duration-300"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/80 backdrop-blur text-xs font-semibold text-foreground">
                {course.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-bold text-card-foreground mb-3">{course.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="text-sm font-medium text-foreground">{course.rating}</span>
                  <span className="text-xs text-muted-foreground ml-1">({course.students})</span>
                </div>
                <span className="font-display text-xl font-bold text-primary">{course.price}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Courses;
