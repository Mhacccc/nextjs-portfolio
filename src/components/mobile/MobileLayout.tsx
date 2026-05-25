"use client";

import React from "react";
import { GraduationCap, Briefcase, ArrowUpRight, ArrowRight, ChevronRight, FolderOpen, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaPhone } from "react-icons/fa";
import { ProjectCardData } from "../bento/ProjectCard";
import { DetailsData } from "../DetailsModal";

// Data sources
import { PROJECTS, EXPERIENCE_DATA, EDUCATION_DATA, SKILLS_DATA } from "@/data/portfolioData";
import { SKILLS_LIST } from "@/data/skillsData";

interface MobileLayoutProps {
  openProject: (p: ProjectCardData) => void;
  openDetails: (data: DetailsData) => void;
}

export function MobileLayout({ openProject, openDetails }: MobileLayoutProps) {
  const highlightProject = PROJECTS[0];
  const secondaryProjects = PROJECTS.slice(1);
  const primaryEdu = EDUCATION_DATA.items?.[0];
  
  // Format "Bachelor of Science in ..." -> "B.S. ..."
  const displayEduTitle = primaryEdu?.title
    ? primaryEdu.title.replace("Bachelor of Science in ", "B.S. ")
    : "Education";

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-6 pb-24 pt-4 select-none">
      
      {/* 1. Mobile Header Profile Card */}
      <header className="card p-5 relative overflow-hidden flex flex-col items-center text-center">
        {/* Beacon indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-[9px] font-bold text-emerald-400 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Active
        </div>

        {/* Avatar Container with glowing rings */}
        <div className="relative mt-2 mb-4">
          <div className="w-20 h-20 rounded-full border border-cyan-500/25 flex items-center justify-center p-1 relative z-10">
            <div className="w-full h-full rounded-full border border-blue-500/30 overflow-hidden">
              <img
                src="/avatar.jpg"
                alt="Mark Louie Balaba"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          {/* Subtle accent blur ring */}
          <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-xl -z-0 scale-105" />
        </div>

        {/* Name and titles */}
        <h1 className="text-xl font-extrabold text-(--text-primary) tracking-tight">
          Mark Louie Balaba
        </h1>
        <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mt-1.5" style={{ fontFamily: "var(--font-mono)" }}>
          Full-Stack Web Developer
        </p>
        <p className="text-[12px] text-(--text-muted) leading-relaxed mt-3 max-w-xs font-medium">
          TUP Manila Information Technology student specializing in responsive architectures, IoT-integrated apps, and clean design systems.
        </p>
      </header>

      {/* 2. Highlight Project Card (PingMe Safety) */}
      <section 
        className="card card-clickable overflow-hidden flex flex-col group p-0 relative"
        onClick={() => openProject(highlightProject)}
      >
        {/* Top/Visual Section */}
        <div className="w-full h-52 relative overflow-hidden flex items-center justify-center bg-slate-950/20 pt-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-cyan-500/10 blur-3xl opacity-80" />
          <img
            src={highlightProject.highlightImage || highlightProject.image}
            alt={highlightProject.title}
            className="h-[92%] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* Bottom Details Section */}
        <div className="p-6 border-t border-white/10 flex flex-col justify-between bg-linear-to-b from-slate-950/50 to-slate-950/80">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/60 text-[9px] font-bold text-cyan-400 uppercase tracking-widest shadow-[0_0_12px_rgba(34,211,238,0.15)] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Highlight Project
            </div>
            
            <h2 className="text-lg font-black text-(--text-primary) tracking-tight">
              {highlightProject.title}
            </h2>
            <p className="text-[11px] text-(--text-muted) leading-relaxed font-medium">
              {highlightProject.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1 mt-4">
            {highlightProject.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[8px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 font-bold uppercase tracking-wider"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            className="w-full mt-5 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-white font-semibold text-xs border border-white/15 transition-all duration-300 hover:shadow-lg"
            style={{ background: "var(--accent-gradient)" }}
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 3. Tech Stack Marquee Marquee Mobile Card */}
      <section className="card p-1.5">
        <div className="inner-card py-5 flex flex-col gap-4">
          <div className="px-5">
            <h3 className="text-xs font-bold text-(--text-muted) uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
              Tech Stacks
            </h3>
          </div>

          {/* Infinite Marquee Track */}
          <div className="w-full overflow-hidden relative py-2.5 bg-slate-950/25 border-y border-white/5 pause-on-hover">
            {/* Subtle gradient fades at the edges for mobile too */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

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

          <div className="px-5">
            <button
              onClick={() => openDetails(SKILLS_DATA)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors text-xs text-(--text-secondary) font-semibold"
            >
              <span>View All Skills</span>
              <ChevronRight className="w-4 h-4 text-(--text-muted)" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. TUP Education Card (Dynamic) */}
      <section 
        className="card card-clickable p-1.5"
        onClick={() => openDetails(EDUCATION_DATA)}
      >
        <div className="inner-card flex items-center justify-between px-5 py-4.5 group h-full">
          <div className="flex items-center gap-3.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
              style={{ background: "var(--accent-gradient)" }}
            >
              <GraduationCap className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-(--text-muted) uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
                Education
              </h3>
              <p className="text-xs font-bold text-(--text-primary) mt-0.5 leading-snug">
                {displayEduTitle}
              </p>
              <p className="text-[10px] text-(--text-muted) mt-0.5 font-medium" style={{ fontFamily: "var(--font-mono)" }}>
                {primaryEdu?.shortname || "TUP Manila"}
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-(--text-muted) group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-200" />
        </div>
      </section>

      {/* 5. Creciendo Experience Card (Dynamic) */}
      <section 
        className="card card-clickable p-1.5"
        onClick={() => openDetails(EXPERIENCE_DATA)}
      >
        <div className="inner-card flex items-center justify-between px-5 py-4.5 group h-full">
          <div className="flex items-center gap-3.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
              style={{ background: "var(--accent-gradient)" }}
            >
              <Briefcase className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-(--text-muted) uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
                Internship
              </h3>
              <p className="text-xs font-bold text-(--text-primary) mt-0.5 leading-snug">
                {EXPERIENCE_DATA.items?.[0]?.title || "Intern Web Developer"}
              </p>
              <p className="text-[10px] text-(--text-muted) mt-0.5 font-medium" style={{ fontFamily: "var(--font-mono)" }}>
                {EXPERIENCE_DATA.items?.[0]?.subtitle || "Creciendo"}
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-(--text-muted) group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-200" />
        </div>
      </section>

      {/* 6. Featured Projects Header Card */}
      <section className="card p-1.5">
        <div className="inner-card flex items-center justify-between px-5 py-4 h-full">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shadow-md shrink-0"
              style={{
                background: "var(--accent-gradient)",
                boxShadow: "0 4px 12px rgba(34, 211, 238, 0.2)",
              }}
            >
              <FolderOpen className="w-4.5 h-4.5 text-white" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-(--text-primary) tracking-tight">
              Featured Projects
            </h3>
          </div>
          <div className="flex items-center gap-1 text-(--text-muted) font-bold text-[10px]">
            <span>Active List</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          </div>
        </div>
      </section>

      {/* 7. Bottom Projects Grid */}
      <div className="grid grid-cols-2 gap-4">
        {secondaryProjects.map((project) => (
          <article
            key={project.id}
            className="card card-clickable flex flex-col overflow-hidden group p-0 relative"
            onClick={() => openProject(project)}
          >
            {/* Aspect image header */}
            <div className="w-full aspect-[4/3] relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-65 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
            </div>
            {/* Small Footer Text */}
            <div className="p-3.5 border-t border-white/5 bg-slate-950/70 flex-1 flex flex-col justify-center">
              <h4 className="text-[13px] font-bold text-(--text-primary) tracking-tight leading-tight">
                {project.title}
              </h4>
              <p className="text-[8.5px] text-(--text-muted) font-bold uppercase tracking-wider mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                {project.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* 8. Contact Card Social List */}
      <section className="card p-5 relative overflow-hidden flex flex-col gap-5">
        <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-blue-500/5 blur-2xl pointer-events-none" />

        <div>
          <h2 className="text-lg font-bold text-(--text-primary) leading-snug tracking-tight">
            Let&apos;s build <span className="accent">something together.</span>
          </h2>
          <p className="text-[11px] text-(--text-muted) leading-relaxed mt-1.5 font-medium">
            Currently open to consultations and development positions.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="https://github.com/Mhacccc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors group"
          >
            <FaGithub className="w-3.5 h-3.5 text-(--text-muted) group-hover:text-blue-400 transition-colors" />
            <span className="text-[11px] text-(--text-secondary) group-hover:text-(--text-primary) transition-colors flex-1 font-medium truncate">github.com/Mhacccc</span>
            <ArrowUpRight className="w-3 h-3 text-(--text-muted) opacity-60 group-hover:opacity-100 transition-all" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/mark-louie-balaba-a89bab410/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors group"
          >
            <FaLinkedin className="w-3.5 h-3.5 text-(--text-muted) group-hover:text-blue-400 transition-colors" />
            <span className="text-[11px] text-(--text-secondary) group-hover:text-(--text-primary) transition-colors flex-1 font-medium truncate">Mark Louie Balaba</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-(--text-muted) opacity-60 group-hover:opacity-100 transition-all" />
          </a>

          <a
            href="https://www.facebook.com/Mhaccccyaps/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors group"
          >
            <FaFacebook className="w-3.5 h-3.5 text-(--text-muted) group-hover:text-blue-400 transition-colors" />
            <span className="text-[11px] text-(--text-secondary) group-hover:text-(--text-primary) transition-colors flex-1 font-medium truncate">facebook.com/Mhaccccyaps</span>
            <ArrowUpRight className="w-3 h-3 text-(--text-muted) opacity-60 group-hover:opacity-100 transition-all" />
          </a>

          <a
            href="tel:+639603898078"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors group"
          >
            <FaPhone className="w-3.5 h-3.5 text-(--text-muted) group-hover:text-blue-400 transition-colors" />
            <span className="text-[11px] text-(--text-secondary) group-hover:text-(--text-primary) transition-colors flex-1 font-medium truncate">+63 960 389 8078</span>
            <ArrowUpRight className="w-3 h-3 text-(--text-muted) opacity-60 group-hover:opacity-100 transition-all" />
          </a>

          <a
            href="mailto:marklouie.balaba14@gmail.com"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white border border-white/15 transition-all duration-200 mt-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
            style={{
              background: "var(--accent-gradient)",
              boxShadow: "0 4px 14px rgba(34, 211, 238, 0.2)",
            }}
          >
            <Mail className="w-3.5 h-3.5 text-white" />
            <span className="text-[11px] text-white font-bold">Send an Email</span>
          </a>
        </div>
      </section>

    </div>
  );
}
