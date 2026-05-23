"use client";

import React, { useEffect } from "react";
import { X, Briefcase, GraduationCap, Award, User, Code2 } from "lucide-react";
import { getSkillIcon, getSkillCategory, SkillCategory } from "@/data/skillsData";

export interface DetailItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  bullets?: string[];
}

export interface DetailsData {
  type: "about" | "experience" | "education" | "certifications" | "skills";
  title: string;
  items?: DetailItem[];
  aboutText?: string[];
  skills?: string[];
}

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: DetailsData | null;
}

const CATEGORIES: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Technologies & Dev Tools"
];

export default function DetailsModal({ isOpen, onClose, data }: DetailsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !data) return null;

  const getIcon = () => {
    switch (data.type) {
      case "experience": return <Briefcase className="w-5 h-5 text-white" />;
      case "education": return <GraduationCap className="w-5 h-5 text-white" />;
      case "certifications": return <Award className="w-5 h-5 text-white" />;
      case "about": return <User className="w-5 h-5 text-white" />;
      case "skills": return <Code2 className="w-5 h-5 text-white" />;
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-[2.5rem] bg-[var(--card)] border border-[var(--border)] backdrop-blur-3xl shadow-2xl animate-[fadeIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[var(--border)] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 border border-white/20 flex items-center justify-center shadow-md shadow-cyan-500/10 shrink-0">
              {getIcon()}
            </div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">{data.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/10 transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto scrollbar-thin flex-1">
          
          {/* About Text Rendering */}
          {data.type === "about" && data.aboutText && (
            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed font-semibold text-sm sm:text-base">
              {data.aboutText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          )}

          {/* Skills Grid Rendering Grouped by Categories */}
          {data.type === "skills" && data.skills && (
            <div className="space-y-8 animate-[fadeIn_0.4s_ease-out]">
              {CATEGORIES.map((category) => {
                const categorySkills = data.skills!.filter(
                  (skillName) => getSkillCategory(skillName) === category
                );
                if (categorySkills.length === 0) return null;

                return (
                  <div key={category} className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] pl-2.5 border-l-2 border-blue-500 select-none">
                      {category}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
                      {categorySkills.map((skillName) => (
                        <div 
                          key={skillName} 
                          className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/15 transition-all duration-300 group shadow-xs hover:scale-105 cursor-default"
                        >
                          <div className="w-10 h-10 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            {getSkillIcon(skillName) || <Code2 className="w-full h-full text-[var(--text-muted)]" />}
                          </div>
                          <span className="text-sm font-bold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors select-none">
                            {skillName}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Timeline / List Rendering */}
          {data.type !== "about" && data.type !== "skills" && data.items && (
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {data.items.map((item, idx) => (
                <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                   
                  {/* Timeline Node */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--card)] bg-slate-800 group-hover:bg-blue-600 text-slate-500 group-hover:text-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-current" />
                  </div>
                  
                  {/* Card Content */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl bg-white/5 border border-white/8 group-hover:border-blue-500/30 hover:bg-white/10 transition-all shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2 sm:gap-0">
                      <h3 className="font-bold text-[var(--text-primary)] text-lg">{item.title}</h3>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-sm whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[var(--text-muted)] mb-3">{item.subtitle}</h4>
                    <p className="text-sm text-[var(--text-secondary)] font-semibold leading-relaxed mb-4">
                      {item.description}
                    </p>
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="space-y-1.5 mt-3 border-t border-white/10 pt-3">
                        {item.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0 shadow-sm shadow-blue-500/20" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
