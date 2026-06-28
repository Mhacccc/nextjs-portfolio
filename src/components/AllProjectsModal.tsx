"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, FolderOpen } from "lucide-react";
import { ProjectCard, ProjectCardData } from "@/components/bento/ProjectCard";

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectCardData[];
  onProjectSelect: (project: ProjectCardData) => void;
}

export default function AllProjectsModal({
  isOpen,
  onClose,
  projects,
  onProjectSelect,
}: AllProjectsModalProps) {
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
    return () => {
      document.body.style.overflow = "";
    };
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label="All Projects"
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
        className={`relative w-full max-w-5xl max-h-[88vh] flex flex-col rounded-4xl border ${
          isAnimatingOut ? "modal-exit" : "modal-enter"
        }`}
        style={{
          background: "rgba(10, 13, 22, 0.975)",
          borderColor: "rgba(255,255,255,0.10)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06) inset",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-7 border-b border-white/8 shrink-0">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-md shrink-0"
              style={{
                background: "var(--accent-gradient)",
                boxShadow: "0 4px 14px rgba(34, 211, 238, 0.2)",
              }}
            >
              <FolderOpen className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-(--text-primary) tracking-tight">
              All Projects
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
        <div className="p-6 sm:p-8 overflow-y-auto scrollbar-thin flex-1 min-h-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="stagger-item h-56 flex"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <ProjectCard
                  project={project}
                  onClick={onProjectSelect}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
