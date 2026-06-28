"use client";

import React, { useState } from "react";
import { ProjectCardData } from "@/components/bento/ProjectCard";
import { DetailsData } from "@/components/DetailsModal";

// Modals
import ProjectModal from "@/components/ProjectModal";
import DetailsModal from "@/components/DetailsModal";
import AllProjectsModal from "@/components/AllProjectsModal";

// Data
import { PROJECTS, EXPERIENCE_DATA, EDUCATION_DATA, SKILLS_DATA } from "@/data/portfolioData";


// Bento Cards
import { ProfileCard } from "@/components/bento/ProfileCard";
import { HighlightProjectCard } from "@/components/bento/HighlightProjectCard";
import { ExtraCard } from "@/components/bento/ExtraCard";
import { EducationCard } from "@/components/bento/EducationCard";
import { TechStacksCard } from "@/components/bento/TechStacksCard";
import { ContactCard } from "@/components/bento/ContactCard";
import { FeaturedProjectsCard } from "@/components/bento/FeaturedProjectsCard";
import { ExperienceCard } from "@/components/bento/ExperienceCard";
import { ProjectCard } from "@/components/bento/ProjectCard";
import { MobileLayout } from "@/components/mobile/MobileLayout";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null);
  const [selectedDetails, setSelectedDetails] = useState<DetailsData | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);

  const openProject = (p: ProjectCardData) => {
    setSelectedProject(p);
    setIsProjectModalOpen(true);
  };

  const openDetails = (data: DetailsData) => {
    setSelectedDetails(data);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="h-dvh w-screen overflow-hidden flex items-center justify-center">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* 3D Winding Tube SVG Background Element */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20 opacity-80">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="tubeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="tubeHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <filter id="tubeShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="8" dy="22" stdDeviation="15" floodColor="#1e1b4b" floodOpacity="0.2" />
            </filter>
          </defs>
          <path
            d="M -100 -50 C 400 100, -200 650, 400 800 S 1100 350, 1800 950"
            fill="none"
            stroke="#1e1b4b"
            strokeWidth="110"
            strokeLinecap="round"
            opacity="0.1"
            className="blur-xl"
          />
          <path
            d="M -100 -50 C 400 100, -200 650, 400 800 S 1100 350, 1800 950"
            fill="none"
            stroke="url(#tubeGradient)"
            strokeWidth="88"
            strokeLinecap="round"
            filter="url(#tubeShadow)"
          />
          <path
            d="M -100 -50 C 400 100, -200 650, 400 800 S 1100 350, 1800 950"
            fill="none"
            stroke="url(#tubeHighlight)"
            strokeWidth="25"
            strokeLinecap="round"
            className="translate-y-[-8px] translate-x-[-4px]"
          />
        </svg>
      </div>

      {/* Cyber Data Streams & Constellations (Layered behind Cylinders & Astrolabes) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-15">
        {/* Cyber Data Streams (Diagonals) */}
        <div className="absolute inset-0 opacity-15 select-none pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Diagonal stream line 1 */}
            <path 
              d="M -100 150 L 900 1150" 
              stroke="url(#streamGrad1)" 
              strokeWidth="1.5" 
              strokeDasharray="80 300"
              className="animate-dash-pulse"
            />
            
            {/* Diagonal stream line 2 */}
            <path 
              d="M 1200 -100 L 2200 900" 
              stroke="url(#streamGrad1)" 
              strokeWidth="1.2" 
              strokeDasharray="120 400"
              className="animate-dash-pulse"
              style={{ animationDelay: "3.5s", animationDuration: "11s" }}
            />

            {/* Diagonal stream line 3 */}
            <path 
              d="M 1800 100 L 700 1200" 
              stroke="url(#streamGrad1)" 
              strokeWidth="1" 
              strokeDasharray="60 280"
              className="animate-dash-pulse"
              style={{ animationDelay: "1.8s", animationDuration: "7.5s" }}
            />
          </svg>
        </div>

        {/* Constellation Grid Network (Top Left) */}
        <div className="absolute top-[6%] left-[4%] w-60 h-60 opacity-12 select-none pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 10 L 40 25 L 75 15 M 40 25 L 30 70 L 80 85 M 75 15 L 80 85" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2 4" />
            <circle cx="10" cy="10" r="2" fill="#22d3ee" />
            <circle cx="40" cy="25" r="2.5" fill="#3b82f6" />
            <circle cx="75" cy="15" r="2" fill="#22d3ee" />
            <circle cx="30" cy="70" r="1.5" fill="#3b82f6" />
            <circle cx="80" cy="85" r="2.5" fill="#6366f1" />
          </svg>
        </div>

        {/* Constellation Grid Network (Bottom Right Center) */}
        <div className="absolute bottom-[18%] left-[38%] w-80 h-56 opacity-12 select-none pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 15 80 L 45 40 L 95 65 L 135 20 M 45 40 L 90 15 L 135 20" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="15" cy="80" r="2.5" fill="#6366f1" />
            <circle cx="45" cy="40" r="2" fill="#22d3ee" />
            <circle cx="95" cy="65" r="3" fill="#3b82f6" />
            <circle cx="135" cy="20" r="2" fill="#22d3ee" />
            <circle cx="90" cy="15" r="1.5" fill="#3b82f6" />
          </svg>
        </div>
      </div>

      {/* Floating 3D Cylinders & Astrolabes in background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Floating Cylinder (Bottom-Left) */}
        <div 
          className="absolute bottom-[2%] left-[-5%] w-60 h-60 select-none animate-float-3d"
          style={{ perspective: "1000px" }}
        >
          <div 
            className="w-full h-full rounded-full bg-white/95"
            style={{
              transform: "rotateX(60deg) rotateY(-12deg) rotateZ(12deg)",
              boxShadow: `
                0 1px 0 0 #0284c7, 0 2px 0 0 #0284c7, 0 3px 0 0 #0284c7, 0 4px 0 0 #0284c7, 
                0 5px 0 0 #0284c7, 0 6px 0 0 #0284c7, 0 7px 0 0 #0284c7, 0 8px 0 0 #0284c7, 
                0 9px 0 0 #0284c7, 0 10px 0 0 #0284c7, 0 11px 0 0 #0284c7, 0 12px 0 0 #0284c7, 
                0 13px 0 0 #0284c7, 0 14px 0 0 #0284c7, 0 15px 0 0 #0284c7, 0 16px 0 0 #0284c7, 
                0 25px 35px 0 rgba(30, 27, 75, 0.3)
              `,
              border: "1px solid rgba(255, 255, 255, 0.8)",
            }}
          />
        </div>

        {/* Orbiting Astrolabe (Top-Left Center) */}
        <div className="absolute top-[8%] left-[20%] w-56 h-56 select-none animate-pulse-slow opacity-30 mix-blend-screen pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <radialGradient id="astrolabeCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Central Core */}
            <circle cx="100" cy="100" r="20" fill="url(#astrolabeCore)" />
            
            {/* Inner Technical Ring */}
            <circle 
              cx="100" 
              cy="100" 
              r="14" 
              stroke="#22d3ee" 
              strokeWidth="1" 
              strokeDasharray="3 4" 
              className="animate-spin-clockwise opacity-60" 
              style={{ transformOrigin: "100px 100px", animationDuration: "12s" }} 
            />
            
            {/* Middle Orbit Ring */}
            <g className="animate-spin-clockwise" style={{ transformOrigin: "100px 100px", animationDuration: "25s" }}>
              <ellipse cx="100" cy="100" rx="45" ry="20" stroke="url(#ringGrad1)" strokeWidth="1.5" />
              <circle cx="145" cy="100" r="3" fill="#22d3ee" className="shadow-[0_0_8px_#22d3ee]" />
            </g>

            {/* Outer Orbit Ring */}
            <g className="animate-spin-counter" style={{ transformOrigin: "100px 100px", animationDuration: "35s" }}>
              <ellipse cx="100" cy="100" rx="72" ry="32" stroke="url(#ringGrad2)" strokeWidth="1.2" strokeDasharray="8 6" />
              <circle cx="28" cy="100" r="4" fill="#e0f2fe" stroke="#3b82f6" strokeWidth="1.5" />
            </g>

            {/* Boundary Measurement Ticks */}
            <circle 
              cx="100" 
              cy="100" 
              r="88" 
              stroke="#3b82f6" 
              strokeWidth="0.75" 
              strokeDasharray="2 12" 
              className="opacity-40 animate-spin-clockwise" 
              style={{ transformOrigin: "100px 100px", animationDuration: "60s" }} 
            />
            <circle cx="100" cy="100" r="92" stroke="#3b82f6" strokeWidth="0.5" className="opacity-20" />
          </svg>
        </div>

        {/* Orbiting Astrolabe (Bottom-Right, behind experience card) */}
        <div className="absolute bottom-[6%] right-[14%] w-48 h-48 select-none animate-pulse-medium opacity-20 mix-blend-screen pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <radialGradient id="astrolabeCore2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#a855f7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="ringGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Core */}
            <circle cx="100" cy="100" r="15" fill="url(#astrolabeCore2)" />

            {/* Target Crosshairs */}
            <line x1="100" y1="40" x2="100" y2="160" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="3 6" className="opacity-40" />
            <line x1="40" y1="100" x2="160" y2="100" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="3 6" className="opacity-40" />

            {/* Inner Ring */}
            <g className="animate-spin-counter" style={{ transformOrigin: "100px 100px", animationDuration: "18s" }}>
              <ellipse cx="100" cy="100" rx="55" ry="24" stroke="url(#ringGrad3)" strokeWidth="1.2" strokeDasharray="4 4" />
              <circle cx="45" cy="100" r="3" fill="#818cf8" />
            </g>

            {/* Outer Ring */}
            <g className="animate-spin-clockwise" style={{ transformOrigin: "100px 100px", animationDuration: "30s" }}>
              <ellipse cx="100" cy="100" rx="80" ry="36" stroke="#22d3ee" strokeWidth="0.8" className="opacity-45" />
              <circle cx="100" cy="64" r="2.5" fill="#22d3ee" />
            </g>
          </svg>
        </div>

        {/* Floating Cylinder (Top-Right) */}
        <div 
          className="absolute top-[25%] right-[-6%] w-64 h-64 select-none animate-float-3d-delayed"
          style={{ perspective: "1000px" }}
        >
          <div 
            className="w-full h-full rounded-full bg-white/90"
            style={{
              transform: "rotateX(60deg) rotateY(12deg) rotateZ(-12deg)",
              boxShadow: `
                0 1px 0 0 #3b82f6, 0 2px 0 0 #3b82f6, 0 3px 0 0 #3b82f6, 0 4px 0 0 #3b82f6, 
                0 5px 0 0 #3b82f6, 0 6px 0 0 #3b82f6, 0 7px 0 0 #3b82f6, 0 8px 0 0 #3b82f6, 
                0 9px 0 0 #3b82f6, 0 10px 0 0 #3b82f6, 0 11px 0 0 #3b82f6, 0 12px 0 0 #3b82f6, 
                0 13px 0 0 #3b82f6, 0 14px 0 0 #3b82f6, 0 15px 0 0 #3b82f6, 0 16px 0 0 #3b82f6, 
                0 30px 45px 0 rgba(30, 27, 75, 0.3)
              `,
              border: "1px solid rgba(255, 255, 255, 0.7)",
            }}
          />
        </div>

        {/* Scattered Ambient Telemetry Stars (Floating Nodes) */}
        <div className="absolute top-[18%] left-[8%] w-2 h-2 rounded-full bg-cyan-400 opacity-40 shadow-[0_0_8px_4px_rgba(34,211,238,0.2)] animate-pulse-slow pointer-events-none" />
        <div className="absolute top-[45%] left-[45%] w-1.5 h-1.5 rounded-full bg-blue-400 opacity-30 shadow-[0_0_6px_3px_rgba(59,130,246,0.15)] animate-pulse-medium pointer-events-none" />
        <div className="absolute bottom-[30%] left-[18%] w-2 h-2 rounded-full bg-indigo-400 opacity-45 shadow-[0_0_8px_4px_rgba(99,102,241,0.25)] animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[15%] right-[22%] w-1.5 h-1.5 rounded-full bg-purple-400 opacity-35 shadow-[0_0_6px_3px_rgba(168,85,247,0.2)] animate-pulse-medium pointer-events-none" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[25%] right-[35%] w-2.5 h-2.5 rounded-full bg-cyan-400 opacity-40 shadow-[0_0_10px_5px_rgba(34,211,238,0.25)] animate-pulse-slow pointer-events-none" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Centered container with optimized padding and dimensions */}
      <div className="w-full h-full max-w-[1600px] max-h-[960px] p-4 md:p-6 lg:p-8 relative z-10 flex items-center justify-center">
        
        {/* Desktop 12x5 Bento Grid (Visible on >= 1024px screen widths) */}
        <div className="hidden lg:block w-full h-full min-h-0">
          <main
            className="w-full h-full min-h-0"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "2.5fr 0.5fr 0.8fr 0.4fr 2.2fr",
              gap: "20px",
            }}
          >
            {/* Row 1–2 | Col 1–4: Profile */}
            <ProfileCard />

            {/* Row 1 | Col 5–9: Highlight/Latest Project Showcase */}
            <HighlightProjectCard project={PROJECTS[0]} onClick={() => openProject(PROJECTS[0])} />

            {/* Row 1–2 | Col 10–12: Extra Container */}
            <ExtraCard />

            {/* Row 2 | Col 5–9: Education */}
            <EducationCard onClick={() => openDetails(EDUCATION_DATA)} />

            {/* Row 3 | Col 1–9: Tech Stacks */}
            <TechStacksCard onViewAll={() => openDetails(SKILLS_DATA)} />

            {/* Row 3–5 | Col 10–12: Contact */}
            <ContactCard />

            {/* Row 4 | Col 1–5: Featured Projects Header */}
            <FeaturedProjectsCard onClick={() => setIsAllProjectsOpen(true)} />

            {/* Row 4–5 | Col 6–9: Experience */}
            <ExperienceCard onClick={() => openDetails(EXPERIENCE_DATA)} />

            {/* Row 5 | Col 1–3: FinCore V3 */}
            <ProjectCard
              project={PROJECTS[1]}
              gridCol="1 / 4"
              gridRow="5 / 6"
              onClick={openProject}
            />

            {/* Row 5 | Col 3–6: DataSense */}
            <ProjectCard
              project={PROJECTS[2]}
              gridCol="3 / 6"
              gridRow="5 / 6"
              onClick={openProject}
            />
          </main>
        </div>

        {/* Mobile/Tablet Vertically Flowing Scroll Deck (Visible on < 1024px screens) */}
        <div className="block lg:hidden w-full h-full overflow-y-auto scrollbar-none px-2 relative z-10">
          <MobileLayout
            openProject={openProject}
            openDetails={openDetails}
            onViewAllProjects={() => setIsAllProjectsOpen(true)}
          />
        </div>

      </div>

      {/* Modals */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        project={selectedProject}
      />
      <DetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        data={selectedDetails}
      />
      <AllProjectsModal
        isOpen={isAllProjectsOpen}
        onClose={() => setIsAllProjectsOpen(false)}
        projects={PROJECTS}
        onProjectSelect={openProject}
      />
    </div>
  );
}
