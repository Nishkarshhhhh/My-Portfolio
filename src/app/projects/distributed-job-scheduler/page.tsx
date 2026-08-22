import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Github, ArrowLeft, CheckCircle2, Server, Terminal, Database, Clock } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";

export const metadata = {
  title: "Distributed Job Scheduler | Nishkarsh Varshney",
  description:
    "A distributed job scheduling platform with REST APIs, CRON scheduling, job queues, retries, execution tracking, and worker coordination using BullMQ, Redis, PostgreSQL, Prisma, and Docker.",
};

export default function DistributedJobSchedulerPage() {
  const project = PROJECTS.find((p) => p.slug === "distributed-job-scheduler");

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12">
      {/* Back Navigation */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to all projects</span>
        </Link>
      </div>

      {/* Project Header */}
      <div className="space-y-5 border-b border-white/[0.08] pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent" size="md">
            Flagship Project
          </Badge>
          <Badge variant="default" size="md">
            Distributed Systems
          </Badge>
          <Badge variant="success" size="md">
            Docker Compose
          </Badge>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-sky-400 font-mono">
          {project.subtitle}
        </p>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-3 py-1 rounded-md bg-slate-900/90 text-slate-200 border border-slate-700/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              external
              variant="primary"
              size="md"
              icon={<Github className="h-4 w-4" />}
            >
              View on GitHub
            </Button>
          )}
          <Button
            href="/contact"
            variant="outline"
            size="md"
          >
            Discuss Project
          </Button>
        </div>
      </div>

      {/* Interactive System Architecture Section */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            System Architecture
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Client / CRON &rarr; REST API &rarr; BullMQ Queue + Redis &rarr; Workers &rarr; PostgreSQL
          </p>
        </div>

        <ArchitectureDiagram />
      </section>

      {/* Case Study: Problem & What I Built */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0c101b]/70 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            Problem
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0c101b]/70 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            What I Built
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.whatWasBuilt}
          </p>
        </div>
      </div>

      {/* Technical Approach */}
      {project.technicalApproach && (
        <section className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-slate-950/70 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Terminal className="h-4 w-4 text-sky-400" />
            Technical Approach
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {project.technicalApproach.map((item, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 bg-slate-900/50 p-3 rounded-lg border border-white/[0.04]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Key Features Grid */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {project.keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-white/[0.08] bg-[#0c101b]/70 hover:border-slate-600 transition-colors space-y-2"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                <h3 className="text-sm font-bold text-white">{feat.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Results & Verification */}
      {project.resultsOrMetrics && (
        <section className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0c101b]/70 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            Results & Verification
          </h2>

          <ul className="space-y-2.5 pt-1">
            {project.resultsOrMetrics.map((res, idx) => (
              <li
                key={idx}
                className="text-sm text-slate-300 flex items-start gap-2.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
