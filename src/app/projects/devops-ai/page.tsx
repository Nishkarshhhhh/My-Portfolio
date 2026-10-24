import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Brain, Activity, Clock, ShieldCheck, Terminal, Layers } from "lucide-react";
import { PROJECTS, DEVELOPER_PROFILE } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "DevOpsAI Research | Nishkarsh Varshney",
  description:
    "An analytical research study evaluating predictive anomaly detection, time-series forecasting, and self-healing architectures in modern DevOps pipelines.",
};

export default function DevOpsAIPage() {
  const project = PROJECTS.find((p) => p.slug === "devops-ai");

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

      {/* Project Overview Header */}
      <div className="space-y-5 border-b border-white/[0.08] pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent" size="md">
            AI/ML Research
          </Badge>
          <Badge variant="default" size="md">
            SRM IST (2026)
          </Badge>
          <Badge variant="success" size="md">
            DevOps Automation
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
          <Button
            href="/contact"
            variant="primary"
            size="md"
          >
            Discuss Research
          </Button>

          <Button
            href={DEVELOPER_PROFILE.resumePath}
            external
            variant="secondary"
            size="md"
          >
            View on Resume
          </Button>
        </div>
      </div>

      {/* Research Methodology Visual Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-5 rounded-2xl border border-purple-500/20 bg-purple-950/10 space-y-2">
          <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Activity className="h-5 w-5" />
          </div>
          <h3 className="text-sm font-bold text-white">Anomaly Detection</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Evaluated Isolation Forest, LSTM, and XGBoost models on continuous pipeline telemetry to detect metric anomalies.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-sky-500/20 bg-sky-950/10 space-y-2">
          <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Clock className="h-5 w-5" />
          </div>
          <h3 className="text-sm font-bold text-white">Metric Forecasting</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Time-series forecasting with Prophet and ARIMA models to predict resource saturation and execution bottlenecks.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 space-y-2">
          <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="text-sm font-bold text-white">Autonomous Healing</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Explored policy-driven automated rollback and self-healing recovery using PPO-based reinforcement learning.
          </p>
        </div>
      </div>

      {/* Problem & Research Framework */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0c101b]/70 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            Operational Problem
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0c101b]/70 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Research Framework
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
            Technical & Analytical Methodology
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

      {/* Key Research Features */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Key Investigation Areas
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

      {/* Synthesis & Findings */}
      {project.resultsOrMetrics && (
        <section className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0c101b]/70 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            Analytical Findings & Synthesis
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
