"use client";

import React, { useState } from "react";
import { Server, Database, Layers, Cpu, Clock, Terminal } from "lucide-react";

export function ArchitectureDiagram() {
  const [selectedLayer, setSelectedLayer] = useState<string>("queue");

  const layers = [
    {
      id: "api",
      title: "1. REST API Layer",
      tech: "Express.js & TypeScript",
      icon: Server,
      color: "text-sky-400 border-sky-500/30 bg-sky-950/20",
      description:
        "HTTP API layer providing endpoints for job registration, recurring schedule configuration, and execution tracking queries.",
      details: [
        "Authentication and route protection",
        "Request payload validation",
        "Rate limiting middleware to prevent request abuse",
        "Structured error handling middleware across all endpoints"
      ]
    },
    {
      id: "schedule",
      title: "2. CRON & Job Scheduling",
      tech: "BullMQ Scheduler",
      icon: Clock,
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-950/20",
      description:
        "Handles CRON-based recurring scheduling and registers jobs into the queue system at specified intervals.",
      details: [
        "CRON-based repeatable job scheduling",
        "Delayed job dispatching capabilities",
        "Job registration and configuration management",
        "Direct coordination with Redis queue backend"
      ]
    },
    {
      id: "queue",
      title: "3. Queueing & Redis",
      tech: "BullMQ & Redis",
      icon: Layers,
      color: "text-rose-400 border-rose-500/30 bg-rose-950/20",
      description:
        "Redis-backed BullMQ queue system providing task buffering, queue management, and retry handling.",
      details: [
        "In-memory task storage in Redis",
        "Reliable job queues with retry support",
        "Task dispatching to available workers",
        "Job state tracking across queue lifecycle"
      ]
    },
    {
      id: "workers",
      title: "4. Workers",
      tech: "Worker Coordination",
      icon: Cpu,
      color: "text-amber-400 border-amber-500/30 bg-amber-950/20",
      description:
        "Processes background tasks independently from the API server to ensure responsive application performance.",
      details: [
        "Decoupled execution from HTTP API request handling",
        "Executes scheduled and queued workloads",
        "Handles job retry attempts on failures",
        "Reports execution status and results to the database"
      ]
    },
    {
      id: "database",
      title: "5. PostgreSQL Storage",
      tech: "PostgreSQL & Prisma ORM",
      icon: Database,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20",
      description:
        "Relational database storage for persistent job definitions, execution run records, and timestamps.",
      details: [
        "PostgreSQL-backed job and run management",
        "Prisma ORM for database queries and modeling",
        "Database migrations for schema version control",
        "Structured records of job execution history and statuses"
      ]
    }
  ];

  const currentLayer = layers.find((l) => l.id === selectedLayer) || layers[0];
  const CurrentIcon = currentLayer.icon;

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0c101b]/80 backdrop-blur-xl p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="h-4 w-4 text-sky-400" />
            System Architecture & Data Flow
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Client / CRON &rarr; REST API &rarr; BullMQ Queue + Redis &rarr; Workers &rarr; PostgreSQL
          </p>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
          <Terminal className="h-3 w-3 text-emerald-400" />
          <span>Docker Compose Service Orchestration</span>
        </div>
      </div>

      {/* Layer selector tabs */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
        {layers.map((layer) => {
          const Icon = layer.icon;
          const isSelected = layer.id === selectedLayer;
          return (
            <button
              key={layer.id}
              onClick={() => setSelectedLayer(layer.id)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? `${layer.color} ring-1 ring-white/30 shadow-md`
                  : "bg-slate-900/50 border-white/[0.06] hover:border-slate-600 hover:bg-slate-900/80"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className="h-4 w-4" />
                <span className="text-[10px] font-mono opacity-70">
                  {layer.tech.split(" ")[0]}
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">
                  {layer.title.split(". ")[1]}
                </p>
                <p className="text-[10px] font-mono text-slate-400 mt-1 truncate">
                  {layer.tech}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-dive details card */}
      <div className="p-5 rounded-xl border border-white/[0.08] bg-slate-950/60 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-900 border border-white/10 text-sky-400">
            <CurrentIcon className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white">{currentLayer.title}</h4>
            <span className="text-xs font-mono text-sky-400 font-medium">
              Technologies: {currentLayer.tech}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {currentLayer.description}
        </p>

        <div className="pt-3 border-t border-white/[0.06]">
          <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
            Supported Technical Implementation:
          </h5>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentLayer.details.map((detail, idx) => (
              <li
                key={idx}
                className="text-xs text-slate-300 flex items-start gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-white/[0.04]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
