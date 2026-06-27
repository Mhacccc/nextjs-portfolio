import { ProjectCardData } from "@/components/bento/ProjectCard";
import { DetailsData } from "@/components/DetailsModal";

export const PROJECTS: ProjectCardData[] = [
  {
    id: "pingme",
    title: "PingMe",
    subtitle: "IoT & Mobile Safety PWA",
    category: "IoT & PWA",
    image: "/projects/pingme/web-view.png",
    highlightImage: "/projects/pingme/finalview.png",
    link: "https://ping-me-now.netlify.app/",
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
    id: "hirequal",
    title: "HireQual: AI-Powered Applicant Tracking System",
    subtitle: "Automate & Streamline Recruitment",
    category: "Human Resources Technology (HRTech)",
    image: "/projects/hireQual/hirequal.png",
    description: "A full-stack candidate management platform featuring Google Gemini AI resume screening, an interactive Kanban recruitment pipeline, and role-based team collaboration workspaces.",
    longDescription: "HireQual is a decoupled full-stack web application designed to eliminate administrative bottlenecks in hiring workflows. By combining raw PDF text-extraction pipelines with the Google Gemini AI API, the platform automatically parses, interprets, and highlights relevant skills from uploaded applicant resumes. Recruiters can drag-and-drop candidates through active hiring stages via a responsive Kanban board interface, manage multi-user organizational workspaces with a built-in email invitation system, and instantly publish updates to synchronized public career listings.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Tailwind CSS", "Vite"],
    link: "https://hirequal.vercel.app/",
    features: [
      "AI-driven resume parsing and intelligent candidate matching powered by Google Gemini",
      "Dynamic drag-and-drop Kanban workflow for real-time applicant status tracking",
      "Unified system architecture featuring split internal recruiter dashboards and an external public job application portal",
      "Secure team collaboration workspace with role-based member authentication and access controls",
      "Fully fluid responsive layout leveraging specialized table and card patterns optimized for desktop and mobile screen footprints"
    ],
    stats: [
      { label: "AI Parsing Latency", value: "< 2.5s" },
      { label: "Applicants", value: "5" }
    ]
  },
  {

    id: "user-management-system",
    title: "Secure User Management & Audit System",
    subtitle: "Centralized User Control & Activity Tracking",
    category: "Identity & Access Management (IAM)",
    image: "/projects/ums/ums.png",
    description: "A robust full-stack administration portal featuring secure role-based authentication, user profile management, and an unalterable system-wide activity audit trail.",
    longDescription: "This platform is a decoupled full-stack user administration architecture built to provide secure user tracking and granular profile management. The backend is an automated Node.js/Express API connected to MongoDB, featuring dedicated schemas for structural user identities and immutable event-driven audit tracking. The frontend utilizes the Next.js App Router, combining secure HTTP-only cookie or session validation with Edge-ready middleware route guards. It features an interactive, component-driven administration panel complete with responsive metric dashboards, personalized activity logs, and a unified theme subsystem.",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Shadcn UI", "REST API"],
    features: [
      "Comprehensive system-wide Audit Logging framework capturing all data mutations, authentication changes, and user actions",
      "Dynamic admin dashboard enabling secure user lookup, real-time metric evaluation, and granular profile editing",
      "Decoupled multi-layered security utilizing secure backend authentication and Next.js layout-level middleware route guards",
      "Dedicated 'My Activity' pipeline giving individual users complete transparency over their session history and actions",
      "Modern interface designed with modular Shadcn UI primitives, custom layouts, and a native light/dark mode theme toggle"
    ],
    stats: [
      {label:"Audit Latency", value: "Real-time"},
      {label: "Routing Engine", value: "Next.js App Router"}
    ]
  },
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
      title: "Bachelor of Science in Information Technology",
      subtitle: "Technological University of the Philippines - Manila",
      date: "2022 – 2026",
      description: "Specialized in Web Systems, Software Engineering, and Internet of Things (IoT). Capstone thesis on 'PingMe'—an IoT-integrated personal safety PWA and hardware smart bracelet with sub-2s alert latency.",
      shortname: "TUP-Manila"
    },
    {
      id: "edu-2",
      title: "Senior High School – Science, Technology, Engineering, and Mathematics (STEM)",
      subtitle: "First City Providential College",
      date: "2016 – 2018",
      description: "Academic track focused on Science, Technology, Engineering, and Mathematics, providing foundational knowledge in math, physics, chemistry, and computer programming.",
      shortname: "FCPC - Bulacan"
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
    "Figma", "Antigravity","Postman"
  ]
};

