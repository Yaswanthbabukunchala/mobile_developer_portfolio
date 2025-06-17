
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Kudos to Ashish for doing a great job. Highly experienced in iOS development and delivered exceptional results on time. The app performance exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechStartup Inc.",
      rating: 5,
      platform: "Upwork",
      image: "/placeholder.svg?height=60&width=60"
    },
    {
      id: 2,
      text: "Working with Ashish is a truly excellent experience. His technical skills and communication are outstanding. He delivered our Flutter app with perfect cross-platform functionality.",
      author: "Michael Chen",
      role: "Product Manager, HealthCare Solutions",
      rating: 5,
      platform: "Upwork",
      image: "/placeholder.svg?height=60&width=60"
    },
    {
      id: 3,
      text: "Ashish delivered our mobile app ahead of schedule with perfect functionality. His attention to detail and proactive communication made the entire process smooth. Highly recommended!",
      author: "Emily Rodriguez",
      role: "Founder, FitnessTech",
      rating: 5,
      platform: "Upwork",
      image: "/placeholder.svg?height=60&width=60"
    },
    {
      id: 4,
      text: "The quality of work is exceptional. Ashish built a complex real estate app with advanced features and excellent performance. Will definitely work with him again for future projects.",
      author: "David Thompson",
      role: "CTO, RealEstate Pro",
      rating: 5,
      platform: "Direct Client",
      image: "/placeholder.svg?height=60&width=60"
    },
    {
      id: 5,
      text: "Amazing developer! Built our HIPAA-compliant messaging app with top-notch security features. His expertise in healthcare compliance is remarkable.",
      author: "Dr. Jennifer Kim",
      role: "Chief Medical Officer",
      rating: 5,
      platform: "Upwork",
      image: "/placeholder.svg?height=60&width=60"
    },
    {
      id: 6,
      text: "Ashish transformed our business idea into a successful app with over 100K downloads. His full-stack expertise and business understanding are invaluable.",
      author: "Robert Miller",
      role: "Entrepreneur",
      rating: 5,
      platform: "Long-term Client",
      image: "/placeholder.svg?height=60&width=60"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Clients <span className="text-blue-600">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {testimonial.platform}
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join These Happy Clients?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your project and create something amazing together
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View My Work
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
