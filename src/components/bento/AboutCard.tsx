import React from "react";
import { User } from "lucide-react";

interface AboutCardProps {
  onClick: () => void;
}

export function AboutCard({ onClick }: AboutCardProps) {
  return (
    <article 
      onClick={onClick}
      className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 lg:row-span-2 glass-card rounded-[2.5rem] p-6 lg:p-8 flex flex-col justify-between group cursor-pointer"
    >
      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
        <User className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-purple-400 mb-1 font-semibold">Background</p>
        <h3 className="text-xl lg:text-2xl font-medium text-white transition-colors group-hover:text-purple-300">About Me</h3>
        <p className="text-sm text-slate-400 font-light mt-2 line-clamp-2">Passionate software engineer and UI/UX designer bridging the gap between engineering and design.</p>
      </div>
    </article>
  );
}
