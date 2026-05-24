"use client";

import { GraduationCap, ChevronRight } from "lucide-react";

interface EducationCardProps {
  onClick: () => void;
}

export function EducationCard({ onClick }: EducationCardProps) {
  return (
    <article
      className="card card-clickable p-1.5"
      style={{ gridColumn: "5 / 10", gridRow: "2 / 3" }}
      onClick={onClick}
    >
      <div className="inner-card flex items-center justify-between px-6 py-4.5 group h-full">
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-md"
            style={{
              background: "var(--accent-gradient)",
              boxShadow: "0 4px 12px rgba(34, 211, 238, 0.2)",
            }}
          >
            <GraduationCap className="w-4.5 h-4.5 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-(--text-primary)">Education</h3>
            <p className="text-[11px] text-(--text-muted) mt-0.5 font-medium" style={{ fontFamily: "var(--font-mono)" }}>B.S. Computer Science · PUP Manila</p>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-(--text-muted) group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-200" />
      </div>
    </article>
  );
}
