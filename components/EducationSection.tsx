"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export default function EducationSection() {
  const keyCoursework = [
    "Data Structures",
    "Algorithms",
    "OS",
    "DBMS",
    "Computer Networks",
    "Object-Oriented Programming (Java/C++)",
    "Distributed Systems",
    "Web Engineering",
  ];

  const highlights = [
    "Consistent Academic Distinction: Ranked in top tier of the CSE cohort with a 9.00 / 10.00 CGPA.",
    "Real-World Systems Engineering: Spearheaded production campus dining portal (UMess) to minimize campus food waste.",
    "Hardware & Robotics Integration: Applied C++ and microcontrollers to design assistive accessibility mobility prototypes.",
    "Collaborative Problem Solving: Active contributor in technical hackathons and competitive programming developer circles.",
  ];

  return (
    <section id="education" className="relative py-28 scroll-mt-20 overflow-hidden">
      {/* Deep Red Wine & Burgundy Ambience Spotlights */}
      <div className="absolute top-1/2 left-1/3 w-[700px] h-[400px] bg-gradient-to-tr from-[#721c24]/30 via-[#4a0e17]/25 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#fef08a]/[0.03] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#721c24]/30 border border-[#721c24]/60 text-xs font-mono text-[#fef08a] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Education &amp; Academic Honors
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl font-light">
            Rigorous foundations in algorithms, computer systems, and full-stack software development at Chitkara University.
          </p>
        </div>

        {/* Editorial Scrapbook Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-[#1c080d]/80 hover:bg-[#230b12]/90 border border-[#721c24]/50 hover:border-[#fef08a]/60 backdrop-blur-2xl p-7 sm:p-12 shadow-xl relative overflow-hidden transition-all duration-300"
        >
          {/* Masking Tape in Top Left */}
          <div className="absolute -top-3.5 left-12 w-28 h-6 bg-[#fef08a]/30 border-y border-dashed border-[#fef08a]/60 rotate-1 backdrop-blur-sm pointer-events-none z-20" />

          {/* Subtle champagne highlight in corner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#721c24]/20 via-[#fef08a]/[0.04] to-transparent blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            {/* Left 8 Columns: Degree and Coursework */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#fef08a]/15 text-[#fef08a] border border-[#fef08a]/30 font-medium">
                  Currently in 3rd Year
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-zinc-300">
                  <Calendar className="w-3.5 h-3.5 text-[#fef08a]" />
                  <span>2024 - 2028</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Bachelor of Engineering in Computer Science
              </h3>

              <div className="mt-2.5 flex items-center gap-2 text-zinc-300 text-sm sm:text-base font-light">
                <MapPin className="w-4 h-4 text-[#fef08a] shrink-0" />
                <span>Chitkara University, Rajpura, Punjab</span>
              </div>

              {/* Highlights */}
              <div className="mt-7 space-y-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#fef08a] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Coursework Chips */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 mb-3.5">
                  <BookOpen className="w-4 h-4 text-[#fef08a]" />
                  <span className="text-xs uppercase tracking-wider font-mono text-[#fef08a] font-semibold">
                    Key Coursework
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {keyCoursework.map((course) => (
                    <span
                      key={course}
                      className="px-3.5 py-1.5 rounded-xl bg-black/50 border border-[#721c24]/50 hover:border-[#fef08a]/60 text-xs text-zinc-200 font-mono transition-colors shadow-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Glowing Champagne 9.0 CGPA Badge */}
            <div className="lg:col-span-4 w-full">
              <div className="rounded-3xl bg-black/50 border border-[#fef08a]/30 p-8 flex flex-col items-center text-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#721c24]/20 via-[#fef08a]/[0.05] to-transparent pointer-events-none" />

                <span className="text-xs uppercase tracking-widest font-mono text-zinc-400">
                  Cumulative Grade Point Average
                </span>

                <div className="mt-3 text-6xl sm:text-7xl font-black bg-gradient-to-b from-white via-[#fef08a] to-[#fde047] bg-clip-text text-transparent drop-shadow-md">
                  9.00
                </div>
                <span className="text-xs font-mono text-[#fef08a] mt-1 font-semibold">
                  Scale of 10.00
                </span>

                {/* Meter Bar */}
                <div className="w-full mt-6 bg-white/[0.08] rounded-full h-2.5 overflow-hidden p-0.5">
                  <div
                    className="bg-gradient-to-r from-[#721c24] via-[#fde047] to-[#fef08a] h-full rounded-full"
                    style={{ width: "90%" }}
                  />
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 w-full flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Cohort Percentile</span>
                  <span className="text-[#fef08a] font-medium flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Top 5% Cohort</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
