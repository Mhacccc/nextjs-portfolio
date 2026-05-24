import React from "react";
import { Code2 } from "lucide-react";
import { SKILLS_LIST } from "@/data/skillsData";

interface TechStacksCardProps {
  onViewAll?: () => void;
}

export function TechStacksCard({ onViewAll }: TechStacksCardProps) {
  return (
    <section
      className="card p-1.5"
      style={{ gridColumn: "1 / 10", gridRow: "3 / 4" }}
    >
      <div className="inner-card flex items-center justify-between gap-4 px-6 py-3 h-full w-full">
        {/* Left Side: Header & Divider */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 border border-white/20 text-white shadow-md shadow-cyan-500/10">
            <Code2 className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] select-none">
              Tech Stack
            </span>
          </div>
          <div className="w-px h-5 bg-slate-200/20" />
        </div>

        {/* Middle Side: Marquee Animation */}
        <div className="overflow-hidden relative flex-1 h-full flex items-center min-w-0 pause-on-hover">
          {/* Subtle gradient fades at the edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-(--card) to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-(--card) to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex gap-4 animate-marquee w-max">
            {/* Render list twice for a seamless infinite loop */}
            {[...SKILLS_LIST, ...SKILLS_LIST].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/15 transition-all duration-300 select-none shadow-xs text-slate-200"
              >
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: View All Button */}
        <button
          onClick={onViewAll}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-xs font-bold text-slate-300 hover:text-white transition-all shrink-0 cursor-pointer shadow-sm active:scale-95"
        >
          View All
        </button>
      </div>
    </section>
  );
}
