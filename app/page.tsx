"use client";

import React, { useState } from "react";
import WelcomeScreen from "@/components/WelcomeScreen";
import DynamicIsland from "@/components/DynamicIsland";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ResumeModal from "@/components/ResumeModal";
import { Project } from "@/components/types";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowWelcome(true);
  };

  // Global Cmd+K / Ctrl+K keyboard shortcut
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0a090c] text-zinc-100 selection:bg-[#721c24] selection:text-[#fef08a] overflow-x-hidden">
      {/* Snappy Multilingual Kinetic Entry (Pure & Fast, 0.5s-0.6s per word) */}
      {showWelcome && (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      )}

      {/* Dynamic Island Floating Capsule (Top Center Navigation) */}
      <DynamicIsland
        onReplayIntro={handleReplayIntro}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandPalette={() => setIsCommandOpen(true)}
      />

      {/* Hero Section with Pure Die-Cut Silhouette & Scrapbook Pinned Notes */}
      <Hero />

      {/* Featured Projects: Interactive 2-Page Engineering Lab Notebook */}
      <ProjectsSection />

      {/* Technical Skills: Large Moving Ticker (Smooth, Colorful & Continuous) */}
      <Skills />

      {/* Education & Academic Honors (Chitkara University • 9.00 CGPA) */}
      <EducationSection />

      {/* Editorial Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Command Palette (Cmd+K / Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onSelectProject={(project) => setActiveProjectModal(project)}
        onReplayIntro={handleReplayIntro}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Dedicated Project Modal Triggered from Command Palette or Cards */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </main>
  );
}
