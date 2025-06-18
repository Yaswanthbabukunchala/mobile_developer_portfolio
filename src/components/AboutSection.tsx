
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
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate mobile developer crafting exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 font-heading text-gradient">
                My Journey
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate mobile app developer with over <span className="text-blue-500 font-semibold">8 years of experience</span> building 
                high-performance applications for both iOS and Android. I specialize in cross-platform development using 
                <span className="text-blue-500 font-semibold"> Flutter</span>, along with deep expertise in native iOS 
                (<span className="text-orange-500 font-semibold">Swift/SwiftUI</span>).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                From MVPs to production-ready apps, I've helped startups and enterprises launch smooth, scalable, and 
                visually appealing mobile experiences. My focus is on clean architecture, responsive UI, and seamless 
                integration with backend systems like <span className="text-yellow-500 font-semibold">Firebase</span> and 
                <span className="text-green-500 font-semibold"> REST APIs</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I take pride in delivering apps that not only work flawlessly but also delight users across devices.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Skills */}
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 font-heading text-gradient">
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium font-heading">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold font-heading text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-heading">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
