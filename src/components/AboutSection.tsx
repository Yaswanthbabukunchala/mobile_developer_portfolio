
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { name: "Flutter", icon: "📱" },
    { name: "React", icon: "⚛️" },
    { name: "Swift", icon: "🍎" },
    { name: "SwiftUI", icon: "📲" },
    { name: "Node.js", icon: "🟢" },
    { name: "Firebase", icon: "🔥" },
    { name: "AWS", icon: "☁️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Git", icon: "📝" },
    { name: "Docker", icon: "🐳" },
    { name: "TypeScript", icon: "🔷" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a full stack mobile & web developer with over 8 years of experience. 
            I've helped startups and enterprises launch high-performing cross-platform apps, 
            from MVP to scale. My expertise spans across mobile and web technologies, 
            ensuring seamless user experiences across all platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">{skill.icon}</div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
