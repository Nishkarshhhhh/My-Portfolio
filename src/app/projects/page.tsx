import React from "react";
import { PROJECTS } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectList } from "@/components/projects/ProjectList";

export const metadata = {
  title: "Projects | Nishkarsh Varshney",
  description:
    "Engineering portfolio of Nishkarsh Varshney featuring distributed job scheduling, AI/ML DevOps research, NLP fake news classification, and full-stack web applications.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        label="Engineering Portfolio"
        title="Software Projects & Research"
        description="Production-grade distributed systems, applied machine learning pipelines, and full-stack architectures. Each project demonstrates practical engineering rigor and end-to-end implementation."
      />

      <ProjectList projects={PROJECTS} />
    </div>
  );
}
