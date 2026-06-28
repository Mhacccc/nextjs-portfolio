"use client";

import React, { useEffect, useRef, useState } from "react";
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
  link?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle open/close with animation states
  useEffect(() => {
    if (isOpen) {
      setIsAnimatingOut(false);
      // Small tick to let the DOM paint before triggering animation
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

  // Lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus the close button for keyboard accessibility
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
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
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
        className={`relative w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-4xl border scrollbar-thin ${
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
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/8 border border-white/12 text-slate-400 hover:text-white hover:bg-white/14 transition-all duration-200 cursor-pointer shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          aria-label="Close modal"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        {/* Hero Image Section */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-t-4xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-75"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[rgba(10,13,22,1)] via-[rgba(10,13,22,0.4)] to-transparent" />
          {/* Category + Title over image */}
          <div className="absolute bottom-6 left-6 sm:left-8 z-10">
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "var(--accent-cyan)" }}
            >
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1.5 tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left — Overview + Features */}
          <div className="md:col-span-2 space-y-5">
            {/* Overview */}
            <div className="p-5 rounded-2xl border border-white/8 bg-white/4">
              <h3 className="text-sm font-bold text-(--text-primary) mb-3 flex items-center gap-2 uppercase tracking-wider">
                <Layers className="w-4 h-4 text-blue-400" />
                Overview
              </h3>
              <p className="text-(--text-secondary) leading-relaxed text-sm font-medium">
                {project.longDescription}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="p-5 rounded-2xl border border-white/8 bg-white/4">
              <h3 className="text-sm font-bold text-(--text-primary) mb-4 flex items-center gap-2 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-(--text-secondary) font-medium stagger-item"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-sm shadow-blue-500/40" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Stack, Stats, CTA */}
          <div className="space-y-5">
            {/* Tech Stack */}
            <div className="p-5 rounded-2xl border border-white/8 bg-white/4">
              <h3
                className="text-[10px] font-bold uppercase tracking-widest text-(--text-muted) mb-4 flex items-center gap-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl bg-white/6 border border-white/10 text-xs font-semibold text-(--text-secondary)"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {project.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-white/8 bg-white/4 text-center stagger-item"
                  style={{ animationDelay: `${idx * 80 + 100}ms` }}
                >
                  <p className="text-2xl font-extrabold accent">{stat.value}</p>
                  <p
                    className="text-[9px] text-(--text-muted) uppercase tracking-widest mt-1"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={project.link || "#"}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              onClick={project.link ? undefined : (e) => e.preventDefault()}
              className="w-full py-3.5 rounded-2xl text-white font-bold text-sm border border-white/15 transition-all duration-250 flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              style={{
                background: "var(--accent-gradient)",
                boxShadow: "0 8px 24px rgba(34, 211, 238, 0.25)",
              }}
            >
              <span>Explore Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
