"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { TICKER_SKILLS } from "./data";

export default function Skills() {
  // Seamless loop without duplicate entries within a single sequence
  const tickerItems = [...TICKER_SKILLS, ...TICKER_SKILLS];

  return (
    <section id="skills" className="relative py-28 scroll-mt-20 overflow-hidden">
      {/* Background Wine Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#721c24]/30 via-[#4a0e17]/25 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-[#fef08a]/[0.03] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10 mb-14 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#721c24]/30 border border-[#721c24]/60 text-xs font-mono text-[#fef08a] mb-3">
          <Cpu className="w-3.5 h-3.5 text-[#fef08a]" />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Skills &amp; Technologies
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl font-light">
          Continuous moving ticker of core languages, full-stack frameworks, database architectures, and distributed systems.
        </p>
      </div>

      {/* Large Moving Infinite Ticker (~30% Increased Visual Scale) */}
      <div className="relative w-full overflow-hidden select-none py-6">
        {/* Soft edge blur masks for seamless ticker edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-56 bg-gradient-to-r from-[#0a090c] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-56 bg-gradient-to-l from-[#0a090c] to-transparent z-10 pointer-events-none" />

        <div className="flex">
          <motion.div
            animate={{ x: [0, -2200] }}
            transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
            className="flex gap-6 shrink-0 pr-6"
          >
            {tickerItems.map((skill, idx) => (
              <div
                key={`${skill.name}-${idx}`}
                className="group relative min-w-[220px] sm:min-w-[260px] h-[86px] sm:h-[94px] px-6 py-4 rounded-3xl bg-[#1c080e]/95 hover:bg-[#250b12] border border-[#721c24]/50 hover:border-[#fef08a]/80 shadow-[0_15px_35px_rgba(0,0,0,0.75)] hover:shadow-[0_20px_45px_rgba(254,240,138,0.25)] transition-all duration-300 backdrop-blur-2xl flex items-center gap-4 cursor-default hover:-translate-y-1.5"
              >
                {/* Official Brand Glow Icon / Monogram (~30% larger) */}
                <div
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-black font-mono text-base sm:text-lg shadow-lg shrink-0 border-2 transition-transform group-hover:scale-105"
                  style={{
                    backgroundColor: `${skill.color}18`,
                    borderColor: `${skill.color}55`,
                    color: skill.color,
                  }}
                >
                  {skill.name.slice(0, 2)}
                </div>

                <div className="flex flex-col text-left overflow-hidden">
                  <span className="text-base sm:text-lg font-black text-white group-hover:text-[#fef08a] transition-colors font-mono tracking-tight truncate">
                    {skill.name}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors truncate">
                    {skill.tag}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
