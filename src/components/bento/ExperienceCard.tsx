"use client";

import { Briefcase, ChevronRight } from "lucide-react";

interface ExperienceCardProps {
  onClick: () => void;
}

export function ExperienceCard({ onClick }: ExperienceCardProps) {
  return (
    <article
      className="card card-clickable p-2 flex flex-col"
      style={{ gridColumn: "6 / 10", gridRow: "4 / 6" }}
      onClick={onClick}
    >
      <div className="inner-card p-6 sm:p-7 flex flex-col justify-between h-full group relative overflow-hidden">
        <div>
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 shadow-md"
            style={{
              background: "var(--accent-gradient)",
              boxShadow: "0 4px 14px rgba(34, 211, 238, 0.2)",
            }}
          >
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-base font-bold text-(--text-primary) mb-1.5 tracking-tight">Experience</h3>
          <p className="text-[12px] text-(--text-muted) leading-relaxed max-w-[240px] font-medium">
            Full-stack web engineering internship building HRIS platforms.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-(--text-muted) group-hover:text-blue-400 transition-colors duration-200 relative z-10 font-bold text-[11px]">
          <span>View timeline</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
        </div>
      </div>
    </article>
  );
}
