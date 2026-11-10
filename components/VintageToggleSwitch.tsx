"use client";

import React from "react";
import { motion } from "framer-motion";

interface VintageToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  className?: string;
}

export default function VintageToggleSwitch({
  isOn,
  onToggle,
  className = "",
}: VintageToggleSwitchProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      title={isOn ? "Stage Lights: ON (Click to turn off)" : "Stage Lights: OFF (Click to ignite)"}
      aria-label="Vintage Stage Lights Toggle"
      className={`group relative p-2.5 rounded-xl bg-gradient-to-b from-[#2e2622] via-[#1c1714] to-[#120f0d] border border-[#d4af37]/50 shadow-[0_14px_35px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.15)] cursor-pointer select-none transition-all duration-300 ${className}`}
    >
      {/* 4 Precision Slotted Brass Screw Heads in Corners */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 72 88"
        fill="none"
      >
        {/* Top Left Screw */}
        <circle cx="8" cy="8" r="3" fill="#ca8a04" stroke="#78350f" strokeWidth="0.8" />
        <line x1="6" y1="8" x2="10" y2="8" stroke="#3b1f0c" strokeWidth="0.8" />

        {/* Top Right Screw */}
        <circle cx="64" cy="8" r="3" fill="#ca8a04" stroke="#78350f" strokeWidth="0.8" />
        <line x1="62" y1="8" x2="66" y2="8" stroke="#3b1f0c" strokeWidth="0.8" />

        {/* Bottom Left Screw */}
        <circle cx="8" cy="80" r="3" fill="#ca8a04" stroke="#78350f" strokeWidth="0.8" />
        <line x1="6.5" y1="78.5" x2="9.5" y2="81.5" stroke="#3b1f0c" strokeWidth="0.8" />

        {/* Bottom Right Screw */}
        <circle cx="64" cy="80" r="3" fill="#ca8a04" stroke="#78350f" strokeWidth="0.8" />
        <line x1="62.5" y1="81.5" x2="65.5" y2="78.5" stroke="#3b1f0c" strokeWidth="0.8" />
      </svg>

      {/* Engraved Vector Brand / Label */}
      <div className="flex items-center justify-center gap-1 mb-1.5 px-1">
        <span className="w-1 h-1 rounded-full bg-[#d4af37]/60" />
        <span className="text-[9px] font-mono font-extrabold tracking-widest text-[#fef08a] uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
          LIGHTS
        </span>
        <span className="w-1 h-1 rounded-full bg-[#d4af37]/60" />
      </div>

      {/* Circular Knurled Brass Bezel Collar */}
      <div className="relative w-12 h-12 mx-auto rounded-full border-2 border-[#ca8a04] bg-gradient-to-b from-[#1e1713] to-[#0c0907] flex items-center justify-center shadow-[inset_0_3px_8px_rgba(0,0,0,0.95)]">
        {/* Warm Backlight Glow when ON */}
        <div
          className={`absolute inset-0 rounded-full bg-[#fde047]/25 blur-sm transition-opacity duration-300 ${
            isOn ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Vector Knurl Teeth Marks (Crisp SVG) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
          viewBox="0 0 48 48"
        >
          <circle cx="24" cy="24" r="21" stroke="#d4af37" strokeWidth="1" strokeDasharray="2 3" fill="none" />
        </svg>

        {/* Socket Ring & Toggle Lever */}
        <div className="relative w-5 h-5 rounded-full bg-[#0a0807] border border-[#d4af37]/60 shadow-inner flex items-center justify-center">
          <motion.div
            initial={false}
            animate={{
              rotate: isOn ? -24 : 24,
              y: isOn ? -5 : 5,
            }}
            transition={{
              type: "spring",
              stiffness: 600,
              damping: 25,
            }}
            className="origin-bottom flex flex-col items-center pointer-events-none"
          >
            {/* Polished Brass Dolly Ball Tip */}
            <div
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                isOn
                  ? "bg-gradient-to-br from-[#ffffff] via-[#fde047] to-[#ca8a04] shadow-[0_0_12px_rgba(254,240,138,0.9)]"
                  : "bg-gradient-to-br from-[#9ca3af] via-[#4b5563] to-[#1f2937] shadow-none"
              }`}
            />
            {/* Lever Neck */}
            <div
              className={`w-1.5 h-3.5 transition-colors duration-300 ${
                isOn
                  ? "bg-gradient-to-b from-[#ca8a04] to-[#78350f]"
                  : "bg-gradient-to-b from-[#4b5563] to-[#111827]"
              }`}
            />
          </motion.div>
        </div>
      </div>

      {/* Jewel Pilot Lamp Indicator */}
      <div className="mt-1.5 flex items-center justify-center gap-1.5">
        <span
          className={`w-2 h-2 rounded-full border border-black/40 transition-all duration-300 ${
            isOn
              ? "bg-[#fde047] shadow-[0_0_8px_#fde047,0_0_14px_rgba(254,240,138,0.8)]"
              : "bg-[#721c24]/80 shadow-none"
          }`}
        />
        <span
          className={`text-[9px] font-mono font-bold tracking-wider transition-colors duration-300 ${
            isOn ? "text-[#fef08a]" : "text-zinc-500"
          }`}
        >
          {isOn ? "ON" : "OFF"}
        </span>
      </div>
    </motion.button>
  );
}

