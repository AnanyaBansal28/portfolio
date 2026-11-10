"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Plus,
  Minus,
} from "lucide-react";
import { GithubIcon } from "./icons";
import { Project } from "./types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Cinematic Netflix / Apple TV Scrapbook Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl my-auto rounded-3xl bg-[#1c080d] border border-[#721c24]/70 shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header Banner */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-b from-[#721c24]/30 to-transparent border-b border-white/10">
            {/* Ambient project backlight */}
            <div
              className="absolute -top-12 -left-12 w-64 h-64 rounded-full blur-[90px] pointer-events-none opacity-40 bg-[#721c24]"
            />

            <div className="flex items-start justify-between gap-4 relative z-10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-mono font-medium bg-white/[0.05] border border-white/10 text-zinc-300">
                    {project.category}
                  </span>
                  <span
                    className={`px-3 py-0.5 rounded-full text-[11px] font-mono font-medium ${
                      project.status === "Live Application"
                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                        : project.status === "In Active Development"
                        ? "bg-[#721c24]/60 text-[#fef08a] border border-[#fef08a]/30"
                        : "bg-white/[0.03] text-zinc-400 border border-white/5"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm sm:text-base text-[#fde047] font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Overview Section */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-mono text-[#fef08a] mb-2.5">
                Overview &amp; Problem Statement
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                {project.fullOverview}
              </p>
            </div>

            {/* Interactive Feature Demo Widget */}
            <div className="rounded-3xl bg-black/50 border border-white/10 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#fef08a]" />
                  <span className="text-xs font-mono font-medium uppercase text-[#fef08a]">
                    Interactive Feature Simulation
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">
                  Live Sandbox
                </span>
              </div>

              {/* Dynamic Interactive Widget Based on Project */}
              {project.id === "piksy" && <PiksyInteractiveWidget />}
              {project.id === "mess-management" && <MessInteractiveWidget />}
              {project.id === "voice-wheelchair" && <VoiceWheelchairWidget />}
              {project.id === "minga-london" && <FashionWidget />}
              {project.id === "food-ordering" && <FoodOrderingWidget />}
            </div>

            {/* Key Features List */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-mono text-[#fef08a] mb-3">
                Key Engineering Highlights
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-black/30 border border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#fef08a] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics & Highlights */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-mono text-[#fef08a] mb-3">
                Architecture Specs &amp; Benchmarks
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-black/40 border border-white/10 text-center"
                  >
                    <div className="text-xl sm:text-2xl font-black text-[#fef08a]">
                      {h.value}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                      {h.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-mono text-[#fef08a] mb-3">
                Technologies &amp; Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer / External Actions */}
          <div className="p-4 sm:p-6 bg-black/60 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-mono text-zinc-400">
              Scrapbook Case Study • Ananya Bansal Portfolio
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-200 transition-all cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#fef08a] hover:bg-[#fde047] text-zinc-950 shadow-md transition-all cursor-pointer"
                >
                  <span>Launch Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.id === "piksy" && (
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono bg-[#721c24]/50 border border-[#fef08a]/30 text-[#fef08a]">
                  <span className="w-2 h-2 rounded-full bg-[#fef08a] animate-pulse" />
                  <span>MVP In Active Development</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// -------------------------------------------------------------------------------------------------
// Interactive Simulation Widgets
// -------------------------------------------------------------------------------------------------

function PiksyInteractiveWidget() {
  const [items, setItems] = useState([
    { id: 1, name: "Amul Taaza Milk 1L", blinkit: 34, zepto: 36, instamart: 35, selected: true },
    { id: 2, name: "Brown Bread 400g", blinkit: 55, zepto: 50, instamart: 52, selected: true },
    { id: 3, name: "Organic Bananas 500g", blinkit: 42, zepto: 45, instamart: 38, selected: true },
    { id: 4, name: "Cold Brew Coffee 250ml", blinkit: 110, zepto: 95, instamart: 105, selected: false },
    { id: 5, name: "Nut Butter 350g", blinkit: 180, zepto: 195, instamart: 175, selected: false },
  ]);

  const toggleItem = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const selectedItems = items.filter((i) => i.selected);

  const totalBlinkit = selectedItems.reduce((acc, i) => acc + i.blinkit, 0);
  const totalZepto = selectedItems.reduce((acc, i) => acc + i.zepto, 0);
  const totalInstamart = selectedItems.reduce((acc, i) => acc + i.instamart, 0);

  const optimalSplitSum = selectedItems.reduce(
    (acc, i) => acc + Math.min(i.blinkit, i.zepto, i.instamart),
    0
  );

  const bestSinglePlatform = Math.min(totalBlinkit, totalZepto, totalInstamart);
  const savedAmount = Math.max(0, bestSinglePlatform - optimalSplitSum);
  const percentSaved =
    bestSinglePlatform > 0 ? Math.round((savedAmount / bestSinglePlatform) * 100) : 0;

  return (
    <div className="space-y-4">
      <div className="text-xs text-zinc-400 font-light">
        Toggle items to see PIKSY&apos;s real-time multi-platform price arbitrage:
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
              item.selected
                ? "bg-[#721c24]/50 border-[#fef08a]/50 text-[#fef08a]"
                : "bg-white/[0.03] border-white/5 text-zinc-400 hover:text-white"
            }`}
          >
            {item.selected ? (
              <Minus className="w-3 h-3 text-[#fef08a]" />
            ) : (
              <Plus className="w-3 h-3" />
            )}
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
        <div className="p-3 rounded-2xl bg-black/40 border border-white/5 text-center">
          <span className="text-[10px] font-mono text-zinc-400">Blinkit Cart</span>
          <div className="text-base font-bold text-zinc-300 mt-0.5">₹{totalBlinkit}</div>
        </div>
        <div className="p-3 rounded-2xl bg-black/40 border border-white/5 text-center">
          <span className="text-[10px] font-mono text-zinc-400">Zepto Cart</span>
          <div className="text-base font-bold text-zinc-300 mt-0.5">₹{totalZepto}</div>
        </div>
        <div className="p-3 rounded-2xl bg-black/40 border border-white/5 text-center">
          <span className="text-[10px] font-mono text-zinc-400">Instamart Cart</span>
          <div className="text-base font-bold text-zinc-300 mt-0.5">₹{totalInstamart}</div>
        </div>
        <div className="p-3 rounded-2xl bg-[#721c24]/40 border border-[#fef08a]/50 text-center">
          <span className="text-[10px] font-mono text-[#fef08a] font-semibold">PIKSY Split</span>
          <div className="text-base font-black text-white mt-0.5">₹{optimalSplitSum}</div>
        </div>
      </div>

      <div className="p-3.5 rounded-2xl bg-[#721c24]/30 border border-[#fef08a]/30 flex items-center justify-between text-xs font-mono text-[#fef08a]">
        <span>Cart Optimization Result:</span>
        <span className="font-bold">
          Save ₹{savedAmount} ({percentSaved}%) with PIKSY Split
        </span>
      </div>
    </div>
  );
}

