import { ProjectCardData } from "@/components/bento/ProjectCard";
import { DetailsData } from "@/components/DetailsModal";

export const PROJECTS: ProjectCardData[] = [
  {
    id: "pingme",
    title: "PingMe: IoT Integrated Safety Application with Smart Bracelet",
    subtitle: "IoT & Mobile Safety PWA",
    category: "IoT & PWA",
    image: "/projects/pingme/web-view.png",
    highlightImage: "/projects/pingme/finalview.png",
    link: "https://ping-me-now.netlify.app/",
    description: "IoT-based personal safety system with smart bracelet and responsive PWA",
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
    tags: ["React", "Node.js", "Express", "REST API", "JWT", "MongoDB", "Gemini AI", "Tailwind CSS", "Vite", "Cloudinary"],
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
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Shadcn UI", "REST API","JWT"],
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
  {
    id: "socket-io-tictactoe",
    title: "Real-Time Multiplayer Tic-Tac-Toe",
    subtitle: "Instant WebSocket-Powered Gameplay",
    category: "Real-Time Web Applications",
    image: "/projects/tictactoe/image.png",
    link: "https://tic-tac-toe-multiplayer-by-mhac.vercel.app/",
    description: "A low-latency multiplayer gaming platform featuring dynamic room management, automated game state synchronization, and server-side turn validation powered by Socket.io.",
    longDescription: "This application is a real-time multiplayer gaming system engineered to showcase event-driven communication and state reconciliation across concurrent clients. Built with a Node.js and Express backend utilizing Socket.io, the platform orchestrates isolated game sessions using dynamic, code-based room routing. The backend functions as the authoritative state engine—validating moves, enforcing strict sequential turn logic, tracking player connection lifecycles, and securely calculating win or tie conditions to prevent client-side manipulation. The user interface provides immediate interaction feedback, instantly updating both boards simultaneously.",
    tags: ["JavaScript", "Socket.io", "Node.js", "Express", "HTML5", "CSS3"],
    features: [
      "Bi-directional, event-driven architecture using Socket.io for sub-millisecond game state and move propagation",
      "Dynamic multi-room scaling allowing players to create or enter isolated game environments via unique room codes",
      "Authoritative server-side state enforcement to securely calculate turn sequencing, valid grids, and win/draw conclusions",
      "Robust lifecycle handling that tracks socket disconnects in real-time, safely alerting remaining peers of sudden drop-offs",
      "Synchronized session reset loops enabling players to wipe the board state and trigger rematches seamlessly without rebuilding rooms"
    ],
    stats: [
      { label: "Protocol", value: "WebSockets" },
      { label: "Sync Latency", value: "Real-time" }
    ]
  },
  {
    id: "elizas-adventure",
    title: "Eliza's Adventure: 2D Web Game Engine",
    subtitle: "Foundational JavaScript Game Engine",
    category: "Game Development",
    image: "/projects/elizas/image.png",
    link:"https://elizas-adventure.netlify.app/",
    description: "An interactive, browser-native 2D adventure game developed from scratch using vanilla JavaScript to master underlying browser rendering loops, custom event mapping, and state execution mechanics.",
    longDescription: "Eliza's Adventure is an exploratory web game engineered to reinforce core programming structures and raw JavaScript execution patterns outside the abstraction layer of heavy modern frameworks. Built natively on top of the browser's document model and drawing APIs, the project orchestrates structural design paradigms including Object-Oriented Programming (OOP), modular entity handling, and scalable coordinate mapping. The game serves as a clean, self-contained implementation showcasing how low-level interactive environments translate input signals directly into predictable runtime behaviors inside the client view.",
    tags: ["JavaScript","Kaplay.js", "HTML5 Canvas", "CSS3", "HTML5"],
    features: [
      "Deterministic animation update workflow utilizing requestAnimationFrame to establish variable frame rate synchronization",
      "Native browser canvas drawing pipelines rendering responsive character matrices, state grids, and positional layout updates",
      "Custom vector-based bounding boxes enabling collision calculations and structural object-to-object spatial constraints",
      "Centralized game state machine structuring fluid logic pivots between interactive explore loops, dialogue transitions, and win/loss states",
      "Dependency-free deployment footprint leveraging pure event delegation patterns and clean asset preloading logic"
    ],
    stats: [
      { label: "Framework", value: "Kaplay" },
      { label: "Rendering", value: "HTML5 Canvas" }
    ]
  },
  {
    id: "memory-game",
    title: "Interactive Web Memory Game",
    subtitle: "State Control & DOM Manipulation Practice",
    category: "Front-End Web Development",
    image: "/projects/memorygame/image.png",
    link:"https://memory-game-mhacccc.netlify.app/",
    description: "A classic card-matching browser game built with vanilla JavaScript to reinforce critical front-end skills like event handling, asynchronous timers, and structural state tracking.",
    longDescription: "This browser-native memory game was designed as a hands-on vehicle for mastering pure JavaScript fundamentals and programmatic layout coordination. Moving past static interfaces, the application implements dynamic DOM instantiation, algorithmic data shuffling, and conditional matching logic. By relying entirely on basic Web APIs rather than external framework bindings, the project showcases clean, structural logic flows, precise element state adjustments, and the coordinated execution of timed visual responses within the browser environment.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    features: [
      "Algorithmic grid distribution leveraging array sorting mechanisms to ensure random, unique card positioning on every fresh session reset",
      "Strict event handling architecture managing click interactions while preventing illicit multi-card choice inputs during active flip cycles",
      "Asynchronous delay flows driven by standard setTimeout loops to cleanly handle mismatch animations, transition sequences, and board locking",
      "Synchronized state validation engines instantly tracking matched card pairs, operational move counters, and total completion metrics",
      "Fluid responsive layout patterns using modular CSS flexbox or grid definitions to maintain board uniformity across variable screens"
    ],
    stats: [
      { label: "Logic Pattern", value: "Event-Driven" },
      { label: "Dependencies", value: "None (Zero)" }
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

