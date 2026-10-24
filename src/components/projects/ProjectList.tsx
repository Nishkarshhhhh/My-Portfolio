"use client";

import React, { useState } from "react";
import { Project } from "@/data/portfolio";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FlagshipProjectCard } from "@/components/projects/FlagshipProjectCard";
import { Terminal, Server, Sparkles, Cpu } from "lucide-react";

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Distributed Systems",
    "AI & Machine Learning",
    "Full-Stack Web",
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const flagship = projects.find((p) => p.id === "distributed-job-scheduler");

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-white/[0.06]">
        {categories.map((cat) => {
          const count = cat === "All"
            ? projects.length
            : projects.filter((p) => p.category === cat).length;
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm shadow-sky-500/10 font-semibold"
                  : "bg-slate-900/60 text-slate-400 border border-white/[0.08] hover:text-white hover:bg-slate-800"
              }`}
            >
              <span>{cat}</span>
              <span className="ml-1.5 opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Featured Flagship Treatment when viewing 'All' or 'Distributed Systems' */}
      {(activeCategory === "All" || activeCategory === "Distributed Systems") && flagship && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span className="uppercase tracking-wider font-semibold text-slate-300">Featured System</span>
          </div>
          <FlagshipProjectCard project={flagship} />
        </div>
      )}

      {/* Grid of Other / Filtered Projects */}
      <div className="space-y-3">
        {(activeCategory === "All" || activeCategory === "Distributed Systems") && (
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-4">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            <span className="uppercase tracking-wider font-semibold text-slate-300">
              {activeCategory === "All" ? "Complementary Projects & Research" : "Systems Catalog"}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeCategory === "All"
            ? projects.filter((p) => p.id !== "distributed-job-scheduler")
            : filteredProjects.filter((p) => activeCategory === "Distributed Systems" ? p.id !== "distributed-job-scheduler" : true)
          ).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Architecture & Engineering Standards Card */}
      <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0c101b]/70 backdrop-blur-md space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Terminal className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Engineering &amp; Architectural Focus</h3>
            <p className="text-xs text-slate-400">Core architectural patterns implemented across these repositories</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.05] space-y-1.5">
            <div className="text-xs font-mono text-sky-300 font-semibold flex items-center gap-1.5">
              <Server className="h-3.5 w-3.5" />
              <span>Reliable Backend Systems</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              BullMQ queues, rate limiting, and exponential retry strategies designed to avoid single points of failure.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.05] space-y-1.5">
            <div className="text-xs font-mono text-purple-300 font-semibold flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Applied Machine Learning</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Text classification with CountVectorizer and time-series predictive modeling evaluated against realistic datasets.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.05] space-y-1.5">
            <div className="text-xs font-mono text-emerald-300 font-semibold flex items-center gap-1.5">
              <Cpu className="h-3.5 w-3.5" />
              <span>Containerized Environments</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Multi-service container orchestration with Docker Compose ensuring reproducible builds and testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
