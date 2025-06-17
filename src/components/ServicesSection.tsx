
import { motion } from "framer-motion";
import { Smartphone, Globe, Cloud, Zap, Shield, Headphones } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS & Android apps and cross-platform solutions using Flutter & React Native",
      features: ["iOS & Android", "Flutter", "React Native", "App Store Optimization"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern responsive websites and web applications with cutting-edge technologies",
      features: ["React & Next.js", "Node.js & Express", "TypeScript", "Responsive Design"]
    },
    {
      icon: Cloud,
      title: "Backend Development",
      description: "Scalable server-side solutions, APIs, and cloud infrastructure setup",
      features: ["REST & GraphQL APIs", "AWS & Firebase", "Database Design", "Microservices"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications and improve user experience",
      features: ["Code Optimization", "Database Tuning", "CDN Setup", "Caching Strategies"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement robust security measures and ensure compliance standards",
      features: ["HIPAA Compliance", "Data Encryption", "Security Audits", "Authentication"]
    },
    {
      icon: Headphones,
      title: "Consultation & Support",
      description: "Technical consultation, code review, and ongoing maintenance support",
      features: ["Technical Consulting", "Code Review", "24/7 Support", "Team Training"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, I provide end-to-end development services 
            to bring your digital vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss your requirements and create something amazing together
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
