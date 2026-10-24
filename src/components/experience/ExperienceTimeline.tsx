import React from "react";
import { Briefcase, MapPin, Calendar, CheckCircle, GraduationCap } from "lucide-react";
import { EXPERIENCES, EDUCATION } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";

export function ExperienceTimeline() {
  return (
    <div className="space-y-12">
      {/* Work Experience */}
      <div>
        <div className="flex items-center gap-2.5 mb-6">
          <div className="h-8 w-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Briefcase className="h-4 w-4" />
          </div>
          <h3 className="text-xl font-bold text-white">Experience</h3>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-8">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full bg-[#080b11] border-2 border-sky-400 group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c101b]/70 backdrop-blur-md hover:border-slate-600 transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                        {exp.role}
                      </h4>
                      {exp.badge && (
                        <Badge
                          variant={exp.type === "research" ? "accent" : "default"}
                          size="sm"
                          className="text-[10px] uppercase tracking-wider font-mono py-0.5 px-2"
                        >
                          {exp.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-sky-400">
                      {exp.company}
                    </p>
                    {exp.projectTitle && (
                      <div className="pt-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                          Research Project:
                        </span>
                        <p className="text-sm font-medium text-slate-200 mt-0.5 leading-snug">
                          {exp.projectTitle}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-400 shrink-0 sm:pt-0.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 pt-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed"
                    >
                      <CheckCircle className="h-4 w-4 text-emerald-400/90 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center gap-2.5 mb-6">
          <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <GraduationCap className="h-4 w-4" />
          </div>
          <h3 className="text-xl font-bold text-white">Education</h3>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-6">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full bg-[#080b11] border-2 border-emerald-400 group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c101b]/70 backdrop-blur-md hover:border-slate-600 transition-all space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-emerald-400">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Badge variant="success" size="md">
                    CGPA: {edu.cgpa} / 10.0
                  </Badge>
                  <span className="text-xs text-slate-400">
                    Strong academic standing in Computer Science fundamentals
                  </span>
                </div>

                {edu.highlights && (
                  <ul className="space-y-2 pt-2 text-sm text-slate-300">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
