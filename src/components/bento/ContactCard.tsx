import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaPhone } from "react-icons/fa";

interface ContactCardProps {
  onEmailClick: () => void;
}

export function ContactCard({ onEmailClick }: ContactCardProps) {
  return (
    <section
      className="card p-2"
      style={{ gridColumn: "10 / 13", gridRow: "3 / 6" }}
    >
      <div className="inner-card p-6 flex flex-col gap-8 h-full relative overflow-hidden">
        {/* Decorative subtle background gradient leak */}
        <div className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full bg-blue-500/5 blur-2xl pointer-events-none" />

        <div>
          <h2 className="text-[20px] font-bold text-(--text-primary) leading-snug tracking-tight mb-3">
            Let&apos;s build<br />
            <span className="accent">something together.</span>
          </h2>
          <p className="text-[12px] text-(--text-muted) leading-relaxed font-medium">
            Currently open to full-time opportunities, internships, and entry-level developer roles.
          </p>
        </div>

        <div className="flex flex-col gap-2 relative z-10">
          <a
            href="https://github.com/Mhacccc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/6 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-200 group cursor-pointer"
          >
            <FaGithub className="w-3.5 h-3.5 text-(--text-muted) group-hover:text-blue-400 transition-colors" />
            <span className="text-[12px] text-(--text-secondary) group-hover:text-(--text-primary) transition-colors flex-1 font-medium truncate">github.com/Mhacccc</span>
            <ArrowUpRight className="w-3 h-3 text-(--text-muted) opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/mark-louie-balaba-a89bab410/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/6 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-200 group cursor-pointer"
          >
            <FaLinkedin className="w-3.5 h-3.5 text-(--text-muted) group-hover:text-blue-400 transition-colors" />
            <span className="text-[12px] text-(--text-secondary) group-hover:text-(--text-primary) transition-colors flex-1 font-medium truncate">Mark Louie Balaba</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-(--text-muted) opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="https://www.facebook.com/Mhaccccyaps/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/6 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-200 group cursor-pointer"
          >
            <FaFacebook className="w-3.5 h-3.5 text-(--text-muted) group-hover:text-blue-400 transition-colors" />
            <span className="text-[12px] text-(--text-secondary) group-hover:text-(--text-primary) transition-colors flex-1 font-medium truncate">facebook.com/Mhaccccyaps</span>
            <ArrowUpRight className="w-3 h-3 text-(--text-muted) opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="tel:+639603898078"
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/6 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-200 group cursor-pointer"
          >
            <FaPhone className="w-3.5 h-3.5 text-(--text-muted) group-hover:text-blue-400 transition-colors" />
            <span className="text-[12px] text-(--text-secondary) group-hover:text-(--text-primary) transition-colors flex-1 font-medium truncate">+63 960 389 8078</span>
            <ArrowUpRight className="w-3 h-3 text-(--text-muted) opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <button
            onClick={onEmailClick}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-white border border-white/15 transition-all duration-200 group mt-1 cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-full"
            style={{
              background: "var(--accent-gradient)",
              boxShadow: "0 4px 16px rgba(34, 211, 238, 0.2)",
            }}
          >
            <Mail className="w-3.5 h-3.5 text-white" />
            <span className="text-[12px] text-white font-bold">Send an Email</span>
          </button>
        </div>
      </div>
    </section>
  );
}
