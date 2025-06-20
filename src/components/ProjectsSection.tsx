
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Play, Eye, Calendar, Users, Star, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  
  const projects = [
    // Cars Category
    {
      id: 1,
      title: "AutoTempest - Car Search",
      description: "Comprehensive car search platform aggregating listings from multiple sources with advanced filtering and real-time updates.",
      image: "/placeholder_1.png?height=400&width=600",
      category: "Cars",
      platform: "Android",
      tags: ["Kotlin", "REST API", "SQLite", "Material Design", "Google Maps", "Analytics", "Push Notifications"],
      playStore: "https://play.google.com/store/apps/details?id=com.tempestsystems.autotempest&hl=en_US&gl=US",
      stats: { downloads: "100K+", rating: 4.6, users: "50K+" },
      duration: "8 months",
      team: "5 developers"
    },
    {
      id: 2,
      title: "Paris Travel Guide App",
      description: "Smart travel planner with curated itineraries and offline access.",
      image: "/placeholder_1.png?height=400&width=600",
      category: "Travel / Navigation",
      platform: "Android",
      tags: ["Kotlin", "Firebase", "Camera2 API", "Payment Gateway", "Real-time Chat", "Image Processing"],
      playStore: "https://play.google.com/store/apps/details?id=com.caripa.seller&hl=en_US&gl=US",
      stats: { downloads: "75K+", rating: 4.4, users: "35K+" },
      duration: "6 months",
      team: "4 developers"
    },
    {
      id: 3,
      title: "Carsforsale.com Dealer",
      description: "Dealer-centric platform for inventory management and digital car sales.",
      image: "/placeholder_1.png?height=400&width=600",
      category: "Automotive",
      platform: "Cross-Platform",
      tags: ["Flutter", "Swift", "Kotlin", "Dashboard UI", "Analytics", "CRM Integration", "Cloud Sync"],
      playStore: "https://play.google.com/store/apps/details?id=com.cargurus.dealer.app&hl=en_US&gl=US",
      appStore: "https://apps.apple.com/us/app/cargurus-dealer/id1585027728",
      stats: { downloads: "200K+", rating: 4.7, users: "80K+" },
      duration: "10 months",
      team: "6 developers"
    },
    {
      id: 4,
      title: "Smart Gym Workout",
      description: "Personalized fitness app for home and gym workouts.",
      image: "/placeholder_1.png?height=400&width=600",
      category: "Fitness ",
      platform: "Android",
      tags: ["Kotlin", "Jetpack Compose", "Room Database", "WorkManager", "Material You", "OAuth"],
      playStore: "https://play.google.com/store/apps/details?id=com.carsforsale.dealerspider&hl=en_US&gl=US",
      stats: { downloads: "50K+", rating: 4.5, users: "25K+" },
      duration: "5 months",
      team: "3 developers"
    },
    {
      id: 5,
      title: "Spill App",
      description: "Anonymous social platform to share emotions and find support.",
      image: "/placeholder_1.png?height=400&width=600",
      category: "Social / Mental Wellness",
      platform: "Cross-Platform",
      tags: ["Flutter", "Swift", "Auction System", "Community Features", "Video Streaming", "In-App Purchase"],
      playStore: "https://play.google.com/store/apps/details?id=com.hemmings&hl=en_US&gl=US",
      appStore: "https://apps.apple.com/us/app/hemmings/id6444405557",
      stats: { downloads: "30K+", rating: 4.8, users: "15K+" },
      duration: "7 months",
      team: "4 developers"
    },

    // Gym Category
    {
      id: 6,
      title: "Money Manager – Expense Tracker",
      description: "Simple yet powerful budgeting and expense tracking tool.",
      image: "/placeholder_1.png?height=400&width=600",
      category: "Finance / Productivity",
      platform: "IOS",
      tags: ["Kotlin", "TensorFlow Lite", "HealthKit", "Custom UI", "Video Streaming", "ML Integration", "Wearables"],
      playStore: "https://play.google.com/store/apps/details?id=app.shred.android&hl=en_US&gl=US",
      stats: { downloads: "500K+", rating: 4.7, users: "250K+" },
      duration: "9 months",
      team: "5 developers"
    },
    {
      id: 7,
      title: "WaterMinder – Water Reminder",
      description: "Hydration tracker with smart reminders and analytics.",
      image: "/placeholder_1.png?height=400&width=600",
      category: "Health / Wellness",
      platform: "IOS",
      tags: ["Kotlin", "Room Database", "Charts", "Social Features", "Cloud Sync", "Offline Mode"],
      playStore: "https://play.google.com/store/apps/details?id=com.madmustachecompany.workoutapp&hl=en_US&gl=US",
      stats: { downloads: "100K+", rating: 4.5, users: "60K+" },
      duration: "6 months",
      team: "3 developers"
    },
    {
      id: 8,
      title: "Pedometer & Step Counter – Leap Fitness",
      description: "Battery-efficient step counter with offline support.",
      image: "/placeholder_1.png?height=400&width=600",
      category: "Fitness / Activity Tracker",
      platform: "iOS",
      tags: ["Swift", "SwiftUI", "HealthKit", "Apple Watch", "Core Data", "CloudKit", "Siri Integration"],
      appStore: "https://apps.apple.com/us/app/fitness-app-gym-workout-plan/id1114387800",
      stats: { downloads: "80K+", rating: 4.6, users: "40K+" },
      duration: "7 months",
      team: "3 developers"
    },

    // Social Media Category
    {
      id: 9,
      title: "Deepstash – Bite-Sized Knowledge",
      description: "Discover and save ideas through short, curated content.",
      image: "/placeholder_1.png?height=400&width=600",
      category: "Education / Self-Improvement",
      platform: "Cross-Platform",
      tags: ["Flutter", "Swift", "Live Streaming", "Payment Processing", "Real-time Chat", "Content Management", "Push Notifications"],
      playStore: "https://play.google.com/store/apps/details?id=com.fanbase&hl=en_US&gl=US",
      appStore: "https://apps.apple.com/us/app/fanbase/id1439232869",
      stats: { downloads: "300K+", rating: 4.3, users: "150K+" },
      duration: "12 months",
      team: "8 developers"
    },
    {
      id: 10,
      title: "1 Second Everyday: Video Diary",
      description: "Capture daily memories through one-second video clips.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Lifestyle / Journaling",
      platform: "Cross-Platform",
      tags: ["Flutter", "Swift", "Kotlin", "End-to-End Encryption", "Anonymous Messaging", "Mood Analysis", "AI Moderation"],
      playStore: "https://play.google.com/store/apps/details?id=com.spill.spill&hl=en_US&gl=US",
      appStore: "https://apps.apple.com/us/app/spill-app/id1672615367",
      stats: { downloads: "150K+", rating: 4.4, users: "75K+" },
      duration: "8 months",
      team: "6 developers"
    },

    // Messaging Category
    {
      id: 11,
      title: "Never Alone.Love",
      description: "Mental health support platform with peer connections, crisis intervention, and wellness tracking.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Messaging",
      platform: "Android",
      tags: ["Kotlin", "WebRTC", "Crisis Detection", "Peer Support", "Wellness Tracking", "Security", "Real-time"],
      playStore: "https://play.google.com/store/apps/details?id=com.chopra.neveralone&hl=en_US&gl=US",
      stats: { downloads: "25K+", rating: 4.9, users: "12K+" },
      duration: "10 months",
      team: "4 developers"
    },
    {
      id: 12,
      title: "Hucu: HIPAA Compliant Texting",
      description: "Secure healthcare communication platform with HIPAA compliance, encrypted messaging, and audit trails.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Messaging",
      platform: "Android",
      tags: ["Kotlin", "End-to-End Encryption", "HIPAA Compliance", "Audit Logging", "Medical Integration", "Security"],
      playStore: "https://play.google.com/store/apps/details?id=com.hucu.ai&hl=en_US&gl=US",
      stats: { downloads: "40K+", rating: 4.7, users: "20K+" },
      duration: "9 months",
      team: "5 developers"
    },

    // Rent Apps Category
    {
      id: 13,
      title: "Rentler - Apartment Search",
      description: "Modern apartment rental platform with virtual tours, application processing, and tenant screening.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Rent Apps",
      platform: "Cross-Platform",
      tags: ["Flutter", "Swift", "Virtual Tours", "Document Processing", "Payment Gateway", "Geolocation", "Background Checks"],
      playStore: "https://play.google.com/store/apps/details?id=com.rentler.mobile&hl=en_US&gl=US",
      appStore: "https://apps.apple.com/us/app/rentler/id1522924754",
      stats: { downloads: "200K+", rating: 4.5, users: "100K+" },
      duration: "11 months",
      team: "7 developers"
    },
    {
      id: 14,
      title: "RentHop - Apartments for Rent",
      description: "Comprehensive rental search with neighborhood insights, broker tools, and application management.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Rent Apps",
      platform: "Android",
      tags: ["Kotlin", "Google Maps", "Neighborhood Data", "Broker Tools", "Application System", "Reviews"],
      playStore: "https://play.google.com/store/apps/details?id=com.renthop.renthopconsumer&hl=en_US&gl=US",
      stats: { downloads: "150K+", rating: 4.4, users: "75K+" },
      duration: "8 months",
      team: "5 developers"
    }
  ];

  const categories = ["All", "Cars", "Gym", "Social Media", "Messaging", "Rent Apps"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

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
            <span className="text-foreground">Featured</span> <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
          <div className="glass-effect rounded-full p-2 flex space-x-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="project-card group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Platform Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-black/50 text-white backdrop-blur-sm">
                    <Smartphone className="h-3 w-3 mr-1" />
                    {project.platform}
                  </Badge>
                </div>

                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.playStore && (
                    <a href={project.playStore} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                        <Play className="h-4 w-4 mr-1" />
                        Play Store
                      </Button>
                    </a>
                  )}
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
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                    {project.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">{project.stats.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{project.stats.users}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{project.duration}</span>
                  </div>
                  <div>
                    {project.stats.downloads}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 6).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-white/10 text-blue-300 rounded border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 6 && (
                    <span className="px-2 py-1 text-xs bg-white/10 text-muted-foreground rounded">
                      +{project.tags.length - 6} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
