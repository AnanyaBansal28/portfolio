"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Printer,
  Copy,
  Check,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Cpu,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { PERSONAL_INFO } from "./data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `${PERSONAL_INFO.name.toUpperCase()} | Full-Stack Developer
Email: ${PERSONAL_INFO.email} | Chitkara University, Rajpura (9.0 CGPA)
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

EDUCATION:
- B.E. Computer Science (2024 - 2028), Chitkara University, Rajpura (CGPA: 9.00 / 10.00)
- Coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks

PROJECTS:
1. PIKSY (Pick Things Smartly): 10-minute grocery cart & coupon aggregator for Blinkit, Zepto, and Instamart.
2. Mess Management System: Full-stack role-based campus dining platform saving food waste with flexible pay-as-you-eat reservations (Live: https://mess-management-system-umess.onrender.com/).
3. Voice Automated Wheelchair: Assistive speech-controlled robotics for mobility impairment.

SKILLS:
- Languages: C, C++, Python, Java, JavaScript, HTML, CSS
- Frameworks: React.js, Next.js, Node.js, Express, Tailwind CSS
- Databases & Systems: MySQL, MongoDB, Linux, RedHat Basics`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl my-auto rounded-3xl bg-[#1c080d] border border-[#721c24]/60 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/30">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fef08a]" />
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Curriculum Vitae • Ananya Bansal
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopySummary}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#fef08a]" />
                    <span className="text-[#fef08a]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#fef08a] hover:bg-[#fde047] text-zinc-950 font-bold text-xs transition-all cursor-pointer shadow-md"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all cursor-pointer ml-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-zinc-200">
            {/* Candidate Header */}
            <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {PERSONAL_INFO.name.toUpperCase()}
                </h1>
                <p className="text-[#fef08a] font-medium text-sm mt-1">
                  Full-Stack Software Engineer &amp; Consumer Tech Builder
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  Rajpura / Chandigarh Region, India • {PERSONAL_INFO.email}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-zinc-300 hover:text-white"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-zinc-300 hover:text-[#fef08a]"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-[#fef08a] mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-white text-base">
                    Bachelor of Engineering in Computer Science
                  </h3>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    Chitkara University, Rajpura • 2024 - 2028 (Currently in 3rd Year)
                  </div>
                  <div className="text-xs text-zinc-400 mt-2">
                    <strong className="text-zinc-300">Core Coursework:</strong> Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks.
                  </div>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="text-2xl font-black text-[#fef08a]">9.00 / 10.0</div>
                  <span className="text-[10px] font-mono text-emerald-400">Top 5% Cohort</span>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-[#fef08a] mb-3">
                <Briefcase className="w-4 h-4" />
                <span>Featured Engineering Projects</span>
              </div>

              <div className="space-y-4">
                {/* PIKSY */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-white text-sm">
                        PIKSY (Pick Things Smartly) — Quick-Commerce Cart &amp; Coupon Aggregator
                      </h4>
                      <p className="text-[11px] font-mono text-[#fde047] mt-0.5">
                        Tech Stack: Next.js, React, Node.js, Tailwind CSS, TypeScript
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#721c24]/50 text-[#fef08a] border border-[#721c24]">
                      Flagship
                    </span>
                  </div>
                  <ul className="mt-2.5 space-y-1 text-xs text-zinc-300 list-disc list-inside">
                    <li>Engineered a real-time price arbitrage engine comparing grocery baskets across Blinkit, Zepto, and Instamart.</li>
                    <li>Designed split-basket heuristics that divide items to circumvent surge fees and delivery thresholds, yielding 18–30% average net savings.</li>
                    <li>Integrated voucher normalization logic comparing percentage-based cashback vs. flat platform discounts.</li>
                  </ul>
                </div>

                {/* Mess Management */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-white text-sm">
                        Mess Management System (UMess) — Campus Dining Platform
                      </h4>
                      <p className="text-[11px] font-mono text-emerald-400 mt-0.5">
                        Tech Stack: React.js, Node.js, Express, MySQL / MongoDB, Render
                      </p>
                    </div>
                    <a
                      href="https://mess-management-system-umess.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 hover:underline"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <ul className="mt-2.5 space-y-1 text-xs text-zinc-300 list-disc list-inside">
                    <li>Built full-stack role-based architecture with distinct dashboards for Admin, Mess Staff, and Students.</li>
                    <li>Introduced Pay-As-You-Eat dynamic meal opt-ins (Breakfast, Lunch, Dinner), slashing food waste by approximately 40%.</li>
                    <li>Deployed to Render Cloud with secure token passes at food distribution counters.</li>
                  </ul>
                </div>

                {/* Voice Automated Wheelchair */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                  <h4 className="font-bold text-white text-sm">
                    Voice Automated Wheelchair — Assistive IoT Robotics
                  </h4>
                  <p className="text-[11px] font-mono text-[#fef08a] mt-0.5">
                    Tech Stack: Python, Speech Recognition, Arduino / C++, Ultrasonic Sensors
                  </p>
                  <p className="mt-2 text-xs text-zinc-300">
                    Engineered an assistive mobility device translating speech directives into microcontroller motor actuations with sub-200ms latency and 30cm ultrasonic fail-safe obstacle avoidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skills Summary */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-[#fef08a] mb-3">
                <Cpu className="w-4 h-4" />
                <span>Technical Skills</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                  <div className="font-bold text-[#fef08a] mb-1">Languages</div>
                  <div className="text-zinc-300">C, C++, Python, Java, JavaScript, HTML, CSS</div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                  <div className="font-bold text-[#fef08a] mb-1">Frameworks &amp; Web</div>
                  <div className="text-zinc-300">React.js, Next.js, Node.js, Express, Tailwind CSS</div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                  <div className="font-bold text-[#fef08a] mb-1">Databases &amp; Systems</div>
                  <div className="text-zinc-300">MySQL, MongoDB, Linux, RedHat Basics</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
