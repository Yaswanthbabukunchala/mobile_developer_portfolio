
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Kudos to Ashish for doing a great job. Highly experienced in iOS development and delivered exceptional results on time.",
      author: "John Smith",
      role: "CEO, TechStartup",
      rating: 5,
      platform: "Upwork"
    },
    {
      id: 2,
      text: "Working with Ashish is a truly excellent experience. His technical skills and communication are outstanding.",
      author: "Sarah Johnson",
      role: "Product Manager",
      rating: 5,
      platform: "Upwork"
    },
    {
      id: 3,
      text: "Ashish delivered our mobile app ahead of schedule with perfect functionality. Highly recommended for any mobile development project.",
      author: "Mike Chen",
      role: "Founder, HealthTech",
      rating: 5,
      platform: "Upwork"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.platform}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
