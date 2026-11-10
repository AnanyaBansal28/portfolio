"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, FileText, Search } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { PERSONAL_INFO } from "./data";

interface DynamicIslandProps {
  onReplayIntro?: () => void;
  onOpenResume?: () => void;
  onOpenCommandPalette?: () => void;
}

export default function DynamicIsland({
  onReplayIntro,
  onOpenResume,
  onOpenCommandPalette,
}: DynamicIslandProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", label: "Overview" },
        { id: "projects", label: "Works" },
        { id: "skills", label: "Stack" },
        { id: "education", label: "Background" },
        { id: "contact", label: "Contact" },
      ];

      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].label);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isExpanded = isHovered || isMobileOpen;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-40">
      <motion.nav
        layout
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsMobileOpen((prev) => !prev)}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className={`relative flex items-center justify-between rounded-full backdrop-blur-2xl bg-[#1c080d]/90 border border-[#721c24]/50 hover:border-[#fef08a]/60 shadow-[0_15px_40px_rgba(0,0,0,0.8)] select-none cursor-pointer transition-colors ${
          isExpanded ? "px-5 py-2.5 gap-6" : "px-4 py-2 gap-3"
        }`}
      >
        {/* Left: Monogram & Identity */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#721c24] via-[#881337] to-[#fef08a] flex items-center justify-center font-bold text-[11px] text-white shadow-sm border border-[#fef08a]/40">
            A
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-white tracking-tight">
              Ananya Bansal
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#fef08a] animate-pulse" />
          </div>
        </div>

        {/* Collapsed State Details */}
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-xs font-mono text-zinc-400"
          >
            <span className="text-[#721c24]">/</span>
            <span className="text-[#fef08a]">{activeSection}</span>
            {onOpenCommandPalette && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenCommandPalette();
                }}
                className="px-1.5 py-0.5 rounded bg-white/[0.05] hover:bg-white/[0.1] text-[10px] text-zinc-300 border border-white/10 hidden sm:inline-block transition-colors"
                title="Command Palette (Cmd+K)"
              >
                ⌘K
              </button>
            )}
          </motion.div>
        )}

        {/* Expanded State Menu Items */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-4 text-xs font-medium text-zinc-300"
          >
            <a
              href="#projects"
              onClick={(e) => e.stopPropagation()}
              className="hover:text-[#fef08a] transition-colors"
            >
              Works
            </a>
            <a
              href="#skills"
              onClick={(e) => e.stopPropagation()}
              className="hover:text-[#fef08a] transition-colors"
            >
              Stack
            </a>
            <a
              href="#education"
              onClick={(e) => e.stopPropagation()}
              className="hover:text-[#fef08a] transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={(e) => e.stopPropagation()}
              className="hover:text-[#fef08a] transition-colors"
            >
              Contact
            </a>

            {/* Micro divider */}
            <div className="w-[1px] h-3.5 bg-white/10 hidden sm:block" />

            {/* Quick Actions */}
            <div className="hidden sm:flex items-center gap-2">
              {onOpenCommandPalette && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenCommandPalette();
                  }}
                  title="Search & Commands (⌘K)"
                  className="p-1 text-zinc-400 hover:text-[#fef08a] transition-colors"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              )}
              {onOpenResume && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenResume();
                  }}
                  title="View Resume"
                  className="p-1 text-zinc-400 hover:text-[#fef08a] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                </button>
              )}

              {onReplayIntro && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onReplayIntro();
                  }}
                  title="Replay Intro"
                  className="p-1 text-zinc-400 hover:text-[#fef08a] transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              )}

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="GitHub"
                className="p-1 text-zinc-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="LinkedIn"
                className="p-1 text-zinc-400 hover:text-[#fef08a] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
}
