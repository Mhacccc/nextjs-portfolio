"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, ShieldCheck, Cpu, Layers } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  stats: { label: string; value: string }[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Prevent background scrolling when modal is open
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

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-indigo-950/30 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[2.5rem] bg-white/96 border border-white/50 backdrop-blur-3xl shadow-2xl p-6 sm:p-10 text-slate-700 animate-[fadeIn_0.3s_ease-out] scrollbar-thin">
        {/* Header Control */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/70 border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-white transition-all cursor-pointer z-10 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Section */}
        <div className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden mb-8 border border-white/50 shadow-md">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
          <div className="absolute bottom-6 left-6 sm:left-10 z-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-sky-300">
              {project.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Description */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-white/90 border border-white/80 shadow-sm">
              <h3 className="text-lg font-bold text-slate-850 mb-3 flex items-center gap-2">
                <Layers className="w-4.5 h-4.5 text-blue-600" />
                Overview
              </h3>
              <p className="text-slate-600 leading-relaxed font-semibold text-sm sm:text-base">
                {project.longDescription}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/90 border border-white/80 shadow-sm">
              <h3 className="text-lg font-bold text-slate-850 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-600" />
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0 shadow-sm shadow-blue-500/20" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats & Technologies Sidebar */}
          <div className="space-y-6">
            {/* Tech Badges */}
            <div className="p-6 rounded-2xl bg-white/90 border border-white/80 shadow-sm">
              <h3 className="text-sm font-bold text-slate-850 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-600" />
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-600 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-2 gap-4">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/90 border border-white/80 text-center shadow-sm">
                  <p className="text-2xl font-extrabold text-blue-600">{stat.value}</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold text-sm border border-white/20 transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-cyan-500/10 cursor-pointer"
            >
              <span>Explore Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
