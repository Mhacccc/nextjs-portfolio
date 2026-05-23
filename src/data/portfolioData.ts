import { ProjectCardData } from "@/components/bento/ProjectCard";
import { DetailsData } from "@/components/DetailsModal";

export const PROJECTS: ProjectCardData[] = [
  {
    id: "fincore",
    title: "FinCore V3",
    subtitle: "Fintech Core Architecture",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1526628953301-3cd12a98f2fc?auto=format&fit=crop&q=80&w=800",
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
      title: "Senior Full-Stack Engineer",
      subtitle: "Accenture Philippines",
      date: "2022 – Present",
      description: "Leading the full-stack development of enterprise-scale web platforms for global banking clients. Architected micro-service systems that reduced deployment cycles by 60%.",
      bullets: ["Architected micro-frontend systems", "Mentored a team of 8 engineers", "Reduced API latency by 45% via Redis caching"]
    },
    {
      id: "exp-2",
      title: "Software Engineer",
      subtitle: "Freelance / Remote",
      date: "2020 – 2022",
      description: "Built and delivered 12+ client projects including SaaS dashboards, fintech tools, and e-commerce platforms using React, Node.js, and AWS.",
      bullets: ["Delivered 12 production-ready projects", "Built custom CMS for 3 media clients", "Integrated Stripe & PayMongo payment gateways"]
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
    "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL",
    "Docker", "AWS", "GraphQL", "Prisma", "Tailwind CSS",
    "JavaScript", "HTML5", "CSS3", "Git", "MongoDB",
    "Redis", "Python", "Figma"
  ]
};

