"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Loader2, Mail } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("sending");

    // Simulate sending message API call
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  const handleReset = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300"
        onClick={status === "sending" ? undefined : onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-[2.5rem] bg-slate-900/60 border border-white/10 backdrop-blur-2xl shadow-2xl p-8 text-slate-200 animate-[fadeIn_0.3s_ease-out]">
        
        {/* Close Button */}
        {status !== "sending" && (
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {status === "success" ? (
          <div className="py-8 text-center flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
              <CheckCircle2 className="w-8 h-8 animate-[scaleIn_0.4s_cubic-bezier(0.16,1,0.3,1)]" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Message Transmitted</h3>
            <p className="text-slate-400 font-light max-w-sm">
              Thank you for reaching out! Alex will respond to your collaboration request within 24 hours.
            </p>
            <button 
              onClick={handleReset}
              className="mt-6 px-8 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">Direct Transmission</h3>
                <p className="text-xs text-slate-400">Collaborations, roles, or general inquires</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Name</label>
                <input 
                  id="name"
                  type="text" 
                  required
                  disabled={status === "sending"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jean Doe"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  required
                  disabled={status === "sending"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. jean@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  disabled={status === "sending"}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={status === "sending" || !name || !email || !message}
                className="w-full py-4 mt-2 rounded-xl bg-white text-black font-semibold text-sm hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-black" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
