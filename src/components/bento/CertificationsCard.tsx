import React from "react";
import { Award } from "lucide-react";

interface CertificationsCardProps {
  onClick: () => void;
}

export function CertificationsCard({ onClick }: CertificationsCardProps) {
  return (
    <article 
      onClick={onClick}
      className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 lg:row-span-2 glass-card rounded-[2.5rem] p-5 lg:p-6 flex flex-col items-start justify-between group cursor-pointer"
    >
      <div>
        <p className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-amber-400 mb-1 font-semibold">Achievements</p>
        <h3 className="text-lg lg:text-xl font-medium text-white transition-colors group-hover:text-amber-300">Certifications</h3>
      </div>
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-amber-500/20 group-hover:border-amber-500/20 transition-all duration-300 group-hover:scale-105 shrink-0">
        <Award className="w-4 h-4 lg:w-5 lg:h-5 text-amber-400 transition-transform group-hover:scale-110" />
      </div>
    </article>
  );
}
