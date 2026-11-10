"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { PERSONAL_INFO } from "./data";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[96vh] pt-32 pb-24 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Visible Deep Red Wine / Burgundy Ambience Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] rounded-full bg-gradient-to-tr from-[#721c24]/35 via-[#4a0e17]/30 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#fde047]/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[#721c24]/20 blur-[150px] pointer-events-none" />

      {/* Marquee Text Moving Horizontally Behind Avatar */}
      <div className="absolute top-1/4 sm:top-1/3 left-0 right-0 overflow-hidden pointer-events-none select-none z-0 opacity-20">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
          className="whitespace-nowrap flex text-6xl sm:text-8xl lg:text-9xl font-black font-mono tracking-widest text-[#fef08a]"
        >
          <span>FULL STACK DEVELOPER • PROBLEM SOLVER • CREATIVE ENGINEER • </span>
          <span>FULL STACK DEVELOPER • PROBLEM SOLVER • CREATIVE ENGINEER • </span>
        </motion.div>
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 w-full z-10 flex flex-col items-center text-center">
        {/* Large Standing Cutout Avatar & Surrounding Tilt-Angled Sticky Notes */}
        <div className="relative my-8 flex items-center justify-center">
          {/* Sticky Note 1 (Top Left): Chitkara University 9.0 CGPA */}
          <motion.div
            drag
            dragConstraints={{ left: -60, right: 60, top: -50, bottom: 50 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.08, zIndex: 40 }}
            initial={{ opacity: 0, rotate: -10, y: -20 }}
            animate={{ opacity: 1, rotate: -7, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ rotate: -2, scale: 1.05 }}
            className="absolute -top-12 -left-4 sm:-left-36 z-20 p-4 sm:p-5 rounded-2xl bg-[#1c080d]/90 border border-[#fef08a]/40 shadow-[0_20px_45px_rgba(0,0,0,0.85)] backdrop-blur-xl max-w-[210px] sm:max-w-[240px] text-left select-none cursor-grab active:cursor-grabbing"
          >
            {/* Pinned Masking Tape Detail */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#fef08a]/35 border-y border-dashed border-[#fef08a]/70 rotate-2 backdrop-blur-sm pointer-events-none" />
            <div className="flex items-center gap-2 mb-1.5 text-xs font-mono text-[#fef08a]">
              <GraduationCap className="w-4 h-4 text-[#fef08a]" />
              <span>Chitkara University</span>
            </div>
            <div className="text-sm sm:text-base font-extrabold text-white leading-tight">
              B.E. Computer Science
            </div>
            <div className="mt-2 inline-block px-2.5 py-0.5 rounded-md bg-[#fef08a]/20 border border-[#fef08a]/40 text-xs font-mono text-[#fde047] font-bold">
              ★ 9.00 / 10.00 CGPA
            </div>
          </motion.div>

          {/* Sticky Note 2 (Top Right): Open to Internships */}
          <motion.div
            drag
            dragConstraints={{ left: -60, right: 60, top: -50, bottom: 50 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.08, zIndex: 40 }}
            initial={{ opacity: 0, rotate: 10, y: -20 }}
            animate={{ opacity: 1, rotate: 8, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ rotate: 2, scale: 1.05 }}
            className="absolute -top-10 -right-4 sm:-right-36 z-20 p-4 sm:p-5 rounded-2xl bg-[#1c080d]/90 border border-[#721c24]/70 shadow-[0_20px_45px_rgba(0,0,0,0.85)] backdrop-blur-xl text-left select-none cursor-grab active:cursor-grabbing"
          >
            {/* Wine Tape Strip */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#721c24]/50 border-y border-dashed border-[#fef08a]/50 -rotate-3 backdrop-blur-sm pointer-events-none" />
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Active Status</span>
            </div>
            <div className="text-sm sm:text-base font-extrabold text-white mt-1">
              💼 Open to Internships
            </div>
            <div className="text-xs font-mono text-zinc-300 mt-1">
              Full-Stack &amp; Systems
            </div>
          </motion.div>

          {/* LARGE STANDING CUTOUT FIGURE (Transparent Cutout) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative z-10 select-none flex items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.png"
              alt="Ananya Bansal"
              className="w-auto h-[380px] md:h-[420px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            />
          </motion.div>

          {/* Sticky Note 3 (Bottom Left): Quick Connect Links */}
          <motion.div
            drag
            dragConstraints={{ left: -60, right: 60, top: -50, bottom: 50 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.08, zIndex: 40 }}
            initial={{ opacity: 0, rotate: -6, y: 20 }}
            animate={{ opacity: 1, rotate: -4, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="absolute -bottom-8 -left-4 sm:-left-32 z-20 px-4 py-3 rounded-2xl bg-[#1c080d]/90 border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.85)] backdrop-blur-xl flex items-center gap-3 select-none cursor-grab active:cursor-grabbing"
          >
            {/* Butter Yellow Tape */}
            <div className="absolute -top-3 right-6 w-14 h-4 bg-[#fef08a]/30 border-y border-dashed border-[#fef08a]/60 rotate-3 pointer-events-none" />
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all cursor-pointer"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#fef08a] transition-all cursor-pointer"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#fde047] transition-all cursor-pointer"
              title="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Headline & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#721c24]/30 border border-[#721c24]/60 text-xs font-mono text-[#fef08a] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chitkara University • 9.00 CGPA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            Ananya{" "}
            <span className="bg-gradient-to-r from-[#fef08a] via-[#fde047] to-[#eab308] bg-clip-text text-transparent">
              Bansal
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-zinc-300 font-light leading-relaxed">
            Full-Stack Developer &amp; B.E. CSE Undergrad (Chitkara University, 9.0 CGPA). Building smart consumer-focused platforms, quick-commerce cart optimizers, and scalable full-stack applications.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm text-zinc-950 bg-gradient-to-r from-[#fef08a] via-[#fde047] to-[#eab308] shadow-[0_10px_30px_rgba(254,240,138,0.25)] hover:shadow-[0_15px_35px_rgba(254,240,138,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Explore Works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm text-zinc-300 hover:text-[#fef08a] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#fef08a]/40 backdrop-blur-2xl transition-all cursor-pointer"
            >
              <span>Contact Me</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
