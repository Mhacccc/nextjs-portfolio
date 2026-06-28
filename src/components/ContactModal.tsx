"use client";

import React, { useState, useEffect, useRef } from "react";
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

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Handle open/close animations
  useEffect(() => {
    if (isOpen) {
      setIsAnimatingOut(false);
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsAnimatingOut(false);
      }, 220);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Lock scroll + focus first input
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 80);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // ESC key close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && status !== "sending") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose, status]);

  if (!isVisible && !isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "26b6b315-5592-426c-8023-2ad9459882f2",
          name: name,
          email: email,
          message: message,
          subject: `New Portfolio Message from ${name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Web3Forms transmission error:", error);
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    onClose();
  };

  const inputClass = `
    w-full px-4 py-3.5 rounded-xl text-sm text-(--text-primary)
    placeholder-(--text-muted) bg-white/5 border border-white/10
    focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50
    focus:bg-white/8 transition-all duration-200 disabled:opacity-50
  `.trim();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-950/65 backdrop-blur-md transition-opacity duration-300 ${
          isAnimatingOut ? "opacity-0" : "opacity-100"
        }`}
        onClick={status === "sending" ? undefined : onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className={`relative w-full max-w-md rounded-4xl border p-7 sm:p-8 ${
          isAnimatingOut ? "modal-exit" : "modal-enter"
        }`}
        style={{
          background: "rgba(10, 13, 22, 0.975)",
          borderColor: "rgba(255,255,255,0.10)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset",
          color: "var(--text-primary)",
        }}
      >
        {/* Close Button */}
        {status !== "sending" && (
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/6 border border-white/10 text-(--text-muted) hover:text-(--text-primary) hover:bg-white/12 transition-all duration-200 cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label="Close contact form"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        )}

        {/* Success State */}
        {status === "success" ? (
          <div className="py-6 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center scale-pop"
              style={{
                background: "rgba(16,185,129,0.12)",
                border: "1.5px solid rgba(16,185,129,0.25)",
              }}
            >
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-(--text-primary)">Message Transmitted</h3>
              <p className="text-sm text-(--text-muted) max-w-[280px] leading-relaxed">
                Thank you for reaching out! Mark will respond within 24 hours.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="mt-2 px-7 py-3 rounded-xl font-bold text-sm text-white border border-white/15 transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              style={{
                background: "var(--accent-gradient)",
                boxShadow: "0 4px 14px rgba(34, 211, 238, 0.25)",
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(99,102,241,0.12)",
                  border: "1.5px solid rgba(99,102,241,0.25)",
                }}
              >
                <Mail className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-(--text-primary)">Direct Transmission</h3>
                <p className="text-xs text-(--text-muted)">Collaborations, roles, or inquiries</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[10px] uppercase tracking-widest text-(--text-muted) mb-2 font-semibold"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  ref={firstInputRef}
                  type="text"
                  required
                  disabled={status === "sending"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jean Doe"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[10px] uppercase tracking-widest text-(--text-muted) mb-2 font-semibold"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  disabled={status === "sending"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. jean@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[10px] uppercase tracking-widest text-(--text-muted) mb-2 font-semibold"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  disabled={status === "sending"}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Send message..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-rose-500 font-semibold text-center mt-1">
                  Failed to send message. Please try again or email directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending" || !name || !email || !message}
                className="w-full py-3.5 mt-1 rounded-xl font-bold text-sm text-white border border-white/15 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                style={{
                  background: "var(--accent-gradient)",
                  boxShadow: status === "sending" ? "none" : "0 6px 20px rgba(34, 211, 238, 0.2)",
                }}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
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
