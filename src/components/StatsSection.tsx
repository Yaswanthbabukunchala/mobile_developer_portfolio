
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Users, Clock, Star, Code, Smartphone, Globe } from "lucide-react";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { 
      icon: Smartphone, 
      number: 50, 
      label: "Apps Delivered", 
      suffix: "+",
      description: "Successfully launched mobile applications",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: Users, 
      number: 30, 
      label: "Happy Clients", 
      suffix: "+",
      description: "Satisfied clients worldwide",
      color: "from-green-500 to-green-600"
    },
    { 
      icon: Star, 
      number: 4.9, 
      label: "Rating", 
      suffix: "/5",
      description: "Average client satisfaction rating",
      color: "from-yellow-500 to-yellow-600"
    },
    { 
      icon: Clock, 
      number: 8, 
      label: "Years Experience", 
      suffix: "+",
      description: "Professional mobile development",
      color: "from-purple-500 to-purple-600"
    },
    { 
      icon: Code, 
      number: 500000, 
      label: "Lines of Code", 
      suffix: "+",
      description: "Written across all projects",
      color: "from-pink-500 to-pink-600"
    },
    { 
      icon: Award, 
      number: 25, 
      label: "Awards Won", 
      suffix: "+",
      description: "Recognition for excellence",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const AnimatedNumber = ({ number, isInView, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        const duration = 2000;
        const increment = number / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= number) {
            setCount(number);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isInView, number]);

    return (
      <span className="text-4xl md:text-5xl font-bold">
        {number > 1000 ? (count / 1000).toFixed(0) + "K" : count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Achievements</span> & <span className="text-white">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and client satisfaction
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="glass-effect rounded-2xl p-8 text-center premium-shadow tech-card-hover">
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity`}></div>
                  <div className={`relative w-16 h-16 mx-auto bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <AnimatedNumber number={stat.number} isInView={isInView} suffix={stat.suffix} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
