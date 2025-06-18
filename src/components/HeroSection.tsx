
import { motion } from "framer-motion";
import { ArrowRight, Download, Play, Code, Smartphone, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const techIcons = [
    { icon: Code, name: "Flutter", delay: 0.2 },
    { icon: Smartphone, name: "Kotlin", delay: 0.4 },
    { icon: Globe, name: "Swift", delay: 0.6 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gradient">Mobile Developer</span>
              <br />
              <span className="text-foreground">Extraordinaire</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Crafting exceptional mobile experiences with <span className="text-blue-500 font-semibold">Flutter</span>, 
              <span className="text-green-500 font-semibold"> Kotlin</span>, and 
              <span className="text-orange-500 font-semibold"> Swift</span>. 
              Transforming ideas into powerful, scalable mobile applications.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-3 glow-shadow font-heading">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-3 font-heading">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>

            {/* Floating Tech Icons */}
            <motion.div 
              className="flex justify-center lg:justify-start space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: tech.delay }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity animate-glow"></div>
                    <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-float">
                      <tech.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <span className="mt-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors font-heading">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Profile photo container */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden glass-effect p-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Professional Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating elements around the photo */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center glass-effect"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code className="h-8 w-8 text-blue-500" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center glass-effect"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Smartphone className="h-8 w-8 text-purple-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
