"use client";

import React, { useState } from "react";
import {
  Home,
  FolderGit2,
  Cpu,
  GraduationCap,
  Mail,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

interface FloatingDockProps {
  onReplayIntro?: () => void;
}

export default function FloatingDock({ onReplayIntro }: FloatingDockProps) {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const dockItems = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "Projects", href: "#projects", icon: FolderGit2 },
    { label: "Skills", href: "#skills", icon: Cpu },
    { label: "Education", href: "#education", icon: GraduationCap },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  const actionItems = [
    {
      label: "Replay Intro",
      onClick: onReplayIntro,
      icon: Sparkles,
      color: "text-amber-400 hover:text-amber-300",
    },
    {
      label: "GitHub",
      href: "https://github.com/ananya-dev",
      icon: GithubIcon,
      external: true,
      color: "text-zinc-300 hover:text-white",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ananya-dev",
      icon: LinkedinIcon,
      external: true,
      color: "text-cyan-400 hover:text-cyan-300",
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-1.5 p-2 rounded-2xl bg-[#121217]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
        {/* Navigation items */}
        {dockItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveTooltip(item.label)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <a
                href={item.href}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all group active:scale-95"
                aria-label={item.label}
              >
                <Icon className="w-4 h-4 transition-transform group-hover:scale-115" />
              </a>

              {/* Tooltip */}
              {activeTooltip === item.label && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-zinc-800 border border-white/10 text-[11px] font-mono text-zinc-200 whitespace-nowrap shadow-xl pointer-events-none animate-in fade-in duration-150">
                  {item.label}
                </div>
              )}
            </div>
          );
        })}

        {/* Divider */}
        <div className="w-[1px] h-6 bg-white/10 mx-1" />

        {/* Actions & Socials */}
        {actionItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveTooltip(item.label)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/[0.08] transition-all group active:scale-95 ${item.color}`}
                  aria-label={item.label}
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-115" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={item.onClick}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/[0.08] transition-all cursor-pointer group active:scale-95 ${item.color}`}
                  aria-label={item.label}
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-115" />
                </button>
              )}

              {/* Tooltip */}
              {activeTooltip === item.label && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-zinc-800 border border-white/10 text-[11px] font-mono text-zinc-200 whitespace-nowrap shadow-xl pointer-events-none animate-in fade-in duration-150">
                  {item.label}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

