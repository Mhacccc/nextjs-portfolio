"use client";

import { ProjectData } from "@/components/ProjectModal";
import { ArrowUpRight } from "lucide-react";

// Extended type with subtitle for card display
export interface ProjectCardData extends ProjectData {
  subtitle: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
  gridCol: string;
  gridRow: string;
  onClick: (p: ProjectCardData) => void;
}

export function ProjectCard({ project, gridCol, gridRow, onClick }: ProjectCardProps) {
  return (
    <article
      className="card card-clickable relative overflow-hidden group p-0"
      style={{ gridColumn: gridCol, gridRow: gridRow }}
      onClick={() => onClick(project)}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        {/* Subtle white vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
      </div>

      {/* Hover arrow indicator */}
      <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-blue-500 border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md shadow-blue-500/20 transform translate-y-1 group-hover:translate-y-0">
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>

      {/* High-blur Frosted Bottom Panel */}
      <div className="absolute bottom-0 left-0 right-0 p-4.5 z-10 bg-white/88 backdrop-blur-md border-t border-white/60 shadow-lg flex flex-col justify-center">
        <h3 className="text-[14px] font-bold text-slate-850 tracking-tight">{project.title}</h3>
        <p className="text-[10px] text-slate-500 mt-0.5 font-bold uppercase tracking-wider">{project.subtitle}</p>
      </div>
    </article>
  );
}
