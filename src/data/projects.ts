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
  playStoreLink?: string;
  appStoreLink?: string;
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
    title: "Fixail – Home Services App",
    subtitle: "Revolutionizing food delivery with sustainability at its core",
    description: "Fixail – Home Services App is an all-in-one platform that connects users with trusted professionals for various household needs including plumbing, electrical, cleaning, appliance repair, and more. Built for speed and simplicity, Fixail ensures quick bookings, transparent pricing, and real-time service tracking — all in a clean, modern UI.",
    image: "/project1/pic1.1.jpeg",
    images: [
      "/project1/pic1.1.jpeg",
      "/project1/pic1.2.jpeg",
      "/project1/pic1.3.jpeg",
      "/project1/pic1.4.jpeg",
      "/project1/pic1.5.jpeg",
      "/project1/pic1.6.jpeg",
      "/project1/pic1.7.jpeg"
    ],
    video: "https://drive.google.com/file/d/1FOIMKbavpgQUeqhTTXsXvJtatFKZrLEU/preview",
    category: "Flutter",
    tags: ["Flutter", "Firebase", "Google Maps", "Payment Gateway", "Push Notifications", "Analytics", "ML Integration", "Sustainability", "Real-time Tracking"],
    github: "https://github.com/example/ecodelivery",
    demo: "https://ecodelivery-demo.com",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.ulmon.android.playparis&hl=en_IN",
    appStoreLink: "https://apps.apple.com/app/ecodelivery/id123456789",
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
    title: "Instant Service Booking",
    description: "Users can search, filter, and instantly book trusted professionals for a wide range of home services such as plumbing, cleaning, electrical, and appliance repair."
  },
  {
    title: "Live Job Status Tracking",
    description: "Track technician arrival, job progress, and communicate in real time — all from within the app for a seamless experience."
  },
  {
    title: "Verified Professionals",
    description: "All service providers undergo background checks, verification processes, and are rated by past customers to ensure service quality and safety."
  },
  {
    title: "Digital Invoicing & Secure Payments",
    description: "Users receive real-time invoices and can pay using secure gateways with support for cards, UPI, and mobile wallets."
  },
  {
    title: "Rating & Review System",
    description: "After every job, users can leave reviews and ratings to help others choose the best providers and maintain quality across the platform."
  },
  {
    title: "Multi-Service Support",
    description: "Fixail supports dozens of service categories including AC repair, pest control, carpentry, and more — all under one app."
  }
],
challenges: [
  {
    title: "Real-Time Availability Matching",
    description: "Engineered a scheduling system that dynamically allocates technicians based on service area, availability, and job priority."
  },
  {
    title: "Service Area Optimization",
    description: "Used geo-fencing and GPS-based logic to only display service providers within a viable travel distance to the user."
  },
  {
    title: "Trust & Safety Concerns",
    description: "Added provider ID verification, profile transparency, customer support chat, and live status updates to ensure user trust."
  },
  {
    title: "UI Complexity with Many Services",
    description: "Implemented collapsible service menus, icons, and categorized flows to maintain a clean, user-friendly interface."
  },
  {
    title: "Offline Job Updates",
    description: "Enabled technicians to mark progress and completion offline, with sync triggered once internet becomes available."
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
    "/project2/pic4.jpeg",
    "/project2/pic5.jpeg",
    "/project2/pic6.jpeg"
  ],
    "video": "https://drive.google.com/file/d/1mevHJUF6G3-HXbRgjta9Ms5oQdK1q38l/preview",
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
  "image": "/project3/pic3.1.jpeg",
  "images": [
    "/project3/pic3.1.jpeg",
    "/project3/pic3.2.jpeg",
    "/project3/pic3.3.jpeg",
    "/project3/pic3.4.jpeg"
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
  "title": "Planner Pro",
  "subtitle": "combines daily task management, calendar integration, and note-taking.",
  "description": "Planner Pro is a feature-rich productivity and scheduling app that combines daily task management, calendar integration, and note-taking into one seamless experience. Designed for busy professionals and students alike, it helps users organize their day, set priorities, and stay on top of personal and professional goals with clarity and focus.",
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
    "title": "Daily & Weekly Planning",
    "description": "Organize your schedule with flexible day and week views, helping users break down their goals into actionable steps."
  },
  {
    "title": "Task Management & Reminders",
    "description": "Add tasks with deadlines, priority levels, and recurring settings — complete with reminders and notifications."
  },
  {
    "title": "Calendar Sync Integration",
    "description": "Two-way sync with Google, Apple, and Outlook calendars ensures your appointments and tasks are always aligned."
  },
  {
    "title": "Notes with Attachments",
    "description": "Attach notes, documents, and images to any task or event for improved organization and clarity."
  },
  {
    "title": "Focus Mode",
    "description": "Enter a distraction-free zone with Pomodoro-style timers and time-blocking tools to enhance focus."
  },
  {
    "title": "Offline Planning Support",
    "description": "Plan and manage your tasks offline with seamless syncing once internet is restored."
  }
],
"challenges": [
  {
    "title": "Complex Recurring Task Logic",
    "description": "Built a robust system to support nested and flexible recurrence patterns (e.g., every second Monday of the month)."
  },
  {
    "title": "Reliable Calendar Sync",
    "description": "Engineered conflict resolution logic and delta-sync methods to avoid duplicate or missing updates across devices."
  },
  {
    "title": "UI Clarity for Power Users",
    "description": "Added customizable layouts (grid, timeline, compact) to cater to different user preferences and reduce cognitive load."
  },
  {
    "title": "User Onboarding & Adoption",
    "description": "Designed a minimal, step-by-step onboarding flow to help new users quickly understand the core features."
  },
  {
    "title": "Data Privacy & Backup",
    "description": "Encrypted all user data at rest and in transit, and introduced backup and restore options with cloud syncing."
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
  "video": "https://drive.google.com/file/d/1pMDv80cC-dvrCbRZkDx1rEi8RHeALNK1/preview",
  "category": "Finance",
  "tags": ["Flutter", "Finance", "Budget Tracker", "Data Visualization", "SQLite"],
  "github": "https://github.com/example/money-manager",
  "demo": "https://money-manager-demo.com",
  playStoreLink: "play.google.com/store/apps/details?id=com.realbyteapps.moneymanagerfree ",
  appStoreLink: "apps.apple.com/us/app/money-manager-expense-budget/id560481810",
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
  "video": "https://drive.google.com/file/d/1xwa6Vm-rP6s1CCPcrf9VaYzLPCoF5Qem/preview",
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
  "image": "/project8/pic8.1.jpeg",
  "images": [
    "/project8/pic8.1.jpeg",
    "/project8/pic8.2.jpeg",
    "/project8/pic8.3.jpeg",
    "/project8/pic8.4.jpeg",
    "/project8/pic8.5.jpeg",
    "/project8/pic8.6.jpeg",
    "/project8/pic8.7.jpeg",
    "/project8/pic8.8.jpeg"
  ],
  "video": "https://drive.google.com/file/d/15fxyOxzNlr6DAf2ZwGoXkWSoDx25jsc7/preview",
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
  "image": "/project9/pic9.1.jpeg",
  "images": [
    "/project9/pic9.1.jpeg",
    "/project9/pic9.2.jpeg",
    "/project9/pic9.3.jpeg",
    "/project9/pic9.4.jpeg",
    "/project9/pic9.5.jpeg",
    "/project9/pic9.6.jpeg"
  ],
  "video": "https://drive.google.com/file/d/1MsF3-x9Hdiof7bLgGd-lIe28aDidawY7/preview",
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
  "image": "/project10/pic10.1.jpeg",
  "images": [
    "/project10/pic10.1.jpeg",
    "/project10/pic10.2.jpeg",
    "/project10/pic10.3.jpeg",
    "/project10/pic10.4.jpeg",
    "/project10/pic10.5.jpeg",
    "/project10/pic10.6.jpeg",
    "/project10/pic10.7.jpeg"
  ],
  "video": "https://drive.google.com/file/d/1bjTJmRzdgYKxehReMk_BQjTGf-GJsLbl/preview",
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
},
"11": {
  "id": "11",
  "title": "Kraven – Food Delivery App",
  "subtitle": "Smart, real-time food delivery with custom orders",
  "description": "Kraven is a fast, intuitive food delivery platform connecting users with local restaurants. It offers real-time tracking, customizable meals, and a sleek user interface for seamless ordering and delivery experiences.",
  "image": "/project11/pic11.1.jpeg",
  "images": [
    "/project11/pic11.1.jpeg",
    "/project11/pic11.2.jpeg",
    "/project11/pic11.3.jpeg",
    "/project11/pic11.4.jpeg",
    "/project11/pic11.5.jpeg"
  ],
  "video": "https://drive.google.com/file/d/1mevHJUF6G3-HXbRgjta9Ms5oQdK1q38l/preview",
  "category": "Food Delivery",
  "tags": ["Flutter", "Firebase", "Stripe", "Maps API", "Push Notifications"],
  "github": "https://github.com/example/kraven-app",
  "demo": "https://kraven-demo.com",
  "stats": {
    "downloads": "1M+",
    "rating": 4.7,
    "users": "600K+",
    "reviews": "22K"
  },
  "timeline": {
    "duration": "8 months",
    "team": "5 developers",
    "role": "Flutter Developer",
    "client": "Kraven Tech Labs"
  },
  "features": [
    {
      "title": "Smart Restaurant Discovery",
      "description": "Browse restaurants by cuisine, ratings, distance, and delivery speed."
    },
    {
      "title": "Real-Time Order Tracking",
      "description": "Track orders from kitchen to doorstep with live location updates and ETAs."
    },
    {
      "title": "Customizable Orders",
      "description": "Modify meals with ingredient toggles, portion sizes, and special instructions."
    },
    {
      "title": "Scheduled Deliveries",
      "description": "Pre-order food for future time slots with built-in reminders."
    },
    {
      "title": "Multi-Address Support",
      "description": "Save multiple delivery addresses with labels for home, office, etc."
    },
    {
      "title": "Dark Mode & Smooth UX",
      "description": "Modern UI with smooth animations, gestures, and light/dark themes."
    }
  ],
  "challenges": [
    {
      "title": "Order Routing Accuracy",
      "description": "Implemented geospatial APIs for optimal delivery paths and ETAs."
    },
    {
      "title": "Live Tracking with High Concurrency",
      "description": "Used WebSockets and load balancing to ensure real-time accuracy at scale."
    },
    {
      "title": "Custom Modifier System",
      "description": "Built a dynamic engine to support restaurants’ modifier-based menus."
    },
    {
      "title": "Payment Gateway Flexibility",
      "description": "Integrated Stripe, Razorpay, and fallback flows for failed transactions."
    },
    {
      "title": "Restaurant Onboarding Tools",
      "description": "Developed dashboards for partner menu sync, analytics, and performance."
    }
  ],
  "techDetails": {
    "frontend": ["Flutter"],
    "backend": ["Firebase", "Node.js"],
    "apis": ["Google Maps API", "Push Notification API", "Stripe API"],
    "tools": ["VS Code", "Figma", "Firebase Console", "Postman"]
  },
  "results": [
    "1M+ downloads across platforms",
    "4.7 average rating from 22K reviews",
    "Served over 600K+ users in 9 months",
    "Partnered with 500+ local restaurants",
    "Recognized as Top Emerging Food App in 2024"
  ]
},
"12": {
  "id": "12",
  "title": "Rent Home – Property Rental App",
  "subtitle": "Capture your life, one second at a time",
  "description": "Rent Home is a user-friendly property rental platform that connects tenants with landlords through real-time listings, smart filters, and secure communication. Designed for both short-term and long-term rentals, the app simplifies the search, inquiry, and lease process, making home renting faster, smarter, and more transparent.",
  "image": "/project10/pic10.1.jpeg",
  "images": [
    "/project10/pic10.1.jpeg",
    "/project10/pic10.2.jpeg",
    "/project10/pic10.3.jpeg",
    "/project10/pic10.4.jpeg",
    "/project10/pic10.5.jpeg",
    "/project10/pic10.6.jpeg",
    "/project10/pic10.7.jpeg"
  ],
  "video": "https://drive.google.com/file/d/1bjTJmRzdgYKxehReMk_BQjTGf-GJsLbl/preview",
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
    "title": "Smart Property Search",
    "description": "Browse rental listings with filters for location, budget, amenities, availability, and more."
  },
  {
    "title": "Interactive Map View",
    "description": "View properties geographically with map clustering and distance-based sorting."
  },
  {
    "title": "In-App Chat & Inquiry",
    "description": "Connect directly with landlords through secure chat with quick-reply templates."
  },
  {
    "title": "Saved Listings & Alerts",
    "description": "Bookmark favorite homes and get notified when similar listings are added."
  },
  {
    "title": "Digital Lease Management",
    "description": "Send, receive, and e-sign lease documents within the app using verified IDs."
  },
  {
    "title": "Dark Mode & Responsive UI",
    "description": "Clean, responsive interface with both light and dark themes for better readability."
  }
],
  "challenges": [
  {
    "title": "Scalable Property Indexing",
    "description": "Built a real-time search index with Elasticsearch to handle growing property volumes and ensure fast results."
  },
  {
    "title": "Spam & Fraud Prevention",
    "description": "Used ML classifiers and manual moderation to detect fake listings and prevent scams."
  },
  {
    "title": "Cross-Region Localization",
    "description": "Implemented dynamic currency, unit systems, and translations to support multi-country use."
  },
  {
    "title": "Chat Moderation & Privacy",
    "description": "Integrated rule-based message filtering and end-to-end encryption to protect user data."
  },
  {
    "title": "Lease Document Workflow",
    "description": "Designed an e-sign flow using DocuSign API with secure audit logs and fallback for offline handling."
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
