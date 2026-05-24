import { FolderOpen, ArrowRight } from "lucide-react";

export function FeaturedProjectsCard() {
  return (
    <div
      className="card  group cursor-pointer"
      style={{ gridColumn: "1 / 6", gridRow: "4 / 5" }}
    >
      <div className="inner-card flex items-center justify-between px-6 py-4.5 h-full">
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-2xl flex items-center justify-center shadow-md shrink-0"
            style={{
              background: "var(--accent-gradient)",
              boxShadow: "0 4px 12px rgba(34, 211, 238, 0.2)",
            }}
          >
            <FolderOpen className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-sm font-bold text-(--text-primary) tracking-tight">Featured Projects</h2>
        </div>
        <div className="flex items-center gap-1 text-(--text-muted) group-hover:text-blue-400 transition-colors duration-200 font-bold text-[11px]">
          <span>View all</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
        </div>
      </div>
    </div>
  );
}

