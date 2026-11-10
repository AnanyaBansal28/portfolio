"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  ShoppingBag,
  Utensils,
  Mic,
  Compass,
  ArrowRight,
  Hand,
} from "lucide-react";
import { PROJECTS } from "./data";
import { Project } from "./types";
import ProjectModal from "./ProjectModal";
import { GithubIcon } from "./icons";

interface LabProject {
  id: string;
  projectRef: Project;
  noteTag: string;
  badge: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  blueprintType: "piksy" | "mess" | "wheelchair" | "minga";
  liveUrl?: string;
  githubUrl: string;
}

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev" | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isDraggingRef = useRef(false);

  // Map our flagship projects to the lab notebook pages
  const labProjects: LabProject[] = [
    {
      id: "piksy",
      projectRef: PROJECTS.find((p) => p.id === "piksy") || PROJECTS[0],
      noteTag: "LAB NOTE: PROJECT 01 • QUICK-COMMERCE",
      badge: "Quick-Commerce Optimization",
      title: "PIKSY — Smart Grocery Cart Optimizer",
      subtitle: "Multi-Catalog Split-Cart Arbitrage Engine",
      problem:
        "Shoppers across Blinkit, Zepto, and Instamart suffer 18%–35% price discrepancies, surge markups, and fragmented delivery fees for identical grocery items.",
      solution:
        "Engineered a multi-vendor split-cart knapsack optimizer that scrapes real-time catalogs, evaluates net coupon vouchers (flat vs. %), and partitions baskets into lowest-cost split deliveries under 10-minute SLAs.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Knapsack Algo", "Node.js", "Framer Motion"],
      metrics: [
        { label: "Cart Efficiency", value: "Up to 32%" },
        { label: "Delivery SLA", value: "<10 Mins" },
      ],
      blueprintType: "piksy",
      githubUrl: PROJECTS.find((p) => p.id === "piksy")?.githubUrl || "https://github.com/AnanyaBansal28",
    },
    {
      id: "mess-management",
      projectRef: PROJECTS.find((p) => p.id === "mess-management") || PROJECTS[1],
      noteTag: "LAB NOTE: PROJECT 02 • FULL-STACK LOGISTICS",
      badge: "Campus Dining & Systems",
      title: "UMess — Campus Mess Management",
      subtitle: "Dynamic Meal Booking & Waste Reduction Portal",
      problem:
        "Institutional student dining suffers massive recurring food waste and rigid monthly meal billing where students are forced to pay for meals they never attend.",
      solution:
        "Designed a full-stack role-based campus dining platform with flexible meal tokens (Breakfast/Lunch/Dinner), real-time student opt-outs, and staff ingredient forecasting, cutting kitchen waste by ~34%.",
      techStack: ["React.js", "Node.js", "Express", "MySQL", "Tailwind CSS", "Render Cloud"],
      metrics: [
        { label: "Food Waste Reduction", value: "-34% SLA" },
        { label: "Active Students", value: "1,200+ Daily" },
      ],
      blueprintType: "mess",
      liveUrl: "https://mess-management-system-umess.onrender.com/",
      githubUrl: "https://github.com/AnanyaBansal28",
    },
    {
      id: "voice-wheelchair",
      projectRef: PROJECTS.find((p) => p.id === "voice-wheelchair") || PROJECTS[2],
      noteTag: "LAB NOTE: PROJECT 03 • ACCESSIBILITY ROBOTICS",
      badge: "Embedded Systems & Speech",
      title: "Voice Automated Assistive Wheelchair",
      subtitle: "Speech-Controlled Mobility & Obstacle Telemetry",
      problem:
        "Standard joystick wheelchairs require manual dexterity and upper-body motor function, leaving quadriplegic individuals and those with severe neuromuscular conditions dependent on caretakers.",
      solution:
        "Integrated hardware acoustic speech recognition with C++ microcontroller motor drivers, translating spoken vector commands (FORWARD, LEFT, RIGHT, STOP) with ultrasonic obstacle collision override.",
      techStack: ["C++", "Microcontrollers", "Speech Recognition", "Motor Drivers", "Ultrasonic Sensors"],
      metrics: [
        { label: "Command Latency", value: "<180ms" },
        { label: "Obstacle Radar", value: "1.8m Range" },
      ],
      blueprintType: "wheelchair",
      githubUrl: "https://github.com/AnanyaBansal28",
    },
    {
      id: "minga-london",
      projectRef: PROJECTS.find((p) => p.id === "minga-london") || PROJECTS[3],
      noteTag: "LAB NOTE: PROJECT 04 • CREATIVE ENGINEERING",
      badge: "Editorial E-Commerce UI",
      title: "Minga London Fashion UI",
      subtitle: "Fluid Lookbook & Micro-Interactions",
      problem:
        "Traditional apparel storefronts suffer rigid catalog grids, sluggish page navigations, and jarring mobile checkout steps that dampen shopper engagement.",
      solution:
        "Architected a high-fashion dark editorial shopping experience with spring-physics micro-interactions, custom styling drawers, and 60 FPS transitions.",
      techStack: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "UI Systems"],
      metrics: [
        { label: "Interaction FPS", value: "60 FPS" },
        { label: "Mobile Polish", value: "100% Fluid" },
      ],
      blueprintType: "minga",
      githubUrl: "https://github.com/AnanyaBansal28",
    },
  ];

  const totalPages = labProjects.length;

  const handleNextPage = () => {
    if (isFlipping) return;
    setFlipDirection("next");
    setIsFlipping(true);
  };

  const handlePrevPage = () => {
    if (isFlipping) return;
    setFlipDirection("prev");
    setIsFlipping(true);
  };

  const handleLeftPageClick = (e: React.MouseEvent) => {
    if (isDraggingRef.current || isFlipping) return;
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) return;
    handlePrevPage();
  };

  const handleRightPageClick = (e: React.MouseEvent) => {
    if (isDraggingRef.current || isFlipping) return;
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) return;
    handleNextPage();
  };

  const nextIndex = (currentPage + 1) % totalPages;
  const prevIndex = (currentPage - 1 + totalPages) % totalPages;

  // Realistic warm kraft engineering paper texture style
  const paperStyle: React.CSSProperties = {
    backgroundColor: "#191614",
    backgroundImage: "radial-gradient(rgba(254, 240, 138, 0.15) 1.2px, transparent 1.2px)",
    backgroundSize: "24px 24px",
  };

  // Render the left page (Lab Specs & Notes)
  const renderLeftPage = (project: LabProject, index: number) => (
    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between text-left relative z-10 select-none">
      <div>
        {/* Monospace Header */}
        <div className="flex items-center justify-between border-b border-amber-500/15 pb-2.5 mb-4">
          <div className="text-[11px] font-mono text-[#fef08a] font-bold tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#fef08a]" />
            <span>{project.noteTag}</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-400">
            ENTRY #{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title & Badge */}
        <div className="mb-4">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#721c24]/60 border border-[#fef08a]/40 text-[#fde047] mb-2 shadow-sm">
            ✦ {project.badge}
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-zinc-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Problem Statement Box */}
        <div className="p-3.5 rounded-xl bg-[#12100e]/85 border border-amber-500/15 mb-3 shadow-inner">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#fef08a]/85 font-bold mb-1">
            Problem Statement:
          </div>
          <p className="text-xs text-zinc-300 font-light leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Engineering Solution Box */}
        <div className="p-3.5 rounded-xl bg-[#12100e]/85 border border-amber-500/15 shadow-inner">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#fde047]/90 font-bold mb-1">
            Core Architecture &amp; Solution:
          </div>
          <p className="text-xs text-zinc-300 font-light leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-amber-500/15">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-[#241f1a]/70 border border-amber-500/20 text-[10px] font-mono text-[#f5eedc] shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Page Number & Left Turn Cue */}
        <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/5">
          <span>PAGE 0{index * 2 + 1} / 0{totalPages * 2}</span>
          <span className="text-zinc-400 flex items-center gap-1 font-mono">
            <span>Author: Ananya Bansal</span>
          </span>
        </div>
      </div>
    </div>
  );

  // Render the right page (Blueprint & Output)
  const renderRightPage = (project: LabProject, index: number) => (
    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between text-left relative z-10 select-none">
      <div>
        {/* Monospace Header */}
        <div className="flex items-center justify-between border-b border-amber-500/15 pb-2.5 mb-4">
          <div className="text-[11px] font-mono text-[#fef08a] font-bold tracking-wider flex items-center gap-1.5">
            <span>[ BLUEPRINT &amp; TELEMETRY ]</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Verified Build
          </span>
        </div>

        {/* Interactive Mockup Preview Frame */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#12100e]/90 border border-[#721c24]/50 shadow-inner mb-4">
          {project.blueprintType === "piksy" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-300 flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#fef08a]" />
                  <span>Basket Partition Simulation</span>
                </span>
                <span className="text-[#fef08a] font-bold bg-[#721c24]/50 px-2 py-0.5 rounded border border-[#fef08a]/30">
                  -28% Net Cost
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-zinc-400">Blinkit</div>
                  <div className="text-xs font-bold text-white mt-0.5">₹240</div>
                  <div className="text-[9px] text-[#fde047]">4 items</div>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-zinc-400">Zepto</div>
                  <div className="text-xs font-bold text-white mt-0.5">₹185</div>
                  <div className="text-[9px] text-[#fde047]">3 items</div>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-zinc-400">Instamart</div>
                  <div className="text-xs font-bold text-white mt-0.5">₹95</div>
                  <div className="text-[9px] text-[#fde047]">1 item</div>
                </div>
              </div>
            </div>
          )}

          {project.blueprintType === "mess" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-300 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#fef08a]" />
                  <span>Meal Token Optimization</span>
                </span>
                <span className="text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                  -34% Waste SLA
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                  <div className="text-[10px] text-emerald-400">Breakfast</div>
                  <div className="text-xs font-bold text-white mt-0.5">Booked</div>
                  <div className="text-[9px] text-zinc-400">₹45 opt-in</div>
                </div>
                <div className="p-2 rounded-xl bg-red-950/20 border border-red-500/20">
                  <div className="text-[10px] text-red-400">Lunch</div>
                  <div className="text-xs font-bold text-zinc-300 mt-0.5">Skipped</div>
                  <div className="text-[9px] text-emerald-400">₹0 charged</div>
                </div>
                <div className="p-2 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                  <div className="text-[10px] text-emerald-400">Dinner</div>
                  <div className="text-xs font-bold text-white mt-0.5">Booked</div>
                  <div className="text-[9px] text-zinc-400">₹60 opt-in</div>
                </div>
              </div>
            </div>
          )}

          {project.blueprintType === "wheelchair" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-300 flex items-center gap-1.5">
                  <Mic className="w-3.5 h-3.5 text-[#fef08a]" />
                  <span>Acoustic Command Telemetry</span>
                </span>
                <span className="text-[#fef08a] font-bold bg-[#721c24]/50 px-2 py-0.5 rounded border border-[#fef08a]/30">
                  98.4% Acc.
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-[11px]">
                <span className="text-zinc-400">Active Vector:</span>
                <span className="text-[#fde047] font-bold">FORWARD [0.8 m/s²]</span>
                <span className="text-emerald-400 text-[10px]">Path: 1.8m Clear</span>
              </div>
            </div>
          )}

          {project.blueprintType === "minga" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-300 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#fef08a]" />
                  <span>Editorial Apparel Architecture</span>
                </span>
                <span className="text-[#fef08a] font-bold bg-[#721c24]/50 px-2 py-0.5 rounded border border-[#fef08a]/30">
                  60 FPS Fluid
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-[11px]">
                <span className="text-zinc-400">Color Palette:</span>
                <span className="text-[#fef08a] font-bold">Velvet / Wine / Gold</span>
                <span className="text-zinc-400 text-[10px]">Responsive Bag</span>
              </div>
            </div>
          )}
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {project.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-[#721c24]/30 border border-[#fef08a]/30 shadow-sm"
            >
              <div className="text-[10px] font-mono text-[#fef08a]">
                {metric.label}
              </div>
              <div className="text-base sm:text-lg font-black text-white mt-0.5">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 pt-3 border-t border-amber-500/15">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProject(project.projectRef);
            }}
            className="flex-1 py-2.5 px-4 rounded-xl font-bold text-xs text-zinc-950 bg-gradient-to-r from-[#fef08a] via-[#fde047] to-[#eab308] hover:shadow-[0_8px_20px_rgba(254,240,138,0.25)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Explore Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#fef08a]/40 text-xs font-mono text-zinc-200 hover:text-[#fef08a] transition-all cursor-pointer flex items-center gap-1 shrink-0"
              title="Open Live Deployment"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#fef08a]/40 text-xs font-mono text-zinc-200 hover:text-white transition-all cursor-pointer flex items-center gap-1 shrink-0"
            title="View Source on GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Footer Page Number */}
        <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/5">
          <span>PAGE 0{index * 2 + 2} / 0{totalPages * 2}</span>
          <span className="text-[#fef08a] font-medium flex items-center gap-1">
            <span>Engineering Notebook</span>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="relative py-28 scroll-mt-20 overflow-hidden">
      {/* Deep Red Wine & Burgundy Ambience Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[750px] h-[450px] bg-gradient-to-tr from-[#721c24]/35 via-[#4a0e17]/30 to-transparent blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[380px] bg-[#fef08a]/[0.03] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#721c24]/30 border border-[#721c24]/60 text-xs font-mono text-[#fef08a] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#fef08a]" />
              <span>Engineering Lab Notebook</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Project Lab Journal
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl font-light">
              Interactive 2-page engineering journal detailing problem statements, architectures, and telemetry outputs.
            </p>
          </div>

          {/* Quick Page Turn Navigation Pills (Top Controls) */}
          <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs z-30">
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={isFlipping}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-[#fef08a]/40 text-zinc-300 hover:text-[#fef08a] transition-all cursor-pointer disabled:opacity-40"
              title="Previous Lab Entry"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 py-2 rounded-xl bg-[#1c080d]/80 border border-[#721c24]/50 text-xs text-[#fef08a] font-bold">
              Entry 0{currentPage + 1} / 0{totalPages}
            </span>
            <button
              type="button"
              onClick={handleNextPage}
              disabled={isFlipping}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-[#fef08a]/40 text-zinc-300 hover:text-[#fef08a] transition-all cursor-pointer disabled:opacity-40"
              title="Next Lab Entry"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-PAGE NOTEBOOK CONTAINER */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Hardbound Leather Cover Jacket */}
          <div className="rounded-[32px] bg-[#14100e] p-3 sm:p-5 border border-amber-500/25 shadow-[0_35px_80px_rgba(0,0,0,0.95),0_0_50px_rgba(114,28,36,0.25)] relative">
            {/* Open Paper Spread Container with 3D Perspective */}
            <div
              className="relative w-full rounded-2xl bg-[#191614] border border-[#38312a] overflow-hidden shadow-2xl min-h-[580px] md:h-[530px]"
              style={{
                perspective: "1600px",
                ...paperStyle,
              }}
            >
              {/* Center Spine Depth & Shadow behind spiral rings */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-28 pointer-events-none z-30 hidden md:block bg-gradient-to-r from-transparent via-black/80 to-transparent" />

              {/* Metallic Spiral Rings Spine Running Down Center (z-50 for crisp layering) */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 z-50 pointer-events-none hidden md:flex flex-col justify-between items-center py-5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="relative flex items-center justify-center">
                    {/* Ring Loop with metallic brushed steel gradient */}
                    <div className="w-8 h-3.5 rounded-full bg-gradient-to-r from-[#5a524a] via-[#f5ede2] via-45% to-[#3d3630] border border-[#7a7065] shadow-[0_4px_6px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.4)]" />
                    {/* Paper hole punch notches */}
                    <div className="absolute -left-3 w-1.5 h-2 rounded-full bg-[#0e0c0b] border border-[#3a332c]" />
                    <div className="absolute -right-3 w-1.5 h-2 rounded-full bg-[#0e0c0b] border border-[#3a332c]" />
                  </div>
                ))}
              </div>

              {/* Interactive Drag & Swipe Gesture Container */}
              <motion.div
                drag="x"
                dragDirectionLock
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragStart={() => {
                  isDraggingRef.current = true;
                }}
                onDragEnd={(_e, info) => {
                  setTimeout(() => {
                    isDraggingRef.current = false;
                  }, 120);

                  if (info.offset.x < -50 || info.velocity.x < -250) {
                    handleNextPage();
                  } else if (info.offset.x > 50 || info.velocity.x > 250) {
                    handlePrevPage();
                  }
                }}
                className="w-full h-full relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* DESKTOP 2-PAGE SPREAD (md: and above) */}
                <div className="hidden md:grid md:grid-cols-2 w-full h-full relative">
                  {/* Underneath Static Left Page (Click to flip back) */}
                  <div
                    onClick={handleLeftPageClick}
                    className="relative w-full h-full border-r border-[#2d2824] cursor-pointer select-none group/left"
                    title="Click to turn to previous page, or drag right"
                  >
                    {/* Outer stacked-paper trim highlight (left edge) */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-3 rounded-l-2xl pointer-events-none z-20"
                      style={{
                        background: "linear-gradient(to right, rgba(254, 240, 138, 0.08), rgba(42, 37, 33, 0.95) 40%, transparent)",
                        boxShadow: "inset 1px 0 0 rgba(254, 240, 138, 0.15), -1px 0 0 #2a241f, -2px 0 0 #1b1714, -3px 0 0 #241f1a, -4px 0 0 #14110f, -6px 0 10px rgba(0,0,0,0.6)",
                      }}
                    />

                    {/* Left page inner spine shadow (bending into the binder) */}
                    <div className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-20 bg-gradient-to-l from-black/80 via-black/35 to-transparent" />

                    {/* Dynamic landing shadow when right page flips forward onto left page */}
                    {isFlipping && flipDirection === "next" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.2, 0.55, 0] }}
                        transition={{ duration: 0.72, times: [0, 0.3, 0.75, 1], ease: "easeInOut" }}
                        className="absolute inset-0 pointer-events-none z-25 bg-gradient-to-r from-transparent via-black/40 to-black/85"
                      />
                    )}

                    {renderLeftPage(
                      labProjects[flipDirection === "next" && isFlipping ? nextIndex : currentPage],
                      flipDirection === "next" && isFlipping ? nextIndex : currentPage
                    )}

                    {/* Bottom-Left Corner Dog-Ear Previous Button */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevPage();
                      }}
                      className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden cursor-pointer group z-30"
                      title="← Turn to Previous Page"
                    >
                      <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[42px] border-b-[#fef08a]/20 border-r-[42px] border-r-transparent group-hover:border-b-[#fef08a]/60 group-hover:drop-shadow-[0_0_10px_rgba(254,240,138,0.5)] transition-all" />
                      <span className="absolute bottom-1 left-1.5 text-[9px] font-mono text-[#fef08a] font-bold select-none group-hover:scale-110 transition-transform">
                        ←
                      </span>
                    </div>
                  </div>

                  {/* Underneath Static Right Page (Click to flip next) */}
                  <div
                    onClick={handleRightPageClick}
                    className="relative w-full h-full cursor-pointer select-none group/right"
                    title="Click to turn to next page, or drag left"
                  >
                    {/* Outer stacked-paper trim highlight (right edge) */}
                    <div
                      className="absolute right-0 top-0 bottom-0 w-3 rounded-r-2xl pointer-events-none z-20"
                      style={{
                        background: "linear-gradient(to left, rgba(254, 240, 138, 0.08), rgba(42, 37, 33, 0.95) 40%, transparent)",
                        boxShadow: "inset -1px 0 0 rgba(254, 240, 138, 0.15), 1px 0 0 #2a241f, 2px 0 0 #1b1714, 3px 0 0 #241f1a, 4px 0 0 #14110f, 6px 0 10px rgba(0,0,0,0.6)",
                      }}
                    />

                    {/* Right page inner spine shadow (bending into the binder) */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-20 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

                    {/* Dynamic landing shadow when left page flips backward onto right page */}
                    {isFlipping && flipDirection === "prev" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.2, 0.55, 0] }}
                        transition={{ duration: 0.72, times: [0, 0.3, 0.75, 1], ease: "easeInOut" }}
                        className="absolute inset-0 pointer-events-none z-25 bg-gradient-to-l from-transparent via-black/40 to-black/85"
                      />
                    )}

                    {renderRightPage(
                      labProjects[flipDirection === "next" && isFlipping ? nextIndex : currentPage],
                      flipDirection === "next" && isFlipping ? nextIndex : currentPage
                    )}

                    {/* Bottom-Right Corner Dog-Ear Next Button */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextPage();
                      }}
                      className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden cursor-pointer group z-30"
                      title="Turn to Next Page →"
                    >
                      <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[42px] border-b-[#fef08a]/20 border-l-[42px] border-l-transparent group-hover:border-b-[#fef08a]/60 group-hover:drop-shadow-[0_0_10px_rgba(254,240,138,0.5)] transition-all" />
                      <span className="absolute bottom-1 right-1.5 text-[9px] font-mono text-[#fef08a] font-bold select-none group-hover:scale-110 transition-transform">
                        →
                      </span>
                    </div>
                  </div>

                  {/* 3D FLIPPING LEAF (When Forward Flip is Triggered) */}
                  <AnimatePresence>
                    {isFlipping && flipDirection === "next" && (
                      <motion.div
                        key={`flip-leaf-${currentPage}`}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: -180 }}
                        transition={{ duration: 0.72, ease: [0.25, 1, 0.5, 1] }}
                        style={{
                          transformOrigin: "left center",
                          transformStyle: "preserve-3d",
                        }}
                        className="absolute top-0 right-0 w-1/2 h-full z-40 pointer-events-none"
                        onAnimationComplete={() => {
                          setCurrentPage((prev) => (prev + 1) % totalPages);
                          setIsFlipping(false);
                          setFlipDirection(null);
                        }}
                      >
                        {/* FRONT OF LEAF (Facing viewer at 0 deg) */}
                        <div
                          style={{
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            ...paperStyle,
                          }}
                          className="absolute inset-0 w-full h-full border border-[#38312a] rounded-r-2xl shadow-2xl overflow-hidden"
                        >
                          {renderRightPage(labProjects[currentPage], currentPage)}

                          {/* Dynamic moving linear gradient shadow across front as it turns away */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.45, 0.9, 0.95] }}
                            transition={{ duration: 0.72, times: [0, 0.35, 0.7, 1], ease: "easeInOut" }}
                            className="absolute inset-0 pointer-events-none z-30"
                            style={{
                              background:
                                "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.1) 70%, transparent 100%)",
                            }}
                          />

                          {/* Dynamic specular light sheen sweeping across curvature */}
                          <motion.div
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: ["-100%", "20%", "120%"], opacity: [0, 0.35, 0] }}
                            transition={{ duration: 0.72, ease: "easeInOut" }}
                            className="absolute inset-0 pointer-events-none z-35"
                            style={{
                              background:
                                "linear-gradient(to right, transparent, rgba(254, 240, 138, 0.25) 50%, transparent)",
                            }}
                          />
                        </div>

                        {/* BACK OF LEAF (Revealed as it flips past 90 deg) */}
                        <div
                          style={{
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            backgroundColor: "#151311",
                            backgroundImage:
                              "linear-gradient(rgba(254, 240, 138, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(254, 240, 138, 0.05) 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                          }}
                          className="absolute inset-0 w-full h-full border border-amber-500/20 rounded-l-2xl shadow-2xl p-8 flex flex-col justify-between overflow-hidden"
                        >
                          {/* Dynamic shadow that lifts off as page lands on left side */}
                          <motion.div
                            initial={{ opacity: 0.9 }}
                            animate={{ opacity: [0.9, 0.4, 0] }}
                            transition={{ duration: 0.72, times: [0, 0.5, 1], ease: "easeInOut" }}
                            className="absolute inset-0 pointer-events-none z-30"
                            style={{
                              background:
                                "linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
                            }}
                          />

                          <div className="flex items-center justify-between opacity-50 font-mono text-[10px] text-[#fef08a] relative z-10">
                            <span>{"// ARCHITECTURAL DRAFT SKETCH"}</span>
                            <span>ENTRY #{String(nextIndex + 1).padStart(2, "0")}</span>
                          </div>
                          <div className="my-auto text-center opacity-30 select-none relative z-10">
                            <div className="text-3xl font-mono font-black text-[#fef08a]/40 tracking-widest uppercase">
                              ENGINEERING JOURNAL
                            </div>
                            <div className="text-[11px] font-mono text-zinc-500 mt-2">
                              Partitioning systems &amp; telemetry data...
                            </div>
                          </div>
                          <div className="flex justify-between items-center opacity-50 font-mono text-[10px] text-zinc-500 relative z-10">
                            <span>PAGE 0{nextIndex * 2 + 1}</span>
                            <span>CONFIDENTIAL SCHEMATIC</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 3D FLIPPING LEAF (When Backward Flip is Triggered) */}
                  <AnimatePresence>
                    {isFlipping && flipDirection === "prev" && (
                      <motion.div
                        key={`flip-prev-${currentPage}`}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: 180 }}
                        transition={{ duration: 0.72, ease: [0.25, 1, 0.5, 1] }}
                        style={{
                          transformOrigin: "right center",
                          transformStyle: "preserve-3d",
                        }}
                        className="absolute top-0 left-0 w-1/2 h-full z-40 pointer-events-none"
                        onAnimationComplete={() => {
                          setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
                          setIsFlipping(false);
                          setFlipDirection(null);
                        }}
                      >
                        {/* FRONT OF LEFT LEAF */}
                        <div
                          style={{
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            ...paperStyle,
                          }}
                          className="absolute inset-0 w-full h-full border border-[#38312a] rounded-l-2xl shadow-2xl overflow-hidden"
                        >
                          {renderLeftPage(labProjects[currentPage], currentPage)}

                          {/* Dynamic moving linear gradient shadow across front as it turns away */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.45, 0.9, 0.95] }}
                            transition={{ duration: 0.72, times: [0, 0.35, 0.7, 1], ease: "easeInOut" }}
                            className="absolute inset-0 pointer-events-none z-30"
                            style={{
                              background:
                                "linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.1) 70%, transparent 100%)",
                            }}
                          />

                          {/* Dynamic specular light sheen sweeping across curvature */}
                          <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: ["100%", "-20%", "-120%"], opacity: [0, 0.35, 0] }}
                            transition={{ duration: 0.72, ease: "easeInOut" }}
                            className="absolute inset-0 pointer-events-none z-35"
                            style={{
                              background:
                                "linear-gradient(to left, transparent, rgba(254, 240, 138, 0.25) 50%, transparent)",
                            }}
                          />
                        </div>

                        {/* BACK OF LEFT LEAF */}
                        <div
                          style={{
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            backgroundColor: "#151311",
                            backgroundImage:
                              "linear-gradient(rgba(254, 240, 138, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(254, 240, 138, 0.05) 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                          }}
                          className="absolute inset-0 w-full h-full border border-amber-500/20 rounded-r-2xl shadow-2xl p-8 flex flex-col justify-between overflow-hidden"
                        >
                          {/* Dynamic shadow that lifts off as page lands on right side */}
                          <motion.div
                            initial={{ opacity: 0.9 }}
                            animate={{ opacity: [0.9, 0.4, 0] }}
                            transition={{ duration: 0.72, times: [0, 0.5, 1], ease: "easeInOut" }}
                            className="absolute inset-0 pointer-events-none z-30"
                            style={{
                              background:
                                "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
                            }}
                          />

                          <div className="flex items-center justify-between opacity-50 font-mono text-[10px] text-[#fef08a] relative z-10">
                            <span>{"// PREVIOUS LOG RECOVERY"}</span>
                            <span>ENTRY #{String(prevIndex + 1).padStart(2, "0")}</span>
                          </div>
                          <div className="my-auto text-center opacity-30 select-none relative z-10">
                            <div className="text-3xl font-mono font-black text-[#fef08a]/40 tracking-widest uppercase">
                              HISTORICAL ARCHIVE
                            </div>
                            <div className="text-[11px] font-mono text-zinc-500 mt-2">
                              Restoring verified specifications...
                            </div>
                          </div>
                          <div className="flex justify-between items-center opacity-50 font-mono text-[10px] text-zinc-500 relative z-10">
                            <span>PAGE 0{prevIndex * 2 + 2}</span>
                            <span>RESTORED BLUEPRINT</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* MOBILE FALLBACK STACKED VIEW (< md screens) */}
                <div className="md:hidden flex flex-col w-full h-full p-4 space-y-6">
                  <div className="rounded-xl bg-[#12100e]/90 border border-amber-500/15 p-4 shadow-lg">
                    {renderLeftPage(labProjects[currentPage], currentPage)}
                  </div>
                  <div className="rounded-xl bg-[#12100e]/90 border border-amber-500/15 p-4 shadow-lg">
                    {renderRightPage(labProjects[currentPage], currentPage)}
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={handlePrevPage}
                      className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-300 active:scale-95 transition-transform"
                    >
                      ← Previous
                    </button>
                    <span className="text-xs font-mono text-[#fef08a]">
                      Entry {currentPage + 1} / {totalPages}
                    </span>
                    <button
                      type="button"
                      onClick={handleNextPage}
                      className="px-4 py-2 rounded-xl bg-[#fef08a] text-zinc-950 font-bold text-xs font-mono active:scale-95 transition-transform"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Notebook Journal Navigation Bar & Gesture Cues */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 px-2">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
              <span className="inline-flex items-center gap-1 text-[#fef08a] font-bold">
                <Hand className="w-3.5 h-3.5 text-[#fef08a]" />
                Tactile Gestures:
              </span>
              <span>Swipe/drag left or right • Click pages to turn • Corner folds</span>
            </div>

            {/* Entry Progress Indicators */}
            <div className="flex items-center gap-2">
              {labProjects.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentPage(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentPage === idx
                      ? "w-8 bg-gradient-to-r from-[#fef08a] to-[#fde047]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  title={`Jump to Entry 0${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
