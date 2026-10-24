"use client";

import React from "react";
import {
  Code2,
  Brain,
  Server,
  Database,
  Wrench,
  Binary,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolio";

interface CategoryTheme {
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  iconBorder: string;
  hoverBorder: string;
}

const CATEGORY_THEMES: Record<string, CategoryTheme> = {
  "Programming Languages": {
    icon: Code2,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-950/40",
    iconBorder: "border-sky-500/30",
    hoverBorder: "hover:border-sky-500/40",
  },
  "AI & Data Science": {
    icon: Brain,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-950/40",
    iconBorder: "border-purple-500/30",
    hoverBorder: "hover:border-purple-500/40",
  },
  "Backend Development": {
    icon: Server,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-950/40",
    iconBorder: "border-emerald-500/30",
    hoverBorder: "hover:border-emerald-500/40",
  },
  "Databases & Queues": {
    icon: Database,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-950/40",
    iconBorder: "border-amber-500/30",
    hoverBorder: "hover:border-amber-500/40",
  },
  "DevOps & Development Tools": {
    icon: Wrench,
    iconColor: "text-rose-400",
    iconBg: "bg-rose-950/40",
    iconBorder: "border-rose-500/30",
    hoverBorder: "hover:border-rose-500/40",
  },
  "Computer Science Fundamentals": {
    icon: Binary,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-950/40",
    iconBorder: "border-cyan-500/30",
    hoverBorder: "hover:border-cyan-500/40",
  },
};

export function SkillGroup() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {SKILL_CATEGORIES.map((cat) => {
        const theme = CATEGORY_THEMES[cat.title] || {
          icon: Code2,
          iconColor: "text-sky-400",
          iconBg: "bg-sky-950/40",
          iconBorder: "border-sky-500/30",
          hoverBorder: "hover:border-sky-500/40",
        };
        const Icon = theme.icon;

        return (
          <motion.div
            key={cat.title}
            variants={cardVariants}
            className={`group relative p-6 rounded-2xl border border-white/[0.08] bg-[#0c101b]/70 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1 flex flex-col justify-between ${theme.hoverBorder}`}
          >
            <div>
              <div className="flex items-center gap-3.5 mb-3.5">
                <div
                  className={`h-10 w-10 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0 ${theme.iconBg} ${theme.iconBorder} ${theme.iconColor}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
