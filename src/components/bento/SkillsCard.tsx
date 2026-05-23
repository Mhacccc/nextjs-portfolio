
export function SkillsCard() {
  const skills = ["React.js", "Node.js", "TypeScript", "GraphQL", "Three.js"];
  const colorClasses = [
    "hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400",
    "hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400",
    "hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400",
    "hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-400",
    "hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-400"
  ];

  return (
    <section className="col-span-1 md:col-span-6 lg:col-span-6 row-span-1 glass-card rounded-[2.5rem] p-5 lg:p-6 flex items-center">
      <div className="flex flex-wrap gap-2 lg:gap-3">
        {skills.map((skill, index) => (
          <div 
            key={skill}
            className={`px-4 py-2 lg:px-5 lg:py-2.5 rounded-full bg-white/5 border border-white/10 text-xs lg:text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 cursor-default ${colorClasses[index % colorClasses.length]}`}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
