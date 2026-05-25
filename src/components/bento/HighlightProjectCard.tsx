"use client";

import { ArrowUpRight } from "lucide-react";
import { ProjectCardData } from "./ProjectCard";

interface HighlightProjectCardProps {
  project: ProjectCardData;
  onClick?: () => void;
}

export function HighlightProjectCard({ project, onClick }: HighlightProjectCardProps) {
  return (
    <article
      className="card card-clickable relative flex flex-col overflow-hidden group p-0"
      style={{ gridColumn: "5 / 10", gridRow: "1 / 2" }}
      onClick={onClick}
    >
      <div className="inner-card p-0 flex h-full overflow-hidden relative">
        {/* Left Side: Copy and details */}
        <div className="w-[58%] p-6 sm:p-7 flex flex-col justify-evenly h-full relative z-20 bg-linear-to-r from-slate-950/95 via-slate-950/75 to-transparent">
          <div className="space-y-2">
            {/* Monospace premium tag */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/60 text-[9px] font-bold text-cyan-400 uppercase tracking-widest shadow-[0_0_12px_rgba(34,211,238,0.15)] relative z-30">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Highlight Project
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-(--text-primary) tracking-tight leading-tight pt-1">
              {project.title}
            </h2>
            <p className="text-[11px] text-(--text-muted) leading-relaxed max-w-[270px] font-medium">
              {project.description}
            </p>
          </div>

          {/* Tech tags and CTA */}
          <div className="space-y-4">
            {/* Tech Tags Mini Badge */}
            <div className="flex flex-wrap gap-1.5 max-w-full">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 font-semibold uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <button
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-xs border border-white/15 transition-all duration-300 group cursor-pointer hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                style={{
                  background: "var(--accent-gradient)",
                  boxShadow: "0 4px 14px rgba(34, 211, 238, 0.2)",
                }}
                tabIndex={-1} /* parent article is the interactive element */
              >
                <span>Explore Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Clean full-display project image (finalview.png) */}
        <div className="absolute right-3 top-3 bottom-3 w-[46%] z-10 flex items-center justify-center pointer-events-none select-none">
          {/* Subtle backdrop glow behind the transparent PNG */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl opacity-60 group-hover:opacity-100 group-hover:bg-blue-500/15 transition-all duration-700" />
          
          <img
            src={project.highlightImage || project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
        </div>

        {/* Outer glowing border indicator */}
        <div className="absolute inset-0 border border-white/10 group-hover:border-cyan-500/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
      </div>
    </article>
  );
}
