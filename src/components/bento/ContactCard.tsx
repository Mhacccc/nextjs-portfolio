import { AtSign, Link2, Mail, ArrowUpRight } from "lucide-react";

export function ContactCard() {
  return (
    <section
      className="card p-2"
      style={{ gridColumn: "10 / 13", gridRow: "3 / 6" }}
    >
      <div className="inner-card p-6 flex flex-col justify-between h-full relative overflow-hidden">
        {/* Decorative subtle background gradient leak */}
        <div className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full bg-blue-500/5 blur-2xl pointer-events-none" />

        <div>
          <h2 className="text-[20px] font-bold text-slate-850 leading-snug tracking-tight mb-3">
            Let&apos;s build<br />
            <span className="accent">something together.</span>
          </h2>
          <p className="text-[12px] text-slate-500 leading-relaxed font-semibold">
            Currently open to architectural consultations and high-impact engineering roles.
          </p>
        </div>

        <div className="flex flex-col gap-2 relative z-10">
          <a
            href="https://twitter.com/marklouie_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-slate-150/70 hover:border-blue-400 hover:bg-slate-50/50 shadow-sm transition-all duration-300 group"
          >
            <AtSign className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            <span className="text-[12px] text-slate-600 group-hover:text-slate-900 transition-colors flex-1 font-semibold">@marklouie_dev</span>
            <ArrowUpRight className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://linkedin.com/in/marklouie"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-slate-150/70 hover:border-blue-400 hover:bg-slate-50/50 shadow-sm transition-all duration-300 group"
          >
            <Link2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            <span className="text-[12px] text-slate-600 group-hover:text-slate-900 transition-colors flex-1 font-semibold">linkedin.com/in/marklouie</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="mailto:mark@example.com"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white border border-white/20 shadow-md shadow-cyan-500/10 transition-all duration-300 group mt-1.5 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-white" />
            <span className="text-[12px] text-white font-bold">Send an Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
