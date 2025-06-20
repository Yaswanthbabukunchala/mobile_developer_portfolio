
import { motion } from "framer-motion";
import { Code, Smartphone, Globe, Award, Users, Coffee } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "Flutter", level: 95 },
    { name: "Swift/SwiftUI", level: 90 },
    { name: "Kotlin", level: 85 },
    { name: "React Native", level: 80 },
    { name: "Firebase", level: 90 },
    { name: "REST APIs", level: 95 },
  ];

  const stats = [
    { icon: Code, value: "8+", label: "Years Experience" },
    { icon: Smartphone, value: "50+", label: "Apps Delivered" },
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate mobile developer crafting exceptional digital experiences
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Journey Story - Takes 2 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="p-8 rounded-2xl h-full border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-xl shadow-black/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold font-heading text-gradient">
                  My Journey
                </h3>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate mobile app developer with over <span className="text-blue-500 font-semibold">8 years of experience</span> building 
                  high-performance applications for both iOS and Android. I specialize in cross-platform development using 
                  <span className="text-blue-500 font-semibold"> Flutter</span>, along with deep expertise in native iOS 
                  (<span className="text-orange-500 font-semibold">Swift/SwiftUI</span>).
                </p>
                
                <p>
                  From MVPs to production-ready apps, I've helped startups and enterprises launch smooth, scalable, and 
                  visually appealing mobile experiences. My focus is on clean architecture, responsive UI, and seamless 
                  integration with backend systems like <span className="text-yellow-500 font-semibold">Firebase</span> and 
                  <span className="text-green-500 font-semibold"> REST APIs</span>.
                </p>
                
                <p>
                  I take pride in delivering apps that not only work flawlessly but also delight users across devices.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-effect p-8 rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-gradient">
                  Skills & Expertise
                </h3>
              </div>
              
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold font-heading text-foreground">{skill.name}</span>
                      <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="glass-effect p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold font-heading text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-heading font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
