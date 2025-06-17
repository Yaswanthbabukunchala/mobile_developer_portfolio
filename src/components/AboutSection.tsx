
import { motion } from "framer-motion";
import { Award, Users, Clock, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Award, number: "500+", label: "Projects Delivered" },
    { icon: Users, number: "200+", label: "Happy Clients" },
    { icon: Clock, number: "8+", label: "Years Experience" },
    { icon: TrendingUp, number: "50M+", label: "App Downloads" },
  ];

  const skills = [
    { name: "Flutter", level: 95 },
    { name: "React/Next.js", level: 92 },
    { name: "Node.js", level: 88 },
    { name: "Swift/iOS", level: 85 },
    { name: "Firebase", level: 90 },
    { name: "AWS", level: 82 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Ashish</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 8 years of experience 
                  creating exceptional mobile and web applications. My journey began with 
                  a simple goal: to transform innovative ideas into powerful digital solutions.
                </p>
                <p>
                  Throughout my career, I've had the privilege of working with startups 
                  and Fortune 500 companies, helping them scale from MVP to millions of users. 
                  I specialize in cross-platform development, ensuring your app reaches 
                  the widest audience possible.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest tech trends, 
                  contributing to open-source projects, or mentoring aspiring developers.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-1">
                  <div className="w-full h-full bg-gray-100 rounded-3xl flex items-center justify-center">
                    <div className="text-8xl">👨‍💻</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4"
              >
                <Award className="h-8 w-8 text-yellow-500" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4"
              >
                <TrendingUp className="h-8 w-8 text-green-500" />
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
