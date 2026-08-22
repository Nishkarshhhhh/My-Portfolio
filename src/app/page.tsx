import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, ArrowRight, FileText, Terminal, Code2, Server } from "lucide-react";
import { DEVELOPER_PROFILE, PROJECTS, EXPERIENCES } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import HeroVisual from "@/components/home/HeroVisual";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SkillGroup } from "@/components/skills/SkillGroup";

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section className="space-y-6 pt-2 sm:pt-4">
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 md:gap-10">
          <div className="space-y-4 max-w-2xl flex-1">
            {/* Academic Profile Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/30 text-sky-300 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Computer Science &bull; SRMIST &bull; 9.40 CGPA</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {DEVELOPER_PROFILE.name}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-sky-400 font-mono">
              {DEVELOPER_PROFILE.title} | {DEVELOPER_PROFILE.focus}
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {DEVELOPER_PROFILE.headline}
            </p>

            {/* Primary Actions & Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href="/projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                View Projects
              </Button>
              <Button
                href="/resume.pdf"
                external
                variant="secondary"
                size="lg"
                icon={<FileText className="h-4 w-4 text-sky-400" />}
              >
                View Resume
              </Button>

              <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                <a
                  href={DEVELOPER_PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="h-10 w-10 flex items-center justify-center rounded-lg border border-white/[0.08] bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-500 transition-all"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={DEVELOPER_PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="h-10 w-10 flex items-center justify-center rounded-lg border border-white/[0.08] bg-slate-900/60 text-slate-300 hover:text-sky-300 hover:border-sky-500/40 transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="shrink-0 flex justify-center md:justify-end">
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-white border-2 border-sky-500/30 shadow-2xl shadow-sky-950/40 relative">
              <Image
                src="/profpic2.png"
                alt="Nishkarsh Varshney"
                width={224}
                height={224}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Technical Hero Architecture Flow Visual */}
        <HeroVisual />
      </section>

      {/* Featured Projects Spotlight */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            label="Featured Work"
            title="Selected Projects"
            description="Distributed queue systems, full-stack web applications, and machine learning pipelines built with practical engineering."
            className="mb-0"
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 shrink-0 group"
          >
            <span>All Projects ({PROJECTS.length})</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </section>

      {/* Experience & Core Focus Spotlight */}
      <section className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0e1422] to-[#090d15] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <Badge variant="accent" size="sm">
              Internship Experience
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Full Stack Web Development Intern at Labmentix
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Developed and integrated RESTful APIs using Node.js, Express.js, and Django. Optimized API response handling and frontend assets, achieving approximately a 20% reduction in page load time while improving application reliability.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {EXPERIENCES[0].technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900/90 text-slate-300 border border-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 justify-center">
            <Button
              href="/experience"
              variant="outline"
              size="lg"
              className="w-full justify-between"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              View Full Experience
            </Button>
            <Button
              href="/about"
              variant="ghost"
              size="lg"
              className="w-full justify-between text-slate-400 hover:text-white"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              About Nishkarsh
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Skill Groups */}
      <section className="space-y-8">
        <SectionHeading
          label="Technical Arsenal"
          title="Skills & Foundations"
          description="Languages, frameworks, database systems, and core computer science fundamentals."
        />
        <SkillGroup />
      </section>

      {/* Contact / Inquiries Callout */}
      <section className="p-8 sm:p-12 rounded-3xl border border-sky-500/20 bg-gradient-to-b from-[#0e1628]/80 to-[#090d16] text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/40 text-sky-300 font-mono text-xs">
          <Terminal className="h-3.5 w-3.5" />
          <span>Direct Contact</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Get in touch
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Open to software developer roles, backend engineering opportunities, and technical discussions.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button
            href={`mailto:${DEVELOPER_PROFILE.email}`}
            variant="primary"
            size="lg"
          >
            Email: {DEVELOPER_PROFILE.email}
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
          >
            Open Contact Page
          </Button>
        </div>
      </section>
    </div>
  );
}
