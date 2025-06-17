
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Eye, Calendar, Users, Star, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "AutoTempest - Car Search",
      description: "Comprehensive car search platform aggregating listings from multiple sources with advanced filtering and real-time updates.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Cars",
      platform: "Android",
      tags: ["Kotlin", "REST API", "SQLite", "Material Design"],
      playStore: "https://play.google.com/store/apps/details?id=com.tempestsystems.autotempest&hl=en_US&gl=US",
      stats: { downloads: "100K+", rating: 4.6, users: "50K+" },
      impact: "Used in 15+ countries"
    },
    {
      id: 2,
      title: "SHRED: Gym & Home Workout",
      description: "Comprehensive fitness app with personalized workout plans, progress tracking, and AI-powered form correction.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Fitness",
      platform: "Android",
      tags: ["Kotlin", "TensorFlow Lite", "HealthKit", "Custom UI"],
      playStore: "https://play.google.com/store/apps/details?id=app.shred.android&hl=en_US&gl=US",
      stats: { downloads: "500K+", rating: 4.7, users: "250K+" },
      impact: "AI-powered form correction"
    },
    {
      id: 3,
      title: "Fanbase - Creator Platform",
      description: "Social platform connecting fans with creators through exclusive content, live streams, and community features.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Social Media",
      platform: "Cross-Platform",
      tags: ["Flutter", "Swift", "Live Streaming", "Payment Processing"],
      playStore: "https://play.google.com/store/apps/details?id=com.fanbase&hl=en_US&gl=US",
      appStore: "https://apps.apple.com/us/app/fanbase/id1439232869",
      stats: { downloads: "300K+", rating: 4.3, users: "150K+" },
      impact: "Live streaming platform"
    },
    {
      id: 4,
      title: "Hucu: HIPAA Compliant Texting",
      description: "Secure healthcare communication platform with HIPAA compliance, encrypted messaging, and audit trails.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Healthcare",
      platform: "Android",
      tags: ["Kotlin", "End-to-End Encryption", "HIPAA Compliance"],
      playStore: "https://play.google.com/store/apps/details?id=com.hucu.ai&hl=en_US&gl=US",
      stats: { downloads: "40K+", rating: 4.7, users: "20K+" },
      impact: "HIPAA-compliant messaging"
    },
    {
      id: 5,
      title: "Rentler - Apartment Search",
      description: "Modern apartment rental platform with virtual tours, application processing, and tenant screening.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Real Estate",
      platform: "Cross-Platform",
      tags: ["Flutter", "Swift", "Virtual Tours", "Payment Gateway"],
      playStore: "https://play.google.com/store/apps/details?id=com.rentler.mobile&hl=en_US&gl=US",
      appStore: "https://apps.apple.com/us/app/rentler/id1522924754",
      stats: { downloads: "200K+", rating: 4.5, users: "100K+" },
      impact: "Virtual tour technology"
    },
    {
      id: 6,
      title: "CarGurus Dealer",
      description: "Professional dealer management platform with inventory tracking, customer communication, and analytics dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Cars",
      platform: "Cross-Platform",
      tags: ["Flutter", "Swift", "Kotlin", "Dashboard UI"],
      playStore: "https://play.google.com/store/apps/details?id=com.cargurus.dealer.app&hl=en_US&gl=US",
      appStore: "https://apps.apple.com/us/app/cargurus-dealer/id1585027728",
      stats: { downloads: "200K+", rating: 4.7, users: "80K+" },
      impact: "Dealer management system"
    }
  ];

  const categories = ["All", "Cars", "Fitness", "Social Media", "Healthcare", "Real Estate"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world mobile applications developed across various industries with millions of downloads
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 overflow-x-auto"
        >
          <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 whitespace-nowrap ${
                  filter === category
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="project-card group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-100 text-blue-800 text-xs">
                    <Smartphone className="h-3 w-3 mr-1" />
                    {project.platform}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded">
                    <Star className="h-3 w-3 text-yellow-500" />
                    <span className="text-xs font-medium">{project.stats.rating}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <Badge variant="secondary" className="tech-badge mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {project.impact}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="tech-badge text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="tech-badge text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Link to={`/project/${project.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                  </Link>
                  {project.playStore && (
                    <a href={project.playStore} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="btn-primary">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="flex space-x-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button className="bg-blue-600 text-white">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
