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
import StageSpotlights from "./StageSpotlights";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen md:max-h-[1080px] flex flex-col justify-between py-4 sm:py-6 px-3 sm:px-4 relative overflow-hidden"
    >
      {/* Anchor Theatrical Stage Spotlights directly inside the Hero fold */}
      <StageSpotlights />

      {/* Top spacer to gracefully clear Dynamic Island */}
      <div className="h-14 sm:h-16 shrink-0 pointer-events-none" />

      {/* Visible Deep Red Wine / Burgundy Ambience Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] rounded-full bg-gradient-to-tr from-[#721c24]/35 via-[#4a0e17]/30 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#fde047]/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[#721c24]/20 blur-[150px] pointer-events-none" />

      {/* Marquee Text Moving Horizontally Behind Avatar */}
      <div className="absolute top-1/4 sm:top-1/3 left-0 right-0 overflow-hidden pointer-events-none select-none z-0 opacity-20">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          className="whitespace-nowrap flex text-6xl sm:text-8xl lg:text-9xl font-black font-mono tracking-widest text-[#fef08a]"
        >
          <span>FULL STACK DEVELOPER • PROBLEM SOLVER • CREATIVE ENGINEER • </span>
          <span>FULL STACK DEVELOPER • PROBLEM SOLVER • CREATIVE ENGINEER • </span>
        </motion.div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 w-full z-10 flex flex-col items-center text-center my-auto">
        {/* Avatar Cutout & Scattered Scrapbook Elements Container */}
        <div className="relative my-3 sm:my-4 flex items-center justify-center w-full max-w-[340px] sm:max-w-md md:w-auto">
          {/* Note 1 (Tilted -6deg): Chitkara University (9.00 CGPA) */}
          <motion.div
            drag
            dragConstraints={{ left: -60, right: 60, top: -50, bottom: 50 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.08, zIndex: 40 }}
            initial={{ opacity: 0, rotate: -10, y: -20 }}
            animate={{ opacity: 1, rotate: -6, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ rotate: -2, scale: 1.05 }}
            className="absolute top-0 left-0 sm:left-2 md:-top-10 md:-left-44 lg:md:-left-52 z-20 scale-[0.75] sm:scale-90 md:scale-100 origin-top-left hidden min-[400px]:block md:block p-3 sm:p-4 rounded-2xl bg-[#1c080e]/95 border border-[#fef08a]/50 shadow-[0_20px_45px_rgba(0,0,0,0.85)] backdrop-blur-xl max-w-[170px] sm:max-w-[210px] md:max-w-[230px] text-left select-none cursor-grab active:cursor-grabbing"
          >
            {/* Hand-Drawn Doodle Rays (Strictly Outside Card Perimeter, Bursting Outward at top: -24px, left: -24px) */}
            <div
              className="absolute pointer-events-none select-none z-0"
              style={{ top: "-24px", left: "-24px" }}
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M 20 20 L 4 4" stroke="#fde047" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 18 24 L 2 24" stroke="#fef08a" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 24 18 L 24 2" stroke="#fde047" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="8" cy="14" r="1.5" fill="#fef08a" />
                <circle cx="14" cy="8" r="1.5" fill="#fde047" />
              </svg>
            </div>

            {/* Pinned Vintage Washi Tape Detail */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-18 h-4.5 bg-[#fef08a]/35 border-y border-dashed border-[#fef08a]/70 rotate-2 backdrop-blur-sm pointer-events-none" />
            <div className="flex items-center gap-1.5 mb-1 text-[11px] font-mono text-[#fef08a]">
              <GraduationCap className="w-3.5 h-3.5 text-[#fef08a]" />
              <span>Chitkara University</span>
            </div>
            <div className="text-xs sm:text-sm font-extrabold text-white leading-tight">
              B.E. Computer Science
            </div>
            <div className="mt-1.5 inline-block px-2 py-0.5 rounded-md bg-[#fef08a]/20 border border-[#fef08a]/40 text-[11px] font-mono text-[#fde047] font-bold">
              ★ 9.00 / 10.00 CGPA
            </div>
          </motion.div>

          {/* Note 2 (Tilted +5deg): Open to Internships */}
          <motion.div
            drag
            dragConstraints={{ left: -60, right: 60, top: -50, bottom: 50 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.08, zIndex: 40 }}
            initial={{ opacity: 0, rotate: 10, y: -20 }}
            animate={{ opacity: 1, rotate: 5, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ rotate: 1, scale: 1.05 }}
            className="absolute top-0 right-0 sm:right-2 md:-top-8 md:-right-44 lg:md:-right-52 z-20 scale-[0.75] sm:scale-90 md:scale-100 origin-top-right p-3 sm:p-4 rounded-2xl bg-[#1c080e]/95 border border-[#721c24]/70 shadow-[0_20px_45px_rgba(0,0,0,0.85)] backdrop-blur-xl text-left select-none cursor-grab active:cursor-grabbing max-w-[170px] sm:max-w-[200px] md:max-w-[220px]"
          >
            {/* Wine Washi Tape Strip */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4.5 bg-[#721c24]/50 border-y border-dashed border-[#fef08a]/50 -rotate-3 backdrop-blur-sm pointer-events-none" />
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Active Status</span>
            </div>
            <div className="text-xs sm:text-sm font-extrabold text-white mt-1">
              💼 Open to Internships
            </div>
            <div className="text-[11px] font-mono text-[#fde047] mt-1 font-semibold leading-tight">
              Full-Stack SWE &amp; Systems
            </div>
          </motion.div>

          {/* PURE DIE-CUT AVATAR CUTOUT ONLY - CLEAN SCALING FOR SINGLE VIEWPORT FOLD */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="relative z-10 select-none flex items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.png"
              alt="Ananya Bansal"
              className="h-[240px] sm:h-[270px] md:h-[340px] w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            />
          </motion.div>

          {/* Note 3 (Tilted +8deg): Quick-Link Sticker Capsule */}
          <motion.div
            drag
            dragConstraints={{ left: -60, right: 60, top: -50, bottom: 50 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.08, zIndex: 40 }}
            initial={{ opacity: 0, rotate: 12, y: 20 }}
            animate={{ opacity: 1, rotate: 8, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ rotate: 2, scale: 1.05 }}
            className="absolute -bottom-2 left-1 sm:-bottom-4 sm:-left-36 lg:md:-left-44 z-20 scale-[0.82] sm:scale-90 md:scale-100 origin-bottom-left px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl bg-[#1c080e]/95 border border-[#fef08a]/40 shadow-[0_20px_45px_rgba(0,0,0,0.85)] backdrop-blur-xl flex items-center gap-2 sm:gap-2.5 select-none cursor-grab active:cursor-grabbing"
          >
            {/* Butter Yellow Tape */}
            <div className="absolute -top-2.5 right-4 w-12 h-3.5 bg-[#fef08a]/35 border-y border-dashed border-[#fef08a]/70 rotate-3 pointer-events-none" />
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all cursor-pointer"
              title="GitHub: github.com/AnanyaBansal28"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#fef08a] transition-all cursor-pointer"
              title="LinkedIn: in/ananya-bansal-254b73331"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#fde047] transition-all cursor-pointer"
              title="Email: ananya2006bansal@gmail.com"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Hand-Drawn Doodle Annotation Sticker: "Quick-Commerce Arbitrage" */}
          <div className="absolute -bottom-3 -right-4 sm:-right-32 lg:-right-40 z-20 pointer-events-none select-none hidden sm:block rotate-6">
            <div className="px-3 py-1.5 rounded-xl bg-[#721c24]/40 border border-[#fef08a]/40 backdrop-blur-md text-[11px] font-mono text-[#fef08a] shadow-lg flex items-center gap-1.5">
              <span>✦</span>
              <span>Quick-Commerce Arbitrage</span>
            </div>
          </div>
        </div>

        {/* Headline, One-Line Bio & Action CTAs within Single Viewport Fold */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-2 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#721c24]/30 border border-[#721c24]/60 text-[11px] font-mono text-[#fef08a] mb-2">
            <Sparkles className="w-3 h-3 text-[#fef08a]" />
            <span>Chitkara University • 9.00 CGPA</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ananya{" "}
            <span className="bg-gradient-to-r from-[#fef08a] via-[#fde047] to-[#eab308] bg-clip-text text-transparent">
              Bansal
            </span>
          </h1>

          <p className="mt-2 text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-xl mx-auto">
            Full-Stack Developer &amp; B.E. CSE Undergrad at Chitkara University (9.00 CGPA). Building smart consumer-focused platforms, quick-commerce cart optimizers, and scalable full-stack applications.
          </p>

          {/* Action Buttons */}
          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#projects"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3 rounded-full font-bold text-sm text-zinc-950 bg-gradient-to-r from-[#fef08a] via-[#fde047] to-[#eab308] shadow-[0_10px_25px_rgba(254,240,138,0.25)] hover:shadow-[0_15px_30px_rgba(254,240,138,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Explore Works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3 rounded-full font-medium text-sm text-zinc-300 hover:text-[#fef08a] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#fef08a]/40 backdrop-blur-2xl transition-all cursor-pointer"
            >
              <span>Contact Me</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom buffer */}
      <div className="h-2 shrink-0 pointer-events-none" />
    </section>
  );
}

