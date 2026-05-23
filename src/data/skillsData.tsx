import React from "react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGraphql,
  SiPrisma,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiMongodb,
  SiRedis,
  SiPython,
  SiFigma
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

export type SkillCategory = "Frontend" | "Backend" | "Database" | "Technologies & Dev Tools";

export interface SkillInfo {
  name: string;
  colorClass: string; // Tailored gradient/glow background classes for light/dark modes
  icon: React.ReactNode;
  category: SkillCategory;
}

export const SKILLS_LIST: SkillInfo[] = [
  {
    name: "TypeScript",
    category: "Frontend",
    colorClass: "hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400",
    icon: <SiTypescript className="w-full h-full text-[#3178C6]" />
  },
  {
    name: "React",
    category: "Frontend",
    colorClass: "hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400",
    icon: <SiReact className="w-full h-full text-[#61DAFB]" />
  },
  {
    name: "Next.js",
    category: "Frontend",
    colorClass: "hover:bg-slate-500/10 hover:border-slate-500/30 hover:text-slate-400 dark:hover:text-white",
    icon: <SiNextdotjs className="w-full h-full text-black dark:text-white" />
  },
  {
    name: "Node.js",
    category: "Backend",
    colorClass: "hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400",
    icon: <SiNodedotjs className="w-full h-full text-[#339933]" />
  },
  {
    name: "PostgreSQL",
    category: "Database",
    colorClass: "hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-indigo-400",
    icon: <SiPostgresql className="w-full h-full text-[#336791]" />
  },
  {
    name: "Docker",
    category: "Technologies & Dev Tools",
    colorClass: "hover:bg-sky-500/10 hover:border-sky-500/30 hover:text-sky-400",
    icon: <SiDocker className="w-full h-full text-[#2496ED]" />
  },
  {
    name: "AWS",
    category: "Technologies & Dev Tools",
    colorClass: "hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-400",
    icon: <FaAws className="w-full h-full text-[#FF9900]" />
  },
  {
    name: "GraphQL",
    category: "Backend",
    colorClass: "hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-400",
    icon: <SiGraphql className="w-full h-full text-[#E10098]" />
  },
  {
    name: "Prisma",
    category: "Database",
    colorClass: "hover:bg-teal-500/10 hover:border-teal-500/30 hover:text-teal-400",
    icon: <SiPrisma className="w-full h-full text-[#2D3748] dark:text-white" />
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    colorClass: "hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400",
    icon: <SiTailwindcss className="w-full h-full text-[#06B6D4]" />
  },
  {
    name: "JavaScript",
    category: "Frontend",
    colorClass: "hover:bg-yellow-500/10 hover:border-yellow-500/30 hover:text-yellow-400",
    icon: <SiJavascript className="w-full h-full text-[#F7DF1E]" />
  },
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
    name: "Git",
    category: "Technologies & Dev Tools",
    colorClass: "hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400",
    icon: <SiGit className="w-full h-full text-[#F05032]" />
  },
  {
    name: "MongoDB",
    category: "Database",
    colorClass: "hover:bg-green-600/10 hover:border-green-600/30 hover:text-green-500",
    icon: <SiMongodb className="w-full h-full text-[#47A248]" />
  },
  {
    name: "Redis",
    category: "Database",
    colorClass: "hover:bg-red-600/10 hover:border-red-600/30 hover:text-red-500",
    icon: <SiRedis className="w-full h-full text-[#DC382D]" />
  },
  {
    name: "Python",
    category: "Backend",
    colorClass: "hover:bg-blue-400/10 hover:border-blue-400/30 hover:text-blue-300",
    icon: <SiPython className="w-full h-full text-[#3776AB]" />
  },
  {
    name: "Figma",
    category: "Technologies & Dev Tools",
    colorClass: "hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-400",
    icon: <SiFigma className="w-full h-full text-[#F24E1E]" />
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
