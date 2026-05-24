import { Layers } from "lucide-react";

export function ExtraCard() {
  return (
    <article
      className="card p-2 relative"
      style={{ gridColumn: "10 / 13", gridRow: "1 / 3" }}
    >
      <div className="inner-card p-6 flex flex-col items-center justify-center text-center h-full relative overflow-hidden">
        {/* Subtle dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Gradient glow blob */}
        <div
          className="absolute w-24 h-24 rounded-full pointer-events-none opacity-20 blur-2xl"
          style={{ background: "var(--accent-gradient)" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-4">
          {/* Icon with animated shimmer border */}
          <div className="relative shimmer-border rounded-2xl">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              <Layers className="w-5 h-5 text-blue-400" />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-(--text-primary) leading-relaxed">
              Reserved Space
            </p>
            <p
              className="text-[10px] text-(--text-muted) mt-1 font-medium"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              For future integrations
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
