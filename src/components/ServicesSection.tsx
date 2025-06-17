
import { motion } from "framer-motion";
import { Smartphone, Code, Globe, Zap, Shield, Headphones } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Native iOS Development",
      description: "Expert Swift development for premium iOS applications with native performance and seamless user experience.",
      technologies: ["Swift", "UIKit", "SwiftUI", "Core Data", "ARKit"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Native Android Development", 
      description: "High-performance Android apps built with Kotlin, leveraging the latest Android SDK and Material Design.",
      technologies: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Coroutines"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Globe,
      title: "Cross-Platform Development",
      description: "Efficient Flutter development for beautiful, natively compiled applications across iOS and Android.",
      technologies: ["Flutter", "Dart", "Firebase", "Provider", "Bloc"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "App Performance Optimization",
      description: "Comprehensive performance analysis and optimization to ensure your apps run smoothly and efficiently.",
      technologies: ["Profiling", "Memory Management", "Battery Optimization", "Network Optimization"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Shield,
      title: "Security & Authentication",
      description: "Robust security implementation including biometric authentication, encryption, and secure data storage.",
      technologies: ["OAuth", "Biometrics", "Encryption", "Secure Storage", "HTTPS"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Headphones,
      title: "Consultation & Support",
      description: "Strategic consultation for mobile app architecture, technology stack selection, and ongoing support.",
      technologies: ["Architecture Design", "Code Review", "Technical Consulting", "Maintenance"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Premium</span> <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive mobile development services tailored to bring your vision to life with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative group"
            >
              <div className="glass-effect rounded-2xl p-8 h-full premium-shadow tech-card-hover">
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-blue-300 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
