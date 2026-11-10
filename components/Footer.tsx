"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#721c24]/30 bg-[#0a090c] py-14 pb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
        {/* Brand & Info */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#fef08a]" />
            <span className="text-zinc-200 font-semibold tracking-tight">Ananya Bansal</span>
          </div>
          <span className="hidden sm:inline text-zinc-700">/</span>
          <span>B.E. Computer Science • Chitkara University (9.0 CGPA)</span>
        </div>

        {/* Back to top & Tech stack */}
        <div className="flex items-center gap-4">
          <span className="text-zinc-500">Scrapbook Editorial Portfolio</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
