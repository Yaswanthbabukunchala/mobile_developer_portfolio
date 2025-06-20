export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  images: string[];
  video: string;
  category: string;
  tags: string[];
  github: string;
  demo: string;
  stats: {
    downloads: string;
    rating: number;
    users: string;
    reviews: string;
  };
  timeline: {
    duration: string;
    team: string;
    role: string;
    client: string;
  };
  features: Array<{
    title: string;
    description: string;
  }>;
  challenges: Array<{
    title: string;
    description: string;
  }>;
  techDetails: {
    frontend: string[];
    backend: string[];
    apis: string[];
    tools: string[];
  };
  results: string[];
}

export const projects: Record<string, Project> = {
  "1": {
    id: "1",
    title: "AutoTempest - Car Search",
    subtitle: "Revolutionizing food delivery with sustainability at its core",
    description: "AutoTempest is a powerful car search aggregator that streamlines the car buying process by collecting listings from multiple major websites into a single, user-friendly platform. Designed for efficiency and transparency, the platform empowers users to compare prices, filter preferences, and find the best deals on new and used vehicles across various sources with minimal effort.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=300&h=600",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=300&h=600",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=300&h=600",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=300&h=600",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=300&h=600"
    ],
    video: "https://drive.google.com/file/d/13Qir9IyTxmWjLpGdxtt1ebIhrGMOnqL2/preview",
    category: "Flutter",
    tags: ["Flutter", "Firebase", "Google Maps", "Payment Gateway", "Push Notifications", "Analytics", "ML Integration", "Sustainability", "Real-time Tracking"],
    github: "https://github.com/example/ecodelivery",
    demo: "https://ecodelivery-demo.com",
    stats: {
      downloads: "50K+",
      rating: 4.8,
      users: "25K+",
      reviews: "2.1K"
    },
    timeline: {
      duration: "6 months",
      team: "4 developers",
      role: "Lead Developer & Architect",
      client: "GreenTech Ventures"
    },
    features: [
      {
        title: "Unified Car Listings",
        description: "Aggregates listings from top car marketplaces like Craigslist, eBay Motors, Carvana, and more into a single search interface for easy comparison."
      },
      {
        title: "Advanced Filtering System",
        description: "Extensive filters including make, model, year, price range, mileage, location, transmission, and fuel type to refine search results precisely."
      },
      {
        title: "Price History & Market Insights",
        description: "Provides pricing trends, vehicle history reports, and estimated market values to help users make informed purchase decisions."
      },
      {
        title: "Saved Searches & Alerts",
        description: "Allows users to save preferred searches and receive instant alerts when matching vehicles are listed, increasing the chances of finding the right car quickly."
      },
      {
        title: "Dealer & Private Seller Integration",
        description: "Supports listings from both private sellers and dealers, offering a comprehensive overview of available inventory."
      },
      {
        title: "Mobile-Friendly Interface",
        description: "Optimized for mobile devices with a responsive UI, ensuring a seamless experience across smartphones, tablets, and desktops."
      }
    ],
    challenges: [
      {
        title: "Data Aggregation Consistency",
        description: "Implementing accurate real-time carbon footprint calculations required extensive research and integration with multiple data sources including transportation methods, distance calculations, and restaurant sustainability scores."
      },
      {
        title: "Duplicate Listing Detection",
        description: "Eliminating duplicate vehicle listings across multiple sources was addressed through hash-based matching, image recognition, and VIN cross-referencing."
      },
      {
        title: "Scalable Search Performance",
        description: "Handling large volumes of real-time search queries across millions of listings demanded a high-performance backend with indexed search, caching layers, and load-balanced microservices."
      },
      {
        title: "Price Evaluation Accuracy",
        description: "Ensuring accurate pricing trends and history required integration with third-party market analysis tools and dynamic adjustment algorithms based on regional market conditions."
      },
      {
        title: "User Privacy & Security",
        description: "Implementing strict data protection protocols and secure communication channels helped build user trust and ensured compliance with data privacy regulations."
      }
    ],
    techDetails: {
      frontend: ["Flutter", "Dart", "Provider State Management", "Custom Animations"],
      backend: ["Firebase Functions", "Node.js", "Express", "MongoDB"],
      apis: ["Google Maps API", "Stripe API", "Twilio SMS", "SendGrid"],
      tools: ["VS Code", "Git", "Firebase Console", "Postman", "Figma"]
    },
    results: [
      "50K+ downloads within 6 months",
      "4.8/5 average rating with 2.1K reviews",
      "25% reduction in average delivery carbon footprint",
      "300+ partner restaurants onboarded",
      "Featured in Tech Crunch and Product Hunt"
    ]
  },
    "2": {
    "id": "2",
    "title": "Paris Travel Guide App",
    "subtitle": "Your smart companion for exploring the City of Light",
    "description": "Paris Travel Guide is an elegant and intuitive mobile and web app designed to help travelers explore the beauty, culture, and charm of Paris with ease. From iconic landmarks to hidden gems, the guide offers curated itineraries, real-time navigation, and personalized recommendations. The platform blends cultural insight with modern technology to provide a seamless travel experience tailored to every type of explorer.",
    "image": "/project2/pic1.png",
  "images": [
    "/project2/pic1.png",
    "/project2/pic2.jpeg",
    "/project2/pic3.jpeg",
    "/project2/pic4.jpeg"
  ],
    "video": "https://drive.google.com/file/d/12VxUtNx9QoEdqC8s6ureCxSAUUmvCRFK/preview",
    "category": "React Native",
    "tags": ["React Native", "Redux", "Google Maps", "Offline Support", "Cultural Data", "Audio Guides"],
    "github": "https://github.com/example/paris-travel-guide",
    "demo": "https://parisguide-demo.com",
    "stats": {
      "downloads": "100K+",
      "rating": 4.6,
      "users": "75K+",
      "reviews": "5.2K"
    },
    "timeline": {
      "duration": "8 months",
      "team": "5 developers",
      "role": "Senior Mobile Developer",
      "client": "TravelTech Inc."
    },
    "features": [
      {
        "title": "Curated Itineraries",
        "description": "Expert-crafted travel plans for solo travelers, couples, families, and art lovers, covering top attractions and offbeat locations."
      },
      {
        "title": "Interactive Map with Landmarks",
        "description": "Real-time GPS-integrated map featuring must-see sites like the Eiffel Tower, Louvre, Montmartre, and local cafés with insider tips."
      },
      {
        "title": "Cultural Insights & Audio Guides",
        "description": "Learn about Parisian history, customs, and stories through audio tours and brief cultural articles while visiting each site."
      },
      {
        "title": "Local Events & Experiences",
        "description": "Daily updates on local concerts, exhibitions, food festivals, and pop-ups to immerse travelers in Parisian life."
      },
      {
        "title": "Smart Budget Tracker",
        "description": "Track spending in euros with daily budget insights, conversion rates, and suggestions for cost-friendly alternatives."
      },
      {
        "title": "Offline Access Mode",
        "description": "Download entire itineraries, maps, and guides to explore Paris without needing an internet connection."
      }
    ],
    "challenges": [
      {
        "title": "Language Barrier for Users",
        "description": "Integrated multilingual support and built-in French phrasebook with audio pronunciation to help users communicate confidently."
      },
      {
        "title": "Location-Based Content Accuracy",
        "description": "Used high-precision geofencing and local APIs to ensure that users receive real-time, accurate suggestions near their current location."
      },
      {
        "title": "Data Usage While Roaming",
        "description": "Implemented offline-first architecture and on-demand content syncing to reduce roaming charges for international travelers."
      },
      {
        "title": "Real-Time Event Aggregation",
        "description": "Partnered with local cultural APIs and community groups to fetch verified event data and prevent outdated or duplicate listings."
      },
      {
        "title": "Accessibility for All Travelers",
        "description": "Designed the app with inclusive UI standards—high-contrast modes, large fonts, and voice assistance—for a better experience across diverse user groups."
      }
    ],
    "techDetails": {
      "frontend": ["React Native", "Redux Toolkit", "React Navigation"],
      "backend": ["Node.js", "Express", "PostgreSQL"],
      "apis": ["Mapbox API", "Travel APIs", "Currency API", "Text-to-Speech"],
      "tools": ["Expo", "Postman", "Figma", "Firebase Analytics"]
    },
    "results": [
      "100K+ downloads within 8 months",
      "4.6/5 average rating with 5.2K reviews",
      "Featured in App Store Travel category",
      "High retention rate among European tourists",
      "Recognized by Lonely Planet for UI/UX design"
    ]
  },
  "3": {
  "id": "3",
  "title": "Carsforsale.com Dealer",
  "subtitle": "All-in-one inventory and sales tool for auto dealers",
  "description": "Carsforsale.com Dealer is an intuitive dealership platform that offers end-to-end solutions for inventory management, digital advertising, and customer engagement. Built to empower dealers of all sizes, it combines user-friendly tools with real-time analytics to boost visibility, streamline operations, and close more sales efficiently.",
  "image": "/project3/pic3.1.jpeg",
  "images": [
  "/project3/pic3.1.jpeg",
  "/project3/pic3.2.jpeg",
  "/project3/pic3.3.jpeg",
  "/project3/pic3.4.jpeg"
],
  "video": "https://www.youtube.com/embed/ScMzIvxBSi4",
  "category": "Full Stack",
  "tags": ["React", "Node.js", "MongoDB", "Inventory Management", "CRM", "Analytics"],
  "github": "https://github.com/example/carsforsale-dealer",
  "demo": "https://dealer-demo.carsforsale.com",
  "stats": {
    "downloads": "30K+",
    "rating": 4.5,
    "users": "18K+",
    "reviews": "1.3K"
  },
  "timeline": {
    "duration": "5 months",
    "team": "3 developers",
    "role": "Full Stack Engineer",
    "client": "Carsforsale Inc."
  },
  "features": [
    {
      "title": "Inventory Manager",
      "description": "Drag-and-drop interface for uploading, editing, and managing vehicle listings with photo carousels and detailed specs."
    },
    {
      "title": "Real-Time Syndication",
      "description": "Automatic syncing of listings across over 100 third-party sites including Craigslist, Facebook Marketplace, and Google."
    },
    {
      "title": "Smart Lead Routing",
      "description": "AI-powered lead assignment to the right sales rep based on buyer behavior, geography, and inventory interest."
    },
    {
      "title": "Custom Dealer Website",
      "description": "Fully branded, mobile-optimized dealership websites with built-in SEO, chat support, and contact forms."
    },
    {
      "title": "Financing Integration",
      "description": "In-app loan calculators and lender integrations for instant financing quotes and buyer qualification."
    },
    {
      "title": "Customer Review Tools",
      "description": "Automated review collection and display modules to build social proof and dealership trust."
    }
  ],
  "challenges": [
    {
      "title": "Third-Party Syndication Issues",
      "description": "Data mismatch across channels was resolved by introducing a robust listing normalization engine and dynamic API connectors."
    },
    {
      "title": "Mobile Optimization at Scale",
      "description": "Building responsive, customizable dealer websites required modular UI components and device-specific rendering techniques."
    },
    {
      "title": "Review Spam Filtering",
      "description": "An ML-based moderation layer was implemented to flag and filter fake or malicious customer reviews."
    },
    {
      "title": "Financing Partner Integration",
      "description": "Collaborating with lenders of varying APIs and standards involved building a unified middleware for smooth integration."
    },
    {
      "title": "Dealer Support at Scale",
      "description": "24/7 live chat, AI-powered help bots, and an internal knowledge base helped reduce onboarding friction and support tickets."
    }
  ],
  "techDetails": {
    "frontend": ["React", "Redux", "Tailwind CSS"],
    "backend": ["Node.js", "Express", "MongoDB"],
    "apis": ["Facebook Marketplace API", "Google Business API", "Lending APIs"],
    "tools": ["VS Code", "Postman", "Firebase", "Figma"]
  },
  "results": [
    "30K+ dealership listings onboarded",
    "4.5/5 rating with over 1.3K reviews",
    "Integrated with 100+ external listing platforms",
    "Reduced dealer onboarding time by 40%",
    "Positive feedback from 90% of active dealers"
  ]
  },
  "4": {
  "id": "4",
  "title": "Smart Gym Workout",
  "subtitle": "Personalized fitness guidance at home or in the gym",
  "description": "Smart Gym Workout is a cross-platform fitness app that delivers tailored workout routines, live coaching feedback, and real-time performance tracking. Built for beginners and pros alike, the app adapts to each user’s goals, equipment, and progress, helping them stay consistent and motivated in achieving their fitness targets.",
  "image": "/project4/pic4.1.jpeg",
  "images": [
    "/project4/pic4.1.jpeg",
    "/project4/pic4.2.jpeg",
    "/project4/pic4.3.jpeg",
    "/project4/pic4.4.jpeg"
  ],
  "video": "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "category": "Flutter",
  "tags": ["Flutter", "Workout Plans", "Live Coaching", "Health Tracking", "Firebase"],
  "github": "https://github.com/example/smartgym",
  "demo": "https://smartgym-app.com",
  "stats": {
    "downloads": "80K+",
    "rating": 4.7,
    "users": "40K+",
    "reviews": "3.6K"
  },
  "timeline": {
    "duration": "7 months",
    "team": "4 developers",
    "role": "Mobile Developer",
    "client": "FitLife Digital"
  },
  "features": [
    {
      "title": "Dynamic Workout Generator",
      "description": "Custom workout plans generated based on fitness level, available equipment, and user preferences."
    },
    {
      "title": "Real-Time Coaching Feedback",
      "description": "Audio and visual coaching to guide form, reps, and pacing with motion-triggered tracking."
    },
    {
      "title": "Progress Tracker",
      "description": "Log completed workouts, monitor fitness levels, and visualize improvements over time."
    },
    {
      "title": "Offline Mode",
      "description": "Download routines and track sessions without internet, auto-syncing when back online."
    },
    {
      "title": "Community Challenges",
      "description": "Participate in global fitness events, earn badges, and challenge friends to stay motivated."
    },
    {
      "title": "Health App Integration",
      "description": "Sync workout data with Apple Health and Google Fit for centralized health tracking."
    }
  ],
  "challenges": [
    {
      "title": "Adaptive Workout Logic",
      "description": "Creating dynamic plans based on user metrics and preferences required a hybrid rules + ML engine."
    },
    {
      "title": "Form Feedback Without Sensors",
      "description": "Used motion estimation and accelerometer data from phones to estimate activity and give feedback without needing wearables."
    },
    {
      "title": "Data Sync Reliability",
      "description": "Offline-first architecture with local caching ensured all logs were preserved until cloud sync."
    },
    {
      "title": "Motivating Long-Term Use",
      "description": "Introduced achievement systems, badges, and social interaction tools to prevent user drop-off."
    },
    {
      "title": "Device Performance Optimization",
      "description": "Balanced animation-heavy UI with low-end device support using conditional rendering and lazy loading."
    }
  ],
  "techDetails": {
    "frontend": ["Flutter", "Provider", "Custom Animations"],
    "backend": ["Firebase", "Cloud Firestore", "Firebase Auth"],
    "apis": ["Google Fit API", "Apple HealthKit", "Push Notifications"],
    "tools": ["VS Code", "Figma", "Firebase Console", "Postman"]
  },
  "results": [
    "80K+ downloads in under 1 year",
    "4.7/5 average rating with 3.6K reviews",
    "50+ tailored workout plans launched",
    "Awarded Top Fitness App 2024 by FitApps",
    "Average 20% improvement in user retention after social feature integration"
  ]
  },
  "5": {
  "id": "5",
  "title": "Spill App",
  "subtitle": "Anonymous social space to share, heal, and connect",
  "description": "Spill is a safe, expressive platform where users can share thoughts, secrets, and confessions anonymously. Built to promote mental relief and emotional support, the app fosters connection and empathy through a moderated and minimalist social network.",
  "image": "/project5/pic5.1.jpeg",
  "images": [
    "/project5/pic5.1.jpeg",
    "/project5/pic5.2.jpeg",
    "/project5/pic5.3.jpeg",
    "/project5/pic5.4.jpeg"
  ],
  "video": "https://www.youtube.com/embed/ScMzIvxBSi4",
  "category": "React Native",
  "tags": ["Anonymous Posting", "React Native", "Firebase", "Real-Time Feed", "Moderation AI"],
  "github": "https://github.com/example/spill",
  "demo": "https://spill-app.com",
  "stats": {
    "downloads": "120K+",
    "rating": 4.4,
    "users": "60K+",
    "reviews": "4.3K"
  },
  "timeline": {
    "duration": "6 months",
    "team": "3 developers",
    "role": "React Native Developer",
    "client": "Emote Labs"
  },
  "features": [
    {
      "title": "Anonymous Posting",
      "description": "Users can share their emotions and secrets without revealing their identity, creating a safe space for honest expression."
    },
    {
      "title": "Mood Tags & Filters",
      "description": "Posts can be tagged with moods like 'confession', 'love', 'anxiety', allowing others to discover relatable experiences."
    },
    {
      "title": "Supportive Reactions",
      "description": "Encourage empathy with positive reaction options and comment-based support systems."
    },
    {
      "title": "Scheduled & Drafted Posts",
      "description": "Write and schedule posts for future sharing or save them privately to revisit later."
    },
    {
      "title": "Community Guidelines Enforcement",
      "description": "Built-in reporting and moderation features, supported by AI flagging to maintain a respectful space."
    },
    {
      "title": "Dark Mode & Minimal UI",
      "description": "Distraction-free interface with soft visuals for late-night sharing and reading."
    }
  ],
  "challenges": [
    {
      "title": "Moderation of Anonymous Content",
      "description": "Integrated AI-based sentiment analysis and toxicity filters to automatically flag harmful or inappropriate posts."
    },
    {
      "title": "Balancing Anonymity with Safety",
      "description": "Devised a system of invisible IDs for internal moderation while protecting user privacy."
    },
    {
      "title": "User Retention Without Identity",
      "description": "Gamified badges and post streaks were introduced to keep users returning and building safe engagement habits."
    },
    {
      "title": "High Peak-Time Loads",
      "description": "Used Firebase Firestore and scalable cloud functions to handle surges in activity during late-night usage."
    },
    {
      "title": "Toxic Comment Prevention",
      "description": "Real-time filters and soft warnings were added to prevent heated arguments and maintain emotional well-being."
    }
  ],
  "techDetails": {
    "frontend": ["React Native", "Context API", "Lottie Animations"],
    "backend": ["Firebase Firestore", "Firebase Auth", "Cloud Functions"],
    "apis": ["Toxicity API", "Push Notifications", "Google Analytics"],
    "tools": ["Expo", "Figma", "Firebase Console", "VS Code"]
  },
  "results": [
    "120K+ downloads across iOS and Android",
    "4.4/5 rating with 4.3K reviews",
    "Recognized for positive mental health impact by several communities",
    "300+ harmful posts blocked daily with AI filters",
    "Average daily engagement time of 11 minutes per user"
  ]
  },
  "6": {
  "id": "6",
  "title": "Money Manager – Expense Tracker",
  "subtitle": "Track spending, save smarter, and master your budget",
  "description": "Money Manager is a sleek and intuitive expense tracking app that empowers users to take control of their finances. With daily logging, budgeting tools, and detailed analytics, the app helps users build better money habits and achieve their financial goals.",
  "image": "/project4/pic4.1.jpeg",
  "images": [
    "/project4/pic4.1.jpeg",
    "/project4/pic4.2.jpeg",
    "/project4/pic4.3.jpeg",
    "/project4/pic4.4.jpeg"
  ],
  "video": "https://www.youtube.com/embed/ScMzIvxBSi4",
  "category": "Finance",
  "tags": ["Flutter", "Finance", "Budget Tracker", "Data Visualization", "SQLite"],
  "github": "https://github.com/example/money-manager",
  "demo": "https://money-manager-demo.com",
  "stats": {
    "downloads": "250K+",
    "rating": 4.8,
    "users": "190K+",
    "reviews": "9.2K"
  },
  "timeline": {
    "duration": "6 months",
    "team": "3 developers",
    "role": "Mobile Developer",
    "client": "FinTrack Co."
  },
  "features": [
    {
      "title": "Expense Categorization",
      "description": "Automatically or manually assign categories to expenses for clearer financial insights."
    },
    {
      "title": "Daily & Monthly Budgeting",
      "description": "Set spending limits and monitor progress with visual feedback and alerts."
    },
    {
      "title": "Graphical Reports",
      "description": "Pie charts, bar graphs, and trend lines to help users understand their financial behavior."
    },
    {
      "title": "Secure Backup",
      "description": "Data encrypted and backed up securely to cloud or local storage."
    },
    {
      "title": "Multi-Currency Support",
      "description": "Track expenses in various currencies and convert using real-time exchange rates."
    },
    {
      "title": "Recurring Expense Scheduling",
      "description": "Automate bill payments and subscriptions with repeat transaction scheduling."
    }
  ],
  "challenges": [
    {
      "title": "Data Accuracy & Syncing",
      "description": "Ensuring transactions sync reliably across devices while keeping local data accurate and up-to-date."
    },
    {
      "title": "Privacy & Encryption",
      "description": "Implemented AES-256 encryption for financial data to secure sensitive user records."
    },
    {
      "title": "Real-Time Visualization",
      "description": "Built dynamic charting with minimal performance cost using lightweight graph libraries."
    },
    {
      "title": "Offline Tracking",
      "description": "Enabled full offline support for logging and viewing expenses with deferred syncing."
    },
    {
      "title": "Scalable Storage",
      "description": "Handled expanding datasets using a hybrid SQLite and cloud backup approach."
    }
  ],
  "techDetails": {
    "frontend": ["Flutter", "Provider", "Custom Widgets"],
    "backend": ["Firebase", "SQLite"],
    "apis": ["Currency Conversion API", "Google Drive API"],
    "tools": ["VS Code", "Figma", "Firebase Console", "Excel Export"]
  },
  "results": [
    "250K+ downloads in 8 months",
    "4.8/5 average rating across platforms",
    "Ranked Top 10 Finance App in Play Store",
    "Recognized for Best UI/UX by FinApp Awards",
    "Increased user savings by 15% on average"
  ]
  },
  "7": {
  "id": "7",
  "title": "WaterMinder – Water Reminder",
  "subtitle": "Stay hydrated, stay healthy with smart water tracking",
  "description": "WaterMinder is a health-focused hydration tracking app that reminds users to drink water based on personalized goals and real-time body metrics. With sleek visuals, reminders, and hydration analytics, the app promotes consistent water intake and better wellness habits.",
  "image": "/project5/pic5.1.jpeg",
  "images": [
    "/project5/pic5.1.jpeg",
    "/project5/pic5.2.jpeg",
    "/project5/pic5.3.jpeg",
    "/project5/pic5.4.jpeg"
  ],
  "video": "https://www.youtube.com/embed/ScMzIvxBSi4",
  "category": "Health & Wellness",
  "tags": ["React Native", "Health Tracker", "Reminders", "Notifications", "Wearables"],
  "github": "https://github.com/example/waterminder",
  "demo": "https://waterminder-demo.com",
  "stats": {
    "downloads": "300K+",
    "rating": 4.6,
    "users": "210K+",
    "reviews": "7.9K"
  },
  "timeline": {
    "duration": "4 months",
    "team": "2 developers",
    "role": "React Native Developer",
    "client": "HydroTech Wellness"
  },
  "features": [
    {
      "title": "Personalized Hydration Goals",
      "description": "Automatically calculates daily water intake needs based on weight, age, climate, and activity level."
    },
    {
      "title": "Custom Reminders",
      "description": "Smart reminders adjust throughout the day to help users maintain consistent hydration habits."
    },
    {
      "title": "Hydration Analytics",
      "description": "Track daily, weekly, and monthly intake with visual graphs and goal completion rates."
    },
    {
      "title": "Wearable Integration",
      "description": "Sync with Apple Watch, Fitbit, and other devices to log intake on-the-go."
    },
    {
      "title": "Drink Types & Volume Tracking",
      "description": "Log various drink types with different hydration values and custom quantities."
    },
    {
      "title": "Dark Mode & Widget Support",
      "description": "Stay on track with homescreen widgets and a night-friendly interface."
    }
  ],
  "challenges": [
    {
      "title": "Accurate Goal Calculation",
      "description": "Developed a hydration algorithm that adjusts in real-time based on weather API and fitness tracker input."
    },
    {
      "title": "Push Notification Optimization",
      "description": "Handled delivery timing and device wake cycles to avoid over-notifying and battery drain."
    },
    {
      "title": "Cross-Device Sync",
      "description": "Enabled data consistency between phones, watches, and tablets through cloud sync with offline fallback."
    },
    {
      "title": "User Engagement Drop",
      "description": "Introduced gamification, streak badges, and hydration challenges to encourage retention."
    },
    {
      "title": "Wearable API Limitations",
      "description": "Used workarounds for limited hydration input APIs on some smartwatches via companion app bridging."
    }
  ],
  "techDetails": {
    "frontend": ["React Native", "Context API", "Styled Components"],
    "backend": ["Firebase", "SQLite"],
    "apis": ["OpenWeather API", "HealthKit", "Google Fit API"],
    "tools": ["Expo", "VS Code", "Figma", "Postman"]
  },
  "results": [
    "300K+ downloads across platforms",
    "4.6/5 rating with 7.9K reviews",
    "Average user hydration improved by 22%",
    "Featured in Apple’s Health & Wellness Essentials",
    "60% of users enabled wearable sync"
  ]
  },
  "8": {
  "id": "8",
  "title": "Pedometer & Step Counter – Leap Fitness",
  "subtitle": "Track your steps, stay fit, and move smarter",
  "description": "Leap Fitness's Pedometer app offers accurate, battery-friendly step tracking without requiring GPS. Designed to help users stay active, it combines simplicity with powerful activity analytics to encourage daily movement and health tracking.",
  "image": "https://images.unsplash.com/photo-1599058917212-d750089bcaa6?auto=format&fit=crop&w=800&h=600",
  "images": [
    "https://images.unsplash.com/photo-1599058917212-d750089bcaa6?auto=format&fit=crop&w=300&h=600",
    "https://images.unsplash.com/photo-1565070210840-bf39f0100045?auto=format&fit=crop&w=300&h=600"
  ],
  "video": "https://www.youtube.com/embed/ScMzIvxBSi4",
  "category": "Fitness",
  "tags": ["Android", "Step Counter", "HealthKit", "Low Battery Usage", "Charts"],
  "github": "https://github.com/example/pedometer-app",
  "demo": "https://pedometer-demo.com",
  "stats": {
    "downloads": "5M+",
    "rating": 4.7,
    "users": "3.2M+",
    "reviews": "48K"
  },
  "timeline": {
    "duration": "5 months",
    "team": "3 developers",
    "role": "Android Developer",
    "client": "Leap Fitness Group"
  },
  "features": [
    {
      "title": "Step Tracking Without GPS",
      "description": "Uses built-in sensors to count steps accurately while preserving battery life."
    },
    {
      "title": "Daily, Weekly, Monthly Charts",
      "description": "Interactive graphs help users monitor step trends and improve consistency."
    },
    {
      "title": "Calorie & Distance Estimation",
      "description": "Auto-calculates calories burned and distance covered based on step count and weight."
    },
    {
      "title": "Goal Setting",
      "description": "Users can define daily step goals and receive motivational alerts and progress badges."
    },
    {
      "title": "Dark Mode & Widgets",
      "description": "Clean UI with support for home screen widgets and night-friendly interface."
    },
    {
      "title": "Offline First Design",
      "description": "Functions entirely offline and syncs when internet is available."
    }
  ],
  "challenges": [
    {
      "title": "Sensor Calibration",
      "description": "Fine-tuned pedometer logic to avoid overcounting or misfires using accelerometer smoothing filters."
    },
    {
      "title": "Battery Optimization",
      "description": "Minimized background activity and wake locks to ensure negligible battery usage."
    },
    {
      "title": "Device Compatibility",
      "description": "Handled discrepancies across sensor hardware by testing on a wide device range and using fallback logic."
    },
    {
      "title": "User Drop After Install",
      "description": "Improved onboarding, gamified daily goals, and introduced milestone achievements to retain users."
    },
    {
      "title": "Chart Performance",
      "description": "Built lightweight custom chart components for smooth rendering on lower-end devices."
    }
  ],
  "techDetails": {
    "frontend": ["Java", "XML", "Material Design"],
    "backend": ["Firebase Analytics"],
    "apis": ["Google Fit API"],
    "tools": ["Android Studio", "Crashlytics", "Photoshop", "Jira"]
  },
  "results": [
    "5M+ downloads worldwide",
    "4.7/5 rating with 48K reviews",
    "Top 10 Health & Fitness app on Google Play",
    "Improved user retention by 30% through streak gamification",
    "Used by 2M+ users daily"
  ]
  },
  "9": {
  "id": "9",
  "title": "Deepstash – Bite-Sized Knowledge",
  "subtitle": "Discover insights that grow your mind in 2 minutes a day",
  "description": "Deepstash is a content discovery platform that delivers short, digestible knowledge cards on productivity, psychology, leadership, and more. Designed for personal growth and habit-building, it enables users to explore curated ideas in a focused, distraction-free format.",
  "image": "https://images.unsplash.com/photo-1515165562835-cfaefb8d1852?auto=format&fit=crop&w=800&h=600",
  "images": [
    "https://images.unsplash.com/photo-1515165562835-cfaefb8d1852?auto=format&fit=crop&w=300&h=600",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=300&h=600"
  ],
  "video": "https://www.youtube.com/embed/ScMzIvxBSi4",
  "category": "Education",
  "tags": ["React Native", "Content Curation", "Bookmarking", "User Profiles", "Push Notifications"],
  "github": "https://github.com/example/deepstash-clone",
  "demo": "https://deepstash-demo.com",
  "stats": {
    "downloads": "1M+",
    "rating": 4.8,
    "users": "700K+",
    "reviews": "23K"
  },
  "timeline": {
    "duration": "6 months",
    "team": "3 developers",
    "role": "Frontend Developer",
    "client": "Deepstash Originals"
  },
  "features": [
    {
      "title": "Curated Knowledge Cards",
      "description": "Discover ideas in 100-word summaries from thought leaders, books, and personal growth topics."
    },
    {
      "title": "Personalized Feed",
      "description": "AI-powered recommendation engine suggests relevant content based on reading behavior."
    },
    {
      "title": "Save & Organize Ideas",
      "description": "Bookmark and group insights into collections for easy future reference."
    },
    {
      "title": "Daily Streaks & Highlights",
      "description": "Encourages consistent reading through gamified streaks and user highlights."
    },
    {
      "title": "Minimalist Reader UI",
      "description": "Focused interface for distraction-free reading and learning."
    },
    {
      "title": "Offline Sync",
      "description": "Download cards and collections for offline access and read anywhere."
    }
  ],
  "challenges": [
    {
      "title": "User Retention & Habit Building",
      "description": "Introduced gamification features and personalized notifications to keep users coming back daily."
    },
    {
      "title": "Real-Time Feed Performance",
      "description": "Optimized feed scroll and batch content loading to maintain app responsiveness."
    },
    {
      "title": "Content Curation Algorithm",
      "description": "Developed a scoring model that blends user likes, read time, and tags for better recommendations."
    },
    {
      "title": "Cross-Platform Consistency",
      "description": "Ensured layout parity and transitions worked seamlessly on both Android and iOS."
    },
    {
      "title": "Offline Caching",
      "description": "Built a lightweight local storage solution for bookmarked content using SQLite."
    }
  ],
  "techDetails": {
    "frontend": ["React Native", "Redux Toolkit", "Styled Components"],
    "backend": ["Firebase", "Node.js", "MongoDB"],
    "apis": ["Push Notification API", "Recommendation Engine"],
    "tools": ["Figma", "Postman", "VS Code", "Notion"]
  },
  "results": [
    "1M+ downloads in under 1 year",
    "4.8/5 average rating across app stores",
    "Featured in Google Play Editor’s Choice",
    "Daily engagement time averages 9 minutes per user",
    "Used by 60% of users consistently for over 3 months"
  ]
  },
  "10": {
  "id": "10",
  "title": "1 Second Everyday – Video Diary",
  "subtitle": "Capture your life, one second at a time",
  "description": "1 Second Everyday is a life-logging video diary app that empowers users to document daily moments through one-second clips. By compiling these moments into engaging visual stories, it helps people reflect, appreciate, and preserve memories effortlessly.",
  "image": "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&h=600",
  "images": [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=300&h=600",
    "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=300&h=600"
  ],
  "video": "https://www.youtube.com/embed/ScMzIvxBSi4",
  "category": "Lifestyle",
  "tags": ["iOS", "Video Editing", "Cloud Sync", "Memory Journal", "Notifications"],
  "github": "https://github.com/example/1se-video-diary",
  "demo": "https://1se-demo.com",
  "stats": {
    "downloads": "2M+",
    "rating": 4.9,
    "users": "1.5M+",
    "reviews": "35K"
  },
  "timeline": {
    "duration": "6 months",
    "team": "4 developers",
    "role": "iOS Developer",
    "client": "Everyday Moments Inc."
  },
  "features": [
    {
      "title": "Daily 1-Second Clip Capture",
      "description": "Easily record or select a 1-second clip each day and compile into a chronological life story."
    },
    {
      "title": "Automatic Video Compilation",
      "description": "Create monthly or yearly highlight reels with background music and transitions."
    },
    {
      "title": "Reminders & Journaling",
      "description": "Daily push notifications prompt users to capture a moment and optionally add text notes."
    },
    {
      "title": "Cloud Sync & Backup",
      "description": "Secure storage and sync across devices to keep memories safe and accessible."
    },
    {
      "title": "Private & Shareable Diaries",
      "description": "Choose between private journaling or sharing video compilations with friends and family."
    },
    {
      "title": "Dark Mode & Minimalist UI",
      "description": "User-friendly design for emotional and visual clarity, day or night."
    }
  ],
  "challenges": [
    {
      "title": "Clip Optimization & Storage",
      "description": "Compressed videos to retain visual quality while reducing file size and storage usage."
    },
    {
      "title": "Cross-Day Reminders",
      "description": "Implemented intelligent notification system to avoid alert fatigue while increasing engagement."
    },
    {
      "title": "Media Compilation Speed",
      "description": "Built native video stitching and compression pipeline using AVFoundation for faster rendering."
    },
    {
      "title": "Multi-Device Sync",
      "description": "Integrated iCloud and Firebase sync for real-time access and backup across iOS devices."
    },
    {
      "title": "Data Privacy & Sharing",
      "description": "Enabled user-defined privacy levels and encryption for shared video exports."
    }
  ],
  "techDetails": {
    "frontend": ["Swift", "SwiftUI", "AVFoundation"],
    "backend": ["Firebase", "iCloud"],
    "apis": ["Push Notification API", "iOS Files API", "AVKit"],
    "tools": ["Xcode", "TestFlight", "Figma", "Firebase Console"]
  },
  "results": [
    "2M+ downloads globally",
    "4.9/5 average rating with 35K reviews",
    "Chosen as App of the Day by Apple Store",
    "User average: 11 months of continuous usage",
    "Top app for daily journaling in 20+ countries"
  ]
}
};


export const getProjectById = (id: string): Project | null => {
  return projects[id] || null;
};
