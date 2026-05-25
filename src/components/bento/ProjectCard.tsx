"use client";

import { ProjectData } from "@/components/ProjectModal";
import { ArrowUpRight } from "lucide-react";

// Extended type with subtitle for card display
export interface ProjectCardData extends ProjectData {
  subtitle: string;
  highlightImage?: string;
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
          className="w-full h-full object-cover opacity-55 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        {/* Dark vignette overlay — consistent with dark theme */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
      </div>

      {/* Hover arrow indicator — appears with spring translate */}
      <div
        className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-250 shadow-lg transform translate-y-2 group-hover:translate-y-0"
        style={{
          background: "var(--accent-gradient)",
          boxShadow: "0 4px 14px rgba(34, 211, 238, 0.25)",
        }}
      >
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>

      {/* Dark Frosted Bottom Panel — matches dark portfolio theme */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4.5 z-10 border-t border-white/10 flex flex-col justify-center"
        style={{
          background: "rgba(8, 11, 20, 0.82)",
          backdropFilter: "blur(16px) saturate(150%)",
          WebkitBackdropFilter: "blur(16px) saturate(150%)",
        }}
      >
        <h3 className="text-[14px] font-bold text-(--text-primary) tracking-tight">
          {project.title}
        </h3>
        <p
          className="text-[10px] text-(--text-muted) mt-0.5 font-bold uppercase tracking-wider"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {project.subtitle}
        </p>
      </div>
    </article>
  );
}
