"use client";

import React, { useState } from "react";
import { ProjectCardData } from "@/components/bento/ProjectCard";
import { DetailsData } from "@/components/DetailsModal";

// Modals
import ProjectModal from "@/components/ProjectModal";
import DetailsModal from "@/components/DetailsModal";

// Data
import { PROJECTS, EXPERIENCE_DATA, EDUCATION_DATA, SKILLS_DATA } from "@/data/portfolioData";


// Bento Cards
import { ProfileCard } from "@/components/bento/ProfileCard";
import { AnalyticsCard } from "@/components/bento/AnalyticsCard";
import { ExtraCard } from "@/components/bento/ExtraCard";
import { EducationCard } from "@/components/bento/EducationCard";
import { TechStacksCard } from "@/components/bento/TechStacksCard";
import { ContactCard } from "@/components/bento/ContactCard";
import { FeaturedProjectsCard } from "@/components/bento/FeaturedProjectsCard";
import { ExperienceCard } from "@/components/bento/ExperienceCard";
import { ProjectCard } from "@/components/bento/ProjectCard";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null);
  const [selectedDetails, setSelectedDetails] = useState<DetailsData | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const openProject = (p: ProjectCardData) => {
    setSelectedProject(p);
    setIsProjectModalOpen(true);
  };

  const openDetails = (data: DetailsData) => {
    setSelectedDetails(data);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="h-[100dvh] w-screen overflow-hidden flex items-center justify-center">
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

      {/* Floating 3D Cylinders in background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
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
      </div>

      {/* Centered container with optimized padding and dimensions */}
      <div className="w-full h-full max-w-[1600px] max-h-[960px] p-4 md:p-6 lg:p-8 relative z-10">
        <main
          className="w-full h-full min-h-0"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "2.3fr 0.7fr 0.8fr 0.4fr 2.2fr",
            gap: "20px",
          }}
        >
          {/* Row 1–2 | Col 1–4: Profile */}
          <ProfileCard />

          {/* Row 1 | Col 5–9: Analytics Case Study */}
          <AnalyticsCard onClick={() => openProject(PROJECTS[0])} />

          {/* Row 1–2 | Col 10–12: Extra Container */}
          <ExtraCard />

          {/* Row 2 | Col 5–9: Education */}
          <EducationCard onClick={() => openDetails(EDUCATION_DATA)} />

          {/* Row 3 | Col 1–9: Tech Stacks */}
          <TechStacksCard onViewAll={() => openDetails(SKILLS_DATA)} />


          {/* Row 3–5 | Col 10–12: Contact */}
          <ContactCard />

          {/* Row 4 | Col 1–5: Featured Projects Header */}
          <FeaturedProjectsCard />

          {/* Row 4–5 | Col 6–9: Experience */}
          <ExperienceCard onClick={() => openDetails(EXPERIENCE_DATA)} />

          {/* Row 5 | Col 1–3: FinCore V3 */}
          <ProjectCard
            project={PROJECTS[0]}
            gridCol="1 / 4"
            gridRow="5 / 6"
            onClick={openProject}
          />

          {/* Row 5 | Col 3–6: DataSense */}
          <ProjectCard
            project={PROJECTS[1]}
            gridCol="3 / 6"
            gridRow="5 / 6"
            onClick={openProject}
          />
        </main>
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
    </div>
  );
}
