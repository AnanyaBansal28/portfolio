"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  ArrowRight,
  FolderGit2,
  Cpu,
  GraduationCap,
  Mail,
  Sparkles,
  FileText,
  Copy,
  Check,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { PROJECTS, PERSONAL_INFO } from "./data";
import { Project } from "./types";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onReplayIntro: () => void;
  onOpenResume: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectProject,
  onReplayIntro,
  onOpenResume,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Handle global keyboard shortcut Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Actions list
  const navigationActions = [
    {
      id: "nav-hero",
      title: "Jump to Overview (Home)",
      category: "Navigation",
      icon: Command,
      perform: () => {
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-projects",
      title: "View All Projects",
      category: "Navigation",
      icon: FolderGit2,
      perform: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-skills",
      title: "Explore Technical Skills",
      category: "Navigation",
      icon: Cpu,
      perform: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-education",
      title: "Education & Chitkara University (9.0 CGPA)",
      category: "Navigation",
      icon: GraduationCap,
      perform: () => {
        document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-contact",
      title: "Get in Touch / Contact Form",
      category: "Navigation",
      icon: Mail,
      perform: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
  ];

  const projectActions = PROJECTS.map((p) => ({
    id: `project-${p.id}`,
    title: `Case Study: ${p.title}`,
    subtitle: p.subtitle,
    category: "Projects",
    icon: FolderGit2,
    perform: () => {
      onClose();
      onSelectProject(p);
    },
  }));

  const generalActions = [
    {
      id: "action-resume",
      title: "View & Download Resume / CV",
      category: "Actions",
      icon: FileText,
      perform: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: "action-replay",
      title: "Replay Multilingual Kinetic Intro",
      category: "Actions",
      icon: Sparkles,
      perform: () => {
        onClose();
        onReplayIntro();
      },
    },
    {
      id: "action-copy-email",
      title: `Copy Email (${PERSONAL_INFO.email})`,
      category: "Actions",
      icon: copiedEmail ? Check : Copy,
      perform: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        setCopiedEmail(true);
        setTimeout(() => {
          setCopiedEmail(false);
          onClose();
        }, 1000);
      },
    },
    {
      id: "action-github",
      title: "Open GitHub Profile (@AnanyaBansal28)",
      category: "Links",
      icon: GithubIcon,
      perform: () => {
        window.open(PERSONAL_INFO.github, "_blank");
        onClose();
      },
    },
    {
      id: "action-linkedin",
      title: "Open LinkedIn Profile (/in/ananya-bansal)",
      category: "Links",
      icon: LinkedinIcon,
      perform: () => {
        window.open(PERSONAL_INFO.linkedin, "_blank");
        onClose();
      },
    },
  ];

  const allActions = [...generalActions, ...projectActions, ...navigationActions];

  const filtered = allActions.filter(
    (action) =>
      action.title.toLowerCase().includes(query.toLowerCase()) ||
      action.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].perform();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Palette Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl rounded-3xl bg-[#1c080d] border border-[#721c24]/60 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10"
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-black/30">
            <Search className="w-4 h-4 text-[#fef08a] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command or search (e.g. PIKSY, resume, email)..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-zinc-500 hover:text-zinc-300 text-xs px-1.5 py-0.5 rounded cursor-pointer"
              >
                Clear
              </button>
            )}
            <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-[10px] font-mono text-zinc-400">
              ESC
            </kbd>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2.5 space-y-1">
            {filtered.length === 0 ? (
              <div className="py-8 text-center text-xs text-zinc-500 font-mono">
                No matching commands found for &quot;{query}&quot;
              </div>
            ) : (
              filtered.map((item, index) => {
                const Icon = item.icon;
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={item.perform}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-left text-xs transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#721c24]/50 text-[#fef08a] border border-[#fef08a]/40"
                        : "text-zinc-300 hover:bg-white/[0.04] border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? "bg-[#fef08a]/20 text-[#fef08a]" : "bg-white/[0.05] text-zinc-400"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium truncate">{item.title}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                      {isSelected && (
                        <ArrowRight className="w-3 h-3 text-[#fef08a]" />
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Palette Footer Tip */}
          <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <div className="flex items-center gap-2">
              <span>Navigate with</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/10 text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/10 text-[10px]">↓</kbd>
              <span>and select with</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/10 text-[10px]">↵</kbd>
            </div>
            <span className="text-[#fef08a]">Quick Palette</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
