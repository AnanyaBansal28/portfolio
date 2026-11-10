"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Copy,
  Check,
  Sparkles,
  Clock,
  MapPin,
  GraduationCap,
  AlertCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import { GithubIcon, LinkedinIcon } from "./icons";
import { PERSONAL_INFO } from "./data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const personalEmail = PERSONAL_INFO.email;
  const academicEmail = PERSONAL_INFO.academicEmail || "ananya0259.becse24@chitkara.edu.in";

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handlePresetClick = (presetText: string) => {
    setSelectedTopic(presetText);
    setFormData((prev) => ({
      ...prev,
      message: presetText,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          topic: selectedTopic || undefined,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setSubmitted(true);

      // Trigger Vintage Butter Yellow & Wine Confetti Burst
      try {
        confetti({
          particleCount: 85,
          spread: 75,
          origin: { y: 0.65 },
          colors: ["#fef08a", "#fde047", "#721c24", "#881337", "#ffffff"],
        });
      } catch (err) {
        console.error("Confetti error", err);
      }

      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSelectedTopic("");
      }, 3500);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 scroll-mt-20 overflow-hidden">
      {/* Deep Red Wine & Burgundy Ambience Spotlights */}
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[400px] bg-gradient-to-tr from-[#721c24]/30 via-[#4a0e17]/25 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-[#fef08a]/[0.03] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#721c24]/30 border border-[#721c24]/60 text-xs font-mono text-[#fef08a] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let&apos;s Build Something Great
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl font-light">
            Open for software engineering internships, technical collaborations, and discussions around quick-commerce and consumer platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Contact Info & Channels (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 h-auto lg:h-full">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#1c080d]/80 hover:bg-[#230b12]/90 border border-[#721c24]/50 hover:border-[#fef08a]/60 backdrop-blur-2xl shadow-xl relative overflow-hidden transition-all duration-300 flex-1 flex flex-col justify-between">
              {/* Paper Tape */}
              <div className="absolute -top-3.5 left-8 w-24 h-5 bg-[#fef08a]/30 border-y border-dashed border-[#fef08a]/60 rotate-1 backdrop-blur-sm pointer-events-none" />

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Direct Channels
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mb-5 leading-relaxed font-light">
                  Feel free to send an email or reach out on GitHub and LinkedIn. I generally respond within 24 hours.
                </p>

                {/* Email Capsules */}
                <div className="space-y-3">
                  {/* Personal Email Pill */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-black/50 border border-white/10 hover:border-[#fef08a]/30 transition-all shadow-inner">
                    <div className="flex items-center justify-between mb-1.5 px-0.5">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#fef08a]/80 font-medium">
                        Personal
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">Primary</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#fef08a] shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-mono text-zinc-200 truncate select-all">
                          {personalEmail}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopyEmail(personalEmail)}
                        className="px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-zinc-300 hover:text-[#fef08a] flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                      >
                        {copiedEmail === personalEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#fef08a]" />
                            <span className="text-[#fef08a]">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Academic / Chitkara University Email Pill */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-black/50 border border-white/10 hover:border-[#fef08a]/30 transition-all shadow-inner">
                    <div className="flex items-center justify-between mb-1.5 px-0.5">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#fef08a]/80 font-medium">
                        Academic / Chitkara Uni
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">Institutional</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#fef08a] shrink-0">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-mono text-zinc-200 truncate select-all">
                          {academicEmail}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopyEmail(academicEmail)}
                        className="px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-zinc-300 hover:text-[#fef08a] flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                      >
                        {copiedEmail === academicEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#fef08a]" />
                            <span className="text-[#fef08a]">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="mt-5 space-y-2.5 pt-5 border-t border-white/5 text-xs text-zinc-400 font-light">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#fef08a] shrink-0" />
                  <span>Punjab / Patiala Region, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>IST (UTC +5:30) • Active Daily</span>
                </div>
              </div>
            </div>

            {/* Social Connect Cards */}
            <div className="grid grid-cols-2 gap-3 shrink-0">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-[#1c080d]/80 hover:bg-[#230b12]/90 border border-[#721c24]/40 hover:border-[#fef08a]/50 transition-all flex items-center gap-3 cursor-pointer shadow-md"
              >
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-105 transition-all">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#fef08a] transition-colors">
                    GitHub
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500">@AnanyaBansal28</div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-[#1c080d]/80 hover:bg-[#230b12]/90 border border-[#721c24]/40 hover:border-[#fef08a]/50 transition-all flex items-center gap-3 cursor-pointer shadow-md"
              >
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-zinc-300 group-hover:text-[#fef08a] group-hover:scale-105 transition-all">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#fef08a] transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500">/in/ananya-bansal</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Message Form (7 Columns) */}
          <div className="lg:col-span-7 h-full">
            <div className="h-full rounded-3xl bg-[#1c080d]/80 hover:bg-[#230b12]/90 border border-[#721c24]/50 hover:border-[#fef08a]/60 backdrop-blur-2xl p-7 sm:p-10 shadow-xl relative overflow-hidden transition-all duration-300">
              {/* Masking tape on top right */}
              <div className="absolute -top-3.5 right-8 w-28 h-5 bg-[#721c24]/50 border-y border-dashed border-[#fef08a]/50 rotate-1 backdrop-blur-sm pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-mono text-zinc-400">
                  Send a Direct Message
                </span>
                <span className="text-xs font-mono text-[#fef08a] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#fef08a] animate-pulse" />
                  <span>Inbox Active</span>
                </span>
              </div>

              {/* Topic chips */}
              <div className="mb-6">
                <span className="text-[11px] font-mono text-zinc-500 block mb-2">
                  Suggested topics:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Interested in an internship / role",
                    "Discuss PIKSY grocery optimizer",
                    "Engineering chat & coffee",
                  ].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handlePresetClick(preset)}
                      className={`px-3 py-1 rounded-full text-xs border transition-colors cursor-pointer ${
                        selectedTopic === preset
                          ? "bg-[#fef08a] text-zinc-950 border-[#fef08a] font-medium"
                          : "bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-zinc-300 hover:text-[#fef08a]"
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-black/50 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#fef08a]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-black/50 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#fef08a]/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Ananya, I came across your portfolio and wanted to discuss..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl bg-black/50 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#fef08a]/60 transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-2xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs font-mono flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-[#721c24]/40 border border-[#fef08a]/40 text-[#fef08a] text-xs font-mono flex items-center gap-2.5"
                  >
                    <Sparkles className="w-4 h-4 text-[#fef08a] shrink-0" />
                    <span>
                      Thank you! Your message has been sent. I&apos;ll be in touch soon.
                    </span>
                  </motion.div>
                ) : (
                  <div className="flex justify-start">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-3 flex items-center justify-center gap-2 rounded-full font-bold text-sm text-zinc-950 bg-gradient-to-r from-[#fef08a] via-[#fde047] to-[#eab308] shadow-[0_10px_25px_rgba(254,240,138,0.25)] hover:shadow-[0_15px_30px_rgba(254,240,138,0.35)] hover:scale-[1.01] transition-all cursor-pointer active:scale-[0.99] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
