
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Eye, Star, Download, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PortfolioSection = () => {
  const [filter, setFilter] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "AutoTempest - Car Search",
      description: "Comprehensive car search platform aggregating listings from multiple sources with advanced filtering",
      image: "/placeholder.svg?height=300&width=400",
      category: "Mobile App",
      platform: "Android",
      tags: ["Kotlin", "REST API", "SQLite"],
      playStore: "https://play.google.com/store/apps/details?id=com.tempestsystems.autotempest",
      stats: { downloads: "100K+", rating: 4.6 },
      featured: true
    },
    {
      id: 2,
      title: "SHRED: Gym & Home Workout",
      description: "AI-powered fitness app with personalized workout plans and form correction technology",
      image: "/placeholder.svg?height=300&width=400",
      category: "Mobile App",
      platform: "Android",
      tags: ["Kotlin", "TensorFlow", "HealthKit"],
      playStore: "https://play.google.com/store/apps/details?id=app.shred.android",
      stats: { downloads: "500K+", rating: 4.7 },
      featured: true
    },
    {
      id: 3,
      title: "Fanbase - Creator Platform",
      description: "Social platform connecting creators with fans through exclusive content and live streaming",
      image: "/placeholder.svg?height=300&width=400",
      category: "Cross-Platform",
      platform: "iOS & Android",
      tags: ["Flutter", "Live Streaming", "Payment"],
      playStore: "https://play.google.com/store/apps/details?id=com.fanbase",
      appStore: "https://apps.apple.com/us/app/fanbase/id1439232869",
      stats: { downloads: "300K+", rating: 4.3 },
      featured: true
    },
    {
      id: 4,
      title: "Rentler - Apartment Search",
      description: "Modern rental platform with virtual tours and application processing",
      image: "/placeholder.svg?height=300&width=400",
      category: "Cross-Platform",
      platform: "iOS & Android",
      tags: ["Flutter", "Virtual Tours", "Payment"],
      playStore: "https://play.google.com/store/apps/details?id=com.rentler.mobile",
      appStore: "https://apps.apple.com/us/app/rentler/id1522924754",
      stats: { downloads: "200K+", rating: 4.5 }
    },
    {
      id: 5,
      title: "Hucu: HIPAA Compliant Texting",
      description: "Secure healthcare communication with end-to-end encryption and audit trails",
      image: "/placeholder.svg?height=300&width=400",
      category: "Healthcare",
      platform: "Android",
      tags: ["Kotlin", "Encryption", "HIPAA"],
      playStore: "https://play.google.com/store/apps/details?id=com.hucu.ai",
      stats: { downloads: "40K+", rating: 4.7 }
    },
    {
      id: 6,
      title: "CarGurus Dealer",
      description: "Professional dealer management with inventory tracking and analytics",
      image: "/placeholder.svg?height=300&width=400",
      category: "Business",
      platform: "iOS & Android",
      tags: ["Flutter", "Analytics", "Management"],
      playStore: "https://play.google.com/store/apps/details?id=com.cargurus.dealer.app",
      appStore: "https://apps.apple.com/us/app/cargurus-dealer/id1585027728",
      stats: { downloads: "200K+", rating: 4.7 }
    }
  ];

  const categories = ["All", "Mobile App", "Cross-Platform", "Healthcare", "Business"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
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
            Featured <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world applications with millions of downloads across various industries
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 bg-gray-100 rounded-xl p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-blue-200' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="flex space-x-2">
                      {project.playStore && (
                        <a href={project.playStore} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </a>
                      )}
                      {project.appStore && (
                        <a href={project.appStore} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
                            <Download className="h-4 w-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-400 text-yellow-900 font-semibold">
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Platform Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {project.platform.includes('&') ? <Globe className="h-3 w-3 mr-1" /> : <Smartphone className="h-3 w-3 mr-1" />}
                    {project.platform}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-white/90 px-2 py-1 rounded">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium text-gray-900">{project.stats.rating}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <Badge variant="outline" className="mb-3 text-blue-600 border-blue-200">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {project.stats.downloads}
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    {project.stats.rating} rating
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                  {project.playStore && (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
