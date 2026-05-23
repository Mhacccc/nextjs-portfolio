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
        {/* Decorative concentric circles */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none z-0">
          <div className="w-28 h-28 rounded-full border border-slate-200/40 flex items-center justify-center animate-pulse-ring">
            <div className="w-18 h-18 rounded-full border border-slate-200/50 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border border-slate-200/40 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 opacity-55 animate-ping" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="text-xl font-bold text-slate-800 mb-1.5 tracking-tight">Real-time Analytics</h2>
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-[280px] font-medium">
            Case study: High-frequency data visualization engine powering 2M+ data points/sec
          </p>
        </div>

        <div className="relative z-10">
          <button
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold text-xs shadow-md shadow-cyan-500/15 border border-white/20 transition-all duration-300 group cursor-pointer"
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
