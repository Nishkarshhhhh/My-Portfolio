import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Github, ArrowLeft, CheckCircle2, Binary, Clock, BarChart3, Terminal } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Fake News Detection | Nishkarsh Varshney",
  description:
    "An NLP and machine learning classifier trained on 44,000+ news articles with Scikit-learn Logistic Regression achieving ~98.6% prediction accuracy.",
};

export default function FakeNewsDetectionPage() {
  const project = PROJECTS.find((p) => p.slug === "fake-news-detection");

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
            Machine Learning & NLP
          </Badge>
          <Badge variant="success" size="md">
            98.6% Accuracy &bull; 98.6% F1
          </Badge>
          <Badge variant="default" size="md">
            44,898 Labeled Articles
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
          {project.githubUrl ? (
            <Button
              href={project.githubUrl}
              external
              variant="primary"
              size="md"
              icon={<Github className="h-4 w-4" />}
            >
              View on GitHub
            </Button>
          ) : (
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300">
              <Clock className="h-3.5 w-3.5 text-sky-400" />
              <span>Repository coming soon</span>
            </div>
          )}

          <Button
            href="/contact"
            variant="outline"
            size="md"
          >
            Contact Developer
          </Button>
        </div>
      </div>

      {/* Accuracy & Dataset Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl border border-sky-500/20 bg-[#0e1626]/70 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl font-extrabold text-white tracking-tight font-mono">
              98.6%
            </span>
            <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <BarChart3 className="h-5 w-5" />
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-sky-400 font-semibold">
              Logistic Regression
            </p>
            <p className="text-xs text-slate-400 mt-1">
              98.4% Precision &bull; 98.8% Recall &bull; 98.6% F1-Score on 80/20 test split.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-emerald-500/20 bg-[#0e1f1c]/70 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl font-extrabold text-white tracking-tight font-mono">
              44,898
            </span>
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Binary className="h-5 w-5" />
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-emerald-400 font-semibold">
              Labeled Articles Corpus
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Preprocessed with NLTK tokenization, stopword removal, and Porter stemming.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-purple-500/20 bg-[#160e26]/70 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl font-extrabold text-white tracking-tight font-mono">
              10,000
            </span>
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Terminal className="h-5 w-5" />
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-purple-400 font-semibold">
              CountVectorizer Matrix
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Engineered high-dimensional feature representations for classifier comparison.
            </p>
          </div>
        </div>
      </div>

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

      {/* Results */}
      {project.resultsOrMetrics && (
        <section className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0c101b]/70 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            Results
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
