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
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 border border-white/20 flex items-center justify-center mb-4 shadow-md shadow-cyan-500/10">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-base font-bold text-slate-800 mb-1.5 tracking-tight">Experience</h3>
          <p className="text-[12px] text-slate-500 leading-relaxed max-w-[240px] font-semibold">
            4+ years building enterprise-scale platforms & SaaS products.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-blue-600 transition-colors duration-300 relative z-10 font-bold text-[11px]">
          <span>View timeline</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
        </div>
      </div>
    </article>
  );
}
