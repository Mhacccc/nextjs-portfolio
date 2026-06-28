"use client";

import { Briefcase, ChevronRight } from "lucide-react";
import { EXPERIENCE_DATA } from "@/data/portfolioData";

interface ExperienceCardProps {
  onClick: () => void;
}

export function ExperienceCard({ onClick }: ExperienceCardProps) {
  const primaryExp = EXPERIENCE_DATA.items?.[0];

  return (
    <article
      className="card card-clickable p-2 flex flex-col"
      style={{ gridColumn: "6 / 10", gridRow: "4 / 6" }}
      onClick={onClick}
    >
      <div className="inner-card p-6 sm:p-4 flex flex-col justify-between h-full group relative overflow-hidden">
        <div>
          <div className="flex items-center justify-between mb-4.5">
            <div className="flex items-center gap-4">
              <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-md"
              style={{
                background: "var(--accent-gradient)",
                boxShadow: "0 4px 14px rgba(34, 211, 238, 0.2)",
              }}
            >
              <Briefcase className="w-5 h-5 text-white" />
            </div>
             <h3 className="text-base font-bold text-(--text-primary) tracking-tight">Experience</h3>
            </div>
            
            {primaryExp && (
              <span 
                className="text-[9px] px-2.5 py-1 rounded-full border border-blue-500/25 bg-blue-950/20 text-blue-400 font-bold uppercase tracking-wider"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {primaryExp.date}
              </span>
            )}
          </div>
          
         
          {primaryExp && (
            <p className="text-[10.5px] text-(--text-muted) leading-relaxed mt-1 font-medium line-clamp-2">
              {primaryExp.description}
            </p>
          )}

          {/* Premium Dynamic Internship Preview Card */}
          {primaryExp && (
            <div className="mt-4 p-4 rounded-2xl bg-white/4 border border-white/8 group-hover:border-blue-500/25 group-hover:bg-white/6 transition-all duration-300 flex flex-col gap-1.5 relative">
              <div className="flex flex-col">
                <h4 className="text-[12px] font-extrabold text-(--text-primary) tracking-tight leading-tight">
                  {primaryExp.title}
                </h4>
                <p className="text-[9px] text-cyan-400 font-bold uppercase tracking-wider mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                  {primaryExp.subtitle}
                </p>
              </div>
              
              <div className="h-px bg-white/5 my-1" />
              
              <ul className="space-y-1.5">
                {primaryExp.bullets?.slice(0, 2).map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2 text-[9.5px] text-(--text-muted) leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70 mt-1 shrink-0 animate-pulse" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-(--text-muted) group-hover:text-blue-400 transition-colors duration-200 mt-2 relative z-10 font-bold text-[11px]">
          <span>View timeline</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
        </div>
      </div>
    </article>
  );
}
