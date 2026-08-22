import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

export const metadata = {
  title: "Experience & Education | Nishkarsh Varshney",
  description:
    "Professional software development experience at Labmentix and academic record at S.R.M. Institute of Science and Technology.",
};

export default function ExperiencePage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        label="Background"
        title="Experience & Education"
        description="A timeline of industry internship experience, software contributions, and rigorous computer science academic foundations."
      />

      <ExperienceTimeline />
    </div>
  );
}
