"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StageSpotlights() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden select-none">
      {/* Left Spotlight Assembly: Ceiling Mount + Inward-Angled Lamp (35°) & Conical Beam */}
      <div className="absolute top-0 left-[4%] sm:left-[8%] md:left-[12%] pointer-events-none select-none scale-75 origin-top md:scale-100">
        {/* Fixed Ceiling Bracket (Flat against top border) */}
        <div className="w-12 h-2.5 bg-[#27272a] rounded-b border-b border-zinc-600 mx-auto" />
        <div className="w-1.5 h-3 bg-zinc-500 mx-auto -mt-0.5" />

        {/* Swiveling Lamp Head + Conical Beam Directly Rotated 35deg Inward */}
        <motion.div
          animate={{
            rotate: [33, 37, 35, 33],
            y: [0, 3, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6.5,
            ease: "easeInOut",
          }}
          style={{
            transform: "rotate(35deg)",
            transformOrigin: "32px 6px",
          }}
          className="relative -mt-1 origin-top"
        >
          {/* Canister Fixture Head physically facing center avatar */}
          <svg
            width="64"
            height="50"
            viewBox="0 0 64 50"
            fill="none"
            className="drop-shadow-2xl"
          >
            {/* Swivel Pivot Joint */}
            <circle cx="32" cy="6" r="3.5" fill="#ca8a04" stroke="#78350f" strokeWidth="1" />
            {/* Canister Body */}
            <path
              d="M 16 8 L 48 8 L 54 32 L 10 32 Z"
              fill="#18070c"
              stroke="#ca8a04"
              strokeWidth="2"
            />
            {/* Canister heat dissipation rings */}
            <line x1="20" y1="15" x2="44" y2="15" stroke="#78350f" strokeWidth="1.2" />
            <line x1="18" y1="21" x2="46" y2="21" stroke="#78350f" strokeWidth="1.2" />
            {/* Glowing Lens Mouth */}
            <ellipse cx="32" cy="32" rx="22" ry="6.5" fill="#fef08a" opacity="0.95" />
            <ellipse cx="32" cy="32" rx="16" ry="4.5" fill="#ffffff" />
            <ellipse cx="32" cy="32" rx="9" ry="2.5" fill="#fef08a" />
          </svg>

          {/* Soft Focused Yellow Conical Spotlight Beam emitting directly from tilted lamp mouth */}
          <div className="absolute top-[32px] left-[32px] w-0 h-0 origin-top pointer-events-none">
            <div
              className="w-[230px] sm:w-[340px] md:w-[460px] h-[550px] sm:h-[750px] md:h-[1050px] -translate-x-1/2 blur-2xl sm:blur-3xl"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 0%, rgba(254, 240, 138, 0.28) 0deg, rgba(253, 224, 71, 0.15) 15deg, transparent 32deg, transparent 328deg, rgba(253, 224, 71, 0.15) 345deg, rgba(254, 240, 138, 0.28) 360deg)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 45%, transparent 90%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 45%, transparent 90%)",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Right Spotlight Assembly: Ceiling Mount + Inward-Angled Lamp (-35°) & Conical Beam */}
      <div className="absolute top-0 right-[4%] sm:right-[8%] md:right-[12%] pointer-events-none select-none scale-75 origin-top md:scale-100">
        {/* Fixed Ceiling Bracket (Flat against top border) */}
        <div className="w-12 h-2.5 bg-[#27272a] rounded-b border-b border-zinc-600 mx-auto" />
        <div className="w-1.5 h-3 bg-zinc-500 mx-auto -mt-0.5" />

        {/* Swiveling Lamp Head + Conical Beam Directly Rotated -35deg Inward */}
        <motion.div
          animate={{
            rotate: [-33, -37, -35, -33],
            y: [0, 3, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 7.2,
            ease: "easeInOut",
            delay: 0.6,
          }}
          style={{
            transform: "rotate(-35deg)",
            transformOrigin: "32px 6px",
          }}
          className="relative -mt-1 origin-top"
        >
          {/* Canister Fixture Head physically facing center avatar */}
          <svg
            width="64"
            height="50"
            viewBox="0 0 64 50"
            fill="none"
            className="drop-shadow-2xl"
          >
            {/* Swivel Pivot Joint */}
            <circle cx="32" cy="6" r="3.5" fill="#ca8a04" stroke="#78350f" strokeWidth="1" />
            {/* Canister Body */}
            <path
              d="M 16 8 L 48 8 L 54 32 L 10 32 Z"
              fill="#1c080e"
              stroke="#ca8a04"
              strokeWidth="2"
            />
            {/* Canister heat dissipation rings */}
            <line x1="20" y1="15" x2="44" y2="15" stroke="#78350f" strokeWidth="1.2" />
            <line x1="18" y1="21" x2="46" y2="21" stroke="#78350f" strokeWidth="1.2" />
            {/* Glowing Lens Mouth */}
            <ellipse cx="32" cy="32" rx="22" ry="6.5" fill="#fde047" opacity="0.95" />
            <ellipse cx="32" cy="32" rx="16" ry="4.5" fill="#ffffff" />
            <ellipse cx="32" cy="32" rx="9" ry="2.5" fill="#fef08a" />
          </svg>

          {/* Soft Focused Yellow Conical Spotlight Beam emitting directly from tilted lamp mouth */}
          <div className="absolute top-[32px] left-[32px] w-0 h-0 origin-top pointer-events-none">
            <div
              className="w-[230px] sm:w-[340px] md:w-[460px] h-[550px] sm:h-[750px] md:h-[1050px] -translate-x-1/2 blur-2xl sm:blur-3xl"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 0%, rgba(254, 240, 138, 0.28) 0deg, rgba(253, 224, 71, 0.15) 15deg, transparent 32deg, transparent 328deg, rgba(253, 224, 71, 0.15) 345deg, rgba(254, 240, 138, 0.28) 360deg)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 45%, transparent 90%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 45%, transparent 90%)",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Ambient Center Convergence Glow (Soft Backlight Halo Behind Central Avatar) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[460px] md:w-[620px] h-[320px] sm:h-[460px] md:h-[620px] pointer-events-none rounded-full blur-[60px] md:blur-[70px]"
        style={{
          background:
            "radial-gradient(circle, rgba(254, 240, 138, 0.20) 0%, rgba(114, 28, 36, 0.15) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
