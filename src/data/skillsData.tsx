import React from "react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiMongodb,
  SiGithub,
  SiBitbucket,
  SiExpress,
  SiMysql,
  SiSupabase,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

export type SkillCategory = "Frontend" | "Backend" | "Database" | "Technologies & Dev Tools";

export interface SkillInfo {
  name: string;
  colorClass: string;
  icon: React.ReactNode;
  category: SkillCategory;
}

export const SKILLS_LIST: SkillInfo[] = [
  // --- FRONTEND ---
  {
    name: "HTML5",
    category: "Frontend",
    colorClass: "hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-400",
    icon: <SiHtml5 className="w-full h-full text-[#E34F26]" />
  },
  {
    name: "CSS3",
    category: "Frontend",
    colorClass: "hover:bg-blue-600/10 hover:border-blue-600/30 hover:text-blue-500",
    icon: <SiCss className="w-full h-full text-[#1572B6]" />
  },
  {
    name: "JavaScript",
    category: "Frontend",
    colorClass: "hover:bg-yellow-500/10 hover:border-yellow-500/30 hover:text-yellow-400",
    icon: <SiJavascript className="w-full h-full text-[#F7DF1E]" />
  },
  {
    name: "TypeScript",
    category: "Frontend",
    colorClass: "hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400",
    icon: <SiTypescript className="w-full h-full text-[#3178C6]" />
  },
  {
    name: "React js",
    category: "Frontend",
    colorClass: "hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400",
    icon: <SiReact className="w-full h-full text-[#61DAFB]" />
  },
  {
    name: "Next js",
    category: "Frontend",
    colorClass: "hover:bg-slate-500/10 hover:border-slate-500/30 hover:text-slate-400 dark:hover:text-white",
    icon: <SiNextdotjs className="w-full h-full text-black dark:text-white" />
  },
  {
    name: "Tailwind",
    category: "Frontend",
    colorClass: "hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400",
    icon: <SiTailwindcss className="w-full h-full text-[#06B6D4]" />
  },
  {
    name: "Vite",
    category: "Frontend",
    colorClass: "hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-400",
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" alt="Vite" className="w-full h-full object-contain" />
  },
  {
    name: "TanStack Query",
    category: "Frontend",
    colorClass: "hover:bg-rose-500/10 hover:border-rose-500/30 hover:text-rose-400",
    icon: <img src="https://res.cloudinary.com/djaved28z/image/upload/v1779673748/React-Query-Icon--Streamline-Svg-Logos_r8qrgr.svg" alt="TanStack Query" className="w-full h-full object-contain" />
  },
  {
    name: "Zustand",
    category: "Frontend",
    colorClass: "hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-400",
    icon: <img src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" alt="Zustand" className="w-full h-full object-contain" />
  },

  // --- BACKEND ---
  {
    name: "NodeJS",
    category: "Backend",
    colorClass: "hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400",
    icon: <SiNodedotjs className="w-full h-full text-[#339933]" />
  },
  {
    name: "ExpressJS",
    category: "Backend",
    colorClass: "hover:bg-slate-500/10 hover:border-slate-500/30 hover:text-slate-400 dark:hover:text-white",
    icon: <SiExpress className="w-full h-full text-[#000000] dark:text-white" />
  },
  {
    name: "Firebase",
    category: "Backend",
    colorClass: "hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-400",
    icon: <img src="https://res.cloudinary.com/djaved28z/image/upload/v1779674987/google-firebase-icon_rzeupf.svg" alt="Firebase" className="w-full h-full object-contain" />
  },
  {
    name: "Supabase",
    category: "Database",
    colorClass: "hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400",
    icon: <SiSupabase className="w-full h-full text-[#3ECF8E]" />
  },
  {
    name: "REST API",
    category: "Backend",
    colorClass: "hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400",
    icon: (
      <svg className="w-full h-full text-[#2563eb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    )
  },
  {
    name: "JWT",
    category: "Backend",
    colorClass: "hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-400",
    icon: <img src="https://res.cloudinary.com/djaved28z/image/upload/v1779674354/icons8-jwt_gfs3n0.svg" alt="JWT" className="w-full h-full object-contain" />
  },

  // --- DATABASE ---
  {
    name: "MongoDB",
    category: "Database",
    colorClass: "hover:bg-green-600/10 hover:border-green-600/30 hover:text-green-500",
    icon: <SiMongodb className="w-full h-full text-[#47A248]" />
  },
  {
    name: "MySQL",
    category: "Database",
    colorClass: "hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400",
    icon: <SiMysql className="w-full h-full text-[#4479A1]" />
  },
  {
    name: "Neon",
    category: "Database",
    colorClass: "hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400",
    icon: <img src="https://res.cloudinary.com/djaved28z/image/upload/v1779674433/neon-logomark-dark-color_ecuszr.svg" alt="Neon" className="w-full h-full object-contain" />
  },
  {
    name: "Postgres",
    category: "Database",
    colorClass: "hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-indigo-400",
    icon: <img src="https://res.cloudinary.com/djaved28z/image/upload/v1779674699/postgresql-logo-svgrepo-com_ijvtac.svg" alt="Postgres" className="w-full h-full object-contain" />
  },
  {
    name: "Mongoose",
    category: "Database",
    colorClass: "hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400",
    icon: <SiMongodb className="w-full h-full text-[#880000]" />
  },
  {
    name: "Prisma",
    category: "Database",
    colorClass: "hover:bg-teal-500/10 hover:border-teal-500/30 hover:text-teal-400",
    icon: <SiPrisma className="w-full h-full text-[#2D3748] dark:text-white" />
  },

  // --- DEV TOOLS & TECH ---
  {
    name: "Git",
    category: "Technologies & Dev Tools",
    colorClass: "hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400",
    icon: <SiGit className="w-full h-full text-[#F05032]" />
  },
  {
    name: "GitHub",
    category: "Technologies & Dev Tools",
    colorClass: "hover:bg-slate-500/10 hover:border-slate-500/30 hover:text-slate-400 dark:hover:text-white",
    icon: <SiGithub className="w-full h-full text-black dark:text-white" />
  },
  {
    name: "Bitbucket",
    category: "Technologies & Dev Tools",
    colorClass: "hover:bg-blue-600/10 hover:border-blue-600/30 hover:text-blue-500",
    icon: <SiBitbucket className="w-full h-full text-[#0052CC]" />
  },
  {
    name: "AWS S3",
    category: "Technologies & Dev Tools",
    colorClass: "hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-400",
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg" alt="AWS S3" className="w-full h-full object-contain" />
  },
  {
    name: "Figma",
    category: "Technologies & Dev Tools",
    colorClass: "hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-400",
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="w-full h-full object-contain" />
  },
  {
    name: "Antigravity",
    category: "Technologies & Dev Tools",
    colorClass: "hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400",
    icon: <img src="https://res.cloudinary.com/djaved28z/image/upload/v1779674696/antigravity-color_gpg5pd.svg" alt="Antigravity" className="w-full h-full object-contain" />
  }
];

export function getSkillIcon(name: string): React.ReactNode {
  const skill = SKILLS_LIST.find((s) => s.name.toLowerCase() === name.toLowerCase());
  return skill ? skill.icon : null;
}

export function getSkillColorClass(name: string): string {
  const skill = SKILLS_LIST.find((s) => s.name.toLowerCase() === name.toLowerCase());
  return skill ? skill.colorClass : "hover:bg-slate-500/10 hover:border-slate-500/30 hover:text-slate-400";
}

export function getSkillCategory(name: string): SkillCategory {
  const skill = SKILLS_LIST.find((s) => s.name.toLowerCase() === name.toLowerCase());
  return skill ? skill.category : "Technologies & Dev Tools";
}
