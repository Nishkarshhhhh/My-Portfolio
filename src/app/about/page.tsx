import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, ArrowRight, Terminal, GraduationCap, Code2, Server } from "lucide-react";
import { DEVELOPER_PROFILE } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillGroup } from "@/components/skills/SkillGroup";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "About | Nishkarsh Varshney",
  description:
    "Learn more about Nishkarsh Varshney, a Computer Science Engineering student at SRMIST focused on backend engineering, distributed systems, and full-stack software development.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Intro section */}
      <div className="space-y-8">
        <SectionHeading
          label="Profile"
          title="About Nishkarsh Varshney"
          description="Software Developer with a focus on backend systems, distributed architectures, and full-stack web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Narrative */}
          <div className="lg:col-span-2 space-y-5 text-slate-300 text-base leading-relaxed">
            <p>
              I am a Computer Science Engineering student at <strong className="text-white font-semibold">S.R.M. Institute of Science and Technology</strong> (2023–2027) with a <strong className="text-emerald-400 font-semibold">9.40 CGPA</strong>. My work focuses on software development, backend systems, and full-stack applications.
            </p>

            <p>
              During my internship as a <strong className="text-white font-semibold">Full Stack Web Development Intern at Labmentix</strong>, I developed and integrated RESTful APIs using Node.js, Express.js, and Django. I supported backend business logic and workflows, optimized API response handling and frontend assets to achieve an approximate 20% reduction in page load time, and resolved functional and performance bottlenecks.
            </p>

            <p>
              My projects demonstrate practical experience with distributed job processing, databases, Docker, full-stack e-commerce systems, and machine learning. I enjoy writing clean, maintainable code and solving real engineering problems.
            </p>
          </div>

          {/* Quick Facts Card */}
          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c101b]/80 backdrop-blur-md space-y-6 h-fit">
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Quick Facts
              </h3>

              <div className="space-y-3 text-xs font-mono text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Location</span>
                  <span>{DEVELOPER_PROFILE.location}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Education</span>
                  <span>B.Tech CSE (2023–27)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Institution</span>
                  <span className="text-right">SRMIST</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Academic CGPA</span>
                  <span className="text-emerald-400 font-bold">9.40 / 10.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Primary Focus</span>
                  <span>Backend & Full-Stack</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/[0.06] space-y-2">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="w-full justify-center"
              >
                Get in Touch
              </Button>
              <Button
                href="/resume.pdf"
                external
                variant="outline"
                size="sm"
                className="w-full justify-center text-sky-400 border-sky-500/30"
              >
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Technical Arsenal */}
      <div className="space-y-8">
        <SectionHeading
          label="Technical Competencies"
          title="Skills & Core Domains"
          description="Languages, frameworks, databases, and foundational computer science principles."
        />
        <SkillGroup />
      </div>
    </div>
  );
}
