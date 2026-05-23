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
            <div className="relative">
              <div className="w-40 h-40 rounded-2xl overflow-hidden p-0.5 shrink-0 shadow-sm">
                <img
                  src="/avatar.jpg"
                  alt="Mark Louie O. Balaba"
                  className="w-full h-full object-cover rounded-[14px] transition-all duration-500 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1 pt-4">
              <div>
                <h1 className="text-[28px] font-bold leading-tight text-slate-800 tracking-tight">
                  Mark Louie <span className="accent">Balaba</span>
                </h1>
                <p className="text-xs text-center uppercase tracking-[0.15em] text-slate-500 mt-1 font-bold">
                  Full-Stack Developer
                </p>
              </div>

              {/* Action and Availability */}
              <div className="flex flex-col justify-center items-center gap-2 mt-1 w-full max-w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50/50 dark:bg-white/5 border border-slate-150/50 dark:border-white/5 text-[9px] uppercase tracking-wider text-slate-500 font-bold justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/30" />
                  <span>Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}

          <p className="text-xs text-slate-600 leading-[1.7] max-w-full text-justify font-medium">
            Full-stack developer specializing in backend architecture, scalable systems, and efficient application design. 
            Focused on building high-performance solutions through clean engineering practices, thoughtful decision-making, 
            and AI-enhanced workflows.          
          </p>
  
        </div>

        {/* Bottom: location */}
        <div className="flex items-center justify-between gap-2 text-slate-500 text-xs font-semibold mt-4">
          <div className="flex gap-2">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Manila, Philippines</span>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("CV download triggered!");
            }}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold text-[11px] shadow-md shadow-cyan-500/10 transition-all duration-300 cursor-pointer group"
          >
            <Download className="w-3.5 h-3.5 text-white" />
            <span>Download CV</span>
          </a>
        </div>

      </div>
    </section>
  );
}
