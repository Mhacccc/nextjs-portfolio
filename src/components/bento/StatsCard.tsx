import { Users } from "lucide-react";

export function StatsCard() {
  return (
    <article className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 glass-card rounded-[2.5rem] p-5 lg:p-6 flex items-center justify-between group cursor-default">
      <div>
        <h3 className="text-2xl lg:text-3xl font-medium text-white transition-colors group-hover:text-blue-300">50+</h3>
        <p className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-slate-400 mt-1 font-semibold">Global Clients</p>
      </div>
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-105 shrink-0">
        <Users className="w-4 h-4 lg:w-5 lg:h-5 text-slate-300 transition-transform group-hover:text-white" />
      </div>
    </article>
  );
}
