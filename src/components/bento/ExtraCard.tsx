import { Layers } from "lucide-react";

export function ExtraCard() {
  return (
    <article
      className="card p-2 relative"
      style={{ gridColumn: "10 / 13", gridRow: "1 / 3" }}
    >
      <div className="inner-card p-6 flex flex-col items-center justify-center text-center h-full relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.8) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 border border-blue-100 flex items-center justify-center shadow-inner">
            <Layers className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              Reserved Space
            </p>
            <p className="text-[10px] text-slate-400 mt-1 font-semibold">For future integrations</p>
          </div>
        </div>
      </div>
    </article>
  );
}
