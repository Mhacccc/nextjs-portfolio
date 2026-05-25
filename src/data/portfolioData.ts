import { ProjectCardData } from "@/components/bento/ProjectCard";
import { DetailsData } from "@/components/DetailsModal";

export const PROJECTS: ProjectCardData[] = [
  {
    id: "pingme",
    title: "PingMe",
    subtitle: "IoT & Mobile Safety PWA",
    category: "IoT & PWA",
    image: "/projects/pingme/finalview.png",
    description: "An IoT-based personal safety system combining a smart bracelet with a responsive PWA for instant emergency alerts and live GPS tracking.",
    longDescription: "PingMe is an innovative personal safety ecosystem designed to bridge the gap between physical distress and mobile rescue. Developed as a Bachelor of Science in Information Technology thesis at the Technological University of the Philippines (TUP), it pairs a custom-built smart bracelet (utilizing a Raspberry Pi, GPS module, and lithium power cell) with a responsive Progressive Web App (PWA). By pressing the bracelet's physical button, users can trigger instantaneous SOS alerts without unlocking their phones. Real-time locations, interactive geofences, and safety status logs are dynamically rendered using Leaflet and streamed securely to family monitors via Google Cloud Firestore, entirely serverless.",
    tags: ["React.js", "Leaflet.js", "Firebase", "Python", "Cloudinary", "IoT", "PWA"],
    features: [
      "Discreet Smart Bracelet SOS: Immediate physical distress signal triggered via tactile hardware button.",
      "Leaflet & OpenStreetMap Live Tracking: Smooth, real-time map tracking with geofence boundaries drawn dynamically.",
      "Serverless Firestore Sync: Instant alert propagation and location streaming with zero backend API latency.",
      "Automated Keep-Alive Alert: Resends emergency SOS signals every 5 minutes until user marks themselves as safe."
    ],
    stats: [
      { label: "SOS Response Delay", value: "< 2s" },
      { label: "Battery Standby", value: "14 hrs" }
    ]
  },
  {
    id: "fincore",
    title: "FinCore V3",
    subtitle: "Fintech Core Architecture",
    category: "Fintech",
    image: "/fincore.png",
    description: "High-performance fintech core banking architecture with real-time transaction processing.",
    longDescription: "FinCore V3 is an enterprise-grade core banking system built to handle millions of concurrent transactions with sub-millisecond latency. It powers multi-currency ledgers, regulatory reporting, and fraud detection pipelines for Tier-1 financial institutions.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Kafka", "Docker", "AWS"],
    features: [
      "Real-time ledger reconciliation across multi-currency accounts",
      "Kafka-powered event streaming for fraud detection",
      "GDPR-compliant audit trail with immutable event logs",
      "Sub-10ms API response under 100k concurrent requests"
    ],
    stats: [
      { label: "Transactions/s", value: "1.2M" },
      { label: "Uptime", value: "99.99%" }
    ]
  },
  {
    id: "datasense",
    title: "DataSense",
    subtitle: "SaaS Intelligence Layer",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "Intelligent data analytics layer that transforms raw product telemetry into actionable insights.",
    longDescription: "DataSense is a SaaS intelligence platform that aggregates raw product telemetry, user behavioral signals, and infrastructure metrics into a beautiful, real-time analytics dashboard. It enables product teams to make data-driven decisions without writing a single SQL query.",
    tags: ["React", "Python", "FastAPI", "ClickHouse", "Redis", "Tailwind CSS"],
    features: [
      "No-code query builder for non-technical product teams",
      "Anomaly detection powered by statistical z-score analysis",
      "Real-time WebSocket dashboard with <100ms refresh rates",
      "White-label embedding for SaaS product teams"
    ],
    stats: [
      { label: "Data Points/day", value: "500M" },
      { label: "Active Teams", value: "320+" }
    ]
  }
];

export const EXPERIENCE_DATA: DetailsData = {
  type: "experience",
  title: "Experience",
  items: [
    {
      id: "exp-1",
      title: "Intern Web Developer (Full-Stack)",
      subtitle: "Creciendo Philippines Incorporated",
      date: "Jan 30 – May 19",
      description: "Contributed as a Full-Stack Developer to the end-to-end design and implementation of an enterprise Human Resource Information System (HRIS) designed to streamline internal company operations.",
      bullets: [
        "Architected and managed the core Attendance Module, integrating secure check-in validation rules and database logs.",
        "Engineered the Leave Request system, developing automated approval workflows and email notification triggers.",
        "Built the Loan Request processing system, designing secure forms and database schemas to manage balances, terms, and transaction histories."
      ]
    }
  ]
};

export const EDUCATION_DATA: DetailsData = {
  type: "education",
  title: "Education",
  items: [
    {
      id: "edu-1",
      title: "B.S. Computer Science",
      subtitle: "Polytechnic University of the Philippines",
      date: "2017 – 2021",
      description: "Graduated with Latin Honors. Thesis on optimizing graph-based relational data in distributed systems using adjacency-matrix partitioning."
    },
    {
      id: "edu-2",
      title: "Full-Stack Web Development",
      subtitle: "Zuitt Coding Bootcamp",
      date: "2021",
      description: "Intensive 3-month bootcamp covering MERN stack, REST APIs, authentication, and deployment to cloud platforms."
    }
  ]
};

export const SKILLS_DATA: DetailsData = {
  type: "skills",
  title: "Skills & Technologies",
  skills: [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React js",
    "Next js", "Tailwind", "Vite", "TanStack Query", "Zustand", "NodeJS",
    "ExpressJS", "Firebase", "Supabase", "REST API", "JWT",
    "MongoDB", "MySQL", "Neon", "Postgres", "Mongoose",
    "Prisma", "Git", "GitHub", "Bitbucket", "AWS S3",
    "Figma", "Antigravity"
  ]
};

