import { FolderOpen, ArrowRight } from "lucide-react";

export function FeaturedProjectsCard() {
  return (
    <div
      className="card p-1.5 group"
      style={{ gridColumn: "1 / 6", gridRow: "4 / 5" }}
    >
      <div className="inner-card flex items-center justify-between px-6 py-4.5 h-full">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 border border-white/20 flex items-center justify-center shadow-md shadow-cyan-500/10 shrink-0">
            <FolderOpen className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-sm font-bold text-slate-800 tracking-tight">Featured Projects</h2>
        </div>
        <div className="flex items-center gap-1 text-slate-400 group-hover:text-blue-600 transition-colors duration-300 font-bold text-[11px]">
          <span>View all</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
}
