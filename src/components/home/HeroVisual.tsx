"use client";

import React, { useState } from "react";
import { Server, Database, Layers, Cpu, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroVisual() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const pipelineNodes = [
    {
      id: "client",
      label: "Client / CRON",
      subtext: "HTTP / Triggers",
      icon: Globe,
      color: "text-slate-300",
      border: "border-slate-700/80",
      bg: "bg-slate-900/90",
      glow: "group-hover:border-slate-500",
      desc: "Dispatches tasks & CRON schedules",
    },
    {
      id: "api",
      label: "REST API",
      subtext: "Express & TypeScript",
      icon: Server,
      color: "text-sky-400",
      border: "border-sky-500/30",
      bg: "bg-sky-950/20",
      glow: "group-hover:border-sky-400",
      desc: "Validates requests & manages endpoints",
    },
    {
      id: "queue",
      label: "BullMQ Queue",
      subtext: "Redis In-Memory",
      icon: Layers,
      color: "text-rose-400",
      border: "border-rose-500/30",
      bg: "bg-rose-950/20",
      glow: "group-hover:border-rose-400",
      desc: "Buffers jobs & task queues in Redis",
    },
    {
      id: "workers",
      label: "Workers",
      subtext: "Worker Coordination",
      icon: Cpu,
      color: "text-amber-400",
      border: "border-amber-500/30",
      bg: "bg-amber-950/20",
      glow: "group-hover:border-amber-400",
      desc: "Executes background jobs & retries",
    },
    {
      id: "db",
      label: "PostgreSQL",
      subtext: "PostgreSQL",
      icon: Database,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-950/20",
      glow: "group-hover:border-emerald-400",
      desc: "Stores job and execution data",
    },
  ];

  return (
    <div className="w-full my-4 rounded-2xl border border-white/[0.08] bg-[#0b0f19]/70 backdrop-blur-xl p-4 sm:p-5 shadow-2xl relative overflow-hidden">
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
          <span className="font-mono text-xs text-slate-300 font-semibold tracking-wide">
            SYSTEM ARCHITECTURE FLOW
          </span>
          <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">
            Distributed Job Pipeline
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            REST API
          </span>
          <span>&middot;</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Worker Coordination
          </span>
        </div>
      </div>

      {/* Interactive System Pipeline Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 relative items-stretch">
        {pipelineNodes.map((node, index) => {
          const Icon = node.icon;
          const isLast = index === pipelineNodes.length - 1;
          const isSelected = activeStep === index;

          return (
            <div key={node.id} className="relative group">
              <div
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className={`h-full rounded-xl border p-3 flex flex-col justify-between transition-all duration-300 cursor-default ${
                  node.bg
                } ${node.border} ${node.glow} ${
                  isSelected ? "scale-[1.02] ring-1 ring-white/20 shadow-lg" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`h-7 w-7 rounded-lg flex items-center justify-center bg-black/40 border border-white/10 ${node.color}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-semibold text-xs text-white leading-snug">
                    {node.label}
                  </h3>
                  <p className="font-mono text-[10px] text-slate-400 mt-0.5">
                    {node.subtext}
                  </p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-white/[0.06]">
                  <p className="text-[10px] text-slate-400 leading-snug">
                    {node.desc}
                  </p>
                </div>
              </div>

              {/* Desktop Arrow Indicator */}
              {!isLast && (
                <div className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <div className="h-4 w-4 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 shadow-sm">
                    <ArrowRight className="h-2.5 w-2.5 text-sky-400/80" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Technical Telemetry */}
      <div className="mt-3.5 pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            Job Retries
          </span>
          <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
            Execution Tracking
          </span>
        </div>
        <div className="text-[11px] text-slate-400">
          Job Scheduling &bull; Retries &bull; Execution Tracking &bull; Worker Coordination
        </div>
      </div>
    </div>
  );
}
