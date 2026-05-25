"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Briefcase, GraduationCap, Award, User, Code2 } from "lucide-react";
import { getSkillIcon, getSkillCategory, SkillCategory } from "@/data/skillsData";

export interface DetailItem {
  id: string;
  title: string;
  subtitle: string;
  shortname?: string;
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
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle open/close with animation states
  useEffect(() => {
    if (isOpen) {
      setIsAnimatingOut(false);
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsAnimatingOut(false);
      }, 220);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Lock background scroll + focus
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // ESC key close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isVisible && !isOpen) return null;
  if (!data) return null;

  const getIcon = () => {
    switch (data.type) {
      case "experience":     return <Briefcase    className="w-5 h-5 text-white" />;
      case "education":      return <GraduationCap className="w-5 h-5 text-white" />;
      case "certifications": return <Award         className="w-5 h-5 text-white" />;
      case "about":          return <User          className="w-5 h-5 text-white" />;
      case "skills":         return <Code2         className="w-5 h-5 text-white" />;
      default:               return null;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={data.title}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300 ${
          isAnimatingOut ? "opacity-0" : "opacity-100"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-3xl max-h-[88vh] flex flex-col rounded-4xl border ${
          isAnimatingOut ? "modal-exit" : "modal-enter"
        }`}
        style={{
          background: "rgba(10, 13, 22, 0.93)",
          borderColor: "rgba(255,255,255,0.10)",
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06) inset",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-7 border-b border-white/8 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-md shrink-0"
              style={{
                background: "var(--accent-gradient)",
                boxShadow: "0 4px 14px rgba(34, 211, 238, 0.2)",
              }}
            >
              {getIcon()}
            </div>
            <h2 className="text-xl font-bold text-(--text-primary) tracking-tight">
              {data.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/6 border border-white/10 text-(--text-muted) hover:text-(--text-primary) hover:bg-white/12 transition-all duration-200 cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label="Close modal"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto scrollbar-thin flex-1">

          {/* About Text */}
          {data.type === "about" && data.aboutText && (
            <div className="space-y-5 text-(--text-secondary) leading-relaxed text-sm font-medium">
              {data.aboutText.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="stagger-item"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Skills Grid — grouped by category with stagger */}
          {data.type === "skills" && data.skills && (
            <div className="space-y-8">
              {CATEGORIES.map((category, catIdx) => {
                const categorySkills = data.skills!.filter(
                  (skillName) => getSkillCategory(skillName) === category
                );
                if (categorySkills.length === 0) return null;

                return (
                  <div
                    key={category}
                    className="space-y-4 stagger-item"
                    style={{ animationDelay: `${catIdx * 60}ms` }}
                  >
                    <h3
                      className="text-[10px] font-bold uppercase tracking-[0.22em] text-(--text-muted) pl-3 border-l-2 border-blue-500 select-none"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {category}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {categorySkills.map((skillName, skillIdx) => (
                        <div
                          key={skillName}
                          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/4 border border-white/8 hover:bg-white/8 hover:border-blue-500/30 transition-all duration-200 group shadow-sm cursor-default stagger-item"
                          style={{ animationDelay: `${catIdx * 60 + skillIdx * 30 + 80}ms` }}
                        >
                          <div className="w-9 h-9 mb-2.5 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                            {getSkillIcon(skillName) || <Code2 className="w-full h-full text-(--text-muted)" />}
                          </div>
                          <span className="text-xs font-semibold text-(--text-secondary) group-hover:text-(--text-primary) transition-colors text-center select-none leading-tight">
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

          {/* Timeline / List — single column for reliability */}
          {data.type !== "about" && data.type !== "skills" && data.items && (
            <div className="space-y-4">
              {data.items.map((item, idx) => (
                <div
                  key={item.id}
                  className="relative pl-12 stagger-item"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  {/* Timeline line */}
                  {idx < data.items!.length - 1 && (
                    <div className="absolute left-[17px] top-10 bottom-[-16px] w-px bg-linear-to-b from-blue-500/30 to-transparent" />
                  )}

                  {/* Timeline node */}
                  <div className="absolute left-0 top-0 w-9 h-9 rounded-full border-2 border-[rgba(255,255,255,0.08)] bg-slate-800/60 flex items-center justify-center shadow-sm z-10 group-hover:border-blue-500/50">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-sm shadow-blue-500/40" />
                  </div>

                  {/* Card */}
                  <div className="p-5 rounded-2xl bg-white/4 border border-white/8 hover:border-blue-500/25 hover:bg-white/6 transition-all duration-200">
                    <div className="flex items-start justify-between flex-wrap md:flex-nowrap gap-2 mb-1.5">
                      <h3 className="max-w-sm font-bold text-(--text-primary) text-base leading-snug">
                        {item.title}
                      </h3>
                      <span
                        className="text-[9px] font-bold px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 whitespace-nowrap"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-xs font-semibold text-(--text-muted) mb-3">
                      {item.subtitle}
                    </h4>
                    <p className="text-sm text-(--text-secondary) font-medium leading-relaxed">
                      {item.description}
                    </p>
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="space-y-2 mt-3 pt-3 border-t border-white/8">
                        {item.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-(--text-muted) font-medium">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/70 shrink-0" />
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
