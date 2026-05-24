"use client";

import { ArrowUpRight } from "lucide-react";

interface AnalyticsCardProps {
  onClick?: () => void;
}

export function AnalyticsCard({ onClick }: AnalyticsCardProps) {
  return (
    <article
      className="card card-clickable p-2 relative flex flex-col"
      style={{ gridColumn: "5 / 10", gridRow: "1 / 2" }}
      onClick={onClick}
    >
      <div className="inner-card p-6 sm:p-7 flex flex-col justify-between h-full overflow-hidden relative">
        {/* Decorative concentric rings — purposeful, not spam */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none z-0">
          <div className="w-28 h-28 rounded-full border border-blue-500/15 flex items-center justify-center animate-pulse-ring">
            <div className="w-18 h-18 rounded-full border border-cyan-400/20 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border border-blue-400/25 flex items-center justify-center">
                {/* Ping only for loading indicator context — valid per ux-guidelines */}
                <div className="w-3 h-3 rounded-full bg-blue-500/60 animate-ping" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="text-xl font-bold text-(--text-primary) mb-2 tracking-tight">
            Real-time Analytics
          </h2>
          <p className="text-[11px] text-(--text-muted) leading-relaxed max-w-[280px] font-medium">
            Case study: High-frequency data visualization engine powering 2M+ data points/sec
          </p>
        </div>

        <div className="relative z-10">
          <button
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-xs border border-white/15 transition-all duration-200 group cursor-pointer hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            style={{
              background: "var(--accent-gradient)",
              boxShadow: "0 4px 14px rgba(34, 211, 238, 0.2)",
            }}
            tabIndex={-1} /* parent article is the interactive element */
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
