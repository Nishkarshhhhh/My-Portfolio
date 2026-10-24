"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Github, Server, Layers, Cpu, Database, CheckCircle2, Terminal } from "lucide-react";
import { Project } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface FlagshipProjectCardProps {
  project: Project;
}

export function FlagshipProjectCard({ project }: FlagshipProjectCardProps) {
  return (
    <div className="group relative rounded-2xl sm:rounded-3xl border border-sky-500/30 bg-gradient-to-br from-[#0e1628]/90 via-[#0b0f19] to-[#070b12] shadow-2xl shadow-sky-950/30 overflow-hidden transition-all duration-300 hover:border-sky-400/60">
      {/* Top Gradient Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-400 via-indigo-500 to-sky-400" />

      <div className="p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Project Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent" size="sm" className="font-mono uppercase text-[10px] tracking-wider">
                Flagship Project
              </Badge>
              <Badge variant="default" size="sm" className="font-mono text-[10px]">
                {project.category}
              </Badge>
              <Badge variant="success" size="sm" className="font-mono text-[10px]">
                50/50 Tests Passing
              </Badge>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                <Link href={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>
              <p className="text-sm sm:text-base font-mono text-sky-400">
                {project.subtitle}
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.summary}
            </p>

            {/* Core Implementation Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>12 REST API endpoints with validation & rate limiting</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>BullMQ & Redis queues with up to 3 automatic retries</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>2 worker services with 5 concurrent jobs per worker</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>PostgreSQL execution history managed via Prisma</span>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-200 border border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Button
                href={`/projects/${project.slug}`}
                variant="primary"
                size="md"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                View Case Study
              </Button>

              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  external
                  variant="secondary"
                  size="md"
                  icon={<Github className="h-4 w-4" />}
                >
                  View on GitHub
                </Button>
              )}
            </div>
          </div>

          {/* Right Column: Architecture & Telemetry Specs */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-slate-950/70 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-sky-400" />
                  <span className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wide">
                    System Architecture
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/30">
                  Docker Compose
                </span>
              </div>

              {/* Architecture Node Sequence */}
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-sky-500/20">
                  <div className="flex items-center gap-2 text-sky-300">
                    <Server className="h-4 w-4" />
                    <span>REST API Layer</span>
                  </div>
                  <span className="text-[10px] text-slate-400">12 Endpoints</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-rose-500/20">
                  <div className="flex items-center gap-2 text-rose-300">
                    <Layers className="h-4 w-4" />
                    <span>BullMQ & Redis Queue</span>
                  </div>
                  <span className="text-[10px] text-slate-400">CRON + Priority</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-amber-500/20">
                  <div className="flex items-center gap-2 text-amber-300">
                    <Cpu className="h-4 w-4" />
                    <span>2x Worker Services</span>
                  </div>
                  <span className="text-[10px] text-slate-400">5 Jobs / Worker</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-emerald-300">
                    <Database className="h-4 w-4" />
                    <span>PostgreSQL & Prisma</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Run Logging</span>
                </div>
              </div>

              {/* Verified Specs Grid */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06] text-center font-mono">
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-sm font-bold text-white">50/50</div>
                  <div className="text-[10px] text-slate-400">Passing Tests</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-sm font-bold text-sky-400">3 Retries</div>
                  <div className="text-[10px] text-slate-400">Auto Backoff</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
