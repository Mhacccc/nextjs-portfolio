import { MapPin, Download } from "lucide-react";

export function ProfileCard() {
  return (
    <section
      className="card p-2 relative"
      style={{ gridColumn: "1 / 5", gridRow: "1 / 3" }}
    >
      <div className="inner-card p-6 sm:p-7 flex flex-col justify-between h-full">
        {/* Top: avatar + name + status */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-6">
            {/* Avatar with hover effect */}
            <div className="relative shrink-0">
              <div className="w-40 h-40 rounded-2xl overflow-hidden p-0.5 shadow-sm">
                <img
                  src="/avatar.jpg"
                  alt="Mark Louie O. Balaba"
                  className="w-full h-full object-cover rounded-[14px] transition-all duration-500 cursor-pointer grayscale-[0.12] hover:grayscale-0 hover:scale-[1.03]"
                />
              </div>
              {/* Subtle glow behind avatar */}
              <div
                className="absolute -inset-1 rounded-2xl -z-10 opacity-30 blur-lg"
                style={{ background: "var(--accent-gradient)" }}
              />
            </div>

            <div className="flex flex-col gap-3 flex-1 pt-4">
              <div>
                <h1 className="text-[28px] font-bold leading-tight text-(--text-primary) tracking-tight">
                  Mark Louie <span className="accent">Balaba</span>
                </h1>
                <p
                  className="text-[10px] uppercase tracking-[0.18em] text-(--text-muted) mt-1.5 font-bold"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Full-Stack Developer
                </p>
              </div>

              {/* Availability beacon */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[9px] uppercase tracking-wider text-(--text-muted) font-bold w-fit">
                {/* Beacon: pulsing ring + solid dot */}
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                </span>
                <span>Available</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-xs text-(--text-secondary) leading-[1.75] max-w-full text-justify font-medium">
            Full-stack developer specializing in backend architecture, scalable systems, and efficient
            application design. Focused on building high-performance solutions through clean engineering
            practices, thoughtful decision-making, and AI-enhanced workflows.
          </p>
        </div>

        {/* Bottom: location + download CV */}
        <div className="flex items-center justify-between gap-2 text-(--text-muted) text-xs font-semibold mt-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-(--accent-cyan)" />
            <span>Manila, Philippines</span>
          </div>
          <a
            href="https://drive.google.com/file/d/1crovfIMMfwLwo94XVx7mLjccOJZ_EZI5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-white font-bold text-[11px] shadow-md transition-all duration-250 cursor-pointer group hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            style={{
              background: "var(--accent-gradient)",
              boxShadow: "0 4px 14px rgba(34, 211, 238, 0.2)",
            }}
          >
            <Download className="w-3.5 h-3.5 text-white" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