function MessInteractiveWidget() {
  const [selectedMeals, setSelectedMeals] = useState({
    breakfast: true,
    lunch: true,
    dinner: false,
  });

  const mealPrices = {
    breakfast: 40,
    lunch: 75,
    dinner: 75,
  };

  const toggleMeal = (meal: "breakfast" | "lunch" | "dinner") => {
    setSelectedMeals((prev) => ({ ...prev, [meal]: !prev[meal] }));
  };

  const dailySelected =
    (selectedMeals.breakfast ? mealPrices.breakfast : 0) +
    (selectedMeals.lunch ? mealPrices.lunch : 0) +
    (selectedMeals.dinner ? mealPrices.dinner : 0);

  const flatDailyMessFee = 190;
  const monthlySelected = dailySelected * 30;
  const monthlyFlat = flatDailyMessFee * 30;
  const monthlySavings = monthlyFlat - monthlySelected;

  return (
    <div className="space-y-4">
      <div className="text-xs text-zinc-400 font-light">
        Simulate a student&apos;s meal booking with dynamic Pay-As-You-Eat opt-ins:
      </div>

      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => toggleMeal("breakfast")}
          className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
            selectedMeals.breakfast
              ? "bg-[#721c24]/40 border-[#fef08a]/40 text-[#fef08a]"
              : "bg-white/[0.02] border-white/5 text-zinc-500"
          }`}
        >
          <div className="text-xs font-mono">Breakfast</div>
          <div className="text-sm font-bold mt-1">₹40</div>
          <div className="text-[10px] mt-0.5">
            {selectedMeals.breakfast ? "✓ Opted In" : "Skipped"}
          </div>
        </button>

        <button
          onClick={() => toggleMeal("lunch")}
          className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
            selectedMeals.lunch
              ? "bg-[#721c24]/40 border-[#fef08a]/40 text-[#fef08a]"
              : "bg-white/[0.02] border-white/5 text-zinc-500"
          }`}
        >
          <div className="text-xs font-mono">Lunch</div>
          <div className="text-sm font-bold mt-1">₹75</div>
          <div className="text-[10px] mt-0.5">
            {selectedMeals.lunch ? "✓ Opted In" : "Skipped"}
          </div>
        </button>

        <button
          onClick={() => toggleMeal("dinner")}
          className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
            selectedMeals.dinner
              ? "bg-[#721c24]/40 border-[#fef08a]/40 text-[#fef08a]"
              : "bg-white/[0.02] border-white/5 text-zinc-500"
          }`}
        >
          <div className="text-xs font-mono">Dinner</div>
          <div className="text-sm font-bold mt-1">₹75</div>
          <div className="text-[10px] mt-0.5">
            {selectedMeals.dinner ? "✓ Opted In" : "Skipped"}
          </div>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-1">
        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 text-center">
          <div className="text-[10px] font-mono text-zinc-400">Traditional Mess Fee</div>
          <div className="text-base font-bold text-zinc-400 mt-1">₹{monthlyFlat} / mo</div>
          <div className="text-[10px] text-zinc-500">Flat billing regardless of attendance</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#721c24]/30 border border-[#fef08a]/40 text-center">
          <div className="text-[10px] font-mono text-[#fef08a]">UMess Flexible Bill</div>
          <div className="text-base font-bold text-white mt-1">₹{monthlySelected} / mo</div>
          <div className="text-[10px] text-[#fef08a] font-semibold">
            Saves ₹{monthlySavings} / mo!
          </div>
        </div>
      </div>
    </div>
  );
}

function VoiceWheelchairWidget() {
  const [command, setCommand] = useState("FORWARD");
  const [sensorDistance, setSensorDistance] = useState(85);

  const simulateCommand = (cmd: string, dist: number) => {
    setCommand(cmd);
    setSensorDistance(dist);
  };

  return (
    <div className="space-y-4">
      <div className="text-xs text-zinc-400 font-light">
        Voice command acoustic parser &amp; ultrasonic safety override:
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => simulateCommand("FORWARD", 92)}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono border cursor-pointer ${
            command === "FORWARD"
              ? "bg-[#721c24]/50 border-[#fef08a]/40 text-[#fef08a]"
              : "bg-white/[0.03] border-white/5 text-zinc-400"
          }`}
        >
          &quot;Go Forward&quot;
        </button>
        <button
          onClick={() => simulateCommand("TURN_LEFT", 68)}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono border cursor-pointer ${
            command === "TURN_LEFT"
              ? "bg-[#721c24]/50 border-[#fef08a]/40 text-[#fef08a]"
              : "bg-white/[0.03] border-white/5 text-zinc-400"
          }`}
        >
          &quot;Pivot Left&quot;
        </button>
        <button
          onClick={() => simulateCommand("OBSTACLE_STOP", 18)}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono border cursor-pointer ${
            command === "OBSTACLE_STOP"
              ? "bg-rose-500/20 border-rose-500/40 text-rose-300"
              : "bg-white/[0.03] border-white/5 text-zinc-400"
          }`}
        >
          Simulate Obstacle (18cm)
        </button>
      </div>

      <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono">
        <div>
          <span className="text-zinc-500">Directive: </span>
          <span className="text-white font-bold">{command}</span>
        </div>
        <div>
          <span className="text-zinc-500">Sensor: </span>
          <span
            className={
              sensorDistance < 30
                ? "text-rose-400 font-bold animate-pulse"
                : "text-[#fef08a] font-bold"
            }
          >
            {sensorDistance} cm {sensorDistance < 30 ? "(OVERRIDE STOP)" : "(CLEAR)"}
          </span>
        </div>
      </div>
    </div>
  );
}

