"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onReplayIntro?: () => void;
}

export default function Navbar({ onReplayIntro }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a090c]/85 backdrop-blur-xl border-b border-[#721c24]/40 py-3.5 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#721c24] via-[#881337] to-[#fef08a] flex items-center justify-center font-black text-white text-base shadow-[0_0_15px_rgba(114,28,36,0.5)] group-hover:scale-105 transition-transform border border-[#fef08a]/30">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white group-hover:text-[#fef08a] transition-colors">
              Ananya Bansal
            </span>
            <span className="text-[10px] text-zinc-400 font-mono">
              Full-Stack Developer • 9.0 CGPA
            </span>
          </div>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#1c080d]/80 border border-[#721c24]/40 backdrop-blur-md">
          <a
            href="#projects"
            className="px-3.5 py-1 text-xs font-medium text-zinc-300 hover:text-[#fef08a] hover:bg-white/[0.04] rounded-full transition-all"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="px-3.5 py-1 text-xs font-medium text-zinc-300 hover:text-[#fef08a] hover:bg-white/[0.04] rounded-full transition-all"
          >
            Skills
          </a>
          <a
            href="#education"
            className="px-3.5 py-1 text-xs font-medium text-zinc-300 hover:text-[#fef08a] hover:bg-white/[0.04] rounded-full transition-all"
          >
            Education
          </a>
          <a
            href="#contact"
            className="px-3.5 py-1 text-xs font-medium text-zinc-300 hover:text-[#fef08a] hover:bg-white/[0.04] rounded-full transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Right Action / Status Badge */}
        <div className="flex items-center gap-2.5">
          {onReplayIntro && (
            <button
              type="button"
              onClick={onReplayIntro}
              title="Replay Welcome Intro"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#fef08a] hover:text-[#fde047] transition-all cursor-pointer"
              aria-label="Replay intro animation"
            >
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          )}

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open to Work</span>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#fef08a] via-[#fde047] to-[#eab308] text-zinc-950 shadow-[0_0_20px_rgba(254,240,138,0.25)] hover:shadow-[0_0_25px_rgba(254,240,138,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
