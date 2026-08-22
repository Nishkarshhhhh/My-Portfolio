import React from "react";
import { PROJECTS } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Layers } from "lucide-react";

export const metadata = {
  title: "Projects | Nishkarsh Varshney",
  description:
    "Software projects in distributed job scheduling, full-stack e-commerce systems, and machine learning NLP classification by Nishkarsh Varshney.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        label="Engineering Work"
        title="Software Projects"
        description="A showcase of backend systems, full-stack applications, and machine learning pipelines. Each project represents practical architectural problem-solving and software engineering."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Engineering Principles Card */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0c101b]/70 backdrop-blur-md">
        <div className="flex items-center gap-2.5 mb-3">
          <Layers className="h-5 w-5 text-sky-400" />
          <h3 className="text-base font-bold text-white">Engineering Approach</h3>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          Projects focus on backend systems, full-stack applications, API design, database integration, and practical software engineering.
        </p>
      </div>
    </div>
  );
}
