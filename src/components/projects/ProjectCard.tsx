import React from "react";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink, Clock, Server, ShoppingBag, Binary, Database, Cpu, Layers } from "lucide-react";
import { Project } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const isFlagship = project.id === "distributed-job-scheduler";

  const renderProjectVisual = () => {
    if (project.id === "distributed-job-scheduler") {
      return (
        <div className="mb-4 p-3 rounded-xl bg-slate-950/80 border border-sky-500/20 flex items-center justify-between font-mono text-[10px] text-slate-300">
          <div className="flex items-center gap-1.5 text-sky-300">
            <Server className="h-3 w-3" />
            <span>API</span>
          </div>
          <span className="text-slate-400">&rarr;</span>
          <div className="flex items-center gap-1.5 text-rose-300">
            <Layers className="h-3 w-3" />
            <span>BullMQ</span>
          </div>
          <span className="text-slate-400">&rarr;</span>
          <div className="flex items-center gap-1.5 text-amber-300">
            <Cpu className="h-3 w-3" />
            <span>Workers</span>
          </div>
          <span className="text-slate-400">&rarr;</span>
          <div className="flex items-center gap-1.5 text-emerald-300">
            <Database className="h-3 w-3" />
            <span>PostgreSQL</span>
          </div>
        </div>
      );
    }

    if (project.id === "cartzilla") {
      return (
        <div className="mb-4 p-3 rounded-xl bg-slate-950/80 border border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-slate-300">
          <div className="flex items-center gap-1.5 text-emerald-300">
            <ShoppingBag className="h-3 w-3" />
            <span>Catalog & Cart</span>
          </div>
          <span className="text-slate-400">&bull;</span>
          <span className="text-sky-300">PHP & MySQL</span>
          <span className="text-slate-400">&bull;</span>
          <span className="text-amber-300">Admin Dashboard</span>
        </div>
      );
    }

    if (project.id === "fake-news-detection") {
      return (
        <div className="mb-4 p-3 rounded-xl bg-slate-950/80 border border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-slate-300">
          <div className="flex items-center gap-1.5 text-sky-300">
            <Binary className="h-3 w-3" />
            <span>NLP Pipeline</span>
          </div>
          <span className="text-slate-400">&bull;</span>
          <span className="text-emerald-300 font-bold">~98.6% Accuracy</span>
          <span className="text-slate-400">&bull;</span>
          <span className="text-slate-400">44k+ Corpus</span>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className={`group relative rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isFlagship
          ? "bg-gradient-to-b from-[#0f172a]/70 to-[#0b0f19]/90 border-sky-500/30 hover:border-sky-400 shadow-lg shadow-sky-950/20"
          : "bg-[#0c101b]/70 border-white/[0.08] hover:border-slate-600"
      }`}
    >
      {/* Flagship Top Bar */}
      {isFlagship && (
        <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400" />
      )}

      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        {/* Card Header: Index + Category + Badges */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-white/10">
              {project.order}
            </span>
            {isFlagship && (
              <Badge variant="accent" size="sm">
                Flagship Project
              </Badge>
            )}
          </div>
          <span className="font-mono text-xs text-slate-400">
            {project.subtitle}
          </span>
        </div>

        {/* Visual Thumbnail */}
        {renderProjectVisual()}

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-visible:outline-none focus-visible:underline"
          >
            {project.title}
          </Link>
        </h3>

        {/* Tagline / Summary */}
        <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-1">
          {project.tagline}
        </p>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 sm:px-7 py-4 bg-slate-950/40 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors group/link"
        >
          <span>View Case Study</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-white px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 hover:border-slate-500 transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>View on GitHub</span>
            </a>
          ) : (
            <span
              title="Repository will be linked once pushed"
              className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800"
            >
              <Clock className="h-3 w-3" />
              <span>Repository coming soon</span>
            </span>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-sky-300 hover:text-white px-2.5 py-1 rounded-md bg-sky-950/40 border border-sky-500/30 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
