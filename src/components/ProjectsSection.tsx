import { motion } from "framer-motion";
import { Calendar, Users, Star, Smartphone, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    // Cars Category
    {
  id: 1,
  title: "Fixail - Home Services",
  description: "An all-in-one platform that connects users with trusted professionals for various household needs.",
  image: "/project_dp_1.jpg?height=300&width=500",
  category: "Home Services",
  platform: "Android/iOS",
  tags: ["Kotlin", "REST API", "SQLite", "Material Design", "Google Maps", "Analytics", "Push Notifications"],
  playStore: "https://apps.apple.com/us/app/fixail-your-home-service-app/id1663600200",
  stats: { downloads: "50K+", rating: 4.8, reviews: "22", users: "25K+" },
  duration: "8 months",
  team: "5 developers"
},
    {
  id: 2,
  title: "Paris Travel Guide App",
  description: "Smart travel planner with curated itineraries and offline access.",
  image: "/project_dp_2.jpg?height=400&width=600",
  category: "Travel / Navigation",
  platform: "iOS",
  tags: ["Kotlin", "Firebase", "Camera2 API", "Payment Gateway", "Real-time Chat", "Image Processing"],
  playStore: "https://apps.apple.com/us/app/paris-travel-guide/id330954821",
  stats: { downloads: "75K+", rating: 4.6, reviews: "120", users: "75K+" },
  duration: "2 months",
  team: "4 developers"
},
    {
  id: 3,
  title: "Carsforsale.com Dealer",
  description: "Dealer‑centric platform for inventory management and digital car sales.",
  image: "/project_dp_3.png?height=400&width=600",
  category: "Automotive",
  platform: "Cross-Platform",
  tags: ["Flutter", "Swift", "Kotlin", "Dashboard UI", "Analytics", "CRM Integration", "Cloud Sync"],
  playStore: "https://play.google.com/store/apps/details?id=com.cargurus.dealer.app&hl=en_US&gl=US",
  appStore: "https://apps.apple.com/us/app/carsforsale-com-dealer/id980764280",
  stats: { downloads: "30K+", rating: 4.5, reviews: "210", users: "18K+" },
  duration: "10 months",
  team: "6 developers"
},
  {
  id: 4,
  title: "Smart Gym Workout",
  description: "Personalized fitness app for home and gym workouts.",
  image: "/project_dp_4.png?height=400&width=600",
  category: "Fitness",
  platform: "Android/iOS",
  tags: ["Kotlin", "Jetpack Compose", "Room Database", "WorkManager", "Material You", "OAuth"],
  playStore: "https://apps.apple.com/us/app/smartgym-gym-home-workouts/id922744883",
  stats: { downloads: "80K+", rating: 4.7, reviews: "251", users: "40K+" },
  duration: "5 months",
  team: "3 developers"
},
    {
  id: 5,
  title: "Planner Pro",
  description: "Planner Pro is a premium daily planner with calendar, tasks, notes, and focus mode.",
  image: "/placeholder_5.jpeg?height=400&width=600",
  category: "Productivity",
  platform: "Cross-Platform",
  tags: ["Flutter", "Swift", "Dart", "Sync", "Calendar", "Pomodoro"],
  playStore: "https://play.google.com/store/apps/details?id=com.appxy.planner",
  stats: { downloads: "120+", rating: 4.4, reviews: "59", users: "60K+" },
  duration: "— years (since launched)",
  team: "— developers"
},
    {
  id: 6,
  title: "Money Manager – Expense Tracker",
  description: "Simple yet powerful budgeting and expense tracking tool.",
  image: "/placeholder_6.jpg?height=400&width=600",
  category: "Finance / Productivity",
  platform: "iOS",
  tags: ["Kotlin", "SQLite", "Custom UI", "Analytics"],
  playStore: "https://apps.apple.com/us/app/money-manager-expense-tracker/id1510997753",
  stats: { downloads: "250K+", rating: 4.8, reviews: "654", users: "190K+" },
  duration: " 7 months",
  team: "Small team / solo developer"
},
    {
  id: 7,
  title: "WaterMinder – Water Reminder",
  description: "Hydration tracker with smart reminders and analytics.",
  image: "/project_dp_7.jpeg?height=400&width=600",
  category: "Health / Wellness",
  platform: "iOS",
  tags: ["Swift", "HealthKit", "Widgets", "Cloud Sync", "Apple Watch"],
  playStore: "https://apps.apple.com/us/app/water-tracker-by-waterminder/id653031147",
  stats: { downloads: "300K", rating: 4.6, reviews: "31.3K", users: "210K+" },
  duration: "6 months",
  team: "3 developers"
},

    {
  id: 8,
  title: "Pedometer & Step Counter – Leap Fitness",
  description: "Battery-efficient step counter with offline support.",
  image: "/placeholder_8.jpg?height=400&width=600",
  category: "Fitness / Activity Tracker",
  platform: "iOS",
  tags: ["Swift", "SwiftUI", "HealthKit", "Apple Watch", "Core Data", "CloudKit", "Siri Integration"],
  playStore: "https://apps.apple.com/us/app/pedometer-step-counter/id1286965867",
  stats: { downloads: "300K", rating: 4.6, reviews: "31.3K", users: "210+" },
  duration: "5 months",
  team: "4 developers"
},

    {
  id: 9,
  title: "Deepstash – Bite‑Sized Knowledge",
  description: "Discover and save insights through short, curated content daily.",
  image: "/placeholder_9.jpg?height=400&width=600",
  category: "Education / Self‑Improvement",
  platform: "Cross‑Platform",
  tags: ["Flutter", "Swift", "Content Curation", "Bookmarks", "Push Notifications", "Offline Sync"],
  playStore: "https://play.google.com/store/apps/details?id=com.deepstash",
  stats: { downloads: "1M+", rating: 4.8, reviews: "16.7K", users: "700k+" },
  duration: "6 months",
  team: "Small-to-medium team"
},
    {
  id: 10,
  title: "1 Second Everyday: Video Diary",
  description: "Capture daily memories through one-second video clips.",
  image: "/placeholder_10.jpg?height=400&width=600",
  category: "Lifestyle / Journaling",
  platform: "Cross-Platform",
  tags: ["Flutter", "Swift", "Kotlin", "Video Editing", "Cloud Sync", "Notifications"],
  playStore: "https://play.google.com/store/apps/details?id=co.onese.android",
  stats: { downloads: "2M+", rating: 4.9, reviews: "43K", users: "1.5m+" },
  duration: "6 months",
  team: "Small dedicated team"
},

    // Messaging Category
    {
  id: 11,
  title: "Kraven – Food Delivery App",
  description: "Fast, customizable food delivery with real-time tracking and smart restaurant discovery.",
  image: "/placeholder_11.jpeg?height=400&width=600",
  category: "Food Delivery",
  platform: "Android/iOS",
  tags: ["Kotlin", "Flutter", "Maps API", "WebSocket", "Push Notifications", "Payment Integration"],
  playStore: "https://play.google.com/store/apps/details?id=com.kraven",
  appStore: "https://apps.apple.com/us/app/kraven-food-delivery/id1481029765",
  stats: { downloads: "1M+", rating: 4.7, reviews: "12K", users: "600K+" },
  duration: "10 months",
  team: "4 developers"
},
    {
  id: 12,
  title: "Rent Home – Property Rental App",
  description: "Rent Home is a user-friendly property rental platform that connects tenants with landlords through real-time",
  image: "/placeholder_12.jpeg?height=400&width=600",
  category: "HOME / Rent Apps",
  platform: "Android",
  tags: ["Kotlin", "End-to-End Encryption", "HIPAA Compliance", "Audit Logging", "Medical Integration", "Security"],
  playStore: "https://play.google.com/store/apps/details?id=com.hucu.ai&hl=en_US&gl=US",
  stats: { downloads: "2M+", rating: 4.9, reviews: "22K", users: "1.5M+" },
  duration: "9 months",
  team: "5 developers"
}

    // Rent Apps Category
    
  ];
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="project-card group"
            >
              {/* Project Image */}
              <Link to={`/project/${project.id}`} className="block relative overflow-hidden rounded-t-2xl">
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
              </Link>

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
                 {/* Title and Details Button */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <a 
                    href={`/project/${project.id}`}
                    className="flex-shrink-0"
                  >
                    <Button size="sm" variant="secondary" className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 hover:from-blue-500/30 hover:to-purple-500/30 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                      <ArrowRight className="h-4 w-4 mr-1" />
                      Details
                    </Button>
                  </a>
                </div>
                
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