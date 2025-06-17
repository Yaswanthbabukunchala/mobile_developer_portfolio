
import { motion } from "framer-motion";

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Mobile Frameworks",
      technologies: [
        { name: "Flutter", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "React Native", level: 85, color: "from-cyan-400 to-cyan-600" },
        { name: "Ionic", level: 80, color: "from-blue-500 to-blue-700" }
      ]
    },
    {
      title: "Native iOS",
      technologies: [
        { name: "Swift", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "SwiftUI", level: 85, color: "from-orange-500 to-orange-700" },
        { name: "UIKit", level: 88, color: "from-red-400 to-red-600" }
      ]
    },
    {
      title: "Native Android",
      technologies: [
        { name: "Kotlin", level: 92, color: "from-green-400 to-green-600" },
        { name: "Jetpack Compose", level: 87, color: "from-green-500 to-green-700" },
        { name: "Java", level: 85, color: "from-blue-600 to-blue-800" }
      ]
    },
    {
      title: "Backend & Cloud",
      technologies: [
        { name: "Firebase", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "AWS", level: 85, color: "from-orange-500 to-orange-700" },
        { name: "Node.js", level: 80, color: "from-green-600 to-green-800" }
      ]
    },
    {
      title: "Tools & Others",
      technologies: [
        { name: "Git", level: 95, color: "from-gray-400 to-gray-600" },
        { name: "Docker", level: 80, color: "from-blue-500 to-blue-700" },
        { name: "CI/CD", level: 85, color: "from-purple-400 to-purple-600" }
      ]
    }
  ];

  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Technology</span> <span className="text-white">Mastery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expertise across the entire mobile development ecosystem with deep knowledge in cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="glass-effect rounded-2xl p-6 premium-shadow"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
              
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.1), duration: 0.6 }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{tech.name}</span>
                      <span className="text-blue-400 font-bold">{tech.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${tech.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.1) + 0.3, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
