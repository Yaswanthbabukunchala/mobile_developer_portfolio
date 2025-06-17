
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Ashish
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
              Senior Mobile & Web Full Stack Developer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Delivering cross-platform apps from MVP to millions of users with 8+ years of experience
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary">
              <Download className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            <Button variant="outline" className="btn-secondary">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button variant="outline" className="btn-secondary">
              <ExternalLink className="mr-2 h-5 w-5" />
              Upwork
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">8+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Downloads</div>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Professional Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
              <span className="text-xl">💻</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