function FashionWidget() {
  const [activeSize, setActiveSize] = useState("M");
  const [activeColor, setActiveColor] = useState("Velvet Wine");

  return (
    <div className="space-y-4">
      <div className="text-xs text-zinc-400 font-light">
        Editorial catalog lookbook &amp; color selector:
      </div>

      <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-[#fef08a]">
            Vintage Cyber Grunge Knit
          </span>
          <div className="text-lg font-bold text-white mt-0.5">£48.00</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-zinc-400">Color:</span>
            {["Velvet Wine", "Obsidian Black", "Butter Yellow"].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActiveColor(c)}
                className={`text-[11px] px-2 py-0.5 rounded-md border transition-all cursor-pointer ${
                  activeColor === c
                    ? "border-[#fef08a] text-[#fef08a] font-medium bg-[#721c24]/40"
                    : "border-white/5 text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`w-8 h-8 rounded-xl text-xs font-mono border flex items-center justify-center transition-all cursor-pointer ${
                activeSize === size
                  ? "bg-[#fef08a] text-zinc-950 font-bold border-[#fef08a]"
                  : "bg-white/[0.04] border-white/10 text-zinc-400 hover:text-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function FoodOrderingWidget() {
  const [dishes, setDishes] = useState([
    { name: "Paneer Tikka Roll", qty: 2, price: 160 },
    { name: "Classic Mint Mojito", qty: 1, price: 90 },
  ]);

  const updateQty = (idx: number, delta: number) => {
    setDishes((prev) =>
      prev
        .map((d, i) => (i === idx ? { ...d, qty: Math.max(0, d.qty + delta) } : d))
        .filter((d) => d.qty > 0)
    );
  };

  const total = dishes.reduce((acc, d) => acc + d.qty * d.price, 0);

  return (
    <div className="space-y-3">
      <div className="text-xs text-zinc-400 font-light">
        Live food basket calculation and item management:
      </div>

      <div className="space-y-2">
        {dishes.map((dish, idx) => (
          <div
            key={dish.name}
            className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 text-xs"
          >
            <span className="text-zinc-200 font-medium">{dish.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-zinc-400">₹{dish.price * dish.qty}</span>
              <div className="flex items-center border border-white/10 rounded-lg">
                <button
                  onClick={() => updateQty(idx, -1)}
                  className="px-2 py-0.5 hover:bg-white/10 text-zinc-400 cursor-pointer"
                >
                  -
                </button>
                <span className="px-2 text-white font-mono">{dish.qty}</span>
                <button
                  onClick={() => updateQty(idx, 1)}
                  className="px-2 py-0.5 hover:bg-white/10 text-zinc-400 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-white/10 text-xs font-mono">
        <span className="text-zinc-400">Order Total (Taxes Included):</span>
        <span className="text-[#fef08a] font-bold text-sm">₹{total}</span>
      </div>
    </div>
  );
}
