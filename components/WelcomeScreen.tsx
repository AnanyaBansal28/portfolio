"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WELCOME_GREETINGS } from "./data";

interface WelcomeScreenProps {
  onComplete: () => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [index, setIndex] = useState(0);
  const [isExpandingOut, setIsExpandingOut] = useState(false);

  useEffect(() => {
    // Fast and snappy: 0.5s to 0.6s per word (550ms)
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < WELCOME_GREETINGS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsExpandingOut(true);
            setTimeout(() => {
              onComplete();
            }, 600);
          }, 350);
          return prev;
        }
      });
    }, 550);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsExpandingOut(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  const currentGreeting = WELCOME_GREETINGS[index];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: isExpandingOut ? 0 : 1,
        scale: isExpandingOut ? 1.15 : 1,
        filter: isExpandingOut ? "blur(30px)" : "blur(0px)",
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 pointer-events-auto flex items-center justify-center bg-[#0a090c] select-none overflow-hidden"
    >
      {/* Deep Burgundy & Wine Glow in Background */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#721c24]/35 via-[#4a0e17]/40 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[#fef08a]/[0.06] blur-[120px] pointer-events-none" />

      {/* Pure Bold Kinetic Typography - STRICTLY NO pagination dots, dashes, or sub-labels */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <div className="h-40 sm:h-56 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGreeting.text}
              initial={{
                opacity: 0,
                y: 25,
                filter: "blur(16px)",
                scale: 0.88,
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -25,
                filter: "blur(16px)",
                scale: 1.08,
              }}
              transition={{
                type: "spring",
                stiffness: 450,
                damping: 28,
                duration: 0.35,
              }}
              className="text-center"
            >
              <h1
                className={`text-6xl sm:text-8xl md:text-9xl font-black tracking-tight bg-gradient-to-r ${currentGreeting.gradient} bg-clip-text text-transparent drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]`}
              >
                {currentGreeting.text}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Discreet Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 text-xs font-mono tracking-widest uppercase text-zinc-400 hover:text-[#fef08a] px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all cursor-pointer shadow-lg"
      >
        Skip
      </button>
    </motion.div>
  );
}
