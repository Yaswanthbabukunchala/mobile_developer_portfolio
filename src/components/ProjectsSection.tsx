
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Play, Eye, Calendar, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "EcoDelivery - Sustainable Food Delivery",
      description: "Revolutionary food delivery app promoting sustainable practices with carbon footprint tracking and eco-friendly restaurant partnerships.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "Flutter",
      tags: ["Flutter", "Firebase", "Google Maps", "Payment Gateway", "Push Notifications", "Analytics", "ML Integration"],
      github: "https://github.com/example/ecodelivery",
      demo: "https://ecodelivery-demo.com",
      stats: {
        downloads: "50K+",
        rating: 4.8,
        users: "25K+"
      },
      duration: "6 months",
      team: "4 developers",
      featured: true
    },
    {
      id: 2,
      title: "FinanceTracker Pro - Personal Finance Manager",
      description: "Comprehensive personal finance management app with AI-powered insights, expense categorization, and investment tracking.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "Swift",
      tags: ["Swift", "SwiftUI", "Core Data", "CloudKit", "Charts", "Biometric Auth", "Siri Integration"],
      github: "https://github.com/example/financetracker",
      demo: "https://financetracker-demo.com",
      stats: {
        downloads: "100K+",
        rating: 4.9,
        users: "75K+"
      },
      duration: "8 months",
      team: "3 developers",
      featured: true
    },
    {
      id: 3,
      title: "FitnessBuddy - AI Workout Companion",
      description: "AI-powered fitness app with personalized workout plans, form correction using computer vision, and social features.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "Kotlin",
      tags: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "Camera2 API", "Room", "WorkManager", "Material You"],
      github: "https://github.com/example/fitnessbuddy",
      demo: "https://fitnessbuddy-demo.com",
      stats: {
        downloads: "200K+",
        rating: 4.7,
        users: "150K+"
      },
      duration: "10 months",
      team: "5 developers",
      featured: true
    },
    {
      id: 4,
      title: "TravelMate - Smart Travel Planner",
      description: "Intelligent travel planning app with offline maps, real-time translations, and collaborative trip planning features.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "Flutter",
      tags: ["Flutter", "Maps SDK", "Translation API", "Offline Storage", "Collaborative Features", "Weather API"],
      github: "https://github.com/example/travelmate",
      demo: "https://travelmate-demo.com",
      stats: {
        downloads: "80K+",
        rating: 4.6,
        users: "40K+"
      },
      duration: "7 months",
      team: "3 developers",
      featured: false
    },
    {
      id: 5,
      title: "MindfulMoments - Meditation & Wellness",
      description: "Comprehensive meditation and wellness app with guided sessions, progress tracking, and community features.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "Swift",
      tags: ["Swift", "HealthKit", "AVFoundation", "Core Animation", "CloudKit", "Apple Watch"],
      github: "https://github.com/example/mindfulmoments",
      demo: "https://mindfulmoments-demo.com",
      stats: {
        downloads: "120K+",
        rating: 4.8,
        users: "60K+"
      },
      duration: "5 months",
      team: "2 developers",
      featured: false
    },
    {
      id: 6,
      title: "SmartHome Controller",
      description: "IoT smart home management app with voice control, automation, and energy monitoring capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "Kotlin",
      tags: ["Kotlin", "IoT Integration", "Voice Recognition", "Bluetooth", "WiFi Direct", "Custom UI"],
      github: "https://github.com/example/smarthome",
      demo: "https://smarthome-demo.com",
      stats: {
        downloads: "30K+",
        rating: 4.5,
        users: "15K+"
      },
      duration: "9 months",
      team: "4 developers",
      featured: false
    }
  ];

  const categories = ["All", "Flutter", "Swift", "Kotlin"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-blue-900/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Featured</span> <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of innovative mobile applications that have made a significant impact in their respective industries
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="glass-effect rounded-full p-2 flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="project-card group"
            >
              {/* Project Image/Video */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                    <Play className="h-4 w-4 mr-1" />
                    Video
                  </Button>
                  <Link to={`/project/${project.id}`}>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Details
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    {project.category}
                  </Badge>
                  <div className="flex space-x-2">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400" />
                    <span>{project.stats.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{project.stats.users}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-white/10 text-blue-300 rounded border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-white/10 text-gray-400 rounded">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
