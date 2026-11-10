"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Code2, Globe, Database } from "lucide-react";
import { SKILL_BLOCKS } from "./data";

export default function SkillsSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return Code2;
      case "Frameworks & Web":
        return Globe;
      case "Databases & Systems":
        return Database;
      default:
        return Cpu;
    }
  };

  return (
    <section id="skills" className="relative py-28 scroll-mt-20 overflow-hidden">
      {/* Deep Red Wine & Burgundy Ambience Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#721c24]/30 via-[#4a0e17]/25 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[350px] bg-[#fef08a]/[0.03] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#721c24]/30 border border-[#721c24]/60 text-xs font-mono text-[#fef08a] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl font-light">
            Core programming languages, full-stack frameworks, database architectures, and systems engineering.
          </p>
        </div>

        {/* 3 Large Solid Bento Cards (NO repeating loop, distinct solid blocks) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_BLOCKS.map((block, idx) => {
            const Icon = getCategoryIcon(block.category);
            const isMiddle = idx === 1;

            return (
              <motion.div
                key={block.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-[#1c080d]/80 hover:bg-[#230b12]/90 border border-[#721c24]/50 hover:border-[#fef08a]/60 p-7 sm:p-8 shadow-xl backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Scrapbook Masking Tape Accent on Card Top */}
                <div
                  className={`absolute -top-3.5 ${
                    idx === 0
                      ? "left-8 rotate-1 bg-[#fef08a]/30 border-[#fef08a]/60"
                      : idx === 1
                      ? "left-1/2 -translate-x-1/2 -rotate-2 bg-[#721c24]/50 border-[#fef08a]/50"
                      : "right-8 rotate-2 bg-[#fef08a]/30 border-[#fef08a]/60"
                  } w-24 h-6 border-y border-dashed backdrop-blur-sm pointer-events-none z-20`}
                />

                {/* Subtle Card Ambient Spotlight */}
                <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#721c24]/20 blur-[60px] pointer-events-none group-hover:scale-125 transition-transform" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#fef08a] shadow-inner group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#fef08a] transition-colors">
                        {block.category}
                      </h3>
                      <span className="text-[11px] font-mono text-[#fde047]/80">
                        {block.skills.length} Core Competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                    {block.description}
                  </p>

                  {/* Solid Skill Items Grid */}
                  <div className="space-y-3">
                    {block.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/10 hover:border-[#fef08a]/40 transition-all flex items-center justify-between gap-3 shadow-md group/item"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-2 h-2 rounded-full bg-[#fef08a] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                          <span className="text-sm font-bold font-mono text-zinc-100 group-hover/item:text-[#fef08a] transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-400 group-hover/item:text-zinc-200 transition-colors text-right">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Tag */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Production Ready</span>
                  <span className="text-[#fef08a] font-semibold">
                    {isMiddle ? "Full-Stack Web" : idx === 0 ? "DSA & OOP" : "Data & Linux"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
