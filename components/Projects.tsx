"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PROJECTS } from "./data";
import { Project } from "./types";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="relative py-28 scroll-mt-20 overflow-hidden">
      {/* Deep Red Wine & Burgundy Ambience Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[750px] h-[450px] bg-gradient-to-tr from-[#721c24]/35 via-[#4a0e17]/30 to-transparent blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[380px] bg-[#fef08a]/[0.03] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header with Reel Navigation Controls */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#721c24]/30 border border-[#721c24]/60 text-xs font-mono text-[#fef08a] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#fef08a]" />
              <span>Editorial Project Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl font-light">
              Engineered systems solving multi-catalog quick-commerce arbitrage, campus dining logistics, and assistive robotics.
            </p>
          </div>

          {/* Carousel Glide Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
              Scroll or Glide Track →
            </span>
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-[#fef08a]/50 flex items-center justify-center text-zinc-300 hover:text-[#fef08a] transition-all cursor-pointer shadow-md active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-[#fef08a]/50 flex items-center justify-center text-zinc-300 hover:text-[#fef08a] transition-all cursor-pointer shadow-md active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* UNIFORM & HORIZONTALLY SCROLLABLE REEL (Snap-Align, Identical Dimensions) */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-3 px-1 scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {PROJECTS.map((project, idx) => {
            const isPiksy = project.id === "piksy";
            const isLive = project.status === "Live Application";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className="group relative w-[320px] sm:w-[380px] h-[510px] shrink-0 snap-center rounded-3xl bg-[#1c080e]/90 hover:bg-[#250b12] border border-[#721c24]/50 hover:border-[#fef08a]/80 p-7 shadow-2xl backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1.5"
              >
                {/* Washi Masking Tape Accent on Card Top */}
                <div
                  className={`absolute -top-3.5 ${
                    idx % 2 === 0
                      ? "left-8 rotate-1 bg-[#fef08a]/35 border-[#fef08a]/60"
                      : "right-8 -rotate-2 bg-[#721c24]/50 border-[#fef08a]/40"
                  } w-24 h-5 border-y border-dashed backdrop-blur-sm pointer-events-none z-20`}
                />

                {/* Subtle Ambient Glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#721c24]/20 blur-[60px] pointer-events-none group-hover:scale-125 transition-transform" />

                <div>
                  {/* Category & Status Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3.5">
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/10 font-medium">
                      {project.category}
                    </span>
                    <span
                      className={`px-3 py-0.5 rounded-full text-xs font-mono font-medium ${
                        isLive
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                          : isPiksy
                          ? "bg-[#721c24]/60 text-[#fef08a] border border-[#fef08a]/40"
                          : "bg-white/[0.03] text-zinc-400 border border-white/5"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle - Two-line wrap with text-[#fef08a] and zero truncation */}
                  <div className="min-h-[4rem] flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold text-[#fef08a] leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mt-1 text-xs sm:text-sm font-medium text-[#fde047]/90 line-clamp-1">
                    {project.subtitle}
                  </p>

                  {/* Problem & Solution Summary */}
                  <p className="mt-3 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 pt-3.5 border-t border-white/5 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-xl bg-black/40 text-[11px] font-mono text-zinc-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-[#fef08a] group-hover:underline flex items-center gap-1">
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#fef08a] text-zinc-950 hover:bg-[#fde047] transition-all shadow-md shrink-0"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
